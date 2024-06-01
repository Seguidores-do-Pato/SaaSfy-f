import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Carousel from "../components/Carousel"
import { BadgePlus } from 'lucide-react';
import { Button } from '../components/ui/button';

const Product = () => {

    const slides = [
        "https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png",
        "https://uizard.io/static/473c0ece225095e27a09412d4f1ef938/0cfa7/84f89a5abe3a18d4d3c5c672f00e76ce2943f0ca-1440x835.webp",
        "https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png",
        "https://uizard.io/static/473c0ece225095e27a09412d4f1ef938/0cfa7/84f89a5abe3a18d4d3c5c672f00e76ce2943f0ca-1440x835.webp"
    ]

    return (
        <MaxWidthWrapper>
            <div className='mt-16 mx-auto flex flex-col lg:flex-row justify-center max-w-5xl'>
                <div className='flex flex-col gap-6 lg:w-3/6'>
                    <Carousel slides={slides}></Carousel>
                </div>

                <div className='lg:ml-10 lg:w-3/6 flex flex-col'>
                    <div>
                        <span className=' text-primary font-semibold'>Software</span>
                        <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mt-5 mb-5'>Name</h1>
                    </div>

                    <div className='mb-7'>
                        <p className='text-gray-900 dark:text-white'>
                            <span className='text-primary font-bold'>Descrição:</span> Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                        </p>
                    </div>

                    <div className='mt-8 flex flex-row items-center justify-center gap-12'>
                        <h6 className='text-2xl font-semibold text-right'>R$ 199.00</h6>
                        <Button className="bg-primary text-white font-semibold py-4 px-16 rounded-xl h-full">
                            <BadgePlus className='inline' />
                            <span className="ml-2 text-lg font-medium font-semibold">Add to cart</span>
                        </Button>
                    </div>
                </div>
            </div>


        </MaxWidthWrapper>
    );
};

export default Product;