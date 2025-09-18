import React from 'react'
import { Calendar, Plus, FileText } from 'lucide-react'
import { format } from 'date-fns'

export const WeeklyLogs: React.FC = () => {
  const weeklyLogs = [
    {
      week: '2025-09-15',
      title: 'Project Setup & Planning',
      activities: [
        'Set up React TypeScript project',
        'Designed component architecture',
        'Created navigation system'
      ],
      hoursSpent: 12,
      nextWeekGoals: [
        'Implement Red Hat tracker functionality',
        'Set up Google integration',
        'Begin cybersecurity audit module'
      ]
    },
    {
      week: '2025-09-08',
      title: 'Research & Requirements',
      activities: [
        'Researched Red Hat certification paths',
        'Analyzed Google Workspace APIs',
        'Defined security audit requirements'
      ],
      hoursSpent: 8,
      nextWeekGoals: [
        'Begin project implementation',
        'Set up development environment'
      ]
    }
  ]

  return (
    <div className="weekly-logs">
      <header className="module-header">
        <div className="header-content">
          <Calendar className="header-icon" style={{ color: '#8b5cf6' }} />
          <div>
            <h1>Weekly Progress Logs</h1>
            <p>Track weekly progress and document development journey</p>
          </div>
        </div>
      </header>

      <div className="log-actions">
        <button className="btn btn-primary">
          <Plus size={20} />
          New Weekly Log
        </button>
      </div>

      <div className="logs-timeline">
        {weeklyLogs.map((log) => (
          <div key={log.week} className="log-entry">
            <div className="log-header">
              <div className="log-date">
                <Calendar size={20} />
                Week of {format(new Date(log.week), 'MMM dd, yyyy')}
              </div>
              <div className="hours-badge">
                {log.hoursSpent} hours
              </div>
            </div>
            
            <h3>{log.title}</h3>
            
            <div className="log-section">
              <h4>Activities Completed</h4>
              <ul>
                {log.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            
            <div className="log-section">
              <h4>Next Week Goals</h4>
              <ul>
                {log.nextWeekGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
            
            <div className="log-actions">
              <button className="btn btn-secondary">
                <FileText size={16} />
                View Details
              </button>
              <button className="btn btn-secondary">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}