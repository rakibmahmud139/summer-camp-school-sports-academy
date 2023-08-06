
const PopularInstructorsCard = ({ instructor }) => {
    const { name, email, number_of_class_taken, img } = instructor;
    return (
        <div className="card w-96">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-full w-48 h-48 shadow-2xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"><span>Name: </span>{name}</h2>
                <p><span className="text-xl">Email: </span>{email}</p>
                <p><span className="text-xl">Number of class Taken: </span>{number_of_class_taken}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-accent mt-5">See All Instructors</button>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;