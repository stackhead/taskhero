import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How is TaskHero different from other task managers?',
      answer: 'TaskHero is built for speed and simplicity. We strip away the complexity and focus on what matters: helping your team ship faster. No bloated features, no steep learning curve, just pure productivity.'
    },
    {
      question: 'Can I try TaskHero for free?',
      answer: 'Yes! Our Free plan includes up to 10 tasks and basic features. For growing teams, we offer a 14-day free trial of the Pro plan with no credit card required.'
    },
    {
      question: 'How does billing work?',
      answer: 'You can choose monthly or yearly billing. Yearly plans save you 17%. You can upgrade, downgrade, or cancel anytime. No long-term contracts or commitments.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption, regular security audits, and SOC 2 compliance. Your data is backed up daily and stored in secure data centers. We take security seriously.'
    },
    {
      question: 'Can I import tasks from other tools?',
      answer: 'Yes! We support imports from Trello, Asana, Jira, and most other popular task managers. Our support team is happy to help you migrate smoothly.'
    },
    {
      question: 'Do you offer discounts for non-profits or education?',
      answer: 'Yes! We offer 50% off for non-profits, educational institutions, and open-source projects. Contact our sales team to apply.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'TaskHero integrates with Slack, GitHub, Figma, Zapier, and dozens more. Pro and Team plans include access to our API for custom integrations.'
    },
    {
      question: 'How does team collaboration work?',
      answer: 'Invite team members, assign tasks, comment in real-time, and share boards. Everyone stays synced automatically. Pro and Team plans include advanced collaboration features.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-text-mutedLight dark:text-text-mutedDark">
            Everything you need to know about TaskHero
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-text-light dark:text-text-dark pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-text-mutedLight dark:text-text-mutedDark">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
