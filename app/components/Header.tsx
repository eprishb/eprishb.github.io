import { useContext, useState, useEffect } from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import logo from '../assets/7TD-logo.png'
import { NavContext } from '~/context/NavContext'
import Button from './base/Button'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  // const classes = useStyles();
	const { dispatch } = useContext(NavContext)
  const [isOpen, setIsOpen] = useState(false)
	const [scrollNav, setScrollNav] = useState(false)
	
	const navigate = () => {
		dispatch({ type: 'UPDATE_PAGE', payload: 'hero' });
		document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
	}

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const onScroll = () => {
    if (window.scrollY >= 200) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])

  return (
    <Nav $scrollNav={scrollNav}>
      <Bar>
				<LogoButton
					onClick={navigate}
        >
          <img src={logo} alt="Seven Times Design" />
        </LogoButton>
        {/* <ThemeSelector setter={setter} /> */}
				<MenuButton onClick={toggleMenu} icon>
					<RxHamburgerMenu />
        </MenuButton>
      </Bar>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </Nav>
  )
}

export default Header

const Nav = styled.nav<{ $scrollNav?: boolean; }>`
	background: ${props => props.$scrollNav ? 'white' : '#ccdbe5'};
	height: 64px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	z-index: 10;
	transition: all 0.8s ease 0s;
`

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
	align-items: center;
  height: 64px;
  width: 100%;
  padding: 0;
  z-index: 1;
`

const LogoButton = styled.a`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 24px;
  cursor: pointer;

  img {
    width: 110px;
    height: auto;
  }
`

const MenuButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-self: flex-end;
	width: fit-content;
	height: 100%;
	font-size: 24px;
	padding: 0;
  margin-right: 24px;
	margin-top: 0;
  color: #ccdbe5;
  cursor: pointer;
	background: none;
	border: none;
	border-radius: unset;

	@media (min-width: 768px) {
		display: none;
	}
`
