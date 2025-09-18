import React, { useState, useEffect } from 'react'
import { ToggleLeft, ToggleRight } from 'lucide-react'
import { FeatureFlagManager, AuditLogger } from '../../utils'
import type { FeatureFlag } from '../../types'

export const FeatureFlags: React.FC = () => {
  const [flags, setFlags] = useState<FeatureFlag[]>([])

  useEffect(() => {
    setFlags(FeatureFlagManager.getFlags())
  }, [])

  const toggleFlag = (id: string) => {
    const updatedFlags = FeatureFlagManager.toggleFlag(id)
    setFlags(updatedFlags)
    
    const flag = updatedFlags.find(f => f.id === id)
    if (flag) {
      AuditLogger.log({
        user: 'current-user',
        action: flag.enabled ? 'ENABLE_FEATURE' : 'DISABLE_FEATURE',
        resource: `feature-flag:${id}`,
        details: `Feature flag "${flag.name}" was ${flag.enabled ? 'enabled' : 'disabled'}`,
        severity: 'low'
      })
    }
  }

  return (
    <div className="feature-flags">
      <header className="module-header">
        <div className="header-content">
          <ToggleLeft className="header-icon" style={{ color: '#10b981' }} />
          <div>
            <h1>Feature Flag Management</h1>
            <p>Dynamic feature management and A/B testing interface</p>
          </div>
        </div>
      </header>

      <div className="flags-list">
        {flags.map((flag) => (
          <div key={flag.id} className="flag-item">
            <div className="flag-info">
              <h3>{flag.name}</h3>
              <p>{flag.description}</p>
              <span className="environment-badge">{flag.environment}</span>
            </div>
            <button 
              className={`flag-toggle ${flag.enabled ? 'enabled' : 'disabled'}`}
              onClick={() => toggleFlag(flag.id)}
            >
              {flag.enabled ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
              {flag.enabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}