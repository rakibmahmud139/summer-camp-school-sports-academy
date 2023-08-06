
const SingleClass = ({ singleClass }) => {
    const { image, name, instructor, available_seats, price } = singleClass;
    return (
        <div className="card card-compact w-96 bg-base-200 shadow-2xl">
            <figure><img className="w-64 h-64 pt-5 rounded-lg" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {instructor}</h2>
                <p><span className="text-xl">Sports Name: </span>{name}</p>
                <p><span className="text-xl">Available Seats: </span> {available_seats}</p>
                <p><span className="text-xl">Price: </span> ${price}</p>
                <div className="card-actions justify-end">

                    <button className="btn text-whit btn-outline btn-accent">Add Class</button>

                </div>
            </div>
        </div>
    );
};

export default SingleClass;