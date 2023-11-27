import React from 'react';
import {formatDistanceToNow, parseISO} from 'date-fns';
import useComment, {CommentActions} from './useComment';
import styles from './styles/Comment.module.css';

interface CommentProps {
	commentId: string;
	parentId: string;
	datePosted: string;
	username: string;
	avatar: string;
	text: string;
	votes: number;
	replies?: CommentProps[]; // Include replies prop
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
	replies = [], // Default to an empty array
	loggedUser,
}: CommentProps) => {
	const {addVote, subtractVote, editComment, deleteComment}: CommentActions =
		useComment(commentId, parentId);

	const isAuthor = username === loggedUser;

	const timeAgo = formatDistanceToNow(parseISO(datePosted), {addSuffix: true});

	return (
		<div className={styles.mainContainer}>
			<div className={styles.votes}>
				<button
					onClick={() => {
						addVote();
					}}
				>
					👍🏻
				</button>
				<p>{votes}</p>
				<button
					onClick={() => {
						subtractVote();
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
										editComment();
									}}
								>
									✏️
								</button>
								<button
									onClick={() => {
										deleteComment();
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
				{/* Recursive rendering of replies */}
				{replies.length > 0 && (
					<div className={styles.replies}>
						{replies.map(reply => (
							<Comment
								key={reply.commentId} // Ensure a unique key
								commentId={reply.commentId}
								datePosted={reply.datePosted}
								username={reply.username}
								avatar={reply.avatar}
								text={reply.text}
								votes={reply.votes}
								loggedUser={loggedUser}
								replies={reply.replies}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Comment;
