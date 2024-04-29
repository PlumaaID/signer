// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {BaseScript, console2} from "./Base.s.sol";
import {ICreateX} from "createx/ICreateX.sol";
import {RSASignerFactory} from "~/RSASignerFactory.sol";
import {RSASigner} from "~/RSASigner.sol";

contract RSASignerFactoryDeployScript is BaseScript {
    address constant CREATE_X = 0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed;
    ICreateX public createX;

    function setUp() public {
        createX = ICreateX(CREATE_X);
    }

    function run() public broadcast {
        bytes memory exp = hex"010001";
        bytes
            memory n = hex"8de33b2530d5d202724dc9a7ee86996e8a00adf91ca58debe6ef9381a083b6c7481e8526489e36f445df4ce2df0793116017fd017b009bfdb217eafb01d83d64fa4f695063f6d2eb9ca484e8ef2a562881bd94485b872860674ef02ca7547ee6939277c6eef5c39b66464622e4b2c039db6713b91533ffe48f004648e2a11d63f7e9e3c8952842a7c67f0ba0a112a1850980a233bc253b7477aea2e5961be3edbc8ff130ce12391cbc4c479fe6798bffbb154ec8b90369ecdf41145fedd5fde2f75878d8aaf8a9e7c1e49be5e52f191cebc85eda7f0630623e25892dd3dd96079ee15f9327cf4df96fd7253e62d2ca9456b0a22878a05415a3a8449f99072ce5";
        RSASigner.PublicKey memory owner = RSASigner.PublicKey(exp, n);
        RSASignerFactory(0x9E80C66dA41c04e6125266CfD52D1F2b6AfC547d)
            .createDeterministic(owner);
        // createX.deployCreate2(type(RSASignerFactory).creationCode);
    }
}
