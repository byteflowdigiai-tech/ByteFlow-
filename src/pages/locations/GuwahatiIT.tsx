import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Zap, Database, Gauge, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import ServiceCard from '@/components/ui/ServiceCard';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CTASection from '@/components/ui/CTASection';
import benefitsInfographic from '@/assets/benefits-infographic.jpg';
import ctaImage1 from '@/assets/cta-it-1.jpg';
import ctaImage2 from '@/assets/cta-it-2.jpg';
import ctaImage3 from '@/assets/cta-it-3.jpg';
import ctaImage4 from '@/assets/cta-it-4.jpg';

const services = [
    {
        title: 'Website Development',
        description: 'Custom websites for Guwahati businesses. From corporate portals to e-commerce, we build scalable digital assets.',
        icon: Code2,
        link: '/guwahati/web-design',
        theme: 'blue' as const,
    },
    {
        title: 'Business Automation',
        description: 'Streamline your operations with AI-powered automation tailored for local industry needs.',
        icon: Zap,
        link: '/it-solutions/ai-automation',
        theme: 'blue' as const,
    },
];

const features = [
    { title: 'Local Support', description: 'On-ground support team in Guwahati', icon: Database },
    { title: 'Speed Optimized', description: 'Fast loading sites for better mobile experience', icon: Gauge },
    { title: 'Secure Systems', description: 'Enterprise-grade security specific to your data needs', icon: Shield },
];

const benefits = [
    'Face-to-face consultations in Guwahati',
    'Understanding of the Northeast market',
    'Cost-effective solutions for local startups',
    'Ongoing maintenance and local support',
    'Transparent pricing in INR',
    'Proven track record with Assam businesses',
];

export default function GuwahatiIT() {
    return (
        <main>
            <SEO
                title="IT Solutions Company in Guwahati | Custom Software & Web Dev"
                description="Leading IT solutions provider in Guwahati, Assam. We offer custom software development, website building, and business automation for local businesses."
                keywords="ai automation company guwahati, it solutions company guwahati, ai automation services guwahati, it company in guwahati assam, business automation services in guwahati, ai automation for business guwahati, it solutions guwahati, tech company guwahati"
                canonicalUrl="https://www.byteflowdigiai.com/guwahati/it-solutions"
            />
            <PageHero
                badge="Guwahati IT Services"
                title="IT Solutions for"
                titleHighlight="Guwahati Businesses"
                subtitle="Empowering Northeast India's businesses with cutting-edge software, custom websites, and digital transformation services."
                theme="blue"
                variant="it-solutions"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-consultation">
                        <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-royal to-blue-cyan hover:opacity-90 transition-opacity group">
                            Get Local Quote
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="rounded-xl">
                            Visit Office
                        </Button>
                    </Link>
                </div>
            </PageHero>

            {/* Services Grid */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Technology Services for <span className="text-gradient-blue">Assam's Growth</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We provide the technical backbone your business needs to succeed in the digital age.
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
            <section className="py-24 bg-gradient-blue-radial">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FeatureGrid features={features} theme="blue" />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                Why Choose a Local <span className="text-gradient-blue">Guwahati Partner?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Working with ByteFlow means you get the best of both worlds: Global tech standards with local accountability. We are right here in the city to ensure your success.
                            </p>
                            <motion.ul
                                className="space-y-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3"
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        <CheckCircle className="w-5 h-5 text-blue-cyan mt-0.5 flex-shrink-0" />
                                        <span className="text-foreground">{benefit}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                        <div className="relative group">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-deep to-blue-royal p-1">
                                <div className="w-full h-full rounded-3xl overflow-hidden glass p-4 flex items-center justify-center">
                                    <img
                                        src={benefitsInfographic}
                                        alt="Why Partner with ByteFlow DigiAI Guwahati"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Start Your Digital Transformation"
                subtitle="Book a consultation at our Guwahati office today."
                primaryButton={{ text: 'Schedule Meeting', link: '/book-consultation' }}
                secondaryButton={{ text: 'View Portfolio', link: '/our-work' }}
                theme="blue"
                backgroundImages={[ctaImage1, ctaImage2, ctaImage3, ctaImage4]}
            />
        </main>
    );
}
