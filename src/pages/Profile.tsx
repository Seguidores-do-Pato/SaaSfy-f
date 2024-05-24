import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import EditForm from '@/components/profile/editForm';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/auth-context';

import { Link } from 'react-router-dom';

const Profile = () => {
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
                    <EditForm User={User} />
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Profile;
