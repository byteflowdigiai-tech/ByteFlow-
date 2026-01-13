import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'IT & AI Solutions',
    path: '/it-solutions',
    submenu: [
      { name: 'Website Building', path: '/it-solutions/website-building' },
      { name: 'AI & Automation', path: '/it-solutions/ai-automation' },
    ],
  },
  {
    name: 'Digital Marketing',
    path: '/digital-marketing',
    submenu: [
      { name: 'SEO', path: '/digital-marketing/seo' },
      { name: 'Social Media Marketing', path: '/digital-marketing/social-media-marketing' },
      { name: 'Performance Marketing', path: '/digital-marketing/performance-marketing' },
      { name: 'Growth Strategy', path: '/digital-marketing/growth-strategy' },
    ],
  },
  { name: 'Our Work', path: '/our-work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileOpen ? 'bg-background shadow-lg' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group py-1">
            <div className="relative h-10 md:h-12 overflow-hidden rounded-lg">
              <img
                src={logo}
                alt="ByteFlow DigiAI Logo"
                className="h-full w-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-cyan to-green-emerald opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
            <span className="font-display font-bold text-[10px] md:text-xs tracking-wider text-foreground uppercase mt-1">
              ByteFlow <span className="text-blue-cyan">DigiAI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-1 ${isActive(link.path)
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.submenu && openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 glass-strong rounded-xl shadow-xl overflow-hidden"
                    >
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className={`block px-4 py-3 text-sm transition-colors ${isActive(sublink.path)
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                            }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Link to="/book-consultation" className="hidden md:block">
              <Button className="rounded-xl bg-gradient-to-r from-blue-royal to-green-emerald hover:opacity-90 transition-opacity">
                Book Consultation
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-xl"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close mobile menu' : 'Open mobile menu'}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background border-t border-border/50 shadow-2xl"
            >
              <div className="py-6 px-4 space-y-2 max-h-[80vh] overflow-y-auto scrollbar-hide">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive(link.path)
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                        }`}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${isActive(sublink.path)
                              ? 'bg-muted text-foreground'
                              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                              }`}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/book-consultation" className="block mt-4">
                  <Button className="w-full rounded-xl bg-gradient-to-r from-blue-royal to-green-emerald">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
