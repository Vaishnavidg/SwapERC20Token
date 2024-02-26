// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenINT{
    string public name = "Indian_Token";
    string public symbol = "INT";
    uint256 public totalSupply = 100000;

    address public owner;
    mapping (address=>uint256) public balance;
    mapping (address=>uint256) public balanceGMT;

    event Transfer(address indexed _from,address indexed _to, uint256 _value);

    constructor(){
        owner= msg.sender;
        balance[owner]=totalSupply;
        balanceGMT[owner]=0;
    }

    function transfer(address _from, address _to, uint256 _value) external returns(bool){
        require(_from != address(0),"Address is invalid");
        require(_to!= address(0),"Address is invalid");
        require(balance[_from]>=_value,"insufficient balance");
   
        balance[_from] -= _value;
        balance[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function balanceOf(address _address)external view returns(uint256){
        return balance[_address];
    }
    function balanceOfGMT(address _address)external view returns(uint256){
        return balanceGMT[_address];
    }
     function ownerAddress()external view returns(address){
        return owner;
    }
}