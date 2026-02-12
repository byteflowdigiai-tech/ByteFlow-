import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Target, TrendingUp, Paintbrush } from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/ui/CTASection';
import ctaAi from '@/assets/cta-ai.png';
import ctaMarketing from '@/assets/cta-marketing.png';
import ctaWeb from '@/assets/cta-web.png';
import ctaBusiness from '@/assets/cta-business.png';

const localServices = [
    {
        title: 'Website Design in Guwahati',
        description: 'Custom, high-performance websites built for Guwahati businesses. From corporate sites to e-commerce stores.',
        icon: Paintbrush,
        link: '/guwahati/web-design',
        theme: 'blue' as const,
    },
    {
        title: 'Local SEO Services',
        description: 'Dominate Guwahati search results. We help local businesses rank #1 for "near me" and service-based keywords.',
        icon: Target,
        link: '/guwahati/seo',
        theme: 'green' as const,
    },
    {
        title: 'Digital Marketing',
        description: 'Full-service marketing for Assam brands. specialized in social media branding and performance ads.',
        icon: TrendingUp,
        link: '/guwahati/digital-marketing',
        theme: 'green' as const,
    },
    {
        title: 'IT Solutions',
        description: 'Enterprise-grade software and automation solutions for tech-forward companies in the Northeast.',
        icon: Code2,
        link: '/guwahati/it-solutions',
        theme: 'blue' as const,
    },
];

export default function GuwahatiHub() {
    return (
        <main>
            <SEO
                title="ByteFlow DigiAI Guwahati | Best IT Solution & Digital Marketing Agency"
                description="ByteFlow DigiAI is Guwahati's premier IT and Digital Marketing agency based in Guwahati Research Park. We offer web design, SEO, and software solutions for businesses in Assam."
                keywords="digital marketing agency guwahati, seo company guwahati, web design company guwahati, website development company guwahati, ai automation company guwahati, it solutions company guwahati, best digital marketing agency guwahati, top digital marketing agency guwahati, byteflow digiai, byteflow digiai guwahati, digital marketing agency in guwahati assam, it company in guwahati assam"
                canonicalUrl="https://www.byteflowdigiai.com/guwahati"
                schemaType="LocalBusiness"
            />
            <PageHero
                badge="Guwahati's Tech Partner"
                title="Digital Growth for"
                titleHighlight="Guwahati Businesses"
                subtitle="We help businesses in Guwahati and across Assam scale with world-class IT solutions, website design, and data-driven marketing."
                theme="blue"
                variant="default"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-consultation">
                        <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-royal to-blue-cyan hover:opacity-90 transition-opacity group">
                            Free Local Consultation
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="rounded-xl">
                            Visit Our Office
                        </Button>
                    </Link>
                </div>
            </PageHero>

            {/* Local Context Section */}
            <section className="py-20 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Local Expertise, <span className="text-gradient-blue">Global Standards</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Located at the <strong>Guwahati Research Park (IIT Guwahati)</strong>, we understand the local market dynamics of Assam while delivering solutions that meet international standards. Whether you are a startup in Ganeshguri or an enterprise in Dispur, we are your local technology partners.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-gradient-blue-radial relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Our Services in <span className="text-gradient-mixed">Guwahati</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {localServices.map((service, index) => (
                            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Trust/Location */}
            <section className="py-20 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                Visit Our <span className="text-gradient-green">Guwahati Office</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                We believe in building face-to-face relationships. Come share a cup of tea with us and let's discuss how we can transform your business.
                            </p>
                            <div className="space-y-4 text-muted-foreground">
                                <p className="flex items-center gap-2">
                                    <span className="font-bold text-foreground">Address:</span>
                                    ByteFlow DigiAI, 101, 1st Floor, Guwahati Research Park, 781034
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="font-bold text-foreground">Phone:</span>
                                    +91 6900105606
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="font-bold text-foreground">Serving Areas:</span>
                                    Guwahati, Dispur, Shillong, Jorhat, Tezpur, and all of Northeast India.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link to="/contact">
                                    <Button variant="secondary">Get Directions</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="h-[400px] w-full rounded-2xl overflow-hidden glass border border-white/10 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.332349319349!2d91.6888463753599!3d26.192318077085734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a50785718765f%3A0xc6a8f3523588f72c!2sIndian%20Institute%20of%20Technology%20Guwahati!5e0!3m2!1sen!2sin!4v1704473800000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[0.2] contrast-[1.1]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Scale Your Guwahati Business?"
                subtitle="Partner with the leading local experts in IT and Digital Marketing."
                primaryButton={{ text: 'Book Free Consultation', link: '/book-consultation' }}
                secondaryButton={{ text: 'View Portfolio', link: '/our-work' }}
                backgroundImages={[ctaAi, ctaMarketing, ctaWeb, ctaBusiness]}
            />
        </main>
    );
}
