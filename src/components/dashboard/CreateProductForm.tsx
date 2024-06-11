import { createProductValidator, TcreateProduct } from '@/lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { ChevronLeft, PlusCircle, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { useNavigate } from 'react-router-dom';
import ImagePicker from './ImagePicker';

const CreateProductForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TcreateProduct>({ resolver: zodResolver(createProductValidator) });

    const router = useNavigate();

    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-7xl flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => router('/sell/my-products')}>
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Voltar</span>
                    </Button>
                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Criação do produto</h1>
                    <Badge variant="outline" className="ml-auto sm:ml-0">
                        Não listado
                    </Badge>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Button variant="outline" size="sm" onClick={() => router('/sell/my-products')}>
                            Descartar
                        </Button>
                        <Button size="sm">Criar produto</Button>
                    </div>
                </div>
                <form className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-0">
                            <CardHeader>
                                <CardTitle>Detalhes do Produto</CardTitle>
                                <CardDescription>Por favor, insira os dados do produto para registro.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Nome</Label>
                                        <Input id="name" type="text" className="w-full" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="description">Descrição</Label>
                                        <Textarea id="description" className="min-h-32" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-07-chunk-2">
                            <CardHeader>
                                <CardTitle>Categoria</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6 sm:grid-cols-3">
                                    <div className="grid gap-3">
                                        <Label htmlFor="category">Categoria</Label>
                                        <Select>
                                            <SelectTrigger id="category" aria-label="Selecionar a categoria">
                                                <SelectValue placeholder="Selecione a categoria" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="automation">Automação</SelectItem>
                                                <SelectItem value="managment">Gestão</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {/* <div className="grid gap-3">
                                        <Label htmlFor="subcategory">Subcategory (optional)</Label>
                                        <Select>
                                            <SelectTrigger id="subcategory" aria-label="Select subcategory">
                                                <SelectValue placeholder="Select subcategory" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="t-shirts">T-Shirts</SelectItem>
                                                <SelectItem value="hoodies">Hoodies</SelectItem>
                                                <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div> */}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-3">
                            <CardHeader>
                                <CardTitle>Status do produto</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="status">Status</Label>
                                        <Select>
                                            <SelectTrigger id="status" aria-label="Select status">
                                                <SelectValue placeholder="Selecione se deseja listar o produto" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="available">Listar</SelectItem>
                                                <SelectItem value="not-available">Não Listar</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                            <CardHeader>
                                <CardTitle>Imagem do produto</CardTitle>
                                <CardDescription>
                                    Adicione imagens ao seu produto para ajudar os clientes a compreenderem melhor o que você oferece.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 gap-2">
                                        <ImagePicker />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-07-chunk-5">
                            <CardHeader>
                                <CardTitle>Archive Product</CardTitle>
                                <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div></div>
                                <Button size="sm" variant="secondary">
                                    Archive Product
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </form>
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" size="sm">
                        Discard
                    </Button>
                    <Button size="sm">Save Product</Button>
                </div>
            </div>
        </main>
    );
};

export default CreateProductForm;
