import type { V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Index</h1>
			<Link to="/testing">
				Testing
			</Link>
    </main>
  );
}
