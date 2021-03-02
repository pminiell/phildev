import React from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaJsSquare, FaCss3, FaNode, FaReact } from "react-icons/fa";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="w-4/5 m-auto pt-8 text-center">
          <h1 className="text-white font-semibold text-xl md:text-2xl lg:text-4xl">
            Philip Minielly is a
            <span className="text-gray-100 font-extrabold text-xl md:text-2xl lg:text-4xl">
              {" "}
              web developer
            </span>{" "}
            looking for new{" "}
            <span className="text-gray-100 font-extrabold text-xl md:text-2xl lg:text-4xl">
              {" "}
              opportunities .{" "}
            </span>
          </h1>
          <h2 className="text-white text-xl md:text-2xl lg:text-4xl mt-10">
            My goal is to utilize the
            <span className="text-gray-100 font-extrabold text-xl md:text-2xl lg:text-4xl">
              {" "}
              MERN STACK
            </span>{" "}
            to develop full stack web applications that solve real world
            problems.
          </h2>
          <h3 className="text-white font-semibold text-xl md:text-2xl lg:text-4xl mt-10">
            I'm confident
            <span className="text-gray-100 font-extrabold text-xl md:text-2xl lg:text-4xl">
              {" "}
              my skills and work ethic
            </span>{" "}
            will make me an asset to any team or project.
          </h3>
          <div className="w-3/6 m-auto flex flex-row justify-center ">
            <FaHtml5 size={56} color="#F16529" />
            <FaCss3 size={56} color="#3C99DC" />
            <FaJsSquare size={56} color="yellow" />
            <FaNode size={56} color="green" />
            <FaReact size={56} color="#61DBFB" />
          </div>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="h-auto mr-5 bg-gray-700 p-2 px-4 rounded-full font-semibold text-white text-xs md:text-base transition-all hover:bg-black"
            >
              Contact
            </Link>
            <Link
              to="/projects"
              className="h-auto mr-5 bg-gray-700 p-2 px-4 rounded-full font-semibold text-white text-xs md:text-base transition-all hover:bg-black"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
