import type { Metadata } from 'next';
import { FeaturesPageClient } from '@/components/landing/FeaturesPageClient';

export const metadata: Metadata = {
  title: 'Complete Features - HireTrack',
  description:
    'Explore all 240+ features of HireTrack: AI-powered resume analysis, multi-tenant system, drag-and-drop pipeline, real-time collaboration, advanced analytics, and more. Complete feature showcase.',
  keywords: [
    'HireTrack features',
    'ATS features',
    'recruitment features',
    'AI hiring features',
    'applicant tracking features',
    'HR software features',
  ],
  openGraph: {
    title: 'HireTrack - Complete Features Showcase',
    description: 'Explore all 240+ features of HireTrack, the comprehensive AI-powered hiring management platform.',
    type: 'website',
    url: 'https://hire.upforce.tech/features',
  },
  alternates: {
    canonical: 'https://hire.upforce.tech/features',
  },
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
