import { Link } from 'react-router-dom';
import { Target, TrendingUp, Rocket, BarChart3, Users, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
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
        title: 'Local SEO Services',
        description: 'Rank higher on Google for Guwahati-related searches. Be the first choice for local customers.',
        icon: Target,
        link: '/guwahati/seo',
        theme: 'green' as const,
    },
    {
        title: 'Social Media Management',
        description: 'Build a loyal following for your brand in Assam. Engaging content for Facebook, Instagram, and LinkedIn.',
        icon: Users,
        link: '/digital-marketing/social-media-marketing',
        theme: 'green' as const,
    },
    {
        title: 'Performance Marketing',
        description: 'Run profitable ad campaigns. We help Guwahati businesses get more leads for lower cost.',
        icon: TrendingUp,
        link: '/digital-marketing/performance-marketing',
        theme: 'green' as const,
    },
    {
        title: 'Brand Growth Strategy',
        description: 'Long-term strategies to make your brand a household name in the Northeast.',
        icon: Rocket,
        link: '/digital-marketing/growth-strategy',
        theme: 'green' as const,
    },
];

const features = [
    { title: 'Local Insights', description: 'Strategies tailored for the Assam market', icon: BarChart3 },
    { title: 'ROI Focused', description: 'Measurable returns on your marketing spend', icon: Target },
    { title: 'Bilingual Content', description: 'Campaigns in English and Assamese if needed', icon: Users },
];

const results = [
    { metric: '100+', label: 'Local Campaigns' },
    { metric: '50+', label: 'Guwahati Clients' },
    { metric: '300%', label: 'Avg ROI Increase' },
];

export default function GuwahatiMarketing() {
    return (
        <main>
            <SEO
                title="Digital Marketing Agency in Guwahati | SEO, Ads & Branding"
                description="Top-rated digital marketing agency in Guwahati. We specialize in SEO, Social Media Marketing, and Google Ads for businesses in Assam and Northeast India."
                keywords="digital marketing agency guwahati, social media marketing guwahati, performance marketing agency guwahati, digital marketing services guwahati, best digital marketing agency guwahati, top digital marketing agency guwahati, lead generation agency guwahati, online marketing company guwahati, internet marketing agency guwahati, google ads agency guwahati, social media management guwahati, instagram marketing guwahati"
                canonicalUrl="https://www.byteflowdigiai.com/guwahati/digital-marketing"
            />
            <PageHero
                badge="Digital Marketing Experts"
                title="Grow Your Brand in"
                titleHighlight="Guwahati & Beyond"
                subtitle="Data-driven marketing strategies designed to connect Assam's businesses with their ideal customers."
                theme="green"
                variant="digital-marketing"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-consultation">
                        <Button size="lg" className="rounded-xl bg-gradient-to-r from-green-emerald to-green-mint hover:opacity-90 transition-opacity group">
                            Get Free Audit
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="rounded-xl">
                            Meet Our Team
                        </Button>
                    </Link>
                </div>
            </PageHero>

            {/* Results Banner */}
            <section className="py-16 bg-card border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            Marketing Solutions for <span className="text-gradient-green">Local Success</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We understand the nuances of the local market and build campaigns that resonate.
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
                    <FeatureGrid features={features} theme="green" />
                </div>
            </section>

            <CTASection
                title="Ready to Dominate the Local Market?"
                subtitle="Let's build a marketing strategy that turns clicks into customers."
                primaryButton={{ text: 'Start Growing', link: '/book-consultation' }}
                secondaryButton={{ text: 'Check Case Studies', link: '/our-work' }}
                theme="green"
                backgroundImages={[ctaDm1, ctaDm2, ctaDm3, ctaDm4]}
            />
        </main>
    );
}
