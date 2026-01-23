'use client';

import { useEffect } from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import { FeaturesShowcase } from '@/components/landing/FeaturesShowcase';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import RolesSection from '@/components/landing/RolesSection';
import DownloadsSection from '@/components/landing/DownloadsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import AllFeaturesSection from './AllFeatures';

export function HomePageClient() {
  useEffect(() => {
    // Handle anchor links on page load
    const hash = window.location.hash;
    if (hash) {
      // Wait for content to render
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AllFeaturesSection/>
        <FeaturesSection />
        <HowItWorksSection />
        <RolesSection />
        <DownloadsSection />
        <CTASection />
      </main>
    </div>
  );
}
