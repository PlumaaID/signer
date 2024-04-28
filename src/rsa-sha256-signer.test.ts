import { with0x, without0x } from "./utils";
import { testProp, fc } from "@fast-check/ava";
import { md, pki, util } from "node-forge";
import { RSASHA256Signer } from "./";
import { TypedDataEncoder } from "ethers";

const RSAEOA = fc.gen().map(() => {
  const owner = pki.rsa.generateKeyPair(2048);
  return {
    signer: new RSASHA256Signer(
      owner,
      "0x0000000000000000000000000000000000000000"
    ),
    owner,
  };
});

testProp('#address is "0x"', [RSAEOA], (t, { signer }) => {
  t.is(signer.address, "0x0000000000000000000000000000000000000000");
});

testProp(
  '#publicKey is the concatenation of "e" and "n"',
  [RSAEOA],
  (t, { signer, owner }) => {
    const publicKey = owner.publicKey;
    t.is(
      without0x(signer.publicKey),
      without0x(publicKey.e.toString(16) + publicKey.n.toString(16))
    );
  }
);

testProp(
  "#rsaPublicKey is the public key",
  [RSAEOA],
  (t, { signer, owner }) => {
    const publicKey = owner.publicKey;
    t.is(publicKey, signer.rsaPublicKey);
  }
);

testProp("#source is 'custom'", [RSAEOA], (t, { signer }) => {
  t.is(signer.source, "custom");
});

testProp("#type is 'local'", [RSAEOA], (t, { signer }) => {
  t.is(signer.type, "local");
});

testProp(
  "#signMessage signs arbitrary string messages",
  [RSAEOA, fc.string()],
  async (t, { signer, owner }, message) => {
    const signature = await signer.signMessage({ message });
    const digest = md.sha256.create().update(message, "utf8").digest().bytes();
    t.assert(
      owner.publicKey.verify(digest, util.hexToBytes(without0x(signature)))
    );
  }
);

testProp(
  "#signMessage signs arbitrary raw hex messages",
  [RSAEOA, fc.hexaString()],
  async (t, { signer, owner }, raw) => {
    const signature = await signer.signMessage({
      message: {
        raw: with0x(raw),
      },
    });
    const digest = md.sha256
      .create()
      .update(util.hexToBytes(without0x(raw)), "raw")
      .digest()
      .bytes();
    t.assert(
      owner.publicKey.verify(digest, util.hexToBytes(without0x(signature)))
    );
  }
);

testProp(
  "#signMessage signs arbitrary raw Uint8Array messages",
  [RSAEOA, fc.uint8Array()],
  async (t, { signer, owner }, raw) => {
    const signature = await signer.signMessage({
      message: {
        raw,
      },
    });
    const digest = md.sha256
      .create()
      .update(util.createBuffer(raw).bytes(), "raw")
      .digest()
      .bytes();
    t.assert(
      owner.publicKey.verify(digest, util.hexToBytes(without0x(signature)))
    );
  }
);

testProp(
  "#signTypedData signs arbitrary typed data",
  [
    RSAEOA,
    fc.record({
      name: fc.constant("Example"),
      version: fc.hexaString({
        minLength: 1,
        maxLength: 6,
      }),
      chainId: fc.integer({
        min: 1,
      }),
      verifyingContract: fc.hexaString({
        minLength: 40,
        maxLength: 40,
      }),
    }),
    fc.record({
      name: fc.constant("Example"),
      version: fc.hexaString({
        minLength: 1,
        maxLength: 6,
      }),
      chainId: fc.integer({
        min: 1,
      }),
      verifyingContract: fc.hexaString({
        minLength: 40,
        maxLength: 40,
      }),
    }),
  ],
  async (t, { signer, owner }, d, m) => {
    const types = {
      Example: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
    };

    const domain = {
      ...d,
      verifyingContract: with0x(d.verifyingContract),
    };
    const message = {
      ...m,
      verifyingContract: with0x(m.verifyingContract),
    };

    const signature = await signer.signTypedData({
      domain,
      types,
      message,
      primaryType: "Example",
    });

    const digest = md.sha256.create();
    digest.update(
      util.hexToBytes(
        without0x(TypedDataEncoder.encode(domain, types, message))
      ),
      "raw"
    );
    t.assert(
      owner.publicKey.verify(
        digest.digest().bytes(),
        util.hexToBytes(without0x(signature))
      )
    );
  }
);
