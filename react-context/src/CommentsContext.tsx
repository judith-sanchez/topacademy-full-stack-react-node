import React, {useEffect, useState, createContext, useContext} from 'react';
import mockComments from './mockComments.json';

interface Comment {
	id: number;
	votes: number;
	text: string;
}

interface CommentsContextValue {
	comments: Comment[] | null;
	addVote: (commentId: number) => void;
	subtractVote: (commentId: number) => void;
	editComment: (commentId: number, newText: string) => void;
	deleteComment: (commentId: number) => void;
}

const CommentsContext = createContext<CommentsContextValue | undefined>(
	undefined,
);

function CommentsProvider({children}: {children: React.ReactNode}) {
	const [comments, setComments] = useState<Comment[] | null>(null);

	useEffect(() => {
		setComments(mockComments);
	}, []);

	const addVote = (commentId: number) => {
		setComments(prevComments => {
			return prevComments?.map(comment =>
				comment.id === commentId
					? {...comment, votes: comment.votes + 1}
					: comment,
			);
		});
	};

	const subtractVote = (commentId: number) => {
		setComments(prevComments => {
			return prevComments?.map(comment =>
				comment.id === commentId
					? {...comment, votes: comment.votes - 1}
					: comment,
			);
		});
	};

	const editComment = (commentId: number, newText: string) => {
		setComments(prevComments => {
			return prevComments?.map(comment =>
				comment.id === commentId ? {...comment, text: newText} : comment,
			);
		});
	};

	const deleteComment = (commentId: number) => {
		setComments(
			prevComments => prevComments?.filter(comment => comment.id !== commentId),
		);
	};

	return (
		<CommentsContext.Provider
			value={{comments, addVote, subtractVote, editComment, deleteComment}}
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
