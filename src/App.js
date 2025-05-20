import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen relative overflow-hidden text-gray-800 scroll-smooth pt-16">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <div className="absolute w-[600px] h-[600px] bg-purple-700 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-yellow-500 rounded-full blur-2xl opacity-20 bottom-[-50px] right-[-50px] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />

        <div className="p-6 max-w-4xl mx-auto space-y-20">
          {/* About Section */}
          <motion.section
            id="about"
            className="scroll-mt-24 mb-10 backdrop-blur-md bg-white/10 border border-yellow-400/20 rounded-xl shadow-lg p-8 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl font-semibold mb-4 border-b-4 border-yellow-400 inline-block pb-2"
              custom={0.1}
              variants={fadeInUp}
            >
              About Me
            </motion.h2>

            <motion.p
              className="leading-relaxed text-gray-200 mb-4"
              custom={0.2}
              variants={fadeInUp}
            >
              I’m <span className="font-bold text-yellow-400">Dhilipraj</span>,
              a passionate Front-End Developer specializing in creating dynamic,
              responsive web applications. With a strong foundation in{" "}
              <strong>React.js</strong> and <strong>Tailwind CSS</strong>, I
              bring ideas to life with clean code and delightful user
              experiences.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              custom={0.3}
              variants={fadeInUp}
            >
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  🎓 Education
                </h3>
                <p className="text-gray-200">
                  Bachelor’s in Computer Science
                  <br />
                  <span className="text-sm text-gray-400">
                    Crescent University, 2020 - 2023
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  💼 Experience
                </h3>
                <p className="text-gray-200">
                  Front-End Intern at Wraptron
                  <br />
                  <span className="text-sm text-gray-400">
                    Built internal dashboards and contributed to UI designs.
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.div className="mt-6" custom={0.4} variants={fadeInUp}>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                🚀 Skills
              </h3>
              <ul className="list-disc list-inside text-gray-200">
                <li>React.js, Tailwind CSS, JavaScript (ES6+)</li>
                <li>Responsive Design & Mobile-First Development</li>
                <li>Version Control with Git & GitHub</li>
                <li>Basic Backend Integration & REST APIs</li>
              </ul>
            </motion.div>
          </motion.section>

          {/* Skills */}
          <SkillsSection />

          {/* Portfolio Section */}
          <motion.section
            id="project"
            className="scroll-mt-24 mb-10 backdrop-blur-md bg-white/10 border border-yellow-400/20 rounded-xl shadow-lg p-8 text-white max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
            variants={fadeInUp}
          >
            {/* Centered Heading with scale + fade animation */}
            <div className="flex justify-center mb-8">
              <motion.h2
                className="text-3xl font-semibold border-b-4 border-yellow-400 inline-block pb-2 text-center"
                custom={0.7}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                Projects
              </motion.h2>
            </div>

            <motion.div className="mb-8" custom={0.8} variants={fadeInUp}>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-yellow-400 tracking-tight text-center">
                🚀 YouTube Clone
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-5">
                <img
                  src="/images/project-ss.png"
                  alt="Project Screenshot 1"
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage("/images/project-ss.png")}
                />
                <img
                  src="/images/project-searching-ss.png"
                  alt="Project Screenshot 2"
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() =>
                    setSelectedImage("/images/project-searching-ss.png")
                  }
                />
              </div>

              <div className="space-y-3 text-gray-300 text-base leading-relaxed font-medium">
                <p>
                  💡{" "}
                  <span className="text-yellow-300 font-semibold">Idea:</span> A
                  real-time web application to manage project assignments
                  interactively.
                </p>
                <p>
                  ⚙️{" "}
                  <span className="text-yellow-300 font-semibold">
                    Tech Stack:
                  </span>{" "}
                  React.js, Tailwind CSS, JavaScript
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-200 space-y-1">
                  <li>
                    Developed a responsive{" "}
                    <span className="font-semibold text-white">
                      YouTube-style interface
                    </span>{" "}
                    for browsing projects
                  </li>
                  <li>
                    Used{" "}
                    <span className="text-white font-semibold">
                      JavaScript APIs
                    </span>{" "}
                    to manage form submissions & dynamic UI
                  </li>
                  <li>
                    Included features like real-time search and animated modals
                    for better UX
                  </li>
                  <li>
                    Integrated clean UI/UX principles with{" "}
                    <span className="font-semibold text-white">
                      mobile-first design
                    </span>
                  </li>
                </ul>
                <p>
                  🔗{" "}
                  <a
                    href="https://github.com/dhilipraj12/Youtube-clone.git"
                    className="text-blue-400 underline hover:text-blue-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Repository
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="scroll-mt-24 mb-10 backdrop-blur-md bg-white/10 border border-yellow-400/20 rounded-xl shadow-lg p-8 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.9}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl font-semibold mb-6 border-b-4 border-yellow-400 inline-block pb-2"
              custom={1}
              variants={fadeInUp}
            >
              Contact Me
            </motion.h2>

            <motion.form className="space-y-4" custom={1.1} variants={fadeInUp}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-transparent text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-transparent text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-transparent text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md transition"
              >
                Send Message
              </button>
            </motion.form>

            </motion.section>

          <footer className="text-center text-sm text-gray-400 mt-10">
            © 2025 Dhilipraj
          </footer>
        </div>
      </div>

      {/* 🔍 Image Modal Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg max-w-3xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-black text-2xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Popup"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
