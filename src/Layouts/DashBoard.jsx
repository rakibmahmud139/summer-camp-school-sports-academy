import { Link, Outlet } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const DashBoard = () => {
    const isInstructor = false;
    const isAdmin = false;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-accent text-white">

                    {
                        isAdmin ?
                            <>
                                <li><Link to='/dashboard/adminHome'><HiHome />Admin Home</Link></li>
                                <li><Link to='/dashboard/mangeClass'>Manage Classes</Link></li>
                                <li><Link to='/dashboard/manageUser'>Mange User</Link></li>
                            </>
                            :
                            <>
                                <li><Link to='/dashboard/studentHome'><HiHome />Student Home</Link></li>
                                <li><Link to='/dashboard/myClass'>My Selected Class</Link></li>
                                <li><Link to='/dashboard/enrolledClass'>My Enrolled Class</Link></li>
                            </>
                    }

                    {isInstructor &&
                        <>
                            <li><Link to='/dashboard/instructorHome'><HiHome />Instructor Home</Link></li>
                            <li><Link to='/dashboard/addClass'>Add A Class</Link></li>
                            <li><Link to='/dashboard/instructorClass'>My Class</Link></li>
                        </>
                    }



                    <div className="divider">OR</div>

                    <li><Link to='/'><HiHome />Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;