import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton: { text: string; link: string };
  secondaryButton?: { text: string; link: string };
  theme?: 'blue' | 'green' | 'mixed';
  backgroundImages?: string[];
  imageClassName?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  theme = 'mixed',
  backgroundImages,
  imageClassName
}: CTASectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages && backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [backgroundImages]);

  const getGradientClasses = () => {
    switch (theme) {
      case 'blue':
        return 'from-blue-deep via-blue-royal to-blue-deep';
      case 'green':
        return 'from-green-deep via-green-emerald to-green-deep';
      default:
        return 'from-blue-deep via-green-deep to-blue-deep';
    }
  };

  const getButtonClasses = () => {
    switch (theme) {
      case 'blue':
        return 'bg-blue-cyan hover:bg-blue-aqua text-blue-deep';
      case 'green':
        return 'bg-green-mint hover:bg-green-light text-green-deep';
      default:
        return 'bg-gradient-to-r from-blue-cyan to-green-mint hover:opacity-90 text-foreground';
    }
  };

  return (
    <section className={`relative py-32 md:py-48 overflow-hidden bg-gradient-to-r ${getGradientClasses()}`}>
      {/* Background Carousel */}
      {backgroundImages && backgroundImages.length > 0 && (
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={backgroundImages[currentImageIndex]}
                alt="Portfolio background"
                className={`w-full h-full ${imageClassName || 'object-cover'}`}
              />
            </motion.div>
          </AnimatePresence>
          {/* Overlay to ensure readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px]" />
        </div>
      )}

      {/* Background effects (fallback/additional) */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      {!backgroundImages && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none"
        />
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 drop-shadow-lg">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to={primaryButton.link}>
              <Button
                size="lg"
                className={`rounded-xl px-10 py-7 text-lg group shadow-2xl ${getButtonClasses()}`}
              >
                {primaryButton.text}
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            {secondaryButton && (
              <Link to={secondaryButton.link}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-10 py-7 text-lg border-white/50 text-white hover:bg-white/20 backdrop-blur-md transition-all shadow-xl"
                >
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
