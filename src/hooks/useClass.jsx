import { useQuery } from "@tanstack/react-query";



const useAllClass = () => {
    const { refetch, data: allClass = [] } = useQuery({
        queryKey: ['classes'],

        queryFn: async () => {
            const res = await fetch('https://sports-academy-server-three.vercel.app/classes')
            return res.json();
        }
    })
    return [allClass, refetch]
};

export default useAllClass;