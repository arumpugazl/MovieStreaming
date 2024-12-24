import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-violet-700 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-lg">
          AnimeVerse
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className=" font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="/anime" className=" font-bold">
              Anime List
            </a>
          </li>
          <li>
            <a href="/about" className=" font-bold">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className=" font-bold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
