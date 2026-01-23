import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/features', label: 'All Features' },
    { href: '/installation-guide', label: 'Installation' },
    { href: '/#downloads', label: 'Downloads' },
  ];

  return (
    <footer className="relative bg-foreground text-background border-t-4 border-accent">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, currentColor 2px, transparent 0)
            `,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative section-container">
        {/* Main Footer Content */}
        <div className="py-6 lg:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand Section */}
            <Link href="/" className="inline-block">
              <div className="relative h-8">
                <Image
                  src="/logo_dark.png"
                  alt="HireTrack"
                  width={140}
                  height={32}
                  className="h-8 w-auto object-contain dark:hidden"
                />
                <Image
                  src="/logo.png"
                  alt="HireTrack"
                  width={140}
                  height={32}
                  className="h-8 w-auto object-contain hidden dark:block"
                />
              </div>
            </Link>

            {/* Links */}
            <nav className="flex flex-wrap items-center gap-5">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/80 hover:text-background text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-4">
          <p className="text-background/60 text-xs text-center">
            © {currentYear} HireTrack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
