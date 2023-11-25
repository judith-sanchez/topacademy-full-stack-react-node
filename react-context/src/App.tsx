import BlogPost from './BlogPost';
import { CommentsProvider } from './CommentsContext';

function App() {
  // const [loggedUser, setLoggedUser] = useState('yuyi'); // Maybe this should be on the context

  return (
    <CommentsProvider>
      <div className="app">
        <BlogPost />
      </div>
    </CommentsProvider>
  );
}

export default App;
