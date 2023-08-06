import GallerySection from "../AnotherSection/GallerySection";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClasses/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClass />
            <PopularInstructors />
            <GallerySection />
        </div>
    );
};

export default Home;