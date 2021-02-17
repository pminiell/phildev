import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center text-white px-5">
          <h1 className="text-5xl font-semibold text-right mb-10 lg:text-center">
            Hello. I am <span className="text-gray-900">web developer</span>. <span className="text-gray-900">Do hire.</span>. Thanks you.
          </h1>

          <div className="ml-auto">
            <Link to="/contact" className="mr-5 bg-gray-900 p-2 px-4 rounded-full font-semibold transition-all hover:bg-black">Get in Touch</Link>
            <Link to="/projects" className="mr-5 bg-gray-900 p-2 px-4 rounded-full font-semibold transition-all hover:bg-black">Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
