import { useContext } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import { NavContext } from '~/context/NavContext';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdOutlineClose } from 'react-icons/md'

type MenuProps = {
	isOpen: boolean;
	toggleMenu: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, toggleMenu }) => {
	const { dispatch } = useContext(NavContext)
	const navLinks = ["About", "Experience", "Portfolio"]
	
	const handleClickLink = (page: string) => {
		document.getElementById(page.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
		dispatch({ type: 'UPDATE_PAGE', payload: page })
	}

  return (
    <Container $isOpen={isOpen}>
      <Icon onClick={toggleMenu}><ClosingIcon /></Icon>
      <MenuWrapper>
				<MenuItems>
					{ navLinks.map((page, key) => (
						<MenuLink
							key={key}
							onClick={(e) => {
								toggleMenu()
								handleClickLink(page)
							}}
						>
							{page}
						</MenuLink>
					))}
					<Resume href="./EprisR-Resume.pdf" download>
						{' '}
						Resum&eacute;{' '}
					</Resume>
					<Social>
						<SocialButton
              href="mailto: eharrisburnett@gmail.com"
              target="_blank">
              <MdEmail />
            </SocialButton>
						<SocialButton href="https://github.com/eprisr" target="_blank">
              <FaGithubSquare />
						</SocialButton>
						<SocialButton
              href="https://linkedin.com/in/eprishb"
              target="_blank">
              <FaLinkedin />
            </SocialButton>
					</Social>
        </MenuItems>
      </MenuWrapper>
    </Container>
  )
}

export default Menu

const Container = styled.aside <{ $isOpen: boolean; }>`
  display: block;
	margin-right: 15px;
	font-weight: 600;

	@media (max-width: 767px) {
		display: grid;
		place-items: center;
		min-width: 300px;
		max-width: 320px;
		height: 100%;
		margin-right: 0px;
		position: fixed;
		top: ${props => props.$isOpen ? '0' : '-100%'};
		right: 0;
		background: #202945;
		transition: 0.3s ease-in-out;
		opacity: ${props => props.$isOpen ? '100%' : '0'};
		z-index: 999;
	}
`
const Icon = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  background: transparent;
  cursor: pointer;

	@media (min-width: 768px) {
		display: none;
	}
`

const ClosingIcon = styled(MdOutlineClose)`
  color: #ccdbe5;
`

const MenuWrapper = styled.div`
  color: #202945;
`

const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`
const MenuLink = styled.a`
  padding: 20px;
  transition: 0.2s ease-in-out;
  color: #202945;
  cursor: pointer;

  &:hover {
    color: #bf4953;
    transition: 0.2s ease-in-out;
  }

  &.active {
    font-weight: bold;
    font-style: italic;
  }
`
const Resume = styled.a`
	padding: 20px;
	transition: 0.2s ease-in-out;
	color: #202945;
	cursor: pointer;
	text-decoration: none;

	@media (max-width: 767px) {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #BF4953;
		color: #ccdbe5;
		text-transform: uppercase;
		width: 150px;
		height: 60px;
		font-size: calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320));
		padding: 16px;
		border: 2px solid #bf4953;
		border-radius: 3px;
	}
`

const Social = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 767px) {
		margin-top: 0px;
		justify-content: start;
	}
`

const SocialButton = styled.a`
	padding: 12px;
	text-decoration: none;
	text-align: center;
	color: #202945;
	background-color: transparent;
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	overflow: visible;
	border-radius: 50%;
	border: 0;
	cursor: pointer;
	outline: 0;
	-moz-appearance: none;
	-webkit-appearance: none;
	-webkit-tap-highlight-color: transparent;
	line-height: 0;

	svg {
		vertical-align: bottom;
	}
`