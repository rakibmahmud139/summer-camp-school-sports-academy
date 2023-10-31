import { useEffect, useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";
import Title from "../../../Components/Title";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://sports-academy-server-rakibmahmud139.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])


    const popularInstructors = instructors.filter(instructor => instructor.number_of_class_taken > 15);

    return (
        <div>
            <Title heading='Popular Instructors' subHeading='Here The Our Best Instructors' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    popularInstructors.map(instructor => <PopularInstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    />)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;