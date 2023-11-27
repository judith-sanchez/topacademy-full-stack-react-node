import React from 'react';
import {formatDistanceToNow, parseISO} from 'date-fns';
import useComment, {CommentActions} from './useComment';
import styles from './styles/Comment.module.css';

interface CommentProps {
	commentId: number;
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
	loggedUser,
}: CommentProps) => {
	const {addVote, subtractVote, editComment, deleteComment}: CommentActions =
		useComment(commentId);

	const isAuthor = username === loggedUser;

	console.log('Original datePosted:', datePosted);
	const postedDate = parseISO(datePosted);
	console.log('Parsed date:', postedDate);
	const timeAgo = formatDistanceToNow(postedDate, {addSuffix: true});
	console.log('Time ago:', timeAgo);

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
			</div>
		</div>
	);
};

export default Comment;

// import React from 'react';
// import useComment, {CommentActions} from './useComment';
// import styles from './styles/Comment.module.css';

// interface CommentProps {
// 	commentId: number;
// 	datePosted: string;
// 	username: string;
// 	avatar: string;
// 	text: string;
// 	votes: number;
// 	loggedUser: string;
// }

// const Comment: React.FC<CommentProps> = ({
// 	commentId,
// 	datePosted,
// 	username,
// 	avatar,
// 	text,
// 	votes,
// 	loggedUser,
// }: CommentProps) => {
// 	const {addVote, subtractVote, editComment, deleteComment}: CommentActions =
// 		useComment(commentId);

// 	const isAuthor = username === loggedUser;

// 	return (
// 		<div className={styles.mainContainer}>
// 			<div className={styles.votes}>
// 				<button
// 					onClick={() => {
// 						addVote();
// 					}}
// 				>
// 					👍🏻
// 				</button>
// 				<p>{votes}</p>
// 				<button
// 					onClick={() => {
// 						subtractVote();
// 					}}
// 				>
// 					👎🏻
// 				</button>
// 			</div>
// 			<div className={styles.secondaryContainer}>
// 				<div className={styles.infoAndFunctionalities}>
// 					<div className={styles.postInfo}>
// 						<div className={styles.avatar}>
// 							<p>{avatar}</p>
// 						</div>

// 						<p className={styles.username}>{username}</p>
// 						<p className={styles.datePosted}>{datePosted}</p>
// 					</div>
// 					<div className={styles.functionalities}>
// 						{isAuthor && (
// 							<>
// 								<button
// 									onClick={() => {
// 										editComment();
// 									}}
// 								>
// 									✏️
// 								</button>
// 								<button
// 									onClick={() => {
// 										deleteComment();
// 									}}
// 								>
// 									🗑️
// 								</button>
// 							</>
// 						)}
// 						{!isAuthor && <button className={styles.reply}>↩️ Reply</button>}
// 					</div>
// 				</div>
// 				<p>{text}</p>
// 			</div>
// 		</div>
// 	);
// };

// export default Comment;
