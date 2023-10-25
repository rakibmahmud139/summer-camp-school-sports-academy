import { FaTrashAlt, FaUpload } from "react-icons/fa";
import useCourse from "../../../hooks/useCourse";

const InstructorsClass = () => {
    const [myCourse, refetch] = useCourse();
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myCourse.map((course, index) =>
                            <tr key={course._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <img className="w-12 h-12" src={course.image} alt="" />
                                </td>
                                <td>
                                    {course.name}
                                </td>
                                <td>
                                    {course.email}
                                </td>
                                <td>
                                    <button className="text-accent text-xl ml-3"><FaTrashAlt /></button>
                                </td>
                                <td>
                                    <button className="btn btn-outline btn-xs btn-accent text-xl"><FaUpload /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default InstructorsClass;