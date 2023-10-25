import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioxSecure";

const useCourse = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: myCourse = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/classes/instructor?email=${user?.email}`)
            return res.data;
        }
    })
    return [myCourse, refetch]
};

export default useCourse;