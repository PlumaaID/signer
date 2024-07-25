import {
  Address,
  Hex,
  concatHex,
  encodeAbiParameters,
  getContractAddress,
  keccak256,
  size,
  toHex,
} from "viem";
import RSASignerFactoryArtifact from "./artifacts/RSASignerFactory";
import RSASignerArtifact from "./artifacts/RSASigner";
import { pki } from "node-forge";

function with0x(str: string): Hex {
  const without0xStr = without0x(str);
  return `0x${
    without0xStr.length % 2 === 0 ? without0xStr : `0${without0xStr}`
  }`;
}

function without0x(str: string): string {
  if (!str) return str;
  return str.replace(/^0x/, "");
}

// Universal RSASigner factory contract address
export const factory: Address = "0x0046CBAdF1ac31Ccc4d94CF0815Ad0FA1587a7Aa";
export const implementation: Address =
  "0xd0038192b98ce2c7fd13e099e72ee07d78dab7f7"; // Deployed along with the factory

function predictRSASignerAddress(
  publicKey: pki.rsa.PublicKey,
  salt?: Hex
): Address {
  const publicKeyAbi = [
    {
      type: "tuple",
      components: [
        { name: "exponent", type: "bytes" },
        { name: "modulus", type: "bytes" },
      ],
    },
  ] as const;

  const args = encodeAbiParameters(publicKeyAbi, [
    {
      exponent: with0x(publicKey.e.toString(16)),
      modulus: with0x(publicKey.n.toString(16)),
    },
  ]);

  const runSize = 45 + size(args);
  const offset = 0x0a; // 10 bytes

  return getContractAddress({
    // According to EIP-1167
    bytecode: concatHex([
      // ---------------------------------------------------------------------------+
      // CREATION (10 bytes)                                                        |
      // ---------------------------------------------------------------------------|
      // Opcode     | Mnemonic          | Stack     | Memory                        |
      // ---------------------------------------------------------------------------|
      // 61 runSize | PUSH2 runSize     | r         |                               |
      "0x61",
      toHex(runSize),
      // 3d         | RETURNDATASIZE    | 0 r       |                               |
      // 81         | DUP2              | r 0 r     |                               |
      // 60 offset  | PUSH1 offset      | o r 0 r   |                               |
      "0x3d8160",
      toHex(offset),
      // 3d         | RETURNDATASIZE    | 0 o r 0 r |                               |
      // 39         | CODECOPY          | 0 r       | [0..runSize): runtime code    |
      // f3         | RETURN            |           | [0..runSize): runtime code    |
      // ---------------------------------------------------------------------------|
      "0x3d39f3",
      // ---------------------------------------------------------------------------|
      // RUNTIME (45 bytes + extraLength)                                           |
      // ---------------------------------------------------------------------------|
      // Opcode   | Mnemonic       | Stack                  | Memory                |
      // ---------------------------------------------------------------------------|
      //                                                                            |
      // ::: copy calldata to memory :::::::::::::::::::::::::::::::::::::::::::::: |
      // 36       | CALLDATASIZE   | cds                    |                       |
      // 3d       | RETURNDATASIZE | 0 cds                  |                       |
      // 3d       | RETURNDATASIZE | 0 0 cds                |                       |
      // 37       | CALLDATACOPY   |                        | [0..cds): calldata    |
      //                                                                            |
      // ::: delegate call to the implementation contract ::::::::::::::::::::::::: |
      // 3d       | RETURNDATASIZE | 0                      | [0..cds): calldata    |
      // 3d       | RETURNDATASIZE | 0 0                    | [0..cds): calldata    |
      // 3d       | RETURNDATASIZE | 0 0 0                  | [0..cds): calldata    |
      // 36       | CALLDATASIZE   | cds 0 0 0              | [0..cds): calldata    |
      // 3d       | RETURNDATASIZE | 0 cds 0 0 0 0          | [0..cds): calldata    |
      // 73 addr  | PUSH20 addr    | addr 0 cds 0 0 0 0     | [0..cds): calldata    |
      "0x363d3d373d3d3673",
      implementation,
      // 5a       | GAS            | gas addr 0 cds 0 0 0 0 | [0..cds): calldata    |
      // f4       | DELEGATECALL   | success 0 0            | [0..cds): calldata    |
      //                                                                            |
      // ::: copy return data to memory ::::::::::::::::::::::::::::::::::::::::::: |
      // 3d       | RETURNDATASIZE | rds success 0          | [0..cds): calldata    |
      // 82       | DUP3           | 0 rds success 0         | [0..cds): calldata   |
      // 80       | DUP1           | 0 0 rds success 0      | [0..cds): calldata    |
      // 3e       | RETURNDATACOPY | success 0              | [0..rds): returndata  |
      // 90       | SWAP1          | 0 success              | [0..rds): returndata  |
      // 3d       | RETURNDATASIZE | rds 0 success          | [0..rds): returndata  |
      // 91       | SWAP2          | success 0 rds          | [0..rds): returndata  |
      //                                                                            |
      // 60 0x2b  | PUSH1 0x2b     | 0x2b success 0 rds     | [0..rds): returndata  |
      // 57       | JUMPI          | 0 rds                  | [0..rds): returndata  |
      //                                                                            |
      // ::: revert ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: |
      // fd       | REVERT         |                        | [0..rds): returndata  |
      //                                                                            |
      // ::: return ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: |
      // 5b       | JUMPDEST       | 0 rds                  | [0..rds): returndata  |
      // f3       | RETURN         |                        | [0..rds): returndata  |
      // ---------------------------------------------------------------------------+
      "0x5af43d82803e903d91602b57fd5bf3",
      args,
    ]),
    from: factory,
    opcode: "CREATE2",
    salt: salt ?? keccak256(toHex("plumaa.id")),
  });
}

export {
  with0x,
  without0x,
  predictRSASignerAddress,
  RSASignerFactoryArtifact,
  RSASignerArtifact,
};
