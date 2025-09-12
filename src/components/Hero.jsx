import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        Hi, I’m <span className="text-cyan-400">Abdullah Niaz</span> 👋
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-6">
        Building impactful software solutions, solving complex problems, and preparing for advanced research in Computer Science.
      </p>
      <div className="flex gap-4">
        <a href="/resume.pdf" className="px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-cyan-300">
          Download Resume
        </a>
        <a href="#projects" className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-400">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
