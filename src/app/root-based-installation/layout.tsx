import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Root-Based Installation Guide',
  description:
    'Quick installation guide for HireTrack using root account. Simpler setup but less secure than user-based installation. Includes step-by-step instructions for Ubuntu server deployment.',
  keywords: [
    'HireTrack installation',
    'root-based installation',
    'quick installation',
    'HireTrack setup',
    'Ubuntu installation',
    'HireTrack deployment',
  ],
  openGraph: {
    title: 'HireTrack Root-Based Installation Guide',
    description: 'Quick installation guide for HireTrack deployment with root access. Simpler setup process.',
    type: 'article',
    url: 'https://hire.upforce.tech/root-based-installation',
  },
  alternates: {
    canonical: 'https://hire.upforce.tech/root-based-installation',
  },
};

export default function RootBasedInstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
