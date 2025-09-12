import React from "react";

const projects = [
  {
    title: "Twiky",
    desc: "A social tool for sharing quick thoughts.",
    tech: ["React", "CSS"],
    link: "https://github.com/Abdullah-Niaz/Twiky",
  },
  {
    title: "Game Development CPP",
    desc: "C++ racing game avoiding obstacles.",
    tech: ["C++"],
    link: "https://github.com/Abdullah-Niaz/Game_Development_CPP",
  },
  {
    title: "Finance Learning Assistant",
    desc: "AI-powered finance learning app.",
    tech: ["Python", "Streamlit"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, j) => (
                  <span key={j} className="px-2 py-1 bg-gray-700 text-sm rounded">{t}</span>
                ))}
              </div>
              <a href={proj.link} className="text-cyan-400 hover:underline">View Code</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
