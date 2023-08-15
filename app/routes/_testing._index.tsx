import type { V2_MetaFunction } from "@remix-run/node";

import { useEffect, useState } from 'react'
import { json } from '@remix-run/node'
import { getExperienceDescriptions, getProjectDescriptions } from '~/models/description.server'
import { getImages, getFeatImages, getJobImages, getProjectImages, getThemeIcons } from "~/models/image.server";
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

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
	const [expDescs, projDescs, imgs, featImgs, jobImgs, projImgs, themeIcons] = await Promise.all([
		getExperienceDescriptions(),
		getProjectDescriptions(),
		getImages(),
		getFeatImages(),
		getJobImages(),
		getProjectImages(),
		getThemeIcons(),
	])

	return json({ expDescs, projDescs, imgs, featImgs, jobImgs, projImgs, themeIcons })
}

export default function TestingIndex() {
	// Theme
	// const { theme, themeLoaded } = useTheme()
	// const [selectedTheme, setSelectedTheme] = useState(theme)
	const [loading, setLoading] = useState(true)
	
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
						<Hero />
						<About />
						<Experience />
						<Portfolio />
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