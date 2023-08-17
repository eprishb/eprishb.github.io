import type { V2_MetaFunction } from "@remix-run/node";

import { useEffect, useState } from 'react'
import { json } from '@remix-run/node'
import { getExperienceDescriptions, getProjectDescriptions } from '~/models/description.server'
import { getFeatProjects, getProjectImages, getThemeIcons, getProjThumbs, getJobs } from "~/models/cardDetails.server";
import styled from "styled-components";

// import { ThemeProvider } from 'styled-components'
// import { useTheme } from '~/theme/useTheme'

import Loader from '~/components/base/Loader'
import NavProvider from "~/context/NavContext";
import Hero from '~/pages/Hero'
import About from "~/pages/About";
import Experience from "~/pages/Experiences";
import Portfolio from "~/pages/Portfolio";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Sidebars from "~/components/Sidebars/Sidebars";
import Modal from "~/components/Modals/Modal";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
	const [expDescs, projDescs, projThumbs, featProjs, jobs, projImgs, themeIcons] = await Promise.all([
		getExperienceDescriptions(),
		getProjectDescriptions(),
		getProjThumbs(),
		getFeatProjects(),
		getJobs(),
		getProjectImages(),
		getThemeIcons(),
	])

	return json({ expDescs, projDescs, projThumbs, featProjs, jobs, projImgs, themeIcons })
}

export default function TestingIndex() {
	// Theme
	// const { theme, themeLoaded } = useTheme()
	// const [selectedTheme, setSelectedTheme] = useState(theme)
	const [loading, setLoading] = useState(true)

	// Modal on experience and portfolio cards
  const [showModal, setShowModal] = useState(false)
	const [modalContent, setModalContent] = useState({})
	
	// Toggle modal
  const toggleModal = (type: string | undefined, e: any) => {
		setShowModal(!showModal)
    setModalContent({ id: e?.id, type: type })
  }

	
	useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  // useEffect(() => {
  //   setSelectedTheme(theme)
  // }, [themeLoaded])
	
	return (
		<NavProvider>
			<main>
				{loading === false ? (
					<Wrapper>
						<Header />
						<Sidebars />
						<Modal
							showModal={showModal}
							toggleModal={toggleModal}
							content={modalContent}
						/>
						<Hero />
						<About />
						<Experience toggleModal={toggleModal} />
						<Portfolio toggleModal={toggleModal} />
						<Footer />
					</Wrapper>
				) : (<Loader />)}
			</main>
		</NavProvider>
  );
}

const Wrapper = styled.div`
  transition: 0.3 ease-in-out;
  margin-bottom: 64px;
`