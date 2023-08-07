import { useEffect, useState } from 'react'
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ClientOnly } from 'remix-utils'
import { createPortal } from "react-dom";

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '~/theme/GlobalStyles'
import { useTheme } from '~/theme/useTheme'

import Loader from '~/components/base/Loader'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function Head() {
	return (
		<>
			<Meta />
			<Links />
			{typeof document === "undefined"
				? "__STYLES__"
				: null}
		</>
	)
}

export default function App() {
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
		<>
			<GlobalStyles />
			<ClientOnly>{() => createPortal(<Head />, document.head)}</ClientOnly>
			{loading === false ? (
				<>
					{ themeLoaded && (
						<ThemeProvider theme={selectedTheme}>
							<Outlet />
						</ThemeProvider>
					)}
				</>
			) : ( <Loader />)}
			<ScrollRestoration />
			<Scripts />
			{ process.env.NODE_ENV === "development" ?	<LiveReload /> : null }
		</>
  );
}
