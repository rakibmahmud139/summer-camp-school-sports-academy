import { useEffect, useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";
import Title from "../../../Components/Title";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://sports-academy-server-three.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])


    const popularInstructors = instructors.filter(instructor => instructor.number_of_class_taken > 15);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <nav className="mb-4">
                <span className="text-pink-600 font-medium uppercase">• Best Instructors</span>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    popularInstructors.slice(0, 4).map(instructor => <PopularInstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    />)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;