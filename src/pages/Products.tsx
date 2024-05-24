import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ProductReel from '@/components/products/ProductReel';
import { Separator } from '@/components/ui/separator';

const Products = () => {
    return (
        <MaxWidthWrapper>
            <ProductReel title="Destaques" />
            <Separator />
            <ProductReel title="Recem-chegados" subtitle="Explore o melhor que o SaaSfy tem a oferecer!" />
        </MaxWidthWrapper>
    );
};

export default Products;
