import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target, Search, FileText, Link2, BarChart3,
  ArrowRight, CheckCircle, TrendingUp, Globe
} from 'lucide-react';
import SEOHead from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CTASection from '@/components/ui/CTASection';
import Counter from '@/components/ui/Counter';
import ctaSeo1 from '@/assets/cta-seo-1.jpg';
import ctaSeo2 from '@/assets/cta-seo-2.jpg';
import ctaSeo3 from '@/assets/cta-seo-3.jpg';
import ctaSeo4 from '@/assets/cta-seo-4.jpg';

const features = [
  { title: 'Keyword Research', description: 'Identify high-value keywords your audience is searching for', icon: Search },
  { title: 'On-Page SEO', description: 'Optimize content, meta tags, and site structure', icon: FileText },
  { title: 'Link Building', description: 'Build authoritative backlinks that boost rankings', icon: Link2 },
  { title: 'Technical SEO', description: 'Site speed, mobile optimization, and crawlability', icon: Globe },
  { title: 'Analytics & Reporting', description: 'Track rankings, traffic, and conversions', icon: BarChart3 },
  { title: 'Content Strategy', description: 'Create content that ranks and converts', icon: Target },
];

const process = [
  { step: '01', title: 'Audit', description: 'Comprehensive analysis of your current SEO performance' },
  { step: '02', title: 'Strategy', description: 'Custom roadmap based on your goals and competition' },
  { step: '03', title: 'Execution', description: 'On-page, off-page, and technical optimizations' },
  { step: '04', title: 'Monitor', description: 'Continuous tracking and strategy refinement' },
];

const results = [
  { metric: '150%+', label: 'Average Traffic Increase', description: 'Within 6 months' },
  { metric: 'Top 10', label: 'Keyword Rankings', description: 'For target keywords' },
  { metric: '100%+', label: 'Organic Lead Growth', description: 'Year over year' },
];

export default function SEO() {
  return (
    <main>
      <SEOHead
        title="SEO Services - Boost Your Organic Traffic & Rankings"
        description="Professional SEO services to increase your search engine rankings and organic traffic. Data-driven strategies, technical SEO, content optimization, and link building."
        keywords="SEO services, search engine optimization, organic traffic, keyword optimization, SEO agency, link building, technical SEO"
        canonicalUrl="https://www.byteflowdigiai.com/digital-marketing/seo"
      />
      <PageHero
        badge="SEO Services"
        title="Dominate Search with"
        titleHighlight="Strategic SEO"
        subtitle="Data-driven SEO strategies that increase organic visibility, drive qualified traffic, and boost conversions."
        theme="green"
        variant="seo"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation">
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-green-emerald to-green-mint hover:opacity-90 transition-opacity group">
              Get SEO Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="rounded-xl">
              Talk to SEO Expert
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Results */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-green mb-2">
                  <Counter value={item.metric} duration={2.5} delay={index * 0.3} />
                </div>
                <div className="text-foreground font-medium mb-1">{item.label}</div>
                <div className="text-muted-foreground text-sm">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-green-radial">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Complete SEO <span className="text-gradient-green">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to rank higher and drive more organic traffic.
            </p>
          </div>
          <FeatureGrid features={features} theme="green" />
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our SEO <span className="text-gradient-green">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that delivers sustainable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl glass transition-colors active:bg-muted/30 group"
              >
                <div className="text-4xl font-display font-bold text-green-emerald/30 mb-4 transition-transform group-hover:scale-110">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Rank Higher?"
        subtitle="Get a free SEO audit and discover opportunities for growth."
        primaryButton={{ text: 'Get Free Audit', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Our Work', link: '/our-work' }}
        theme="green"
        backgroundImages={[ctaSeo1, ctaSeo2, ctaSeo3, ctaSeo4]}
      />
    </main>
  );
}
