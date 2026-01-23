"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Clean scroll-based 3D rotation - starts rotated up, rotates to straight (0)
  // Make rotateX reach 0deg by halfway through scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [110, 0, 0]);
  
  // Parallax movement - moves up as you scroll down
  const translateY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const highlights = [
    "AI Resume Evaluation",
    "Advanced Analytics & Insights",
    "Custom Branding & Storage",
  ];

  const demos = [
    { src: "/demos/dnd.gif", alt: "Drag and Drop Pipeline Management" },
    { src: "/demos/evaluation.gif", alt: "AI Resume Evaluation" },
    { src: "/demos/interview.gif", alt: "Interview Management" },
    { src: "/demos/analytics.gif", alt: "Advanced Analytics & Insights" },
    { src: "/demos/remarks.gif", alt: "Candidate Remarks & Notes" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % demos.length);
    }, 10000); // Change GIF every 10 seconds

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <section 
      ref={containerRef}
      className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
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
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 backdrop-blur-sm shadow-sm hover:bg-accent/15 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Enterprise-Ready Hiring Platform</span>
          </div> */}

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight tracking-tight">
            <span className="block">
              Intelligent Hiring Platform{" "}
            </span>
            <span className="block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark ">for Enterprise Teams</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Streamline your hiring pipeline, make data-driven decisions with advanced analytics and customizable options
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border/50 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300" asChild>
              <a href="/installation-guide">
                View Installation Guide
              </a>
            </Button>
            <Button variant="outline" size="xl" className="bg-background/50 backdrop-blur-sm hover:bg-background/80" asChild>
              <a href="/#downloads">
                View Documentation
              </a>
            </Button>
          </div>
        </div>

        {/* Demo GIFs Carousel with Clean 3D Rotation and Parallax */}
        <div className="mt-16 lg:mt-24 relative overflow-visible">
          <div 
            className="relative mx-auto max-w-6xl"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div 
              className="relative bg-card rounded-xl border border-border overflow-hidden drop-shadow-4xl shadow-accent/20"
              style={{
                rotateX,
                y: translateY,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="relative w-full aspect-video p-3 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={demos[currentIndex].src}
                      alt={demos[currentIndex].alt}
                      fill
                      className="object-cover rounded-lg"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Progress indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {demos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-accent"
                          : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground/70"
                      }`}
                      aria-label={`Go to demo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;