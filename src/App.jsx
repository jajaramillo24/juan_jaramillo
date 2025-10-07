import { useState, useEffect, useRef } from 'react'
import ProfileCard from './components/ProfileCard'
import LiquidEther from './components/LiquidEther'
import './App.css'

function App() {
  const [showCard, setShowCard] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')
  const sectionsRef = useRef({})

  const handleContactClick = () => {
    setShowCard(false)
    scrollToSection('contact')
  }

  const scrollToSection = (sectionId) => {
    const section = sectionsRef.current[sectionId]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Detect current section on scroll - OPTIMIZADO
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: [0.3], rootMargin: '0px' }
    )

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const navItems = [
    { id: 'hero', icon: 'fa-home', label: 'Home' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'experience', icon: 'fa-briefcase', label: 'Experience' },
    { id: 'skills', icon: 'fa-code', label: 'Skills' },
    { id: 'projects', icon: 'fa-laptop-code', label: 'Projects' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' }
  ]

  return (
    <div className="app-container">
      {/* Liquid Ether Background - Negro con Violeta - OPTIMIZADO */}
      <div className="liquid-ether-background">
        <LiquidEther
          colors={['#1a0033', '#6366f1', '#a855f7', '#000000']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={20}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.75}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.25}
          autoIntensity={1.5}
          takeoverDuration={0.3}
          autoResumeDelay={2000}
          autoRampDuration={0.8}
        />
      </div>

      {/* Profile Card Modal */}
      {showCard && (
        <div className="profile-card-modal" onClick={(e) => {
          if (e.target.className === 'profile-card-modal') setShowCard(false)
        }}>
          <div className="profile-card-content">
            <button className="close-btn" onClick={() => setShowCard(false)}>✕</button>
            <ProfileCard
              name="Juan Jaramillo"
              title="Full Stack Developer"
              handle="juanjjaramillo"
              status="Available for Work"
              contactText="Contact Me"
              avatarUrl="/avatar.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
            />
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="floating-card-container">
        {/* Background Particles */}
        <div className="particles-bg"></div>
        
        {/* Language Switcher */}
        <div className="language-switcher-top">
          <button className="lang-btn active">EN</button>
          <button className="lang-btn">ES</button>
        </div>

        {/* Navigation Sidebar */}
        <nav className="sidebar">
          <div className="logo">
            <div className="logo-icon" onClick={() => setShowCard(true)}>JJ</div>
          </div>
          <ul className="nav-menu">
            {navItems.map(item => (
              <li 
                key={item.id}
                className={`nav-item ${currentSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-container">
            {/* Hero Section */}
            <section 
              id="hero" 
              className="section" 
              ref={(el) => (sectionsRef.current.hero = el)}
            >
              <div className="hero-container">
                <div className="hero-content">
                  <div className="hero-text">
                    <h1 className="hero-title">
                      <span className="gradient-text">Juan Jaramillo</span>
                    </h1>
                    <p className="hero-subtitle">Full Stack Developer | Cloud & Mobile Specialist</p>
                    <p className="hero-description">
                      Highly versatile and committed technology professional with solid experience in full stack web and mobile development, and cloud deployment. Expert in multiple modern frontend and backend frameworks, relational databases, .NET + Entity Framework, and cloud architectures in AWS and Azure.
                    </p>
                    <div className="hero-buttons">
                      <button className="btn btn-primary">
                        <i className="fas fa-download"></i>
                        Download CV
                      </button>
                      <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                        <i className="fas fa-rocket"></i>
                        View Projects
                      </button>
                    </div>
                  </div>
                  <div className="hero-visual">
                    <div className="floating-card">
                      <div className="card-content">
                        <div className="avatar">
                          <div className="avatar-placeholder">JJ</div>
                        </div>
                        <div className="card-info">
                          <h3>Available for Work</h3>
                          <p>Open to new opportunities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section 
              id="about" 
              className="section" 
              ref={(el) => (sectionsRef.current.about = el)}
            >
              <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know me better</p>
              </div>
              <div className="about-grid">
                {[
                  { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Always exploring new technologies and creative solutions to complex problems.' },
                  { icon: 'fa-users', title: 'Collaboration', desc: 'Strong believer in teamwork and effective communication for successful projects.' },
                  { icon: 'fa-chart-line', title: 'Growth', desc: 'Continuously learning and adapting to stay ahead in the fast-paced tech industry.' }
                ].map((card, i) => (
                  <div key={i} className="about-card glass-card">
                    <div className="card-icon"><i className={`fas ${card.icon}`}></i></div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section 
              id="experience" 
              className="section" 
              ref={(el) => (sectionsRef.current.experience = el)}
            >
              <div className="section-header">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">My professional journey</p>
              </div>
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-card">
                    <div className="timeline-header">
                      <h3>Full Stack Web Developer</h3>
                      <span className="timeline-date">Current</span>
                    </div>
                    <p className="timeline-company">Jazusoft</p>
                    <p className="timeline-description">
                      Frontend development with React, Vue, Angular and Ionic. Backend with Django, Laravel and .NET + Entity Framework. SQL Server management, stored procedures and view optimization. Application deployment in Azure (ACR, AKS, App Service) and AWS (Lambda, EC2, S3). CI/CD pipeline implementation and cloud infrastructure configuration.
                    </p>
                    <div className="timeline-tags">
                      <span className="tag">React</span>
                      <span className="tag">Vue.js</span>
                      <span className="tag">Angular</span>
                      <span className="tag">.NET</span>
                      <span className="tag">Azure</span>
                      <span className="tag">AWS</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-card">
                    <div className="timeline-header">
                      <h3>Research Project Collaborator</h3>
                      <span className="timeline-date">2024</span>
                    </div>
                    <p className="timeline-company">Universidad Blas Pascal</p>
                    <p className="timeline-description">
                      Development of a facial gesture recognition application. Wheelchair control through computer vision and facial gestures.
                    </p>
                    <div className="timeline-tags">
                      <span className="tag">Computer Vision</span>
                      <span className="tag">Python</span>
                      <span className="tag">AI/ML</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-card">
                    <div className="timeline-header">
                      <h3>Systems Engineering Intern</h3>
                      <span className="timeline-date">2024</span>
                    </div>
                    <p className="timeline-company">Aeropuertos Argentina 2000 – Córdoba Airport</p>
                    <p className="timeline-description">
                      SITA to VEOVO systems migration. Support and development in airport infrastructure technology.
                    </p>
                    <div className="timeline-tags">
                      <span className="tag">Systems Migration</span>
                      <span className="tag">Infrastructure</span>
                      <span className="tag">Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section 
              id="skills" 
              className="section" 
              ref={(el) => (sectionsRef.current.skills = el)}
            >
              <div className="section-header">
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">Technologies I work with</p>
              </div>
              <div className="skills-grid">
                <div className="skill-category glass-card">
                  <h3>Frontend</h3>
                  <div className="skill-items">
                    {[
                      { name: 'React', width: '90%' },
                      { name: 'Vue.js', width: '85%' },
                      { name: 'Angular', width: '80%' },
                      { name: 'Ionic', width: '85%' }
                    ].map((skill, i) => (
                      <div key={i} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: skill.width }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skill-category glass-card">
                  <h3>Backend</h3>
                  <div className="skill-items">
                    {[
                      { name: '.NET Core', width: '88%' },
                      { name: 'Django', width: '82%' },
                      { name: 'Laravel', width: '80%' },
                      { name: 'Node.js', width: '75%' }
                    ].map((skill, i) => (
                      <div key={i} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: skill.width }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skill-category glass-card">
                  <h3>Cloud & DevOps</h3>
                  <div className="skill-items">
                    {[
                      { name: 'Azure', width: '85%' },
                      { name: 'AWS', width: '75%' },
                      { name: 'CI/CD', width: '80%' },
                      { name: 'Terraform', width: '70%' }
                    ].map((skill, i) => (
                      <div key={i} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: skill.width }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section 
              id="projects" 
              className="section" 
              ref={(el) => (sectionsRef.current.projects = el)}
            >
              <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Some of my recent work</p>
              </div>
              <div className="projects-grid">
                {[
                  {
                    label: 'E-Commerce',
                    title: 'E-Commerce Platform',
                    description: 'Modern e-commerce solution with real-time inventory management and payment processing.',
                    tags: ['React', 'Node.js', 'Stripe']
                  },
                  {
                    label: 'Analytics',
                    title: 'Analytics Dashboard',
                    description: 'Real-time data visualization dashboard with interactive charts and custom reporting.',
                    tags: ['Vue.js', 'D3.js', 'Python']
                  },
                  {
                    label: 'Mobile',
                    title: 'Mobile App',
                    description: 'Cross-platform mobile application with offline capabilities and push notifications.',
                    tags: ['React Native', 'Firebase', 'Redux']
                  },
                  {
                    label: 'AI/ML',
                    title: 'Facial Recognition',
                    description: 'Computer vision application for facial gesture recognition and wheelchair control.',
                    tags: ['Python', 'OpenCV', 'AI/ML']
                  },
                  {
                    label: 'Cloud',
                    title: 'Cloud Infrastructure',
                    description: 'Scalable cloud architecture with CI/CD pipelines and automated deployment.',
                    tags: ['Azure', 'AWS', 'Docker']
                  },
                  {
                    label: 'Full Stack',
                    title: 'Full Stack App',
                    description: 'Complete full stack application with modern architecture and best practices.',
                    tags: ['React', '.NET', 'SQL Server']
                  }
                ].map((project, i) => (
                  <div key={i} className="project-card glass-card">
                    <div className="project-label">{project.label}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href="#" className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                      <a href="#" className="project-link">
                        <i className="fab fa-github"></i>
                        Code
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section 
              id="contact" 
              className="section" 
              ref={(el) => (sectionsRef.current.contact = el)}
            >
              <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Let's work together</p>
              </div>
              <div className="contact-container">
                <div className="contact-info glass-card">
                  <h3>Contact Information</h3>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>jjuanandres4@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>+54 9 351 786 6940</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Córdoba, Argentina</span>
                  </div>
                  <div className="social-links">
                    <a href="https://linkedin.com/in/juanjjaramillo" className="social-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="contact-form glass-card">
                  <h3>Send Message</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    alert('Message sent! (Demo)');
                  }}>
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
