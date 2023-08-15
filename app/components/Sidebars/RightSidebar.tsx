import React, { useContext, useEffect, useState } from 'react'
import type { FC } from 'react'
import PropTypes from 'prop-types'
import { motion, LayoutGroup } from 'framer-motion'
import styled from 'styled-components'
import { NavContext } from '~/context/NavContext'

const pageIds = ['hero', 'about', 'experience', 'portfolio']

const RightSidebar = () => {
	const { activePage, dispatch } = useContext(NavContext)
	const [selected, setSelected] = useState(activePage)

  const updateActiveSelected = (pageId: string) => {
    dispatch({ type: 'UPDATE_PAGE', payload: pageId })
		document.getElementById(pageId.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
		setSelected(pageId)
		console.log(pageId, "updated from right sidebar click")
  }

	useEffect(() => {
		if(activePage !== '') console.log(activePage, "updated from menu or scroll")
		setSelected(activePage)
  }, [activePage])

  return (
    <Sidebar>
      <LayoutGroup id="page-progress">
        <ul>
          {pageIds.map((pageId) => (
            <CircleLink
              key={pageId}
            >
              <Circle
                isSelected={selected === pageId}
                onClick={() => updateActiveSelected(pageId)}
              />
            </CircleLink>
          ))}
        </ul>
      </LayoutGroup>
    </Sidebar>
  )
}

RightSidebar.propTypes = {
  inView: PropTypes.bool,
}

export default RightSidebar

type CircleProps = {
	pageId?: string;
	isSelected: boolean;
	onClick: () => void;
}

const Circle: FC<CircleProps> = ({ isSelected, onClick }) => {
  return (
    <li className="outline" onClick={onClick}>
      {isSelected && (
        <motion.div
          layoutId="item"
          className="item"
          initial={false}
          transition={spring}
        />
      )}
    </li>
  )
}

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

const CircleLink = styled.a`
  margin: 10px 0;
`

const Sidebar = styled.div`
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translate(-50%, -50%);

  ul {
    display: flex;
    flex-direction: column;
  }

  .item {
    position: absolute;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    cursor: pointer;
    background-color: #ccdbe5;
  }

  .outline {
    position: relative;
    display: block;
    width: 15px;
    height: 15px;
    border: 2px solid #ccdbe5;
    border-radius: 50%;
    flex-shrink: 0;
  }
`
