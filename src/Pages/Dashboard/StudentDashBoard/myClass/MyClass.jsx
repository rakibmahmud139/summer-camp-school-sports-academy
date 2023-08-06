import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyClass = () => {
    const myClasses = useLoaderData();
    const [myRemainingClass, setMyRemainingClass] = useState(myClasses);


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
                fetch(`https://sports-academy-server-three.vercel.app/carts/${myClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myRemainingClass.filter(item => item._id !== myClass._id);
                            setMyRemainingClass(remaining);
                        }
                    })
            }
        })

    }

    const total = myClasses.reduce((sum, item) => sum + item.price, 0)


    return (
        <div className="w-full">
            <div className="uppercase flex justify-center items-center rounded-lg text-gray-900 bg-pink-100 py-5 mb-5">
                <h3 className="text-3xl">My Class : {myClasses.length}</h3>
                <p className="mx-48">total: ${total}</p>
                <button className="btn btn-accent btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
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
                            myClasses.map((myClass, index) =>
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