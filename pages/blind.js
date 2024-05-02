import React from "react";
import Image from "next/image";
import Head from "next/head";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import blindImg from "../public/assets/projects/blind.png";

const Blind = () => {
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
					src={blindImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Blind-Aid</h2>
					<p>Andriod / Kotlin / OpenCV</p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
					This Android app is designed to assist users with various functionalities using Google Voice, OpenCV, and gesture recognition. It offers features like object detection, 
					location tracking, calculator, 
					time and date display, battery status monitoring, and printed text reading using the camera.
					</p>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/manojkum-d/Appathon-Blind-Aid"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://drive.google.com/file/d/1esVWCTvyfbQKRZXmZWBschEhO48V8Ib9/view"
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
								Andriod
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								XML
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								OpenCV
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Weather API
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Google Assistant
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

export default Blind;
