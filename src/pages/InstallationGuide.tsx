import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Shield, Server, Terminal, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstallationGuideProps {
  section?: "root" | "user";
}

const InstallationGuide = ({ section }: InstallationGuideProps) => {
  useEffect(() => {
    if (section === "root") {
      const element = document.getElementById("part-b-root-based-installation");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (section === "user") {
      const element = document.getElementById("part-a-user-based-installation");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [section]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Button variant="download" size="sm" asChild>
            <a href="/hiretrack-installer">
              <Download className="w-4 h-4 mr-2" />
              Download Installer
            </a>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">HireTrack – Complete Installation Guide</h1>
            <p className="text-lg text-muted-foreground">
              This comprehensive guide covers the complete installation process for HireTrack, including system requirements, security hardening, and both user-based and root-based installation approaches.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-muted/50 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold text-foreground mt-0 mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li><a href="#system-requirements" className="text-primary hover:underline">System Requirements</a></li>
              <li><a href="#prerequisites" className="text-primary hover:underline">Prerequisites</a></li>
              <li><a href="#installation-approach-selection" className="text-primary hover:underline">Installation Approach Selection</a></li>
              <li><a href="#part-a-user-based-installation" className="text-primary hover:underline">Part A: User-Based Installation</a></li>
              <li><a href="#part-b-root-based-installation" className="text-primary hover:underline">Part B: Root-Based Installation</a></li>
              <li><a href="#common-steps-fail2ban-setup" className="text-primary hover:underline">Common Steps: Fail2Ban Setup (Optional)</a></li>
              <li><a href="#common-steps-run-installer" className="text-primary hover:underline">Common Steps: Run Installer</a></li>
              <li><a href="#post-installation-verification" className="text-primary hover:underline">Post-Installation Verification</a></li>
            </ol>
          </div>

          {/* System Requirements */}
          <section id="system-requirements" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Server className="w-6 h-6 text-primary" />
              System Requirements
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6">Minimum Production Specifications</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>CPU:</strong> 2 cores</li>
              <li><strong>RAM:</strong> 4 GB</li>
              <li><strong>Disk:</strong> 20 GB available space</li>
              <li><strong>OS:</strong> Ubuntu 20.04 LTS or later (x86_64 architecture)</li>
              <li><strong>Network:</strong> Internet connectivity for package installation</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6">Recommended Production Specifications</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>CPU:</strong> 4+ cores</li>
              <li><strong>RAM:</strong> 8 GB or more</li>
              <li><strong>Disk:</strong> 50 GB+ available space (SSD preferred)</li>
              <li><strong>OS:</strong> Ubuntu 22.04 LTS or later (x86_64 architecture)</li>
              <li><strong>Network:</strong> Stable internet connection with low latency</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6">Required Open Ports</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>Port 80</strong> (HTTP)</li>
              <li><strong>Port 443</strong> (HTTPS)</li>
              <li><strong>Port 3000</strong> (Next.js application, if not proxied)</li>
              <li><strong>Port 22</strong> or custom SSH port (for remote access)</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6">Unsupported Environments</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Non-Ubuntu distributions (Debian, CentOS, RHEL, etc.)</li>
              <li>ARM architectures (ARM64, ARMv7)</li>
              <li>Ubuntu versions prior to 20.04</li>
              <li>Environments without root access for initial setup</li>
            </ul>
          </section>

          {/* Prerequisites */}
          <section id="prerequisites" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Prerequisites</h2>
            <p className="text-muted-foreground">Before starting the installation, ensure you have the following:</p>
            
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mt-4">
              <li>
                <strong>Domain Name (Required):</strong> A valid domain name that points to your server's IP address
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>The domain must have DNS A record configured to point to your server's public IP</li>
                  <li>Example: <code className="bg-muted px-2 py-0.5 rounded text-sm">app.yourcompany.com</code> or <code className="bg-muted px-2 py-0.5 rounded text-sm">hiretrack.yourdomain.com</code></li>
                  <li>The installer will prompt for this domain name during Nginx setup</li>
                  <li>SSL certificate generation (Let's Encrypt) requires the domain to resolve correctly</li>
                </ul>
              </li>
              <li><strong>Root or Sudo Access:</strong> Initial root or sudo access to the server for user setup (if using user-based installation)</li>
              <li><strong>SSH Access:</strong> Ability to connect to the server via SSH</li>
              <li><strong>Email Address:</strong> Valid email address for SSL certificate registration (Let's Encrypt)</li>
            </ul>
          </section>

          {/* Installation Approach Selection */}
          <section id="installation-approach-selection" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Installation Approach Selection</h2>
            <p className="text-muted-foreground">Choose your installation approach based on your security and operational requirements:</p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* User-Based */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mt-0 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Option 1: User-Based Installation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">(Recommended for Production)</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Better security isolation</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Restricted sudo permissions</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Follows principle of least privilege</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Better audit trail</li>
                  <li className="flex items-center gap-2 text-yellow-600"><AlertTriangle className="w-4 h-4" /> Requires initial root access for user setup</li>
                </ul>
              </div>

              {/* Root-Based */}
              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mt-0 mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-muted-foreground" />
                  Option 2: Root-Based Installation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">&nbsp;</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Simpler setup process</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Direct system access</li>
                  <li className="flex items-center gap-2 text-yellow-600"><AlertTriangle className="w-4 h-4" /> Higher security risk</li>
                  <li className="flex items-center gap-2 text-yellow-600"><AlertTriangle className="w-4 h-4" /> Full system privileges required</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#part-a-user-based-installation" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                User-Based Installation
              </a>
              <a href="#part-b-root-based-installation" className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
                Root-Based Installation
              </a>
            </div>
          </section>

          {/* Part A: User-Based Installation */}
          <section id="part-a-user-based-installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Part A: User-Based Installation
            </h2>
            <p className="text-muted-foreground">This section covers creating a dedicated user, setting up SSH key authentication, and configuring restricted sudo permissions.</p>

            {/* Step 1 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">Step 1: Local Machine Setup (Generate SSH Key)</h3>
            <p className="text-muted-foreground">Perform these steps on your <strong>local machine</strong> (not on the server).</p>

            <h4 className="text-lg font-medium text-foreground mt-4">Generate SSH Key Pair</h4>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_hiretrack</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Follow the prompts. You can set a passphrase or leave it empty.</p>

            <h4 className="text-lg font-medium text-foreground mt-4">Display Public Key</h4>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>cat ~/.ssh/id_ed25519_hiretrack.pub</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2"><strong>Copy the entire output</strong> - you will need to paste it on the server in the next step.</p>

            {/* Step 2 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">Step 2: Server Setup (Root Access Required)</h3>
            <p className="text-muted-foreground">Perform these steps on the <strong>server</strong> as the <strong>root user</strong> (or with sudo privileges).</p>

            <h4 className="text-lg font-medium text-foreground mt-4">Step 2.1: Create Dedicated User</h4>
            <p className="text-sm text-muted-foreground">Create the dedicated hiretrack user:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo useradd -m -s /bin/bash hiretrack</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Verify the user was created:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>id hiretrack</code>
            </pre>

            <h4 className="text-lg font-medium text-foreground mt-4">Step 2.2: Setup SSH Public Key Authentication</h4>
            <p className="text-sm text-muted-foreground">Create the SSH directory and set permissions:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`sudo mkdir -p /home/hiretrack/.ssh
sudo chmod 700 /home/hiretrack/.ssh
sudo chown hiretrack:hiretrack /home/hiretrack/.ssh`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Create the authorized_keys file:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo nano /home/hiretrack/.ssh/authorized_keys</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Paste the public key you copied from your local machine, then save and exit (Ctrl+X, Y, Enter).</p>
            <p className="text-sm text-muted-foreground mt-2">Set correct permissions:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`sudo chmod 600 /home/hiretrack/.ssh/authorized_keys
sudo chown hiretrack:hiretrack /home/hiretrack/.ssh/authorized_keys`}</code>
            </pre>

            <h4 className="text-lg font-medium text-foreground mt-4">Step 2.3: Harden SSH Configuration (Recommended)</h4>
            <p className="text-sm text-muted-foreground">Edit SSH configuration:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo nano /etc/ssh/sshd_config</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Find and modify these lines (remove '#' if present at the start):</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`Port 22                    # Or use a custom port like 54321
PubkeyAuthentication yes
PermitRootLogin prohibit-password
PasswordAuthentication no  # WARNING: Ensure you have an active SSH session before disabling`}</code>
            </pre>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Important:</strong> Before setting <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">PasswordAuthentication no</code>, ensure you have successfully tested SSH key authentication and have an active SSH session open.</span>
              </p>
            </div>

            <p className="text-sm text-muted-foreground mt-4">Test SSH configuration:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo sshd -t</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">If the test passes, restart SSH:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo systemctl restart ssh</code>
            </pre>

            <h4 className="text-lg font-medium text-foreground mt-4">Step 2.4: Prepare Installer</h4>
            <p className="text-sm text-muted-foreground">Copy the installer to the hiretrack user's home directory:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`sudo cp hiretrack-installer /home/hiretrack/hiretrack-installer
sudo chown root:hiretrack /home/hiretrack/hiretrack-installer
sudo chmod 750 /home/hiretrack/hiretrack-installer`}</code>
            </pre>

            <h4 className="text-lg font-medium text-foreground mt-4">Step 2.5: Grant Restricted Sudo Permissions</h4>
            <p className="text-sm text-muted-foreground">Configure restricted sudo permissions for the hiretrack user:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo visudo -f /etc/sudoers.d/hiretrack</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Paste the following restricted sudo rules:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-xs">
              <code>{`Defaults:hiretrack !authenticate
Defaults:hiretrack env_reset
Defaults:hiretrack secure_path=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
Defaults:hiretrack noexec

hiretrack ALL=(root) NOPASSWD: \\
  /usr/bin/apt-get *, \\
  /bin/systemctl *, \\
  /usr/bin/tee /etc/nginx/sites-available/*, \\
  /usr/bin/ln -sf /etc/nginx/sites-available/* /etc/nginx/sites-enabled/*, \\
  /usr/sbin/nginx -t, \\
  /usr/bin/certbot *, \\
  /usr/bin/crontab *, \\
  /usr/bin/fail2ban-client *`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Save and exit. Verify the sudoers file syntax:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo visudo -c</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output: <code className="bg-muted px-2 py-0.5 rounded">/etc/sudoers.d/hiretrack: parsed OK</code></p>

            {/* Step 3 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">Step 3: Switch to User Account</h3>
            <p className="text-sm text-muted-foreground">Switch to the hiretrack user:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>su - hiretrack</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Verify you're now the hiretrack user:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>whoami</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output: <code className="bg-muted px-2 py-0.5 rounded">hiretrack</code></p>

            <p className="text-muted-foreground mt-4"><strong>Proceed to <a href="#common-steps-fail2ban-setup" className="text-primary hover:underline">Common Steps: Fail2Ban Setup</a></strong> or skip to <a href="#common-steps-run-installer" className="text-primary hover:underline">Common Steps: Run Installer</a>.</p>
          </section>

          {/* Part B: Root-Based Installation */}
          <section id="part-b-root-based-installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Terminal className="w-6 h-6 text-muted-foreground" />
              Part B: Root-Based Installation
            </h2>
            <p className="text-muted-foreground">This section covers setting up SSH key authentication for the root user and preparing for installation.</p>

            {/* Step 1 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">Step 1: Local Machine Setup (Generate SSH Key)</h3>
            <p className="text-muted-foreground">Perform these steps on your <strong>local machine</strong> (not on the server).</p>

            <h4 className="text-lg font-medium text-foreground mt-4">Generate SSH Key Pair</h4>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_root</code>
            </pre>

            <h4 className="text-lg font-medium text-foreground mt-4">Display Public Key</h4>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>cat ~/.ssh/id_ed25519_root.pub</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2"><strong>Copy the entire output</strong> - you will need to paste it on the server in the next step.</p>

            {/* Step 2 */}
            <h3 className="text-xl font-semibold text-foreground mt-8">Step 2: Server Setup (Root Access Required)</h3>
            <p className="text-muted-foreground">Perform these steps on the <strong>server</strong> as the <strong>root user</strong>.</p>

            <h4 className="text-lg font-medium text-foreground mt-4">Step 2.1: Setup SSH Public Key Authentication for Root</h4>
            <p className="text-sm text-muted-foreground">Create the SSH directory and set permissions:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`mkdir -p /root/.ssh
chmod 700 /root/.ssh`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Create or edit the authorized_keys file:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>nano /root/.ssh/authorized_keys</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Paste the public key, then save and exit. Set correct permissions:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>chmod 600 /root/.ssh/authorized_keys</code>
            </pre>

            <h4 className="text-lg font-medium text-foreground mt-4">Step 2.2: Harden SSH Configuration (Recommended)</h4>
            <p className="text-sm text-muted-foreground">Edit SSH configuration:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>nano /etc/ssh/sshd_config</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Find and modify these lines:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`Port 22                    # Or use a custom port like 54321
PubkeyAuthentication yes
PermitRootLogin prohibit-password
PasswordAuthentication no  # WARNING: Ensure you have an active SSH session before disabling`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Test and restart SSH:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`sshd -t
systemctl restart ssh`}</code>
            </pre>

            <h4 className="text-lg font-medium text-foreground mt-4">Step 2.3: Prepare Installer</h4>
            <p className="text-sm text-muted-foreground">Ensure the installer file has execute permissions:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`chmod +x hiretrack-installer
ls -l hiretrack-installer`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output should include <code className="bg-muted px-2 py-0.5 rounded">-rwxr-xr-x</code> or similar execute permissions.</p>

            <p className="text-muted-foreground mt-4"><strong>Proceed to <a href="#common-steps-fail2ban-setup" className="text-primary hover:underline">Common Steps: Fail2Ban Setup</a></strong> or skip to <a href="#common-steps-run-installer" className="text-primary hover:underline">Common Steps: Run Installer</a>.</p>
          </section>

          {/* Common Steps: Fail2Ban Setup */}
          <section id="common-steps-fail2ban-setup" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Common Steps: Fail2Ban Setup (Optional)</h2>
            <p className="text-muted-foreground">Fail2Ban provides brute-force protection for SSH and other services. This step is <strong>optional but highly recommended</strong> for production environments.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Installation</h3>
            
            <p className="text-sm text-muted-foreground mt-4"><strong>For User-Based Installation:</strong></p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`sudo apt-get update
sudo apt-get install -y fail2ban
sudo systemctl enable --now fail2ban`}</code>
            </pre>

            <p className="text-sm text-muted-foreground mt-4"><strong>For Root-Based Installation:</strong></p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apt-get update
apt-get install -y fail2ban
systemctl enable --now fail2ban`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-6">Configuration (Optional but Recommended)</h3>
            <p className="text-sm text-muted-foreground">Create configuration file:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo nano /etc/fail2ban/jail.local</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Paste the following configuration:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5
backend = systemd

[sshd]
enabled = true
port = ssh
logpath = %(sshd_log)s`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-6">Restart and Verify</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`sudo systemctl restart fail2ban
sudo fail2ban-client status
sudo fail2ban-client status sshd`}</code>
            </pre>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-6">
              <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 flex items-center gap-2 mt-0">
                <Info className="w-4 h-4" />
                Configuration Explanation
              </h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                <li>Bans IP addresses after <strong>5 failed authentication attempts</strong></li>
                <li>Tracks failures within a <strong>10-minute window</strong></li>
                <li>Bans for <strong>1 hour</strong></li>
                <li>Protects <strong>SSH service only</strong></li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6">Unban IP Address</h3>
            <p className="text-sm text-muted-foreground">To manually unban an IP address:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo fail2ban-client set sshd unbanip &lt;IP_ADDRESS&gt;</code>
            </pre>
          </section>

          {/* Common Steps: Run Installer */}
          <section id="common-steps-run-installer" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Common Steps: Run Installer</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">For User-Based Installation</h3>
            <p className="text-sm text-muted-foreground">Ensure you're logged in as the hiretrack user:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>whoami</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output: <code className="bg-muted px-2 py-0.5 rounded">hiretrack</code></p>
            <p className="text-sm text-muted-foreground mt-2">Run the installer:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>./hiretrack-installer</code>
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-6">For Root-Based Installation</h3>
            <p className="text-sm text-muted-foreground">Ensure you're logged in as root:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>whoami</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output: <code className="bg-muted px-2 py-0.5 rounded">root</code></p>
            <p className="text-sm text-muted-foreground mt-2">Run the installer:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>./hiretrack-installer</code>
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-6">Installation Process</h3>
            <p className="text-muted-foreground">The installer will:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mt-2">
              <li>Check and install system dependencies (Node.js, npm, PM2, Nginx, MongoDB)</li>
              <li>Register or validate your license</li>
              <li>Download and extract the latest HireTrack application</li>
              <li>Configure the application environment</li>
              <li>Set up PM2 process management</li>
              <li>Configure Nginx reverse proxy</li>
              <li>Set up SSL certificates (Let's Encrypt)</li>
              <li>Configure automatic updates via cron</li>
              <li>Start the application</li>
            </ol>
            <p className="text-sm text-muted-foreground mt-4">Monitor the output for any errors or warnings. Installation typically takes <strong>5-15 minutes</strong> depending on system resources and network speed.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Installation Output</h3>
            <p className="text-sm text-muted-foreground">At the end of installation, you'll see a prominent registration URL:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`════════════════════════════════════════════════
  🎯 REGISTRATION URL
════════════════════════════════════════════════

You can register the first organization from the URL below:

   ╔═══════════════════════════════════════════════════════════╗
   ║                                                           ║
   ║   https://your-domain.com/register/org                    ║
   ║                                                           ║
   ╚═══════════════════════════════════════════════════════════╝`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Copy this URL and access it in your browser to complete the organization registration.</p>
          </section>

          {/* Post-Installation Verification */}
          <section id="post-installation-verification" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Post-Installation Verification</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">Check PM2 Process Status</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>pm2 list</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output should show the HireTrack application process in <code className="bg-muted px-2 py-0.5 rounded">online</code> status.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Check Nginx Service Status</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo systemctl status nginx</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output should show <code className="bg-muted px-2 py-0.5 rounded">active (running)</code>.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Check Application Accessibility</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>curl -I http://localhost</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output should show HTTP 200 or 301/302 redirect status.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">View Application Logs</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>pm2 logs</code>
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-6">Check Cron Jobs</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>crontab -l</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Expected output should show auto-update and snapshot cron jobs.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Verify SSL Certificate</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>sudo certbot certificates</code>
            </pre>
          </section>

          {/* Security Checklist */}
          <section className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Security Checklist</h2>
            <p className="text-muted-foreground">After installation, verify the following security measures:</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" /> SSH key authentication is working
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" /> Password authentication is disabled (if configured)
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" /> Fail2Ban is running (if installed)
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" /> Firewall rules are configured (UFW or iptables)
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" /> SSL/TLS certificates are valid and auto-renewing
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" /> Regular security updates are scheduled
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" /> Application logs are being monitored
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" /> Backups are configured (snapshot cron job)
              </li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Troubleshooting</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">SSH Connection Issues</h3>
            <p className="text-muted-foreground">If you're locked out after disabling password authentication:</p>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground mt-2">
              <li>Use console access (KVM/IPMI) if available</li>
              <li>Revert SSH configuration: <code className="bg-muted px-2 py-0.5 rounded">PasswordAuthentication yes</code></li>
              <li>Restart SSH service</li>
              <li>Test key authentication before disabling passwords again</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6">Installer Fails</h3>
            <p className="text-muted-foreground">Check logs:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
              <li>Application logs: <code className="bg-muted px-2 py-0.5 rounded">pm2 logs</code></li>
              <li>Installer logs: <code className="bg-muted px-2 py-0.5 rounded">~/.hiretrack/logs/</code></li>
              <li>System logs: <code className="bg-muted px-2 py-0.5 rounded">journalctl -xe</code></li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">Nginx Not Starting</h3>
            <p className="text-muted-foreground">Check configuration:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`sudo nginx -t
sudo tail -f /var/log/nginx/error.log`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-6">Certificate Issues</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`sudo certbot certificates
sudo certbot renew`}</code>
            </pre>
          </section>

          {/* Maintenance */}
          <section className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Maintenance</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">Regular Updates</h3>
            <p className="text-muted-foreground">The installer sets up automatic updates via cron. To manually update:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>~/.hiretrack/installer.sh --update manually</code>
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-6">Backup</h3>
            <p className="text-muted-foreground">Backups are automatically created via the snapshot cron job. To create a manual backup:</p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>node ~/.hiretrack/take-snapshot.js</code>
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-6">Monitoring</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`pm2 monit
pm2 logs --lines 100`}</code>
            </pre>
          </section>

          {/* Support */}
          <section className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Support</h2>
            <p className="text-muted-foreground">For issues or questions:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
              <li>Check application logs: <code className="bg-muted px-2 py-0.5 rounded">pm2 logs</code></li>
              <li>Review installer logs: <code className="bg-muted px-2 py-0.5 rounded">~/.hiretrack/logs/</code></li>
              <li>Contact HireTrack support</li>
            </ul>
          </section>

          {/* Security Guarantees */}
          <section className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">Security Guarantees</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mt-0 mb-4">User-Based Installation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> SSH key-only access</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> No interactive root shell</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Restricted sudo permissions</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Optional brute-force protection</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Principle of least privilege</li>
                </ul>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mt-0 mb-4">Root-Based Installation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> SSH key-only access</li>
                  <li className="flex items-center gap-2 text-green-600"><CheckCircle2 className="w-4 h-4" /> Optional brute-force protection</li>
                  <li className="flex items-center gap-2 text-yellow-600"><AlertTriangle className="w-4 h-4" /> Full system privileges (use with caution)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">© HireTrack – Secure by design</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstallationGuide;
