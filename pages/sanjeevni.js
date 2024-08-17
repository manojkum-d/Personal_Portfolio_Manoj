import React from "react";
import Image from "next/image";
import sanjeevniLogo from "../public/assets/projects/sanjeevni-setu.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const SanjeevniSetu = () => {
  return (
    <>
      <Head>
        <title>Manoj | Portfolio</title>
        <meta name="description" content="Created by Manoj Kumar D" />
        <link rel="icon" href="/logoo.png" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolue z-1"
            layout="fill"
            objectFit="cover"
            src={sanjeevniLogo}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Sanjeevni Setu</h2>
            <p>
              Next.js / React Native / Node.js / Express / MongoDB / Docker / ML
              / Cloudinary
            </p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              Sanjeevni Setu is a comprehensive multi-platform Electronic Health
              Record (EHR) system designed to streamline healthcare management.
              The platform includes a Next.js-based UI for hospitals and
              administrators, and a React Native mobile app for users. Users can
              upload documents, view their medical details in intuitive charts,
              set up medication reminders, and generate unique QR codes for easy
              access to their health records. Hospitals can scan user QR codes
              to securely retrieve and upload patient documents, manage records,
              and ensure data integrity. The project integrates Cloudinary for
              efficient document storage and Docker for containerized deployment
              of services.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/manojkum-d/Sanjeevni_setu_Hospital_Web"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://sanjeevni-setu-hospital-web.vercel.app/"
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
                  Next.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  React Native
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Node.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Express
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  MongoDB
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Docker
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Machine Learning
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Cloudinary
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

export default SanjeevniSetu;
