import useComment from './useComment';

export default function Comment({
  commentId,
  datePosted,
  username,
  avatar,
  text,
  votes,
}) {
  const { addVote, subtractVote, editComment, deleteComment } =
    useComment(commentId);

  return (
    <div className="comments">
      <div className="votes-container">
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
      <div className="comment-container">
        <div>
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
}
