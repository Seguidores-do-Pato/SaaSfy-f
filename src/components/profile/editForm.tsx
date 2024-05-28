import { useState } from 'react';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Check, Edit, X } from 'lucide-react';
import { User } from '@/interfaces/User';

interface editFormProps {
    User: User | null;
}

const editForm = ({ User }: editFormProps) => {
    const [disabled, setDisabled] = useState<boolean>(true);
    return (
        <div>
            <h1 className="font-semibold text-xl">Conta</h1>
            <p className="text-muted-foreground py-2">Atualize as informações do seu perfil.</p>
            <Separator className="my-4" />
            <Label className="text-base">Nome</Label>
            <div className="flex items-center my-2 gap-3 w-3/5">
                <Input defaultValue={User?.name} disabled={disabled} />

                {!disabled ? (
                    <>
                        <Button variant="default" onClick={() => setDisabled(!disabled)}>
                            <Check className="w-4 h-4" />
                        </Button>
                        <Button variant="destructive" onClick={() => setDisabled(!disabled)}>
                            <X className="w-4 h-4" />
                        </Button>
                    </>
                ) : (
                    <Button variant="secondary" onClick={() => setDisabled(!disabled)}>
                        <Edit className="w-4 h-4" />
                    </Button>
                )}
            </div>
            <p className="text-sm text-muted-foreground mb-3">Este é o nome que será exibido no seu perfil e nos e-mails.</p>
        </div>
    );
};

export default editForm;
