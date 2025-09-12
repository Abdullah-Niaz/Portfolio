import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-cyan-400">Abdullah Niaz</h1>
        <ul className="flex space-x-6">
          {["Home", "About", "Projects", "Skills", "Achievements", "Education", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
