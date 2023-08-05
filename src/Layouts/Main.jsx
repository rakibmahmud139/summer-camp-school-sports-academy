import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/navbar/NavBar";
import Footer from "../Pages/Shared/footer/Footer";


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter || <NavBar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;