import { Link, useLocation } from 'react-router-dom';

const ProfileNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="grid gap-4 py-4 text-sm text-muted-foreground">
            <Link to="#" className={currentPath.includes('/') ? 'font-semibold text-primary' : ''}>
                Geral
            </Link>
            <Link to="#" className={currentPath.includes('/security') ? 'font-semibold text-primary' : ''}>
                Security
            </Link>
            <Link to="#">Integrations</Link>
            <Link to="#">Support</Link>
            <Link to="#">Organizations</Link>
            <Link to="#">Advanced</Link>
        </nav>
    );
};

export default ProfileNav;
