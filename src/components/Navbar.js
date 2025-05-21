import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#project" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleResumeOptions = () => {
    setShowResumeOptions(!showResumeOptions);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowResumeOptions(false); // close resume menu when toggling
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 md:px-20 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1, color: "#FBBF24" }}
        >
          DHILIP <span className="text-yellow-400">RAJ</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm tracking-wide font-semibold">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, color: "#FBBF24" }}
              className="cursor-pointer transition"
            >
              <a href={link.href} className="hover:text-yellow-400">
                {link.name}
              </a>
            </motion.li>
          ))}

          {/* Resume Option */}
          <motion.li
            whileHover={{ scale: 1.1, color: "#FBBF24" }}
            className="relative cursor-pointer transition"
            onClick={toggleResumeOptions}
          >
            <span className="hover:text-yellow-400">RESUME</span>

            <AnimatePresence>
              {showResumeOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-md p-2 shadow-lg z-50 w-48"
                >
                  <a
                    href="/Dhilip_Raj_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-gray-700 rounded"
                  >
                    📄 View Resume
                  </a>
                  <a
                    href="/Dhilip_Raj_Resume.pdf"
                    download
                    className="block px-4 py-2 text-sm hover:bg-gray-700 rounded"
                  >
                    ⬇️ Download Resume
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center text-3xl cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-gray-800 shadow-lg flex flex-col text-sm tracking-wide font-semibold mt-4 rounded-b-md overflow-hidden"
            >
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="border-b border-gray-700 hover:bg-gray-700 px-6 py-3 transition"
                >
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3 hover:bg-gray-700 transition border-t border-gray-700">
                <div onClick={toggleResumeOptions} className="cursor-pointer">
                  RESUME ⬇
                </div>
                <AnimatePresence>
                  {showResumeOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 ml-2 text-sm space-y-1"
                    >
                      <a
                        href="/Dhilip_Raj_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-yellow-400"
                      >
                        📄 View Resume
                      </a>
                      <a
                        href="/Dhilip_Raj_Resume.pdf"
                        download
                        className="block hover:text-yellow-400"
                      >
                        ⬇️ Download Resume
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
