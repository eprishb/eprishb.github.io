import type {FC, ReactElement} from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'
import {
	MdFace,
  MdFireplace,
	MdLocalDining,
	MdOutlineOpenInNew,
	MdSportsBasketball
} from 'react-icons/md'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'
type ExperienceProps = {
	toggleModal: ((type?: string | undefined, e?: any) => void);
}

type IconProps = {
	id: string;
	onClick: ((e?: any) => void);
	children: Element | ReactElement;
}

const stringToIcon : {[key: string]: any} = {
	MdFace: <MdFace />,
	MdFireplace: <MdFireplace />,
	MdLocalDining: <MdLocalDining />,
	MdSportsBasketball: <MdSportsBasketball />
}

const Experience: FC<ExperienceProps> = ({ toggleModal }) => {
	const { jobs } = useLoaderData()
	const expRef = useScrollIntoView('experience')

	return (
    <Section id="experience" ref={expRef}>
      <Container>
        <Heading>Work Experience</Heading>
        <ExperienceDetails>
					{jobs.map((job: any, index: number) => (
            <Details
							key={index}
						>
							{stringToIcon[job.icon]}
              <Typography>{job.company}</Typography>
							<Typography className="overline">{job.jobTitle}</Typography>
							<Icon
								id={job.company}
								onClick={(e) => toggleModal('experience', e.currentTarget)}
							>
								<OpenInNewWindow />
							</Icon>
            </Details>
          ))}
				</ExperienceDetails>
      </Container>
    </Section>
  )
}

export default Experience;

const Section = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding-top: 64px;
  color: #ccdbe5;
`
const Container = styled.div`
  max-width: 1100px;
  margin: 0 50px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 0 150px;
  }
`
const Heading = styled.h4`
  font-size: 48px;
  font-family: 'Playfair Display', Serif;
  font-weight: normal;
  text-align: center;
  margin-bottom: 50px;
`
const ExperienceDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const Details = styled.div`
	height: 200px;
	width: 200px;
  padding: 15px;
  margin: 20px;
  border: 1px solid #bf4953;
  border-top: 10px solid #bf4953;
  position: relative;
  overflow: hidden;

	&:hover {
		background-color: #bf4953;
	}
`
const Typography = styled.p`
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

const Icon = styled.div<IconProps>`
	fontSize: 18px;
	position: absolute;
	bottom: 5px;
	right: 5px;
	cursor: pointer;
`

const OpenInNewWindow = styled(MdOutlineOpenInNew)`
	color: #ccdbe5;
`
