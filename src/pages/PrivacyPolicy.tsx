import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';

export default function PrivacyPolicy() {
    return (
        <main>
            <SEO
                title="Privacy Policy"
                description="ByteFlow DigiAI Privacy Policy. Learn how we collect, use, and protect your personal information."
                keywords="privacy policy, data protection, ByteFlow privacy, GDPR compliance"
                canonicalUrl="https://byteflowdigiai.com/privacy-policy"
            />
            <PageHero
                badge="Legal"
                title="Privacy"
                titleHighlight="Policy"
                subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
                theme="blue"
                variant="about"
            />

            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="p-8 md:p-12 rounded-3xl glass border border-white/5 bg-black/20 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_50px_hsl(var(--blue-glow)/0.4)] hover:border-blue-aqua/50">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <p className="text-muted-foreground mb-6">
                                            <strong>Effective Date:</strong> January 10, 2026
                                        </p>
                                        <p className="text-muted-foreground mb-6">
                                            <strong>Last Updated:</strong> January 10, 2026
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">1. Introduction</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            ByteFlow DigiAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website byteflowdigiai.com and use our services.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">2. Information We Collect</h2>
                                        <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            We may collect personal information that you voluntarily provide to us when you:
                                        </p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                            <li>Fill out contact forms or consultation requests</li>
                                            <li>Subscribe to our newsletter</li>
                                            <li>Request information about our services</li>
                                            <li>Communicate with us via email or phone</li>
                                        </ul>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            This information may include:
                                        </p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                            <li>Name</li>
                                            <li>Email address</li>
                                            <li>Phone number</li>
                                            <li>Company name</li>
                                            <li>Job title</li>
                                            <li>Any other information you choose to provide</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            When you visit our website, we may automatically collect certain information about your device, including:
                                        </p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                            <li>IP address</li>
                                            <li>Browser type and version</li>
                                            <li>Operating system</li>
                                            <li>Pages visited and time spent on pages</li>
                                            <li>Referring website</li>
                                            <li>Device information</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">3. How We Use Your Information</h2>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            We use the information we collect to:
                                        </p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                            <li>Respond to your inquiries and provide customer support</li>
                                            <li>Send you information about our services</li>
                                            <li>Process consultation requests</li>
                                            <li>Improve our website and services</li>
                                            <li>Send marketing communications (with your consent)</li>
                                            <li>Analyze website usage and trends</li>
                                            <li>Comply with legal obligations</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">4. Cookies and Tracking Technologies</h2>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">5. How We Share Your Information</h2>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                                        </p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                            <li>Service providers who assist us in operating our website and conducting our business</li>
                                            <li>Professional advisors such as lawyers and accountants</li>
                                            <li>Law enforcement or regulatory authorities when required by law</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">6. Data Security</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">7. Your Rights</h2>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            You have the right to:
                                        </p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                            <li>Access your personal information</li>
                                            <li>Correct inaccurate information</li>
                                            <li>Request deletion of your information</li>
                                            <li>Opt-out of marketing communications</li>
                                            <li>Object to processing of your information</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">8. Third-Party Links</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read their privacy policies.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">9. Children's Privacy</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">10. Changes to This Privacy Policy</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-display font-bold mb-4">11. Contact Us</h2>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            If you have any questions about this Privacy Policy, please contact us:
                                        </p>
                                        <div className="bg-muted/50 p-6 rounded-xl border border-border">
                                            <p className="text-foreground mb-2"><strong>ByteFlow DigiAI</strong></p>
                                            <p className="text-muted-foreground mb-2">Email: byteflowdigiai@gmail.com</p>
                                            <p className="text-muted-foreground mb-2">Phone: +91 6900105606</p>
                                            <p className="text-muted-foreground">
                                                Address: 1st Floor, Neeladri Complex, 10th Cross, 2nd Main, Sampige Rd, Malleshwaram, Bengaluru, Karnataka 560003
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
