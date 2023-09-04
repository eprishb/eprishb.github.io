import { type FC, useState } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'
import Container from '~/components/base/Container'
import ExperienceDetails from '~/components/Modals/ExperienceDetails'

type ExperienceProps = {
}

const Experience: FC<ExperienceProps> = () => {
	const { jobs } = useLoaderData()
	const expRef = useScrollIntoView('experience')
	const [contentId, setContentId] = useState<number>(0)

	return (
    <Section id="experience" ref={expRef}>
			<StyledContainer>
				<Main>
					<Heading>Work Experience</Heading>
					<Company>
						{jobs.map((job: any, index: number) => (
							<Img key={index} className={contentId === index ? 'active' : ''} src={job.src} alt={job.company} id={job.company} $width={job.width} />
						))}
					</Company>
				</Main>
				<Details>
					<ExperienceDetails />
				</Details>
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
	justify-content: space-between;
	width: 100%;
	max-width: calc(100vw - 20px);
	position: relative;
	overflow: hidden;

  @media screen and (min-width: 768px) {
		position: unset;
		overflow: unset;
  }
`

const Main = styled.div`
	flex-direction: column;
	flex: 1 0 auto;
`

const Details = styled.div`
	width: 60%;
	max-height: calc(90vh - 64px - 64px);
`

const Heading = styled.h4`
  font-size: 48px;
  font-family: 'Playfair Display', Serif;
  font-weight: normal;
  margin-bottom: 50px;
`

const Company = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
`

const Img = styled.img<{ $width: string }>`
	width: ${props => props.$width};
	margin-bottom: 45px;
	opacity: .25;

	&.active {
		opacity: 1;
	}
`
