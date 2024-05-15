import Sidebar from '@/components/sidebar/Sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useAuth } from '@/contexts/auth-context';

const Dashboard = () => {
    const { User } = useAuth();

    return (
        <div className="flex min-h-screen w-full flex-col">
            <TooltipProvider>
                <Sidebar id={User!._id} />
            </TooltipProvider>
            <p className="px-24 py-5">aaa</p>
        </div>
    );
};

export default Dashboard;
