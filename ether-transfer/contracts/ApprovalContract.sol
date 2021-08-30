// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprovalContract {
  address public sender;
  address public receiver;
  address public constant approver = 0x6Ed595159E3E7e660411dADa5e7485bA4eA7920C;

  function deposit(address _receiver) external payable {
    require(msg.value > 0);
    sender = msg.sender;
    receiver = _receiver;
  }

  function viewApprover() external pure returns(address) {
    return(approver);
  }

  function approve() external {
    require(msg.sender == approver);
    payable(receiver).transfer(address(this).balance);
  }
}

