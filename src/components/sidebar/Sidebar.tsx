import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Settings } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { Icons } from '../Icons';
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const currentLocation = useLocation();
    return (
        <aside className="hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    to="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-gray-100 dark:bg-gray-900 text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Icons.logo className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">SaaSfy</span>
                </Link>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            to="/sell"
                            className={cn(
                                'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                                currentLocation.pathname === '/sell' ? 'text-primary' : null
                            )}
                        >
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Dashboard</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            to="/sell/my-products"
                            className={cn(
                                'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                                currentLocation.pathname === '/sell/my-products' ? 'text-primary' : null
                            )}
                        >
                            <Package className="h-5 w-5" />
                            <span className="sr-only">Meus produtos</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Meus produtos</TooltipContent>
                </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            to="/profile"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    );
};

export default Sidebar;
