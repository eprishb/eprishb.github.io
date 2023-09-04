import { type FC } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'
import Container from '~/components/base/Container'

type ExperienceProps = {
	toggleModal: ((type?: string | undefined, e?: any) => void);
}

const Experience: FC<ExperienceProps> = ({ toggleModal }) => {
	const { jobs } = useLoaderData()
	const expRef = useScrollIntoView('experience')

	return (
    <Section id="experience" ref={expRef}>
      <StyledContainer>
        <Heading>Work Experience</Heading>
				<ExperienceDetails>
					{jobs.map((job: any, index: number) => (
						<Img key={index} src={job.src} alt={job.company} id={job.company} $width={job.width} onClick={(e) => toggleModal('experience', e.currentTarget)} />
          ))}
				</ExperienceDetails>
      </StyledContainer>
    </Section>
  )
}

export default Experience;

const Section = styled.section`
  display: grid;
  place-items: center;
  margin-top: 80px;
	scroll-margin-top: 80px;
`
const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	max-width: calc(100vw - 20px);
	position: relative;
	overflow: hidden;

  @media screen and (min-width: 768px) {
		position: unset;
		overflow: unset;
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
	flex-direction: column;
	justify-content: center;
`

const Img = styled.img<{ $width: string }>`
	width: ${props => props.$width};
	margin-bottom: 15px;
`
