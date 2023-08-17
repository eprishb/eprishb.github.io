import { useContext } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import { NavContext } from '~/context/NavContext';
import { MdOutlineClose } from 'react-icons/md'

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
          <Resume>
            <a href="./EprisHBResume.pdf" download>
              {' '}
              RESUM&Eacute;{' '}
            </a>
          </Resume>
        </MenuItems>
      </MenuWrapper>
    </Container>
  )
}

export default Menu

const Container = styled.aside <{ $isOpen: boolean; }>`
  display: grid;
  place-items: center;
  min-width: 300px;
  max-width: 320px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: #202945;
  transition: 0.3s ease-in-out;
  opacity: ${props => props.$isOpen ? '100%' : '0'};
  top: ${props => props.$isOpen ? '0' : '-100%'};
  z-index: 999;
`
const Icon = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  background: transparent;
  cursor: pointer;
`

const ClosingIcon = styled(MdOutlineClose)`
  color: #ccdbe5;
`

const MenuWrapper = styled.div`
  color: #ccdbe5;
`

const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const MenuLink = styled.a`
  padding: 20px;
  transition: 0.2s ease-in-out;
  color: #ccdbe5;
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
const Resume = styled.div`
  background: #BF4953;
  a {
    color: #ccdbe5;
    text-decoration: none;
  }

  width: 150px;
  font-size: calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320));
  padding: 16px;
  border: 2px solid #bf4953;
  border-radius: 3px;
`
