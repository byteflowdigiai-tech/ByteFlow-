import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  theme: 'blue' | 'green';
  delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, link, theme, delay = 0 }: ServiceCardProps) {
  const isBlue = theme === 'blue';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={link} className="group block h-full">
        <div className={`relative h-full p-8 rounded-2xl glass transition-all duration-500 overflow-hidden`}>
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isBlue
            ? 'bg-gradient-to-br from-blue-royal/10 to-blue-cyan/5'
            : 'bg-gradient-to-br from-green-emerald/10 to-green-mint/5'
            }`} />

          {/* Icon */}
          <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${isBlue
            ? 'bg-gradient-to-br from-blue-royal to-blue-cyan'
            : 'bg-gradient-to-br from-green-emerald to-green-mint'
            }`}>
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>

          {/* Content */}
          <div className="relative">
            <h3 className={`font-display text-xl font-semibold mb-3 transition-colors ${isBlue ? 'group-hover:text-blue-cyan' : 'group-hover:text-green-emerald'
              }`}>
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {description}
            </p>
            <span className={`inline-flex items-center text-sm font-medium transition-all ${isBlue ? 'text-blue-cyan' : 'text-green-emerald'
              }`}>
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Decorative corner */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity ${isBlue ? 'bg-blue-cyan' : 'bg-green-mint'
            }`} />
        </div>
      </Link>
    </motion.div>
  );
}
