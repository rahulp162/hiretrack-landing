'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');
  const [isInHero, setIsInHero] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Get hash from URL on mount and when pathname changes
    const updateHash = () => {
      setHash(window.location.hash);
    };
    
    updateHash();
    
    // Listen for hash changes
    const handleHashChange = () => {
      updateHash();
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Also poll for hash changes (in case hashchange event doesn't fire)
    // Check every 200ms to catch any missed hash changes
    const interval = setInterval(() => {
      const currentHash = window.location.hash;
      setHash(currentHash);
    }, 200);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearInterval(interval);
    };
  }, [pathname]);

  // Detect if we're in hero section or other sections
  useEffect(() => {
    const checkScrollPosition = () => {
      if (pathname !== '/' && pathname !== '') {
        // On other pages, always use solid style
        setIsInHero(false);
        return;
      }

      // Check if we're in the hero section (first ~80vh or until features section)
      const heroSection = document.querySelector('section:first-of-type');
      const featuresSection = document.getElementById('features-showcase') || document.getElementById('features');
      
      if (!heroSection) {
        setIsInHero(false);
        return;
      }

      const scrollY = window.scrollY;
      const heroBottom = heroSection.getBoundingClientRect().bottom + scrollY;
      
      // Consider hero section if we haven't scrolled past it
      // Add some threshold (100px) for smooth transition
      setIsInHero(scrollY < heroBottom - 100);
    };

    // Check on mount and scroll
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [pathname]);

  // Track active section based on scroll position
  useEffect(() => {
    if (pathname !== '/' && pathname !== '') {
      setActiveSection('');
      return;
    }

    const updateActiveSection = () => {
      // Check if we're at the top (Overview section)
      if (window.scrollY < 200) {
        setActiveSection('#Overview');
        return;
      }

      // Check each section to see which one is most prominent in viewport
      const sections = [
        { id: 'features-showcase', hash: '#features' },
        { id: 'features', hash: '#features' },
        { id: 'how-it-works', hash: '#how-it-works' },
        { id: 'roles', hash: '#roles' },
        { id: 'downloads', hash: '#downloads' },
      ];

      let activeHash = '#Overview';
      let maxVisibility = 0;

      sections.forEach(({ id, hash }) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible in the upper portion of viewport
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const headerOffset = 80; // Account for header height
        
        // Check if section is in the "active zone" (upper portion of viewport)
        if (sectionTop <= headerOffset + 100 && sectionBottom > headerOffset) {
          // Calculate visibility score (prefer sections closer to the top)
          const visibility = Math.max(0, Math.min(viewportHeight - sectionTop + headerOffset, rect.height)) / rect.height;
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            activeHash = hash;
          }
        }
      });

      setActiveSection(activeHash);
    };

    const handleScroll = () => {
      updateActiveSection();
    };

    // Initial check
    updateActiveSection();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/features') {
      return pathname === '/features';
    }
    if (path === '/installation-guide') {
      return pathname === '/installation-guide' || pathname?.startsWith('/installation-guide');
    }
    // For home page sections, check both pathname and hash
    if (path.startsWith('/#')) {
      // Only check if we're on the home page
      if (pathname !== '/' && pathname !== '') {
        return false;
      }
      
      const sectionHash = path.substring(1); // Remove leading '/' to get '#features', '#downloads', etc.
      
      // If there's a hash in the URL (from clicking a link), use that
      if (hash) {
        return hash === sectionHash;
      }
      
      // Otherwise, use scroll-based active section
      return activeSection === sectionHash;
    }
    return false;
  };

  const navLinks = [
    { href: '/#Overview', label: 'Overview' },
    { href: '/#features', label: 'Features' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#roles', label: 'Roles' },
    { href: '/#downloads', label: 'Downloads' },
    { href: '/installation-guide', label: 'Installation Guide' },
  ];

  const isLandingPage = pathname === '/' || pathname === '';
  const isHeroMode = isInHero && isLandingPage;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: isHeroMode 
            ? 'hsl(var(--background) / 0.2)' 
            : 'hsl(var(--background) / 0.8)',
          backdropFilter: isHeroMode ? 'blur(4px)' : 'blur(12px)',
          borderBottomWidth: isHeroMode ? 0 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="border-b border-border/50"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center">
                <div className="relative h-8">
                  <Image
                    src="/logo.png"
                    alt="HireTrack"
                    width={140}
                    height={32}
                    className="h-8 w-auto object-contain dark:hidden"
                    priority
                  />
                  <Image
                    src="/logo_dark.png"
                    alt="HireTrack"
                    width={140}
                    height={32}
                    className="h-8 w-auto object-contain hidden dark:block"
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        // Update hash immediately when link is clicked
                        if (link.href.startsWith('/#')) {
                          const newHash = link.href.substring(1);
                          setHash(newHash);
                          
                          // Special handling for Overview - scroll to top
                          if (newHash === '#Overview') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }
                      }}
                      className="relative"
                    >
                      <motion.span
                        className={`text-sm block relative ${
                          active
                            ? 'text-foreground font-semibold'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {link.label}
                        {active && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
