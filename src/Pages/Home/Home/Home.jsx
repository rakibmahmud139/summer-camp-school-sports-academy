import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClasses/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Section2 from "../../../Components/Section2";
import AboutUs from "../../../Components/AboutUs";
import Gallery from "../../../Components/Gallery";
import Testimonial from "../AnotherSection/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>sportsAcademy | Home</title>
            </Helmet>
            <Banner />
            <AboutUs />
            <Section2 />
            <Gallery />
            <PopularClass />
            <PopularInstructors />
            <Testimonial />
        </div>
    );
};

export default Home;