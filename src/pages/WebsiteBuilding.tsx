import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2, Smartphone, Gauge, Shield, Paintbrush,
  ArrowRight, CheckCircle, Layers, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import techStackImage from '@/assets/tech-stack.png';
import PageHero from '@/components/ui/PageHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CTASection from '@/components/ui/CTASection';
import ctaAi from '@/assets/cta-ai.png';
import ctaMarketing from '@/assets/cta-marketing.png';
import ctaWeb from '@/assets/cta-web.png';
import ctaBusiness from '@/assets/cta-business.png';
import portElysee from '@/assets/portfolio-elysee.png';
import portBloom from '@/assets/portfolio-bloom.png';
import portAurum from '@/assets/portfolio-aurum.png';
import portLuxe from '@/assets/portfolio-luxebelle.png';

const features = [
  { title: 'Responsive Design', description: 'Pixel-perfect on all devices and screen sizes', icon: Smartphone },
  { title: 'Lightning Fast', description: 'Optimized for speed with sub-second load times', icon: Gauge },
  { title: 'SEO Optimized', description: 'Built with search engines in mind from day one', icon: Layers },
  { title: 'Secure & Reliable', description: 'Enterprise-grade security protocols', icon: Shield },
  { title: 'Custom UI/UX', description: 'Unique designs that reflect your brand', icon: Paintbrush },
  { title: 'Easy to Manage', description: 'Intuitive CMS for content updates', icon: Zap },
];

const techStack = [
  'React / Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'AWS / Vercel',
];

const process = [
  { step: '01', title: 'Discovery', description: 'Understanding your goals, audience, and requirements' },
  { step: '02', title: 'Design', description: 'Creating wireframes and high-fidelity mockups' },
  { step: '03', title: 'Development', description: 'Building your website with clean, scalable code' },
  { step: '04', title: 'Launch', description: 'Testing, optimization, and deployment' },
];

const TechHotspot = ({ top, left, width, height, label }: { top: string, left: string, width: string, height: string, label: string }) => (
  <motion.div
    className="absolute cursor-pointer"
    style={{ top, left, width, height }}
    initial="initial"
    whileHover="hover"
  >
    <motion.div
      variants={{
        initial: { opacity: 0, y: 10, scale: 0.8 },
        hover: { opacity: 1, y: 0, scale: 1 }
      }}
      transition={{ duration: 0.2 }}
      className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap z-50 pointer-events-none"
    >
      {label}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45 border-r border-b border-white/10" />
    </motion.div>
    <div className="w-full h-full rounded-full bg-white/0 hover:bg-white/10 transition-colors duration-300" />
  </motion.div>
);

export default function WebsiteBuilding() {
  return (
    <main>
      <PageHero
        badge="Website Building"
        title="Stunning Websites That"
        titleHighlight="Convert"
        subtitle="We build high-performance, beautifully designed websites that engage users and drive business results."
        theme="blue"
        variant="website-building"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation">
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-royal to-blue-cyan hover:opacity-90 transition-opacity group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="rounded-xl">
              View Portfolio
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Features */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What You <span className="text-gradient-blue">Get</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every website we build is crafted with precision and packed with features.
            </p>
          </div>
          <FeatureGrid features={features} theme="blue" />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-blue-radial">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-blue">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that delivers exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl glass"
              >
                <div className="text-4xl font-display font-bold text-blue-cyan/30 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Modern <span className="text-gradient-blue">Tech Stack</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We use the latest technologies to ensure your website is fast, secure,
                and ready for the future.
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-blue-royal/10 text-blue-cyan font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-video rounded-2xl overflow-hidden glass shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] relative">
                <img
                  src={techStackImage}
                  alt="Modern Tech Stack - React, Next.js, TypeScript"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/40 to-transparent pointer-events-none" />

                {/* Interactive Hotspots Layer */}
                <div className="absolute inset-0 z-10">
                  {/* Next.js (Center) */}
                  <TechHotspot top="30%" left="42%" width="16%" height="40%" label="Next.js" />

                  {/* React (Top Left) */}
                  <TechHotspot top="10%" left="22%" width="14%" height="25%" label="React" />

                  {/* TypeScript (Top Right) */}
                  <TechHotspot top="10%" left="64%" width="14%" height="25%" label="TypeScript" />

                  {/* Tailwind (Left) */}
                  <TechHotspot top="40%" left="8%" width="14%" height="25%" label="Tailwind CSS" />

                  {/* Node.js (Right) */}
                  <TechHotspot top="40%" left="78%" width="14%" height="25%" label="Node.js" />

                  {/* PostgreSQL (Bottom Left) */}
                  <TechHotspot top="65%" left="25%" width="14%" height="25%" label="PostgreSQL" />

                  {/* Vercel (Bottom Right) */}
                  <TechHotspot top="65%" left="60%" width="14%" height="25%" label="Vercel" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-cyan/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Your Dream Website"
        subtitle="Get a custom quote for your project in 24 hours."
        primaryButton={{ text: 'Get Started', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Our Work', link: '/our-work' }}
        theme="blue"
        backgroundImages={[portElysee, portBloom, portAurum, portLuxe]}
      />
    </main>
  );
}
