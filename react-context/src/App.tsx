import BlogPost from './BlogPost';
import { CommentsProvider } from './CommentsContext';

function App() {
  return (
    <CommentsProvider>
      <div className="app">
        <BlogPost />
      </div>
    </CommentsProvider>
  );
}

export default App;
