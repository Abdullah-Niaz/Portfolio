// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaCode, FaGamepad, FaMobileAlt, FaDatabase, FaChartLine} from "react-icons/fa";
import { SiDjango } from "react-icons/si";
const projects = {
  "HTML/CSS/JS": [
    {
      title: "Animated Modern Website (GSAP)",
      link: "https://abdullah-niaz.github.io/Animated_Moden_Website_With_GSAP/",
      desc: "Interactive website using GSAP animations for smooth scrolling and transitions.",
    },
    {
      title: "BMI Calculator",
      link: "https://abdullah-niaz.github.io/BMI_Calculator/",
      desc: "Simple health tool for calculating BMI with instant feedback.",
    },
    {
      title: "ToDo List App",
      link: "https://abdullah-niaz.github.io/ToDo-List/",
      desc: "Task management app built with clean UI and local storage.",
    },
    {
      title: "Git Language Stats",
      link: "https://git-lang-stats.vercel.app/",
      desc: "Fetches and visualizes GitHub repo language stats.",
    },
  ],
  "Python-Django": [
    {
      title: "Course Allocation App",
      link: "https://github.com/Abdullah-Niaz/CourseAllocationApp",
      desc: "Automates course allocations for students.",
    },
    {
      title: "Comments Feature App",
      link: "https://comments-feature.vercel.app/",
      desc: "Full-stack feature for adding and managing comments (React + Backend).",
    },
    {
      title: "Feedback App",
      link: "https://github.com/Abdullah-Niaz/Feedback_APP",
      desc: "Collects and manages user feedback.",
    },
     {
      title: "Gym Website",
      link: "https://github.com/Abdullah-Niaz/gym_website",
      desc: "Static responsive gym landing page with modern design.",
    },
    {
      title: "CRUD Operations (Django)",
      link: "https://github.com/Abdullah-Niaz/CRUD-Operations-Django",
      desc: "Django app demonstrating Create, Read, Update, Delete.",
    },
  ],
  "MERN Stack": [
    {
      title: "Project 1",
      link: "https://github.com/Abdullah-Niaz",
      desc: "lorem ipsum ..........................................................",
    },
    {
      title: "Project 2",
      link: "https://github.com/Abdullah-Niaz",
      desc: "lorem ipsum ..........................................................",
    },
    {
      title: "Project 3",
      link: "https://github.com/Abdullah-Niaz",
      desc: "lorem ipsum ..........................................................",
    },
    {
      title: "Project 4",
      link: "https://github.com/Abdullah-Niaz",
      desc: "lorem ipsum ..........................................................",
    },
    {
      title: "Project 5",
      link: "https://github.com/Abdullah-Niaz",
      desc: "lorem ipsum ..........................................................",
    },
    {
      title: "Project 5",
      link: "https://github.com/Abdullah-Niaz",
      desc: "lorem ipsum ..........................................................",
    },
  ],
  "Mobile & App Development": [
    {
      title: "NotesApp (Firebase)",
      link: "https://github.com/Abdullah-Niaz/notesapp-firebase",
      desc: "Cross-platform notes app using Firebase backend.",
    },
    {
      title: "NotesApp (Local)",
      link: "https://github.com/Abdullah-Niaz/NotesApp",
      desc: "Lightweight offline notes application.",
    },
    {
      title: "SQLite Student App",
      link: "https://github.com/Abdullah-Niaz/SQLiteStudentApp",
      desc: "Student management app using SQLite for persistence.",
    },
    {
      title: "Firebase Student App",
      link: "https://github.com/Abdullah-Niaz/FirebaseStudentApp",
      desc: "App for managing student data with Firebase backend.",
    },
  ],
  
  "Data Science / Machine Learning": [
    {
      title: "Placement Prediction (Logistic Regression)",
      link: "https://github.com/Abdullah-Niaz/placement-project-logistic-regression",
      desc: "Machine learning model to predict student placement outcomes.",
    },
    {
      title: "DIP Lab Work (Digital Image Processing)",
      link: "https://github.com/Abdullah-Niaz/DIP-LabWork",
      desc: "Assignments and experiments in image processing.",
    },
  ],
};

const categoryIcons = {
  "Web Development": <FaCode className="text-blue-400 text-3xl" />,
  "Python-Django": <SiDjango className="text-green-400 text-3xl" />,
  "MERN Stack": <FaCode className="text-yellow-400 text-3xl" />,
  "Mobile & App Development": <FaMobileAlt className="text-blue-400 text-3xl" />,
  "Data Science / Machine Learning": <FaChartLine className="text-purple-400 text-3xl" />,
};

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚀 Projects Showcase
        </motion.h2>

        {Object.keys(projects).map((category, idx) => (
          <div key={idx} className="mb-16">
            <div className="flex flex-row items-center  justify-center gap-3 mb-8">
              {categoryIcons[category]}
              <h3 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {category}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects[category].map((proj, index) => (
                <motion.a
                  key={index}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-xl bg-gradient-to-tr from-gray-800 to-gray-900 shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{proj.title}</h4>
                  <p className="text-gray-300 text-sm">{proj.desc}</p>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
