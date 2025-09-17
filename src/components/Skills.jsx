// src/components/Skills.jsx
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaLinux,
  FaWindows,
  FaWordpress,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiFlask, SiMongodb, SiPostgresql, SiMysql, SiPandas, SiNumpy, SiOpencv, SiFlutter, SiKotlin, SiShopify } from "react-icons/si";

const categories = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQL / MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
      { name: "SQLite", icon: <FaDatabase className="text-gray-400" /> },
    ],
  },
  {
    title: "App Development",
    skills: [
      { name: "Dart", icon: <SiFlutter className="text-sky-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-purple-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
    
    ],
  },
  {
    title: "Data Science / Machine Learning",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
      { name: "Pandas", icon: <SiPandas className="text-green-400" /> },
      { name: "Matplotlib", icon: <FaDatabase className="text-pink-400" /> },
      { name: "Seaborn", icon: <FaDatabase className="text-blue-400" /> },
      { name: "Cufflinks", icon: <FaDatabase className="text-purple-400" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-red-400" /> },
      { name: "MATLAB", icon: <FaDatabase className="text-orange-400" /> },
      { name: "EDA / ML", icon: <FaDatabase className="text-green-300" /> },
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { name: "Vercel", icon: <FaDatabase className="text-white" /> },
      { name: "Netlify", icon: <FaDatabase className="text-green-500" /> },
      { name: "AWS (Django Deploy)", icon: <FaAws className="text-orange-500" /> },
    ],
  },
  {
    title: "CMS / Website Builders",
    skills: [
      { name: "WordPress", icon: <FaWordpress className="text-blue-400" /> },
      { name: "Elementor", icon: <FaWordpress className="text-pink-500" /> },
      { name: "Shopify CMS", icon: <SiShopify className="text-green-400" /> },
    ],
  },
  {
    title: "Tools & Environments",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "VS Code", icon: <FaDatabase className="text-blue-500" /> },
      { name: "Jupyter Notebook", icon: <FaDatabase className="text-orange-400" /> },
      { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
      { name: "Windows", icon: <FaWindows className="text-blue-500" /> },
      { name: "DOS / DOSBox", icon: <FaDatabase className="text-gray-400" /> },
    ],
  },
  {
    title: "Core CS / Problem Solving",
    skills: [
      { name: "Data Structures & Algorithms", icon: <FaDatabase className="text-green-500" /> },
      { name: "OOP", icon: <FaDatabase className="text-purple-500" /> },
      { name: "Assembly Language", icon: <FaDatabase className="text-gray-400" /> },
      { name: "Problem Solving", icon: <FaDatabase className="text-yellow-400" /> },
      { name: "Technical Writing", icon: <FaDatabase className="text-blue-300" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 justify-center mx-auto md:grid-cols-3 lg:grid-cols-5 gap-6">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-tr from-gray-800 to-gray-900 shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <p className="text-sm text-gray-300">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
