"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Shield,
  Server,
  CheckCircle2,
  AlertTriangle,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CopyableCode from "@/components/CopyableCode";
import { useEffect, useState } from "react";

const INSTALLER_URL = "/hiretrack-installer";

export default function UserBasedInstallation() {
  const [installerDownloadUrl, setInstallerDownloadUrl] = useState(
    "https://your-domain.com/hiretrack-installer",
  );

  useEffect(() => {
    setInstallerDownloadUrl(`${window.location.origin}${INSTALLER_URL}`);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-initial"
                asChild
              >
                <Link
                  href="/root-based-installation"
                  className="flex items-center justify-center gap-2"
                >
                  <Terminal className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Root-Based Guide</span>
                  <span className="sm:hidden">Root</span>
                </Link>
              </Button>
              <Button
                variant="download"
                size="sm"
                className="flex-1 sm:flex-initial"
                asChild
              >
                <a
                  href={INSTALLER_URL}
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Download Installer</span>
                  <span className="sm:hidden">Download</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              User-Based Installation Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Secure installation approach with dedicated user account and
              restricted permissions (Recommended for Production)
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-muted/50 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold text-foreground mt-0 mb-4">
              Table of Contents
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#system-requirements-prerequisites"
                  className="text-primary hover:underline"
                >
                  System Requirements &amp; Prerequisites
                </a>
              </li>
              <li>
                <a
                  href="#why-user-based"
                  className="text-primary hover:underline"
                >
                  Why User-Based Installation?
                </a>
              </li>
              <li>
                <a
                  href="#user-based-preparation"
                  className="text-primary hover:underline"
                >
                  User-Based Preparation Steps
                </a>
              </li>
              <li>
                <a
                  href="#common-steps-run-installer"
                  className="text-primary hover:underline"
                >
                  Download &amp; Run Installer
                </a>
              </li>
              <li>
                <a
                  href="#post-installation-verification"
                  className="text-primary hover:underline"
                >
                  Post-Installation Verification
                </a>
              </li>
            </ol>
          </div>

          {/* System Requirements & Prerequisites */}
          <section
            id="system-requirements-prerequisites"
            className="mb-12 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Server className="w-6 h-6 text-primary" />
              System Requirements &amp; Prerequisites
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6">
              Minimum Production Specifications
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <strong>RAM:</strong> 4 GB
              </li>
              <li>
                <strong>Disk:</strong> 20 GB available space
              </li>
              <li>
                <strong>OS:</strong> Ubuntu 20.04 LTS or later (x86_64
                architecture)
              </li>
              <li>
                <strong>Network:</strong> Internet connectivity for package
                installation
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6">
              Required Open Ports
            </h3>
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

            <h3 className="text-lg font-semibold text-foreground mt-6">
              Unsupported Environments
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Non-Ubuntu distributions (Debian, CentOS, RHEL, etc.)</li>
              <li>ARM architectures (ARM64, ARMv7)</li>
              <li>Ubuntu versions prior to 20.04</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6">
              Prerequisites
            </h3>
            <p className="text-muted-foreground">
              Before starting the installation, ensure you have the following:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mt-4">
              <li>
                <strong>Domain Name (Required):</strong> A valid domain name
                that points to your server&apos;s IP address
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    The domain must have DNS A record configured to point to
                    your server&apos;s public IP
                  </li>
                  <li>
                    Example:{" "}
                    <code className="bg-muted px-2 py-0.5 rounded text-sm">
                      app.yourcompany.com
                    </code>{" "}
                    or{" "}
                    <code className="bg-muted px-2 py-0.5 rounded text-sm">
                      hiretrack.yourdomain.com
                    </code>
                  </li>
                  <li>
                    The installer will prompt for this domain name during Nginx
                    setup
                  </li>
                  <li>
                    SSL certificate generation (Let&apos;s Encrypt) requires the
                    domain to resolve correctly
                  </li>
                </ul>
              </li>
              <li>
                <strong>Root or Sudo Access:</strong> Initial root or sudo
                access to the server for user setup
              </li>
              <li>
                <strong>SSH Access:</strong> Ability to connect to the server
                via SSH
              </li>
              <li>
                <strong>Email Address:</strong> Verified email address to get
                the license for Hiretrack
              </li>
            </ul>
          </section>

          {/* Why User-Based */}
          <section id="why-user-based" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Why User-Based Installation?
            </h2>
            <p className="text-muted-foreground">
              User-based installation is the{" "}
              <strong className="text-primary">
                recommended and more secure approach
              </strong>{" "}
              for production environments.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-foreground mt-0 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                User-Based Installation Benefits
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" /> Better security isolation
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" /> Restricted sudo
                  permissions
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" /> Follows principle of
                  least privilege
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" /> Better audit trail
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" /> Reduced attack surface
                </li>
                <li className="flex items-center gap-2 text-yellow-600">
                  <AlertTriangle className="w-4 h-4" /> Requires initial root
                  access for user setup
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-muted-foreground">
                If you prefer a simpler but less secure approach, you can use{" "}
                <Link
                  href="/root-based-installation"
                  className="text-primary hover:underline"
                >
                  Root-Based Installation
                </Link>{" "}
                instead.
              </p>
            </div>
          </section>

          {/* User-Based Preparation */}
          <section id="user-based-preparation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              User-Based Preparation Steps
            </h2>
            <p className="text-muted-foreground">
              This section covers creating a dedicated user, setting up SSH key
              authentication, and configuring restricted sudo permissions.
            </p>

            {/* Step 1 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">
              Step 1: Local Machine Setup (Generate SSH Key)
            </h3>
            <p className="text-muted-foreground">
              Perform these steps on your <strong>local machine</strong> (not on
              the server).
            </p>

            <h4 className="text-lg font-medium text-foreground mt-4">
              Generate SSH Key Pair
            </h4>
            <CopyableCode code="ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_hiretrack" />
            <p className="text-sm text-muted-foreground mt-2">
              Follow the prompts. You can set a passphrase or leave it empty.
            </p>

            <h4 className="text-lg font-medium text-foreground mt-4">
              Display Public Key
            </h4>
            <CopyableCode code="cat ~/.ssh/id_ed25519_hiretrack.pub" />
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Copy the entire output</strong> - you will need to paste
              it on the server in the next step.
            </p>

            {/* Step 2 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">
              Step 2: Server Setup (Root Access Required)
            </h3>
            <p className="text-muted-foreground">
              Perform these steps on the <strong>server</strong> as the{" "}
              <strong>root user</strong> (or with sudo privileges).
            </p>

            <h4 className="text-lg font-medium text-foreground mt-4">
              Step 2.1: Create Dedicated User
            </h4>
            <p className="text-sm text-muted-foreground">
              Create the dedicated hiretrack user:
            </p>
            <CopyableCode code="sudo useradd -m -s /bin/bash hiretrack" />
            <p className="text-sm text-muted-foreground">
              Create the Password for the user:
            </p>
            <CopyableCode code="sudo passwd hiretrack" />
            <p className="text-sm text-muted-foreground mt-2">
              Verify the user was created:
            </p>
            <CopyableCode code="id hiretrack" />

            <h4 className="text-lg font-medium text-foreground mt-4">
              Step 2.2: Setup SSH Public Key Authentication
            </h4>
            <p className="text-sm text-muted-foreground">
              Create the SSH directory and set permissions:
            </p>
            <CopyableCode
              code={`sudo mkdir -p /home/hiretrack/.ssh
sudo chmod 700 /home/hiretrack/.ssh
sudo chown hiretrack:hiretrack /home/hiretrack/.ssh`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              Create the authorized_keys file:
            </p>
            <CopyableCode code="sudo nano ~/.ssh/authorized_keys" />
            <p className="text-sm text-muted-foreground mt-2">
              Paste the public key you copied from your local machine, then save
              and exit (Ctrl+X, Y, Enter).
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Set correct permissions:
            </p>
            <CopyableCode code="sudo chmod 600 ~/.ssh/authorized_keys" />

            <h4 className="text-lg font-medium text-foreground mt-4">
              Step 2.3: Harden SSH Configuration (Recommended)
            </h4>
            <p className="text-sm text-muted-foreground">
              Edit SSH configuration:
            </p>
            <CopyableCode code="sudo nano /etc/ssh/sshd_config" />
            <p className="text-sm text-muted-foreground mt-2">
              Find and modify these lines (remove &apos;#&apos; if present at
              the start):
            </p>
            <CopyableCode
              code={`Port 22                    # Or use a custom port like 54321
PubkeyAuthentication yes
PermitRootLogin prohibit-password
PasswordAuthentication no  # WARNING: Ensure you have an active SSH session before disabling`}
            />

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Important:</strong> Before setting{" "}
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                    PasswordAuthentication no
                  </code>
                  , ensure you have successfully tested SSH key authentication
                  and have an active SSH session open.
                </span>
              </p>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Test SSH configuration:
            </p>
            <CopyableCode code="sudo sshd -t" />
            <p className="text-sm text-muted-foreground mt-2">
              If the test passes, restart SSH:
            </p>
            <CopyableCode code="sudo systemctl restart ssh" />

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-6">
              <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 flex items-center gap-2 mt-0 mb-2">
                <AlertTriangle className="w-4 h-4" />
                Important: Test SSH Access Before Proceeding
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                <strong>Keep your current root session open</strong> and open a{" "}
                <strong>new terminal window</strong> on your local machine to
                test SSH key authentication. This ensures you can still access
                the server if something goes wrong.
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                Test SSH access using your private key (replace the IP address
                and port with your server details):
              </p>
              <CopyableCode
                code="ssh -p 54321 -i ~/.ssh/id_ed25519_hiretrack root@123.123.123.123"
                className="mt-2"
              />
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-3">
                If the connection succeeds without a password prompt, your SSH
                key authentication is working correctly. You can now proceed
                with the next steps. If it fails, check your SSH configuration
                and ensure the public key was correctly added to the server.
              </p>
            </div>

            <h4 className="text-lg font-medium text-foreground mt-4">
              Step 2.4: Install Fail2Ban (Recommended)
            </h4>
            <p className="text-sm text-muted-foreground">
              Add SSH brute-force protection:
            </p>
            <CopyableCode
              code={`sudo apt-get update
sudo apt-get install -y fail2ban
sudo systemctl enable --now fail2ban`}
            />

            <h4 className="text-lg font-medium text-foreground mt-4">
              Step 2.5: Grant Restricted Sudo Permissions
            </h4>
            <p className="text-sm text-muted-foreground">
              Configure restricted sudo permissions for the hiretrack user:
            </p>
            <CopyableCode code="sudo visudo" />
            <p className="text-sm text-muted-foreground mt-2">
              Paste the following restricted sudo rules:
            </p>
            <CopyableCode
              code={`Defaults:hiretrack !authenticate
Defaults:hiretrack env_reset
Defaults:hiretrack secure_path=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
Defaults:hiretrack noexec

hiretrack ALL=(root) NOPASSWD: \\
   /usr/bin/tee /etc/nginx/sites-available/*, \\
   /usr/bin/ln -sf /etc/nginx/sites-available/* /etc/nginx/sites-enabled/*,  \\
   /usr/sbin/nginx -t, \\
   /usr/bin/apt-get, \\
   /usr/bin/apt, \\
   /usr/bin/systemctl, \\
   /usr/bin/gpg, \\
   /usr/bin/tee, \\
   /usr/bin/node, \\
   /usr/bin/npm, \\
   /usr/sbin/nginx, \\
   /bin/rm, \\
   /bin/chown`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              Save and exit. Set the correct permissions on the sudoers file
              (required for security):
            </p>
            <CopyableCode code="sudo chmod 0440 /etc/sudoers.d/hiretrack" />
            <p className="text-sm text-muted-foreground mt-2">
              Verify the file permissions:
            </p>
            <CopyableCode code="ls -l /etc/sudoers.d/hiretrack" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output should show{" "}
              <code className="bg-muted px-2 py-0.5 rounded">-r--r-----</code>{" "}
              (0440 permissions).
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Verify the sudoers file syntax:
            </p>
            <CopyableCode code="sudo visudo -c" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output:{" "}
              <code className="bg-muted px-2 py-0.5 rounded">
                /etc/sudoers.d/hiretrack: parsed OK
              </code>
            </p>

            {/* Step 3 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">
              Step 3: Switch to User Account
            </h3>
            <p className="text-sm text-muted-foreground">
              Switch to the hiretrack user:
            </p>
            <CopyableCode code="su - hiretrack" />
            <p className="text-sm text-muted-foreground mt-2">
              Verify you&apos;re now the hiretrack user:
            </p>
            <CopyableCode code="whoami" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output:{" "}
              <code className="bg-muted px-2 py-0.5 rounded">hiretrack</code>
            </p>

            {/* Step 4 */}
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Step 4: Download Installer
            </h3>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-4">
                While logged in as{" "}
                <code className="bg-muted px-2 py-0.5 rounded">hiretrack</code>,
                download the installer to your home directory:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">
                    Download installer:
                  </p>
                  <CopyableCode
                    code={`curl -L ${installerDownloadUrl} -o ~/hiretrack-installer`}
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">
                    Make executable:
                  </p>
                  <CopyableCode code="chmod +x ~/hiretrack-installer" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">
                    Verify download:
                  </p>
                  <CopyableCode code="ls -l ~/hiretrack-installer" />
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mt-4">
              <strong>Next:</strong> Continue to{" "}
              <a
                href="#common-steps-run-installer"
                className="text-primary hover:underline"
              >
                Run Installer
              </a>
              .
            </p>
          </section>

          {/* Common Steps: Run Installer */}
          <section
            id="common-steps-run-installer"
            className="mb-12 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-foreground">
              Run Installer
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Note:</strong> If you haven&apos;t downloaded the
                installer yet, go back to{" "}
                <a
                  href="#user-based-preparation"
                  className="text-primary hover:underline font-semibold"
                >
                  Step 4: Download Installer
                </a>{" "}
                in the preparation steps.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              Run the Installer
            </h3>
            <p className="text-sm text-muted-foreground">
              Ensure you&apos;re logged in as the hiretrack user:
            </p>
            <CopyableCode code="whoami" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output:{" "}
              <code className="bg-muted px-2 py-0.5 rounded">hiretrack</code>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Run the installer:
            </p>
            <CopyableCode code="./hiretrack-installer" />

            <h3 className="text-xl font-semibold text-foreground mt-6">
              Installation Process
            </h3>
            <p className="text-muted-foreground">The installer will:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mt-2">
              <li>
                Check and install system dependencies (Node.js, npm, PM2, Nginx,
                MongoDB)
              </li>
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
              Monitor the output for any errors or warnings. Installation
              typically takes <strong>5-15 minutes</strong> depending on system
              resources and network speed.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              Installation Output
            </h3>
            <p className="text-sm text-muted-foreground">
              At the end of installation, you&apos;ll see a prominent
              registration URL:
            </p>
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
            <p className="text-sm text-muted-foreground mt-2">
              Copy this URL and access it in your browser to complete the
              organization registration.
            </p>
          </section>

          {/* Post-Installation Verification */}
          <section
            id="post-installation-verification"
            className="mb-12 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-foreground">
              Post-Installation Verification
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              Check PM2 Process Status
            </h3>
            <CopyableCode code="pm2 list" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output should show the HireTrack application process in{" "}
              <code className="bg-muted px-2 py-0.5 rounded">online</code>{" "}
              status.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              Check Nginx Service Status
            </h3>
            <CopyableCode code="sudo systemctl status nginx" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output should show{" "}
              <code className="bg-muted px-2 py-0.5 rounded">
                active (running)
              </code>
              .
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              Check Application Accessibility
            </h3>
            <CopyableCode code="curl -I http://localhost" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output should show HTTP 200 or 301/302 redirect status.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              View Application Logs
            </h3>
            <CopyableCode code="pm2 logs" />

            <h3 className="text-xl font-semibold text-foreground mt-6">
              Check Cron Jobs
            </h3>
            <CopyableCode code="crontab -l" />
            <p className="text-sm text-muted-foreground mt-2">
              Expected output should show auto-update and snapshot cron jobs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              Verify SSL Certificate
            </h3>
            <CopyableCode code="sudo certbot certificates" />
          </section>
        </div>
      </main>
    </div>
  );
}
