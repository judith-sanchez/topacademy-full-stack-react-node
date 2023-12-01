import styled, {css} from 'styled-components';
import theme from './theme';

interface ButtonProps {
	fullWidth?: boolean;
	variation?: 'primary' | 'secondary' | 'accent' | 'background' | 'highlight';
}

const Button = styled.button<ButtonProps>`
	${props => {
		let baseStyles = css`
			color: white;
			display: inline-block; /* Set the default display to inline-block */
		`;

		switch (props.variation) {
			case 'primary':
				baseStyles = css`
					background-color: ${theme.colors.primary};
					${baseStyles}
				`;
				break;
			case 'secondary':
				baseStyles = css`
					background-color: ${theme.colors.secondary};
					${baseStyles}
				`;
				break;
			case 'accent':
				baseStyles = css`
					background-color: ${theme.colors.accent};
					${baseStyles}
				`;
				break;
			case 'background':
				baseStyles = css`
					background-color: ${theme.colors.background};
					${baseStyles}
				`;
				break;
			case 'highlight':
				baseStyles = css`
					background-color: ${theme.colors.highlight};
					${baseStyles}
				`;
				break;
		}

		return css`
			${baseStyles}
			${props.fullWidth &&
			css`
				width: 100%;
				display: block;
			`} /* Override display for fullWidth */
		`;
	}}
`;

export default Button;
