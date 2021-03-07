import React from 'react'
import { styled } from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../assets/7TD-logo.png'

const Header = () => {
	// const classes = useStyles();
	
	return (
		<Nav color="transparent">
			<Bar>
				<LogoButton edge="start" >
					<img src={logo} alt="Seven Times Design" />
				</LogoButton>
				{/* <ThemeSelector setter={setter} /> */}
				<MenuButton edge="end" aria-label="Navigation Menu">
					<MenuIcon />
				</MenuButton>
			</Bar>
		</Nav>
	)
}

export default Header

const Nav = styled(AppBar)({
	flexGrow: 1,
	transition: 'none',
	boxShadow: 'none'
});

const Bar = styled(Toolbar)({
	justifyContent: 'space-between'
})

const LogoButton = styled(IconButton)({
	justifyContent: 'start',
	
	'& img': {
		width: '100px',
		height: 'auto'
	}
})

const MenuButton = styled(IconButton)({
	color: '#ccdbe5'
})

