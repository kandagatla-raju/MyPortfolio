import React, { useState, useEffect } from "react";

const menuItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  return (
    <>
      {/* Fixed top navbar */}
      <nav
        className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white px-6 py-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50"
      >
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wide hover:text-indigo-400 transition"
          onClick={() => setOpen(false)}
        >
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          {menuItems.map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                className="hover:text-indigo-400 transition transform hover:scale-110"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (mobile) */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center cursor-pointer z-50 w-8 h-8 focus:outline-none"
        >
          <div
            className={`w-7 h-1 bg-white mb-1 rounded transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-7 h-1 bg-white mb-1 rounded transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`w-7 h-1 bg-white rounded transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu - slides from top under navbar */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 z-40 transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-6 h-full pt-20 text-xl font-semibold">
          {menuItems.map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                onClick={() => setOpen(false)}
                className="hover:text-indigo-400"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Push content down below navbar height */}
      <div className="h-16 md:hidden" />
    </>
  );
}
