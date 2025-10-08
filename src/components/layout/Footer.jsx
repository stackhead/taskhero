import { CheckCircle2, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Changelog', href: '#' }
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    Legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                TaskHero
              </span>
            </div>
            <p className="text-sm text-text-mutedLight dark:text-text-mutedDark mb-4 max-w-xs">
              Minimal tasks. Maximum focus. The task manager that helps teams ship faster.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary/10 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-text-mutedLight dark:text-text-mutedDark" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-text-light dark:text-text-dark mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-mutedLight dark:text-text-mutedDark hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-center text-text-mutedLight dark:text-text-mutedDark">
            © 2025 TaskHero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
