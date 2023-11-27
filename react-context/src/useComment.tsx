// import {useContext} from 'react';
// import {CommentsContext} from './CommentsContext';

// interface CommentHook {
// 	votes: number;
// 	text: string;
// 	addVote: () => void;
// 	subtractVote: () => void;
// 	editComment: (newText: string) => void;
// 	deleteComment: () => void;
// }

// const useComment = (commentId: string): CommentHook => {
// 	const {comments, addVote, subtractVote, editComment, deleteComment} =
// 		useContext(CommentsContext);
// 	// The problem is here, because the children comment is not on the main array
// 	const comment = comments?.find(c => c.id === commentId);

// 	if (!comment) {
// 		throw new Error('Comment not found');
// 	}

// 	return {
// 		votes: comment.votes,
// 		text: comment.text,
// 		addVote: () => addVote(commentId),
// 		subtractVote: () => subtractVote(commentId),
// 		editComment: (newText: string) => editComment(commentId, newText),
// 		deleteComment: () => deleteComment(commentId),
// 	};
// };

// export default useComment;

import {useContext} from 'react';
import {CommentsContext} from './CommentsContext';

interface CommentHook {
	votes: number;
	text: string;
	addVote: () => void;
	subtractVote: () => void;
	editComment: (newText: string) => void;
	deleteComment: () => void;
}

const findCommentById = (comments, commentId, parentId) => {
	if (parentId === null) {
		// if it is a parent comment
		return comments.find(c => {
			c.id === commentId;
		});
	} else {
		const parentComment = comments.find(c => {
			c.id === parentId;
		});

		return parentComment.replies.find(c => {
			c.id === commentId;
		});
	}
};

const useComment = (commentId: string, parentId: string): CommentHook => {
	const {comments, addVote, subtractVote, editComment, deleteComment} =
		useContext(CommentsContext);

	const comment = findCommentById(comments, commentId, parentId);
	// console.log(commentId);
	// console.log(comment);

	// if (!comment) {
	// 	throw new Error('Comment not found');
	// }

	return {
		votes: comment.votes,
		text: comment.text,
		addVote: () => addVote(commentId),
		subtractVote: () => subtractVote(commentId),
		editComment: (newText: string) => editComment(commentId, newText),
		deleteComment: () => deleteComment(commentId),
	};
};

export default useComment;
