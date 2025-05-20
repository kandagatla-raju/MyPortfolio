import React from "react";
import profileImg from "../assets/profile.png";

export default function AboutMe({
  name = "Kandagatla Raju",
  bio1 = "Hello! I’m Kandagatla Raju, a passionate full-stack developer with expertise in building modern, scalable web applications. I specialize in React, Node.js, and AI/ML integrations, always eager to learn and solve challenging problems. I’m also an AI enthusiast, passionate about integrating AI technologies to create innovative solutions.",
  bio2 = "Outside of coding, I love exploring new technologies, contributing to open source projects, and improving my skills to create impactful digital experiences.",
  resumeLink = "https://drive.google.com/file/d/1bxWNKGvJwTOZs4AHMUW7CgFZk-yLnqYm/view?usp=sharing",
}) {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-12 md:py-16 mt-12 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 rounded-3xl shadow-2xl text-white flex flex-col md:flex-row items-center gap-8 md:gap-12"
    >
      {/* Image Section */}
      <div className="flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
        <img
          src={profileImg}
          alt={`${name} profile`}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-2xl space-y-6 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400">About Me</h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300">{bio1}</p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300">{bio2}</p>
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition duration-300"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
