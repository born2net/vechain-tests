pragma solidity ^0.4.11;

contract Token {
    mapping (address => uint) public balances;

    function Token() {
        balances[msg.sender] = 1000000;
    }

    function increment(){
    
    }

    function transfer(address _to, uint _amount) {
        if (balances[msg.sender] < _amount) {
            throw;
        }

        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }
}