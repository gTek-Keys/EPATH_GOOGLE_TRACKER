# EPATH Google Tracker - Complete IT Pro Toolkit

This repository documents my technical development journey through the EPATH / UCLA Extension program, with a focus on real-world applications of Google Workspace, Google Cloud, Cybersecurity, and Software Engineering toward IEEE licensure and Humanitarian Computing credentials.

## 🎯 Project Overview

A comprehensive IT professional toolkit built with React + TypeScript featuring:

- **Red Hat Certification Tracker** - Interactive progress tracking for RHCSA, RHCE, and OpenShift certifications
- **Google Workspace Integration** - Automated progress tracking with Sheets/Docs APIs
- **7-Day Cybersecurity Audit** - Security assessment and monitoring dashboard
- **Feature Flag Management** - Dynamic feature control with A/B testing capabilities
- **Secure Local Storage** - Encrypted data storage for sensitive information
- **Weekly Progress Logs** - Comprehensive development journey documentation
- **IEEE Portfolio Builder** - Professional portfolio for certification readiness

## 🚀 Live Demo

The application is a fully functional React + TypeScript web application with:

- **Dashboard**: Overview with progress statistics and module navigation
- **Interactive Components**: Real-time updates, expandable cards, and toggle controls
- **Feature Flag System**: Enable/disable integrations dynamically
- **Responsive Design**: Mobile-friendly interface with modern styling
- **Audit Logging**: Comprehensive activity tracking for security compliance

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 19.1.1 + TypeScript
- **Build Tool**: Vite 7.1.6
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: Modern CSS with CSS Grid and Flexbox
- **Date Handling**: date-fns
- **State Management**: React Hooks + Local Storage

### Project Structure
```
src/
├── components/
│   ├── Dashboard.tsx              # Main dashboard with stats
│   ├── Navigation.tsx/css         # App navigation with routing
│   ├── RedHatTracker/            # Red Hat certification tracking
│   ├── GoogleIntegration/        # Google Workspace tools
│   ├── CybersecurityAudit/       # Security audit timeline
│   ├── FeatureFlags/             # Feature flag management
│   ├── WeeklyLogs/               # Progress logging system
│   └── Portfolio/                # IEEE portfolio builder
├── utils/
│   └── index.ts                  # Utilities (secure storage, progress tracking, etc.)
├── types/
│   └── index.ts                  # TypeScript interfaces and types
└── App.tsx                       # Main application component
```

## 🔧 Core Features

### 1. Red Hat Certification Tracker
- **Interactive Progress Bars**: Visual progress tracking for each certification
- **Expandable Cards**: Detailed topic breakdown and study plans
- **Status Tracking**: Not Started, In Progress, Completed states
- **Time Estimation**: Study hour tracking and planning
- **Resource Management**: Links to learning materials and labs

### 2. Google Workspace Integration
- **Feature Flag Control**: Enable/disable Google APIs dynamically
- **Real-time Status**: Integration connection monitoring
- **Simulated Workflows**: Google Sheets, Docs, and GCP integration
- **Template Library**: Pre-built templates for reports and documentation
- **API Configuration**: OAuth and credential management interface

### 3. Cybersecurity Audit System
- **7-Day Timeline**: Structured security assessment workflow
- **Finding Tracking**: Security issues with severity levels
- **Remediation Planning**: Action items and due dates
- **Compliance Reporting**: Audit trail and documentation

### 4. Feature Flag Management
- **Real-time Toggles**: Enable/disable features without deployment
- **Environment Support**: Development, staging, production environments
- **Audit Integration**: All changes logged for compliance
- **A/B Testing Ready**: Framework for feature experimentation

### 5. Secure Storage System
- **Encrypted Storage**: Sensitive data protection with base64 encoding
- **Type-safe API**: TypeScript interfaces for all stored data
- **Automatic Cleanup**: Data retention and cleanup policies
- **Audit Logging**: All storage operations tracked

### 6. Weekly Progress Logs
- **Activity Tracking**: Detailed breakdown of weekly accomplishments
- **Goal Setting**: Next week planning and objectives
- **Time Management**: Hour tracking across different categories
- **Mood Tracking**: Learning experience and challenge documentation

### 7. IEEE Portfolio Builder
- **Project Showcase**: Detailed project documentation with technologies
- **Certification Tracking**: Progress toward professional certifications
- **Documentation Export**: PDF generation ready for submission
- **Live Demo Links**: Integration with GitHub and deployment platforms

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/gTek-Keys/EPATH_GOOGLE_TRACKER.git
cd EPATH_GOOGLE_TRACKER

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

### Development Server
The application will be available at `http://localhost:5173/`

## 🎮 Usage Guide

### Getting Started
1. **Dashboard**: Start at the main dashboard for an overview of all modules
2. **Feature Flags**: Enable/disable integrations based on your needs
3. **Progress Tracking**: Use the Red Hat Tracker to monitor certification progress
4. **Google Integration**: Configure Google Workspace tools for automation
5. **Security Audit**: Run the 7-day cybersecurity assessment
6. **Documentation**: Log weekly progress and build your IEEE portfolio

### Feature Flag Configuration
Navigate to **Feature Flags** to control:
- **Secure Local Storage**: Enable encrypted data storage
- **Google API Integration**: Enable Google Workspace connections
- **Audit Logging**: Comprehensive activity tracking

### Google Integration Setup
1. Enable the Google Integration feature flag
2. Navigate to Google Tools
3. Configure individual services (Sheets, Docs, GCP)
4. Monitor connection status in real-time

## 🔒 Security Features

### Data Protection
- **Encrypted Storage**: All sensitive data encrypted before storage
- **Audit Trails**: Comprehensive logging of all user actions
- **Feature Isolation**: Modular system with controlled access
- **Type Safety**: TypeScript ensures data integrity

### Compliance Features
- **Activity Logging**: All actions logged with timestamps
- **Data Retention**: Configurable data cleanup policies
- **Access Control**: Feature flag-based permission system
- **Security Monitoring**: Real-time security status tracking

## 📊 Progress Tracking

### Certification Progress
- **RHCSA**: System Administration fundamentals
- **RHCE**: Advanced automation and configuration
- **OpenShift**: Container orchestration and cloud-native development

### Skills Development
- **Technical Skills**: Linux, Ansible, Containers, Cloud Computing
- **Professional Skills**: Project management, documentation, portfolio building
- **Security Skills**: Cybersecurity assessment, compliance, monitoring

## 🎯 IEEE Certification Readiness

### Portfolio Components
- **Technical Projects**: Documented implementations with code samples
- **Learning Documentation**: Comprehensive progress tracking
- **Professional Skills**: Project management and communication
- **Ethical Computing**: Humanitarian technology applications

### Documentation Standards
- **Project Documentation**: Technical specifications and implementation details
- **Progress Reports**: Weekly logs with achievements and challenges
- **Code Quality**: TypeScript, linting, and modern development practices
- **Security Compliance**: Audit trails and security assessments

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Build Output
- Optimized assets in `dist/` directory
- Minified JavaScript and CSS
- Modern browser support with polyfills
- Service worker ready for PWA deployment

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request with detailed description

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🎓 Educational Goals

### EPATH Program Objectives
- **Real-world Applications**: Practical implementation of learned concepts
- **Industry Standards**: Professional development practices
- **Portfolio Development**: IEEE certification preparation
- **Humanitarian Computing**: Ethical technology applications

### Learning Outcomes
- **Full-stack Development**: React + TypeScript application architecture
- **Cloud Integration**: Google Workspace and GCP fundamentals
- **Security Practices**: Cybersecurity assessment and monitoring
- **Professional Skills**: Documentation, project management, portfolio building

---

**Goal**: IEEE cert-ready portfolio with live demos, reports, and full progress documented from zero to humanitarian engineer.

*This project represents a comprehensive journey from beginner to professional-level IT expertise, documented and tracked through real-world applications and industry-standard practices.*
