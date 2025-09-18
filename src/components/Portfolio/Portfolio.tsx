import React from 'react'
import { Briefcase, Award, ExternalLink, Github } from 'lucide-react'

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'EPATH Google Tracker',
      description: 'Complete IT pro toolkit with React+TS, tracking Red Hat progress, Google integration, and cybersecurity audits',
      status: 'In Development',
      technologies: ['React', 'TypeScript', 'Vite', 'Google APIs'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Red Hat Learning Path',
      description: 'Comprehensive tracking system for Red Hat certifications with progress monitoring',
      status: 'Planning',
      technologies: ['Linux', 'Ansible', 'OpenShift', 'Containers'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ]

  const certifications = [
    {
      name: 'Red Hat Certified System Administrator (RHCSA)',
      status: 'In Progress',
      progress: 35
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      status: 'Planned',
      progress: 0
    },
    {
      name: 'IEEE Computer Society Certification',
      status: 'Target Goal',
      progress: 0
    }
  ]

  return (
    <div className="portfolio">
      <header className="module-header">
        <div className="header-content">
          <Briefcase className="header-icon" style={{ color: '#f59e0b' }} />
          <div>
            <h1>IEEE Certification Portfolio</h1>
            <p>Professional portfolio for IEEE certification and humanitarian computing credentials</p>
          </div>
        </div>
      </header>

      <section className="portfolio-section">
        <h2>Professional Summary</h2>
        <p>
          Aspiring humanitarian engineer developing comprehensive IT expertise through the EPATH/UCLA Extension program. 
          Focused on real-world applications of Google Workspace, Google Cloud, Cybersecurity, and Software Engineering 
          toward IEEE licensure and Humanitarian Computing credentials.
        </p>
      </section>

      <section className="portfolio-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.links.demo} className="btn btn-primary">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a href={project.links.github} className="btn btn-secondary">
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Certifications & Learning Path</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="cert-info">
                <h4>{cert.name}</h4>
                <span className={`cert-status status-${cert.status.toLowerCase().replace(' ', '-')}`}>
                  {cert.status}
                </span>
              </div>
              <div className="cert-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${cert.progress}%` }}
                  />
                </div>
                <span>{cert.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Documentation & Reports</h2>
        <div className="documents-grid">
          <div className="document-item">
            <Award className="doc-icon" />
            <h4>Technical Progress Report</h4>
            <p>Comprehensive documentation of learning journey and achievements</p>
            <button className="btn btn-secondary">View Report</button>
          </div>
          
          <div className="document-item">
            <Briefcase className="doc-icon" />
            <h4>Project Portfolio</h4>
            <p>Detailed showcase of projects and technical implementations</p>
            <button className="btn btn-secondary">Download PDF</button>
          </div>
        </div>
      </section>
    </div>
  )
}