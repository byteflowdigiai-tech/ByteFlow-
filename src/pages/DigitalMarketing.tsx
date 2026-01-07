import { Link } from 'react-router-dom';
import {
  Target, TrendingUp, Rocket, BarChart3, Users,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import ServiceCard from '@/components/ui/ServiceCard';
import FeatureGrid from '@/components/ui/FeatureGrid';
import Counter from '@/components/ui/Counter';
import CTASection from '@/components/ui/CTASection';
import ctaDm1 from '@/assets/cta-dm-1.jpg';
import ctaDm2 from '@/assets/cta-dm-2.jpg';
import ctaDm3 from '@/assets/cta-dm-3.jpg';
import ctaDm4 from '@/assets/cta-dm-4.jpg';

const services = [
  {
    title: 'SEO Services',
    description: 'Dominate search rankings with data-driven SEO strategies that drive organic traffic and conversions.',
    icon: Target,
    link: '/digital-marketing/seo',
    theme: 'green' as const,
  },
  {
    title: 'Social Media Marketing',
    description: 'Build engaged communities and create viral content across all major social platforms.',
    icon: Users,
    link: '/digital-marketing/social-media-marketing',
    theme: 'green' as const,
  },
  {
    title: 'Performance Marketing',
    description: 'ROI-focused paid campaigns across Google, Meta, LinkedIn, and emerging platforms.',
    icon: TrendingUp,
    link: '/digital-marketing/performance-marketing',
    theme: 'green' as const,
  },
  {
    title: 'Growth Strategy',
    description: 'Comprehensive growth frameworks combining brand building with performance metrics.',
    icon: Rocket,
    link: '/digital-marketing/growth-strategy',
    theme: 'green' as const,
  },
];

const features = [
  { title: 'Data-Driven', description: 'Every decision backed by analytics and insights', icon: BarChart3 },
  { title: 'Results Focused', description: 'Clear KPIs and measurable outcomes', icon: Target },
  { title: 'Multi-Channel', description: 'Integrated campaigns across all platforms', icon: Users },
];

const results = [
  { metric: '150%', label: 'Average Traffic Increase' },
  { metric: '3.5x', label: 'ROAS Improvement' },
  { metric: '200+', label: 'Clients Served' },
  { metric: '45%', label: 'Conversion Rate Boost' },
];

export default function DigitalMarketing() {
  return (
    <main>
      <PageHero
        badge="Digital Marketing"
        title="Accelerate"
        titleHighlight="Sustainable Growth"
        subtitle="Data-driven marketing strategies that deliver measurable results, from brand awareness to revenue growth."
        theme="green"
        variant="digital-marketing"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation">
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-green-emerald to-green-mint hover:opacity-90 transition-opacity group">
              Grow Your Brand
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="rounded-xl">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Results Banner */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((item, index) => (
              <div key={item.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-green mb-2">
                  <Counter value={item.metric} delay={index * 0.2} />
                </div>
                <div className="text-muted-foreground text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-green-radial">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-green">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital marketing solutions tailored to your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-green">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Strategic, transparent, and relentlessly focused on your success.
            </p>
          </div>
          <FeatureGrid features={features} theme="green" />
        </div>
      </section>

      <CTASection
        title="Ready to Grow?"
        subtitle="Let's create a marketing strategy that drives real business results."
        primaryButton={{ text: 'Get a Free Audit', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Case Studies', link: '/our-work' }}
        theme="green"
        backgroundImages={[ctaDm1, ctaDm2, ctaDm3, ctaDm4]}
      />
    </main>
  );
}
