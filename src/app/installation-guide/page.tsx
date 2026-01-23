import Link from 'next/link';
import { Shield, Terminal, CheckCircle2, AlertTriangle, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation Guide',
  description:
    'Choose your installation approach for HireTrack. User-based installation is recommended for production environments with better security isolation. Includes system requirements, prerequisites, and step-by-step guides.',
  keywords: [
    'HireTrack installation',
    'installation guide',
    'deployment guide',
    'setup instructions',
    'HireTrack setup',
    'installation tutorial',
  ],
  openGraph: {
    title: 'HireTrack Installation Guide',
    description: 'Step-by-step installation guide for HireTrack hiring platform. Choose between user-based or root-based installation approaches.',
    type: 'article',
    url: 'https://hire.upforce.tech/installation-guide',
  },
  alternates: {
    canonical: 'https://hire.upforce.tech/installation-guide',
  },
};

export default function InstallationGuide() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 pt-24">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">HireTrack Installation Guide</h1>
            <p className="text-lg text-muted-foreground">
              Choose your installation approach based on your security and operational requirements
            </p>
          </div>

          {/* System Requirements & Prerequisites */}
          <section className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Server className="w-6 h-6 text-primary" />
              System Requirements &amp; Prerequisites
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6">Minimum Production Specifications</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <strong>RAM:</strong> 4 GB
              </li>
              <li>
                <strong>Disk:</strong> 20 GB available space
              </li>
              <li>
                <strong>OS:</strong> Ubuntu 20.04 LTS or later (x86_64 architecture)
              </li>
              <li>
                <strong>Network:</strong> Internet connectivity for package installation
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6">Required Open Ports</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <strong>Port 80</strong> (HTTP)
              </li>
              <li>
                <strong>Port 443</strong> (HTTPS)
              </li>
              <li>
                <strong>Port 3000</strong> (Next.js application, if not proxied)
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6">Prerequisites</h3>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mt-4">
              <li>
                <strong>Domain Name (Required):</strong> A valid domain name that points to your server&apos;s IP
                address
              </li>
              <li>
                <strong>Root or Sudo Access:</strong> Initial root or sudo access to the server
              </li>
              <li>
                <strong>SSH Access:</strong> Ability to connect to the server via SSH
              </li>
              <li>
                <strong>Email Address:</strong> Verified email address to get the license for Hiretrack
              </li>
            </ul>
          </section>

          {/* Installation Approach Selection */}
          <section className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Select Your Installation Approach</h2>
            <p className="text-muted-foreground mb-6">
              Choose your installation approach. <strong className="text-primary">User-based is more secure and recommended</strong>; Root-based is faster but less isolated.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* User-Based */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mt-0 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  User-Based Installation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">(Recommended for Production)</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" /> Better security isolation
                  </li>
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" /> Restricted sudo permissions
                  </li>
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" /> Follows principle of least privilege
                  </li>
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" /> Better audit trail
                  </li>
                  <li className="flex items-center gap-2 text-yellow-600">
                    <AlertTriangle className="w-4 h-4" /> Requires initial root access for user setup
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/user-based-installation">Start User-Based Installation</Link>
                </Button>
              </div>

              {/* Root-Based */}
              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mt-0 mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-muted-foreground" />
                  Root-Based Installation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">(Simpler but less secure)</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" /> Simpler setup process
                  </li>
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" /> Direct system access
                  </li>
                  <li className="flex items-center gap-2 text-yellow-600">
                    <AlertTriangle className="w-4 h-4" /> Higher security risk
                  </li>
                  <li className="flex items-center gap-2 text-yellow-600">
                    <AlertTriangle className="w-4 h-4" /> Full system privileges required
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/root-based-installation">Start Root-Based Installation</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
