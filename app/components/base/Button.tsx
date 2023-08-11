import React, {FC} from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import styled from 'styled-components'

type ButtonProps = {
	primary?: boolean;
	to: string;
	page?: string;
	onClick?: (e: any) => void;
	smooth: boolean;
	duration: number;
	spy: boolean;
	text?: string;
	activePage?: any;
}

const Button: FC<ButtonProps> = ({ primary, to, smooth, duration, spy, text, activePage }) => {
	return (
		<motion.button
			whileHover={{scale: 1.1}}
			whileTap={{scale: 0.9}}
		>
			<ButtonComp
				primary={primary}
				to={to}
				page={to}
				onClick={(e) => {
					activePage(e.target.getAttribute("page"));
				}}
				smooth={smooth}
				duration={duration}
				spy={spy}
			>
				{text}
			</ButtonComp>
		</motion.button>
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
