pragma solidity ^0.8.0;
// SPDX-License-Identifier: Foo

// This is the main building block for smart contracts.
contract ETHPool {
    // Some string type variables to identify the token.
    string public name = "ETHPool";
    string public symbol = "ETHP";
    address[] public _team;
    address[] public poolMembers;
    mapping (address => uint) private _deposits;
    mapping (address => uint) private _rewards;
    // the deployer can add aditional team members other than the msg sender.
   constructor(address[] memory team_) {
        _team = team_;
        _team.push(msg.sender);

   }

   event Deposit(address sender, uint value);
   function deposit() public payable {
       _deposits[msg.sender] += msg.value;
       emit Deposit(msg.sender, msg.value);
       if (!listContains(poolMembers, msg.sender)) {
           poolMembers.push(msg.sender);
       }
   }

   event WithdrawDeposit(address sender, uint value);
   function withdrawDeposit(uint amount) public {
       require(_deposits[msg.sender] > amount);
       _deposits[msg.sender] -= amount;
       emit WithdrawDeposit(msg.sender, amount);
       (bool success, ) = payable(msg.sender).call{value: amount}("");  
       require(success, "Couldn't transfer");
   
   }

   event WithdrawReward(address sender, uint value);
   function withdrawReward(uint amount) public {
       require(_rewards[msg.sender] >= amount);
       _rewards[msg.sender] -= amount;
       emit WithdrawReward(msg.sender, amount);
       (bool success, ) = payable(msg.sender).call{value: amount}("");  
       require(success, "Couldn't transfer");
 
   }

   function listContains(address[] memory list, address add) private pure returns (bool) {
       for(uint i = 0; i < list.length; i++) {
           if(list[i] == add) {
               return true;
           }
       }
       return false;
   }

   modifier onlyTeam {
        require(listContains(_team, msg.sender));
        _;
   }

   event Reward(address receiver, uint value);
   function depositReward() public payable onlyTeam {
       for(uint i = 0; i < poolMembers.length; i++) {
           _rewards[poolMembers[i]] += msg.value * _deposits[poolMembers[i]] / allDeposits();
           emit Reward(poolMembers[i], msg.value * _deposits[poolMembers[i]] / allDeposits());
       }
   }

   function getRewardInPool() public view returns (uint) {
        return _rewards[msg.sender];
   }
   
   function getDepositInPool() public view returns (uint) {
        return _deposits[msg.sender];
   }

   function allDeposits() public view returns (uint) {
       uint result = 0;
       for(uint i = 0; i < poolMembers.length; i++) {
            result += _deposits[poolMembers[i]];
       }
       return result;
   }

}
