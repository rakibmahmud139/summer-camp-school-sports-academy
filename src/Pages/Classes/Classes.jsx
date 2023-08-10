import React, { useEffect, useState } from 'react';
import SingleClass from './SingleClass';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <h3 className="text-accent text-center text-3xl uppercase mt-20 mb-12">Here the all our classes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    classes.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                    />)
                }
            </div>
        </div>
    );
};

export default Classes;