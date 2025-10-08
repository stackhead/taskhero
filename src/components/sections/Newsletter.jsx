import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-3xl p-12 text-center backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Stay in the loop
          </h2>
          <p className="text-xl text-text-mutedLight dark:text-text-mutedDark mb-8 max-w-2xl mx-auto">
            Get product updates, productivity tips, and exclusive offers delivered to your inbox.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">Thanks for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary text-text-light dark:text-text-dark placeholder-text-mutedLight dark:placeholder-text-mutedDark"
                  disabled={status === 'loading'}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className="gap-2"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
              )}
              <p className="text-xs text-text-mutedLight dark:text-text-mutedDark mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
