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
export const factory: Address = "0x00fff957d5b33c6e6b568df1d5d9e017f509e6aa";
export const implementation: Address =
  "0xa6251a85d5c24e3c3f28a2e8f4ae3fbd11cdbbc7"; // Deployed along with the factory

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
