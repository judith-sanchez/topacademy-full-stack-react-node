import React from 'react';
import Button from './Button';
import TextInput from './TextInput';
import Loader from './Loader';

const MyComponent = () => {
	return (
		<>
			<div>
				<Button variation="primary">Button 1</Button>
				<Button variation="secondary">Button 2</Button>
				<Button variation="accent">Button 3</Button>
				<Button variation="background">Button 4</Button>
				<Button variation="highlight">Button 5</Button>

				<TextInput fullWidth placeholder="Type something..." />
				<TextInput fullWidth size="medium" placeholder="Type something..." />

				<Loader size="small" />
				<Loader size="medium" />
				<Loader size="large" />
			</div>
		</>
	);
};

export default MyComponent;
