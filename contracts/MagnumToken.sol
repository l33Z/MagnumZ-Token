// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MagnumToken {
    uint256 public TotalMagnumToken = 190303105198;
    mapping(address => uint256) public TokenOwnersList;
    address payable private owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyToken(uint256 amount) external payable {
        require(TotalMagnumToken > 0, "Not enough token");
        require(msg.value >= amount * 0.01 ether, "You must pay 0.01 ether");
        TotalMagnumToken -= amount;
        TokenOwnersList[msg.sender] += amount;
    }

    function checkOwnTokens(address _address) external view returns (uint256) {
        return TokenOwnersList[_address];
    }

    function BlanceOfContract() public view returns (uint256) {
        return address(this).balance;
    }

    function TransferBalance() public {
        require(owner == msg.sender, "You Are Not Owner !!");
        owner.transfer((address(this).balance));
    }
}