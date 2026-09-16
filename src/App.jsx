import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

import WoofCartCaseStudy from "./pages/WoofCartCaseStudy";
import SmartContactManagerCaseStudy from "./pages/SmartContactManagerCaseStudy";

import "./App.css";


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

       <ScrollToTop />

      <Routes>

        {/* Portfolio Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* WoofCart Case Study */}
        <Route
          path="/projects/woofcart"
          element={<WoofCartCaseStudy />}
        />

         <Route
           path="/projects/smart-contact-manager"
           element={<SmartContactManagerCaseStudy />}
          />

      </Routes>

    </BrowserRouter>
  );
}


export default App;
