import React from 'react';
import useComment, {CommentActions} from './useComment';
import styles from './styles/Comment.module.css';

interface CommentProps {
	commentId: number;
	datePosted: string;
	username: string;
	avatar: string;
	text: string;
	votes: number;
}

const Comment: React.FC<CommentProps> = ({
	commentId,
	datePosted,
	username,
	avatar,
	text,
	votes,
}: CommentProps) => {
	const {addVote, subtractVote, editComment, deleteComment}: CommentActions =
		useComment(commentId);

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
						<p className={styles.datePosted}>{datePosted}</p>
					</div>
					<div className={styles.functionalities}>
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
						<button className={styles.reply}>↩️ Reply</button>
					</div>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Comment;
