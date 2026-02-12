import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Search, FileText, Link2, BarChart3, ArrowRight, Globe } from 'lucide-react';
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
    { title: 'Local Keyword Research', description: 'Targeting audience specifically in Guwahati & Assam', icon: Search },
    { title: 'Google Maps SEO', description: 'Ranking your business in the "Local Pack" and Maps', icon: Globe },
    { title: 'High-Quality Backlinks', description: 'Building authority from local and niche directories', icon: Link2 },
    { title: 'On-Page Optimization', description: 'Structuring your site for local search intent', icon: FileText },
    { title: 'Competitor Analysis', description: 'Beating other local competitors in rankings', icon: BarChart3 },
    { title: 'Content Strategy', description: 'Creating content that engages the local audience', icon: Target },
];

const results = [
    { metric: '#1', label: 'Local Rankings' },
    { metric: '300%', label: 'Traffic Growth' },
    { metric: '10x', label: 'More Leads' },
];

export default function GuwahatiSEO() {
    return (
        <main>
            <SEOHead
                title="SEO Services in Guwahati | Rank #1 on Google"
                description="Best SEO Company in Guwahati. We help local businesses rank on the first page of Google with proven local SEO strategies, GMB optimization, and quality link building."
                keywords="seo company guwahati, seo services guwahati, affordable seo company guwahati, search engine optimization guwahati, local seo services guwahati, technical seo company guwahati, top seo agency in guwahati assam, best seo company in guwahati for small business, affordable seo services guwahati, seo services in guwahati assam"
                canonicalUrl="https://www.byteflowdigiai.com/guwahati/seo"
                faq={[
                    {
                        question: "Why does my Guwahati business need SEO?",
                        answer: "Most customers in Guwahati search online before visiting a store. If you are not ranking locally, you are losing customers to competitors who are visible on Google."
                    },
                    {
                        question: "How long to see results in local SEO?",
                        answer: "Local SEO typically shows results faster than global SEO. You can often see improvements in Google Maps rankings and local traffic within 2-4 months."
                    }
                ]}
            />
            <PageHero
                badge="Guwahati SEO Experts"
                title="Rank #1 for"
                titleHighlight="Local Searches"
                subtitle="Dominate the Guwahati market. We help your business appear exactly when local customers are looking for your services."
                theme="green"
                variant="seo"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-consultation">
                        <Button size="lg" className="rounded-xl bg-gradient-to-r from-green-emerald to-green-mint hover:opacity-90 transition-opacity group">
                            Get Free SEO Audit
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
                            Comprehensive <span className="text-gradient-green">Local SEO</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Tailored strategies to make your business the authority in your niche in Guwahati.
                        </p>
                    </div>
                    <FeatureGrid features={features} theme="green" />
                </div>
            </section>

            <CTASection
                title="Want More Local Customers?"
                subtitle="Stop losing business to competitors. Let's get you ranking today."
                primaryButton={{ text: 'Start SEO Campaign', link: '/book-consultation' }}
                secondaryButton={{ text: 'View Case Studies', link: '/our-work' }}
                theme="green"
                backgroundImages={[ctaSeo1, ctaSeo2, ctaSeo3, ctaSeo4]}
            />
        </main>
    );
}
