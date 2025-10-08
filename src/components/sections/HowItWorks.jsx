import { motion } from 'framer-motion';
import { PlusCircle, Target, Rocket } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: PlusCircle,
      title: 'Add tasks',
      description: 'Create tasks in seconds. No complex forms, just pure simplicity.'
    },
    {
      icon: Target,
      title: 'Prioritize',
      description: 'Drag, drop, and organize. Focus on what matters most.'
    },
    {
      icon: Rocket,
      title: 'Ship',
      description: 'Track progress and celebrate wins. Keep the momentum going.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            How it works
          </h2>
          <p className="text-xl text-text-mutedLight dark:text-text-mutedDark max-w-2xl mx-auto">
            Three simple steps to transform how your team ships
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-accent transform -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background-light dark:bg-background-dark border-4 border-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                  {idx + 1}
                </div>

                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3 capitalize">
                  {step.title}
                </h3>
                <p className="text-text-mutedLight dark:text-text-mutedDark max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
