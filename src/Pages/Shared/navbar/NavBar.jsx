import { Link } from "react-router-dom";
import logo from '../../../../public/sports.png'
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    //log Out
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {
            user ?
                <>
                    <li><Link to={isAdmin ? '/dashboard/adminHome' : '/dashboard/studentHome'}>Dashboard</Link></li>
                    <button className="mb-1 mr-8 ml-4" onClick={handleLogOut}>logout</button>
                    <img className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                </>
                :
                <>
                    <Link to='/login' className="mt-2 ml-4">Login</Link>
                </>
        }
    </>
    return (
        <div className="navbar text-black px-6 rounded-t-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a
                    className="btn btn-ghost normal-case mb-2  text-xl">
                    <img className='w-12 h-12' src={logo} alt="" />
                    sports<span className="text-pink-600 text-xl">Academy</span></a>
            </div>
            <div className="hidden navbar-end lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;