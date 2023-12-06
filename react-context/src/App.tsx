import BlogPost from './BlogPost';
import MyComponent from './MyComponent';
import {CommentsProvider} from './CommentsContext';
import {ContextProvider} from './NewContext';

import './styles/App.css';

const App: React.FC = () => {
	// To help TS understand that it is a functional component
	return (
		<ContextProvider>
			<CommentsProvider>
				<MyComponent></MyComponent>
				<div className="app">
					<BlogPost />
				</div>
			</CommentsProvider>
		</ContextProvider>
	);
};

export default App;
