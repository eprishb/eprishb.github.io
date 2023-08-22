import styled from 'styled-components'
import profile from '~/assets/EprisR.jpg'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'

const About = () => {
	const aboutRef = useScrollIntoView('about')

	return (
		<Section id="about" ref={aboutRef}>
			<Container>
				<Profile>
					<img src={profile} alt="Epris R" style={{width: 300, height:'auto'}} />
				</Profile>
				<Intro>
					<Greeting>Hello, I'm &Eacute;pris Richardson</Greeting>
					<p className="intro" style={{ marginBottom: '10px' }}>I'm a software engineer based in Charlotte, NC.</p>
					<p>As an individual with a passion for both Software Engineering and Graphic Design, I thrive in the intersection of technology and art, creating seamless digital experiences that leave a lasting impression. From an early age, I began exploring technology and discovered a natural talent for drawing. During the MySpace era, I combined these skills by customizing pages for friends, sparking my journey into graphic design. Later, I ventured back into development, merging creativity with logic once again.</p>
				</Intro>
				<Tech>
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
				</Tech>
				<Design>
					<p>Graphic Design Skills</p>
					<ul>
						<li><span>Adobe Creative Suite:</span> InDesign, Illustrator, Photoshop, XD, After Effects</li>
						<li><span>UI/UX:</span> Figma</li>
						<li><span>Niches:</span> Branding and Identity, Print Design, Web Design, ECommerce</li>
						<li><span>Industries:</span> Food and Hospitality, Marketing and Branding</li>
					</ul>
				</Design>
			</Container>
		</Section>
	)
}

export default About

const Section = styled.section `
	display: grid;
	place-items: center;
	min-height: 100vh;
	color: #ccdbe5;
`
const Container = styled.div `
	max-width: 1100px;
	margin: 0 50px;

	> div {
		margin-bottom: 20px;
	}
	
	@media (min-width: 768px) {
		margin: 0 150px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: max-content 1fr;
		grid-template-areas:
			"intro intro"
			"tech design"
			"tech design";
		column-gap: 15px;
		row-gap: 25px;

		> div {
			margin-bottom: unset;
		}
	}

	@media (min-width: 992px) {
		grid-template-columns: max-content repeat(2, 1fr);
		grid-template-rows: max-content repeat(2, 1fr);
		grid-template-areas:
			"intro intro intro"
			"photo tech design"
			"photo tech design";
	}

	@media (min-width: 1200px) {
		grid-template-areas:
			"photo intro intro"
			"photo tech design"
			"photo tech design";
	}
`

const Profile = styled.div `
	display: none;
	grid-area: photo;

	@media (min-width: 992px) {
		display: block;
	}
`
const Intro = styled.div `
	max-width: 600px;
	grid-area: intro;

	.intro {
		line-height: 1.5em;
		font-style: italic;
	}
`

const Skill = styled.div`
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

const Tech = styled(Skill)`
	grid-area: tech;
`

const Design = styled(Skill)`
	grid-area: design;
`

const Greeting = styled.h5 `
	font-family: 'Playfair Display', serif;
	font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1200 - 320));
	font-weight: 500;
`
