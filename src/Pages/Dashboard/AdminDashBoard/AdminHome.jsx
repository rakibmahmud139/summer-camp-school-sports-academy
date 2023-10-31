import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxioxSecure";

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const { data: stats = {} } = useQuery({
        queryKey: 'admin-stats',
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats')
            return res.data;
        }
    })

    return (
        <div className="w-full m-4 md:ml-12">
            <h3 className='text-3xl text-accent capitalize'><span className="text-pink-500">
                Hi, </span>{user.displayName}!</h3>

            <div className="md:stats  shadow-2xl mt-8 ">

                <div className="stat bg-pink-500">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                </div>

                <div className="stat bg-red-400">
                    <div className="stat-title">Students</div>
                    <div className="stat-value">{stats.students}</div>
                </div>

                <div className="stat bg-emerald-600">
                    <div className="stat-title">Classes</div>
                    <div className="stat-value">{stats.totalClasses}</div>
                </div>
                <div className="stat bg-gray-500">
                    <div className="stat-title">Paid Classes</div>
                    <div className="stat-value">{stats.paidClass}</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;