import type { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ExperienceDetails from './ExperienceDetails'
import ProjectDetails from './ProjectDetails'
import { MdOutlineClose } from 'react-icons/md'
import styled from 'styled-components'

type ModalProps = {
	showModal: boolean;
	toggleModal: (e?: any, type?: string) => void;
	content: any;
}

const Modal: FC<ModalProps> = ({ showModal, toggleModal, content }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showModal && (
          <ModalContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: 0,
            }}>
            {content.type === 'experience' && (
              <ExperienceDetails content={content} />
            )}
            {content.type === 'portfolio' && (
              <ProjectDetails content={content} />
            )}
            <Icon onClick={() => toggleModal({ type: '', e: null })}><Close /></Icon>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal

const ModalContainer = styled(motion.div)`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background: #202945;
  position: fixed;
  z-index: 10;
`

const Icon = styled.div`
	width: 25px;
  height: 25px;
  position: absolute;
  top: 24px;
  right: 24px;
	cursor: pointer;
`

const Close = styled(MdOutlineClose)`
  color: #ccdbe5;
`
