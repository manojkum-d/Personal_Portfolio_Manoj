import React from "react";
import Image from "next/image";
import projectBanner from "../public/assets/projects/micro.png"; // Update this with the correct image path
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const microservicespro = () => {
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
            src={projectBanner} // Update this with the correct image import
            alt="Project Banner"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Food Delivery System with Microservices</h2>
            <p>Node.js / MongoDB / Docker</p> {/* Update the technologies */}
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This project is a comprehensive solution designed to handle all
              aspects of order management. It integrates with various services
              such as delivery management, message queues, and logging systems
              to ensure smooth and efficient order processing. The platform
              allows users to create, update, cancel, and retrieve orders with
              ease. Additionally, it leverages RabbitMQ for seamless
              communication between services and features robust logging
              mechanisms to track order actions and delivery statuses.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/manojkum-d/Delivery_System_Microservices" // Update with the correct GitHub link
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://delivery-system-microservices.onrender.com/" // Update with the correct demo link
            >
              <button className="px-8 py-2 mt-4">Demo</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {/* <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Tailwind
                </p> */}
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
                  RabbitMQ
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Docker
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

export default microservicespro;
