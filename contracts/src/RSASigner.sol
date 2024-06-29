// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Initializable} from "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";
import {RSA} from "./unreleased/cryptography/RSA.sol";

/// @title Plumaa - An RSA SHA256 PKCS1.5 enabler contract.
///
/// It allows an RSA public key to have an Ethereum address and sign operations.
/// A notable example of RSA signatures in real-world applications are the government-issued digital certificates.
/// Useful for setting this contract as the owner of a multisig, among other things.
///
/// NOTE: This contract uses a custom signature format with a suffix flag for normalization of keccak256 digests.
/// See `isValidSignature`.
///
/// @author Ernesto García
contract RSASigner is Initializable, IERC1271 {
    using RSA for bytes32;

    // bytes4(keccak256("isValidSignature(bytes,bytes)")
    bytes4 internal constant EIP1271_MAGIC_VALUE = 0x20c13b0b;

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
    ///
    /// Given the popularity of keccak256 in EVM contracts, most calls to this function will send a keccak256 digest.
    /// A custom signature format is used to allow for normalizing the digest before verifying it.
    /// Normalizing the digest means that it's hashed again with sha256 so it's compatible with RSA PKCS1.5 validation.
    /// Off-chain signers are not adapted for non-standard digests, so they can be adapted by passing the
    /// keccak256 as the message to sign.
    ///
    /// The custom format is `SSSSSSSSS...SSSSSSSSSSSSSN`, where:
    ///
    /// - `S` is the PKCS1.5 SHA256 signature (0x01 - 0x..)
    /// - `N` is the normalization boolean byte (0x00) (if true, the digest is hashed again with sha256)
    ///
    /// The setup is cryptographically secure assuming both keccak256 and sha256 are secure cryptographic hashing functions,
    /// which is a reasonable assumption given their trust in the Ethereum community for keccak256 and the
    /// standardization of sha256 in government certificates.
    function isValidSignature(
        bytes32 digest,
        bytes memory signature
    ) external view returns (bytes4) {
        return
            _verifyRSAOwner(digest, signature)
                ? EIP1271_MAGIC_VALUE
                : bytes4(0);
    }

    /**
     * @notice Legacy EIP1271 method to validate a signature.
     * Assumes signature corresponds to the keccak256 digest of the data.
     */
    function isValidSignature(
        bytes memory _data,
        bytes memory _signature
    ) public view virtual returns (bytes4) {
        return this.isValidSignature(keccak256(_data), _signature);
    }

    /// @notice Returns true if the provided signature is valid for the digest and owner's public key
    /// @param digest The digest to verify
    /// @param signature Normalization suffixed PKCS1.5 SHA256 signature
    function _verifyRSAOwner(
        bytes32 digest,
        bytes memory signature
    ) internal view returns (bool) {
        PublicKey memory pubKey = publicKey();

        (bool normalize, bytes memory pkcs1Sha256Signature) = _splitSignature(
            signature
        );

        if (normalize) {
            digest = sha256(abi.encode(digest));
        }

        return
            digest.pkcs1(pkcs1Sha256Signature, pubKey.exponent, pubKey.modulus);
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

    function _splitSignature(
        bytes memory signature
    ) private pure returns (bool normalize, bytes memory pkcs1Sha256Signature) {
        assembly ("memory-safe") {
            // Cache length
            let length := mload(signature)
            // Equivalent to: normalize := signature[length - 1]
            normalize := mload(add(signature, sub(add(0x20, length), 1)))
            // Adjust length to exclude the normalization flag
            mstore(signature, sub(length, 1))
            // Point the pkcs1Sha256Signature to the start of the signature with adjusted length
            pkcs1Sha256Signature := signature
        }
    }
}
