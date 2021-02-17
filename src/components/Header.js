import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between py-3 px-5 absolute w-full text-white">
        <div className="logo">
          <h2 className="text-3xl">
            <Link to="/">Philip Minielly</Link>
          </h2>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="mr-5 bg-gray-900 p-1 px-4 rounded-full font-semibold transition-all hover:bg-black">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
