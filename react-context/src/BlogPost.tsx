import {ReactComponentElement, useState} from 'react';
import blogPosts from './blogPosts.json';
import {useComments, Comment as CommentType} from './CommentsContext';
import styles from './styles/BlogPost.module.css';

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
	const [loggedUser, setLoggedUser] = useState('yuyi'); // this should have its own context

	const blogComments: CommentType[] = useComments();

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
			{blogComments?.map(comment => (
				<Comment
					key={comment.id}
					commentId={comment.id}
					text={comment.text}
					username={comment.username}
					avatar={comment.avatar}
					datePosted={comment.datePosted}
					votes={comment.votes}
					loggedUser={loggedUser}
				/>
			))}
		</>
	);
};

export default Blog;
