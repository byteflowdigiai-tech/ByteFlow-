import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Code2, Zap, Globe, Shield, Gauge, Database,
    ArrowRight, CheckCircle
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import ServiceCard from '@/components/ui/ServiceCard';
import FeatureGrid from '@/components/ui/FeatureGrid';
import Counter from '@/components/ui/Counter';
import CTASection from '@/components/ui/CTASection';
import benefitsInfographic from '@/assets/benefits-infographic.jpg';
import ctaImage1 from '@/assets/cta-it-1.jpg';
import ctaImage2 from '@/assets/cta-it-2.jpg';
import ctaImage3 from '@/assets/cta-it-3.jpg';
import ctaImage4 from '@/assets/cta-it-4.jpg';

const services = [
    {
        title: 'Website Building',
        description: 'Custom, responsive websites built with cutting-edge frameworks for maximum performance and scalability.',
        icon: Code2,
        link: '/it-solutions/website-building',
        theme: 'blue' as const,
    },
    {
        title: 'AI & Automation',
        description: 'Leverage artificial intelligence to automate workflows, enhance decision-making, and reduce operational costs.',
        icon: Zap,
        link: '/it-solutions/ai-automation',
        theme: 'blue' as const,
    },
    // {
    //     title: 'Cloud Infrastructure',
    //     description: 'Enterprise-grade cloud solutions with 99.99% uptime guarantee and seamless scalability.',
    //     icon: Globe,
    //     link: '/it-solutions',
    //     theme: 'blue' as const,
    // },
];

const features = [
    { title: 'Scalable Architecture', description: 'Built to grow with your business needs', icon: Database },
    { title: 'Performance Optimized', description: 'Lightning-fast load times and responsiveness', icon: Gauge },
    { title: 'Security First', description: 'Enterprise-grade security at every layer', icon: Shield },
];

const benefits = [
    'Custom solutions tailored to your business',
    'Dedicated project management',
    'Ongoing maintenance and support',
    'Transparent pricing with no hidden costs',
    'Agile development methodology',
    'Regular progress updates and demos',
];

export default function ITSolutions() {
    return (
        <main>
            <SEO
                title="IT Solutions - Custom Software & Technology Services"
                description="ByteFlow delivers enterprise-grade IT solutions including custom web development, AI automation, and digital transformation services. Scale your business with cutting-edge technology."
                keywords="IT solutions, custom software development, enterprise IT services, technology consulting, digital transformation"
                canonicalUrl="https://byteflow-digiai.tech/it-solutions"
            />
            <PageHero
                badge="IT & AI Solutions"
                title="Build"
                titleHighlight="Future-Ready Technology"
                subtitle="From custom web development to AI-powered automation, we deliver scalable solutions that drive digital transformation and competitive advantage."
                theme="blue"
                variant="it-solutions"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-consultation">
                        <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-royal to-blue-cyan hover:opacity-90 transition-opacity group">
                            Get Started
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="rounded-xl">
                            Request a Demo
                        </Button>
                    </Link>
                </div>
            </PageHero>

            {/* Services Grid */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Built for <span className="text-gradient-blue">Excellence</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our solutions are engineered with enterprise-grade standards and best practices.
                        </p>
                    </div>
                    <FeatureGrid features={features} theme="blue" />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                Why Partner with <span className="text-gradient-blue">ByteFlow DigiAI</span>?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We don't just build technology—we build partnerships. Our team works closely
                                with you to understand your unique challenges and deliver solutions that exceed expectations.
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
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-deep to-blue-royal p-1 transition-all duration-500 group-hover:shadow-[0_0_50px_-12px_rgba(42,219,255,0.4)] group-hover:scale-[1.01]">
                                <div className="w-full h-full rounded-3xl overflow-hidden glass p-4 flex items-center justify-center">
                                    <img
                                        src={benefitsInfographic}
                                        alt="Why Partner with ByteFlow DigiAI"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-cyan/30 rounded-full blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:scale-110" />
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Build Something Amazing?"
                subtitle="Let's discuss your project and create a roadmap for success."
                primaryButton={{ text: 'Start Your Project', link: '/book-consultation' }}
                secondaryButton={{ text: 'View Case Studies', link: '/our-work' }}
                theme="blue"
                backgroundImages={[ctaImage1, ctaImage2, ctaImage3, ctaImage4]}
            />
        </main>
    );
}
