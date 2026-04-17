import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const plans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    buttonText: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '29',
    description: 'Best for professionals',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    buttonText: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '99',
    description: 'For teams and businesses',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    buttonText: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 px-4 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#101727] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-[#627382] max-w-2xl mx-auto text-base">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative p-8 rounded-[2rem] flex flex-col h-full transition-all duration-300",
                plan.popular 
                  ? "bg-linear text-white shadow-2xl md:scale-105 z-10" 
                  : "bg-[#F8FAFC] text-[#101727] border border-slate-100"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[#FEF3C7] text-[#92400E] text-xs font-bold rounded-full uppercase tracking-widest shadow-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={cn("text-sm mb-6", plan.popular ? "text-white/80" : "text-[#627382]")}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={cn("text-sm", plan.popular ? "text-white/60" : "text-[#627382]")}>/Month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <Check className={cn("h-5 w-5 shrink-0", plan.popular ? "text-white" : "text-[#22C55E]")} />
                    <span className={plan.popular ? "text-white/90" : "text-[#627382]"}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={cn(
                "btn w-full rounded-full h-12 min-h-0 text-base font-bold",
                plan.popular 
                  ? "bg-white text-[#4F39F6] hover:bg-slate-50 border-none shadow-lg" 
                  : "btn-primary"
              )}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
