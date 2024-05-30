import Sidebar from '@/components/sidebar/Sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';

const MyProducts = () => {
    return (
        <div className="flex min-h-screen w-full flex-row">
            <TooltipProvider>
                <Sidebar />
            </TooltipProvider>
        </div>
    );
};

export default MyProducts;
