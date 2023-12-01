import styled, {keyframes, css} from 'styled-components';
import theme from './theme';

interface LoaderProps {
	size?: 'small' | 'medium' | 'large';
}

const spinAnimation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const Loader = styled.div<LoaderProps>`
	${props => css`
		border: 4px solid ${theme.colors.accent};
		border-top: 4px solid ${theme.colors.primary};
		border-radius: 50%;
		width: ${props.size === 'small'
			? '20px'
			: props.size === 'medium'
			? '40px'
			: '60px'};
		height: ${props.size === 'small'
			? '20px'
			: props.size === 'medium'
			? '40px'
			: '60px'};
		animation: ${spinAnimation} 1s linear infinite;
	`}
`;

export default Loader;
