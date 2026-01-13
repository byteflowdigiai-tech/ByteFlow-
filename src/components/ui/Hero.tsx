import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-home.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Split Wave Animation Layers */}
      <div className="absolute inset-0 overflow-hidden bg-background/90">

        {/* Base Static Layer (Prevents gaps) */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="ByteFlow DigiAI - Future of Digital Innovation"
            className="w-full h-full object-cover opacity-50"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Blue Wave (Left Side) - Moves First */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ maskImage: 'linear-gradient(90deg, black 0%, black 45%, transparent 75%)', WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 45%, transparent 75%)' }}
          animate={{
            x: ["0%", "-1%", "0%", "1%", "0%"],
            y: ["0%", "1%", "0%", "-1%", "0%"],
            scale: [1.1, 1.15, 1.1], // Gentle pulses
            skewX: [0, 0.5, 0, -0.5, 0], // Added skew for realistic wave distortion
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={heroImage}
            alt="ByteFlow IT and AI Solutions background"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Green Wave (Right Side) - Moves Second (Delayed) */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ maskImage: 'linear-gradient(270deg, black 0%, black 45%, transparent 75%)', WebkitMaskImage: 'linear-gradient(270deg, black 0%, black 45%, transparent 75%)' }}
          animate={{
            x: ["0%", "1%", "0%", "-1%", "0%"], // Moves opposite to blue for contrast
            y: ["0%", "-1%", "0%", "1%", "0%"],
            scale: [1.1, 1.15, 1.1], // Matched intensity (was 1.12)
            skewX: [0, -0.5, 0, 0.5, 0], // Added matching skew effect
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 // The "Then Green Wave" delay
          }}
        >
          <img
            src={heroImage}
            alt="ByteFlow Digital Marketing background"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/60 z-20 pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-emerald animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Transforming Businesses Worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Powering the Future of{' '}
            <span className="text-gradient-mixed">Digital Innovation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            ByteFlow DigiAI delivers cutting-edge IT & AI solutions and data-driven digital marketing
            strategies to accelerate your business growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/book-consultation">
              <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-royal to-green-emerald hover:opacity-90 transition-opacity group px-8" aria-label="Get started by booking a consultation with ByteFlow">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about" aria-label="Learn more about ByteFlow DigiAI and our services">
              <Button size="lg" variant="outline" className="rounded-xl px-8">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Service Cards Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* IT & AI Solutions Card */}
            <Link to="/it-solutions" className="group">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="relative p-8 rounded-2xl glass transition-all duration-500 overflow-hidden active:bg-muted/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-royal/10 to-blue-cyan/10 opacity-5 md:opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-royal to-blue-cyan flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-active:scale-95">
                    <Code2 className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="font-display text-xl font-semibold mb-3 group-hover:text-blue-cyan transition-colors text-left">
                    IT & AI Solutions
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 text-left">
                    Website development, AI automation, and scalable tech infrastructure for modern businesses.
                  </p>
                  <div className="flex items-center text-sm font-medium text-blue-cyan transition-all">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 ml-1 opacity-100 md:opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Digital Marketing Card */}
            <Link to="/digital-marketing" className="group">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="relative p-8 rounded-2xl glass transition-all duration-500 overflow-hidden active:bg-muted/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-emerald/10 to-green-mint/10 opacity-5 md:opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-emerald to-green-mint flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-active:scale-95">
                    <TrendingUp className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="font-display text-xl font-semibold mb-3 group-hover:text-green-emerald transition-colors text-left">
                    Digital Marketing
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 text-left">
                    SEO, performance marketing, and growth strategies that drive measurable results.
                  </p>
                  <div className="flex items-center text-sm font-medium text-green-emerald transition-all">
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 ml-1 opacity-100 md:opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
