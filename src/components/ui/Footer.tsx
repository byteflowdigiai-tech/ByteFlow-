import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const footerLinks = {
  itSolutions: [
    { name: 'Website Building', path: '/it-solutions/website-building' },
    { name: 'AI & Automation', path: '/it-solutions/ai-automation' },
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
              Let's discuss how ByteFlow can accelerate your digital growth.
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
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col items-start group mb-6">
              <div className="h-16 md:h-20 overflow-hidden rounded-xl mb-2">
                <img
                  src={logo}
                  alt="ByteFlow DigiAI Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg md:text-xl tracking-wide text-foreground">
                ByteFlow <span className="text-gradient-mixed">DigiAI</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering businesses with ByteFlow DigiAI—cutting-edge IT & AI solutions and data-driven digital marketing strategies.
            </p>
            <div className="space-y-3">
              <a href="mailto:byteflowdigiai@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-blue-cyan" />
                byteflowdigiai@gmail.com
              </a>
              <a href="tel:+916900105606" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-green-emerald" />
                +91 6900105606
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-blue-aqua" />
                Malleshwaram, Bengaluru
              </div>
            </div>
          </div>

          {/* IT & AI Solutions */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">IT & AI Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.itSolutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-blue-cyan transition-colors">
                    {link.name}
                  </Link>
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
                  <Link to={link.path} className="text-muted-foreground hover:text-green-emerald transition-colors">
                    {link.name}
                  </Link>
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
                  <Link to={link.path} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ByteFlow DigiAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
