import { useState } from 'react';
import BlogPost from './BlogPost';
import Comment from './Comment';

function App() {
  const [loggedUser, setLoggedUser] = useState('yuyi'); // Maybe this should be on the context

  return (
    <div className="app">
      <BlogPost />
      <Comment />
    </div>
  );
}

export default App;
