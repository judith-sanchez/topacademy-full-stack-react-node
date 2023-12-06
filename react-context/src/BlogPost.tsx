import {ReactComponentElement, useState} from 'react';
import blogPosts from './blogPosts.json';
import {useComments, Comment as CommentType} from './CommentsContext';
import AddComment from './AddComment.tsx';
import styles from './styles/BlogPost.module.css';
import {useMyContext} from './NewContext.tsx';

import Comment from './Comment';

interface BlogPost {
	id: number;
	title: string;
	text: {
		paragraph: string;
		codeExample?: string;
	}[];
}

const Blog: React.FC = () => {
	const blogComments: CommentType[] = useComments();
	const myContext = useMyContext();

	const user = myContext.user;
	console.log(user);

	return (
		<>
			<div className={styles.blogPost}>
				{blogPosts.map((post: BlogPost) => (
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
			{/* I think it makes more sense just passin the whole object */}
			{blogComments?.map(comment => (
				<Comment
					key={comment.id}
					commentId={comment.id}
					text={comment.text}
					username={comment.username}
					avatar={comment.avatar}
					datePosted={comment.datePosted}
					votes={comment.votes}
					parentId={comment.parentId}
					replies={comment.replies}
				/>
			))}
			<AddComment />
		</>
	);
};

export default Blog;
