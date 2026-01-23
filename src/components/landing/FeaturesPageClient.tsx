'use client';

import { useEffect } from 'react';
import Header from '@/components/landing/Header';
import { FeaturesShowcase } from '@/components/landing/FeaturesShowcase';

export function FeaturesPageClient() {
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
      <main className="pt-16">
        <FeaturesShowcase />
      </main>
    </div>
  );
}
