'use client';

import Link from 'next/link';
import { ArrowLeft, Download, Terminal, Server, AlertTriangle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CopyableCode from '@/components/CopyableCode';
import { useEffect, useState } from 'react';

const INSTALLER_URL = '/hiretrack-installer';

export default function RootBasedInstallation() {
  const [installerDownloadUrl, setInstallerDownloadUrl] = useState('https://your-domain.com/hiretrack-installer');

  useEffect(() => {
    setInstallerDownloadUrl(`${window.location.origin}${INSTALLER_URL}`);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/user-based-installation" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                User-Based Guide
              </Link>
            </Button>
            <Button variant="download" size="sm" asChild>
              <a href={INSTALLER_URL}>
                <Download className="w-4 h-4 mr-2" />
                Download Installer
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Root-Based Installation Guide</h1>
            <p className="text-lg text-muted-foreground">Quick installation path using root account (Simpler setup, but less secure)</p>
          </div>

          {/* Table of Contents */}
          <div className="bg-muted/50 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold text-foreground mt-0 mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <a href="#system-requirements-prerequisites" className="text-primary hover:underline">
                  System Requirements &amp; Prerequisites
                </a>
              </li>
              <li>
                <a href="#root-based-preparation" className="text-primary hover:underline">
                  Root-Based Preparation Steps
                </a>
              </li>
              <li>
                <a href="#common-steps-run-installer" className="text-primary hover:underline">
                  Download &amp; Run Installer
                </a>
              </li>
              <li>
                <a href="#post-installation-verification" className="text-primary hover:underline">
                  Post-Installation Verification
                </a>
              </li>
            </ol>
          </div>

          {/* System Requirements & Prerequisites */}
          <section id="system-requirements-prerequisites" className="mb-12 scroll-mt-24">
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

            <h3 className="text-lg font-semibold text-foreground mt-6">Unsupported Environments</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Non-Ubuntu distributions (Debian, CentOS, RHEL, etc.)</li>
              <li>ARM architectures (ARM64, ARMv7)</li>
              <li>Ubuntu versions prior to 20.04</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6">Prerequisites</h3>
            <p className="text-muted-foreground">Before starting the installation, ensure you have the following:</p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mt-4">
              <li>
                <strong>Domain Name (Required):</strong> A valid domain name that points to your server&apos;s IP address
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>The domain must have DNS A record configured to point to your server&apos;s public IP</li>
                  <li>
                    Example: <code className="bg-muted px-2 py-0.5 rounded text-sm">app.yourcompany.com</code> or{' '}
                    <code className="bg-muted px-2 py-0.5 rounded text-sm">hiretrack.yourdomain.com</code>
                  </li>
                  <li>The installer will prompt for this domain name during Nginx setup</li>
                  <li>SSL certificate generation (Let&apos;s Encrypt) requires the domain to resolve correctly</li>
                </ul>
              </li>
              <li>
                <strong>Root Access:</strong> Full root access to the server
              </li>
              <li>
                <strong>SSH Access:</strong> Ability to connect to the server via SSH
              </li>
              <li>
                <strong>Email Address:</strong> Verified email address to get the license for Hiretrack
              </li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
              <p className="text-sm text-yellow-800 dark:text-yellow-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Security Note:</strong> Root-based installation provides full system privileges. For better security, consider using{' '}
                  <Link href="/user-based-installation" className="text-primary hover:underline font-semibold">
                    User-Based Installation
                  </Link>{' '}
                  which offers better isolation and restricted permissions.
                </span>
              </p>
            </div>
          </section>

          {/* Root-Based Preparation */}
          <section id="root-based-preparation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Terminal className="w-6 h-6 text-muted-foreground" />
              Root-Based Preparation Steps
            </h2>
            <p className="text-muted-foreground">
              This section assumes you already have root access and want the quickest path. SSH key setup is not required in this flow.
            </p>

            {/* Step 1 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">Step 1: Basic Server Prep (as root)</h3>
            <p className="text-sm text-muted-foreground">Update package index and confirm you are root:</p>
            <CopyableCode
              code={`whoami
apt-get update`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output for <code className="bg-muted px-2 py-0.5 rounded">whoami</code>:{' '}
              <code className="bg-muted px-2 py-0.5 rounded">root</code>.
            </p>

            {/* Step 2 */}
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Step 2: Download Installer</h3>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-4">Download the installer directly as root:</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">Download installer:</p>
                  <CopyableCode code={`curl -L ${installerDownloadUrl} -o /root/hiretrack-installer`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">Make executable:</p>
                  <CopyableCode code="chmod +x /root/hiretrack-installer" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">Verify download:</p>
                  <CopyableCode code="ls -l /root/hiretrack-installer" />
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Proceed to <a href="#common-steps-run-installer" className="text-primary hover:underline">Run Installer</a>.
            </p>
          </section>

          {/* Common Steps: Run Installer */}
          <section id="common-steps-run-installer" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Run Installer</h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Note:</strong> If you haven&apos;t downloaded the installer yet, go back to{' '}
                <a href="#root-based-preparation" className="text-primary hover:underline font-semibold">
                  Step 2: Download Installer
                </a>{' '}
                in the preparation steps.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6">Run the Installer</h3>
            <p className="text-sm text-muted-foreground">Ensure you&apos;re logged in as root:</p>
            <CopyableCode code="whoami" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output: <code className="bg-muted px-2 py-0.5 rounded">root</code>
            </p>
            <p className="text-sm text-muted-foreground mt-2">Run the installer:</p>
            <CopyableCode code="./hiretrack-installer" />

            <h3 className="text-xl font-semibold text-foreground mt-6">Installation Process</h3>
            <p className="text-muted-foreground">The installer will:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mt-2">
              <li>Check and install system dependencies (Node.js, npm, PM2, Nginx, MongoDB)</li>
              <li>Register or validate your license</li>
              <li>Download and extract the latest HireTrack application</li>
              <li>Configure the application environment</li>
              <li>Set up PM2 process management</li>
              <li>Configure Nginx reverse proxy</li>
              <li>Set up SSL certificates (Let&apos;s Encrypt)</li>
              <li>Configure automatic updates via cron</li>
              <li>Start the application</li>
            </ol>
            <p className="text-sm text-muted-foreground mt-4">
              Monitor the output for any errors or warnings. Installation typically takes <strong>5-15 minutes</strong> depending on system resources and network speed.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Installation Output</h3>
            <p className="text-sm text-muted-foreground">At the end of installation, you&apos;ll see a prominent registration URL:</p>
            <CopyableCode
              code={`════════════════════════════════════════════════
  🎯 REGISTRATION URL
════════════════════════════════════════════════

You can register the first organization from the URL below:

   ╔═══════════════════════════════════════════════════════════╗
   ║                                                           ║
   ║   https://your-domain.com/register/org                    ║
   ║                                                           ║
   ╚═══════════════════════════════════════════════════════════╝`}
              className="text-sm"
            />
            <p className="text-sm text-muted-foreground mt-2">Copy this URL and access it in your browser to complete the organization registration.</p>
          </section>

          {/* Post-Installation Verification */}
          <section id="post-installation-verification" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Post-Installation Verification</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">Check PM2 Process Status</h3>
            <CopyableCode code="pm2 list" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output should show the HireTrack application process in <code className="bg-muted px-2 py-0.5 rounded">online</code> status.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Check Nginx Service Status</h3>
            <CopyableCode code="systemctl status nginx" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output should show <code className="bg-muted px-2 py-0.5 rounded">active (running)</code>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Check Application Accessibility</h3>
            <CopyableCode code="curl -I http://localhost" />
            <p className="text-sm text-muted-foreground mt-2">Expected output should show HTTP 200 or 301/302 redirect status.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">View Application Logs</h3>
            <CopyableCode code="pm2 logs" />

            <h3 className="text-xl font-semibold text-foreground mt-6">Check Cron Jobs</h3>
            <CopyableCode code="crontab -l" />
            <p className="text-sm text-muted-foreground mt-2">Expected output should show auto-update and snapshot cron jobs.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Verify SSL Certificate</h3>
            <CopyableCode code="certbot certificates" />
          </section>
        </div>
      </main>
    </div>
  );
}
