import React from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaJsSquare, FaCss3, FaNode, FaReact } from "react-icons/fa";

const Showcase = () => {
  return (
    <>
      <section className="showcase min-h-0 md:min-h-screen ">
        <div className="w-4/6 m-auto overlay flex flex-col items-center justify-center text-white px-5">
          <h1 className="lg:text-5xl text-2xl font-semibold mb-10 text-center">
            Philip Minielly is a
            <span className="text-gray-900 text-3xl lg:text-6xl font-extrabold">
              {" "}
              web developer
            </span>{" "}
            looking for new{" "}
            <span className="text-gray-900 text-3xl lg:text-6xl font-extrabold">
              {" "}
              opportunities .{" "}
            </span>
          </h1>
          <h1 className="lg:text-5xl text-2xl font-semibold mb-10 text-center">
            I'm confident
            <span className="text-gray-900 text-3xl lg:text-6xl font-extrabold">
              {" "}
              my skills and work ethic
            </span>{" "}
            will make me an asset to any team or project.
          </h1>
          <div className="w-3/6 flex flex-row justify-evenly">
            <FaHtml5 size={56} color="#F16529" />
            <FaCss3 size={56} color="#3C99DC" />
            <FaJsSquare size={56} color="yellow"/>
            <FaNode size={56} color="green" />
            <FaReact size={56} color="#61DBFB"/>
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              to="/contact"
              className="mr-5 bg-gray-700 p-2 px-4 rounded-full font-semibold transition-all hover:bg-black"
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="mr-5 bg-gray-700 p-2 px-4 rounded-full font-semibold transition-all hover:bg-black"
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
