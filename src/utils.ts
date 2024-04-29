import { Address, Client, Hex, getContract } from "viem";
import RSASignerFactoryABI from "./abi/RSASignerFactory";

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
export const factory: Address = "0x9E80C66dA41c04e6125266CfD52D1F2b6AfC547d";

function getRSASignerFactory<TClient extends Client>(client: TClient) {
  return getContract({
    address: factory,
    abi: RSASignerFactoryABI,
    client,
  });
}

export { with0x, without0x, getRSASignerFactory };
