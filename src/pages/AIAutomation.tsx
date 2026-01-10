import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, Bot, Workflow, Brain, MessageSquare,
  ArrowRight, CheckCircle, Cog, LineChart
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/ui/PageHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CTASection from '@/components/ui/CTASection';
import aiAdvantageInfographic from '@/assets/ai-advantage-infographic.jpg';
import ctaAi1 from '@/assets/cta-ai-1.jpg';
import ctaAi2 from '@/assets/cta-ai-2.jpg';
import ctaAi3 from '@/assets/cta-ai-3.jpg';
import ctaAi4 from '@/assets/cta-ai-4.jpg';

const features = [
  { title: 'Process Automation', description: 'Automate repetitive tasks and free up your team', icon: Workflow },
  { title: 'AI Chatbots', description: 'Intelligent customer support that never sleeps', icon: MessageSquare },
  { title: 'Machine Learning', description: 'Predictive analytics for smarter decisions', icon: Brain },
  { title: 'Workflow Integration', description: 'Connect all your tools seamlessly', icon: Cog },
  { title: 'Real-time Analytics', description: 'Monitor performance with live dashboards', icon: LineChart },
  { title: 'Custom AI Solutions', description: 'Tailored AI models for your industry', icon: Bot },
];

const useCases = [
  {
    title: 'Customer Service',
    description: '24/7 AI-powered support that reduces response times by 90%',
    stat: '90%',
    statLabel: 'Faster Response',
  },
  {
    title: 'Data Processing',
    description: 'Automated data entry and validation with 99.9% accuracy',
    stat: '99.9%',
    statLabel: 'Accuracy',
  },
  {
    title: 'Lead Generation',
    description: 'AI-driven lead scoring and qualification',
    stat: '3x',
    statLabel: 'More Leads',
  },
  {
    title: 'Document Processing',
    description: 'Intelligent extraction and classification of documents',
    stat: '80%',
    statLabel: 'Time Saved',
  },
];

const benefits = [
  'Reduce operational costs by up to 60%',
  'Free your team for high-value work',
  'Scale operations without adding headcount',
  'Improve accuracy and consistency',
  'Get insights from your data in real-time',
  'Integrate with existing systems easily',
];

export default function AIAutomation() {
  return (
    <main>
      <SEO
        title="AI & Automation - Intelligent Business Solutions"
        description="Transform your business with AI-powered automation. Streamline operations, reduce costs, and boost productivity with ByteFlow's intelligent automation solutions."
        keywords="AI automation, artificial intelligence, business automation, intelligent automation, workflow automation, AI solutions"
        canonicalUrl="https://byteflowdigiai.com/it-solutions/ai-automation"
      />
      <PageHero
        badge="AI & Automation"
        title="Supercharge Your Business with"
        titleHighlight="AI"
        subtitle="Harness the power of artificial intelligence to automate workflows, reduce costs, and unlock new opportunities for growth."
        theme="blue"
        variant="ai"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation">
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-royal to-blue-cyan hover:opacity-90 transition-opacity group">
              Explore AI Solutions
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

      {/* Features */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              AI-Powered <span className="text-gradient-blue">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From chatbots to machine learning, we deliver intelligent solutions.
            </p>
          </div>
          <FeatureGrid features={features} theme="blue" />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-blue-radial">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Real <span className="text-gradient-blue">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See how AI automation transforms business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold">{useCase.title}</h3>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold text-blue-cyan">{useCase.stat}</div>
                    <div className="text-sm text-muted-foreground">{useCase.statLabel}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-blue-deep to-blue-royal p-1 transition-all duration-500 group-hover:shadow-[0_0_50px_-12px_rgba(42,219,255,0.4)] group-hover:scale-[1.01]">
                <div className="w-full h-full rounded-3xl overflow-hidden glass p-4 flex items-center justify-center">
                  <img
                    src={aiAdvantageInfographic}
                    alt="The AI Advantage Infographic"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-cyan/30 rounded-full blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:scale-110" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                The <span className="text-gradient-blue">AI Advantage</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Companies leveraging AI automation see dramatic improvements in efficiency,
                accuracy, and customer satisfaction.
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
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Automate?"
        subtitle="Discover how AI can transform your operations. Book a free consultation today."
        primaryButton={{ text: 'Get Started', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Case Studies', link: '/our-work' }}
        theme="blue"
        backgroundImages={[ctaAi1, ctaAi2, ctaAi3, ctaAi4]}
      />
    </main>
  );
}
