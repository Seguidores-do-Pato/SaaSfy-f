import { Skeleton } from '../ui/skeleton';

const ProductPlaceholder = () => {
    return (
        <div className="flex flex-col w-full">
            <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
            <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
            <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
        </div>
    );
};

export default ProductPlaceholder;
