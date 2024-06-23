import {
  Address,
  Hex,
  concatHex,
  encodeAbiParameters,
  getContractAddress,
  keccak256,
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
export const factory: Address = "0xaf27bF6704823bc70639d7DC0702B59133DBd682";
export const implementation: Address =
  "0xb1bc074e0b00265113bb1e5d4ab4da20b15c755a"; // Deployed along with the factory

function predictRSASignerAddress(publicKey: pki.rsa.PublicKey) {
  const publicKeyAbi = [
    {
      type: "tuple",
      components: [
        { name: "exponent", type: "bytes" },
        { name: "modulus", type: "bytes" },
      ],
    },
  ] as const;
  return getContractAddress({
    // According to EIP-1167
    bytecode: concatHex([
      "0x3d602d80600a3d3981f3363d3d373d3d3d363d73",
      implementation,
      "0x5af43d82803e903d91602b57fd5bf3",
    ]),
    from: factory,
    opcode: "CREATE2",
    salt: keccak256(
      encodeAbiParameters(publicKeyAbi, [
        {
          exponent: with0x(publicKey.e.toString(16)),
          modulus: with0x(publicKey.n.toString(16)),
        },
      ]),
      "bytes"
    ),
  });
}

export {
  with0x,
  without0x,
  predictRSASignerAddress,
  RSASignerFactoryArtifact,
  RSASignerArtifact,
};
