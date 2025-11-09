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
  // To change the background video, just change this YouTube video ID
  const youtubeVideoId = 'Hgg7M3kSqyE';

  return (
    <>
      <div className="video-background">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&iv_load_policy=3&playsinline=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="background-video"
        ></iframe>
      </div>
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
