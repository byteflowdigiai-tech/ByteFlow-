import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import ConsultationForm from '@/components/ui/ConsultationForm';

export default function BookConsultation() {
  return (
    <main>
      <SEO
        title="Book a Free Consultation - Start Your Digital Journey"
        description="Schedule a free consultation with ByteFlow DigiAI experts. Discuss your IT solutions, digital marketing needs, and get a customized strategy for your business growth."
        keywords="free consultation, digital marketing consultation, IT services consultation, book consultation ByteFlow, business growth strategy"
        canonicalUrl="https://www.byteflowdigiai.com/book-consultation"
      />
      <PageHero
        badge="Book a Consultation"
        title="Let's Discuss Your"
        titleHighlight="Project"
        subtitle="Share your goals with us and we'll get back to you within 24 hours with a customized plan."
        theme="blue"
        variant="consultation"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl glass"
            >
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
