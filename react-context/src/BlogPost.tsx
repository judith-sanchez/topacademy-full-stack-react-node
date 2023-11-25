import blogPosts from './blogPosts.json';
import { useComments } from './CommentsContext'; // Make sure to import useComments

import Comment from './Comment';
import { useState } from 'react';

const Blog = () => {
  const blogComments = useComments();

  return (
    <>
      <div className="blog-post-container">
        {blogPosts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            {post.text.map((section, index) => (
              <div key={index}>
                <p>{section.paragraph}</p>
                {section.codeExample && <pre>{section.codeExample}</pre>}
              </div>
            ))}
          </div>
        ))}
      </div>
      {blogComments.map((comment) => (
        <Comment
          key={comment.id} // Don't forget to add a key prop
          text={comment.text}
          username={comment.username}
          avatar={comment.avatar}
          datePosted={comment.date}
          votes={comment.votes}
        />
      ))}
    </>
  );
};

export default Blog;
