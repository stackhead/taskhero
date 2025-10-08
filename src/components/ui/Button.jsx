import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/40 focus:ring-primary',
    secondary: 'border-2 border-primary text-primary dark:text-primary-light hover:bg-primary/10 focus:ring-primary',
    ghost: 'text-text-dark dark:text-text-light hover:bg-surface-dark/50 dark:hover:bg-surface-light/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
