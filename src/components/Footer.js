import React from 'react'
import { Toolbar } from '@material-ui/core'
import styled from 'styled-components'

function Footer({ activePage }) {
	return (
		<FooterCont>
			<Toolbar>
				<Copyright>
					&copy; 2021 Seven Times Design <br />
					Made with React <br />
					All Rights Reserved.
				</Copyright>
				<PageCounter page={activePage}>
					{activePage === 'hero' && 1}
					{activePage === 'about' && 2}
					{activePage === 'experience' && 3}
					{activePage === 'portfolio' && 4}
					{activePage === 'contact' && 5}
					 /5
				</PageCounter>
			</Toolbar>
		</FooterCont>
	)
}

export default Footer

const FooterCont = styled.footer `
	.MuiToolbar-regular {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		font-size: 10px;
		position: fixed;
		bottom: 0px;
		left: 0;
		color: #ccdbe5;
	}

	@media screen and (max-width: 768px) {
		.MuiToolbar-regular {
			background: #202945;
		}
	}
`
const Copyright = styled.div ``

const PageCounter = styled.div ``