import { Hex } from "viem";

function with0x(str: string): Hex {
  return `0x${without0x(str)}`;
}

function without0x(str: string): string {
  if (!str) return str;
  return str.replace(/^0x/, "");
}

export { with0x, without0x };
