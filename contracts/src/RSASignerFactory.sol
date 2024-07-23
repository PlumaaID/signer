// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {LibClone} from "solady/utils/LibClone.sol";
import {RSASigner} from "./RSASigner.sol";

/// @title RSASignerFactory - A factory contract to deploy RSASigner clones with immutable public key.
/// @author Ernesto García
contract RSASignerFactory {
    RSASigner private immutable _RSASignerImplementation;

    /// @notice Emitted when a new RSASigner clone is created.
    event RSASignerCreated(RSASigner.PublicKey indexed owner, address signer);

    constructor() {
        _RSASignerImplementation = new RSASigner();
    }

    /// @notice Predicts the address of an RSASigner clone using the public key as salt.
    function predictDeterministicAddress(
        RSASigner.PublicKey memory owner,
        bytes32 salt,
        address deployer
    ) public view returns (address) {
        address implementation = address(_RSASignerImplementation);
        return
            LibClone.predictDeterministicAddress(
                implementation,
                abi.encode(owner),
                salt,
                deployer
            );
    }

    /// @notice Idempotently creates a new RSASigner clone using the public key as salt.
    function createDeterministic(
        RSASigner.PublicKey memory owner,
        bytes32 salt
    ) public returns (address) {
        address implementation = address(_RSASignerImplementation);
        address clone = predictDeterministicAddress(owner, salt, address(this));
        if (clone.code.length > 0) {
            return clone; // Already deployed
        }

        address deployed = LibClone.cloneDeterministic(
            implementation,
            abi.encode(owner),
            salt
        );
        assert(deployed == clone);
        emit RSASignerCreated(owner, clone);
        return clone;
    }

    function _toBytes(
        RSASigner.PublicKey memory owner
    ) internal pure returns (bytes memory result) {
        assembly ("memory-safe") {
            result := owner
        }
    }
}
