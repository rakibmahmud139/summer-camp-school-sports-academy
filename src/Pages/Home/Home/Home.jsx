import Banner from "../Banner/Banner";
import PopularClass from "../PopularClasses/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClass />
            <PopularInstructors />
        </div>
    );
};

export default Home;