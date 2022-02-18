import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from './theme/useTheme'
import { Header, Sidebars, Hero, About, Experience, Portfolio, Footer } from './components'
import Loader from './components/Loader'
import Modal from './components/Modal/Modal'
import { GlobalStyles } from './theme/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import ThemeSelector from './ThemeSelector'

const App = () => {

	// Theme
  const {theme, themeLoaded} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
	const [loading, setLoading] = useState(true);
	// Default active page - hero
	const [activePage, setActivePage] = useState("hero");
	// Modal on experience and portfolio cards
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState();

	// Updates active page based on selection in sidebar or menu, or in view
	const updateActivePage = (page, e) => {
		console.log(page, e);
		if (e) setActivePage(page);
		else if (e === undefined) setActivePage(page.toLowerCase());
		return
	}

	// Toggle modal
	const toggleModal = (e, type) => {
		setShowModal(!showModal);
		setModalContent({id: e.id, type: type})
	}

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);


	return (
		<>
			{loading === false ? (
			<>
				{
					themeLoaded && <ThemeProvider theme={selectedTheme}>
						<GlobalStyles />
						<Wrapper>
							<Header
								ThemeSelector={ThemeSelector}
								setter={setSelectedTheme}
								activePage={updateActivePage}
							/>
							<Sidebars activePage={activePage} updateActivePage={updateActivePage} />
							<Modal showModal={showModal} toggleModal={toggleModal} content={modalContent} />
							<VisibilitySensor
								partialVisibility
								onChange={(e) => { if (e) updateActivePage('hero', e) }}
							>
								<Hero activePage={updateActivePage} />
							</VisibilitySensor>
							<VisibilitySensor
								partialVisibility
								minTopValue={200}
								onChange={(e) => { if (e) updateActivePage('about', e) }}
							>
								<About />
							</VisibilitySensor>
							<VisibilitySensor
								partialVisibility
								minTopValue={200}
								onChange={(e) => { if (e) updateActivePage('experience', e) }}
							>
								<Experience toggleModal={toggleModal} />
							</VisibilitySensor>
							<VisibilitySensor
								partialVisibility
								minTopValue={200}
								onChange={(e) => { if (e) updateActivePage('portfolio', e) }}
							>
								<Portfolio toggleModal={toggleModal} />
							</VisibilitySensor>
							{/* <Contact /> */}
							<Footer activePage={activePage} />
						</Wrapper>
					</ThemeProvider>
				}
			</>
			) : (
				<Loader />
			)}
		</>
  );
}

export default App;

const Wrapper = styled.div `
	transition: 0.3 ease-in-out;
	margin-bottom: 64px;
`