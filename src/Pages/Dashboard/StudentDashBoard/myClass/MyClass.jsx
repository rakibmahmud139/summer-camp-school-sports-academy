import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";
import { toast } from "react-hot-toast";

const MyClass = () => {
    const [cart, refetch] = useCart();


    //deleteClass
    const handleDelete = myClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-academy-server-rakibmahmud139.vercel.app/carts/${myClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            toast.success('Deleted Successful!!')
                        }
                    })
            }
        })

    }

    const total = cart.reduce((sum, item) => sum + item.price, 0)


    return (
        <div className="w-full">
            <div className="uppercase flex justify-evenly md:justify-center  items-center rounded-lg text-gray-900 bg-pink-100 py-5 mb-5">
                <h3 className="md:text-3xl font-bold">My <span className="text-pink-600">Class</span> : {cart.length}</h3>
                <p className="md:mx-48 font-bold">total:  <span className="text-pink-600"> $</span>{total}</p>
                <Link to='/dashboard/payment'><button className="btn btn-accent btn-sm">PAY</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-96 md:w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((myClass, index) =>
                                <tr key={myClass._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myClass.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {myClass.name}
                                    </td>
                                    <td className="text-end">${myClass.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(myClass)} className="btn btn-outline btn-xs btn-accent text-xl"><FaTrashAlt /></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;