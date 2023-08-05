
const PopularCard = ({ popular }) => {
    const { image, name, instructor, available_seats, price } = popular;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="w-64 h-64 pt-5 rounded-lg" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {instructor}</h2>
                <p><span className="text-xl">Sports Name: </span>{name}</p>
                <p><span className="text-xl">Available Seats: </span> {available_seats}</p>
                <p><span className="text-xl">Price: </span> ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">See All Classes</button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;