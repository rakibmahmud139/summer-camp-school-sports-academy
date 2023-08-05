import { Link } from "react-router-dom";
import logo from '../../../../public/sports.png'
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth();

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
            user &&
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <button onClick={handleLogOut}>logout</button>
            </>
        }
    </>
    return (
        <div className="navbar bg-accent fixed z-10 bg-opacity-50 text-white max-w-screen-xl px-6 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl">sportsAcademy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                        :
                        <li><Link to='/login'>Login</Link></li>
                }
            </div>
        </div>
    );
};

export default NavBar;