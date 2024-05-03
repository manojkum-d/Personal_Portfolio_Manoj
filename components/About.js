import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpeg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 px-2 md:px-0">
				<div className="col-span-2 flex flex-col justify-center text-left md:text-left">
					<p className="uppercase text-xl tracking-widest text-[#1E90FF]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 justify-center">
						I am Manoj Kumar D, a passionate and innovative software developer currently pursuing a Master's in Computer Applications (MCA) at Christ University. With expertise in React, Express, MongoDB, Node.js, and Go Lang, 
						I am committed to tackling real-life projects and crafting impactful solutions. My proactive approach is evident through my participation in multiple hackathons, 
						where I secured 2nd place at St. Joseph University's national event, showcasing my ability to thrive in competitive environments.
					</p>
					<p className="py-2 text-gray-600">
						My endeavors reflect a broader commitment to leveraging technology for societal betterment. 
						Whether through developing innovative solutions or participating in impactful projects, I aim to contribute meaningfully to the software development field. 
						With a passion for continuous learning and a drive to make a difference,
						 I am poised to tackle future challenges and drive positive change through technology.
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects
						</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
