import React from "react";
import ProjectItem from "./ProjectItem";


import fitgenuisLogo from '../public/assets/projects/fitgenius-banner.png'

import blindImg from "../public/assets/projects/blind.png";


const Projects = () => {
	return (
		<div id="projects" className="w-full pt-8">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl uppercase tracking-widest text-[#1E90FF]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="FitGenius"
						backgroundImg={fitgenuisLogo}
						projectUrl="/fitgenuis"
						tech="React | AI"
					/>
					<ProjectItem
						title="Blind-Aid"
						backgroundImg={blindImg}
						projectUrl="/blind"
						tech="Andriod App | Kotlin"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
