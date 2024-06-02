import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import { ImageIcon, X } from 'lucide-react';
import React from 'react';

const CartItem = ({ product }: { product: Product }) => {
    const { removeItem } = useCart();
    return (
        <div className="space-y-3 py-2">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center space-x-4">
                    <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
                        <img src="/software.png" alt={product.name} className="absolute object-cover" />
                    </div>

                    <div className="flex flex-col self-start">
                        <span className="line-clamp-1 text-sm font-medium mb-1">{product.name}</span>

                        <span className="line-clamp-1 text-xs capitalize text-muted-foreground">{product.category}</span>

                        <div className="mt-4 text-xs text-red-600 hover:text-red-900">
                            <button onClick={() => removeItem(product._id)} className="flex items-center gap-0.5">
                                <X className="w-4 h-4" />
                                Remover
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-1 font-medium">
                    <span className="ml-auto line-clamp-1 text-sm">{formatPrice(product.price)}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
