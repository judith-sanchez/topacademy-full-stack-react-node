import React from 'react';
import Button from './Button';

const MyComponent = () => {
	return (
		<div>
			<Button variation="primary">Button 1</Button>

			<Button variation="secondary">Button 2</Button>

			<Button variation="accent">Button 3</Button>

			<Button variation="background">Button 4</Button>

			<Button variation="highlight">Button 5</Button>
		</div>
	);
};

export default MyComponent;
