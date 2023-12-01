import styled, {css} from 'styled-components';
import theme from './theme';

interface TextInputProps {
	fullWidth?: boolean;
	size?: 'small' | 'medium' | 'large'; // Change type to 'number'
	// Add more properties as needed
}

const getSize = (size?: 'small' | 'medium' | 'large') => {
	switch (size) {
		case 'small':
			return '20px';
		case 'medium':
			return '40px';
		case 'large':
			return '60px';
		default:
			return 'auto';
	}
};

const TextInput = styled.input<TextInputProps>`
	${props => css`
		color: ${theme.colors.black};
		border: 1px solid ${theme.colors.black};
		padding: 8px; // Adjust as needed

		${props.fullWidth &&
		css`
			width: 100%;
		`}

		width: ${getSize(props.size)}; // Adjust size

		// Add more styling properties as needed
	`}
`;

export default TextInput;
