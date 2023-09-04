import styled from 'styled-components'
import Container from '~/components/base/Container'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'

const About = () => {
	const aboutRef = useScrollIntoView('about')

	return (
		<Section id="about" ref={aboutRef}>
			<StyledContainer>
				<Intro>
					<h3>About Me</h3>
					<Greeting>Hello, I'm &Eacute;pris Richardson</Greeting>
					<p className='pronunciation'>(pronounced aye-pree)</p>
					<p className="intro">I'm a software developer based in Charlotte, NC.</p>
					<hr/>
				</Intro>
				<Details>
					<AboutText>As an individual with a passion for both Software Development and Graphic Design, I thrive in the intersection of technology and art, creating seamless digital experiences that leave a lasting impression. From an early age, I began exploring technology and discovered a natural talent for drawing. During the MySpace era, I combined these skills by customizing pages for friends, sparking my journey into graphic design. Later, I ventured back into development, merging creativity with logic once again.</AboutText>
					<Skill>
						<p>Software Engineering Skills</p>
						<ul>
							<li><span>Programming Languages:</span> Javascript, Typescript</li>
							<li><span>Frameworks/Libraries:</span> React, Remix, ExpressJs, Lodash</li>
							<li><span>Testing:</span> Jest, React Testing Library, Mock Service Worker (MSW)</li>
							<li><span>Database:</span> MongoDB, Firebase</li>
							<li><span>Version Control:</span> Git, Github, AWS</li>
							<li><span>Web:</span> Responsive Design, Accessibility</li>
							<li><span>Marketing:</span> HubSpot, Google Analytics, Google Search Console, Google Tag Manager</li>
							<li><span>Other:</span> Sentry, Trello, Shortcut</li>
						</ul>
					</Skill>
					<Skill>
						<p>Graphic Design Skills</p>
						<ul>
							<li><span>Adobe Creative Suite:</span> InDesign, Illustrator, Photoshop, XD, After Effects</li>
							<li><span>UI/UX:</span> Figma</li>
							<li><span>Niches:</span> Branding and Identity, Print Design, Web Design, ECommerce</li>
							<li><span>Industries:</span> Food and Hospitality, Marketing and Branding</li>
						</ul>
					</Skill>
				</Details>
			</StyledContainer>
		</Section>
	)
}

export default About

const Section = styled.section `
	display: grid;
	place-items: center;
	min-height: 100vh;
	// color: #ccdbe5;
`
const StyledContainer = styled(Container) `
	display: flex;
	justify-content: space-between;
	> div {
		margin-bottom: 20px;
	}
	
	@media (min-width: 768px) {
		> div {
			margin-bottom: unset;
		}
	}
`

const Greeting = styled.h5 `
	font-family: 'Playfair Display', serif;
	font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1200 - 320));
	font-weight: 500;
`

const Intro = styled.div `
	width: 50%;
	max-width: 600px;
	align-self: center;

	h3 {
		font-weight: 500;
		margin-bottom: 20px;
	}

	.pronunciation {
		font-style: italic;
	}

	.intro {
		line-height: 1.5em;
		letter-spacing: .0325em;
	}

	hr {
		width: 25%;
		max-width: 200px;
		margin-top: 10px;
		border: solid 2px #bf4953;
	}
`

const Details = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 75%;
`

const AboutText = styled.p`
	flex: 1 0 100%;
	margin-bottom: 15px;
`

const Skill = styled.div`
	flex: 1 1 50%;

	li {
		list-style-position: inside;
	}

	li::marker {
		content: '• ';
		font-size: 0.8em;
	}

	p {
		font-style: italic;
		font-weight: bold;
		margin-bottom: 5px;
	}

	span {
		font-weight: bold;
	}
`