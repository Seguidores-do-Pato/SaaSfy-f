import Cards from '@/components/dashboard/Cards';
import Sidebar from '@/components/sidebar/Sidebar';

import { TooltipProvider } from '@/components/ui/tooltip';

const Dashboard = () => {
    return (
        <div className="flex min-h-screen w-full flex-row">
            <TooltipProvider>
                <Sidebar />
            </TooltipProvider>
            <Cards />
        </div>
    );
};

export default Dashboard;
