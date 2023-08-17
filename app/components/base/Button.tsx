import type {FC} from 'react'
import styled from 'styled-components'

type ButtonProps = {
	onClick?: () => void;
	text?: string;
	activePage?: any;
	icon?: boolean;
	children: string | string[] | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Button: FC<ButtonProps> = ({ onClick, text, activePage, icon, children }) => {
	return (
		<ButtonComp
			onClick={onClick}
			$icon={icon}
		>
			{children}
		</ButtonComp>
	)
}

export default Button

const ButtonComp = styled.button<{ $icon?: boolean; }> `
	background: ${props => props.$icon ? 'none' : '#BF4953'};
	color: #ccdbe5;
	width: ${props => props.$icon ? 'fit-content' : '150px' };
	font-size: ${props => props.$icon ? '24px' : 'calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320))'};
	margin-right: ${props => props.$icon ? '24px' : '16px'};
	margin-top: ${props => props.$icon ? '0' : '16px'};
	padding: ${props => props.$icon ? 'unset' : '16px'};
	border: ${props => props.$icon ? 'unset' : '2px solid #BF4953'};
	border-radius: ${props => props.$icon ? 'unset' : '3px'};
`
