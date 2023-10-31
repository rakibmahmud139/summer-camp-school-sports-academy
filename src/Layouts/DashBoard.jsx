import { Link, Outlet } from "react-router-dom";
import { HiHome, HiStatusOnline, HiBookmark } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { MdClass, MdOutlineLibraryAddCheck } from "react-icons/md";
import { BsFillBookmarksFill } from 'react-icons/bs'
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";

const DashBoard = () => {
    const { user } = useAuth()
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-accent text-white">


                    {/* Admin dashboard route */}

                    {
                        isAdmin &&
                        <>
                            <li><Link to='/dashboard/adminHome'><HiHome size={20} />Admin Home</Link></li>
                            <li><Link to='/dashboard/mangeClass'><HiBookmark size={20} /> Manage Classes</Link></li>
                            <li><Link to='/dashboard/allStudent'><HiStatusOnline size={20} /> All Student</Link></li>
                        </>


                    }


                    {/* Instructor dashboard route */}

                    {isInstructor &&
                        <>
                            <li><Link to='/dashboard/instructorHome'><HiHome size={20} />Instructor Home</Link></li>
                            <li><Link to='/dashboard/addClass'><MdOutlineLibraryAddCheck size={20} /> Add A Class</Link></li>
                            <li><Link to='/dashboard/instructorClass'><BsFillBookmarksFill /> My Class</Link></li>
                        </>
                    }


                    {/* Student dashboard route */}

                    {
                        !isAdmin && !isInstructor &&
                        <>
                            <li><Link to='/dashboard/studentHome'><HiHome size={20} />Student Home</Link></li>
                            <li><Link to='/dashboard/myClass'><MdClass size={20} /> My Selected Class</Link></li>
                            <li><Link to='/dashboard/enrolledClass'><FaBook size={20} /> My Enrolled Class</Link></li>
                        </>
                    }



                    <div className="divider"></div>

                    <li><Link to='/'><HiHome size={20} />Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;