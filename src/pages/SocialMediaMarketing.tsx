import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Share2, Users, TrendingUp, MessageCircle, Camera,
    ArrowRight, CheckCircle, Heart, Target, Zap
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CTASection from '@/components/ui/CTASection';
import socialMediaAdvantageImage from '@/assets/social-media-advantage.jpg';
import ctaSocial1 from '@/assets/cta-social-1.jpg';
import ctaSocial2 from '@/assets/cta-social-2.jpg';
import ctaSocial3 from '@/assets/cta-social-3.jpg';
import ctaSocial4 from '@/assets/cta-social-4.jpg';

const features = [
    { title: 'Social Strategy', description: 'Custom social media strategies aligned with your brand goals', icon: Target },
    { title: 'Content Creation', description: 'Engaging posts, stories, and reels that resonate with your audience', icon: Camera },
    { title: 'Community Management', description: '24/7 engagement and customer support across platforms', icon: MessageCircle },
    { title: 'Influencer Marketing', description: 'Connect with the right influencers to amplify your reach', icon: Users },
    { title: 'Paid Social Ads', description: 'ROI-focused campaigns on Meta, LinkedIn, Twitter, and more', icon: TrendingUp },
    { title: 'Analytics & Reporting', description: 'Track growth, engagement, and conversions in real-time', icon: Zap },
];

const platforms = [
    { name: 'Facebook & Instagram', description: 'Build communities and drive conversions with Meta\'s powerful ad platform' },
    { name: 'LinkedIn', description: 'B2B networking, thought leadership, and professional brand building' },
    { name: 'Twitter/X', description: 'Real-time engagement, trending conversations, and brand voice' },
    { name: 'TikTok', description: 'Viral content creation for Gen Z and millennial audiences' },
    { name: 'YouTube', description: 'Long-form video content, tutorials, and brand storytelling' },
    { name: 'Pinterest', description: 'Visual discovery and e-commerce growth' },
];

const benefits = [
    'Increase brand awareness and reach',
    'Build authentic relationships with your audience',
    'Drive traffic and conversions from social channels',
    'Stay ahead of trends and algorithm changes',
    'Create viral-worthy content consistently',
    'Leverage user-generated content for trust',
];

export default function SocialMediaMarketing() {
    return (
        <main>
            <SEO
                title="Social Media Marketing - Build Engaged Communities"
                description="Expert social media marketing services across all major platforms. Create viral content, build engaged communities, and drive conversions through strategic social media management."
                keywords="social media marketing, social media management, Facebook marketing, Instagram marketing, LinkedIn marketing, viral content"
                canonicalUrl="https://www.byteflowdigiai.com/digital-marketing/social-media-marketing"
            />
            <PageHero
                badge="Social Media Marketing"
                title="Grow Your Brand with"
                titleHighlight="Social Media"
                subtitle="Build engaged communities, create viral content, and drive real business results across all major social platforms."
                theme="green"
                variant="social-media"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-consultation">
                        <Button size="lg" className="rounded-xl bg-gradient-to-r from-green-emerald to-green-mint hover:opacity-90 transition-opacity group">
                            Get Social Media Audit
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="rounded-xl">
                            View Case Studies
                        </Button>
                    </Link>
                </div>
            </PageHero>

            {/* Features */}
            <section className="py-24 bg-gradient-green-radial">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Complete Social Media <span className="text-gradient-green">Solutions</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            From strategy to execution, we handle every aspect of your social media presence.
                        </p>
                    </div>
                    <FeatureGrid features={features} theme="green" />
                </div>
            </section>

            {/* Platforms */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            We Master <span className="text-gradient-green">Every Platform</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Platform-specific strategies that maximize your ROI on each channel.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl glass transition-all duration-500"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <Share2 className="w-5 h-5 text-green-emerald mt-0.5 flex-shrink-0" />
                                    <h3 className="font-display text-lg font-semibold">{platform.name}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{platform.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-gradient-green-radial">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="rounded-3xl bg-gradient-to-br from-green-deep to-green-emerald p-1 transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)]">
                                <div className="w-full rounded-3xl overflow-hidden glass flex items-center justify-center bg-black">
                                    <img
                                        src={socialMediaAdvantageImage}
                                        alt="The Social Media Advantage"
                                        className="w-full h-auto object-contain"
                                        style={{ filter: 'grayscale(100%) sepia(100%) hue-rotate(90deg) saturate(200%) brightness(0.9)' }}
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-mint/30 rounded-full blur-2xl transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                The Social Media <span className="text-gradient-green">Advantage</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Transform your social media from a broadcast channel into a powerful growth engine.
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
                                        <CheckCircle className="w-5 h-5 text-green-emerald mt-0.5 flex-shrink-0" />
                                        <span className="text-foreground">{benefit}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Go Viral?"
                subtitle="Let's create a social media strategy that turns followers into customers."
                primaryButton={{ text: 'Get Started', link: '/book-consultation' }}
                secondaryButton={{ text: 'View Portfolio', link: '/our-work' }}
                theme="green"
                backgroundImages={[ctaSocial1, ctaSocial2, ctaSocial3, ctaSocial4]}
                imageClassName="object-cover object-center opacity-70 mix-blend-luminosity"
            />
        </main>
    );
}
