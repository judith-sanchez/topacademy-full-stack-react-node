import { useContext } from 'react';
import { CommentsContext } from './CommentsContext';

interface CommentHook {
  votes: number;
  text: string;
  addVote: () => void;
  subtractVote: () => void;
  editComment: (newText: string) => void;
  deleteComment: () => void;
}

const useComment = (commentId: number): CommentHook => {
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
    editComment: (newText: string) => editComment(commentId, newText),
    deleteComment: () => deleteComment(commentId),
  };
};

export default useComment;
