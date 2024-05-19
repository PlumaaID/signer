import {
  Address,
  Client,
  Hex,
  concatHex,
  encodeAbiParameters,
  getContract,
  getContractAddress,
  keccak256,
} from "viem";
import RSASignerFactoryABI from "./artifacts/RSASignerFactory";
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
export const factory: Address = "0xd6dA52A1Ad12618c7228920003EAF39f37F5d693";
export const implementation: Address =
  "0x832641fC286F331D01d482151217F9D381a1f0f6"; // Deployed along with the factory

function getRSASignerFactory<TClient extends Client>(client: TClient) {
  return getContract({
    address: factory,
    abi: RSASignerFactoryABI.abi,
    client,
  });
}

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

export { with0x, without0x, getRSASignerFactory, predictRSASignerAddress };
