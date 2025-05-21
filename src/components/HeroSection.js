import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import yourPhoto from "../asstes/MY-PHOTO.jpg";

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-20 font-[Poppins] overflow-hidden pt-20 sm:pt-24 relative"
    >
      {/* Background Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-yellow-500 rounded-full opacity-20 blur-3xl top-16 left-6 animate-pulse z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 sm:gap-12">
        {/* Left: Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
              },
            },
          }}
        >
          <motion.h2
            className="text-base sm:text-lg text-gray-300 mb-1 sm:mb-2 tracking-wide"
            variants={fadeInUp}
          >
            Hello, I am
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2"
            variants={fadeInUp}
          >
            DHILIPRAJ
          </motion.h1>

          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-bold mb-5 sm:mb-6"
            variants={fadeInUp}
          >
            Front-End Developer
          </motion.h3>

          <motion.button
            className="rounded-full border-4 border-yellow-400 text-yellow-400 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-yellow-400 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            variants={fadeInUp}
          >
            ▶
          </motion.button>
        </motion.div>

        {/* Right: Image and Icons */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Profile Photo */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
            <img
              src={yourPhoto}
              alt="DHILIPRAJ"
              className="w-full h-full object-cover"
            />
            <div className="absolute -inset-2 border-2 border-yellow-300 rounded-full animate-spin-slow opacity-30" />
          </div>

          {/* Contact Icons */}
          <motion.div
            className="flex gap-5 sm:gap-6 mt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <a
              href="mailto:bdhilipraj@gmail.com"
              className="text-yellow-400 hover:text-yellow-500 transition text-xl sm:text-2xl"
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/dhilipraj-b-07b44b27b"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:text-yellow-500 transition text-xl sm:text-2xl"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/dhilipraj12"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:text-yellow-500 transition text-xl sm:text-2xl"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
