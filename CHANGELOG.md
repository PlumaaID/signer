# Changelog

## v1.0.1

- Avoid installing unnecesary dependencies, particularly those affecting installation in React native where the Node standard library is not available.

## v1.0.0

- Added `RSASHA256SafeSigner` as an extension of `RSASHA256Signer` for signing Safe{Wallet} messages.
- Added `RSASHA256Signer` that implements the `SmartAccountSigner` interface.
