import { motion } from 'framer-motion';
import { Zap, Users, BarChart3, Shield, Palette, Smartphone } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed. No lag, no loading. Your tasks appear instantly, keeping you in flow.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Assign tasks, share boards, and sync in real-time. Everyone stays on the same page.'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Track velocity, burndown, and team performance with beautiful visual insights.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SSO, and compliance. Your data is always protected.'
    },
    {
      icon: Palette,
      title: 'Fully Customizable',
      description: 'Custom workflows, fields, and views. Make TaskHero work exactly how you need.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Native apps for iOS and Android. Manage tasks anywhere, anytime.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Everything you need to ship faster
          </h2>
          <p className="text-xl text-text-mutedLight dark:text-text-mutedDark max-w-2xl mx-auto">
            A complete toolkit designed for modern teams who value simplicity and speed.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-text-mutedLight dark:text-text-mutedDark">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
