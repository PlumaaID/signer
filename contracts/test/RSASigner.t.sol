// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {BaseTest} from "./Base.t.sol";
import {RSASignerMock} from "./mocks/RSASigner.m.sol";
import {Initializable} from "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract RSASignerTest is BaseTest {
    RSASignerMock implementation;

    /// @notice it should have initializers disabled because is dangerous to leave the implementation uninitialized
    function test_GivenTheImplementation() external {
        implementation = new RSASignerMock();
        assertTrue(implementation.getInitializedVersion() == type(uint64).max);
    }

    modifier whenInitializing() {
        implementation = new RSASignerMock();
        _;
    }

    /// @notice it sets the RSA public key owner because it is just initialized
    function test_WhenItIsNotInitialized(
        RSASignerMock.PublicKey memory ownerPublicKey
    ) external whenInitializing {
        address clone = factory.createDeterministic(ownerPublicKey);
        RSASignerMock instance = RSASignerMock(clone);

        RSASignerMock.PublicKey memory setPublicKey = instance.publicKey();

        assertEq(setPublicKey.exponent, ownerPublicKey.exponent);
        assertEq(setPublicKey.modulus, ownerPublicKey.modulus);
    }

    modifier whenCallingIsValidSignature() {
        address clone = factory.createDeterministic(owner.publicKey());
        implementation = RSASignerMock(clone);
        _;
    }

    /// @notice it returns `bytes4(0)` because the signature is invalid
    function test_WhenTheSignatureIsNotValid(
        bytes memory message,
        bytes memory signature
    ) external whenCallingIsValidSignature {
        bytes32 sha256Digest = sha256(message);

        bytes4 result = implementation.isValidSignature(
            sha256Digest,
            signature
        );

        assertEq(result, bytes4(0));
    }

    /// @notice it returns `bytes4(0)` because the owner did not sign
    function test_WhenTheSignatureIsFromAnotherOwner(
        bytes memory message
    ) external whenCallingIsValidSignature {
        bytes32 sha256Digest = sha256(message);
        bytes memory signature = other.sign(message);

        bytes4 result = implementation.isValidSignature(
            sha256Digest,
            signature
        );

        assertEq(result, bytes4(0));
    }

    /// @notice it returns `isValidSignature.selector` because the owner signed
    function test_WhenTheSignatureIsValid(
        bytes memory message
    ) external whenCallingIsValidSignature {
        bytes32 sha256Digest = sha256(message);
        bytes memory signature = owner.sign(message);

        bytes4 result = implementation.isValidSignature(
            sha256Digest,
            signature
        );

        assertEq(result, implementation.isValidSignature.selector);
    }
}
