import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white px-4 sm:px-6 lg:px-8 text-center pt-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Hi, I’m{" "}
        <span className="text-indigo-400 whitespace-nowrap">
          <Typewriter
            words={[
              "Kandagatla Raju",
              "a Full Stack Developer",
              "a Problem Solver",
              "a Tech Enthusiast",
            ]}
            loop={0} // Set to 0 for infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
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
