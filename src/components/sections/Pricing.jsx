import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Toggle } from '../common/Toggle';
import { pricingPlans } from '../../data/pricing';

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-text-mutedLight dark:text-text-mutedDark max-w-2xl mx-auto mb-8">
            Choose the plan that fits your team. No hidden fees.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-text-light dark:text-text-dark' : 'text-text-mutedLight dark:text-text-mutedDark'}`}>
              Monthly
            </span>
            <Toggle
              enabled={isYearly}
              onChange={setIsYearly}
              label="Toggle yearly pricing"
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-text-light dark:text-text-dark' : 'text-text-mutedLight dark:text-text-mutedDark'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge variant="success" className="ml-2">
                Save 17%
              </Badge>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="accent" className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </Badge>
                </div>
              )}

              <motion.div
                whileHover={{ y: -5 }}
                className={`h-full bg-background-light dark:bg-background-dark border-2 rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-primary shadow-xl shadow-primary/20 scale-105'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-mutedLight dark:text-text-mutedDark mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-text-light dark:text-text-dark">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-text-mutedLight dark:text-text-mutedDark">
                    /month
                  </span>
                  {isYearly && plan.price.yearly > 0 && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Billed ${plan.price.yearly * 12}/year
                    </p>
                  )}
                </div>

                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-mutedLight dark:text-text-mutedDark">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
