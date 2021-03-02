import React, { useState } from "react";

import data from "../data";

const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <>
      <section className="min-h-0 md:min-h-screen bg-gradient-to-b from-blue-600 to-gray-600 grid md:grid-cols-2 gap-5 sm:grid-cols-1 lg:grid-cols-3 pt-16">
        {items.map((item) => {
          const { id, path, desc, link } = item;
          return (
            <div className="flex flex-wrap justify-center ">
              <div key={id} className="w-124 px-4">
                <a href={link} rel="noreferrer" target="_blank">
                  <img
                    src={path}
                    alt={desc}
                    className="shadow rounded max-w-full h-auto align-middle border-none opacity-80 hover:opacity-100"
                  />
                </a>
                <small className="block text-center text-white font-semibold text-xl lg:text-2xl">
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
