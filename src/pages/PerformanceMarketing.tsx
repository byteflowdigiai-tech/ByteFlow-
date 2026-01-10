import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp, Target, DollarSign, BarChart3, Users,
  ArrowRight, CheckCircle, Zap, PieChart
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import Counter from '@/components/ui/Counter';
import CTASection from '@/components/ui/CTASection';
import platformExpertiseImage from '@/assets/social-media-platforms.jpg';
import ctaPerformance1 from '@/assets/cta-performance-1.jpg';
import ctaPerformance2 from '@/assets/cta-performance-2.jpg';
import ctaPerformance3 from '@/assets/cta-performance-3.jpg';
import ctaPerformance4 from '@/assets/cta-performance-4.jpg';

const features = [
  { title: 'Google Ads', description: 'Search, Display, Shopping, and YouTube campaigns', icon: Target },
  { title: 'Meta Ads', description: 'Facebook and Instagram advertising', icon: Users },
  { title: 'LinkedIn Ads', description: 'B2B lead generation campaigns', icon: TrendingUp },
  { title: 'Programmatic', description: 'Data-driven display and video advertising', icon: PieChart },
  { title: 'Conversion Optimization', description: 'Landing pages and funnel optimization', icon: Zap },
  { title: 'Analytics & Attribution', description: 'Multi-touch attribution modeling', icon: BarChart3 },
];

const platforms = [
  { name: 'Google Ads', percentage: 95 },
  { name: 'Meta Ads', percentage: 90 },
  { name: 'LinkedIn Ads', percentage: 85 },
  { name: 'YouTube Ads', percentage: 75 },
];

const results = [
  { metric: '3.5x+', label: 'Average ROAS' },
  { metric: '-30%', label: 'Cost Per Lead' },
  { metric: '150%+', label: 'Traffic Increase' },
  { metric: '2x+', label: 'Conversion Rate' },
];

export default function PerformanceMarketing() {
  return (
    <main>
      <SEO
        title="Performance Marketing - ROI-Focused Ad Campaigns"
        description="Performance-based marketing campaigns that deliver measurable ROI. Expert management of Google Ads, Meta Ads, and multi-channel paid advertising campaigns."
        keywords="performance marketing, Google Ads, Meta Ads, PPC advertising, paid advertising, ROI marketing, conversion optimization"
        canonicalUrl="https://byteflowdigiai.com/digital-marketing/performance-marketing"
      />
      <PageHero
        badge="Performance Marketing"
        title="Maximize ROI with"
        titleHighlight="Paid Media"
        subtitle="Data-driven paid advertising campaigns that deliver measurable results across Google, Meta, LinkedIn, and emerging platforms."
        theme="green"
        variant="performance-marketing"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation">
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-green-emerald to-green-mint hover:opacity-90 transition-opacity group">
              Boost Your ROI
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="rounded-xl">
              Get Free Audit
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Results */}
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

      {/* Features */}
      <section className="py-24 bg-gradient-green-radial">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Multi-Channel <span className="text-gradient-green">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We manage campaigns across all major advertising platforms.
            </p>
          </div>
          <FeatureGrid features={features} theme="green" />
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="rounded-3xl bg-gradient-to-br from-green-deep to-green-emerald p-1 transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)]">
                <div className="w-full h-full rounded-3xl overflow-hidden glass flex items-center justify-center">
                  <img
                    src={platformExpertiseImage}
                    alt="Platform Expertise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-mint/30 rounded-full blur-2xl transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Platform <span className="text-gradient-green">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our certified team has deep expertise across all major advertising platforms,
                ensuring your campaigns are optimized for maximum performance.
              </p>
              <div className="space-y-6">
                {platforms.map((platform, index) => (
                  <div key={platform.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{platform.name}</span>
                      <span className="text-green-emerald">{platform.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${platform.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-green-emerald to-green-mint rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Scale Your Ads?"
        subtitle="Get a free audit of your current campaigns and discover opportunities."
        primaryButton={{ text: 'Get Free Audit', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Case Studies', link: '/our-work' }}
        theme="green"
        backgroundImages={[ctaPerformance1, ctaPerformance2, ctaPerformance3, ctaPerformance4]}
      />
    </main>
  );
}
