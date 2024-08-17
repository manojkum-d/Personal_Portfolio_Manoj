import React from "react";
import Image from "next/image";
import guidedLogo from "../public/assets/projects/guided.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const Guided = () => {
  return (
    <>
      <Head>
        <title>Manoj | Guided</title>
        <meta name="description" content="Created by Manoj Kumar D" />
        <link rel="icon" href="/logoo.png" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={guidedLogo}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Guided - Real-time Communication Platform</h2>
            <p>React / Node.js / MongoDB / Express / Socket.io</p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              Guided is a real-time communication platform developed to
              facilitate effective interactions between students, faculty, and
              peers. Leveraging the power of Socket.io, it enables users to
              create groups and channels for interactive discussions. The
              platform is designed with user roles in mind, including admin,
              faculty, and student roles, allowing for streamlined management of
              communication and platform functionality. Additionally, global
              error handling ensures a smooth user experience, while the
              role-based structure supports organized and efficient
              collaboration across the board.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/manojkum-d/Guided_Frontend"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://guided-frontend.vercel.app/"
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
                  Node.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  MongoDB
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Express
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Socket.io
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

export default Guided;
