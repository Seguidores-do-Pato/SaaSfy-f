import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/auth-context';
import { Edit } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [disabled, setDisabled] = useState<boolean>(true);

    const { User } = useAuth();

    return (
        <MaxWidthWrapper>
            <div className="py-8">
                <h1 className="font-semibold text-xl">Configurações</h1>
                <p className="text-muted-foreground">Gerencie as configurações da sua conta e preferências de e-mail.</p>
            </div>
            <Separator />
            <div className="grid grid-cols-4 py-4">
                <div className="w-full px-2">
                    <Link to="/profile" className={buttonVariants({ variant: 'link', className: 'dark:text-primary-foreground text-black' })}>
                        Perfil
                    </Link>
                </div>
                <div className="w-full p-2 col-span-2">
                    <h1 className="font-semibold text-xl">Conta</h1>
                    <p className="text-muted-foreground py-2">Atualize as informações do seu perfil.</p>
                    <Separator className="my-4" />
                    <Label className="text-base">Nome</Label>
                    <div className="flex items-center my-2 gap-3">
                        <Input placeholder={User?.name} disabled={disabled} />
                        <Button variant="secondary" onClick={() => setDisabled(!disabled)}>
                            <Edit className="w-4 h-4" />
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Este é o nome que será exibido no seu perfil e nos e-mails.</p>
                    {!disabled ? <Button variant="default">Editar perfil</Button> : null}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Profile;
