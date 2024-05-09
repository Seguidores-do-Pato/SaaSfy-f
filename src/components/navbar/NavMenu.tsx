import * as React from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

const NavMenu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Gestão</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        to="/"
                                    >
                                        <img src="/nav/managment.png" alt="" className="object-cover w-full h-full object-center" />
                                        <div className="mb-2 mt-4 text-lg font-medium">Gestão</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Aprimore sua eficiência com nossas soluções de gestão personalizadas.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/products" title="Destaques">
                                Descubra nossos destaques e encontre as últimas adições à nossa coleção.
                            </ListItem>
                            <ListItem href="/products/" title="Recém-incluidos">
                                Explore os produtos recém-incluídos para ficar por dentro das novidades.
                            </ListItem>
                            <ListItem href="/products/" title="Mais vendidos">
                                Encontre os itens mais vendidos e populares em nossa seleção.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Automação</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        to="/"
                                    >
                                        <img src="/nav/automation.png" alt="" className="object-cover w-full h-full object-center" />
                                        <div className="mb-2 mt-4 text-lg font-medium">Automação</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Otimize seus processos com nossas ferramentas de automação inteligente.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/products" title="Destaques">
                                Descubra nossos destaques e encontre as últimas adições à nossa coleção.
                            </ListItem>
                            <ListItem href="/products/" title="Recém-incluidos">
                                Explore os produtos recém-incluídos para ficar por dentro das novidades.
                            </ListItem>
                            <ListItem href="/products/" title="Mais vendidos">
                                Encontre os itens mais vendidos e populares em nossa seleção.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

export default NavMenu;
