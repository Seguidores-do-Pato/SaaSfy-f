import { Icons } from '../Icons';
import { Link } from 'react-router-dom';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Cart from '../Cart';
import { useAuth } from '@/contexts/auth-context';
import { buttonVariants } from '../ui/button';
import { ToggleTheme } from '../ToggleTheme';
import NavMenu from './NavMenu';
import NavAccount from './NavAccount';

const Narbar = () => {
    const { User } = useAuth();
    return (
        <div className="sticky z-50 h-14 inset-x-0 top-0 w-full">
            <header className="relative">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200 dark:border-gray-800">
                        <div className="flex h-16 items-center">
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/" className="flex items-center gap-2">
                                    <Icons.logo className="w-10 h-10" />
                                    <h2 className="text-xl font-semibold underline">SaaSfy</h2>
                                </Link>
                            </div>

                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-center">
                                <NavMenu />
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <ToggleTheme />
                                    </div>
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart />
                                    </div>
                                    {User ? <span className="h-6 w-px bg-gray-200 dark:bg-gray-300" aria-hidden="true" /> : null}
                                    {User ? null : (
                                        <div className="flex lg:ml-6 ">
                                            <span className="h-6 w-px bg-gray-200 dark:bg-gray-300" aria-hidden="true" />
                                        </div>
                                    )}

                                    {/* Login button section */}
                                    {User ? null : (
                                        <Link to="/sign-in" className={buttonVariants({ variant: 'ghost' })}>
                                            Entrar
                                        </Link>
                                    )}
                                    {/* separator */}
                                    {User ? null : <span className="h-6 w-px bg-gray-200" aria-hidden="true" />}
                                    {/* account section (actions login or register) */}
                                    {User ? (
                                        <>
                                            <NavAccount />
                                        </>
                                    ) : (
                                        <Link to="/sign-up" className={buttonVariants({ variant: 'ghost' })}>
                                            Criar Conta
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
};

export default Narbar;
