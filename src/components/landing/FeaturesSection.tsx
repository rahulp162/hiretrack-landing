import { 
  Brain, 
  GitBranch, 
  Users, 
  BarChart3, 
  Mail, 
  FileText, 
  Shield,
  Calendar,
  Search,
  Palette,
  Building2,
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Intelligent resume analysis with Gemini, ChatGPT, Claude, and Perplexity support.",
  },
  {
    icon: GitBranch,
    title: "Visual Pipeline",
    description: "Drag-and-drop Kanban board with real-time status synchronization.",
  },
  {
    icon: Users,
    title: "Role Control",
    description: "Granular permissions for Admins, HR Managers, and Interviewers.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Dashboard with hiring metrics, candidate pipeline, and team performance tracking.",
  },
  {
    icon: Mail,
    title: "Email System",
    description: "Built-in support for SMTP, Resend, and Brevo with templates.",
  },
  {
    icon: Calendar,
    title: "Scheduling",
    description: "Two-way Google Calendar sync with automatic Meet links.",
  },
  {
    icon: FileText,
    title: "File Storage",
    description: "Flexible storage options: Local, Cloudinary, or AWS S3.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "2FA, JWT auth, and encrypted data storage.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description: "Multi-criteria search with boolean logic and filters.",
  },
  {
    icon: Palette,
    title: "Customization",
    description: "Custom fields, branding, and form configurations.",
  },
  {
    icon: Building2,
    title: "Multi-Tenancy",
    description: "Complete data isolation and organization-level config.",
  },
  {
    icon: Zap,
    title: "Real-Time",
    description: "Instant updates and collaboration across all users.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent tracking-wide uppercase">Feature Rich</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight gap-2 flex flex-col">
            Everything You Need<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">to Hire Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A complete suite of tools designed for modern recruitment teams. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card hover:bg-accent/5 transition-all duration-300 border border-transparent hover:border-accent/10 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 text-accent">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 hover:bg-accent hover:text-white border-accent/20 text-foreground transition-all duration-300" asChild>
            <a href="/features" className="flex items-center gap-2">
              View All Features
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;