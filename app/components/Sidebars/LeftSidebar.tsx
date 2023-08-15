import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styled from 'styled-components'

const LeftSidebar = () => {
  return (
    <Sidebar>
      <List>
        <ListItem>
          <ListItemIcon>
            <SocialButton
              href="mailto: eharrisburnett@gmail.com"
              target="_blank">
              <MdEmail />
            </SocialButton>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SocialButton href="https://github.com/eprishb" target="_blank">
              <FaGithubSquare />
            </SocialButton>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SocialButton
              href="https://linkedin.com/in/eprishb"
              target="_blank">
              <FaLinkedin />
            </SocialButton>
          </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <Typography> CONTACT ME </Typography>
    </Sidebar>
  )
}

export default LeftSidebar

const Sidebar = styled.div`
	position: fixed;
	top: 50%;
	left: 24px;
	width: 15px;
  text-align: center;
  color: #ccdbe5;
  transform: translate(-50%, -50%);

  span {
    display: block;
    font-size: 10px;
    margin-top: 55px;
    white-space: nowrap;
    transform: rotate(-90deg);
  }
`

const List = styled.ul`
	padding: 8px 0;
	margin: 0;
	position: relative;
	list-style: none;
`

const ListItem = styled.li`
	width: 100%;
	display: flex;
	position: relative;
	box-sizing: border-box;
	text-align: left;
	align-items: center;
	padding-top: 8px;
	padding-bottom: 8px;
	justify-content: flex-start;
	text-decoration: none;
`

const ListItemIcon = styled.div`
	color: rgba(0, 0, 0, 0.54);
	display: inline-flex;
	min-width: 56px;
	flex-shrink: 0;
`

const IconButton = styled.a`
	display: inline-flex;
	flex: 0 0 auto;
	align-items: center;
	vertical-align: middle;
	justify-content: center;
	position: relative;
	padding: 12px;
	margin: 0;
	text-decoration: none;
	text-align: center;
	color: #ccdbe5;
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
`

const SocialButton = styled(IconButton)`
	padding: 0;
`

const Divider = styled.hr`
	height: 100px;
	width: 1px;
	margin: auto;
	background-color: rgb(204, 219, 229);
	border: none;
`

const Typography = styled.p`
	display: block;
	font-size: 10px;
	margin-top: 55px;
	white-space: nowrap;
	transform: rotate(-90deg);
`
