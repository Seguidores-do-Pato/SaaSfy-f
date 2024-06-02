import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Check, Shield } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useAPI } from '@/hooks/useAPI';
import { BASE_URL } from '@/config/api-urls';
import { formatPrice } from '@/lib/utils';
import ImageSlider from '@/components/products/ImageSlider';
import AddToCartButton from '@/components/products/AddToCartButton';
import ProductReel from '@/components/products/ProductReel';

type params = {
    id: string;
};

const BREADCRUMBS = [
    { id: 1, name: 'Inicio', href: '/' },
    { id: 2, name: 'Produtos', href: '/products' }
];

const Product = () => {
    const slides = [
        'https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png',
        'https://uizard.io/static/473c0ece225095e27a09412d4f1ef938/0cfa7/84f89a5abe3a18d4d3c5c672f00e76ce2943f0ca-1440x835.webp',
        'https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png',
        'https://uizard.io/static/473c0ece225095e27a09412d4f1ef938/0cfa7/84f89a5abe3a18d4d3c5c672f00e76ce2943f0ca-1440x835.webp'
    ];

    const { id } = useParams<params>();

    const { data, isLoading } = useAPI<Product>(`${BASE_URL}/api/product/${id}`);

    return (
        <MaxWidthWrapper>
            <div className="bg-white dark:bg-background">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:max-w-lg lg:self-end">
                        <ol className="flex items-center space-x-2">
                            {BREADCRUMBS.map((breadcrumb, i) => (
                                <li key={breadcrumb.href}>
                                    <div className="flex items-center text-sm">
                                        <Link to={breadcrumb.href} className="font-medium text-sm text-muted-foreground hover:text-gray-900">
                                            {breadcrumb.name}
                                        </Link>
                                        {i !== BREADCRUMBS.length - 1 ? (
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                                            >
                                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                            </svg>
                                        ) : null}
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{data?.name}</h1>
                        </div>

                        <section className="mt-4">
                            <div className="flex items-center">
                                <p className="font-medium text-gray-900 dark:text-white">{formatPrice(data?.price!)}</p>

                                <div className="ml-4 border-l text-muted-foreground border-gray-300 dark:border-gray-900 pl-4">{data?.category}</div>
                            </div>

                            <div className="mt-4 space-y-6">
                                <p className="text-base text-muted-foreground">{data?.description}</p>
                            </div>

                            <div className="mt-6 flex items-center">
                                <Check aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-primary" />
                                <p className="ml-2 text-sm text-muted-foreground">Atende aos critérios estabelecidos para a nossa excelência!</p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                        <div className="aspect-square rounded-lg">
                            <ImageSlider urls={slides} />
                        </div>
                    </div>

                    <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                        <div>
                            <div className="mt-10">
                                <AddToCartButton product={data!} />
                            </div>
                            <div className="mt-6 text-center">
                                <div className="group inline-flex text-sm text-medium">
                                    <Shield aria-hidden="true" className="mr-2 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                                    <span className="text-muted-foreground">Garantia de devolução de 30 dias</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductReel
                href="/products"
                title={`Produtos Semelhantes`}
                subtitle={`Procure produtos de alta qualidade de ${data?.category} como '${data?.name}'`}
            />
        </MaxWidthWrapper>
    );
};

export default Product;
