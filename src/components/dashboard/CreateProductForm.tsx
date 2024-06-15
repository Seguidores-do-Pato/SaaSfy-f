import React, { useState } from 'react';
import { Input } from '../ui/input';
import { ChevronLeft, File, Upload, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useAuth } from '@/contexts/auth-context';
import { TcreateProduct, createProductValidator } from '@/lib/validators';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { api } from '@/lib/api';
import { imageReader } from '@/lib/imageReader';
import { useToast } from '../ui/use-toast';
import { Icons } from '../Icons';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';

const CreateProductForm = () => {
    const router = useNavigate();
    const { User } = useAuth();
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TcreateProduct>({ resolver: zodResolver(createProductValidator) });

    const [available, setAvailable] = useState<boolean>(false);
    const [category, setCategory] = useState<string>('automation');
    const [type, setType] = useState<string>('api');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newImages = Array.from(e.target.files).slice(0, 5);

            Promise.all(
                newImages.map(file => {
                    return new Promise<string>((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result as string);
                        reader.onerror = error => reject(error);
                    });
                })
            )
                .then(base64Images => {
                    setSelectedImages(prevImages => [...prevImages, ...base64Images]);
                })
                .catch(error => {
                    console.error('Erro ao converter imagem para base64:', error);
                });
        }
    };

    const removeImage = (index: number) => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(Array.from(event.target.files));
        }
    };

    const removeFile = (index: number) => {
        const newSelectedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newSelectedFiles);
    };

    const onSubmit = async (props: TcreateProduct) => {
        const imagePromises = selectedImages.map(async image => {
            const res = await imageReader(image);

            if (res?.data.response === 'Yes') {
                toast({
                    title: 'Imagem Inválida',
                    description: 'Foi detectado conteúdo impróprio em uma de suas imagens, por favor, tente novamente'
                });
                return true;
            } else {
                return false;
            }
        });

        const results = await Promise.all(imagePromises);

        if (results.some(result => result)) {
            return;
        }

        const priceNumber = parseFloat(props.price);

        if (isNaN(priceNumber)) {
            throw new Error('O preço não é um número válido.');
        }

        const sendData = {
            ...props,
            owner: User?._id,
            price: priceNumber,
            category: category,
            available: available,
            images: selectedImages,
            features: []
        };

        try {
            setIsLoading(true);
            const { status } = await api.post('/api/product/create', { ...sendData });
            if (status === 201) {
                router('/sell/my-products');
                window.location.reload();
            }
        } catch (err) {
            console.error(err);
            toast({
                variant: 'destructive',
                title: 'Dados inválidos',
                description: 'Por favor, tente novamente.'
            });
            setIsLoading(false);
        }
    };

    return (
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-7xl flex-1 auto-rows-max gap-4 ">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => router('/sell/my-products')}>
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Voltar</span>
                    </Button>
                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Criação de Produto</h1>
                    <Badge variant="outline" className="ml-auto sm:ml-0">
                        {available ? 'Listado' : 'Não Listado'}
                    </Badge>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Detalhes</CardTitle>
                                <CardDescription>Preencha as informações necessárias para o cadastro do produto.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            autoComplete="off"
                                            type="text"
                                            placeholder="Nome do produto"
                                            {...register('name')}
                                            className={cn('w-full', {
                                                'focus-visible:ring-red-500': errors.name
                                            })}
                                        />
                                        {errors?.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Insira uma descrição para facilitar a decisão de quem compra!"
                                            {...register('description')}
                                            className={cn('min-h-32', {
                                                'focus-visible:ring-red-500': errors.description
                                            })}
                                        />
                                        {errors?.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Preço</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Preço em real</Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        defaultValue={1}
                                        {...register('price')}
                                        className={cn('w-full', {
                                            'focus-visible:ring-red-500': errors.price
                                        })}
                                    />
                                    {errors?.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Categoria</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6 sm:grid-cols-3">
                                    <div className="grid gap-3">
                                        <Label htmlFor="category">Categoria</Label>
                                        <Select
                                            onValueChange={value => {
                                                if (value === 'automation') return setCategory('automation');
                                                if (value === 'managment') return setCategory('managment');
                                            }}
                                        >
                                            <SelectTrigger id="category" aria-label="Select category">
                                                <SelectValue placeholder="Selecionar" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="automation">Automação</SelectItem>
                                                <SelectItem value="managment">Gestão</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Status</CardTitle>
                                <CardDescription>Por favor, escolha quando gostaria de listar o produto: agora ou em outro momento.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="status">Status</Label>
                                        <Select
                                            onValueChange={value => {
                                                if (value === 'true') return setAvailable(true);
                                                if (value === 'false') return setAvailable(false);
                                            }}
                                        >
                                            <SelectTrigger id="status" aria-label="Select status">
                                                <SelectValue placeholder="Selecionar" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="true">Listar</SelectItem>
                                                <SelectItem value="false">Não Listar</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="gap-y-2">
                                <CardTitle>Conteúdo do Produto</CardTitle>
                                <ToggleGroup type="single" defaultValue="api" variant="outline" onValueChange={value => setType(value)}>
                                    <ToggleGroupItem value="api">API Key</ToggleGroupItem>
                                    <ToggleGroupItem value="files">Arquivos</ToggleGroupItem>
                                </ToggleGroup>
                            </CardHeader>
                            <CardContent>
                                {type === 'api' && (
                                    <>
                                        <Label>API Key</Label>
                                        <Input />
                                    </>
                                )}
                                {type === 'files' && (
                                    <div className="flex flex-col items-center justify-center p-4  border rounded-lg shadow-md">
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer p-3 rounded-md text-gray-900 dark:text-white bg-zinc-200 dark:bg-gray-900"
                                        >
                                            Selecionar Arquivos
                                        </label>
                                        <input id="file-upload" type="file" className="hidden" multiple onChange={handleFileChange} />
                                        {selectedFiles.length > 0 && (
                                            <div className="mt-2 text-sm ">
                                                <p className="font-semibold">Arquivos selecionados:</p>
                                                <ul className="list-disc list-inside">
                                                    {selectedFiles.map((file, index) => (
                                                        <li key={index} className="flex items-center text-primary">
                                                            {file.name}
                                                            <button
                                                                className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                                                onClick={() => removeFile(index)}
                                                            >
                                                                Remover
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle>Imagens</CardTitle>
                                <CardDescription>Adicione até 5 imagens que aparecerão na oferta do seu produto</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-2">
                                    <Input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="imageInput" multiple />
                                    <label
                                        htmlFor="imageInput"
                                        className="flex aspect-square p-8 items-center justify-center rounded-md border border-dashed cursor-pointer"
                                    >
                                        <>
                                            <Upload className="h-6 w-6 text-muted-foreground" />
                                            <span className="sr-only">Upload</span>
                                        </>
                                    </label>
                                </div>
                                {selectedImages.map((image, index) => (
                                    <div key={index} className="relative mt-4 min-h-32 min-w-32 max-h-52 max-w-52 flex flex-row group">
                                        <img
                                            src={image}
                                            alt={`Selected ${index + 1}`}
                                            className="aspect-square w-full h-full rounded-md object-cover group-hover:opacity-75"
                                        />
                                        <button
                                            onClick={() => removeImage(index)}
                                            className="hidden top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 py-1 absolute group-hover:block"
                                        >
                                            <X className="text-red-800" />
                                        </button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <div className="flex items-center justify-center gap-2">
                            <Button variant="outline" size="sm" onClick={() => router('/sell/my-products')} disabled={isLoading}>
                                Descartar
                            </Button>
                            <Button size="sm" type="submit" disabled={isLoading}>
                                {isLoading ? <Icons.spinner className="mr-2 h-5 w-5 animate-spin" /> : 'Criar'}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProductForm;
