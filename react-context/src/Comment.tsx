import React from 'react';
import useComment from './useComment';

export default function Comment() {
  const { votes, addVote, subtractVote } = useComment();

  const userInfo = {
    username: 'yuyi',
    avatar: '👧🏻',
  };

  const commentInfo = {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    datePosted: '1 day ago',
  };

  return (
    <div className="comments">
      <div className="votes-container">
        <button onClick={addVote}>👍🏻</button>
        <p>{votes}</p>
        <button onClick={subtractVote}>👎🏻</button>
      </div>
      <div className="comment-container">
        <div>
          <p>{userInfo.avatar}</p>
          <p>{userInfo.username}</p>
          <p>{commentInfo.datePosted}</p>
          <button>💬</button>
        </div>
        <p>{commentInfo.text}</p>
      </div>
    </div>
  );
}
