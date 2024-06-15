import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { ShoppingCart } from 'lucide-react';
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useEffect, useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import CartItem from './CartItem';

const Cart = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const { items } = useCart();

    const itemCount = items.length;

    const cartTotal = items.reduce((total, { product }) => total + product.price, 0);

    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-1">
                <Button variant="ghost" className="flex-shrink-0">
                    <ShoppingCart className="h-6 w-6" />
                    <span className="ml-2 text-sm font-medium">{isMounted ? itemCount : 0}</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Carrinho ({itemCount})</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            <ScrollArea>
                                {items.map(({ product }) => (
                                    <CartItem product={product} key={product._id} />
                                ))}
                            </ScrollArea>
                        </div>
                        <div className="space-y-4 pr-6">
                            <Separator />
                            <div className="space-y-1.5 text-sm">
                                <div className="flex">
                                    <span className="flex-1">Total</span>
                                    <span>{formatPrice(cartTotal)}</span>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link to="/cart" className={buttonVariants({ className: 'w-full' })}>
                                        Finalizar Compra
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-0">
                        <div className="relative mb-4 h-60 w-60 text-muted-foreground" aria-hidden="true">
                            <img src="/empty-cart.png" alt="empty shopping cart image" className="w-full h-full" />
                        </div>
                        <div className="text-xl font-semibold">Seu carrinho está vazio</div>
                        <SheetTrigger asChild>
                            <Link
                                to="/products"
                                className={buttonVariants({
                                    variant: 'link',
                                    size: 'sm',
                                    className: 'text-sm text-muted-foreground'
                                })}
                            >
                                Explore e adicione ao carrinho agora!
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
