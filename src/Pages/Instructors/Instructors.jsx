import { useEffect, useState } from "react";
import Instructor from "./Instructor";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>sportsAcademy | Instructor</title>
            </Helmet>
            <h3 className="text-accent text-center text-xl md:text-3xl uppercase mt-20 mb-12">Here the all our Instructors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    instructors.map(instructor => <Instructor
                        key={instructor._id}
                        instructor={instructor}
                    />)
                }
            </div>
        </div>
    );
};

export default Instructors;