import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { toast } from "react-hot-toast";

const SingleClass = ({ singleClass }) => {
    const { image, name, instructor, available_seats, price, _id } = singleClass;
    const [, refetch] = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = (singleClass) => {
        if (user && user?.email) {
            const cartItem = { classID: _id, name, image, price, email: user?.email }

            fetch('https://sports-academy-server-three.vercel.app/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        toast.success('Class added successful!!')
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to add class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-200 shadow-2xl">
            <figure><img className="w-64 h-64 pt-5 rounded-lg" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {instructor}</h2>
                <p><span className="text-xl">Sports Name: </span>{name}</p>
                <p><span className="text-xl">Available Seats: </span> {available_seats}</p>
                <p><span className="text-xl">Price: </span> ${price}</p>
                <div className="card-actions justify-end">

                    <button onClick={() => handleAddToCart(singleClass)} className="btn text-whit btn-outline btn-accent">Add Class</button>

                </div>
            </div>
        </div>
    );
};

export default SingleClass;