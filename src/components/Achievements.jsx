// src/components/Achievements.jsx
import { motion } from "framer-motion";
import { FaAward, FaCode, FaUsers, FaProjectDiagram } from "react-icons/fa";

const achievements = [
  {
    icon: <FaAward className="text-4xl text-yellow-300" />,
    title: "3+ Years of Experience",
    desc: "Hands-on experience in web and software development.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-pink-400" />,
    title: "20+ Projects Completed",
    desc: "Delivered projects ranging from websites to applications.",
  },
  {
    icon: <FaUsers className="text-4xl text-blue-400" />,
    title: "15+ Happy Clients",
    desc: "Trusted by clients globally for quality and dedication.",
  },
  {
    icon: <FaCode className="text-4xl text-green-400" />,
    title: "1000+ Hours of Coding",
    desc: "Committed to continuous learning and coding practice.",
  },
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl shadow-lg bg-gradient-to-tr from-gray-800 to-gray-900 hover:from-indigo-600 hover:to-purple-600 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{ach.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{ach.title}</h3>
              <p className="text-gray-300">{ach.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
