import React from "react";

const Candidate = ({ name, votes, onVote }) => {
  return (
    <div className="candidate-card">
      <p>{name} - Votes: {votes}</p>
      <button onClick={onVote}>Vote</button>
    </div>
  );
};

export default Candidate;