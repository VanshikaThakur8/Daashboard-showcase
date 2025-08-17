import { useState } from 'react'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Vanshika</span>
            <div className="logo-dot"></div>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          <div className="nav-auth">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="main-title">
              VANSHIKA'S ORGANIZATION
            </h1>
            <p className="subtitle">
              A MERN Stack Developer
            </p>
          </div>
        </div>
      </main>

      {/* Themed Scroll Section */}
      <section id="about" className="second-page">
        <div className="second-page-container">
          <header className="section-header">
            <h2 className="section-title">Crafting Elegant Web Experiences</h2>
            <div className="title-underline"></div>
          </header>

          <div className="content-grid">
            <div className="content-card">
              <div className="card-icon">⚙️</div>
              <h3>Clean Architecture</h3>
              <p>
                Building scalable services with expressive APIs, focusing on clarity,
                performance, and maintainability.
              </p>
            </div>
            <div className="content-card">
              <div className="card-icon">🎨</div>
              <h3>Polished UI</h3>
              <p>
                Subtle motion, silver gradients, and accessible design for a premium,
                modern feel across devices.
              </p>
            </div>
            <div className="content-card">
              <div className="card-icon">🚀</div>
              <h3>End-to-End Delivery</h3>
              <p>
                From idea to deployment, ensuring quality, speed, and smooth user
                journeys.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Tech Focus</h3>
            <div className="skills-grid">
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">Express</div>
              <div className="skill-item">React</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">REST & GraphQL</div>
              <div className="skill-item">Tailwind / CSS</div>
              <div className="skill-item">Testing & CI</div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-logo">Vanshika</span>
            <span className="footer-tagline">MERN Stack Developer</span>
          </div>

          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-social">
            <a href="#" aria-label="GitHub" title="GitHub">🐙</a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">💼</a>
            <a href="#" aria-label="Twitter" title="Twitter">🐦</a>
          </div>

          <div className="footer-copy">© {new Date().getFullYear()} Vanshika. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App

