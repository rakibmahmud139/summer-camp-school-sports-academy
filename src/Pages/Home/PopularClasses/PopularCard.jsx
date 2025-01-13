import { Link } from "react-router-dom";

const PopularCard = ({ popular }) => {
    const { image, name, instructor, available_seats, price } = popular;
    return (
        <div className="relative mt-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <a href="#">
                <img
                    className="h-60 w-full rounded-t-lg object-cover"
                    src={image}
                    alt="product image"
                />
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                        {name}
                    </h5>
                </a>
                <div className="mt-2.5 mb-5 flex items-center">
                    <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        {instructor}
                    </span>

                </div>
                <div className="flex items-center justify-between">
                    <p>
                        <span className="text-2xl font-bold text-slate-900">${price}</span>
                    </p>
                    <a
                        href="#"
                        className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >

                        Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;