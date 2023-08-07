import { motion } from 'framer-motion'
import styled from 'styled-components'
import logo from '~/assets/7TD-logo.png'

export default function Loader() {
  return (
    <Container>
      <MotionWrapper>
        <motion.div
          animate={{
            scale: 2,
            opacity: 0,
          }}
          transition={{
            duration: 2,
            ease: 'easeOut',
            loop: Infinity,
          }}
        />
      </MotionWrapper>
      <img src={logo} alt="Seven Times Design" />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #202945;
  position: relative;

  img {
    max-width: 300px;
    background-color: #202945;
    position: absolute;
  }
`

const MotionWrapper = styled.div`
  div {
    width: 290px;
    height: 110px;
    border: 1px solid #ccdbe5;
    border-radius: 3px;
  }
`
