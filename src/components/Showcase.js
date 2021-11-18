import React from "react";
import { Link } from "react-router-dom";
import { FaCss3, FaHtml5, FaJsSquare, FaNode, FaReact } from "react-icons/fa";
import data from "../data";

const Showcase = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-indigo-800 via-green-200 to-indigo-900 h-screen md:h-vh lg:h-screen bg-fixed">
        <div className="grid justify-items-center">
          <img
            src={data[0].path}
            alt={data[0].title}
            className="rounded-full border border-indigo-900 h-36 w-36 md:h-80 md:w-80 object-cover m-4"
          />
          <h1 className="rounded-full justify-items-center lg:w-1/3 bg-indigo-900 text-white text-xl md:text-2xl lg:text-3xl text-center font-bold p-4 m-4">
            Hi , my name is Phil!
          </h1>
          <h1 className="rounded-lg justify-items-center w-2/3 bg-indigo-900 text-white text-l md:text-xl lg:text-2xl text-center p-4 m-4">
            I'm a Web Developer looking for opportunities to learn and grow. To
            see some of the things I've built or to get in touch , click on the
            links below. The about link will take you to an article I wrote
            about my journey in software up to this point !
          </h1>
          <div className="w-3/4 m-auto pt-8 text-center">
            <div className="w-4/6 m-auto flex flex-row space-x-2 justify-center p-4">
              <FaHtml5 size={56} color="#F16529" />
              <FaCss3 size={56} color="#3C99DC" />
              <FaJsSquare size={56} color="yellow" />
              <FaNode size={56} color="green" />
              <FaReact size={56} color="#61DBFB" />
            </div>
            <div className="flex justify-center p-4">
              <Link
                to="/contact"
                className="h-auto mr-5 bg-indigo-900 p-2 px-4 rounded-md font-extrabold text-white text-xs md:text-base transition-all hover:bg-indigo-500"
              >
                Contact
              </Link>
              <Link
                to="/projects"
                className="h-auto mr-5 bg-indigo-900 p-2 px-4 rounded-md font-extrabold text-white text-xs md:text-base transition-all hover:bg-indigo-500"
              >
                Projects
              </Link>
              <a
                href="https://www.linkedin.com/pulse/philip-minielly-hirabledev-philip-minielly/?trackingId=dl8luhAAUccZuICShwIX2w%3D%3D"
                rel="noreferrer noopener"
                target="_blank"
                className="h-auto mr-5 bg-indigo-900 p-2 px-4 rounded-md font-extrabold text-white text-xs md:text-base transition-all hover:bg-indigo-500"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
