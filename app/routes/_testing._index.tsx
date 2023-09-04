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
import Hero from '~/sections/Hero'
import About from "~/sections/About";
import Experience from "~/sections/Experiences";
import Portfolio from "~/sections/Portfolio";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Modal from "~/components/Modals/Modal";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Seven Times Design" },
		{ name: "description", content: "Web Development, Brand Strategy, and Graphic Design" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://eprisr.github.io/" },
		{ property: "og:title", content: "Seven Times Design" },
		{ property: "og:description", content: "Web Development, Brand Strategy, and Graphic Design" },
		{ property: "og:image:url",	content: "http://eprisr.github.io/portfolio-social.jpg" },
		{ property: "og:image:secure_url", content: "https://eprisr.github.io/portfolio-social.jpg" },
		{ property: "twitter:card", content: "summary_large_image" },
		{ property: "twitter:url", content: "https://eprisr.github.io/" },
		{ property: "twitter:title", content: "Seven Times Design" },
		{ property: "twitter:description", content: "Web Development, Brand Strategy, and Graphic Design" },
		{ property: "twitter:image", content: "https://eprisr.github.io/portfolio-social.jpg" },
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
						<Modal
							showModal={showModal}
							toggleModal={toggleModal}
							content={modalContent}
						/>
						<Hero />
						<About />
						<Experience />
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
`