import styled, {css} from 'styled-components';
import theme from './theme';

interface ButtonProps {
	fullWidth?: boolean;
	variation?: 'primary' | 'secondary' | 'accent' | 'background' | 'highlight';
}

const Button = styled.button<ButtonProps>`
	${props => {
		switch (props.variation) {
			case 'primary':
				return css`
					background-color: ${theme.colors.primary};
					color: white;
				`;
			case 'secondary':
				return css`
					background-color: ${theme.colors.secondary};
					color: white;
				`;
			case 'accent':
				return css`
					background-color: ${theme.colors.accent};
					color: white;
				`;
			case 'background':
				return css`
					background-color: ${theme.colors.background};
					color: white;
				`;
			case 'highlight':
				return css`
					background-color: ${theme.colors.highlight};
					color: white;
				`;
		}
	}}
`;

export default Button;
