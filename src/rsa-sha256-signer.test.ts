import { predictRSASignerAddress, with0x, without0x } from "./utils";
import { testProp, fc } from "@fast-check/ava";
import { md, pki, util } from "node-forge";
import { RSASHA256Signer } from "./";
import { hashMessage, hashTypedData, slice, toHex } from "viem";

const RSAEOA = fc.gen().map(() => {
  const owner = pki.rsa.generateKeyPair(2048);
  return {
    signer: new RSASHA256Signer(owner),
    owner,
  };
});

const addressArbitrary = fc.hexaString({
  minLength: 40,
  maxLength: 40,
});

testProp("#address is set at construction", [RSAEOA], (t, rsaEOA) => {
  t.is(
    rsaEOA.signer.address,
    predictRSASignerAddress(rsaEOA.signer.rsaPublicKey)
  );
});

testProp(
  '#publicKey is the concatenation of "e" and "n"',
  [RSAEOA],
  (t, { signer, owner }) => {
    const publicKey = owner.publicKey;
    t.is(
      without0x(signer.publicKey),
      without0x(with0x(publicKey.e.toString(16) + publicKey.n.toString(16)))
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

    const keccak256Digest = util.hexToBytes(
      without0x(hashMessage(toHex(message)))
    );
    const digest = md.sha256
      .create()
      .update(keccak256Digest, "raw")
      .digest()
      .bytes();

    const signatureBytesLength = util.hexToBytes(without0x(signature)).length;
    const pkcs1Sha256Signature = util.hexToBytes(
      without0x(slice(signature, 0, signatureBytesLength - 1))
    );

    t.assert(owner.publicKey.verify(digest, pkcs1Sha256Signature));
  }
);

testProp(
  "#signMessage signs arbitrary raw string messages",
  [RSAEOA, fc.hexaString()],
  async (t, { signer, owner }, raw) => {
    const signature = await signer.signMessage({
      message: {
        raw: with0x(raw),
      },
    });

    const keccak256Digest = util.hexToBytes(
      without0x(hashMessage(with0x(raw)))
    );
    const digest = md.sha256
      .create()
      .update(keccak256Digest, "raw")
      .digest()
      .bytes();

    const signatureBytesLength = util.hexToBytes(without0x(signature)).length;
    const pkcs1Sha256Signature = util.hexToBytes(
      without0x(slice(signature, 0, signatureBytesLength - 1))
    );

    t.assert(owner.publicKey.verify(digest, pkcs1Sha256Signature));
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

    const keccak256Digest = util.hexToBytes(without0x(hashMessage(toHex(raw))));
    const digest = md.sha256
      .create()
      .update(keccak256Digest, "raw")
      .digest()
      .bytes();

    const signatureBytesLength = util.hexToBytes(without0x(signature)).length;
    const pkcs1Sha256Signature = util.hexToBytes(
      without0x(slice(signature, 0, signatureBytesLength - 1))
    );

    t.assert(owner.publicKey.verify(digest, pkcs1Sha256Signature));
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
      verifyingContract: addressArbitrary,
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
      verifyingContract: addressArbitrary,
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

    const keccak256Digest = util.hexToBytes(
      without0x(
        hashTypedData({
          domain,
          types,
          message,
          primaryType: "Example",
        })
      )
    );

    const digest = md.sha256
      .create()
      .update(keccak256Digest, "raw")
      .digest()
      .bytes();

    const signatureBytesLength = util.hexToBytes(without0x(signature)).length;
    const pkcs1Sha256Signature = util.hexToBytes(
      without0x(slice(signature, 0, signatureBytesLength - 1))
    );

    t.assert(owner.publicKey.verify(digest, pkcs1Sha256Signature));
  }
);
