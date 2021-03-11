import React from "react";

import data from "../data";

const Projects = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-indigo-800 via-green-200 to-indigo-600 h-vh">
        <div className="flex flex-col p-2 m-2 justify-center">
          {data.map((item) => {
            const { id, path, desc, link, title } = item;
            return (
              <div
                key={id}
                className="flex md:flex-row border border-indigo-900 bg-white rounded-md shadow-lg m-4"
              >
                <a href={link} rel="noreferrer" target="_blank">
                  <img
                    src={path}
                    alt={title}
                    className="rounded-full justify-items-center border border-indigo-900 p-2 m-2 h-40 w-40 md:h-80 md:w-80 object-cover lg:opacity-90 lg:hover:opacity-100" 
                  />
                </a>

                <div className="grid grid-rows font-bold w-3/5 p-2 m-2">
                  <h1 className="max-h-12 font-extrabold text-center text-l text-indigo-900 md:text-2xl underline">
                    {title}
                  </h1>
                  <div className="max-h-full font-bold text-center text-sm md:text-l text-indigo-900">
                    {desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
