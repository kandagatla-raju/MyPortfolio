import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiExpress,
  SiFastapi,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const projectsData = [
  {
    id: 1,
    title: "AI Job Portal",
    description:
      "A full-stack job portal with AI-powered resume scoring, automated application tracking, and AI mock interviews.",
    tech: ["React", "Node.js", "Express","JavaScript", "MongoDB","Python", "FastAPI", "AI/ML"],
    link: "https://ai-job-portal-0ytr.onrender.com/",
    github: "https://github.com/kandagatla-raju/AI_Job_Portal",
  },
  {
    id: 2,
    title: "AI Mock Interviews Platform",
    description:
      "An AI-driven platform that conducts mock interviews, provides real-time feedback, and rates candidate performance using advanced NLP and Gemini API.",
    tech: ["Next.js","JavaScript", "PostgreSQL", "Tailwind", "Gemini API", "AI/ML"],
    link: "https://ai-mock-interviews.vercel.app/",
    github: "https://github.com/kandagatla-raju/AI_mock_interviews",
  },
  {
    id: 3,
    title: "Ecommerce Frontend Website",
    description:
      "An ecommerce frontend built with React for seamless shopping experience.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://kandagatla-raju.github.io/eDukan/",
    github: "https://github.com/kandagatla-raju/eDukan",
  },
  {
    id: 4,
    title: "Startup Success Prediction",
    description:
      "An AI-powered system to predict the success probability of startups using historical data and machine learning models.",
    tech: ["Python", "AI/ML"],
    link: "https://github.com/kandagatla-raju/Startup-success-prediction",
    github: "https://github.com/kandagatla-raju/Startup-success-prediction",
  },
  {
    id: 5,
    title: "DropMe - Ride Sharing App",
    description:
      "A user-friendly ride-sharing app enabling seamless ride sharing and bookings.",
    tech: ["HTML", "Java", "CSS"],
    link: "https://github.com/kandagatla-raju/DropMe",
    github: "https://github.com/kandagatla-raju/DropMe",
  },
];

const allTechs = [
  "All",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Socket.io",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Express",
  "FastAPI",
  "AI/ML",
  "Next.js",
  "PostgreSQL",
];

const techIcons = {
  React: <FaReact className="text-cyan-400" size={18} />,
  "Node.js": <FaNodeJs className="text-green-500" size={18} />,
  MongoDB: <SiMongodb className="text-green-600" size={18} />,
  Tailwind: <SiTailwindcss className="text-teal-400" size={18} />,
  "Socket.io": <SiSocketdotio className="text-indigo-500" size={18} />,
  Java: <FaJava className="text-red-600" size={18} />,
  HTML: <FaHtml5 className="text-orange-600" size={18} />,
  CSS: <FaCss3Alt className="text-blue-600" size={18} />,
  JavaScript: <FaJsSquare className="text-yellow-400" size={18} />,
  Python: <FaPython className="text-blue-500" size={18} />,
  Express: <SiExpress className="text-gray-700" size={18} />,
  FastAPI: <SiFastapi className="text-green-700" size={18} />,
  "AI/ML": <GiArtificialIntelligence className="text-purple-600" size={18} />,
  "Next.js": <SiNextdotjs className="text-black" size={18} />,
  PostgreSQL: <SiPostgresql className="text-blue-700" size={18} />,
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-400">
          My Work & Projects
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          A collection of personal and professional projects I've built using
          MERN stack, AI, and modern web technologies.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            aria-pressed={filter === tech}
            className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              filter === tech
                ? "bg-indigo-600 text-white border-indigo-600"
                : "text-indigo-600 border-indigo-600 hover:bg-indigo-50"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map(({ id, title, description, tech, link, github }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500 hover:scale-105 transform transition duration-300 flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-1 bg-indigo-600 px-2 py-1 rounded-full text-white text-xs"
                    title={t}
                  >
                    {techIcons[t] || <span>{t}</span>}
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub link */}
            {github && (
              <div className="mt-auto flex justify-end">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 flex items-center gap-1"
                  title="View on GitHub"
                  onClick={(e) => e.stopPropagation()} // Prevent parent anchor link triggering
                >
                  <FaGithub size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
