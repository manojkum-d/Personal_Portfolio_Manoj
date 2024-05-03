import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Head from "next/head";


const Main = () => {
    const varients = {
        hidden: {
            scale: 0.8,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.4,
            },
        },
    };

	

    return (
		
<>
            <Head>
				<title>Manoj | Portfolio</title>
				<meta name="description" content="Created by Manoj Kumar d" />
				<link rel="icon" href="/logoo.png" />
			</Head>     
        <div id="home" className="w-full h-screen text-center relative">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <motion.div initial="hidden" animate="visible" variants={varients}>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Let&apos;s Build Something Together
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&apos;m <span className="text-[#1E90FF]">Manoj</span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Web developer',
                            500,
                            'Software Engineer',
                            500,
                            'Frontend Developer',
                            500,
                            'Backend Developer',
                            500,
                            'Freelancer',
                            500,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="py-2 font-bold text-gray-700 text-4xl sm:text-5xl md:text-6xl font-[Raleway]"
                        repeat={Infinity}
                    />
                    <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
                    Passionate and innovative software developer currently pursuing MCA at Christ University, dedicated to tackling real-life projects. 
                    Eager to contribute expertise in crafting impactful solutions.
                    </p>
                    
                    <div className="flex justify-between items-center max-w-[330px] mx-auto py-4">
                        <a
                            href="https://www.linkedin.com/in/manoj-xd/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href="https://github.com/manojkum-d/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </a>
                        <Link href="/#contact">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <a target="_blank" href="/Manoj_Kumar_Resume.pdf">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <BsPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full text-center mb-10">
    		<img src="../scroll-gif.gif" className="w-20 h-auto mx-auto" alt="Scroll GIF" />
			<span>Scroll Down</span>
			</div>
            

        </div>
        
        </>
    );
};

export default Main;
