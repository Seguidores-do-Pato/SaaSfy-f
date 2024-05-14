import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ProductReel from '@/components/products/ProductReel';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Potencialize seu negócio com o poder do <span className="text-primary">SaaS.</span>
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                        Bem vindo ao SaaSfy. Nossa missão é garantir que cada solução atenda aos mais altos padrões de excelência.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link to="/products" className={buttonVariants()}>
                            Veja Nossa Seleção &rarr;
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
            <section className="border-t bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-black h-full">
                <ProductReel title="Recém-Incluídos" href="/products" />
            </section>
        </>
    );
};

export default Home;
