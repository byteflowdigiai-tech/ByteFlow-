import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket, Target, TrendingUp, Users, Lightbulb,
  ArrowRight, CheckCircle, BarChart3, Compass
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CTASection from '@/components/ui/CTASection';
import growthTreeImage from '@/assets/growth-tree.jpg';

import growthCta1 from '@/assets/growth-cta-1.jpg';
import growthCta2 from '@/assets/growth-cta-2.jpg';
import growthCta3 from '@/assets/growth-cta-3.jpg';
import growthCta4 from '@/assets/growth-cta-4.jpg';

const features = [
  { title: 'Market Research', description: 'Deep dive into your market and competitive landscape', icon: Compass },
  { title: 'Brand Strategy', description: 'Define your positioning and messaging', icon: Target },
  { title: 'Channel Strategy', description: 'Identify the right mix for your audience', icon: TrendingUp },
  { title: 'Content Strategy', description: 'Create content that resonates and converts', icon: Lightbulb },
  { title: 'Analytics Framework', description: 'Build measurement systems for growth', icon: BarChart3 },
  { title: 'Team Enablement', description: 'Train your team to execute the strategy', icon: Users },
];

const phases = [
  {
    phase: 'Discovery',
    title: 'Understand',
    description: 'Deep research into your business, market, and competition',
    items: ['Stakeholder interviews', 'Market analysis', 'Competitive audit', 'Customer research'],
  },
  {
    phase: 'Strategy',
    title: 'Plan',
    description: 'Develop a comprehensive growth roadmap',
    items: ['Goal setting', 'Channel strategy', 'Content planning', 'Budget allocation'],
  },
  {
    phase: 'Execution',
    title: 'Launch',
    description: 'Implement strategies across all channels',
    items: ['Campaign launches', 'Content creation', 'Optimization', 'A/B testing'],
  },
  {
    phase: 'Scale',
    title: 'Grow',
    description: 'Optimize and expand what works',
    items: ['Performance analysis', 'Strategy refinement', 'New opportunities', 'Scaling winners'],
  },
];

export default function GrowthStrategy() {
  return (
    <main>
      <SEO
        title="Growth Strategy - Scale Your Business Sustainably"
        description="Comprehensive growth strategies to scale your brand sustainably. Data-driven frameworks, market analysis, and strategic planning for long-term business success."
        keywords="growth strategy, business growth, scaling strategy, market expansion, strategic planning, sustainable growth"
        canonicalUrl="https://byteflowdigiai.com/digital-marketing/growth-strategy"
      />
      <PageHero
        badge="Growth Strategy"
        title="Build a Framework for"
        titleHighlight="Sustainable Growth"
        subtitle="Comprehensive growth strategies that combine brand building with performance marketing for long-term success."
        theme="green"
        variant="growth"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation">
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-green-emerald to-green-mint hover:opacity-90 transition-opacity group">
              Start Growing
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="rounded-xl">
              Talk to Strategist
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Features */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Strategic <span className="text-gradient-green">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build a scalable growth engine.
            </p>
          </div>
          <FeatureGrid features={features} theme="green" />
        </div>
      </section>

      {/* Growth Phases */}
      <section className="py-24 bg-gradient-green-radial">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Growth <span className="text-gradient-green">Framework</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology for sustainable business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass transition-all duration-500"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-green-emerald/20 text-green-emerald text-sm font-medium mb-4">
                  {phase.phase}
                </span>
                <h3 className="font-display text-2xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground mb-6">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-emerald flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-3xl bg-gradient-to-br from-green-deep to-green-emerald p-1 transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)]">
                  <div className="w-full aspect-square rounded-3xl overflow-hidden glass flex items-center justify-center bg-zinc-950">
                    <img
                      src={growthTreeImage}
                      alt="Growth Framework"
                      className="w-full h-full object-cover object-top"
                      style={{ filter: 'grayscale(100%) sepia(100%) hue-rotate(90deg) saturate(200%) brightness(0.95)' }}
                    />
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-mint/30 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Growth That <span className="text-gradient-green">Lasts</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't believe in quick fixes. Our strategies are designed for sustainable,
                long-term growth that compounds over time.
              </p>
              <motion.ul
                className="space-y-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                {[
                  'Custom strategies tailored to your business',
                  'Data-driven decision making',
                  'Cross-functional team alignment',
                  'Regular strategy reviews and optimization',
                  'Clear KPIs and accountability',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0 }
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-emerald mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Growth Engine?"
        subtitle="Let's create a strategy that drives sustainable growth for your business."
        primaryButton={{ text: 'Start Strategy Session', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Case Studies', link: '/our-work' }}
        theme="green"
        backgroundImages={[growthCta1, growthCta2, growthCta3, growthCta4]}
        imageClassName="object-cover object-center opacity-60 mix-blend-luminosity"
      />
    </main>
  );
}
