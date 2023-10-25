import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxioxSecure";

const useStudent = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: students = [], refetch } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            const res = await axiosSecure.get('/students')
            return res.data;
        }
    })
    return [students, refetch]
};

export default useStudent;

