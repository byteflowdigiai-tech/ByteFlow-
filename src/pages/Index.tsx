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
    title: 'Website Building',
    description: 'Custom, high-performance websites built with modern technologies for scalability and speed.',
    icon: Code2,
    link: '/it-solutions/website-building',
    theme: 'blue' as const,
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent automation solutions that streamline operations and boost productivity.',
    icon: Zap,
    link: '/it-solutions/ai-automation',
    theme: 'blue' as const,
  },
];

const marketingServices = [
  {
    title: 'SEO Services',
    description: 'Data-driven SEO strategies to boost your organic visibility and search rankings.',
    icon: Target,
    link: '/digital-marketing/seo',
    theme: 'green' as const,
  },
  {
    title: 'Performance Marketing',
    description: 'ROI-focused campaigns across Google, Meta, and emerging platforms.',
    icon: TrendingUp,
    link: '/digital-marketing/performance-marketing',
    theme: 'green' as const,
  },
  {
    title: 'Growth Strategy',
    description: 'Comprehensive growth frameworks to scale your brand sustainably.',
    icon: Rocket,
    link: '/digital-marketing/growth-strategy',
    theme: 'green' as const,
  },
  {
    title: 'Social Media Marketing',
    description: 'Build engaged communities and create viral content across all major platforms.',
    icon: Share2,
    link: '/digital-marketing/social-media-marketing',
    theme: 'green' as const,
  },
];

const stats = [
  { value: '35+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Industries Served' },
  { value: '24/7', label: 'Support Available' },
];

const whyChooseUs = [
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security protocols protect your data' },
  { icon: Clock, title: 'Fast Delivery', description: 'Agile methodologies ensure rapid deployment' },
  { icon: Users, title: 'Expert Team', description: 'Seasoned professionals with 10+ years experience' },
  { icon: Award, title: 'Proven Results', description: 'Track record of measurable business impact' },
];

export default function Index() {
  return (
    <main>
      <SEO
        title="ByteFlow DigiAI | Top IT Solutions & Digital Marketing Agency"
        description="ByteFlow DigiAI offers premium IT solutions, AI automation, and ROI-driven digital marketing. Scale your business with our expertise in web development and brand growth."
        keywords="ByteFlow DigiAI, best IT company Guwahati, digital marketing agency Guwahati, AI automation solutions, website building Guwahati, software development India, ByteFlow, DigiAI technology, growth strategy Guwahati, performance marketing India"
        schemaType="LocalBusiness"
        faq={[
          {
            question: "What services does ByteFlow DigiAI provide?",
            answer: "ByteFlow DigiAI provides a comprehensive range of services including Custom Website Building, AI & Automation solutions, SEO, Performance Marketing, and Social Media Growth strategies."
          },
          {
            question: "Where is ByteFlow DigiAI located?",
            answer: "We have our main branch in Bengaluru, Karnataka, and a dedicated sub-branch in Guwahati, Assam, enabling us to serve clients across India and globally."
          },
          {
            question: "How can AI & Automation help my business?",
            answer: "AI and Automation can streamline your operations, reduce manual errors, and boost productivity by automating repetitive tasks, allowing your team to focus on high-value strategic work."
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
              IT & AI Solutions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Build <span className="text-gradient-blue">Future-Ready</span> Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              From custom web development to AI-powered automation, we deliver scalable
              solutions that drive digital transformation.
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
              Digital Marketing
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Accelerate <span className="text-gradient-green">Sustainable Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Data-driven marketing strategies that deliver measurable results and
              sustainable business growth.
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
              Why Businesses <span className="text-gradient-mixed">Choose ByteFlow DigiAI</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine technical excellence with strategic thinking to deliver
              exceptional results for our clients.
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
        title="Ready to Transform Your Business?"
        subtitle="Let's discuss how ByteFlow DigiAI can accelerate your digital growth and innovation."
        primaryButton={{ text: 'Book a Consultation', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Our Work', link: '/our-work' }}
        backgroundImages={[ctaAi, ctaMarketing, ctaWeb, ctaBusiness]}
      />
    </main>
  );
}
