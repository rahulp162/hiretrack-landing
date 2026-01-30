"use client";

import { useEffect } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import RolesSection from "@/components/landing/RolesSection";
import AllFeaturesSection from "./AllFeatures";
import { ScrollToTop } from "@/components/ui/scroll-to-top"; // Added
import ContactCTASection from "./CTASection";

export function HomePageClient() {
  useEffect(() => {
    // Handle anchor links on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main>
        <HeroSection />
        <AllFeaturesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <RolesSection />
        <ContactCTASection />
      </main>
      <ScrollToTop />
    </div>
  );
}
