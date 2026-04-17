import { Play } from 'lucide-react';
import { motion } from 'motion/react';

interface BannerProps {
  onExploreClick?: () => void;
}

export default function Banner({ onExploreClick }: BannerProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-16 lg:pb-24 px-4 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#6366F1] text-xs font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#6366F1]"></span>
              New: AI-Powered Tools Available
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1E293B] leading-[1.2] mb-6 tracking-tight">
              Supercharge Your <br className="hidden sm:block" />
              Digital Workflow
            </h1>
            <p className="text-lg text-slate-500 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={onExploreClick}
                className="btn btn-primary rounded-full px-8 h-12 min-h-0 text-base font-bold"
              >
                Explore Products
              </button>
              <button className="btn btn-outline border-primary text-primary hover:bg-primary/5 rounded-full px-8 h-12 min-h-0 text-base font-bold gap-3">
                <img src="/assets/Play.png" alt="Play" className="h-5 w-5" referrerPolicy="no-referrer" />
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl max-w-lg">
              <img 
                src="/assets/banner.png" 
                alt="Digital Interface Interaction" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
