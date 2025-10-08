import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Toggle({ enabled, onChange, label }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={clsx(
        'relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        enabled ? 'bg-gradient-to-r from-primary to-accent' : 'bg-slate-300 dark:bg-slate-700'
      )}
      aria-label={label}
    >
      <motion.span
        layout
        className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
        animate={{ x: enabled ? 28 : 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );
}
