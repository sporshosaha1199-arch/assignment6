import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: '/assets/user.png',
  },
  {
    number: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: '/assets/package.png',
  },
  {
    number: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: '/assets/rocket.png',
  },
];

export default function Steps() {
  return (
    <section className="py-16 px-4 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#101727] mb-4">Get Started In 3 Steps</h2>
          <p className="text-[#627382] max-w-2xl mx-auto text-base">Start using premium digital tools in minutes, not hours.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center"
            >
              <div className="absolute top-6 right-6 w-8 h-8 bg-linear text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                {step.number}
              </div>
              <div className="w-20 h-20 rounded-full bg-[#F3F0FF] flex items-center justify-center mb-6 overflow-hidden p-5">
                <img src={step.icon} alt={step.title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-bold text-[#101727] mb-3">{step.title}</h3>
              <p className="text-[#627382] leading-relaxed max-w-[220px] text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
