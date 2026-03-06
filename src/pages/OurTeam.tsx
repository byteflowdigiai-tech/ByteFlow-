import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code2, TrendingUp, Zap, Users, Sparkles, Globe
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import CTASection from '@/components/ui/CTASection';
import ctaAi from '@/assets/cta-ai.png';
import ctaBusiness from '@/assets/cta-business.png';
import ctaMarketing from '@/assets/cta-marketing.png';
import ctaWeb from '@/assets/cta-web.png';

// ─── Department Data ─────────────────────────────────────────────────────────

interface DepartmentData {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
    skills: string[];
}

const departments: DepartmentData[] = [
    {
        id: 'technology',
        name: 'Technology',
        description: 'Our Technology division is the engine behind Byteflow DigiAi. Comprising experts in Artificial Intelligence, Data Engineering, and Full Stack Development, this team builds robust, scalable web applications and intelligent systems. They turn complex data into actionable insights and craft responsive front-ends that deliver delightful user experiences.',
        icon: Code2,
        gradient: 'from-blue-royal via-blue-cyan to-cyan-400',
        skills: ['AI & Machine Learning', 'Data Pipelines & LLMs', 'Full-Stack Web Development', 'System Architecture & UI/UX'],
    },
    {
        id: 'marketing',
        name: 'Marketing',
        description: 'The Marketing division ensures your digital presence reaches its full potential. From tailored growth strategies to advanced performance marketing, this dynamic team leverages deep industry knowledge and data-driven insights to elevate your brand, drive high-quality traffic, and maximize long-term conversions.',
        icon: TrendingUp,
        gradient: 'from-purple-600 via-rose-500 to-orange-400',
        skills: ['Growth Strategy', 'Performance Marketing', 'SEO Optimization', 'Brand Acceleration'],
    }
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const teamStats = [
    { value: '2', label: 'Core Departments', color: 'text-blue-cyan' },
    { value: '10+', label: 'Specialized Skills', color: 'text-green-emerald' },
    { value: '5+', label: 'Projects Delivered', color: 'text-purple-400' },
    { value: '1+', label: 'Years Combined Exp.', color: 'text-rose-400' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function OurTeam() {

    return (
        <main>
            <SEO
                title="Our Team | Meet the Byteflow DigiAi Experts"
                description="Meet the passionate team behind Byteflow DigiAi — technology innovators and marketing experts working together to deliver world-class digital solutions."
                keywords="Byteflow DigiAi team, digital agency team Guwahati, IT and AI team, SEO experts Assam, digital marketing team"
                canonicalUrl="https://www.byteflowdigiai.com/our-team"
            />

            {/* ── Hero ── */}
            <PageHero
                badge="The Framework Behind the Magic"
                title="Discover Our"
                titleHighlight="Core Departments"
                subtitle="A unified framework composed of technology experts and marketing strategists — united by one mission: to make your business thrive in the digital world."
                theme="blue"
                variant="about"
            />

            {/* ── Stats Strip ── */}
            <section className="py-16 bg-card border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamStats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className={`font-display text-4xl md:text-5xl font-bold mb-2 ${s.color}`}>
                                    {s.value}
                                </div>
                                <div className="text-muted-foreground text-sm">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Departments Section ── */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-blue-radial opacity-30" />
                <div className="absolute inset-0 bg-grid opacity-20" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Our <span className="text-gradient-blue">Core Departments</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We bring together specialized talent across technology and marketing to build solutions that not only work perfectly but also reach the right audience.
                        </p>
                    </motion.div>

                    {/* Departments Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {departments.map((dept, index) => (
                            <DepartmentCard key={dept.id} dept={dept} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Culture Section ── */}
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
                            Why <span className="text-gradient-mixed">Join Our Team?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We foster a culture of innovation, ownership, and continuous growth. Here's what makes Byteflow DigiAi a great place to build your career.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {culturePerks.map((perk, i) => (
                            <motion.div
                                key={perk.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="p-6 rounded-2xl glass border border-white/5 hover:border-blue-cyan/30 transition-all group"
                            >
                                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${perk.gradient} bg-opacity-20`}>
                                    <perk.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-display font-semibold text-lg mb-2">{perk.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <CTASection
                title="Want to Join Our Team?"
                subtitle="We're always looking for passionate people to grow with us. Drop us a line!"
                primaryButton={{ text: 'Send Us a Message', link: '/contact' }}
                secondaryButton={{ text: 'Our Work', link: '/our-work' }}
                backgroundImages={[ctaAi, ctaBusiness, ctaMarketing, ctaWeb]}
                theme="mixed"
            />
        </main>
    );
}

// ─── Department Card Sub-component ────────────────────────────────────────────
function DepartmentCard({ dept, index }: { dept: DepartmentData; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="group relative rounded-3xl glass border border-white/5 hover:border-white/10 transition-all overflow-hidden flex flex-col h-full"
        >
            {/* Top gradient bar */}
            <div className={`h-2 w-full bg-gradient-to-r ${dept.gradient}`} />

            {/* Glow on hover */}
            <motion.div
                animate={{ opacity: hovered ? 0.08 : 0 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} pointer-events-none`}
            />

            <div className="p-8 md:p-10 relative z-10 flex flex-col flex-grow">
                {/* Header: Icon + Name */}
                <div className="flex items-center gap-5 mb-6">
                    <motion.div
                        animate={{ scale: hovered ? 1.05 : 1, rotate: hovered ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center shadow-lg shrink-0`}
                    >
                        <dept.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-display font-bold text-3xl mb-0">{dept.name}</h3>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {dept.description}
                </p>

                {/* Core Focus / Skills */}
                <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Core Focus</h4>
                    <div className="flex flex-col gap-3">
                        {dept.skills.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${dept.gradient}`} />
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-white/90 transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Culture Perks Data ───────────────────────────────────────────────────────
const culturePerks = [
    {
        title: 'Remote-Friendly Culture',
        desc: 'Work from anywhere. We trust our team to deliver results, not just clock hours.',
        icon: Globe,
        gradient: 'from-blue-royal to-blue-cyan',
    },
    {
        title: 'Continuous Learning',
        desc: 'Access to premium courses, conferences, and mentorship programs to keep growing.',
        icon: Sparkles,
        gradient: 'from-purple-600 to-blue-royal',
    },
    {
        title: 'Ownership & Impact',
        desc: 'Every team member owns their work and sees the direct impact on real businesses.',
        icon: Zap,
        gradient: 'from-green-emerald to-green-mint',
    },
    {
        title: 'Collaborative Team',
        desc: 'A flat hierarchy where every voice matters and ideas are celebrated openly.',
        icon: Users,
        gradient: 'from-teal-500 to-green-emerald',
    },
    {
        title: 'Exciting Projects',
        desc: 'Work on diverse, challenging projects across industries — never the same day twice.',
        icon: Code2,
        gradient: 'from-rose-500 to-orange-400',
    },
    {
        title: 'Performance Rewards',
        desc: 'Competitive pay, performance bonuses, and recognition for going above and beyond.',
        icon: TrendingUp,
        gradient: 'from-amber-500 to-rose-400',
    },
];
