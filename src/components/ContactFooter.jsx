import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactFooter() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-12 px-6 mt-16">
      <section id="contact" className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-indigo-400">
          Get In Touch
        </h2>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-12 flex-wrap">
          <div className="flex items-center gap-3 sm:gap-4 min-w-[250px]">
            <FaEnvelope className="text-indigo-400" size={24} />
            <a
              href="mailto:kandagatlaraju313@gmail.com"
              className="text-gray-300 hover:text-indigo-400 transition-colors break-all"
            >
              kandagatlaraju313@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 min-w-[180px]">
            <FaPhone className="text-indigo-400" size={24} />
            <a
              href="tel:9014559314"
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              9014559314
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 min-w-[200px]">
            <FaMapMarkerAlt className="text-indigo-400" size={24} />
            <address className="not-italic text-gray-300">
              Warangal, Telangana, India
            </address>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <p className="text-gray-400 text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Kandagatla Raju. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-400 justify-center sm:justify-start">
          <a
            href="https://github.com/kandagatla-raju"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/kandagatla-raju-427274294"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </section>
    </footer>
  );
}
