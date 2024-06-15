import { useEffect, useState } from 'react';
import ProductPlaceholder from './ProductPlaceholder';
import { Link } from 'react-router-dom';
import { cn, formatPrice } from '@/lib/utils';
import ImageSlider from './ImageSlider';

interface ProductListingProps {
    product: Product | null;
    index: number;
    isLoading: boolean;
}

const ProductListing = ({ index, product, isLoading }: ProductListingProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const urls = product?.images || ['/software.png', '/software.png'];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isLoading) {
                setIsVisible(true);
            }
        }, index * 75);

        return () => clearTimeout(timer);
    }, [index]);

    if (!product || !isVisible) return <ProductPlaceholder />;

    if (isVisible && product) {
        return (
            <Link
                className={cn('invisible h-full w-full cursor-pointer group/main', {
                    'visible animate-in fade-in-5': isVisible
                })}
                to={`/products/${product._id}`}
            >
                <div className="flex flex-col w-full">
                    <ImageSlider urls={urls} />

                    <h3 className="mt-4 font-semibold text-base ">{product.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
                    <p className="mt-1 font-medium text-sm ">{formatPrice(product.price)}</p>
                </div>
            </Link>
        );
    }
};

export default ProductListing;
