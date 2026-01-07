import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import heroItImage from '@/assets/hero-it-solutions.jpg';
import heroMarketingImage from '@/assets/hero-marketing.jpg';
import heroAiImage from '@/assets/hero-ai-chip.jpg';
import heroSeoImage from '@/assets/hero-seo.jpg';
import heroSeoNewImage from '@/assets/hero-seo-new.jpg';
import heroGrowthImage from '@/assets/hero-growth.jpg';
import heroSocialMediaImage from '@/assets/hero-social-media-new.jpg';
import heroItSolutionsNewImage from '@/assets/hero-it-solutions-new.jpg';
import heroWebsiteBuildingImage from '@/assets/hero-website-building.jpg';
import heroDigitalMarketingImage from '@/assets/hero-digital-marketing.jpg';
import heroPerformanceMarketingImage from '@/assets/hero-performance-marketing.jpg';
import heroWorkImage from '@/assets/hero-our-work.png';
import heroAboutImage from '@/assets/hero-about.jpg';
import heroContactImage from '@/assets/hero-contact.jpg';
import heroConsultationImage from '@/assets/hero-consultation.jpg';

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  theme: 'blue' | 'green';
  variant?: 'default' | 'ai' | 'seo' | 'social-media' | 'it-solutions' | 'website-building' | 'digital-marketing' | 'performance-marketing' | 'growth' | 'work' | 'about' | 'contact' | 'consultation';
  children?: ReactNode;
}

export default function PageHero({ badge, title, titleHighlight, subtitle, theme, variant = 'default', children }: PageHeroProps) {
  const isBlue = theme === 'blue';

  const getHeroImage = () => {
    if (variant === 'digital-marketing') return heroDigitalMarketingImage;
    if (variant === 'website-building') return heroWebsiteBuildingImage;
    if (variant === 'it-solutions') return heroItSolutionsNewImage;
    if (variant === 'ai') return heroAiImage;
    if (variant === 'seo') return heroSeoNewImage;
    if (variant === 'social-media') return heroSocialMediaImage;
    if (variant === 'performance-marketing') return heroPerformanceMarketingImage;
    if (variant === 'growth') return heroGrowthImage;
    if (variant === 'work') return heroWorkImage;
    if (variant === 'about') return heroAboutImage;
    if (variant === 'contact') return heroContactImage;
    if (variant === 'consultation') return heroConsultationImage;
    return isBlue ? heroItImage : heroMarketingImage;
  };

  return (
    <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {(variant === 'it-solutions' || variant === 'website-building' || variant === 'ai' || variant === 'digital-marketing' || variant === 'social-media' || variant === 'performance-marketing' || variant === 'seo' || variant === 'growth' || variant === 'work' || variant === 'about' || variant === 'contact' || variant === 'consultation') ? (
          <motion.img
            src={getHeroImage()}
            alt={`ByteFlow ${isBlue ? 'IT & AI Solutions' : 'Digital Marketing'} background`}
            className="w-full h-full object-cover"
            style={variant === 'growth' ? { filter: 'hue-rotate(-70deg) saturate(1.2)' } : (variant === 'contact' ? { filter: 'brightness(0.7)' } : undefined)}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ) : (
          <img
            src={getHeroImage()}
            alt={`ByteFlow ${isBlue ? 'IT & AI Solutions' : 'Digital Marketing'} background`}
            className="w-full h-full object-cover"
          />
        )}
        <div className={`absolute inset-0 ${variant === 'work' ? 'bg-black/40' : 'bg-background/50'}`} />
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className={`w-2 h-2 rounded-full animate-pulse ${isBlue ? 'bg-blue-cyan' : 'bg-green-emerald'}`} />
              <span className="text-sm font-medium text-muted-foreground">{badge}</span>
            </motion.div>
          )}

          {/* Title */}
          {/* Title - Hidden for 'work' and 'contact' variants as it's in the background image */}
          {variant !== 'work' && variant !== 'contact' && (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              {title}{' '}
              {titleHighlight && (
                <span className={isBlue ? 'text-gradient-blue' : 'text-gradient-green'}>
                  {titleHighlight}
                </span>
              )}
            </motion.h1>
          )}

          {/* Subtitle - Hidden only for 'work' variant */}
          {variant !== 'work' && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Optional children (buttons, etc.) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
