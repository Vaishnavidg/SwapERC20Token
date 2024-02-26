// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TokenGMT.sol";
import "./TokenINT.sol";


// Contract for swapping two ERC20 tokens
contract SwapTokens {
    TokenINT public tokenI;
    TokenGMT public tokenG;

    event Swapped(address indexed owner1, address indexed owner2, uint256 amountToken);

    constructor(address _tokenI, address _tokenG) {
        tokenI = TokenINT(_tokenI);
        tokenG = TokenGMT(_tokenG);
    }

    function swap(address _owner1, address _owner2, uint256 amountToTransfer) external returns (bool) {
        require(amountToTransfer > 0, "Amounts must be greater than zero");
        require(msg.sender == _owner1 || msg.sender == _owner2, "Not Authorised");
        require(tokenI.balanceOf(_owner1) >= amountToTransfer && tokenG.balanceOf(_owner2) >= amountToTransfer, "Insufficient balance");

        require(tokenI.transfer(_owner1, _owner2, amountToTransfer), "Failed to transfer TokenINT");
        require(tokenG.transfer(_owner2, _owner1, amountToTransfer), "Failed to transfer TokenGMT");

        // tokenG.balanceINT[_owner2] += amountToTransfer; // Update balanceINT using mapping
        // tokenI.balanceGMT[_owner1] += amountToTransfer; // Update balanceGMT using mapping

        emit Swapped(_owner1, _owner2, amountToTransfer);
        return true;
    }
   

}
