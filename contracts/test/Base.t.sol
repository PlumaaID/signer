// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {RSASignerFactory} from "~/RSASignerFactory.sol";
import {RSAMessageSigner} from "./utils/RSAMessageSigner.sol";

contract BaseTest is Test {
    RSASignerFactory public factory;

    // Message signers
    RSAMessageSigner public owner;
    RSAMessageSigner public other;

    function setUp() public virtual {
        owner = new RSAMessageSigner("owner");
        other = new RSAMessageSigner("other");

        factory = new RSASignerFactory();
    }
}
