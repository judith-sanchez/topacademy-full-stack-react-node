import React, { useEffect, useState } from 'react';
import mockComments from './mockComments.json';

// Create an instance of the React's object context
const CommentsContext = React.createContext();

function CommentsProvider({ children }) {
  // This object holds all the information I want the children component to have access to.
  const [comments, setComments] = useState(null);

  useEffect(() => {
    setComments(mockComments);
  }, []);

  // This context provider will hold other components on the App.js file
  // All the components wrapped on this one will be able to access the auth object as long as the context itself is also imported
  return (
    <CommentsContext.Provider value={comments}>
      {children}
    </CommentsContext.Provider>
  );
}

// React Hook
// This is how the other components will be able to consume the information inside the created context

function useComments() {
  const comments = React.useContext(CommentsContext);
  return comments;
}

// So other components can import it
export { CommentsProvider, useComments, CommentsContext };
