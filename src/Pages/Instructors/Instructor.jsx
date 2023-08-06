import React from 'react';

const Instructor = ({ instructor }) => {
    const { name, email, number_of_class_taken, img } = instructor;
    return (
        <div className="card w-96 bg-base-200 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-full w-48 h-48 shadow-2xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"><span>Name: </span>{name}</h2>
                <p><span className="text-xl">Email: </span>{email}</p>
                <p><span className="text-xl">Number of class Taken: </span>{number_of_class_taken}</p>
            </div>
        </div>
    );
};

export default Instructor;