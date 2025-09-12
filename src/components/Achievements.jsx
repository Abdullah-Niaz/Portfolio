import React from "react";

const Achievements = () => {
  const list = [
    "100-day LeetCode Streak",
    "83 WPM Typing Speed (97% accuracy)",
    "Completed ML courses (Krish Naik, Udemy)",
    "Freelancing (WordPress bulk upload, product sourcing)"
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Achievements</h2>
        <ul className="space-y-4 text-gray-300">
          {list.map((a, i) => (
            <li key={i} className="bg-gray-800 py-3 rounded">{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
