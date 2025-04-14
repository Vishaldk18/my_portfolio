import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
// import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import './index.css'
export default function Portfolio() {
  return (
    <div className="min-h-screen px-6 py-4 bg-gray-800 text-white">
      <section className="mb-12">
        <About />
      </section>

      <section className="mb-12">
        <Skills />
      </section>

      <section className="mb-12">
        <Experience />
      </section>

      <section className="mb-12">
        <Education />
      </section>

      {/* <section className="mb-12">
        <Certifications />
      </section> */}

      <section className="mb-12">
        <Projects />
      </section>

      <section className="mb-12">
        <Contact />
      </section>

      <footer className="mt-12 border-t pt-6 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Vishal Khairnar. All rights reserved.
      </footer>
    </div>
  );
}
