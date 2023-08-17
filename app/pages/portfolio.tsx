import type { FC } from 'react'
import styled from 'styled-components'
import Projects from '~/components/Projects/Projects'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'

type PortfolioProps = {
	toggleModal: ((e?: any, type?: string) => void);
}

const Portfolio: FC<PortfolioProps> = ({ toggleModal }) => {
	const portRef = useScrollIntoView('portfolio')
	
  return (
    <Section id="portfolio" ref={portRef}>
      <Container>
        <Typography>Portfolio</Typography>
        <Projects toggleModal={toggleModal} />
      </Container>
    </Section>
  )
}

export default Portfolio

const Section = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding-top: 80px;
  color: #ccdbe5;
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 0 150px;
  }
`
const Typography = styled.h4`
  font-size: 48px;
  font-family: 'Playfair Display', Serif;
  font-weight: normal;
  text-align: center;
  margin-bottom: 50px;
`
