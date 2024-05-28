import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import EditForm from '@/components/profile/editForm';
import ProfileNav from '@/components/profile/profileNav';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/auth-context';

import { Link } from 'react-router-dom';

const Profile = () => {
    const { User } = useAuth();

    return (
        <MaxWidthWrapper>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-8 md:gap-8">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="font-semibold text-xl">Configurações</h1>
                    <p className="text-muted-foreground">Gerencie as configurações da sua conta e preferências de e-mail.</p>
                </div>
                <Separator />
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                    <ProfileNav />
                    <div className="grid gap-6 py-3">
                        <EditForm User={User} />
                    </div>
                </div>
            </main>
        </MaxWidthWrapper>
    );
};

export default Profile;
