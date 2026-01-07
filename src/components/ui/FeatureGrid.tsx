import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  features: Feature[];
  theme: 'blue' | 'green';
}

export default function FeatureGrid({ features, theme }: FeatureGridProps) {
  const isBlue = theme === 'blue';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`group relative p-6 rounded-2xl glass overflow-hidden transition-all duration-500`}
        >
          {/* Background glow */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity ${isBlue ? 'bg-blue-cyan' : 'bg-green-mint'
            }`} />

          {/* Icon */}
          <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${isBlue
            ? 'bg-gradient-to-br from-blue-royal/20 to-blue-cyan/20'
            : 'bg-gradient-to-br from-green-emerald/20 to-green-mint/20'
            }`}>
            <feature.icon className={`w-6 h-6 ${isBlue ? 'text-blue-cyan' : 'text-green-emerald'}`} />
          </div>

          {/* Content */}
          <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
