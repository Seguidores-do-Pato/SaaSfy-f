import { useEffect, useState } from 'react';
import ProductPlaceholder from './ProductPlaceholder';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface ProductListingProps {
    product: Product | null;
    index: number;
    isLoading: boolean;
}

const ProductListing = ({ index, product, isLoading }: ProductListingProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const router = useNavigate();

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
            <Card>
                <CardHeader className="space-y-2">
                    <CardTitle className="text-gray-900 dark:text-white">{product.name}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">{product.version}</CardDescription>
                    <Separator />
                </CardHeader>
                <CardContent>
                    <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => router(`/products/${product._id}`)}>
                        Veja mais
                    </Button>
                </CardFooter>
            </Card>
        );
    }
};

export default ProductListing;
