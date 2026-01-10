import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';

export default function TermsConditions() {
    return (
        <main>
            <SEO
                title="Terms & Conditions"
                description="ByteFlow DigiAI Terms and Conditions. Read our terms of service for using our website and services."
                keywords="terms and conditions, terms of service, ByteFlow terms, legal terms"
                canonicalUrl="https://byteflowdigiai.com/terms-conditions"
            />
            <PageHero
                badge="Legal"
                title="Terms &"
                titleHighlight="Conditions"
                subtitle="Please read these terms and conditions carefully before using our services."
                theme="green"
                variant="default"
            />

            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
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
                                <h2 className="text-2xl font-display font-bold mb-4">1. Agreement to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    By accessing or using the ByteFlow DigiAI website (byteflowdigiai.com) and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or use our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">2. Services</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    ByteFlow DigiAI provides:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>IT solutions and custom software development</li>
                                    <li>Website building and web development services</li>
                                    <li>AI automation and intelligent business solutions</li>
                                    <li>Digital marketing services including SEO, social media marketing, and performance marketing</li>
                                    <li>Growth strategy and business consulting</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">3. Use of Website</h2>
                                <h3 className="text-xl font-semibold mb-3">3.1 Permitted Use</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    You may use our website for lawful purposes only. You agree not to:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Infringe upon intellectual property rights</li>
                                    <li>Transmit harmful code or malware</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Interfere with the proper functioning of the website</li>
                                    <li>Use automated systems to access the website without permission</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">4. Intellectual Property</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of ByteFlow DigiAI and is protected by copyright, trademark, and other intellectual property laws.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">5. Service Agreements</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Specific services provided by ByteFlow DigiAI will be governed by separate service agreements. These Terms and Conditions apply in addition to any service-specific agreements.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">6. Payment Terms</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Payment terms for services will be specified in individual service agreements. Generally:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Payments are due as specified in the service agreement</li>
                                    <li>Late payments may incur additional fees</li>
                                    <li>All fees are non-refundable unless otherwise stated</li>
                                    <li>Prices are subject to change with notice</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">7. Confidentiality</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Both parties agree to maintain confidentiality of any proprietary or sensitive information shared during the course of our business relationship. This obligation survives the termination of any agreement.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">8. Limitation of Liability</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    To the fullest extent permitted by law, ByteFlow DigiAI shall not be liable for:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Indirect, incidental, or consequential damages</li>
                                    <li>Loss of profits, data, or business opportunities</li>
                                    <li>Damages arising from use or inability to use our services</li>
                                    <li>Third-party actions or content</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">9. Warranties and Disclaimers</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>The website will be uninterrupted or error-free</li>
                                    <li>Defects will be corrected</li>
                                    <li>The website is free of viruses or harmful components</li>
                                    <li>Results from using our services will meet your requirements</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">10. Indemnification</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You agree to indemnify and hold ByteFlow DigiAI harmless from any claims, damages, losses, or expenses arising from your use of our website or services, or your violation of these Terms and Conditions.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">11. Termination</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We reserve the right to terminate or suspend access to our website and services immediately, without prior notice, for any reason, including breach of these Terms and Conditions.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">12. Governing Law</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">13. Changes to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes acceptance of the modified terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">14. Severability</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold mb-4">15. Contact Information</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    For questions about these Terms and Conditions, please contact us:
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

                            <div className="mt-12 pt-8 border-t border-border">
                                <p className="text-sm text-muted-foreground italic">
                                    By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
