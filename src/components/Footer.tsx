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
                <div className="border-t border-gray-200 dark:border-gray-800"></div>

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
