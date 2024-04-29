import { isHex } from "viem";
import { with0x, without0x } from "./utils";
import { testProp, fc } from "@fast-check/ava";

testProp(
  "with0x produces a 0x-prefixed string",
  [fc.hexaString()],
  (t, hexString) => {
    const with0xHexString = with0x(hexString);
    t.is(with0xHexString.slice(0, 2), "0x");
    t.assert(isHex(with0xHexString));
    t.assert(with0xHexString.length % 2 === 0);
  }
);

testProp(
  "without0x produces a string without 0x prefix",
  [fc.hexaString()],
  (t, hexString) => {
    const without0xHexString = without0x(hexString);
    t.not(without0xHexString.slice(0, 2), "0x");
    t.assert(isHex("0x" + without0xHexString));
    t.assert(without0xHexString.length % 2 === 0);
  }
);
