// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {RSASigner} from "~/RSASigner.sol";

contract RSASignerMock is RSASigner {
    function getInitializedVersion() external view returns (uint64) {
        return _getInitializedVersion();
    }
}
