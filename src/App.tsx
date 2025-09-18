import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Dashboard } from './components/Dashboard'
import { RedHatTracker } from './components/RedHatTracker/RedHatTracker'
import { GoogleIntegration } from './components/GoogleIntegration/GoogleIntegration'
import { CybersecurityAudit } from './components/CybersecurityAudit/CybersecurityAudit'
import { FeatureFlags } from './components/FeatureFlags/FeatureFlags'
import { WeeklyLogs } from './components/WeeklyLogs/WeeklyLogs'
import { Portfolio } from './components/Portfolio/Portfolio'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/redhat-tracker" element={<RedHatTracker />} />
            <Route path="/google-integration" element={<GoogleIntegration />} />
            <Route path="/cybersecurity-audit" element={<CybersecurityAudit />} />
            <Route path="/feature-flags" element={<FeatureFlags />} />
            <Route path="/weekly-logs" element={<WeeklyLogs />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
