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

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{
		rel: "stylesheet",
		href: "https://use.fontawesome.com/releases/v5.15.2/css/all.css", integrity: "sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu",
		crossOrigin: "anonymous"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
	}
];

export const Head = createHead(() => (
		<>
			<Meta />
			<Links />
		</>
	)
)

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