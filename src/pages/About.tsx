import { motion } from 'framer-motion';
import { Users, Target, Award, Rocket } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import CTASection from '@/components/ui/CTASection';
import ctaAi from '@/assets/cta-ai.png';
import ctaMarketing from '@/assets/cta-marketing.png';
import ctaWeb from '@/assets/cta-web.png';
import ctaBusiness from '@/assets/cta-business.png';
import logoFull from '@/assets/logo-full.jpg';

const values = [
  { icon: Target, title: 'Results-Driven', description: 'Every decision is guided by measurable outcomes and business growth' },
  { icon: Users, title: 'Client-Centric', description: 'Your vision leads our process, ensuring your success is our success' },
  { icon: Award, title: 'Excellence', description: 'We maintain the highest standards in code quality and creative design' },
  { icon: Rocket, title: 'Customization', description: 'Fully tailored websites, posters, and marketing assets to fit your brand' },
];

export default function About() {
  return (
    <main>
      <SEO
        title="About Us - Your Partner in Innovation"
        description="Byteflow offers a comprehensive suite of IT and Automation Solutions alongside Digital Media Marketing. We create high-impact posters, manage social media, and run high-conversion ad campaigns."
        keywords="about ByteFlow, IT automation, digital media marketing, social media management, ad campaigns, web development company"
        canonicalUrl="https://byteflowdigiai.com/about"
      />
      <PageHero
        badge="About ByteFlow DigiAI"
        title="Your Partner in"
        titleHighlight="Innovation"
        subtitle="Byteflow offers a comprehensive suite of IT and Automation Solutions alongside Digital Media Marketing. We specialize in creating high-impact posters, managing social media presences, and running high-conversion ad campaigns."
        theme="blue"
        variant="about"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Byteflow, we believe in the power of digital synergy. We provide end-to-end IT & AI solutions and advanced automation that streamline your operations. Our expert marketing team handles everything from social media management to ad creation, ensuring your brand stands out. Whether you need a custom-built website or eye-catching posters for your next campaign, we give you the tools to customize every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl glass transition-colors active:bg-muted/30"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-royal/20 to-green-emerald/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <value.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Great?"
        subtitle="Let's discuss how our IT & AI solutions and digital marketing can transform your business."
        primaryButton={{ text: 'Start Your Journey', link: '/book-consultation' }}
        secondaryButton={{ text: 'View Our Work', link: '/our-work' }}
        backgroundImages={[logoFull, ctaBusiness, ctaAi, ctaWeb, ctaMarketing]}
      />
    </main>
  );
}
