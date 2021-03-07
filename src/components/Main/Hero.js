import React from 'react'
import styled from 'styled-components'
import heroImage from '../../assets/profile_web.png'

const Hero = () => {
	return (
		<Jumbotron>
			<Container>
				<HeroContent>
					<Para className="main">Hi! I'm &Eacute;pris. I am a ... </Para>
					<H3>Technical <br/><span>&</span> Visual</H3>
					<Para className="second">Problem Solver</Para>
					<div>
						<HeroButton primary>VIEW MY WORK</HeroButton>
						<HeroButton>MORE ABOUT ME</HeroButton>
					</div>
				</HeroContent>
			</Container>
		</Jumbotron>
	)
}

export default Hero;

const Jumbotron = styled.section `
	height: 100vh;
	padding-top: 64px;
	background-image: url(${heroImage});
	background-size: cover;
`
const Container = styled.div `
	max-width: 1100px;
	margin: 0 auto;
`

const HeroContent = styled.div `
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: calc(100vh - 64px);
	padding: 100px 0;
	color: #ccdbe5;
`

const H3 = styled.h3 `
	font-family: 'Playfair Display', serif;
	font-size: calc(48px + (96 - 48) * (100vw - 320px) / (1200 - 320));
	font-weight: 800;
	line-height: 1;

	span {
		font-family: 'Playfair Display', serif;
		color: '#BF4953';
	}
`

const Para = styled.p `
	font-family: 'Lato', 'Helvetica', 'Arial', sanf-serif;
	font-weight: 300;
	font-style: italic;

	&.main {
		font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1200 - 320));
	}

	&.second {
		font-size: calc(16px + (56 - 16) * (100vw - 320px) / (1200 - 320));
	}
`

const HeroButton = styled.button `
	background: ${props => props.primary ? "#BF4953" : "#202945" };
	color: ${props => props.primary ? "#ccdbe5" : "#BF4953"};

	width: 150px;
	font-size: calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320));
	margin: 16px 16px 16px;
	padding: 16px;
	border: 2px solid #BF4953;
`