// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {BaseTest} from "./Base.t.sol";
import {RSASignerMock} from "./mocks/RSASigner.m.sol";
import {Initializable} from "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract RSASignerTest is BaseTest {
    RSASignerMock signer;

    /// @notice it should have initializers disabled because is dangerous to leave the implementation uninitialized
    function test_GivenTheImplementation() external {
        RSASignerMock implementation = new RSASignerMock();
        assertTrue(implementation.getInitializedVersion() == type(uint64).max);
    }

    modifier whenCreatingWithTheFactory(
        RSASignerMock.PublicKey memory ownerPublicKey
    ) {
        address clone = factory.createDeterministic(ownerPublicKey);
        signer = RSASignerMock(clone);
        _;
    }

    /// @notice it sets the RSA public key owner because it is just initialized
    function test_GivenANewRSASignerCreated(
        RSASignerMock.PublicKey memory ownerPublicKey
    ) external whenCreatingWithTheFactory(ownerPublicKey) {
        RSASignerMock.PublicKey memory setPublicKey = signer.publicKey();

        assertEq(setPublicKey.exponent, ownerPublicKey.exponent);
        assertEq(setPublicKey.modulus, ownerPublicKey.modulus);
    }

    bytes32 sha256Digest;

    modifier whenValidatingASha256DigestedMessageWithIsValidSignature(
        bytes memory message
    ) {
        address clone = factory.createDeterministic(owner.publicKey());
        signer = RSASignerMock(clone);
        sha256Digest = sha256(message);
        _;
    }

    /// @notice it returns `bytes4(0)` because the sha256 digest signature is invalid
    function test_GivenAnInvalidSha256Signature(
        bytes memory message,
        bytes memory signature
    )
        external
        whenValidatingASha256DigestedMessageWithIsValidSignature(message)
    {
        bytes4 result = signer.isValidSignature(sha256Digest, signature);
        assertEq(result, bytes4(0));
    }

    /// @notice it returns `bytes4(0)` because the owner did not sign the sha256 digest
    function test_GivenASha256DigestAndASignatureOfAnotherPublicKey(
        bytes memory message
    )
        external
        whenValidatingASha256DigestedMessageWithIsValidSignature(message)
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
        bytes memory message
    )
        external
        whenValidatingASha256DigestedMessageWithIsValidSignature(message)
    {
        bytes memory pcks1Sha256Signature = owner.sign(message);
        bytes4 result = signer.isValidSignature(
            sha256Digest,
            _suffixed(pcks1Sha256Signature, false)
        );
        assertEq(result, signer.isValidSignature.selector);
    }

    bytes32 keccak256Digest;

    modifier whenValidatingANormalizedKeccak256DigestedMessageWithIsValidSignature(
        bytes memory message
    ) {
        address clone = factory.createDeterministic(owner.publicKey());
        signer = RSASignerMock(clone);
        keccak256Digest = keccak256(message);
        _;
    }

    /// @notice it returns `bytes4(0)` because the normalized keccak256 digest signature invalid
    function test_GivenAnInvalidNormalizedKeccak256Signature(
        bytes memory signature,
        bytes memory message
    )
        external
        whenValidatingANormalizedKeccak256DigestedMessageWithIsValidSignature(
            message
        )
    {
        bytes4 result = signer.isValidSignature(keccak256Digest, signature);
        assertEq(result, bytes4(0));
    }

    /// @notice it returns `bytes4(0)` because the owner did not sign the normalized keccak256 digest
    function test_GivenANormalizedKeccak256DigestAndASignatureOfAnotherPublicKey(
        bytes memory message
    )
        external
        whenValidatingANormalizedKeccak256DigestedMessageWithIsValidSignature(
            message
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
        bytes memory message
    )
        external
        whenValidatingANormalizedKeccak256DigestedMessageWithIsValidSignature(
            message
        )
    {
        bytes memory pcks1Sha256Signature = owner.sign(
            abi.encode(keccak256Digest)
        );
        bytes4 result = signer.isValidSignature(
            keccak256Digest,
            _suffixed(pcks1Sha256Signature, true)
        );
        assertEq(result, signer.isValidSignature.selector);
    }

    function _suffixed(
        bytes memory pkcs1Sha256Signature,
        bool normalize
    ) private pure returns (bytes memory) {
        return abi.encodePacked(pkcs1Sha256Signature, normalize);
    }
}
