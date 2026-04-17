import { ShoppingCart, Menu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onProductsClick: () => void;
  onPricingClick: () => void;
  onFeaturesClick: () => void;
  onFAQClick: () => void;
}

export default function Navbar({ cartCount, onCartClick, onProductsClick, onPricingClick, onFeaturesClick, onFAQClick }: NavbarProps) {
  return (
    <div className="navbar bg-white sticky top-0 z-50 px-4 lg:px-20 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
            <Menu className="h-6 w-6" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-2xl w-52 border border-slate-100">
            <li><a className="py-3 font-medium text-slate-700 active:!bg-slate-100 focus:!bg-slate-100" onClick={onProductsClick}>Products</a></li>
            <li><a className="py-3 font-medium text-slate-700 active:!bg-slate-100 focus:!bg-slate-100" onClick={onFeaturesClick}>Features</a></li>
            <li><a className="py-3 font-medium text-slate-700 active:!bg-slate-100 focus:!bg-slate-100" onClick={onPricingClick}>Pricing</a></li>
            <li><a className="py-3 font-medium text-slate-700 active:!bg-slate-100 focus:!bg-slate-100">Testimonials</a></li>
            <li><a className="py-3 font-medium text-slate-700 active:!bg-slate-100 focus:!bg-slate-100" onClick={onFAQClick}>FAQ</a></li>
          </ul>
        </div>
        <a className="text-2xl sm:text-3xl font-bold text-primary cursor-pointer tracking-tight" onClick={onProductsClick}>DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium text-slate-600">
          <li><a className="hover:text-primary active:!bg-transparent focus:!bg-transparent transition-colors cursor-pointer" onClick={onProductsClick}>Products</a></li>
          <li><a className="hover:text-primary active:!bg-transparent focus:!bg-transparent transition-colors cursor-pointer" onClick={onFeaturesClick}>Features</a></li>
          <li><a className="hover:text-primary active:!bg-transparent focus:!bg-transparent transition-colors cursor-pointer" onClick={onPricingClick}>Pricing</a></li>
          <li><a className="hover:text-primary active:!bg-transparent focus:!bg-transparent transition-colors cursor-pointer">Testimonials</a></li>
          <li><a className="hover:text-primary active:!bg-transparent focus:!bg-transparent transition-colors cursor-pointer" onClick={onFAQClick}>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-3 sm:gap-6">
        <button className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors" onClick={onCartClick}>
          <div className="indicator">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="badge badge-xs indicator-item badge-primary">{cartCount}</span>
            )}
          </div>
        </button>
        <button className="hidden md:inline-flex items-center gap-2 font-medium text-slate-700 hover:text-primary transition-colors">
          <img src="/assets/user.png" alt="User" className="h-5 w-5" referrerPolicy="no-referrer" />
          Login
        </button>
        <button 
          onClick={onProductsClick}
          className="btn btn-primary rounded-full px-4 sm:px-8 text-white font-bold h-10 sm:h-12 min-h-0 text-sm sm:text-base"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
