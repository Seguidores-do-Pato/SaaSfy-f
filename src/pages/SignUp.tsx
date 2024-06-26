import { Icons } from '@/components/Icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/auth-context';
import { cn } from '@/lib/utils';
import { TSignUp, registerValidator } from '@/lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, LogInIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TSignUp>({ resolver: zodResolver(registerValidator) });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { User, SignUp } = useAuth();

    const router = useNavigate();

    const { toast } = useToast();

    const onSubmit = (props: TSignUp) => {
        setIsLoading(true);

        SignUp(props)
            .then(() => {
                router('/sign-in');
                window.location.reload();
            })
            .catch(err => {
                console.error(err);
                toast({
                    variant: 'destructive',
                    title: 'Email ou Senha inválidos',
                    description: 'Por favor, tente novamente.'
                });
                setIsLoading(false);
            });
    };

    useEffect(() => {
        document.title = 'SaaSfy - Registrar';
        if (User) {
            router('/');
        }
    }, []);

    return (
        <div className="container lg:w-full relative h-dvh flex pb-20 flex-row items-center justify-center lg:px-0">
            <div className="hidden mx-auto lg:flex  flex-col justify-center space-y-6">
                {/* essa imagem ta muito feia, se alguém achar uma melhor  */}
                <img src="/software.png" alt="software image" className="object-cover object-center w-full h-full" />
                <Link to="/" className="absolute top-4 left-0 flex items-center ml-10">
                    <Icons.logo className="h-16 w-16" />
                    <p className="font-semibold ml-3 text-3xl underline">SaaSfy.</p>
                </Link>
            </div>

            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] bg-gray-100 dark:bg-gray-900 p-6 rounded">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <h1 className="text-2xl font-bold">Criar Conta</h1>

                    <Link to="/sign-in" className={buttonVariants({ variant: 'link', className: 'gap-1.5' })}>
                        Já tem uma conta? Faça login agora!
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid gap-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-2">
                            {/* email field */}
                            <div className="grid gap-1 py-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    {...register('email')}
                                    className={cn({
                                        'focus-visible:ring-red-500': errors.email
                                    })}
                                    placeholder="you@exemple.com"
                                />
                                {errors?.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                            </div>
                            {/* name field */}
                            <div className="grid gap-1 py-2">
                                <Label htmlFor="name">Nome completo</Label>
                                <Input
                                    {...register('name')}
                                    className={cn({
                                        'focus-visible:ring-red-500': errors.name
                                    })}
                                    placeholder="Seu nome completo"
                                />
                                {errors?.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                            </div>
                            {/* password field */}
                            <div className="grid gap-1 py-2">
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    {...register('password')}
                                    type="password"
                                    className={cn({
                                        'focus-visible:ring-red-500': errors.password
                                    })}
                                    placeholder="Crie sua senha"
                                />
                                {errors?.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                            </div>
                            <Button disabled={isLoading}>
                                {isLoading ? (
                                    <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
                                ) : (
                                    <>
                                        <LogInIcon className="mr-2 h-5 w-5" />
                                        Continuar
                                    </>
                                )}
                            </Button>
                            <p className="text-muted-foreground text-center justify-center text-sm">
                                Ao clicar em continuar, você está de acordo com nosso <span className="underline">Termos de Serviço</span> e{' '}
                                <span className="underline">Politica de Privacidade.</span>
                            </p>
                        </div>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background mx-auto px-2 text-muted-foreground bg-gray-100 dark:bg-gray-900">or</span>
                        </div>
                    </div>
                    <Button variant="outline" disabled={isLoading}>
                        {isLoading ? (
                            <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
                        ) : (
                            <>
                                <Icons.gitHub className="mr-2 h-5 w-5" />
                                Github
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
