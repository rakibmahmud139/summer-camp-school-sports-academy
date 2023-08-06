import { useEffect, useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])


    const popularInstructors = instructors.filter(instructor => instructor.number_of_class_taken > 15);

    return (
        <div>
            <div className=" mb-12 mt-20 text-center">
                <h3 className="text-accent text-3xl uppercase">Popular Instructors</h3>
                <p>Here The Our Best Instructors</p>
            </div>

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