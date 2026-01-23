"use client";

import { 
  GitBranch, 
  MessageSquare, 
  Brain, 
  Calendar,
  BarChart3,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: GitBranch,
    title: "Drag-and-Drop Candidate Assignment",
    description: "Easily move candidates through your hiring pipeline with intuitive drag-and-drop functionality. Update candidate status in real-time and visualize your entire hiring process at a glance.",
    gif: "/demos/dnd.gif",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: MessageSquare,
    title: "Add Remarks & Comments",
    description: "Collaborate seamlessly with your team by adding remarks and comments to candidate profiles. Keep everyone in the loop with real-time updates and notes.",
    gif: "/demos/remarks.gif",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Brain,
    title: "AI-Powered Resume Evaluation",
    description: "Leverage advanced AI to automatically evaluate resumes and score candidates. Get instant insights on candidate qualifications, experience relevance, and match scores.",
    gif: "/demos/evaluation.gif",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Calendar,
    title: "Interview Scheduling",
    description: "Streamline interview scheduling with integrated calendar sync. Automatically generate meeting links and send reminders to both candidates and interviewers.",
    gif: "/demos/interview.gif",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Insights",
    description: "Get comprehensive insights into your hiring process with real-time analytics. Track time-to-hire, conversion rates, source effectiveness, and team performance metrics to make data-driven decisions.",
    gif: "/demos/analytics.gif",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
];

const AllFeaturesSection = () => {
  return (
    <section id="features-showcase" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/20 mb-6 backdrop-blur-sm">
            <ArrowRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent tracking-wide uppercase">See It In Action</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            <p>
              Powerful Features, 
              </p>
              <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">Seamlessly Integrated</span>

              </p>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience how HireTrack transforms your hiring process with intuitive workflows and powerful automation.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center md:text-left`}>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent hidden md:block" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
                    {feature.description}
                  </p>

                  {/* <div className="flex items-center gap-2 text-accent font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div> */}
                </div>

                {/* GIF */}
                <div className="flex-1 w-full max-w-2xl">
                  
                  <div className="relative rounded-xl border border-border shadow-2xl overflow-hidden bg-card">
                  <div className=" top-0 left-0 right-0 h-10 bg-muted/30 border-b border-border flex items-center gap-2 px-4 backdrop-blur-md">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-destructive/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                        <div className="w-3 h-3 rounded-full bg-green-400/60" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5" />
                    <div className="relative aspect-video ">
                      <Image
                        src={feature.gif}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        unoptimized
                        onError={(e) => {
                          // Fallback to placeholder if GIF doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    {/* Browser window chrome */}
                  </div>
                    
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllFeaturesSection;
