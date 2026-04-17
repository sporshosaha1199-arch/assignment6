import { Check } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';
import { useState } from 'react';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const getTagColor = (type: string) => {
    switch (type) {
      case 'popular': return 'bg-[#E0E7FF] text-[#4F46E5]';
      case 'new': return 'bg-[#DCFCE7] text-[#166534]';
      case 'best-seller': return 'bg-[#FEF3C7] text-[#92400E]';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 group relative">
      <div className="absolute top-5 right-5">
        <span className={cn("px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider", getTagColor(product.tagType))}>
          {product.tag}
        </span>
      </div>

      <div className="w-14 h-14 rounded-full bg-[#F8FAFC] flex items-center justify-center mb-5 shadow-inner overflow-hidden p-3.5">
        <img src={product.icon} alt={product.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
      </div>
      
      <h3 className="text-xl font-bold text-[#101727] mb-2">{product.name}</h3>
      <p className="text-[#627382] text-xs mb-5 leading-relaxed line-clamp-2">{product.description}</p>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-2xl font-bold text-[#101727]">${product.price}</span>
        <span className="text-[#627382] text-xs">/{product.period === 'monthly' ? 'Mo' : 'One-Time'}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-xs text-[#627382]">
            <Check className="h-3.5 w-3.5 text-[#22C55E] shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={handleAddToCart}
        disabled={isAdded}
        className={cn(
          "btn btn-primary w-full rounded-full h-12 min-h-0 text-base font-bold transition-all duration-300",
          isAdded && "bg-green-500 border-none opacity-100"
        )}
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
}
