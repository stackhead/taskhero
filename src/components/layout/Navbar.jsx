import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../common/ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              TaskHero
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-mutedLight dark:text-text-mutedDark hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <Button size="sm">Start Free</Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-surface-dark dark:bg-surface-light/10 border border-slate-800 dark:border-slate-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-surface-dark"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-text-mutedLight dark:text-text-mutedDark hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full" size="sm">Start Free</Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
