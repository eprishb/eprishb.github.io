import React from 'react'
import { Frame } from 'framer'
import { Jobs } from '../../../assets/img/images'
import LaunchIcon from '@material-ui/icons/Launch';
import { styled as MaterialStyled } from '@material-ui/core/styles'
import styled from 'styled-components'

const Experience = ({ toggleModal }) => {

	return (
		<Section id="experience">
			<Container>
				<Heading>Work Experience</Heading>
					<ExperienceDetails>
						{
							Jobs.map((job, index) => (
								<Details
									key={index}
									size={200}
									position={"relative"}
									background={""}
									whileHover={{
										background: "#bf4953"
									}}
								>
									{job.icon}
									<Typography>{job.company}</Typography>
									<Typography className="overline">{job.jobTitle}</Typography>
									<Launch 
										id={job.company}
										onClick={(e) => toggleModal(e.currentTarget, "experience")}
									/>
								</Details>
							))
						}
					</ExperienceDetails>
			</Container>
		</Section>
	)
}

export default Experience;

const Section = styled.section `
	min-height: 100vh;
	display: grid;
	place-items: center;
	padding-top: 64px;
	color: #ccdbe5;
`
const Container = styled.div `
	max-width: 1100px;
	margin: 0 50px;
	display: flex;
	flex-direction: column;
	
	@media screen and (min-width: 768px) {
		margin: 0 150px;
	}
`
const Heading = styled.h4 `
	font-size: 48px;
	font-family: 'Playfair Display', Serif;
	font-weight: normal;
	text-align: center;
	margin-bottom: 50px;
`
const ExperienceDetails = styled.div `
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`
const Details = styled(Frame) `
	padding: 15px;
	margin: 20px;
	border: 1px solid #BF4953;
	border-top: 10px solid #BF4953;

	position: relative;
	overflow: hidden;
`
const Typography = styled.p `
	font-weight: normal;

	&.overline {
		font-family: 'Playfair Display', serif;
		font-weight: 500;
		line-height: normal;
		position: absolute;
		top: 100px;
		color: #ccdbe5;
	}
`
const Launch = MaterialStyled(LaunchIcon)({
	fontSize: 18,
	position: "absolute",
	bottom: 5,
	right: 5,
	cursor: "pointer"
});