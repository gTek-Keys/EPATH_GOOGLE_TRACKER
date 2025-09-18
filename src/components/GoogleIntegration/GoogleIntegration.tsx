import React, { useState } from 'react'
import { Cloud, FileText, BarChart, Settings, CheckCircle, AlertCircle } from 'lucide-react'
import { FeatureFlagManager, AuditLogger } from '../../utils'

interface IntegrationStatus {
  sheets: boolean
  docs: boolean
  gcp: boolean
}

export const GoogleIntegration: React.FC = () => {
  const [integrationStatus, setIntegrationStatus] = useState<IntegrationStatus>({
    sheets: false,
    docs: false,
    gcp: false
  })
  
  const [isConfiguring, setIsConfiguring] = useState<string | null>(null)

  const isGoogleIntegrationEnabled = FeatureFlagManager.isEnabled('google-integration')

  const handleConfigure = async (service: keyof IntegrationStatus) => {
    if (!isGoogleIntegrationEnabled) {
      alert('Google Integration is disabled. Please enable the feature flag first.')
      return
    }

    setIsConfiguring(service)
    
    // Simulate API call
    setTimeout(() => {
      setIntegrationStatus(prev => ({ ...prev, [service]: true }))
      setIsConfiguring(null)
      
      AuditLogger.log({
        user: 'current-user',
        action: 'CONFIGURE_INTEGRATION',
        resource: `google-${service}`,
        details: `Configured Google ${service} integration`,
        severity: 'low'
      })
    }, 2000)
  }

  return (
    <div className="google-integration">
      <header className="module-header">
        <div className="header-content">
          <Cloud className="header-icon" style={{ color: '#4285f4' }} />
          <div>
            <h1>Google Workspace & Cloud Integration</h1>
            <p>Productivity tools and cloud platform integration for development workflow</p>
            {!isGoogleIntegrationEnabled && (
              <div style={{ color: '#f59e0b', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                ⚠️ Google Integration is disabled. Enable it in Feature Flags to use these services.
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="integration-overview">
        <div className="overview-card">
          <div className="overview-header">
            <h3>Integration Status</h3>
            <div className="status-indicator">
              {Object.values(integrationStatus).filter(Boolean).length} / 3 Active
            </div>
          </div>
          <div className="service-status">
            <div className={`service ${integrationStatus.sheets ? 'connected' : 'disconnected'}`}>
              Google Sheets {integrationStatus.sheets ? '✓' : '○'}
            </div>
            <div className={`service ${integrationStatus.docs ? 'connected' : 'disconnected'}`}>
              Google Docs {integrationStatus.docs ? '✓' : '○'}
            </div>
            <div className={`service ${integrationStatus.gcp ? 'connected' : 'disconnected'}`}>
              Google Cloud {integrationStatus.gcp ? '✓' : '○'}
            </div>
          </div>
        </div>
      </div>

      <div className="integration-grid">
        <div className="integration-card">
          <div className="card-header">
            <FileText className="card-icon" />
            <div className="connection-status">
              {integrationStatus.sheets ? (
                <CheckCircle className="status-icon connected" />
              ) : (
                <AlertCircle className="status-icon disconnected" />
              )}
            </div>
          </div>
          <h3>Google Sheets Progress Tracker</h3>
          <p>Automated progress tracking with Google Sheets API integration for real-time updates</p>
          <div className="integration-features">
            <ul>
              <li>Real-time progress synchronization</li>
              <li>Automated weekly reports</li>
              <li>Custom dashboard integration</li>
              <li>Data visualization and charts</li>
            </ul>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => handleConfigure('sheets')}
            disabled={isConfiguring === 'sheets' || !isGoogleIntegrationEnabled}
          >
            {isConfiguring === 'sheets' ? 'Configuring...' : 
             integrationStatus.sheets ? 'Reconfigure' : 'Configure Integration'}
          </button>
        </div>
        
        <div className="integration-card">
          <div className="card-header">
            <BarChart className="card-icon" />
            <div className="connection-status">
              {integrationStatus.docs ? (
                <CheckCircle className="status-icon connected" />
              ) : (
                <AlertCircle className="status-icon disconnected" />
              )}
            </div>
          </div>
          <h3>Google Docs Reports</h3>
          <p>Automated report generation and documentation with Google Docs API</p>
          <div className="integration-features">
            <ul>
              <li>Weekly progress reports</li>
              <li>Certification tracking documents</li>
              <li>Portfolio documentation</li>
              <li>Template-based generation</li>
            </ul>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => handleConfigure('docs')}
            disabled={isConfiguring === 'docs' || !isGoogleIntegrationEnabled}
          >
            {isConfiguring === 'docs' ? 'Configuring...' : 
             integrationStatus.docs ? 'Reconfigure' : 'Setup Reports'}
          </button>
        </div>
        
        <div className="integration-card">
          <div className="card-header">
            <Cloud className="card-icon" />
            <div className="connection-status">
              {integrationStatus.gcp ? (
                <CheckCircle className="status-icon connected" />
              ) : (
                <AlertCircle className="status-icon disconnected" />
              )}
            </div>
          </div>
          <h3>GCP Fundamentals</h3>
          <p>Google Cloud Platform learning and implementation tracking with hands-on labs</p>
          <div className="integration-features">
            <ul>
              <li>Cloud project management</li>
              <li>Service usage tracking</li>
              <li>Cost monitoring and alerts</li>
              <li>Learning path progress</li>
            </ul>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => handleConfigure('gcp')}
            disabled={isConfiguring === 'gcp' || !isGoogleIntegrationEnabled}
          >
            {isConfiguring === 'gcp' ? 'Configuring...' : 
             integrationStatus.gcp ? 'Reconfigure' : 'Start Learning'}
          </button>
        </div>
      </div>

      <div className="google-workspace-tools">
        <h2>Google Workspace Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <Settings className="tool-icon" />
            <h4>API Configuration</h4>
            <p>Manage API keys, OAuth credentials, and service configurations</p>
            <button 
              className="btn btn-secondary"
              disabled={!isGoogleIntegrationEnabled}
            >
              Configure APIs
            </button>
          </div>
          <div className="tool-card">
            <BarChart className="tool-icon" />
            <h4>Data Sync Monitor</h4>
            <p>Monitor data synchronization status and resolve conflicts</p>
            <button 
              className="btn btn-secondary"
              disabled={!isGoogleIntegrationEnabled}
            >
              View Sync Status
            </button>
          </div>
          <div className="tool-card">
            <FileText className="tool-icon" />
            <h4>Template Library</h4>
            <p>Access pre-built templates for reports and documentation</p>
            <button 
              className="btn btn-secondary"
              disabled={!isGoogleIntegrationEnabled}
            >
              Browse Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}