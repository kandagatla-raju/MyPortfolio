import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
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
  SiMysql,
  SiRedux,
} from "react-icons/si";

// Section Meta
const sectionMeta = {
  heading: "Technical Proficiencies",
  description:
    "A comprehensive overview of the tools and technologies I use to build modern, scalable, and efficient web applications.",
};

// Skills Data
const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-600" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-700" },
      { name: "FastAPI", icon: SiFastapi, color: "text-green-700" },
    ],
  },
  {
    category: "Programming Languages",
    techs: [
      { name: "Python", icon: FaPython, color: "text-blue-500" },
      { name: "Java", icon: FaJava, color: "text-red-600" },
    ],
  },
  {
    category: "Databases",
    techs: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    ],
  },
  {
    category: "Dev Tools & State Management",
    techs: [
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 py-16 text-white"
      aria-label="Technical Skills Section"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-400">{sectionMeta.heading}</h2>
        <p className="text-gray-400 text-lg mt-2 max-w-2xl mx-auto">
          {sectionMeta.description}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
        {skills.map(({ category, techs }) => (
          <article
            key={category}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:z-10 relative"
            aria-labelledby={`${category.toLowerCase().replace(/\s+/g, "-")}-heading`}
          >
            <h3
              id={`${category.toLowerCase().replace(/\s+/g, "-")}-heading`}
              className="text-xl font-semibold mb-4 text-indigo-300"
            >
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {techs.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex flex-col items-center text-center text-sm text-gray-300 hover:text-white transition"
                  role="listitem"
                >
                  <Icon
                    className={`${color}`}
                    size={30}
                    aria-label={`${name} icon`}
                    title={name}
                  />
                  <span className="mt-1">{name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
