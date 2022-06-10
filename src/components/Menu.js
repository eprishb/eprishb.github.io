import React, { useState } from 'react'
import { Link } from 'react-scroll'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'

const Menu = ({ isOpen, toggleMenu, activePage }) => {
	return (
		<Container isOpen={isOpen} >
			<Icon onClick={toggleMenu} >
				<ClosingIcon />
			</Icon>
			<MenuWrapper>
				<MenuItem>
					<MenuLinks
						to='about'
						onClick={(e) => {
							toggleMenu();
							activePage(e.target.innerText);
						}}
						smooth={true}
						duration={1500}
						spy={true}
					>About</MenuLinks>
					<MenuLinks
						to='experience'
						onClick={(e) => {
							toggleMenu();
							activePage(e.target.innerText);
						}}
						smooth={true}
						duration={1500}
						spy={true}
					>Experience</MenuLinks>
					<MenuLinks
						to='portfolio'
						onClick={(e) => {
							toggleMenu();
							activePage(e.target.innerText);
						}}
						smooth={true}
						duration={1500}
						spy={true}
					>Portfolio</MenuLinks>
					<Resume primary>
						<a href="./EprisHBResume.pdf" download> RESUM&Eacute; </a>
					</Resume>
					{/* <MenuLinks
						to='contact'
						onClick={(e) => {
							toggleMenu();
							activePage(e.target.innerText);
						}}
						smooth={true}
						duration={1500}
						spy={true}
					>Contact</MenuLinks> */}
				</MenuItem>
			</MenuWrapper>
		</Container>
	)
}

export default Menu

const Container = styled.aside `
	display: grid;
	place-items: center;
	min-width: 300px;
	max-width: 320px;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	background: #202945;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	z-index: 999;
`
const Icon = styled.div `
	position: absolute;
	top: 18px;
	right: 18px;
	background: transparent;
	cursor: pointer;
`

const ClosingIcon = styled(CloseIcon) `
	color: #ccdbe5;
`

const MenuWrapper = styled.div `
	color: #ccdbe5;
`

const MenuItem = styled.ul `
	display: flex;
	flex-direction: column;
	text-align: center;

	@media screen and (max-width: 480px) {
	}
`
const MenuLinks = styled(Link) `
	padding: 20px;
	transition: 0.2s ease-in-out;
	color: #ccdbe5;
	cursor: pointer;

	&:hover {
		color: #bf4953;
		transition: 0.2s ease-in-out;
	}

	&.active {
		font-weight: bold;
		font-style: italic;
	}
`
const Resume = styled.div `
	background: ${props => props.primary ? "#BF4953" : "rgba(0,0,0,0)" };
	a {
		color: ${props => props.primary ? "#ccdbe5" : "#BF4953"};
		text-decoration: none;
	}

	width: 150px;
	font-size: calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320));
	padding: 16px;
	border: 2px solid #BF4953;
	border-radius: 3px;
`