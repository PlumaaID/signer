// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {BaseTest} from "./Base.t.sol";
import {RSASigner} from "~/RSASigner.sol";

contract RSASignerTest is BaseTest {
    RSASigner signer;

    bytes4 internal constant EIP1271_MAGIC_VALUE = 0x20c13b0b;

    modifier whenCreatingWithTheFactory(
        RSASigner.PublicKey memory ownerPublicKey,
        bytes32 salt
    ) {
        address clone = factory.createDeterministic(ownerPublicKey, salt);
        signer = RSASigner(clone);
        _;
    }

    /// @notice it sets the RSA public key owner because it is just created
    function test_GivenANewRSASignerCreated(
        RSASigner.PublicKey memory ownerPublicKey,
        bytes32 salt
    ) external whenCreatingWithTheFactory(ownerPublicKey, salt) {
        RSASigner.PublicKey memory setPublicKey = signer.publicKey();

        assertEq(setPublicKey.exponent, ownerPublicKey.exponent);
        assertEq(setPublicKey.modulus, ownerPublicKey.modulus);
    }

    bytes32 sha256Digest;

    modifier whenValidatingASha256DigestedMessageWithIsValidSignature(
        bytes memory message,
        bytes32 salt
    ) {
        address clone = factory.createDeterministic(owner.publicKey(), salt);
        signer = RSASigner(clone);
        sha256Digest = sha256(message);
        _;
    }

    /// @notice it returns `bytes4(0)` because the sha256 digest signature is invalid
    function test_GivenAnInvalidSha256Signature(
        bytes memory message,
        bytes memory signature,
        bytes32 salt
    )
        external
        whenValidatingASha256DigestedMessageWithIsValidSignature(message, salt)
    {
        bytes4 result = signer.isValidSignature(sha256Digest, signature);
        assertEq(result, bytes4(0));
    }

    /// @notice it returns `bytes4(0)` because the owner did not sign the sha256 digest
    function test_GivenASha256DigestAndASignatureOfAnotherPublicKey(
        bytes memory message,
        bytes32 salt
    )
        external
        whenValidatingASha256DigestedMessageWithIsValidSignature(message, salt)
    {
        bytes memory pcks1Sha256Signature = other.sign(message);
        bytes4 result = signer.isValidSignature(
            sha256Digest,
            _suffixed(pcks1Sha256Signature, false)
        );
        assertEq(result, bytes4(0));
    }

    /// @notice it returns `isValidSignature.selector` because the owner signed the sha256 digest
    function test_GivenASha256DigestAndASignatureOfTheOwner(
        bytes memory message,
        bytes32 salt
    )
        external
        whenValidatingASha256DigestedMessageWithIsValidSignature(message, salt)
    {
        bytes memory pcks1Sha256Signature = owner.sign(message);
        bytes4 result = signer.isValidSignature(
            sha256Digest,
            _suffixed(pcks1Sha256Signature, false)
        );
        assertEq(result, EIP1271_MAGIC_VALUE);
    }

    bytes32 keccak256Digest;

    modifier whenValidatingANormalizedKeccak256DigestedMessageWithIsValidSignature(
        bytes memory message,
        bytes32 salt
    ) {
        address clone = factory.createDeterministic(owner.publicKey(), salt);
        signer = RSASigner(clone);
        keccak256Digest = keccak256(message);
        _;
    }

    /// @notice it returns `bytes4(0)` because the normalized keccak256 digest signature invalid
    function test_GivenAnInvalidNormalizedKeccak256Signature(
        bytes memory signature,
        bytes memory message,
        bytes32 salt
    )
        external
        whenValidatingANormalizedKeccak256DigestedMessageWithIsValidSignature(
            message,
            salt
        )
    {
        bytes4 result = signer.isValidSignature(keccak256Digest, signature);
        assertEq(result, bytes4(0));
    }

    /// @notice it returns `bytes4(0)` because the owner did not sign the normalized keccak256 digest
    function test_GivenANormalizedKeccak256DigestAndASignatureOfAnotherPublicKey(
        bytes memory message,
        bytes32 salt
    )
        external
        whenValidatingANormalizedKeccak256DigestedMessageWithIsValidSignature(
            message,
            salt
        )
    {
        bytes memory pcks1Sha256Signature = other.sign(
            abi.encode(keccak256Digest)
        );
        bytes4 result = signer.isValidSignature(
            keccak256Digest,
            _suffixed(pcks1Sha256Signature, true)
        );
        assertEq(result, bytes4(0));
    }

    /// @notice it returns `isValidSignature.selector` because the owner signed the normalized keccak256 digest
    function test_GivenANormalizedKeccak256DigestAndASignatureOfTheOwner(
        bytes memory message,
        bytes32 salt
    )
        external
        whenValidatingANormalizedKeccak256DigestedMessageWithIsValidSignature(
            message,
            salt
        )
    {
        bytes memory pcks1Sha256Signature = owner.sign(
            abi.encode(keccak256Digest)
        );
        bytes4 result = signer.isValidSignature(
            keccak256Digest,
            _suffixed(pcks1Sha256Signature, true)
        );
        assertEq(result, EIP1271_MAGIC_VALUE);
    }

    function _suffixed(
        bytes memory pkcs1Sha256Signature,
        bool normalize
    ) private pure returns (bytes memory) {
        return abi.encodePacked(pkcs1Sha256Signature, normalize);
    }
}
