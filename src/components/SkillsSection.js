import { FaMobileAlt, FaLaptopCode, FaHtml5, FaJs } from "react-icons/fa";
import { SiReact, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const projects = [
  { title: "App Design", icon: <FaMobileAlt size={40} />, color: "text-yellow-400" },
  { title: "Website Design", icon: <FaLaptopCode size={40} />, color: "text-yellow-400" },
  { title: "HTML & CSS", icon: <FaHtml5 size={40} />, color: "text-yellow-400" },
  { title: "JavaScript", icon: <FaJs size={40} />, color: "text-yellow-400" },
  { title: "React.js", icon: <SiReact size={40} />, color: "text-yellow-400" },
  { title: "Python", icon: <SiPython size={40} />, color: "text-yellow-400" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-4 backdrop-blur-md bg-white/10 border border-yellow-400/20 rounded-xl shadow-lg text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="text-center mb-14"
        variants={fadeInUp}
        custom={0}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-yellow-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 mb-2 rounded" />
        <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
          Explore a range of creative and functional projects I’ve developed using modern tools and frameworks.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center border border-yellow-400/30 bg-white/10 backdrop-blur-md rounded-2xl w-52 h-52 mx-auto shadow-md text-center"
            variants={fadeInUp}
            custom={index + 1}
            whileHover={{
              scale: 1.08,
              y: -10,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
          >
            <div className={`${project.color} mb-3`}>{project.icon}</div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeOut", duration: 0.3 },
          }}
          className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          Explore More 
        </motion.button>
      </div>
    </motion.section>
  );
}
