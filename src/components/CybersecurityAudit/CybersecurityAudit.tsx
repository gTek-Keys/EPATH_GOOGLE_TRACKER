import React from 'react'
import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

export const CybersecurityAudit: React.FC = () => {
  const auditDays = [
    { day: 1, title: 'Network Security Assessment', status: 'completed' },
    { day: 2, title: 'Endpoint Protection Review', status: 'completed' },
    { day: 3, title: 'Access Control Audit', status: 'in-progress' },
    { day: 4, title: 'Data Protection Analysis', status: 'pending' },
    { day: 5, title: 'Incident Response Testing', status: 'pending' },
    { day: 6, title: 'Compliance Verification', status: 'pending' },
    { day: 7, title: 'Security Report Generation', status: 'pending' }
  ]

  return (
    <div className="cybersecurity-audit">
      <header className="module-header">
        <div className="header-content">
          <Shield className="header-icon" style={{ color: '#ff6b35' }} />
          <div>
            <h1>7-Day Cybersecurity Audit</h1>
            <p>Comprehensive security assessment and monitoring dashboard</p>
          </div>
        </div>
      </header>

      <div className="audit-progress">
        <h2>Audit Timeline</h2>
        <div className="timeline">
          {auditDays.map((item) => (
            <div key={item.day} className={`timeline-item ${item.status}`}>
              <div className="timeline-marker">
                {item.status === 'completed' && <CheckCircle size={20} />}
                {item.status === 'in-progress' && <Clock size={20} />}
                {item.status === 'pending' && <AlertTriangle size={20} />}
              </div>
              <div className="timeline-content">
                <h4>Day {item.day}: {item.title}</h4>
                <p>Status: {item.status.replace('-', ' ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}