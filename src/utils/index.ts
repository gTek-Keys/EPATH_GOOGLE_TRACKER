// Secure localStorage utility with encryption (simplified implementation)
export class SecureStorage {
  private static key = 'epath-tracker-key'
  
  // Simple encryption (in production, use proper encryption libraries)
  private static encrypt(data: string): string {
    return btoa(encodeURIComponent(data))
  }
  
  private static decrypt(data: string): string {
    try {
      return decodeURIComponent(atob(data))
    } catch {
      return ''
    }
  }
  
  static setItem(key: string, value: any): void {
    try {
      const data = JSON.stringify(value)
      const encrypted = this.encrypt(data)
      localStorage.setItem(`${this.key}-${key}`, encrypted)
    } catch (error) {
      console.error('SecureStorage setItem error:', error)
    }
  }
  
  static getItem<T>(key: string): T | null {
    try {
      const encrypted = localStorage.getItem(`${this.key}-${key}`)
      if (!encrypted) return null
      
      const decrypted = this.decrypt(encrypted)
      return JSON.parse(decrypted) as T
    } catch (error) {
      console.error('SecureStorage getItem error:', error)
      return null
    }
  }
  
  static removeItem(key: string): void {
    localStorage.removeItem(`${this.key}-${key}`)
  }
  
  static clear(): void {
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      if (key.startsWith(this.key)) {
        localStorage.removeItem(key)
      }
    })
  }
}

// Progress tracking utilities
export interface ProgressEntry {
  id: string
  title: string
  description: string
  progress: number
  lastUpdated: string
  category: 'redhat' | 'google' | 'security' | 'portfolio'
}

export class ProgressTracker {
  private static storageKey = 'progress-entries'
  
  static saveProgress(entry: ProgressEntry): void {
    const entries = this.getAllProgress()
    const existingIndex = entries.findIndex(e => e.id === entry.id)
    
    if (existingIndex >= 0) {
      entries[existingIndex] = { ...entry, lastUpdated: new Date().toISOString() }
    } else {
      entries.push({ ...entry, lastUpdated: new Date().toISOString() })
    }
    
    SecureStorage.setItem(this.storageKey, entries)
  }
  
  static getAllProgress(): ProgressEntry[] {
    return SecureStorage.getItem<ProgressEntry[]>(this.storageKey) || []
  }
  
  static getProgressByCategory(category: ProgressEntry['category']): ProgressEntry[] {
    return this.getAllProgress().filter(entry => entry.category === category)
  }
  
  static deleteProgress(id: string): void {
    const entries = this.getAllProgress().filter(entry => entry.id !== id)
    SecureStorage.setItem(this.storageKey, entries)
  }
}

// Date utilities
export const formatDate = (date: string | Date): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const getWeekRange = (date: Date = new Date()): { start: Date; end: Date } => {
  const start = new Date(date)
  const day = start.getDay()
  const diff = start.getDate() - day + (day === 0 ? -6 : 1) // Adjust for Monday start
  start.setDate(diff)
  start.setHours(0, 0, 0, 0)
  
  const end = new Date(start)
  end.setDate(start.getDate() + 6)
  end.setHours(23, 59, 59, 999)
  
  return { start, end }
}

// Feature flag utilities
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

export class FeatureFlagManager {
  private static storageKey = 'feature-flags'
  
  static getFlags(): FeatureFlag[] {
    const defaultFlags: FeatureFlag[] = [
      {
        id: 'secure-storage',
        name: 'Secure Local Storage',
        description: 'Enable encrypted local storage for sensitive data',
        enabled: true,
        environment: 'development',
        createdBy: 'system',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'google-integration',
        name: 'Google API Integration',
        description: 'Enable Google Workspace API connections',
        enabled: false,
        environment: 'development',
        createdBy: 'system',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'audit-logging',
        name: 'Audit Logging',
        description: 'Comprehensive audit trail for security events',
        enabled: true,
        environment: 'development',
        createdBy: 'system',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]
    
    return SecureStorage.getItem<FeatureFlag[]>(this.storageKey) || defaultFlags
  }
  
  static setFlags(flags: FeatureFlag[]): void {
    SecureStorage.setItem(this.storageKey, flags)
  }
  
  static toggleFlag(id: string): FeatureFlag[] {
    const flags = this.getFlags()
    const updatedFlags = flags.map(flag => 
      flag.id === id ? { 
        ...flag, 
        enabled: !flag.enabled,
        updatedAt: new Date().toISOString()
      } : flag
    )
    this.setFlags(updatedFlags)
    return updatedFlags
  }
  
  static isEnabled(id: string): boolean {
    const flags = this.getFlags()
    const flag = flags.find(f => f.id === id)
    return flag?.enabled || false
  }
}

// Audit logging utilities
export interface AuditLogEntry {
  id: string
  timestamp: string
  user: string
  action: string
  resource: string
  details: string
  severity: 'low' | 'medium' | 'high' | 'critical'
}

export class AuditLogger {
  private static storageKey = 'audit-logs'
  private static maxEntries = 1000
  
  static log(entry: Omit<AuditLogEntry, 'id' | 'timestamp'>): void {
    if (!FeatureFlagManager.isEnabled('audit-logging')) {
      return
    }
    
    const logs = this.getLogs()
    const newEntry: AuditLogEntry = {
      ...entry,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString()
    }
    
    logs.unshift(newEntry)
    
    // Keep only the most recent entries
    if (logs.length > this.maxEntries) {
      logs.splice(this.maxEntries)
    }
    
    SecureStorage.setItem(this.storageKey, logs)
  }
  
  static getLogs(): AuditLogEntry[] {
    return SecureStorage.getItem<AuditLogEntry[]>(this.storageKey) || []
  }
  
  static clearLogs(): void {
    SecureStorage.removeItem(this.storageKey)
  }
}