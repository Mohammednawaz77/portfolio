import React, { useState } from 'react';
import './App.css';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="navbar">
        <div className="logo">Mohammed <span className="highlight">Nawaz</span></div>
        <nav className="nav-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <main>
      <section id="home" className="home">
  <div className="image-wrapper">
    <div className="profile-pic">
      <img src="/cert3.png" alt="profile" />
    </div>
  </div>
  <div className="text-section">
    <h1>Hi, I'm Mohammed Nawaz</h1>
    <p>Web Developer | Turning ideas into interactive experiences</p>
  </div>
</section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer who enjoys building fast, accessible, and visually engaging websites using modern web technologies.
          </p>
        </section>

        <section id="skills" className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projects" className="projects">
          <h2>Project 1</h2>
          <div className="project-card">
            <h3>Ekatha generator</h3>
            <p>Ekatha generator based on voice to text functionality</p>
            <a href="https://github.com/sanubose/hackathonProject" target="_blank">View Project</a>
          </div>
        </section>
        <section id="projects" className="projects">
          <h2>Project 2</h2>
          <div className="project-card">
            <h3>BBC News clone</h3>
            <p>News website inspired by BBC</p>
            <a href="https://github.com/sanubose/bbc_clone" target="_blank">View Project</a>
          </div>
        </section>

        <section class ="CERTIFICATIONS">
          <h2>CERTIFICATIONS</h2>
          <div class ="certification-container">
            <div class="cert-card">
              <img src="/cert1.jpg" alt="Certificate 1"/>
              <h3>Construct week</h3>
              <p>Powered by Masai©</p>
            </div>
            <div class="cert-card">
              <img src="/cert2.jpg" alt="Certificate 2"/>
              <h3>Hackathon</h3>
              <p>Powered by Masai©</p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>+91 7259233639</p>
          <p>Email: <a href="mailto:matter7259@gmail.com">matter7259@gmail.com</a></p>
          <p> <a href="https://www.linkedin.com/in/mohammed-nawaz-7b1ab0314/" target="_blank" rel="noopener noreferrer">linkedin</a> |{' '}
              <a href="https://github.com/Mohammednawaz77" target="_blank" rel="noopener noreferrer">github</a>
          </p>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Mohammed Nawaz. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
