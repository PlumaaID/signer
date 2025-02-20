// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {BaseScript, console2} from "./Base.s.sol";
import {ICreateX} from "createx/ICreateX.sol";
import {RSASignerFactory} from "~/RSASignerFactory.sol";

contract RSASignerFactoryDeployScript is BaseScript {
    address constant PLUMAA_DEPLOYER_EOA =
        0x00560ED8242bF346c162c668487BaCD86cc0B8aa;
    address constant PLUMAA_MULTISIG =
        0x00fA8957dC3D2f6081360056bf2f6d4b5f1a49aa;
    address constant CREATE_X = 0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed;
    ICreateX public createX;

    function setUp() public {
        createX = ICreateX(CREATE_X);
    }

    function run() public broadcast {
        address factory = createX.deployCreate2(
            _toSalt(0x0186ae09cd69e703ba67e6),
            type(RSASignerFactory).creationCode
        );
        console2.logBytes32(keccak256(type(RSASignerFactory).creationCode));
        console2.log(
            "RSASignerFactory contract deployed to %s",
            address(factory)
        );
        assert(0x0046CBAdF1ac31Ccc4d94CF0815Ad0FA1587a7Aa == factory);
    }

    function _toSalt(bytes11 mined) internal pure returns (bytes32) {
        return
            (bytes32(mined) >> 168) |
            (bytes32(0x00) >> 160) | // No cross-chain redeployment protection
            bytes32(bytes20(PLUMAA_DEPLOYER_EOA));
    }
}
