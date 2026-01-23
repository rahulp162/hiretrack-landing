import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Providers } from './providers';
import Footer from '@/components/landing/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hire.upforce.tech'),
  title: {
    default: 'HireTrack - AI-Powered Hiring & Applicant Tracking System',
    template: '%s | HireTrack',
  },
  description:
    'HireTrack is a smart, AI-powered hiring platform that manages the complete recruitment lifecycle. Real-time tracking, analytics, and seamless integrations for HR teams, interviewers, and candidates. Features AI resume evaluation, drag-and-drop pipeline management, advanced analytics, and multi-tenant architecture.',
  keywords: [
    'hiring',
    'applicant tracking',
    'ATS',
    'applicant tracking system',
    'recruitment',
    'HR software',
    'AI hiring',
    'AI recruitment',
    'interview scheduling',
    'talent management',
    'recruitment platform',
    'hiring software',
    'recruitment software',
    'candidate management',
    'HR management',
    'talent acquisition',
    'recruiting platform',
    'hiring management',
    'job applicant tracking',
    'recruitment analytics',
  ],
  authors: [{ name: 'HireTrack', url: 'https://hire.upforce.tech' }],
  creator: 'HireTrack',
  publisher: 'HireTrack',
  applicationName: 'HireTrack',
  category: 'Business Software',
  classification: 'HR & Recruitment Software',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_US'],
    url: 'https://hire.upforce.tech',
    siteName: 'HireTrack',
    title: 'HireTrack - AI-Powered Hiring & Applicant Tracking System',
    description:
      'Streamline your hiring pipeline with AI-powered resume evaluation, drag-and-drop pipeline management, advanced analytics, and seamless integrations. Built for enterprise teams.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HireTrack - AI-Powered Hiring Platform',
        type: 'image/png',
      },
      {
        url: '/kanban-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'HireTrack Dashboard - Kanban Pipeline View',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireTrack - AI-Powered Hiring Platform',
    description: 'Streamline your hiring pipeline with AI-powered resume evaluation, advanced analytics, and seamless integrations. Built for enterprise teams.',
    creator: '@hiretrack',
    site: '@hiretrack',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://hire.upforce.tech',
    languages: {
      'en-US': 'https://hire.upforce.tech',
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', media: '(prefers-color-scheme: light)', sizes: 'any' },
      { url: '/icon_dark.png', media: '(prefers-color-scheme: dark)', sizes: 'any' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'HireTrack',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HireTrack',
    url: 'https://hire.upforce.tech',
    logo: 'https://hire.upforce.tech/logo.png',
    description:
      'AI-powered hiring and applicant tracking system for enterprise teams. Streamline recruitment with intelligent resume evaluation, pipeline management, and advanced analytics.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@hiretrack.com',
      availableLanguage: ['English'],
    },
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HireTrack',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'HR & Recruitment Software',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    description:
      'HireTrack is a comprehensive AI-powered hiring platform that manages the complete recruitment lifecycle. Features include AI resume evaluation, drag-and-drop pipeline management, advanced analytics, multi-tenant architecture, role-based access control, and seamless integrations.',
    featureList: [
      'AI-Powered Resume Evaluation',
      'Drag-and-Drop Pipeline Management',
      'Advanced Analytics & Insights',
      'Multi-Tenant Architecture',
      'Role-Based Access Control',
      'Interview Scheduling',
      'Google Meet Integration',
      'Custom Branding',
      'Real-Time Collaboration',
      'Candidate Remarks & Notes',
    ],
    screenshot: 'https://hire.upforce.tech/kanban-dashboard.png',
    softwareVersion: '1.0',
    releaseNotes: 'Initial release with comprehensive hiring management features.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HireTrack',
    url: 'https://hire.upforce.tech',
    description:
      'AI-powered hiring and applicant tracking system for enterprise teams.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://hire.upforce.tech/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="software-application-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Providers>
          {children}
          <Footer />
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
