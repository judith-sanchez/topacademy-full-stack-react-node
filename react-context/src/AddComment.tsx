import React, {useState} from 'react';
import {useContext} from 'react';

import {CommentsContext} from './CommentsContext';

interface AddCommentProps {
	parentId?: string | null; // Pass parentId if it's a reply to a comment
}

const AddComment: React.FC<AddCommentProps> = ({parentId}) => {
	const commentsContext = useContext(CommentsContext); // Use CommentsContext directly

	const [newCommentText, setNewCommentText] = useState('');

	if (!commentsContext) {
		throw new Error('CommentsContext not found');
	}
	const {addComment} = commentsContext;

	const handleAddComment = () => {
		if (newCommentText.trim() !== '') {
			addComment(newCommentText);
			setNewCommentText('');
		}
	};

	return (
		<div>
			<textarea
				placeholder="Write your comment..."
				value={newCommentText}
				onChange={e => setNewCommentText(e.target.value)}
			/>
			<button onClick={handleAddComment}>Add Comment</button>
		</div>
	);
};

export default AddComment;
