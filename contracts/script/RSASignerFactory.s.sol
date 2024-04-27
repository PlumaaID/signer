// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {BaseScript, console2} from "./Base.s.sol";
import {ICreateX} from "createx/ICreateX.sol";
import {RSASignerFactory} from "~/RSASignerFactory.sol";

contract RSASignerFactoryDeployScript is BaseScript {
    address constant CREATE_X = 0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed;
    ICreateX public createX;

    function setUp() public {
        createX = ICreateX(CREATE_X);
    }

    function run() public broadcast {
        createX.deployCreate2(type(RSASignerFactory).creationCode);
    }
}
