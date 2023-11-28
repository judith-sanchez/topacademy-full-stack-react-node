import BlogPost from './BlogPost';
import {CommentsProvider} from './CommentsContext';

import './styles/App.css';

const App: React.FC = () => {
	// To help TS understand that it is a functional component
	return (
		<CommentsProvider>
			<div className="app">
				<BlogPost />
			</div>
		</CommentsProvider>
	);
};

export default App;
