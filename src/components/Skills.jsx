import React from "react";

const Skills = () => {
  const skillGroups = {
    Languages: ["Python", "C++", "JavaScript"],
    Frameworks: ["Django", "React", "Bootstrap"],
    Tools: ["Git", "VSCode", "Linux"],
    Data: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillGroups).map(([category, skills], i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((s, j) => (
                  <span key={j} className="px-3 py-1 bg-gray-700 rounded">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
