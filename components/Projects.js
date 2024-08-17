import React from "react";
import ProjectItem from "./ProjectItem";
import guidedImg from "../public/assets/projects/guided.png";
import sanjeevniImg from "../public/assets/projects/sanjeevni-setu.png";
import fitgenuisLogo from "../public/assets/projects/fitgenius-banner.png";

import blindImg from "../public/assets/projects/blind1.png";

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
            title="Sanjeevni Setu"
            backgroundImg={sanjeevniImg}
            projectUrl="/sanjeevni"
            tech="NextJs | React Native | Node js"
          />
          <ProjectItem
            title="Guided"
            backgroundImg={guidedImg}
            projectUrl="/guided"
            tech=" React | Socket.io | Node js"
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
