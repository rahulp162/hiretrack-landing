"use client";

import { 
  Brain, 
  Briefcase, 
  Users, 
  Calendar, 
  Search, 
  Mail, 
  FileText, 
  Palette, 
  BarChart3, 
  CheckSquare, 
  Building2, 
  Shield, 
  Zap, 
  Settings, 
  Link2,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const featureCategories = [
  {
    id: "ai-powered",
    icon: Brain,
    title: "AI-Powered Features",
    description: "Advanced AI capabilities for intelligent candidate analysis and evaluation",
    color: "from-purple-500 to-pink-500",
    features: [
      {
        title: "Organization-Level AI Provider Selection",
        highlights: [
          "Multiple AI Provider Support: Choose from Google Gemini, OpenAI (ChatGPT), Anthropic (Claude), or Perplexity",
          "Per-Organization Configuration: Each organization can configure their preferred AI provider independently",
          "Model Selection: Choose specific models per provider (default models available)",
          "Custom Model Support: Configure custom model endpoints for advanced use cases",
          "API Key Management: Secure, encrypted storage of AI provider API keys per organization",
          "Provider Switching: Easily switch between AI providers without data loss",
          "Provider Validation: Test AI provider connections before activation"
        ],
        subFeatures: [
          {
            name: "Google Gemini",
            items: ["Models: Gemini 1.5 Flash (default), Gemini 1.5 Pro, Gemini 2.5 Flash Lite, Gemini 1.5 Flash 8B"]
          },
          {
            name: "OpenAI (ChatGPT)",
            items: ["Models: GPT-4o Mini (default), GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo and custom models"]
          },
          {
            name: "Anthropic (Claude)",
            items: ["Models: Claude 3.5 Sonnet (default), Claude 3.5 Haiku, Claude 3 Opus and custom models"]
          },
          {
            name: "Perplexity",
            items: ["Models: Sonar Pro (default) and custom models"]
          }
        ]
      },
      {
        title: "Resume Analysis & Processing",
        highlights: [
          "AI-Powered Resume Parsing: Advanced resume parsing using the selected AI provider",
          "Intelligent Scoring System: Multi-dimensional candidate assessment with four scoring dimensions",
          "Automated Resume Processing: Batch CV processing with AI-powered data extraction",
          "PDF Resume Parsing: Extract text and structured data from PDF resumes (supported by Gemini)",
          "Smart Recommendations: AI-generated candidate insights and hiring recommendations",
          "Duplicate Detection: Identify duplicate applications automatically",
          "Data Extraction: Automated extraction of name, contact info, experience, skills, education, and more",
          "Format Standardization: Consistent data format across all resumes"
        ],
        subFeatures: [
          {
            name: "Scoring Dimensions",
            items: ["Skills Match Score", "Experience Relevance Score", "Affordability Score (salary expectations vs budget)", "Overall Composite Score"]
          }
        ]
      },
      {
        title: "Candidate Evaluation",
        highlights: [
          "Multi-dimensional Assessment: Comprehensive evaluation across technical skills, experience, affordability, and overall fit",
          "Automated Insights: AI-generated strengths, areas of concern, and recommendations",
          "Risk Assessment: Automated hiring risk evaluation",
          "Batch CV Processing: Upload and process multiple resumes simultaneously",
          "Progress Tracking: Real-time processing status for batch operations",
          "Evaluation Configuration: Organization-level evaluation settings with temperature control, custom prompts, and more"
        ]
      }
    ]
  },
  {
    id: "job-management",
    icon: Briefcase,
    title: "Job Management",
    description: "Complete job posting and management system",
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        title: "Job Posting Features",
        highlights: [
          "Dynamic Job Postings: Create and manage job positions with rich descriptions",
          "Job Status Management: Open, Draft, Closed, and Archived statuses",
          "Custom Job Forms: Flexible application forms with custom fields",
          "Job Analytics: Track application count, view count, conversion rate, and time-to-fill",
          "Application Deadline: Set closing dates for job postings",
          "Public Job URLs: Shareable job links for candidates",
          "Branded Career Portal: Customizable job application portal for candidates",
          "Multi-step Application Process: Configure single-step or multi-step application workflows",
        ]
      },
      {
        title: "Job-Specific Customization",
        highlights: [
          "Job-Specific Custom Fields: Create fields unique to specific job postings",
          "Job-Specific Lanes: Custom workflow stages per job",
          "Job Performance Tracking: Monitor application volume, time-to-fill, and success rates",
          "Bulk Job Operations: Bulk status updates and management"
        ]
      }
    ]
  },
  {
    id: "candidate-management",
    icon: Users,
    title: "Candidate Management",
    description: "Comprehensive candidate tracking and pipeline management",
    color: "from-green-500 to-emerald-500",
    features: [
      {
        title: "Candidate Profiles",
        highlights: [
          "Comprehensive Candidate Profiles: Detailed candidate information and tracking",
          "Personal Information: Contact details, address, professional summary",
          "Professional Details: Work history, achievements, skills, experience",
          "Document Management: Resume, portfolio, certificates, and reference attachments",
          "Custom Fields Support: Organization-specific and job-specific custom fields",
          "Candidate History: Complete audit trail of all candidate interactions",
          "Status Tracking: Track candidates through hiring pipeline stages"
        ]
      },
      {
        title: "Pipeline Management",
        highlights: [
          "Drag-and-Drop Kanban Board: Visual candidate pipeline management with intuitive drag-and-drop interface",
          "Real-time Status Updates: Drag candidates between stages to instantly update their status",
          "Visual Feedback: Real-time visual feedback during drag operations",
          "Status Change Tracking: All status changes via drag-and-drop are tracked in candidate history",
          "Checklist Validation: Optional checklist validation before allowing status changes",
          "Pending Moves Management: Queue and manage candidate moves with validation",
          "Lane Reordering: Drag and drop lanes to reorder pipeline stages",
          "Custom Status Workflows: Configurable hiring stages (Applied, Screening, Shortlisted, Interview, Processing, Accepted, Rejected)",
          "Job-Specific Lanes: Custom workflow stages per job posting",
          "Lane Restrictions: Configure non-editable and non-deletable lanes",
          "Bulk Candidate Operations: Bulk archive, status updates, and moves",
          "Saved Views: Save and reuse filtered candidate views",
          "Multi-tab Synchronization: Drag-and-drop operations sync across multiple browser tabs"
        ]
      },
      {
        title: "Candidate Operations",
        highlights: [
          "Manual Candidate Entry: Add candidates manually with full profile",
          "Bulk Import: CSV import for multiple candidates",
          "Guest Application: Allow candidates to apply without account",
          "Candidate Sharing: Export candidate profiles via secure PDF generation",
          "Candidate Details Updates: Track all changes to candidate information",
          "Relevant Experience Tracking: Track candidate experience relevance"
        ]
      }
    ]
  },
  {
    id: "interview-scheduling",
    icon: Calendar,
    title: "Interview Scheduling & Calendar",
    description: "Seamless interview scheduling with calendar integration",
    color: "from-orange-500 to-red-500",
    features: [
      {
        title: "Interview Management",
        highlights: [
          "Interview Scheduling: Schedule interviews with date, time, and duration",
          "Interviewer Assignment: Assign candidates to specific interviewers",
          "Multiple Interview Types: Phone, Video, Onsite, and Technical Assessment",
          "Interview Duration: Configurable duration (30, 60, 90 minutes)",
          "Interview Notes: Add notes and feedback during/after interviews",
          "Interview Status Tracking: Scheduled, Completed, Cancelled statuses",
          "Interview Reminders: Automated pre-interview reminders",
          "Follow-up Scheduling: Schedule next round interviews"
        ]
      },
      {
        title: "Google Calendar Integration",
        highlights: [
          "Google Calendar Sync: Full two-way sync with Google Calendar",
          "Automatic Event Creation: Automatically create calendar events for interviews",
          "Google Meet Integration: Automatic Google Meet link generation",
          "Meeting Updates: Update calendar events when interview details change",
          "Meeting Cancellation: Cancel meetings with automatic calendar updates",
          "Attendee Management: Add guests/attendees to calendar events",
          "Meeting Attachments: Attach documents to calendar events",
          "Calendar Webhooks: Real-time sync via Google Calendar webhooks",
          "Timezone Support: Handle different timezones automatically",
          "Meeting Invite Responses: Track accept/decline/tentative responses"
        ]
      },
      {
        title: "Calendar Features",
        highlights: [
          "Full Calendar View: Visual calendar interface for interview scheduling",
          "Interview Calendar: Dedicated calendar view for all interviews",
        ]
      }
    ]
  },
  {
    id: "search-filtering",
    icon: Search,
    title: "Advanced Search & Filtering",
    description: "Powerful search and filtering capabilities",
    color: "from-indigo-500 to-purple-500",
    features: [
      {
        title: "Search Capabilities",
        highlights: [
          "Multi-criteria Search: Search candidates by name, email, phone, skills, location, experience",
          "Quick Search: Fast search across all candidate fields",
          "Advanced Search: Complex search queries with multiple criteria",
        ]
      },
      {
        title: "Filtering Options",
        highlights: [
          "Status Filters: Filter by pipeline stage",
          "Date Range Filtering: Filter by application date ranges",
          "Salary Range Filtering: Filter by current and expected CTC ranges",
          "Experience Filtering: Filter by years of experience",
          "Location Filtering: Filter by city, state, or country",
          "Skills Filtering: Filter by technical skills",
          "Interviewer Assignment Filter: Filter by assigned interviewer",
          "Job-Specific Filtering: Filter candidates by job posting",
          "Custom Field Filtering: Filter by organization-specific custom fields",
          "Advanced Logic Operators: AND/OR logic for complex search queries"
        ]
      },
      {
        title: "Search Results",
        highlights: [
          "List View: Compact candidate list display",
          "Grid View: Visual candidate cards",
          "Sort Options: Sort by various criteria (date, name, score, etc.)",
          "Bulk Actions: Select multiple candidates for bulk operations"
        ]
      }
    ]
  },
  {
    id: "communication",
    icon: Mail,
    title: "Communication & Notifications",
    description: "Comprehensive communication and notification system",
    color: "from-pink-500 to-rose-500",
    features: [
      {
        title: "Email System",
        highlights: [
          "Multi-provider Email Support: Organization-level email provider configuration",
          "Per-Organization Email Settings: Each organization configures their own email provider",
          "Email Provider Switching: Switch between email providers without data loss",
          "Email Configuration Testing: Test email configuration before activation",
          "Email Template System: Organization-specific customizable email templates",
          "Email Customization: Fully customizable email templates with organization branding",
          "Dynamic Content: Template variables for personalization",
          "Email History: Track all sent emails per organization",
          "Email Queue: Queue system for reliable email delivery",
          "Email Delivery Tracking: Monitor email delivery status"
        ],
        subFeatures: [
          {
            name: "SMTP",
            items: ["Custom SMTP server configuration", "SSL/TLS support", "Custom 'from' address"]
          },
          {
            name: "Resend API",
            items: ["Modern email API integration", "Resend API key configuration", "Custom 'from' and 'reply-to' addresses"]
          },
          {
            name: "Brevo (Sendinblue)",
            items: ["Professional email service integration", "Brevo API key configuration", "Custom 'from' and 'reply-to' addresses"]
          }
        ]
      },
      {
        title: "Real-time Notifications",
        highlights: [
          "Real-time notification updates",
          "In-App Notifications: Real-time in-app notification system",
          "Notification Types: New applications, interview assignments, status updates, new remarks, step completed, mentions, and more",
          "Notification Preferences: User-level and global notification and Job-level notification settings",
          "Email Notification Settings: Per-user email notification preferences",
          "Job-Specific Notifications: Configure notifications per job",
          "Notification Count: Real-time unread notification count",
          "Mark as Read: Mark individual or all notifications as read"
        ]
      },
      {
        title: "Communication Tools",
        highlights: [
          "Scheduled Messages: Schedule future-dated communications",
          "Template Variables: Dynamic content insertion",
          "Direct Messages: One-on-one candidate communication",
          "File Attachments: Share documents via email",
          "Message History: Complete communication log",
          "Response Tracking: Track candidate responses"
        ]
      }
    ]
  },
  {
    id: "file-management",
    icon: FileText,
    title: "File Management",
    description: "Flexible file storage and management options",
    color: "from-teal-500 to-cyan-500",
    features: [
      {
        title: "Storage Options (Organization-Level Configuration)",
        highlights: [
          "Per-Organization Configuration: Each organization selects and configures their preferred storage option",
          "Storage Provider Switching: Switch between storage providers without data loss",
          "Connection Testing: Test storage configuration before activation",
          "Secure Credential Storage: Encrypted storage of API keys and credentials",
          "URL Proxying: Secure file access via proxied URLs (for Cloudinary and S3)",
          "File URL Mapping: Database mapping for secure file access",
          "Automatic File Handling: Seamless file upload regardless of storage provider"
        ],
        subFeatures: [
          {
            name: "Local Storage (Server-Based)",
            items: ["Default Storage: No external service required", "Server-Based Storage: Files stored directly on the application server", "Organization-Specific Directories: Each organization has isolated storage directories", "Cost-Effective: No additional storage costs"]
          },
          {
            name: "Cloudinary (Cloud Image & Media Management)",
            items: ["Cloud-Based Storage: Professional cloud media management service", "Automatic image optimization and transformation", "Video file support", "CDN delivery for fast global access", "Format conversion capabilities"]
          },
          {
            name: "AWS S3 (Amazon Cloud Storage)",
            items: ["Enterprise Cloud Storage: Scalable Amazon Web Services S3 storage", "Unlimited scalability", "Global edge locations for fast access", "Pay-as-you-go pricing"]
          }
        ]
      },
      {
        title: "File Upload & Processing",
        highlights: [
          "File Upload: Upload resumes, portfolios, certificates, and other documents",
          "Multiple File Types: Support for images, PDFs, documents, videos",
          "Base64 Encoding: Secure file upload via base64 encoding",
          "File Preview: Preview documents directly in the application",
          "Batch File Processing: Bulk CV upload and processing",
          "Custom Field File Upload: File upload support in custom fields",
          "File Attachments: Attach files to candidates, jobs, and communications",
          "Meeting Attachments: Attach documents to calendar events"
        ]
      },
      {
        title: "File Security & Access",
        highlights: [
          "Secure File Storage: Encrypted file storage with access controls",
          "Access Control: Role-based file access restrictions",
          "File Sharing: Share files via secure links with expiration",
          "File Download: Download files with proper access control",
          "Organization Isolation: Files are completely isolated per organization",
          "Secure URLs: Proxied URLs prevent direct access to storage credentials",
          "File URL Mapping: Database-backed URL mapping for security"
        ]
      }
    ]
  },
  {
    id: "customization",
    icon: Palette,
    title: "Customization & Branding",
    description: "Flexible customization and branding options",
    color: "from-violet-500 to-purple-500",
    features: [
      {
        title: "Custom Fields System",
        highlights: [
          "Dynamic Form Fields: Create custom fields for jobs and candidates",
          "Field Types: Text fields, Number fields, Date fields, Dropdown/Select fields, Multi-select fields, Radio buttons, Checkboxes, File upload fields",
          "Field Configuration: Required/Optional fields, Default values, Validation rules, Display order, Private fields, Show on card option",
          "Field Persistence: Permanent or temporary fields",
          "Global Fields: Organization-wide custom fields",
          "Job-Specific Fields: Fields unique to specific jobs",
          "Candidate-Specific Fields: Fields unique to specific candidates",
        ]
      },
      {
        title: "Organization Branding",
        highlights: [
          "Custom Logos: Upload organization logo",
          "Color Scheme: Customize brand colors",
          "Logo Placement: Header and footer customization",
          "Branded Email Templates: Customize email appearance"
        ]
      },
      {
        title: "Multi-organization Support",
        highlights: [
          "Separate Workspaces: Isolated workspaces for different organizations",
          "Organization-Specific Settings: Custom settings per organization",
        ]
      }
    ]
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and reporting dashboard",
    color: "from-amber-500 to-orange-500",
    features: [
      {
        title: "Candidate Analytics",
        highlights: [
          "Candidate Funnel Report: Visual representation of candidate by statuses",
          "Conversion Rates: Calculate conversion rates between stages",
          "Time-in-Stage Analysis: Average time candidates spend in each stage",
          "Application Trends: Daily, weekly, monthly application volumes",
          "Peak Time Analysis: Identify peak application periods",
        ]
      },
      {
        title: "Job Performance Analytics",
        highlights: [
          "Job Performance Metrics: Track application count, time-to-fill, success rates",
          "Top Performing Jobs: Identify best-performing job postings",
          "Application Volume Trends: Track application trends over time"
        ]
      },
      {
        title: "Interview Analytics",
        highlights: [
          "Interview Assignment Analytics: Track interviewer workload and assignments",
          "Workload Balancing: Analyze workload distribution",
        ]
      },
      {
        title: "Reporting Features",
        highlights: [
          "Real-time Data: Live data updates",
          "Date Range Filtering: Filter reports by date ranges",
          "Job-Specific Filtering: Filter analytics by job",
          "Export Options: Export reports as CSV",
          "Interactive Charts: Funnel charts, bar charts, line charts, pie charts",
          "Data Visualization: Multiple chart types for different insights"
        ]
      }
    ]
  },
  {
    id: "checklist",
    icon: CheckSquare,
    title: "Checklist & Workflow Management",
    description: "Configurable checklist templates for hiring processes",
    color: "from-emerald-500 to-green-500",
    features: [
      {
        title: "Checklist Operations",
        highlights: [
          "Checklist Submission: Submit completed checklists",
          "Checklist Validation: Validate checklist completion",
          "Checklist Tracking: Track checklist progress",
          "Step Completion: Mark individual steps as complete",
        ]
      }
    ]
  },
  {
    id: "multi-tenant",
    icon: Building2,
    title: "Multi-Tenant Organization System",
    description: "Complete data isolation with organization-level configuration",
    color: "from-slate-500 to-gray-500",
    features: [
      {
        title: "Organization Isolation",
        highlights: [
          "Complete Data Isolation: Each organization has completely isolated data and settings",
          "Organization-Specific Settings: All settings (AI providers, email, storage, branding) are per-organization",
          "Separate User Bases: Users belong to specific organizations and cannot access other organizations' data",
          "Organization-Level Configuration: Every feature can be configured independently per organization",
          "Multiple Organizations Support: Enable/disable support for multiple organizations in the system",
          "First Organization Privileges: First organization can control multi-tenant settings",
          "Organization Creation: Create new organizations with isolated workspaces",
          "Organization Management: Manage multiple organizations from admin panel",
          "Organization-Specific File Storage: Each organization can have separate file storage directories"
        ]
      },
      {
        title: "Multi-Organization Features",
        highlights: [
          "Enable/Disable Multi-Tenancy: Control whether multiple organizations can exist",
          "Organization Switching: Users can switch between organizations (if they belong to multiple)",
          "Organization Context: All operations are scoped to the current organization",
          "Cross-Organization Data Protection: Strict data isolation prevents cross-organization access",
          "Organization-Specific Branding: Each organization has its own branding and portal",
          "Organization-Specific Custom Fields: Custom fields are isolated per organization",
          "Organization-Specific Lanes: Default pipeline stages configured per organization",
          "Organization-Specific Email Templates: Email templates are per-organization",
          "Organization-Specific AI Settings: AI provider selection and configuration per organization"
        ]
      }
    ]
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Access Control",
    description: "Enterprise-grade security and access control",
    color: "from-red-500 to-pink-500",
    features: [
      {
        title: "Authentication",
        highlights: [
          "Password Security: Encrypted password storage with bcrypt hashing",
          "Two-Factor Authentication (2FA): Organization-level 2FA enablement",
          "Password Reset: Secure password reset with tokens",
          "Session Management: Secure session handling with automatic logout",
          "Multi-Organization Login: Support for users belonging to multiple organizations"
        ],
        subFeatures: [
          {
            name: "2FA Features",
            items: ["Enable/Disable 2FA: Admins can enable or disable 2FA for their organization", "OTP Verification: Secure OTP (One-Time Password) verification via email", "2FA Enforcement: Optional enforcement of 2FA for all users in organization", "Secure OTP Generation: Cryptographically secure OTP generation", "OTP Expiration: Time-limited OTP codes for security"]
          }
        ]
      },
      
     
    ]
  },
  {
    id: "realtime",
    icon: Zap,
    title: "Real-time Features",
    description: "Live updates and collaboration features",
    color: "from-yellow-500 to-amber-500",
    features: [
      
      {
        title: "Live Collaboration",
        highlights: [
          "Real-time Mentions: @mention users in remarks",
          "Live Remarks: Real-time remark updates",
          "Collaborative Editing: Multiple users can work simultaneously",
          "Activity Tracking: Track user activity in real-time"
        ]
      }
    ]
  },
  {
    id: "system-admin",
    icon: Settings,
    title: "System Administration",
    description: "Comprehensive system administration tools",
    color: "from-blue-600 to-indigo-600",
    features: [
      {
        title: "User Management",
        highlights: [
          "User Creation: Create and manage user accounts",
          "User Roles: Assign and manage user roles",
          "User Activation: Activate/deactivate users",
          "User Profile Management: Edit user profiles",
          "Password Management: Reset and manage passwords",
        ]
      },
      {
        title: "System Configuration",
        highlights: [
          "Organization Settings: Configure organization details (name, admin, branding)",
          "Email Configuration: Set up email providers (SMTP, Resend, Brevo) per organization",
          "File Storage Configuration: Configure storage providers per organization (Local, Cloudinary, AWS S3)",
          "Timezone Settings: Set organization timezone (name and offset)",
          "AI Provider Settings: Configure AI provider selection and API keys per organization",
          "Google Calendar Settings: Configure Google Calendar integration per organization",
          "Auto-update Settings: Configure automatic system updates",
          "Captcha Settings: Configure CAPTCHA for forms",
          "License Management: License validation and management",
          "Multi-Organization Settings: Enable/disable support for multiple organizations",
          "Onboarding Configuration: Configure onboarding flow and steps",
          "Evaluation Configuration: Configure AI evaluation parameters (temperature, prompts, etc.)"
        ]
      },
      {
        title: "Backup & Recovery",
        highlights: [
          "Database Backups: Create and manage database backups",
          "Backup Scheduling: Automated backup scheduling",
          "Backup Download: Download backup files",
          "Backup Restoration: Restore from backups",
          "Snapshot Management: Create and manage database snapshots"
        ]
      },
      {
        title: "Monitoring & Logging",
        highlights: [
          "System Logs: View system logs",
          "Nginx Logs: Access Nginx server logs",
          "PM2 Logs: View PM2 process logs",
          "Error Tracking: Track and monitor errors",
          "Disk Space Monitoring: Track disk usage"
        ]
      }
    ]
  },
  {
    id: "integrations",
    icon: Link2,
    title: "Integrations",
    description: "Seamless integrations with popular services",
    color: "from-cyan-500 to-blue-500",
    features: [
      {
        title: "Calendar Integrations",
        highlights: [
          "Google Calendar: Full integration with Google Calendar",
          "Google Meet: Automatic Google Meet link generation",
          "Calendar Sync: Two-way calendar synchronization",
          "Event Management: Create, update, and cancel calendar events"
        ]
      },
      {
        title: "Email Integrations",
        highlights: [
          "SMTP: Custom SMTP server integration",
          "Resend: Resend API integration",
          "Brevo: Brevo (Sendinblue) email service integration"
        ]
      },
      {
        title: "Storage Integrations",
        highlights: [
          "Cloudinary: Cloud image and video management with automatic optimization",
          "AWS S3: Amazon S3 cloud storage with unlimited scalability",
          "Local Storage: Server-based file storage with no external dependencies"
        ]
      },
      {
        title: "AI Integrations",
        highlights: [
          "Google Gemini AI: Advanced AI capabilities for resume analysis",
          "OpenAI (ChatGPT): Industry-leading language models",
          "Anthropic (Claude): High-performance AI models",
          "Perplexity: Advanced AI with enhanced context understanding"
        ]
      }
    ]
  }
];

export function FeaturesShowcase() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-gradient-to-b from-background via-muted/50 to-background">
        {/* Clean dot pattern with fade to bottom */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, hsl(var(--accent) / 0.25) 2px, transparent 0)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        
        {/* Gradient fade overlay - fades pattern to bottom */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, hsl(var(--background) / 0.6) 70%, hsl(var(--background)) 100%)',
          }}
        />
        
        {/* Subtle gradient orbs */}
        {/* <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" /> */}

        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">240+ Features</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Complete Feature <span className="text-accent">Showcase</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Explore all the powerful features that make HireTrack the most comprehensive 
              customised hiring management platform.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>AI-Powered Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Real-Time Updates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Multi-Tenant System</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-opacity-0">
        <div className="section-container bg-opacity-0">
          <div className="space-y-24 bg-opacity-0">
            {featureCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {category.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {category.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="card-elevated overflow-hidden">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Highlights - Accordion (collapsed by default) */}
                        <Accordion 
                          type="single" 
                          collapsible 
                          className="w-full"
                        >
                          <AccordionItem value={`${category.id}-${featureIndex}-highlights`} className="border-none">
                            <AccordionTrigger className="py-2 hover:no-underline">
                              <span className="text-sm font-semibold text-muted-foreground">
                                {feature.highlights.length} Features
                              </span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-3 pt-2">
                                {feature.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                    <span className="text-foreground leading-relaxed">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        {/* Sub-features - Accordion (collapsed by default) */}
                        {feature.subFeatures && feature.subFeatures.length > 0 && (
                          <Accordion 
                            type="single" 
                            collapsible 
                            className="w-full pt-4 border-t border-border"
                          >
                            <AccordionItem value={`${category.id}-${featureIndex}-subfeatures`} className="border-none">
                              <AccordionTrigger className="py-2 hover:no-underline">
                                <span className="text-sm font-semibold text-muted-foreground">
                                  Additional Details ({feature.subFeatures.length})
                                </span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="grid md:grid-cols-2 gap-4 pt-2">
                                  {feature.subFeatures.map((subFeature, subIdx) => (
                                    <div key={subIdx} className="p-4 rounded-lg bg-muted/30 border border-border">
                                      <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                        <Badge variant="secondary" className="text-xs">
                                          {subFeature.name}
                                        </Badge>
                                      </h5>
                                      <ul className="space-y-2 pl-0 list-none">
                                        {subFeature.items.map((item, itemIdx) => (
                                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-accent flex-shrink-0">•</span>
                                            <span className="flex-1">{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Differentiators
              </h2>
              <p className="text-lg text-muted-foreground">
                What makes HireTrack stand out from the competition
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Multi-AI Provider Support: Choose from Gemini, ChatGPT, Claude, or Perplexity at organization level",
                "True Multi-Tenancy: Complete data isolation with organization-level configuration for all features",
                "Drag-and-Drop Pipeline Management: Intuitive visual Kanban board with real-time status updates",
                "AI-Powered Resume Analysis: Advanced AI scoring system with configurable evaluation parameters",
                "Real-time Collaboration: Live updates with multi-tab synchronization",
                "Flexible Custom Fields: Highly customizable forms with global, job-specific, and candidate-specific fields",
                "Comprehensive Analytics: Detailed reporting and analytics dashboard",
                "Flexible Storage Options: Choose from Local, Cloudinary, or AWS S3 storage per organization",
                "Google Calendar Integration: Full two-way sync with Google Calendar and Meet",
                "Advanced Search: Powerful search and filtering capabilities",
                "Role-Based Access: Granular permissions and role management with organization scoping",
                "Email Flexibility: Multiple email provider support (SMTP, Resend, Brevo) per organization",
                "Checklist Workflows: Configurable checklist templates for hiring processes",
                "Organization-Level Customization: Every feature configurable independently per organization",
                "Secure Multi-Tenancy: Complete data isolation with encrypted API keys and settings"
              ].map((differentiator, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground leading-relaxed">{differentiator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our installation guide and documentation to start using HireTrack today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="/installation-guide">
                  View Installation Guide
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/">
                  Back to Home
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
