import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Journey from "../components/Journey";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Manoj | Portfolio</title>
				<meta name="description" content="Created by Manoj Kumar d" />
				<link rel="icon" href="/logoo.png" />
			</Head>
			<Main />
			<About />
			<Journey/>
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
