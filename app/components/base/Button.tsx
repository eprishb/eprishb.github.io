import type {FC} from 'react'
import styled from 'styled-components'

type ButtonProps = {
	onClick?: () => void;
	text?: string;
	activePage?: any;
	children: string | string[] | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Button: FC<ButtonProps> = ({ onClick, text, activePage, children }) => {
	return (
		<ButtonComp
			onClick = {onClick}
		>
			{children}
		</ButtonComp>
	)
}

export default Button

const ButtonComp = styled.button<ButtonProps> `
	background: #BF4953;
	color: #ccdbe5;
	width: 150px;
	font-size: calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320));
	margin-right: 16px;
	margin-top: 16px;
	padding: 16px;
	border: 2px solid #BF4953;
	border-radius: 3px;
`
