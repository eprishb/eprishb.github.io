import type { FC } from 'react'
import styled from 'styled-components'
import Projects from '~/components/Projects/Projects'
import Container from '~/components/base/Container'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'

type PortfolioProps = {
	toggleModal: ((e?: any, type?: string) => void);
}

const Portfolio: FC<PortfolioProps> = ({ toggleModal }) => {
	const portRef = useScrollIntoView('portfolio')
	
  return (
    <Section id="portfolio" ref={portRef}>
      <StyledContainer>
				<Main>
					<h3>Portfolio</h3>
					<h5>
						Unlocking Digital Potential:
						<br />
						Explore My Work
					</h5>
					<hr />
				</Main>
				<Details>
					<Projects toggleModal={toggleModal} />
				</Details>
      </StyledContainer>
    </Section>
  )
}

export default Portfolio

const Section = styled.section`
  min-height: 100vh;
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
