import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Shield, 
  Cloud, 
  ToggleLeft, 
  Calendar, 
  Briefcase,
  Menu,
  X
} from 'lucide-react'
import './Navigation.css'

const navigationItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/redhat-tracker', label: 'Red Hat Tracker', icon: Shield },
  { path: '/google-integration', label: 'Google Tools', icon: Cloud },
  { path: '/cybersecurity-audit', label: 'Security Audit', icon: Shield },
  { path: '/feature-flags', label: 'Feature Flags', icon: ToggleLeft },
  { path: '/weekly-logs', label: 'Weekly Logs', icon: Calendar },
  { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
]

export const Navigation: React.FC = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="navigation">
      <div className="nav-header">
        <Link to="/" className="nav-brand">
          <Shield className="nav-brand-icon" />
          EPATH Tracker
        </Link>
        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      <ul className={`nav-list ${isOpen ? 'nav-list-open' : ''}`}>
        {navigationItems.map(({ path, label, icon: Icon }) => (
          <li key={path} className="nav-item">
            <Link
              to={path}
              className={`nav-link ${location.pathname === path ? 'nav-link-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <Icon className="nav-icon" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}