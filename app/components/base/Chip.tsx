import type {FC} from 'react'
import styled from 'styled-components'

type ChipProps = {
	children: string | string[] | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Chip: FC<ChipProps> = ({ children }) => {
	const techSkills = ['Javascript', 'Typescript', 'React', 'Remix', 'ExpressJs', 'Lodash', 'React Testing Library', 'Mock Service Worker (MSW)',  'MongoDB', 'Firebase', 'Git', 'Github', 'AWS', 'Responsive Design', 'Accessibility', 'HubSpot', 'Google Analytics', 'Google Search Console', 'Google Tag Manager', 'Sentry', 'Trello', 'Shortcut']
	const designSkills = ['InDesign', 'Illustrator', 'Photoshop', 'XD', 'AfterEffects', 'Figma', 'Branding and Identity', 'Print Design', 'Web Design']
	
	return (
		<StyledChip className='outline'>{ children }</StyledChip>
	)
}

export default Chip

const StyledChip = styled.div`
	display: inline-flex;
	padding: 5px 10px;
	margin: 5px;
	border-radius: 50px;
	width: fit-content;
	font-size: .75em;

	&.outline {
		border: 1.5px solid #bf4953;
		color: #bf4953;
		outline: none;
	}
`