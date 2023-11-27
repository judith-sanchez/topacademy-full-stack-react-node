import React from 'react';
import useComment, { CommentActions } from './useComment';
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
  const { addVote, subtractVote, editComment, deleteComment }: CommentActions =
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
          <p>{avatar}</p>
          <p>{username}</p>
          <p>{datePosted}</p>
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
          <button>💬</button>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
