import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Modal } from '../common/Modal';

export function Hero() {
  const [showModal, setShowModal] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const companies = ['Vercel', 'Linear', 'Notion', 'Stripe', 'Figma'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6">Trusted by 500+ teams worldwide</Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-light dark:text-text-dark mb-6 leading-tight">
            Minimal tasks.
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Maximum focus.
            </span>
          </h1>

          <p className="text-xl text-text-mutedLight dark:text-text-mutedDark max-w-2xl mx-auto mb-10">
            TaskHero helps teams ship faster with a simple, distraction-free task board.
            Stop managing tools. Start shipping products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gap-2">
              Start Free <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => setShowModal(true)}
            >
              <Play className="w-5 h-5" /> Watch Demo
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-text-mutedLight dark:text-text-mutedDark">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-lg font-semibold text-text-mutedLight dark:text-text-mutedDark opacity-60 hover:opacity-100 transition-opacity"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: useTransform(scrollY, [0, 500], [0, -50]) }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-3xl" />
          <div className="relative bg-surface-light dark:bg-surface-dark border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-slate-200 dark:bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-300 dark:border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-text-mutedLight dark:text-text-mutedDark ml-4">
                TaskHero Dashboard
              </span>
            </div>
            <div className="p-8 aspect-video bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-background-dark flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
                {['To Do', 'In Progress', 'Done'].map((status, idx) => (
                  <div key={status} className="space-y-3">
                    <h3 className="text-sm font-semibold text-text-mutedLight dark:text-text-mutedDark uppercase tracking-wide">{status}</h3>
                    {[1, 2, 3].slice(0, 3 - idx).map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (idx * 0.1) + (i * 0.1) }}
                        className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-1/2" />
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Watch Demo"
      >
        <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center">
          <p className="text-text-mutedLight dark:text-text-mutedDark">Demo video would appear here</p>
        </div>
      </Modal>
    </section>
  );
}
