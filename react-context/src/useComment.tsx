import { useContext } from 'react';
import { CommentsContext } from './CommentsContext';

const useComment = (commentId) => {
  const { comments, addVote, subtractVote } = useContext(CommentsContext);
  const comment = comments?.find((c) => c.id === commentId);

  if (!comment) {
    throw new Error('Comment not found');
  }

  return {
    votes: comment.votes,
    addVote: () => addVote(commentId),
    subtractVote: () => subtractVote(commentId),
  };
};

export default useComment;
