import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoutes = () => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const isAdmin = true;

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner text-success"></span>
    }


    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace />
};

export default AdminRoutes;