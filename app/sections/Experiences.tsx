import { type FC } from 'react'
import styled from 'styled-components'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'
import Container from '~/components/base/Container'
import ExperienceDetails from '~/components/Modals/ExperienceDetails'

type ExperienceProps = {
}

const Experience: FC<ExperienceProps> = () => {
	const expRef = useScrollIntoView('experience')

	return (
    <Section id="experience" ref={expRef}>
			<StyledContainer>
				<Main>
					<Heading>Work Experience</Heading>
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
	overflow: scroll;
`

const Heading = styled.h4`
  font-size: 48px;
  font-family: 'Playfair Display', Serif;
  font-weight: normal;
  margin-bottom: 50px;
`
