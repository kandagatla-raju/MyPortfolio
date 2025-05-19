import React from "react";
import { FaGraduationCap, FaSchool, FaCertificate } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Malla Reddy College of Engineering and Technology",
    year: "2012 - 2025",
    gpa: "8.3",
    details: "Focused on software engineering, data structures, algorithms, and AI.",
    icon: <FaGraduationCap className="text-indigo-400" size={36} />,
  },
  {
    degree: "Diploma in Electrical and Electronics Engineering",
    institution: "Government Polytechnic, Nizamabad",
    year: "2019 - 2022",
    gpa: "9.7",
    details: "Completed with specialization in Mathematics and Physics.",
    icon: <FaCertificate className="text-indigo-400" size={36} />,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "ZPHS Chilpur",
    year: "2018 - 2019",
    gpa: "9.5",
    details: "",
    icon: <FaSchool className="text-indigo-400" size={36} />,
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
      <div className="text-center mb-12">
  <h2 className="text-4xl font-bold text-indigo-400">Education</h2>
  <p className="text-gray-400 text-lg mt-2 max-w-2xl mx-auto">
    A concise summary of my academic background and the institutions.
  </p>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map(({ degree, institution, year, gpa, details, icon }, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-start
              transform transition duration-300 ease-in-out cursor-pointer
              hover:scale-105 hover:shadow-2xl hover:shadow-indigo-700 hover:bg-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <div>{icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-300">{degree}</h3>
            </div>
            <p className="font-semibold text-indigo-400 mb-1">{institution}</p>
            <p className="text-indigo-300 mb-1">
              <span className="font-semibold">Year:</span> {year}
            </p>
            <p className="text-indigo-300 mb-3">
              <span className="font-semibold">CGPA:</span> {gpa}
            </p>
            {details && (
              <p className="text-indigo-300 text-sm sm:text-base">{details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
