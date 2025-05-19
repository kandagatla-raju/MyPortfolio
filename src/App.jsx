import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Education from "./components/Education";
import ContactFooter from "./components/ContactFooter";
import AboutMe from "./components/AbouteMe";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white min-h-screen">
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <ContactFooter />
      </main>
    </>
  );
}
