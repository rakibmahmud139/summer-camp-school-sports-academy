import { useQuery } from "@tanstack/react-query";



const useAllClass = () => {
    const { refetch, data: allClass = [] } = useQuery({
        queryKey: ['classes'],

        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json();
        }
    })
    return [allClass, refetch]
};

export default useAllClass;