import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container mx-auto mt-4 mb-4">
        <nav className="flex-row md:justify-between">
          <div className="logo">
            <h2 className="text-3xl">
              <Link to="/">Philip Minielly - Web Developer</Link>
            </h2>
          </div>
          <div className="md:hidden">
            <button onClick={handleClick}>
              <FaAlignJustify size={36} color="#F16529" />
            </button>
            {isOpen && (
              <div>
                {" "}
                <ul className="bg-blue-500 flex-row p-5">
                  <li className="mt-2">
                    <Link
                      to="/"
                      className="pr-5 bg-none p-1 px-4 rounded-full font-semibold transition-all hover:bg-blue-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/projects"
                      className="pr-5 bg-none p-1 px-4 rounded-full font-semibold transition-all  hover:bg-blue-300"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/contact"
                      className="pr-5 bg-green-700 p-1 px-4 rounded-full font-semibold transition-all  hover:bg-green-800"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <ul className="hidden md:flex md:flex-row pt-5">
            <li className="pr-5">
              <Link
                to="/"
                className="pr-5 bg-none p-1 px-4 rounded-full font-semibold transition-all hover:bg-blue-300"
              >
                Home
              </Link>
            </li>
            <li className="pr-5">
              <Link
                to="/projects"
                className="pr-5 bg-none p-1 px-4 rounded-full font-semibold transition-all  hover:bg-blue-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="pr-5 bg-green-700 p-1 px-4 rounded-full font-semibold transition-all  hover:bg-green-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
