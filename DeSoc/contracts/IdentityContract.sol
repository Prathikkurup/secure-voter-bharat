// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct IdentityDetails {
        string name;
        string aadharHash;      // IPFS hash for Aadhaar
        string panHash;         // IPFS hash for PAN
        string drivingHash;     // IPFS hash for Driving License
        uint256 reputationScore; // Initial reputation score
        bool verified;
    }

    mapping(address => IdentityDetails) public identities;
    address public admin;

    event IdentityRegistered(address indexed user, string name);
    event IdentityVerified(address indexed user, bool status);
    event ReputationUpdated(address indexed user, uint256 newScore);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // Register user identity with IPFS hashes for documents
    function registerIdentity(
        string memory _name,
        string memory _aadharHash,
        string memory _panHash,
        string memory _drivingHash
    ) public {
        identities[msg.sender] = IdentityDetails({
            name: _name,
            aadharHash: _aadharHash,
            panHash: _panHash,
            drivingHash: _drivingHash,
            reputationScore: 50, // default score
            verified: false
        });

        emit IdentityRegistered(msg.sender, _name);
    }

    // Admin can verify user
    function verifyIdentity(address _user) public onlyAdmin {
        identities[_user].verified = true;
        emit IdentityVerified(_user, true);
    }

    // Update reputation score (could be based on DAO votes or other logic)
    function updateReputation(address _user, uint256 _score) public onlyAdmin {
        identities[_user].reputationScore = _score;
        emit ReputationUpdated(_user, _score);
    }

    // Get full identity details
    function getIdentity(address _user) public view returns (
        string memory name,
        string memory aadharHash,
        string memory panHash,
        string memory drivingHash,
        uint256 reputationScore,
        bool verified
    ) {
        IdentityDetails memory user = identities[_user];
        return (
            user.name,
            user.aadharHash,
            user.panHash,
            user.drivingHash,
            user.reputationScore,
            user.verified
        );
    }
}
