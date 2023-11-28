// Context is designed to share values (like data or functions) between components without having to pass the data through each level of the component tree manually

// Provider -> is responsible for "providing" the context to its descendants
// It takes a value prop and makes it available to all the components that are descendants of it
// When the value changes, it triggers a re-render of the consuming components

// Consumer ->  is a way for components to subscribe to the context changes
// It allows components to access the value from the nearest Provider ancestor in the component tree

import React, {useEffect, useState, createContext, useContext} from 'react';
import mockComments from './mockComments.json';

// In TypeScript, an interface is a way to define a contract or a structure for objects
interface Comment {
	username: string;
	avatar: string;
	id: string;
	parentId: string;
	votes: number;
	text: string;
	datePosted: string;
	replies: Comment[];
}

interface CommentsContextValue {
	loggedUser: {username: string; avatar: string}; // Corrected the object syntax
	comments: Comment[] | null; // It can be either an array of instances of the Comment object or null
	addVote: (commentId: string) => void;
	subtractVote: (commentId: string) => void;
	addComment: (commentId: string, newText: string) => void;
	editComment: (commentId: string, newText: string) => void;
	deleteComment: (commentId: string) => void;
}

const CommentsContext = createContext<CommentsContextValue | undefined>(
	undefined,
); // Creating an instance of the Context

// Setting up the provider
// children -> props that will be availble to all its children
function CommentsProvider({children}: {children: React.ReactNode}) {
	const [comments, setComments] = useState<Comment[] | null>(null);
	const [loggedUser, setLoggedUser] = useState({
		username: 'yuyi',
		avatar: '🤪',
	});

	useEffect(() => {
		setComments(mockComments as Comment[]);
	}, []); // So comments are shown on the initial render

	// Voting logic

	const addVote = (commentId: string) => {
		setComments(prevComments => {
			return prevComments?.map(comment =>
				comment.id === commentId
					? {...comment, votes: comment.votes + 1}
					: comment,
			);
		});
	};

	const subtractVote = (commentId: string) => {
		setComments(prevComments => {
			return prevComments?.map(comment =>
				comment.id === commentId
					? {...comment, votes: comment.votes - 1}
					: comment,
			);
		});
	};

	const editComment = (commentId: string, newText: string) => {
		setComments(prevComments => {
			return prevComments?.map(comment =>
				comment.id === commentId ? {...comment, text: newText} : comment,
			);
		});
	};

	const deleteComment = (commentId: string) => {
		setComments(
			prevComments => prevComments?.filter(comment => comment.id !== commentId),
		);
	};

	// Function to add a new comment
	const addComment = (newText: string) => {
		setComments(prevComments => {
			// Calculate the new comment id
			const newId = (prevComments?.length || 0) + 1;
			const paddedId = newId < 10 ? `0${newId}` : `${newId}`;

			// Create the new comment object
			const newComment: Comment = {
				username: loggedUser.username,
				avatar: loggedUser.avatar,
				id: paddedId,
				parentId: null,
				votes: 0,
				text: newText,
				datePosted: new Date().toISOString(),
				replies: [],
			};

			// Update the state with the new comment
			return prevComments ? [...prevComments, newComment] : [newComment];
		});
	};

	return (
		<CommentsContext.Provider
			value={{
				loggedUser,
				comments,
				addVote,
				subtractVote,
				editComment,
				deleteComment,
				addComment,
			}}
		>
			{children}
		</CommentsContext.Provider>
	);
}

function useComments(): Comment[] | null {
	const context = useContext(CommentsContext);
	if (!context) {
		throw new Error('useComments must be used within a CommentsProvider');
	}
	return context.comments;
}

export {CommentsProvider, useComments, CommentsContext};
