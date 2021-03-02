import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 fixed inset-x-0 bottom-0">
      <div className="w-4/6 m-auto space-x-1 flex justify-center">
        <a href="https://github.com/pminiell" rel="noreferrer noopener" target="_blank">
          <FaGithub size={24} color="#211F1F" />
        </a>
        <a
          href="https://www.linkedin.com/in/philip-minielly-162230191/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaLinkedin size={24} color="#006192" />
        </a>
        <a href="https://twitter.com/PhilipMinielly" rel="noreferrer" target="_blank">
          <FaTwitter size={24} color="#55ACEE" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
