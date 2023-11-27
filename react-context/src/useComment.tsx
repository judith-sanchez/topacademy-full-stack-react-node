import { useContext } from 'react';
import { CommentsContext } from './CommentsContext';

const useComment = (commentId) => {
  const { comments, addVote, subtractVote, editComment, deleteComment } =
    useContext(CommentsContext);
  const comment = comments?.find((c) => c.id === commentId);

  if (!comment) {
    throw new Error('Comment not found');
  }

  return {
    votes: comment.votes,
    text: comment.text,
    addVote: () => addVote(commentId),
    subtractVote: () => subtractVote(commentId),
    editComment: (newText) => editComment(commentId, newText),
    deleteComment: () => deleteComment(commentId),
  };
};

export default useComment;
