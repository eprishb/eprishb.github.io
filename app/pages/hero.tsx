import { useContext } from 'react'
import styled from 'styled-components'
import Button from '~/components/base/Button'
import HeroImage from '~/assets/profile_web.png'
import { NavContext } from '~/context/NavContext'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'

const Hero = () => {
	const { dispatch } = useContext(NavContext)
	const heroRef = useScrollIntoView('hero')
  
	return (
    <Jumbotron id="hero" ref={heroRef}>
      <Container>
        <HeroContent>
          <Para className="main">Hi! I'm &Eacute;pris. I am a ... </Para>
          <H3>
            Technical <br />
            <span>&</span> Visual
          </H3>
          <Para className="second">Problem Solver</Para>
          <div>
            <Button
              onClick={() => dispatch({ type: "UPDATE_PAGE", payload: 'portfolio' })}
						>
							VIEW MY WORK
            </Button>
            <Button
              onClick={() => dispatch({ type: "UPDATE_PAGE", payload: 'about' })}
						>
							MORE ABOUT ME
            </Button>
          </div>
        </HeroContent>
      </Container>
    </Jumbotron>
  )
}

export default Hero

const Jumbotron = styled.section`
  height: 100vh;
	background-image: url(${HeroImage});
  background-size: cover;
`
const Container = styled.div`
  max-width: 1100px;
  margin: 0 50px;

  @media screen and (min-width: 768px) {
    margin: 0 150px;
  }
`

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 64px);
  padding: 100px 0;
  color: #ccdbe5;

  @media screen and (max-width: 375px) {
    button {
      height: 50px;
      margin-bottom: 10px;
    }
  }
`

const H3 = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: calc(48px + (96 - 48) * (100vw - 320px) / (1200 - 320));
  font-weight: 800;
  line-height: 1;

  span {
    font-family: 'Playfair Display', serif;
  }
`

const Para = styled.p`
  font-family: 'Lato', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  font-style: italic;

  &.main {
    font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1200 - 320));
  }

  &.second {
    font-size: calc(16px + (56 - 16) * (100vw - 320px) / (1200 - 320));
    margin-bottom: 32px;
  }
`
