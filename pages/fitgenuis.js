import React from "react";
import Image from "next/image";
import fitgenuisLogo from '../public/assets/projects/fitgenius-banner.png'
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const FitGenius = () => {
	return (
		<>
		<Head>
				<title>Manoj | Portfolio</title>
				<meta name="description" content="Created by Manoj Kumar d" />
				<link rel="icon" href="/logoo.png" />
			</Head>
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolue z-1"
					layout="fill"
					objectFit="cover"
					src={fitgenuisLogo}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">AI-Personal Trainer</h2>
					<p>React JS / Tailwind / Python / OpenCV / AI </p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
					
FitGenius, a personalized fitness and nutrition companion application, emerged victorious at a 24-hour national-level hackathon hosted by St. Joseph University. With an extensive library boasting over
 850 workouts and personalized diet plans, it&apos;s designed to cater to users&apos; individual health goals. Features include detailed workout descriptions, instructional videos for proper form, and advanced algorithms 
 generating personalized diet recommendations based on fitness goals, body composition, and dietary preferences. The platform also offers comprehensive tools like calorie calculators, meal planners, and progress trackers, 
 empowering users to monitor their fitness journey effectively. Additionally, an AI-powered chatbot provides personalized guidance and motivation, while cutting-edge AI technology enables food calorie detection and analysis simply by taking a photo. 
 Integration with OpenCV ensures real-time form detection during workouts, 
enhancing safety and effectiveness. With its sleek UI and winning combination of features, our project revolutionizes the way individuals approach their health and wellness journey.
					</p>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/manojkum-d/FitGenius.git"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://fitgenius-ai.netlify.app/"
					>
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								React
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Tailwind
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JavaScript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Streamlit
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Gemini-Pro AI Model
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								OpenCV
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
		</>
	);
};

export default FitGenius;
