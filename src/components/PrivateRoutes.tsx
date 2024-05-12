import { useAuth } from '@/contexts/auth-context';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const { User } = useAuth();
    return User ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
