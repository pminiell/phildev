import React, { useState } from "react";

import data from "../data";

const Projects = () => {
  const [items, setItems] = useState(data)
  
  return (
    <>
      <section className="py-20 px-5 bg-gradient-to-b from-blue-600 to-gray-600 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32">
        {items.map((item) => {
          const { id, path, desc } = item
          return (
            <div key={id}>
              <img src={path} alt={desc} className="p-5 bg-blue-300 rounded" />
              <small className="block text-center text-white font-semibold text-lg">{desc}</small>
            </div>
          ) 
        })}
      </section>
    </>
  );
};

export default Projects;
