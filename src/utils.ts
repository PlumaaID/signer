import { Address, Client, Hex, getContract } from "viem";
import RSASignerFactoryABI from "./abi/RSASignerFactory";

function with0x(str: string): Hex {
  return `0x${without0x(str)}`;
}

function without0x(str: string): string {
  if (!str) return str;
  return str.replace(/^0x/, "");
}

// Universal RSASigner factory contract address
export const factory: Address = "0x0884D00bC0a7f86632b80bccFa43ec872a9961D3";

function getRSASignerFactory<TClient extends Client>(client: TClient) {
  return getContract({
    address: factory,
    abi: RSASignerFactoryABI,
    client,
  });
}

export { with0x, without0x, getRSASignerFactory };
