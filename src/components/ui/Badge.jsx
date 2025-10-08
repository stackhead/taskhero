import clsx from 'clsx';

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-primary/10 text-primary border border-primary/20',
    success: 'bg-green-500/10 text-green-500 border border-green-500/20',
    accent: 'bg-accent/10 text-accent border border-accent/20'
  };

  return (
    <span className={clsx(
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
