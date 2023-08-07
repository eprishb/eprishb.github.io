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
import { GlobalStyles } from './theme/GlobalStyles'

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
  return (
		<>
			<GlobalStyles />
			<ClientOnly>{() => createPortal(<Head />, document.head)}</ClientOnly>
			<Outlet />
			<ScrollRestoration />
			<Scripts />
			{ process.env.NODE_ENV === "development" ?	<LiveReload /> : null }
		</>
  );
}
