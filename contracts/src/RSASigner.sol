// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Initializable} from "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";
import {RSA} from "./unreleased/RSA.sol";

/// @title Plumaa - An RSA SHA256 PKCS1.5 enabler contract.
///
/// It allows an RSA public key to have an Ethereum address and sign operations. Useful for setting
/// this contract as the owner of a multisig, among other things.
///
/// A notable example of RSA signatures in real-world applications are the government-issued digital certificates.
contract RSASigner is Initializable, IERC1271 {
    using RSA for bytes32;

    struct PublicKey {
        bytes exponent;
        bytes modulus;
    }

    struct RSASignerStorage {
        PublicKey publicKey;
    }

    // keccak256(abi.encode(uint256(keccak256("plumaa.storage.RSAOwnerManager")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 internal constant RSA_SIGNER_STORAGE_LOCATION =
        0xb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b500;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /// @notice Initializes the contract with an RSA owner
    /// @param owner The RSA public key of the owner
    function initialize(PublicKey calldata owner) external initializer {
        _getRSASignerStorage().publicKey = owner;
    }

    /// @notice Returns the signer's public key
    function publicKey() public view returns (PublicKey memory) {
        return _getRSASignerStorage().publicKey;
    }

    /// @notice Checks if the provided signature is valid for the sha256 hash.
    function isValidSignature(
        bytes32 sha256Digest,
        bytes memory signature
    ) external view returns (bytes4) {
        return
            _verifyRSAOwner(sha256Digest, signature)
                ? this.isValidSignature.selector
                : bytes4(0);
    }

    /// @notice Returns true if the provided signature is valid for the digest and owner's public key
    /// @param sha256Digest The digest to verify
    /// @param signature The signature to verify
    function _verifyRSAOwner(
        bytes32 sha256Digest,
        bytes memory signature
    ) internal view returns (bool) {
        PublicKey memory pubKey = publicKey();
        return
            sha256Digest.pkcs1Sha256(
                signature,
                pubKey.exponent,
                pubKey.modulus
            );
    }

    /// @notice Get EIP-7201 storage
    function _getRSASignerStorage()
        private
        pure
        returns (RSASignerStorage storage $)
    {
        assembly ("memory-safe") {
            $.slot := RSA_SIGNER_STORAGE_LOCATION
        }
    }
}
