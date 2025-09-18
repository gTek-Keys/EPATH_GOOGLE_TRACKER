// Red Hat Certification Types
export interface CertificationTrack {
  id: string
  name: string
  description: string
  progress: number
  status: 'not-started' | 'in-progress' | 'completed'
  estimatedHours: number
  topics: string[]
  startDate?: string
  targetDate?: string
  resources?: CertificationResource[]
}

export interface CertificationResource {
  id: string
  title: string
  type: 'video' | 'documentation' | 'lab' | 'book' | 'course'
  url: string
  completed: boolean
}

// Google Integration Types
export interface GoogleIntegration {
  id: string
  service: 'sheets' | 'docs' | 'drive' | 'calendar' | 'gmail'
  name: string
  description: string
  enabled: boolean
  lastSync?: string
  config?: Record<string, any>
}

export interface GoogleSheetsConfig {
  spreadsheetId: string
  sheetName: string
  range: string
  autoSync: boolean
  syncInterval: number // minutes
}

// Cybersecurity Audit Types
export interface SecurityAuditDay {
  day: number
  title: string
  description: string
  status: 'pending' | 'in-progress' | 'completed' | 'failed'
  startDate?: string
  completedDate?: string
  findings: SecurityFinding[]
  recommendations: string[]
}

export interface SecurityFinding {
  id: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  category: 'network' | 'endpoint' | 'access' | 'data' | 'compliance'
  title: string
  description: string
  status: 'open' | 'in-progress' | 'resolved' | 'accepted-risk'
  remediation: string
  dueDate?: string
}

// Weekly Log Types
export interface WeeklyLog {
  id: string
  week: string // ISO date string for the Monday of the week
  title: string
  activities: Activity[]
  hoursSpent: number
  nextWeekGoals: string[]
  challenges: string[]
  achievements: string[]
  mood: 'excellent' | 'good' | 'neutral' | 'challenging' | 'difficult'
  created: string
  updated: string
}

export interface Activity {
  id: string
  description: string
  category: 'learning' | 'practice' | 'project' | 'certification' | 'research'
  hours: number
  completed: boolean
  notes?: string
}

// Portfolio Types
export interface PortfolioProject {
  id: string
  title: string
  description: string
  status: 'planning' | 'in-development' | 'completed' | 'on-hold'
  technologies: string[]
  startDate: string
  completedDate?: string
  links: {
    demo?: string
    github?: string
    documentation?: string
  }
  screenshots: string[]
  challenges: string[]
  learnings: string[]
  category: 'web' | 'system' | 'security' | 'integration' | 'automation'
}

export interface Certification {
  id: string
  name: string
  provider: string
  status: 'target' | 'studying' | 'scheduled' | 'completed' | 'expired'
  progress: number
  startDate?: string
  targetDate?: string
  completedDate?: string
  score?: number
  validUntil?: string
  credentialUrl?: string
}

// Feature Flag Types
export interface FeatureFlag {
  id: string
  name: string
  description: string
  enabled: boolean
  environment: 'development' | 'staging' | 'production'
  createdBy: string
  createdAt: string
  updatedAt: string
  rules?: FeatureFlagRule[]
}

export interface FeatureFlagRule {
  id: string
  condition: string
  value: boolean
  description: string
}

// Progress Tracking Types
export interface ProgressEntry {
  id: string
  title: string
  description: string
  progress: number
  maxProgress: number
  category: 'redhat' | 'google' | 'security' | 'portfolio' | 'general'
  subcategory?: string
  tags: string[]
  lastUpdated: string
  milestones: Milestone[]
}

export interface Milestone {
  id: string
  title: string
  description: string
  completed: boolean
  completedDate?: string
  targetDate?: string
}

// Dashboard Types
export interface DashboardStats {
  totalProgress: number
  completedModules: number
  hoursSpent: number
  activeAlerts: number
  weeklyGoalsCompleted: number
  certificationsInProgress: number
}

export interface DashboardAlert {
  id: string
  type: 'info' | 'warning' | 'error' | 'success'
  title: string
  message: string
  created: string
  read: boolean
  actionUrl?: string
}

// Application State Types
export interface AppState {
  user: UserProfile
  certifications: CertificationTrack[]
  googleIntegrations: GoogleIntegration[]
  securityAudit: SecurityAuditDay[]
  weeklyLogs: WeeklyLog[]
  portfolio: {
    projects: PortfolioProject[]
    certifications: Certification[]
  }
  featureFlags: FeatureFlag[]
  progress: ProgressEntry[]
  dashboard: {
    stats: DashboardStats
    alerts: DashboardAlert[]
  }
}

export interface UserProfile {
  id: string
  name: string
  email: string
  role: 'student' | 'professional' | 'instructor'
  goals: string[]
  preferences: UserPreferences
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  notifications: boolean
  autoSave: boolean
  syncWithGoogle: boolean
  weeklyReportEmail: boolean
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  timestamp: string
}