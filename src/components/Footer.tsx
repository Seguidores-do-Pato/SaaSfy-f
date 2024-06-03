import MaxWidthWrapper from './MaxWidthWrapper';
import { useLocation } from 'react-router-dom';
import { Icons } from './Icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentLocation = useLocation();
    const { pathname } = currentLocation;

    const pathsToMinimize = ['/verify-email', '/sign-up', '/sign-in'];
    return (
        <footer className="bg-white dark:bg-background flex-grow-0">
            <MaxWidthWrapper>
                <div className="border-t border-gray-200 dark:border-gray-800">
                    {pathsToMinimize.includes(pathname) ? null : (
                        <div className="pb-8 pt-16">
                            <div className="flex justify-center">
                                <Icons.logo className="h-12 w-auto" />
                            </div>
                        </div>
                    )}

                    {pathsToMinimize.includes(pathname) ? null : (
                        <div>
                            <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
                                <div className="absolute inset-0 overflow-hidden rounded-lg">
                                    <div
                                        aria-hidden="true"
                                        className="absolute bg-zinc-50 dark:bg-gray-900 inset-0 bg-gradient-to-br bg-opacity-90"
                                    />
                                </div>

                                <div className="text-center relative mx-auto max-w-sm">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Seja um vendedor!</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Se quiser vender softwares de alta qualidade, você pode fazer isso em minutos.{' '}
                                        <Link to="/sign-in" className="whitespace-nowrap font-medium text-primary hover:underline">
                                            Comece agora &rarr;
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="py-10 md:flex md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
                    </div>

                    <div className="mt-4 flex items-center justify-center md:mt-0">
                        <div className="flex space-x-8">
                            <Link to="#" className="text-sm text-muted-foreground hover:text-gray-800 hover:dark:text-gray-300">
                                Termos de uso
                            </Link>
                            <Link to="#" className="text-sm text-muted-foreground hover:text-gray-800 hover:dark:text-gray-300">
                                Politica de privacidade
                            </Link>
                            <Link to="#" className="text-sm text-muted-foreground hover:text-gray-800 hover:dark:text-gray-300">
                                Entre em contato
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;
