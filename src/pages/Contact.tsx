import { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Maximize2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import ConsultationForm from '@/components/ui/ConsultationForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'byteflowdigiai@gmail.com', href: 'mailto:byteflowdigiai@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 6900105606', href: 'tel:+91 6900105606' },
  {
    icon: MapPin,
    label: 'Main Branch Address',
    value: 'ByteFlow, 1st Floor, Neeladri Complex, 10th Cross, 2nd Main, Sampige Rd, Malleshwaram, Bengaluru, Karnataka 560003',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.498418049618!2d77.56846507507693!3d12.99266108732483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163ec061730d%3A0x6ca78680c656667!2sMalleshwaram%2C%20Bengaluru%2C%20Karnataka%20560003!5e0!3m2!1sen!2sin!4v1704473600000!5m2!1sen!2sin",
    href: 'https://goo.gl/maps/bengaluru'
  },
  {
    icon: MapPin,
    label: 'Sub Branch Address',
    value: 'ByteFlow , 101 , 1st Floor , Guwahati Research Park , 781034',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.332349319349!2d91.6888463753599!3d26.192318077085734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a50785718765f%3A0xc6a8f3523588f72c!2sIndian%20Institute%20of%20Technology%20Guwahati!5e0!3m2!1sen!2sin!4v1704473800000!5m2!1sen!2sin",
    href: '#'
  },
];

export default function Contact() {
  const [activeMap, setActiveMap] = useState<typeof contactInfo[2] | null>(null);

  return (
    <main>
      <SEO
        title="Contact Us - Get in Touch with ByteFlow"
        description="Contact ByteFlow DigiAI for IT solutions and digital marketing services. Main office in Bengaluru, branch in Guwahati. Email: byteflowdigiai@gmail.com | Phone: +91 6900105606"
        keywords="contact ByteFlow, IT services Bengaluru, digital marketing agency contact, ByteFlow office Bengaluru, ByteFlow Guwahati"
        canonicalUrl="https://www.byteflowdigiai.com/contact"
      />
      <PageHero
        badge="Contact Us"
        title="Get in"
        titleHighlight="Touch"
        subtitle="Have a question or ready to start your project? We'd love to hear from you."
        theme="green"
        variant="contact"
      />

      <section className="py-24 bg-card relative overflow-hidden">
        {/* Decorative Map Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-grid" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold mb-6">Connect with Us</h3>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Main Branch Map Card */}
                <div
                  onClick={() => setActiveMap(contactInfo[2])}
                  className="group relative h-32 rounded-xl overflow-hidden glass border border-white/5 cursor-pointer hover:border-green-emerald/50 transition-all"
                >
                  <div className="absolute inset-0 bg-grid opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <MapPin className="w-5 h-5 text-green-emerald mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xs font-bold">Main Branch</h4>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest mt-1">Bengaluru</p>
                  </div>
                </div>

                {/* Sub Branch Map Card */}
                <div
                  onClick={() => setActiveMap(contactInfo[3])}
                  className="group relative h-32 rounded-xl overflow-hidden glass border border-white/5 cursor-pointer hover:border-green-emerald/50 transition-all"
                >
                  <div className="absolute inset-0 bg-grid opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <MapPin className="w-5 h-5 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xs font-bold">Sub Branch</h4>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest mt-1">Guwahati</p>
                  </div>
                </div>
              </div>

              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5 hover:border-green-emerald/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-emerald/20 to-green-mint/20 border border-green-emerald/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-green-emerald" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">{item.label}</div>
                    <div className="font-medium text-sm leading-relaxed mb-2">
                      {item.href && item.href !== '#' && !item.label.includes('Address') ? (
                        <a href={item.href} className="hover:text-green-emerald transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                    {item.label.includes('Address') && (
                      <button
                        onClick={() => setActiveMap(item as any)}
                        className="text-[10px] font-bold text-green-emerald flex items-center gap-1 hover:underline uppercase tracking-tighter"
                      >
                        <ExternalLink className="w-3 h-3" /> View on Map
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 p-8 rounded-3xl glass border border-white/5">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      <Dialog open={!!activeMap} onOpenChange={(open) => !open && setActiveMap(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-green-emerald/20">
          <DialogHeader className="p-6 bg-card border-b border-border">
            <DialogTitle className="flex items-center gap-2">
              <MapPin className={`w-5 h-5 ${activeMap?.label.includes('Main') ? 'text-green-emerald' : 'text-blue-400'}`} />
              {activeMap?.label} Location
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-[70vh] bg-black">
            {activeMap && (
              <iframe
                src={(activeMap as any).mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1]"
              />
            )}
          </div>
          <div className="p-4 bg-card text-center text-[10px] uppercase tracking-widest text-muted-foreground border-t border-border">
            {activeMap?.value}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
