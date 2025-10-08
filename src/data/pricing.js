export const pricingPlans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for individuals getting started',
    features: [
      'Up to 10 tasks',
      'Basic task board',
      'Mobile app access',
      'Email support',
      '1 workspace'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: { monthly: 12, yearly: 10 },
    description: 'For professionals and growing teams',
    features: [
      'Unlimited tasks',
      'Advanced task board',
      'Priority support',
      'Team collaboration',
      'Custom workflows',
      'Advanced analytics',
      'Integrations',
      'Up to 10 workspaces'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Team',
    price: { monthly: 29, yearly: 24 },
    description: 'For large teams and organizations',
    features: [
      'Everything in Pro',
      'Unlimited workspaces',
      'Advanced permissions',
      'Custom branding',
      'Dedicated support',
      'SSO & security',
      'API access',
      'Custom integrations'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];
