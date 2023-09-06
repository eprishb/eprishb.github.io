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
					<h3>Work Experience</h3>
					<h5>
						Crafting Code, Shaping Solutions:
						<br />
						Explore My Journey
					</h5>
					<hr/>
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
	align-self: center;

	h3 {
		font-weight: 500;
		margin-bottom: 20px;
	}

	h5 {
		font-family: 'Playfair Display', serif;
		font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1200 - 320));
		font-weight: 500;
	}

	hr {
		width: 25%;
		max-width: 200px;
		margin-top: 10px;
		border: solid 2px #bf4953;
	}
`

const Details = styled.div`
	width: 60%;
	max-height: calc(90vh - 64px - 64px);
	overflow: scroll;
`