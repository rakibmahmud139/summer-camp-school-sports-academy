import React from 'react';
import Title from '../../../Components/Title';
import useAllClass from '../../../hooks/useClass';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const ManageClasses = () => {

    const [allClass, refetch] = useAllClass();

    return (
        <div className='w-full'>
            <Title heading='Manage all class' />
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClass.map((singleClass, index) =>
                                <tr key={singleClass._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {singleClass.name}
                                    </td>
                                    <td>
                                        {singleClass.category}
                                    </td>
                                    <td className='text-right'>
                                        {singleClass.price}
                                    </td>
                                    <td>
                                        <button className="text-accent text-xl ml-3"><FaUserShield /></button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline btn-xs btn-accent text-xl"><FaTrashAlt /></button>
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

export default ManageClasses;