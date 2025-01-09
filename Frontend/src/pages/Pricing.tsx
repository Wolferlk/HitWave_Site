import { motion } from 'framer-motion';
import { Check,  Music, Mic2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: "Basic",
    icon: Music,
    price: "99",
    description: "Perfect for singles and demos",
    features: [
      "2 hours of studio time",
      "Basic mixing",
      "1 revision round",
      "Digital delivery",
      "24/7 support"
    ]
  },
  {
    name: "Professional",
    icon: Music,
    price: "299",
    description: "Ideal for EPs and professional projects",
    features: [
      "8 hours of studio time",
      "Professional mixing",
      "3 revision rounds",
      "Digital delivery",
      "24/7 priority support",
      "Mastering included",
      "Session musicians available"
    ],
    popular: true
  },
  {
    name: "Premium",
    icon: Mic2,
    price: "599",
    description: "Complete album production package",
    features: [
      "20 hours of studio time",
      "Advanced mixing & mastering",
      "Unlimited revisions",
      "Digital & physical delivery",
      "24/7 VIP support",
      "Session musicians included",
      "Music video production",
      "Marketing consultation"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your music production needs. No hidden fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground shadow-xl scale-105'
                    : 'bg-card text-card-foreground'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <plan.icon className={`w-12 h-12 mx-auto mb-4 ${
                    plan.popular ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`${
                    plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {plan.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className={`${
                      plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>/session</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className={`w-5 h-5 mr-2 flex-shrink-0 ${
                        plan.popular ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                      <span className={plan.popular ? 'text-primary-foreground/90' : ''}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                      : ''
                  }`}
                  variant={plan.popular ? 'secondary' : 'default'}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}