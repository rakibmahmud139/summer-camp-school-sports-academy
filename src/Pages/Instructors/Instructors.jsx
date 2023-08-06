import { useEffect, useState } from "react";
import Instructor from "./Instructor";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://sports-academy-server-rakibmahmud139.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <h3 className="text-accent text-center text-3xl uppercase mt-20 mb-12">Here the all our Instructors</h3>
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