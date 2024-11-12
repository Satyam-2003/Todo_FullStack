import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-20 text-center">
      <p>
        Created by <strong>Satyam Singh</strong> |
        <a
          href="https://github.com/Satyam-2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 mx-2"
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/satyam2001singh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 mx-2"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
