import { Link } from 'react-router-dom';
import { Smartphone, Gauge, Layers, Shield, Paintbrush, ArrowRight, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CTASection from '@/components/ui/CTASection';
import portElysee from '@/assets/portfolio-elysee.png';
import portBloom from '@/assets/portfolio-bloom.png';
import portAurum from '@/assets/portfolio-aurum.png';
import portLuxe from '@/assets/portfolio-luxebelle.png';

const features = [
    { title: 'Mobile Responsive', description: 'Designs that look great on every device', icon: Smartphone },
    { title: 'Fast Loading', description: 'Optimized for slow networks common in mobile data', icon: Gauge },
    { title: 'SEO Ready', description: 'Built to rank on Google from day one', icon: Layers },
    { title: 'Secure Hosting', description: 'SSL and security included', icon: Shield },
    { title: 'Custom Design', description: 'Unique branding, no generic templates', icon: Paintbrush },
    { title: 'Easy Updates', description: 'Manage your own content easily', icon: Zap },
];

export default function GuwahatiWebDesign() {
    return (
        <main>
            <SEO
                title="Website Design Company in Guwahati | Custom Web Development"
                description="Best website design company in Guwahati. We create stunning, mobile-responsive, and fast-loading websites for businesses in Assam at affordable rates."
                keywords="web design company guwahati, website development company guwahati, professional web design company guwahati, website development services guwahati, website design services guwahati, responsive web design guwahati, business website development guwahati, custom website development guwahati, best website development company in guwahati, website development company guwahati price, website design guwahati"
                canonicalUrl="https://www.byteflowdigiai.com/guwahati/web-design"
            />
            <PageHero
                badge="Guwahati Web Design"
                title="Stunning Websites for"
                titleHighlight="Local Brands"
                subtitle="We build high-performance, beautifully designed websites that effective represent your business to the world."
                theme="blue"
                variant="website-building"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-consultation">
                        <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-royal to-blue-cyan hover:opacity-90 transition-opacity group">
                            Get Website Quote
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/our-work">
                        <Button size="lg" variant="outline" className="rounded-xl">
                            See Our Portfolio
                        </Button>
                    </Link>
                </div>
            </PageHero>

            {/* Features */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            World-Class Design in <span className="text-gradient-blue">Guwahati</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Don't settle for templates. Get a custom website that stands out.
                        </p>
                    </div>
                    <FeatureGrid features={features} theme="blue" />
                </div>
            </section>

            <CTASection
                title="Need a New Website?"
                subtitle="Contact us at our Guwahati office for a free quote."
                primaryButton={{ text: 'Contact Us', link: '/book-consultation' }}
                secondaryButton={{ text: 'View Designs', link: '/our-work' }}
                theme="blue"
                backgroundImages={[portElysee, portBloom, portAurum, portLuxe]}
            />
        </main>
    );
}
