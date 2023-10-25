import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioxSecure";

const useInstructor = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/instructor/${user?.email}`);
            return res.data.admin
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;