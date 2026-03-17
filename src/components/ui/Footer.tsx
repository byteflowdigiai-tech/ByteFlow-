import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const footerLinks = {
  itSolutions: [
    { name: 'Website Building', path: '/it-solutions/website-building' },
    { name: 'AI & Automation', path: '/it-solutions/ai-automation' },
    { name: 'ERP', path: 'https://erp.byteflowdigiai.com/' },
    { name: 'All IT & AI Solutions', path: '/it-solutions' },
  ],
  digitalMarketing: [
    { name: 'SEO Services', path: '/digital-marketing/seo' },
    { name: 'Social Media Marketing', path: '/digital-marketing/social-media-marketing' },
    { name: 'Performance Marketing', path: '/digital-marketing/performance-marketing' },
    { name: 'Growth Strategy', path: '/digital-marketing/growth-strategy' },
    { name: 'All Marketing Services', path: '/digital-marketing' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Consultation', path: '/book-consultation' },
  ],
  important: [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
  ],
};


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-cyan/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-emerald/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-b border-border"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient-mixed">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how Byteflow DigiAi can accelerate your digital growth.
            </p>
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-royal to-green-emerald text-primary-foreground font-semibold hover:opacity-90 transition-opacity group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col items-start group mb-6">
              <div className="h-16 md:h-20 overflow-hidden rounded-xl mb-2">
                <img
                  src={logo}
                  alt="Byteflow DigiAi Logo"
                  className="h-full w-auto object-contain"
                  width={160}
                  height={48}
                />
              </div>
              <span className="font-display font-bold text-lg md:text-xl tracking-wide text-foreground">
                Byteflow <span className="text-gradient-mixed">DigiAI</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering businesses with Byteflow DigiAi—cutting-edge IT & AI solutions and data-driven digital marketing strategies.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-blue-cyan mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@byteflowdigiai.com" className="hover:text-blue-cyan transition-colors">info@byteflowdigiai.com</a>
                  <a href="mailto:byteflowdigiai@gmail.com" className="hover:text-blue-cyan transition-colors">byteflowdigiai@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-green-emerald" />
                +91 9181015606
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-blue-aqua shrink-0 mt-1" />
                <div className="text-sm">
                  <p><span className="font-semibold text-foreground">Head Office:</span> Bangalore</p>
                  <p><span className="font-semibold text-foreground">Branch Office:</span> Guwahati</p>
                </div>
              </div>
            </div>
          </div>

          {/* IT & AI Solutions */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">IT & AI Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.itSolutions.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('http') ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-cyan transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-muted-foreground hover:text-blue-cyan transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Digital Marketing</h3>
            <ul className="space-y-3">
              {footerLinks.digitalMarketing.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('http') ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-emerald transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-muted-foreground hover:text-green-emerald transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('http') ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Important Links</h3>
            <ul className="space-y-3">
              {footerLinks.important.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('http') ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-8 lg:mt-12">
              <a href="https://www.instagram.com/byteflowdigiai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass border border-white/5 flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:border-pink-500/30 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/185PeP7YVv/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass border border-white/5 flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-600/30 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/showcase/byteflow-digiai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass border border-white/5 flex items-center justify-center text-muted-foreground hover:text-blue-700 hover:border-blue-700/30 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Byteflow DigiAi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
