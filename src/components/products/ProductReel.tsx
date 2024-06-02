import { useAPI } from '@/hooks/useAPI';
import { Link } from 'react-router-dom';
import ProductListing from './ProductListing';
import { BASE_URL } from '@/config/api-urls';

interface ProductReelProps {
    title?: string;
    subtitle?: string;
    href?: string;
}

const ProductReel = (props: ProductReelProps) => {
    const { title, subtitle, href } = props;

    const { data, isLoading } = useAPI<Product[]>(`${BASE_URL}/api/product?limit=4`);

    return (
        <section className="py-12 px-4">
            <div className="md:flex md:items-center md:justify-between mb-4">
                <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
                    {title ? <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1> : null}
                    {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
                </div>

                {href ? (
                    <Link to={href} className="hidden text-sm font-medium text-primary hover:underline md:block">
                        Explore agora <span aria-hidden="true">&rarr;</span>
                    </Link>
                ) : null}
            </div>

            <div className="relative">
                <div className="mt-6 flex items-center w-full">
                    <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                        {data?.map((product, i) => (
                            <ProductListing product={product} isLoading={isLoading} index={i} key={product._id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductReel;
