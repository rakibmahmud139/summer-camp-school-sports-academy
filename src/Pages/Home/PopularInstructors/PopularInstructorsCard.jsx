import { Link } from "react-router-dom";

const PopularInstructorsCard = ({ instructor }) => {
    const { name, email, number_of_class_taken, img } = instructor;
    return (
        // <div className="card w-96">
        //     <figure className="px-10 pt-10">
        //         <img src={img} alt="Shoes" className="rounded-full w-48 h-48 shadow-2xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title"><span>Name: </span>{name}</h2>
        //         <p><span className="text-xl">Email: </span>{email}</p>
        //         <p><span className="text-xl">Number of class Taken: </span>{number_of_class_taken}</p>
        //         <div className="card-actions">
        //             <Link to='/instructors'>
        //                 <button className="btn btn-outline btn-accent mt-5">See All Instructors</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

        <div>
            <figure className="group relative rounded-lg overflow-hidden cursor-pointer">
                <img
                    src="https://picsum.photos/id/287/250/300"
                    alt="Mountains"
                    className="w-full h-full object-cover transform transition-transform duration-400 group-hover:scale-110"
                />
                <figcaption
                    className="absolute inset-0 flex items-end text-transparent bg-gradient-to-t from-black/60 to-transparent p-3 font-bold text-2xl tracking-wide transition-all duration-400 group-hover:text-white group-hover:clip-inset-0"
                    style="clip-path: inset(0 100% 0 0);"
                >
                    The Day
                </figcaption>
            </figure>
        </div>
    );
};

export default PopularInstructorsCard;