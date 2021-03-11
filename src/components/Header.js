import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="">
      <div className="px-8 mx-auto border">
        <div className="flex justify-center md:justify-between">
          <div className="flex flex-col md:flex-row space-x-2 p-2 text-extrabold items-center">
            <div>
              <Link to="/" className="text-indigo-900 text-2xl font-extrabold">
                Philip Minielly - Web Developer
              </Link>
            </div>
            <button
              className="flex font-bold p-4 md:hidden bg-indigo-400 rounded-lg text-white"
              onClick={openDrawerHandler}
            >
              {isDrawerOpen ? (
                "Close"
              ) : (
                <FaAlignJustify size={24} color="white" />
              )}
            </button>
            {isDrawerOpen ? (
              <div className="flex flex-col mt-2 items-center bg-green md:hidden">
                <Link className="flex font-bold" to="/">
                  Home
                </Link>
                <Link to="/projects" className="flex font-bold">
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="flex font-bold animate-pulse bg-indigo-400 p-1 rounded-md"
                >
                  Contact
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="hidden md:flex space-x-2 p-2 items-center">
            <div className="rounded-md p-2 transition-all font-extrabold hover:bg-indigo-400">
              <Link to="/" className="text-indigo-900">Home</Link>
            </div>
            <div className="rounded-md p-2 transition-all font-extrabold hover:bg-indigo-400">
              <Link to="/projects" className="text-indigo-900">
                Projects
              </Link>
            </div>
            <div className="rounded-md p-2 transition-all font-extrabold bg-indigo-900 hover:bg-indigo-400">
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
