import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const services = [
  { value: 'website', label: 'Website Building' },
  { value: 'ai-automation', label: 'AI & Automation' },
  { value: 'seo', label: 'SEO Services' },
  { value: 'social-media', label: 'Social Media Marketing' },
  { value: 'performance', label: 'Performance Marketing' },
  { value: 'growth', label: 'Growth Strategy' },
  { value: 'other', label: 'Other' },
];

export default function ConsultationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not Specified',
        service: services.find(s => s.value === formData.service)?.label || formData.service,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast({
        title: "Consultation request submitted!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-emerald to-green-mint flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-primary-foreground" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Your consultation request has been submitted successfully.
          Our team will reach out to you within 24 hours.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', email: '', company: '', service: '', message: '' });
          }}
          variant="outline"
          className="rounded-xl"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl h-12"
            maxLength={100}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl h-12"
            maxLength={255}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            className="rounded-xl h-12"
            maxLength={100}
          />
        </div>

        {/* Service */}
        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In *</Label>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
          >
            <SelectTrigger className="rounded-xl h-12">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Your Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project and goals..."
          value={formData.message}
          onChange={handleChange}
          className="rounded-xl min-h-[150px] resize-none"
          maxLength={1000}
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-royal to-green-emerald hover:opacity-90 transition-opacity"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Book Consultation
          </>
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
}
