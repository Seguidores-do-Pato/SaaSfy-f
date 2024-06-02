import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ProductReel from '@/components/products/ProductReel';
import { buttonVariants } from '@/components/ui/button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.title = 'SaaSfy';
    }, []);
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
                <ProductReel title="Recém-Incluídos" href="/products" subtitle="Explore o melhor que o SaaSfy ofecere" />
            </MaxWidthWrapper>
        </>
    );
};

export default Home;
