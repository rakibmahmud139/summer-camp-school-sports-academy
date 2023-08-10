import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const MangeUser = () => {
    const { user } = useAuth();

    const { data: students = [], refetch } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/students')
            return res.json();
        }
    })

    //make Admin
    const handleMakeAdmin = (student) => {
        fetch(`http://localhost:5000/students/admin/${student._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
            })

    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) =>
                            <tr key={student._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {student.name}
                                </td>
                                <td>
                                    {student.email}
                                </td>
                                <td>
                                    {
                                        student.role === 'admin' ?
                                            'Admin'
                                            :
                                            <button onClick={() => handleMakeAdmin(student)} className="text-accent text-xl ml-3"><FaUserShield /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(student)} className="btn btn-outline btn-xs btn-accent text-xl"><FaTrashAlt /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MangeUser;