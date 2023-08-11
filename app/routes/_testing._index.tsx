import type { V2_MetaFunction } from "@remix-run/node";

import { useEffect, useState } from 'react'
import { json } from '@remix-run/node'
import { getExperienceDescriptions, getProjectDescriptions } from '~/models/description.server'
import { getImages, getFeatImages, getJobImages, getProjectImages, getThemeIcons } from "~/models/image.server";

import { ThemeProvider } from 'styled-components'
import { useTheme } from '~/theme/useTheme'

import Loader from '~/components/base/Loader'

import Hero from '~/pages/hero'
import About from "~/pages/about";
import Experience from "~/pages/experiences";
import Portfolio from "~/pages/portfolio";

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
  const { theme, themeLoaded } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
	const [loading, setLoading] = useState(true)
	
	useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded])
	
  return (
		<main>
			{loading === false ? (
				<>
					<Hero />
					<About />
					<Experience />
					<Portfolio />
				</>
			) : ( <Loader />)}
    </main>
  );
}
