import { Outlet } from "react-router-dom";
import NavBar from "../assets/Pages/Shared/navbar/NavBar";
import Footer from "../assets/Pages/Shared/footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;