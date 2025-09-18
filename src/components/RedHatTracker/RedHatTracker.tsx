import React, { useState } from 'react'
import { Shield, CheckCircle, Clock, Award, TrendingUp } from 'lucide-react'

interface CertificationTrack {
  id: string
  name: string
  description: string
  progress: number
  status: 'not-started' | 'in-progress' | 'completed'
  estimatedHours: number
  topics: string[]
}

const certificationTracks: CertificationTrack[] = [
  {
    id: 'rhcsa',
    name: 'Red Hat Certified System Administrator (RHCSA)',
    description: 'Essential Linux administration skills for Red Hat Enterprise Linux',
    progress: 35,
    status: 'in-progress',
    estimatedHours: 120,
    topics: ['System Configuration', 'User Management', 'File Systems', 'Network Configuration']
  },
  {
    id: 'rhce',
    name: 'Red Hat Certified Engineer (RHCE)',
    description: 'Advanced automation and configuration management',
    progress: 0,
    status: 'not-started',
    estimatedHours: 160,
    topics: ['Ansible Automation', 'Advanced Networking', 'Security Configuration', 'Troubleshooting']
  },
  {
    id: 'rhcop',
    name: 'Red Hat Certified OpenShift Practitioner',
    description: 'Container orchestration and cloud-native development',
    progress: 15,
    status: 'in-progress',
    estimatedHours: 80,
    topics: ['Container Management', 'OpenShift Administration', 'CI/CD Pipelines', 'Application Deployment']
  }
]

export const RedHatTracker: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#10b981'
      case 'in-progress': return '#f59e0b'
      case 'not-started': return '#6b7280'
      default: return '#6b7280'
    }
  }

  const totalProgress = certificationTracks.reduce((acc, track) => acc + track.progress, 0) / certificationTracks.length

  return (
    <div className="redhat-tracker">
      <header className="module-header">
        <div className="header-content">
          <Shield className="header-icon" style={{ color: '#ee0000' }} />
          <div>
            <h1>Red Hat Certification Tracker</h1>
            <p>Track your progress through Red Hat certification paths and practical implementations</p>
          </div>
        </div>
      </header>

      <div className="progress-overview">
        <div className="overview-card">
          <TrendingUp className="overview-icon" />
          <div>
            <h3>Overall Progress</h3>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${totalProgress}%`, backgroundColor: '#ee0000' }}
              />
            </div>
            <span>{Math.round(totalProgress)}% Complete</span>
          </div>
        </div>
        
        <div className="overview-card">
          <Clock className="overview-icon" />
          <div>
            <h3>Study Time</h3>
            <p>42 hours logged</p>
          </div>
        </div>
        
        <div className="overview-card">
          <Award className="overview-icon" />
          <div>
            <h3>Certifications</h3>
            <p>0 of 3 completed</p>
          </div>
        </div>
      </div>

      <div className="certification-grid">
        {certificationTracks.map((track) => (
          <div 
            key={track.id} 
            className={`certification-card ${selectedTrack === track.id ? 'selected' : ''}`}
            onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
          >
            <div className="card-header">
              <div className="cert-info">
                <h3>{track.name}</h3>
                <p>{track.description}</p>
              </div>
              <div 
                className="status-indicator"
                style={{ backgroundColor: getStatusColor(track.status) }}
              >
                {track.status === 'completed' && <CheckCircle size={16} />}
                {track.status === 'in-progress' && <Clock size={16} />}
              </div>
            </div>
            
            <div className="progress-section">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${track.progress}%`, backgroundColor: getStatusColor(track.status) }}
                />
              </div>
              <span>{track.progress}% Complete</span>
            </div>

            <div className="cert-details">
              <div className="detail-item">
                <strong>Estimated Hours:</strong> {track.estimatedHours}
              </div>
              <div className="detail-item">
                <strong>Status:</strong> {track.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </div>
            </div>

            {selectedTrack === track.id && (
              <div className="expanded-content">
                <h4>Key Topics:</h4>
                <div className="topics-grid">
                  {track.topics.map((topic, index) => (
                    <span key={index} className="topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="action-buttons">
                  <button className="btn btn-primary">Start Learning</button>
                  <button className="btn btn-secondary">View Resources</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="study-plan">
        <h2>Weekly Study Plan</h2>
        <div className="plan-grid">
          <div className="plan-item">
            <h4>Week 1-2: RHCSA Fundamentals</h4>
            <p>Focus on basic system administration and command line proficiency</p>
          </div>
          <div className="plan-item">
            <h4>Week 3-4: Advanced Administration</h4>
            <p>User management, file systems, and network configuration</p>
          </div>
          <div className="plan-item">
            <h4>Week 5-6: Practice Labs</h4>
            <p>Hands-on lab exercises and exam preparation</p>
          </div>
        </div>
      </div>
    </div>
  )
}