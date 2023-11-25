import React from 'react';
import blogPosts from './blogPosts.json';

const Blog = () => {
  return (
    <div>
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
  );
};

export default Blog;
