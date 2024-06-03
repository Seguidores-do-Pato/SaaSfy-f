import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { cn, formatPrice } from '@/lib/utils';
import { Check, Loader2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Page = () => {
    const { items, removeItem } = useCart();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useNavigate();

    const productIds = items.map(({ product }) => product._id);

    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cartTotal = items.reduce((total, { product }) => total + product.price, 0);

    return (
        <div className="bg-white dark:bg-background">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Carrinho</h1>

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <div
                        className={cn('lg:col-span-7', {
                            'rounded-lg border-2 border-dashed border-zinc-200 p-12': isMounted && items.length === 0
                        })}
                    >
                        <h2 className="sr-only">Itens no seu carrinho</h2>

                        {isMounted && items.length === 0 ? (
                            <div className="flex h-full flex-col items-center justify-center space-y-1">
                                <div aria-hidden="true" className="relative mb-4 h-40 w-40 text-muted-foreground">
                                    <img src="/empty-cart.png" className="w-full h-full" loading="eager" alt="empty shopping cart hippo" />
                                </div>
                                <h3 className="font-semibold text-2xl">Ops! Nada para exibir por enquanto.</h3>
                                <p className="text-muted-foreground text-center"></p>
                            </div>
                        ) : null}

                        <ul
                            className={cn({
                                'divide-y divide-gray-200 border-b border-t border-gray-200 dark:border-gray-700': isMounted && items.length > 0
                            })}
                        >
                            {isMounted &&
                                items.map(({ product }) => {
                                    return (
                                        <li key={product._id} className="flex py-6 sm:py-10">
                                            <div className="flex-shrink-0">
                                                <div className="relative h-24 w-24">
                                                    <img src="/software.png" alt={product.name} className="absolute object-cover" />
                                                </div>
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <Link
                                                                    to={`/products/${product._id}`}
                                                                    className="font-medium text-gray-700 hover:text-gray-800 dark:text-zinc-200 hover:dark:text-zinc-400"
                                                                >
                                                                    {product.name}
                                                                </Link>
                                                            </h3>
                                                        </div>

                                                        <div className="mt-1 flex text-sm">
                                                            <p className="text-muted-foreground">{product.category}</p>
                                                        </div>

                                                        <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                                                            {formatPrice(product.price)}
                                                        </p>
                                                    </div>

                                                    <div className="mt-4 sm:mt-0 sm:pr-9 w-20">
                                                        <div className="absolute right-0 top-0">
                                                            <Button
                                                                aria-label="remove product"
                                                                onClick={() => removeItem(product._id)}
                                                                size="sm"
                                                                variant="destructive"
                                                            >
                                                                <X className="h-5 w-5" aria-hidden="true" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="mt-4 flex space-x-2 text-sm text-muted-foreground">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />

                                                    <span>Atende aos critérios estabelecidos para a nossa excelência!</span>
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>

                    <section className="mt-16 rounded-lg bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Resumo do pedido</h2>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-600 dark:text-gray-200">Subtotal</p>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    {isMounted ? formatPrice(cartTotal) : <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <div className="text-base font-medium text-gray-900 dark:text-white">Total do Pedido</div>
                                <div className="text-base font-medium text-gray-900 dark:text-white">
                                    {isMounted ? formatPrice(cartTotal) : <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button disabled={items.length === 0 || isLoading} onClick={() => setIsLoading(true)} className="w-full" size="lg">
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : null}
                                Checkout
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Page;
