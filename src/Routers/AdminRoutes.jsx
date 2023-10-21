import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner text-success"></span>
    }


    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace />
};

export default AdminRoutes;