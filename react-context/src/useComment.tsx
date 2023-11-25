import { useState } from 'react';

const useComment = () => {
  const [votes, setVotes] = useState(0);

  const addVote = () => {
    setVotes((prevVotes) => prevVotes + 1);
    console.log(votes);
  };

  const subtractVote = () => {
    setVotes((prevVotes) => prevVotes - 1);
    console.log(votes);
  };

  return {
    votes,
    addVote,
    subtractVote,
  };
};

export default useComment;
