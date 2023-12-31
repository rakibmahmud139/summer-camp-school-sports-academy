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
        <div>
            <Title heading='Popular Class' subHeading='Here the all our popular classes' />
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