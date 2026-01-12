import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import itAurum from '@/assets/it-case-aurum.png';
import itAssamTea from '@/assets/it-case-assam-tea.png';
import itBloomGift from '@/assets/it-case-bloom-gift.png';
import itVendGenius from '@/assets/it-case-vendgenius.png';
import itElysee from '@/assets/it-case-elysee.png';
import digitalCase1 from '@/assets/digital-solutions-case-1.jpg';
import digitalCase2 from '@/assets/digital-solutions-case-2.jpg';
import digitalCase3 from '@/assets/digital-solutions-case-3.jpg';

// Mock Data for Projects
const projects = [
    {
        id: 1,
        category: 'IT & AI Solutions',
        title: 'Aurum Jewelry E-commerce',
        description: 'A premium, high-converting e-commerce platform for a luxury jewelry brand, featuring intricate product galleries and secure checkout.',
        image: itAurum,
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
        outcome: 'Enhanced brand perception and 20% increase in average ticket size'
    },
    {
        id: 2,
        category: 'IT & AI Solutions',
        title: 'Assam Tea Marketplace',
        description: 'A direct-to-consumer marketplace for authentic Assam teas, focusing on regional heritage and subscription models.',
        image: itAssamTea,
        technologies: ['React', 'Node.js', 'HTML'],
        outcome: 'Connected 50+ garden estates directly to global consumers'
    },
    {
        id: 3,
        category: 'IT & AI Solutions',
        title: 'Bloom & Gift Portal',
        description: 'Handcrafted floral and gift delivery platform with real-time inventory management across multiple locations.',
        image: itBloomGift,
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
        outcome: '99% on-time delivery rate during peak holidays'
    },
    {
        id: 4,
        category: 'IT & AI Solutions',
        title: 'VendGenius IoT Platform',
        description: 'A revolutionary automated fresh juice vending machine management interface with real-time telemetry and analytics.',
        image: itVendGenius,
        technologies: ['React', 'Node.js', 'HTML'],
        outcome: 'Automated 100% of inventory replenishments'
    },
    {
        id: 5,
        category: 'IT & AI Solutions',
        title: 'Élysée Fashion Boutique',
        description: 'High-end fashion boutique website with emphasis on timeless elegance and minimalist UI/UX design.',
        image: itElysee,
        technologies: ['MongoDB', 'React', 'HTML'],
        outcome: 'Elevated brand image and 40% growth in international inquiries'
    },
    {
        id: 6,
        category: 'Digital Solutions',
        title: 'AI Bakery Visuals',
        description: 'Advanced AI-generated culinary posters and posters for The Golden Crumb, using machine learning to create hyper-realistic, mouth-watering marketing assets.',
        image: digitalCase1,
        technologies: ['Generative AI', 'Midjourney', 'Creative Direction'],
        outcome: 'Reduced content production costs by 70%'
    },
    {
        id: 7,
        category: 'Digital Solutions',
        title: 'Elysian Jewels: AI Luxury',
        description: 'Luxury jewelry advertisement campaign crafted using AI image synthesis, blending high-end elegance with algorithmic precision.',
        image: digitalCase2,
        technologies: ['AI Image Synthesis', 'Luxury Branding', 'Prompt Engineering'],
        outcome: 'Launched high-end campaign in 48 hours'
    },
    {
        id: 8,
        category: 'Digital Solutions',
        title: 'Fashion Fusion AI',
        description: 'A groundbreaking fashion poster series where AI blends global styles with traditional crafts, featuring synthetic models and environments.',
        image: digitalCase3,
        technologies: ['Stable Diffusion', 'Concept Art', 'AI Strategy'],
        outcome: 'Viral reach through AI-tech innovation'
    }
];

export default function OurWork() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const itProjects = projects.filter(p => p.category === 'IT & AI Solutions');
    const digitalProjects = projects.filter(p => p.category === 'Digital Solutions');

    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Our Work - Portfolio & Case Studies"
                description="Explore ByteFlow's portfolio of successful IT solutions and digital marketing campaigns. See how we've helped businesses transform digitally and achieve measurable growth."
                keywords="ByteFlow portfolio, IT projects, digital marketing case studies, web development portfolio, successful campaigns"
                canonicalUrl="https://byteflowdigiai.com/our-work"
            />
            <PageHero
                title="Our"
                titleHighlight="Work"
                subtitle="Gallery"
                theme="blue"
                variant="work"
                badge="Portfolio"
            />

            <div className="container mx-auto px-4 py-16 space-y-24">

                {/* IT & AI Solutions Section */}
                <section>
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            IT & AI <span className="text-gradient-blue">Solutions</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl italic flex items-center gap-2">
                            Transforming businesses through robust software architecture and innovative engineering.
                            <span className="text-[10px] not-italic bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full uppercase tracking-tighter font-bold">Visuals represent homepage designs</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {itProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                className={`group relative rounded-3xl overflow-hidden cursor-pointer h-auto md:aspect-auto md:h-[300px] ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileTap={{ scale: 0.98 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-white/80 line-clamp-2 text-sm">{project.description}</p>
                                    <div className="mt-4 flex gap-2 flex-wrap">
                                        {project.technologies.slice(0, 2).map(tech => (
                                            <Badge key={tech} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">{tech}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Digital Solutions Section */}
                <section>
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Digital <span className="text-gradient-green">Solutions</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Driving growth and engagement through data-driven digital strategies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {digitalProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                className={`group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto md:h-[300px] ${i === 1 ? 'md:col-span-2' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileTap={{ scale: 0.98 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-white/80 line-clamp-2 text-sm">{project.description}</p>
                                    <div className="mt-4 flex gap-2 flex-wrap">
                                        {project.technologies.slice(0, 2).map(tech => (
                                            <Badge key={tech} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">{tech}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>

            {/* Project Details Modal */}
            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-none">
                    {selectedProject && (
                        <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
                            <div className="w-full relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto object-contain"
                                />
                                <div className="py-1.5 bg-secondary/30 text-center border-b border-border">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Homepage Preview</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden pointer-events-none" />
                            </div>
                            <div className="w-full p-6 md:p-8 flex flex-col">
                                <DialogHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className={selectedProject.category === 'IT & AI Solutions' ? 'text-blue-500 border-blue-500/20 bg-blue-500/10' : 'text-green-500 border-green-500/20 bg-green-500/10'}>
                                            {selectedProject.category}
                                        </Badge>
                                    </div>
                                    <DialogTitle className="text-2xl md:text-3xl font-display font-bold mb-4">{selectedProject.title}</DialogTitle>
                                </DialogHeader>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">About The Project</h4>
                                        <DialogDescription className="text-base text-foreground">
                                            {selectedProject.description}
                                        </DialogDescription>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Outcome</h4>
                                        <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                                            <p className="font-medium">{selectedProject.outcome}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map(tech => (
                                                <Badge key={tech} variant="secondary">{tech}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </main>
    );
}
