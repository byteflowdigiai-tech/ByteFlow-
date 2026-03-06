import { motion } from 'framer-motion';
import {
  Code2, TrendingUp, Zap, Shield, Users, BarChart3,
  Globe, Rocket, Target, Award, Clock, CheckCircle, Share2
} from 'lucide-react';
import SEO from '@/components/SEO';
import Counter from '@/components/ui/Counter';
import Hero from '@/components/ui/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/ui/CTASection';
import ctaAi from '@/assets/cta-ai.png';
import ctaMarketing from '@/assets/cta-marketing.png';
import ctaWeb from '@/assets/cta-web.png';
import ctaBusiness from '@/assets/cta-business.png';

const itServices = [
  {
    title: 'Custom Website Development',
    description: 'Best website development company in guwahati. We build high-performance, custom websites for businesses to scale faster.',
    icon: Code2,
    link: '/it-solutions/website-building',
    theme: 'blue' as const,
  },
  {
    title: 'Business Process Automation',
    description: 'AI automation company in guwahati providing business process automation services to streamline operations and boost growth.',
    icon: Zap,
    link: '/it-solutions/ai-automation',
    theme: 'blue' as const,
  },
];

const marketingServices = [
  {
    title: 'Local SEO Optimization',
    description: 'Expert SEO company in guwahati helping local businesses rank #1 on Google with data-driven SEO services.',
    icon: Target,
    link: '/digital-marketing/seo',
    theme: 'green' as const,
  },
  {
    title: 'Google Ads & Meta Ads Management',
    description: 'Top digital marketing agency in guwahati specializing in performance marketing and paid ads for lead generation.',
    icon: TrendingUp,
    link: '/digital-marketing/performance-marketing',
    theme: 'green' as const,
  },
  {
    title: 'Lead Generation Strategies',
    description: 'Comprehensive lead generation agency services in guwahati to turn your social media marketing into sales.',
    icon: Rocket,
    link: '/digital-marketing/growth-strategy',
    theme: 'green' as const,
  },
  {
    title: 'Conversion Optimization',
    description: 'Optimize your online marketing presence with our conversion-focused growth strategies.',
    icon: Share2,
    link: '/digital-marketing/social-media-marketing',
    theme: 'green' as const,
  },
];

const stats = [
  { value: '5+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Industries Served' },
  { value: '24/7', label: 'Support Available' },
];

const whyChooseUs = [
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security protocols protect your data' },
  { icon: Clock, title: 'Fast Delivery', description: 'Agile methodologies ensure rapid deployment' },
  { icon: Users, title: 'Expert Team', description: 'Dedicated professionals focused on your growth' },
  { icon: Award, title: 'Proven Results', description: 'Track record of measurable business impact' },
];

export default function Index() {
  return (
    <main>
      <SEO
        title="Digital Marketing Agency in Guwahati | SEO, Web Design & AI Automation – Byteflow DigiAi"
        description="Byteflow DigiAi is a leading digital marketing agency in Guwahati offering SEO, website development, AI automation, social media marketing, and performance marketing to grow your business and generate leads."
        keywords="digital marketing agency guwahati, seo company guwahati, web design company guwahati, website development guwahati, ai automation guwahati, social media marketing guwahati, performance marketing guwahati, digital marketing services guwahati, seo services guwahati, best digital marketing agency guwahati"
        schemaType="LocalBusiness"
        faq={[
          {
            question: "What services does Byteflow DigiAi provide in Guwahati?",
            answer: "As the best digital marketing agency in guwahati, we provide SEO services, website development, AI automation, and social media marketing to help businesses in Assam grow."
          },
          {
            question: "Why choose Byteflow DigiAi as your SEO company in Guwahati?",
            answer: "Byteflow DigiAi is a top-rated seo company in guwahati with a proven track record of ranking local businesses on the first page of Google."
          },
          {
            question: "Does your company provide website development in Guwahati?",
            answer: "Yes, we are a leading website development company in guwahati specializing in custom, high-performance business websites and e-commerce solutions."
          }
        ]}
      />
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-mixed mb-2">
                  <Counter value={stat.value} delay={index * 0.2} />
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT & AI Solutions Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-blue-radial opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-blue-cyan mb-4">
              AI Automation & IT Solutions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              AI Automation <span className="text-gradient-blue">Services for Business Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              As a leading website development company in guwahati, we deliver scalable
              digital solutions and ai automation company in guwahati services that drive
              measurable transformation for your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {itServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green-radial opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-green-emerald mb-4">
              Digital Marketing Agency
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-green">Digital Marketing Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Being a top-rated digital marketing agency in guwahati, we offer result-oriented
              seo company in guwahati strategies, social media marketing guwahati services, and
              performance marketing guwahati for sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {marketingServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient-mixed">Byteflow DigiAi</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We are recognized as the best digital marketing agency in guwahati, combining
              technical excellence with strategic thinking to deliver exceptional leads
              and growth for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl transition-colors hover:bg-muted/30 active:bg-muted/50"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-royal/10 to-green-emerald/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Best Digital Marketing Agency in Guwahati"
        subtitle="Experience the power of expert SEO, website development company in guwahati services, and AI automation to transform your business today."
        primaryButton={{ text: 'Book a Consultation', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Our Work', link: '/our-work' }}
        backgroundImages={[ctaAi, ctaMarketing, ctaWeb, ctaBusiness]}
      />
    </main>
  );
}
