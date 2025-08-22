// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Verification {
    struct User {
        string aadhaar;
        string voterId;
        bool isVerified;
    }

    mapping(address => User) private users;

    event UserVerified(address indexed userAddress, string aadhaar, string voterId);
    event VerificationStatusUpdated(address indexed userAddress, bool isVerified);

    function addUser(string memory _aadhaar, string memory _voterId) public {
        require(bytes(_aadhaar).length > 0, "Aadhaar is required");
        require(bytes(_voterId).length > 0, "Voter ID is required");
        require(!users[msg.sender].isVerified, "User is already verified");

        users[msg.sender] = User(_aadhaar, _voterId, true);
        emit UserVerified(msg.sender, _aadhaar, _voterId);
    }

    function getVerificationStatus(address _userAddress) public view returns (bool) {
        return users[_userAddress].isVerified;
    }

    function updateVerificationStatus(address _userAddress, bool _status) public {
        require(msg.sender == _userAddress, "Only the user can update their status");
        users[_userAddress].isVerified = _status;
        emit VerificationStatusUpdated(_userAddress, _status);
    }
}