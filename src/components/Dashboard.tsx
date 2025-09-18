import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Cloud, 
  ToggleLeft, 
  Calendar, 
  Briefcase,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Clock
} from 'lucide-react'

const dashboardCards = [
  {
    title: 'Red Hat Tracker',
    description: 'Track Red Hat learning progress, certifications, and practical implementations.',
    link: '/redhat-tracker',
    icon: Shield,
    color: '#ee0000',
    status: 'In Progress'
  },
  {
    title: 'Google Integration',
    description: 'Google Workspace and Cloud Platform tools for productivity and development.',
    link: '/google-integration',
    icon: Cloud,
    color: '#4285f4',
    status: 'Active'
  },
  {
    title: 'Cybersecurity Audit',
    description: '7-day cybersecurity assessment and monitoring dashboard.',
    link: '/cybersecurity-audit',
    icon: Shield,
    color: '#ff6b35',
    status: 'Scheduled'
  },
  {
    title: 'Feature Flags',
    description: 'Dynamic feature management and A/B testing interface.',
    link: '/feature-flags',
    icon: ToggleLeft,
    color: '#10b981',
    status: 'Active'
  },
  {
    title: 'Weekly Logs',
    description: 'Weekly progress tracking and documentation system.',
    link: '/weekly-logs',
    icon: Calendar,
    color: '#8b5cf6',
    status: 'Updated'
  },
  {
    title: 'IEEE Portfolio',
    description: 'Professional portfolio for IEEE certification and humanitarian computing.',
    link: '/portfolio',
    icon: Briefcase,
    color: '#f59e0b',
    status: 'Building'
  }
]

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>EPATH Google Tracker</h1>
        <p>
          Complete IT Pro Toolkit for Red Hat Tracking, Google Workspace Integration, 
          Cybersecurity Audits, and IEEE Certification Portfolio
        </p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <TrendingUp className="stat-icon" style={{ color: '#10b981' }} />
          <div className="stat-content">
            <h3>Progress</h3>
            <p>67% Complete</p>
          </div>
        </div>
        <div className="stat-card">
          <CheckCircle className="stat-icon" style={{ color: '#3b82f6' }} />
          <div className="stat-content">
            <h3>Completed</h3>
            <p>4 Modules</p>
          </div>
        </div>
        <div className="stat-card">
          <Clock className="stat-icon" style={{ color: '#f59e0b' }} />
          <div className="stat-content">
            <h3>Time Spent</h3>
            <p>120 Hours</p>
          </div>
        </div>
        <div className="stat-card">
          <AlertTriangle className="stat-icon" style={{ color: '#ef4444' }} />
          <div className="stat-content">
            <h3>Alerts</h3>
            <p>2 Active</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {dashboardCards.map((card) => (
          <Link key={card.title} to={card.link} className="dashboard-card">
            <div className="card-header">
              <card.icon 
                className="card-icon" 
                style={{ color: card.color }} 
              />
              <span className={`status-badge status-${card.status.toLowerCase().replace(' ', '-')}`}>
                {card.status}
              </span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <span className="card-link">Open Module →</span>
          </Link>
        ))}
      </div>

      <footer className="dashboard-footer">
        <p>
          <strong>Goal:</strong> IEEE cert-ready portfolio with live demos, reports, 
          and full progress documented from zero to humanitarian engineer.
        </p>
      </footer>
    </div>
  )
}