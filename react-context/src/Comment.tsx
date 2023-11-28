import React from 'react';
import {formatDistanceToNow, parseISO} from 'date-fns';
// import useComment, {CommentActions} from './useComment';
import {useContext} from 'react';
import {CommentsContext} from './CommentsContext';
import styles from './styles/Comment.module.css';

interface CommentProps {
	commentId: string;
	parentId: string;
	datePosted: string;
	username: string;
	avatar: string;
	text: string;
	votes: number;
	loggedUser: string;
}

const Comment: React.FC<CommentProps> = ({
	commentId,
	datePosted,
	username,
	avatar,
	text,
	votes,
	parentId,
	loggedUser,
}: CommentProps) => {
	// const {addVote, subtractVote, editComment, deleteComment}: CommentActions =
	// 	useComment(commentId);
	const commentsContext = useContext(CommentsContext); // Use CommentsContext directly

	const {
		comments,
		addVote,
		subtractVote,
		editComment,
		deleteComment,
		addComment, // Include the new function in your hook
	} = useContext(CommentsContext);

	const comment = comments?.find(c => c.id === commentId);

	if (!comment) {
		throw new Error('Comment not found');
	}

	const isAuthor = username === loggedUser;

	const timeAgo = formatDistanceToNow(parseISO(datePosted), {addSuffix: true});

	return (
		<div className={styles.mainContainer}>
			<div className={styles.votes}>
				<button
					onClick={() => {
						addVote(commentId);
					}}
				>
					👍🏻
				</button>
				<p>{votes}</p>
				<button
					onClick={() => {
						subtractVote(commentId);
					}}
				>
					👎🏻
				</button>
			</div>
			<div className={styles.secondaryContainer}>
				<div className={styles.infoAndFunctionalities}>
					<div className={styles.postInfo}>
						<div className={styles.avatar}>
							<p>{avatar}</p>
						</div>

						<p className={styles.username}>{username}</p>
						<p className={styles.datePosted}>{timeAgo}</p>
					</div>
					<div className={styles.functionalities}>
						{isAuthor && (
							<>
								<button
									onClick={() => {
										editComment(commentId);
									}}
								>
									✏️
								</button>
								<button
									onClick={() => {
										deleteComment(commentId);
									}}
								>
									🗑️
								</button>
							</>
						)}
						{!isAuthor && <button className={styles.reply}>↩️ Reply</button>}
					</div>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Comment;
