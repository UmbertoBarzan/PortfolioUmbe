import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import SchoolProjects from "./components/Projects/SchoolProjects";
import ComputerVisionProjects from "./components/Projects/ComputerVisionProjects";
import Resume from "./components/Resume/ResumeNew";
import { LanguageProvider } from "./context/LanguageContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/computer-vision" element={<ComputerVisionProjects />} />
          <Route path="/school-projects" element={<SchoolProjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
