import React from "react";
import Typical from "react-typical";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white px-4 sm:px-6 lg:px-8 text-center pt-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Hi, I’m{" "}
        <span className="text-indigo-400 whitespace-nowrap">
          <Typical
            steps={[
              "Kandagatla Raju", 3000,
              "a Full Stack Developer", 3000,
              "a Problem Solver", 3000,
              "a Tech Enthusiast", 3000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl max-w-xl mb-8 drop-shadow-md px-2">
        Empowering Society with Innovative and Sustainable Solutions
      </p>

      <a href="#projects">
        <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold transition shadow-lg transform hover:scale-105 active:scale-95">
          View Projects
        </button>
      </a>
    </section>
  );
}
