import React from "react";
import Header from "../components/Header";
import Home from "./Home";
import About from "./Sobre";
import Contact from "./Contato";
import Footer from "../components/Footer";
import Project from "./Project";
import { Element } from "react-scroll";

function Layout() {
  return (
    <>
      <Header />
      <Element name="Home-section">
        <Home />
      </Element>
      <Element name="About-section">
        <About />
      </Element>
      <Element name="Project-section">
        <Project />
      </Element>
      <Element name="Contact-section">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default Layout;
