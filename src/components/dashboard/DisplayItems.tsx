import React from 'react';
import { Table, TableCell, TableHeader, TableBody, TableRow } from '../ui/table';
import { useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';

interface DisplayItemsProps {
    product: Product | null;
    index: number;
    isLoading: boolean;
}

const DisplayItems = ({ index, isLoading, product }: DisplayItemsProps) => {
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('pt-BR');
    };
    const router = useNavigate();
    return (
        // TODO: Alguem deixa isso reativo por favor
        <>
            {!isLoading && product && (
                <TableRow
                    key={product._id}
                    onClick={() => {
                        router(`/sell/my-products/${product._id}`);
                    }}
                    className="cursor-pointer"
                >
                    <TableCell className="text-base font-semibold">{index + 1}.</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.version}</TableCell>
                    <TableCell>{product.available ? <Check className="text-primary" /> : <X className="text-red-900" />}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{formatDate(product.createdAt)}</TableCell>
                    <TableCell>{formatDate(product.updatedAt)}</TableCell>
                </TableRow>
            )}
        </>
    );
};

export default DisplayItems;
