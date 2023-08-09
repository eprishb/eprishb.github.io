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
import { createHead } from "remix-island";

import { GlobalStyles } from '~/theme/GlobalStyles'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const Head = createHead(() => {
	return (
		<>
			<Meta />
			<Links />
			<GlobalStyles />
		</>
	)
})

export default function App() {
  return (
		<>
			<Head />
			<Outlet />
			<Scripts />
			<ScrollRestoration />
			{ process.env.NODE_ENV === "development" ?	<LiveReload /> : null }
    </>
  );
}

export function CatchBoundary() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>This is a catch boundary!</h1>
      <p>
        <a href="/">Go back home</a>
      </p>
    </div>
  );
}