import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const router = useNavigate();
    return (
        <div className="grid flex-1 items-start gap-4 p-4 justify-center sm:px-6 sm:py-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-2 w-full">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    <Card x-chunk="dashboard-05-chunk-0">
                        <CardHeader className="pb-3">
                            <CardTitle>Suas ofertas</CardTitle>
                            <CardDescription className="max-w-lg text-balance leading-relaxed">
                                Apresentando nosso painel dinâmico de pedidos para gerenciamento contínuo e análise criteriosa.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button onClick={() => router('/sell/my-products/create')}>Criar oferta</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Rendimento total</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">R$8,231.89</div>
                            <p className="text-xs text-muted-foreground">+20.1% em relação ao mês passado</p>
                        </CardContent>
                        <CardFooter>
                            <Progress value={21} aria-label="20.1% increase" />
                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Essa semana</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">R$1,329</div>
                            <p className="text-xs text-muted-foreground">+25% em relação a semana passada</p>
                        </CardContent>
                        <CardFooter>
                            <Progress value={25} aria-label="25% increase" />
                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Esse mês</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">R$5,329</div>
                            <p className="text-xs text-muted-foreground">+10% em relação ao mês passado</p>
                        </CardContent>
                        <CardFooter>
                            <Progress value={12} aria-label="12% increase" />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Cards;
