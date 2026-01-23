import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User-Based Installation Guide',
  description:
    'Secure installation guide for HireTrack with dedicated user account and restricted permissions. Recommended for production environments. Includes SSH key setup, restricted sudo configuration, and step-by-step instructions.',
  keywords: [
    'HireTrack installation',
    'user-based installation',
    'secure installation',
    'SSH key setup',
    'restricted sudo',
    'production deployment',
    'HireTrack setup guide',
  ],
  openGraph: {
    title: 'HireTrack User-Based Installation Guide',
    description: 'Step-by-step secure installation guide with SSH key setup and restricted sudo permissions. Recommended for production environments.',
    type: 'article',
    url: 'https://hire.upforce.tech/user-based-installation',
  },
  alternates: {
    canonical: 'https://hire.upforce.tech/user-based-installation',
  },
};

export default function UserBasedInstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
