import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  key?: string | number;
  item: CartItemType;
  onRemove: (cartId: string) => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-4 hover:bg-white hover:shadow-md transition-all">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden">
          <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{item.name}</h4>
          <p className="text-slate-500 text-sm">${item.price}</p>
        </div>
      </div>
      <button 
        onClick={() => onRemove(item.cartId)}
        className="btn btn-ghost btn-sm text-error hover:bg-error/10 gap-2"
      >
        <Trash2 className="h-4 w-4" />
        <span className="hidden sm:inline">Remove</span>
      </button>
    </div>
  );
}
