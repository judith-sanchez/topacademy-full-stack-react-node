import React, { useEffect, useState } from 'react';
import mockComments from './mockComments.json';

const CommentsContext = React.createContext();

function CommentsProvider({ children }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    setComments(mockComments);
  }, []);

  const addVote = (commentId) => {
    setComments((prevComments) => {
      return prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, votes: comment.votes + 1 }
          : comment
      );
    });
  };

  const subtractVote = (commentId) => {
    setComments((prevComments) => {
      return prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, votes: comment.votes - 1 }
          : comment
      );
    });
  };

  return (
    <CommentsContext.Provider value={{ comments, addVote, subtractVote }}>
      {children}
    </CommentsContext.Provider>
  );
}

function useComments() {
  const context = React.useContext(CommentsContext);
  if (!context) {
    throw new Error('useComments must be used within a CommentsProvider');
  }
  return context.comments;
}

export { CommentsProvider, useComments, CommentsContext };
