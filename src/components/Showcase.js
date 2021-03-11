import React from "react";
import { Link } from "react-router-dom";
import { FaCss3, FaHtml5, FaJsSquare, FaNode, FaReact} from 'react-icons/fa';


const Showcase = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-indigo-800 via-green-200 to-indigo-600 h-screen md:h-vh lg:h-screen bg-scroll">
        <div className="w-3/4 m-auto pt-8 text-center">
          <h1 className="text-indigo-900 font-bold text-xl md:text-2xl lg:text-4xl">
            Philip Minielly is a
            <span className="text-indigo-900 font-extrabold text-xl md:text-2xl lg:text-4xl">
              {" "}
              web developer
            </span>{" "}
            looking for new{" "}
            <span className="text-indigo-900 font-extrabold text-xl md:text-2xl lg:text-4xl">
              {" "}
              opportunities .{" "}
            </span>
          </h1>
          <h2 className="text-indigo-900 text-xl md:text-2xl lg:text-4xl mt-10">
            My goal is to utilize the
            <span className="text-indigo-900font-extrabold text-xl md:text-2xl lg:text-4xl">
              {" "}
              MERN STACK
            </span>{" "}
            to develop full stack web applications that solve real world
            problems.
          </h2>
          <h3 className="text-indigo-900 font-semibold text-xl md:text-2xl lg:text-4xl mt-10">
            I'm confident
            <span className="text-indigo-900 font-extrabold text-xl md:text-2xl lg:text-4xl">
              {" "}
              my skills and work ethic
            </span>{" "}
            will make me an asset to any team or project.
          </h3>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
