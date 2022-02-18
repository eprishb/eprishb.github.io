import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const pageIds = ['hero', 'about', 'experience', 'portfolio']

const RightSidebar = ({ activePage, updateActivePage }) => {
	const [selected, setSelected] = useState(pageIds[0]);

	const updateActiveSelected = (e, pageId) => {
		e.preventDefault();
		setSelected(pageId);
		updateActivePage(e.target.getAttribute("page"));
	}

	useEffect(() => {
		setSelected(activePage)
	}, [activePage])

	return (
		<Sidebar>
			<AnimateSharedLayout>
				<ul>
					{pageIds.map(pageId => (
						<CircleLink
							key={pageId}
							to={pageId}
							smooth={true}
							duration={1500}
							spy={true}
						>
							<Circle
								pageId={pageId}
								isSelected={selected === pageId}
								onClick={(e) => updateActiveSelected(e, pageId)}
							/>
						</CircleLink>
					))}
				</ul>
			</AnimateSharedLayout>
		</Sidebar>
	)
}

RightSidebar.propTypes = {
	inView: PropTypes.bool
}

export default RightSidebar

function Circle({ pageId, isSelected, onClick }) {
	return (
		<li className="outline" page={pageId} onClick={onClick}>
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
  type: "spring",
  stiffness: 500,
  damping: 30
};

const CircleLink = styled(Link) `
	margin: 10px 0;
`

const Sidebar = styled.div `
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