import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useCart } from '../../hooks/useCart';

const AddToCartButton = ({ product }: { product: Product }) => {
    const { addItem } = useCart();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [isSuccess]);

    return (
        <Button
            onClick={() => {
                addItem(product);
                setIsSuccess(true);
            }}
            size="lg"
            className="w-full"
        >
            {isSuccess ? 'Adicionado!' : 'Adicionar ao carrinho'}
        </Button>
    );
};

export default AddToCartButton;
