import { toast } from "react-hot-toast";
import Title from "../../../Components/Title";
import useStudent from "../../../hooks/useStudent";

const MangeUser = () => {

    const [students, refetch] = useStudent();

    //make Admin
    const handleMakeAdmin = (student) => {
        fetch(`http://localhost:5000/students/admin/${student._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${student.name} admin now`)
                }
            })

    }


    //make instructor
    const handleMakeInstructor = (student) => {
        fetch(`http://localhost:5000/students/instructor/${student._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${student.name} instructor now`)
                }
            })

    }



    return (
        <div>
            <Title heading='manage user' />
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
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

                                        <button onClick={() => handleMakeAdmin(student)}
                                            disabled={student.role === 'admin'}
                                            className="btn btn-outline text-accent text-xl ml-3 cursor-pointer">Make Admin</button>

                                    </td>
                                    <td>
                                        <button onClick={() => handleMakeInstructor(student)}
                                            disabled={student.role === 'instructor'}
                                            className="btn btn-outline text-accent text-xl ml-3">Make Instructor</button>
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

export default MangeUser;