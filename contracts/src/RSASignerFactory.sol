// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {RSASigner} from "./RSASigner.sol";

/// @title RSASignerFactory - A factory contract to deploy RSASigner clones.
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
        address deployer
    ) public view returns (address) {
        return
            Clones.predictDeterministicAddress(
                address(_RSASignerImplementation),
                _salt(owner),
                deployer
            );
    }

    /// @notice Creates a new RSASigner clone using the public key as salt.
    function createDeterministic(
        RSASigner.PublicKey memory owner
    ) public returns (address) {
        address clone = Clones.cloneDeterministic(
            address(_RSASignerImplementation),
            _salt(owner)
        );
        RSASigner(clone).initialize(owner);
        emit RSASignerCreated(owner, clone);
        return clone;
    }

    function _salt(
        RSASigner.PublicKey memory owner
    ) private pure returns (bytes32) {
        return keccak256(abi.encode(owner));
    }
}
