import type {FC} from 'react'
import styled from 'styled-components'

type ButtonProps = {
	onClick?: (e: any) => void;
	text?: string;
	activePage?: any;
}

const Button: FC<ButtonProps> = ({ text, activePage }) => {
	return (
		<ButtonComp
			onClick={(e) => {
				activePage(e.target.getAttribute("page"));
			}}
		>
			{text}
		</ButtonComp>
	)
}

export default Button

const ButtonComp = styled.a<ButtonProps> `
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
