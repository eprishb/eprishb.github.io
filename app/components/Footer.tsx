import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Footer = () => {
	const [scrollNav, setScrollNav] = useState(false)

	const copyrightYear = new Date().getFullYear();

	const onScroll = () => {
    if (window.scrollY >= 1) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
	}

	useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])

	return (
		<FooterCont>
			<Bar $scrollNav={scrollNav}>
				<Copyright>
					<p>
						&copy; 
						<span
						>{copyrightYear} </span>
						Seven Times Design <br />
						Made with React <br />
						All Rights Reserved.
					</p>
				</Copyright>
				<p><a href="https://www.freepik.com/free-vector/app-development-illustration_10301602.htm#page=2&query=woman%20web%20developer&position=38&from_view=search&track=ais">Vector Image by pikisuperstar</a> on Freepik</p>
			</Bar>
    </FooterCont>
  )
}

export default Footer


const FooterCont = styled.footer``

const Bar = styled.div<{ $scrollNav?: boolean; }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	font-size: 10px;
	line-height: 1.25em;
	position: fixed;
	bottom: 0px;
	left: 0;
	color: #202945;
	background: ${props => props.$scrollNav ? 'white' : '#ccdbe5'};
	min-height: 56px;
	padding: 0 16px;
	transition: all 0.2s ease 0s;

	@media (min-width: 0px) and (orientation: landscape) {
		min-height: 48px;
	}
	
	@media (min-width: 600px) {
		padding: 0 24px;
		min-height: 64px;
	}
`

const Copyright = styled.div``