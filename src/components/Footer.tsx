import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white pt-16 pb-10 px-4 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <a className="text-3xl font-bold text-white mb-6 block tracking-tight">DigiTools</a>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm text-base">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-slate-400 text-base">
              <li><a className="hover:text-white transition-colors cursor-pointer">Features</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Templates</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Integrations</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-slate-400 text-base">
              <li><a className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Press</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-base">
              <li><a className="hover:text-white transition-colors cursor-pointer">Documentation</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Help Center</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Community</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white">Social Links</h4>
            <div className="flex gap-3">
              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-[#0B1120]" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-[#0B1120]" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-[#0B1120]" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <a className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
            <a className="hover:text-white transition-colors cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
