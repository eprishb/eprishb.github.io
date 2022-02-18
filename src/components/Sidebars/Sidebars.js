import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import styled from 'styled-components'

const Sidebars = ({ activePage, updateActivePage }) => {

	return (
		<Wrapper>
			<LeftSidebar />
			<RightSidebar activePage={activePage} updateActivePage={updateActivePage} />
		</Wrapper>
	)
}

export default Sidebars

const Wrapper = styled.div `

`