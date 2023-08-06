import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://sports-academy-server-rakibmahmud139.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const popularClasses = classes.filter(popular => popular.category === 'Popular');

    return (
        <div>
            <div className="text-center mb-12 mt-20">
                <h3 className="text-3xl uppercase text-accent">Popular Classes</h3>
                <p className="text-pink-600">***Here the all our popular classes***</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    popularClasses.map(popular => <PopularCard
                        key={popular._id}
                        popular={popular}
                    />)
                }
            </div>
        </div>
    );
};

export default PopularClass;