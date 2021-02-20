import React, { useState } from "react";

import data from "../data";

const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <>
      <section className="bg-gradient-to-b from-blue-600 to-gray-600 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 h-screen lg:pt-32">
        {items.map((item) => {
          const { id, path, desc, link } = item;
          return (
            <div className="flex flex-wrap justify-center">
              <div key={id} className="w-124 px-4">
                <a href={link} rel="noreferrer">
                  <img
                    src={path}
                    alt={desc}
                    className="shadow rounded max-w-full h-auto align-middle border-none opacity-80 hover:opacity-100"
                  />
                </a>
                <small className="block text-center text-white font-semibold text-lg">
                  {desc}
                </small>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
