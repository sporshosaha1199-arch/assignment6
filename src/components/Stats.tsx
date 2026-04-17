import { motion } from 'motion/react';

const stats = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Premium Tools', value: '200+' },
  { label: 'Rating', value: '4.9' },
];

export default function Stats() {
  return (
    <section className="bg-linear py-12 px-4 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center border-white/20 last:border-0 md:border-r py-6 md:py-0"
            >
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-base text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
