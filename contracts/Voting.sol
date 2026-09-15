// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Voting {
    struct Candidate {
        string name;
        uint voteCount;
    }

    Candidate[] public candidates;

    constructor(string[] memory _names) {
        for (uint i = 0; i < _names.length; i++) {
            candidates.push(Candidate(_names[i], 0));
        }
    }

    function vote(uint index) public {
        candidates[index].voteCount++;
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }
}