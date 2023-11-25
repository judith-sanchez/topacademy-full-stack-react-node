import { useContext } from 'react';
import { CommentsContext } from './CommentsContext';

const useComment = (commentId) => {
  const comments = useContext(CommentsContext);
  const comment = comments?.find((c) => c.id === commentId);

  const addVote = () => {
    // Create a new copy of the comment to ensure immutability
    const updatedComment = { ...comment, votes: comment.votes + 1 };
    // Find the index of the comment in the array
    const commentIndex = comments.findIndex((c) => c.id === commentId);
    // Create a new array with the updated comment
    const updatedComments = [
      ...comments.slice(0, commentIndex),
      updatedComment,
      ...comments.slice(commentIndex + 1),
    ];
    // Update the context with the new array
    setComments(updatedComments);
  };

  const subtractVote = () => {
    // Create a new copy of the comment to ensure immutability
    const updatedComment = { ...comment, votes: comment.votes - 1 };
    // Find the index of the comment in the array
    const commentIndex = comments.findIndex((c) => c.id === commentId);
    // Create a new array with the updated comment
    const updatedComments = [
      ...comments.slice(0, commentIndex),
      updatedComment,
      ...comments.slice(commentIndex + 1),
    ];
    // Update the context with the new array
    setComments(updatedComments);
  };

  return {
    votes: comment.votes,
    addVote,
    subtractVote,
  };
};

export default useComment;
