import React from 'react';
import { Button } from '../ui/button';
import { useAPI } from '@/hooks/useAPI';
import { BASE_URL } from '@/config/api-urls';
import DisplayItems from './DisplayItems';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth-context';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductArea = () => {
    const { User } = useAuth();
    const { data, isLoading } = useAPI<Product[]>(`${BASE_URL}/api/product?owner=${User?._id}`);
    const router = useNavigate();
    return (
        <div className="flex flex-col w-full p-8">
            <div className="flex gap-4">
                <p className="text-2xl font-semibold pb-4">Meus produtos</p>
                <Button size="sm" variant="secondary" onClick={() => router('/sell/my-products/create')}>
                    <Plus className="w-4 h-4" />
                </Button>
            </div>
            <div className={cn('flex flex-1 rounded-lg border border-dashed shadow-sm', { 'items-center justify-center': !data })}>
                {data ? (
                    data.map((product, i) => <DisplayItems index={i} product={product} isLoading={isLoading} />)
                ) : (
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">Você não tem produtos cadastrados</h3>
                        <p className="text-sm text-muted-foreground">Você pode começar a vender assim que criar seu primeiro produto.</p>
                        <Button className="mt-4">Criar produto</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductArea;
