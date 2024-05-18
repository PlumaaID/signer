# `@plumaa/signer`

**A Javascript library with Ethereum operations signing utilities for RSA keypairs**

[![NPM Package](https://img.shields.io/npm/v/@plumaa/signer.svg)](https://www.npmjs.org/package/@plumaa/signer)
[![Coverage](https://codecov.io/github/OpenZeppelin/merkle-tree/branch/master/graph/badge.svg?token=1JMTIEYRZK)](https://codecov.io/github/PlumaaID/plumaa-signer)

## Quick Start

```
npm install @plumaa/signer
```

## RSASHA256Signer

The `RSASHA256Signer` is an implementation of the [permissionless](https://docs.pimlico.io/permissionless/how-to/signers)'s SmartAccountSigner interface that uses [node-forge](https://www.npmjs.com/package/node-forge) for operating with RSA keypairs.

### Usage

To create a signer:

```typescript
import { RSASHA256Signer } from "@plumaa/signer";
import { pki, md } from "node-forge";

// 1. Generate a new RSA keypair or load an existing one
const keypair = pki.rsa.generateKeyPair(2048);

// 2. Create a signer with the keypair
const signer = new RSASHA256Signer(keypair);

/// ...
```

For signing raw messages:

```typescript
// 3. Sign a message
const message = "Hello, world!";
const signature = await signer.signMessage({ message });

// 4. Verify the signature
const isValid = keypair.publicKey.verify(
  signature,
  md.create().update(message).digest().bytes()
);

assert(isValid); // true
```

Alternatively, for [EIP-712](https://eips.ethereum.org/EIPS/eip-712) messages:

```typescript
const domain = {
  // ...
};

const types = {
  Example: [
    // ...
  ],
};

const message = {
  // ...
};

// 3. Sign a typed message
const signature = await signer.signTypedData({
  domain,
  types,
  message,
  primaryType: "Example",
});

// 4. Verify the signature
const isValid = keypair.publicKey.verify(
  signature,
  md.create().update(message).digest().bytes()
);

assert(isValid); // true
```

## RSASHA256SafeSigner

A variant of `RSASHA256Signer` that signs messages as a Safe owner, which has a different signature format with a static prefix followed by a dynamic part where the signature is stored.
