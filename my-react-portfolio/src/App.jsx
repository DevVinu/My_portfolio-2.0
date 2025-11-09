import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import { projects } from './data/projects';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects projects={projects} />
        <Contact />
        <About />
      </main>
      <Footer />
    </>
  );
}
