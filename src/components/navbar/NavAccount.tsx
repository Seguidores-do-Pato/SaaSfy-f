import {} from '@radix-ui/react-dropdown-menu';
import { LayoutDashboardIcon, LogOutIcon, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useAuth } from '@/contexts/auth-context';
import {
    DropdownMenuTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuLabel
} from '../ui/dropdown-menu';

const NavAccount = () => {
    const { User, SignOut } = useAuth();

    const handleSignOut = () => {
        SignOut().then(() => {
            window.location.reload();
        });
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="overflow-visible">
                <Button variant="ghost" size="sm" className="relative">
                    Meu Perfil
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background w-60" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-0.5 leading-none">
                        <p className="font-medium text-sm text-gray-900 dark:text-white">{User?.name}</p>
                        <p className="font-medium text-sm text-muted-foreground">{User?.email}</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <User2Icon className="h-4 w-4 " />
                        <Link to="/profile">Profile</Link>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <LayoutDashboardIcon className="h-4 w-4 " />
                        <Link to="/sell">Dashboard</Link>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
                    <div className="flex flex-row items-center gap-2">
                        <LogOutIcon className="h-4 w-4 " />
                        Sair
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavAccount;
