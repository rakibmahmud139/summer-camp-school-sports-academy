import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import Title from "../../../Components/Title";

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://sports-academy-server-three.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const popularClasses = classes.filter(popular => popular.category === 'Popular');

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <nav className="mb-4">
                <span className="text-pink-600 font-medium uppercase">• Popular Classes</span>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    popularClasses.slice(0, 4).map(popular => <PopularCard
                        key={popular._id}
                        popular={popular}
                    />)
                }
            </div>
        </div>
    );
};

export default PopularClass;