// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IIdentityContract {
    function isRegistered(address _user) external view returns (bool);
}

contract ReputationContract {
    address public owner;
    IIdentityContract public identityContract;

    mapping(address => uint256) private reputation;

    event ReputationIncreased(address indexed user, uint256 amount, uint256 newScore);
    event ReputationDecreased(address indexed user, uint256 amount, uint256 newScore);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(address _identityContract) {
        owner = msg.sender;
        identityContract = IIdentityContract(_identityContract);
    }

    function increaseReputation(address _user, uint256 _amount) external onlyOwner {
        require(identityContract.isRegistered(_user), "User not registered");
        reputation[_user] += _amount;
        emit ReputationIncreased(_user, _amount, reputation[_user]);
    }

    function decreaseReputation(address _user, uint256 _amount) external onlyOwner {
        require(identityContract.isRegistered(_user), "User not registered");
        require(reputation[_user] >= _amount, "Insufficient reputation");
        reputation[_user] -= _amount;
        emit ReputationDecreased(_user, _amount, reputation[_user]);
    }

    function getReputation(address _user) external view returns (uint256) {
        return reputation[_user];
    }
}
