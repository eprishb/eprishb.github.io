import type {FC} from 'react'
import styled from 'styled-components'

type ButtonProps = {
	primary?: boolean;
	onClick?: (e: any) => void;
	text?: string;
	activePage?: any;
}

const Button: FC<ButtonProps> = ({ primary, text, activePage }) => {
	return (
		<ButtonComp
			primary
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
	background: ${props => props.primary ? "#BF4953" : "rgba(0,0,0,0)" };
	color: ${props => props.primary ? "#ccdbe5" : "#BF4953"};

	width: 150px;
	font-size: calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320));
	margin-right: 16px;
	margin-top: 16px;
	padding: 16px;
	border: 2px solid #BF4953;
	border-radius: 3px;
`
