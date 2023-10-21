import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import { TypeAnimation } from "react-type-animation";

const GallerySection = () => {
    const [sliderRef] = useKeenSlider()

    return (
        <div>
            <div className="text-center  mb-12 mt-20">
                <h3 className="text-accent uppercase">
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            500,
                            'D',
                            1000,
                            'Developing Complete,',
                            1000,
                            'Developing Complete,',
                            1000,
                            'Developing Complete, Modern',
                            1000,
                            'Developing Complete, Modern Players',
                            500,
                        ]}
                        speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </h3>
                <p className="text-pink-600">***Testimonial***</p>

            </div>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1 lg:flex justify-center items-center gap-24">
                    <img className="w-1/2 h-64 md:h-[360px] rounded-xl ml-12" src="https://i.ibb.co/Zx7vF3j/download-6.jpg" alt="" />
                    <p className="mr-12 mt-4 md:mt-0 pl-4 md:pl-0">Congratulations on your student joining a professional basketball team from our academy! Here the some facilities of our academy. <br />Training Fields/Courts: State-of-the-art fields or courts equipped for specific sports, like soccer, basketball, tennis, etc., with proper markings and high-quality surfaces. <br />
                        Fitness Center: A well-equipped fitness center with modern exercise machines, weights, and cardio equipment to support athletes' strength and conditioning training.
                        <p>His Name: Anderson.....</p>
                    </p>

                </div>
                <div className="keen-slider__slide number-slide2 lg:flex justify-center items-center gap-24">
                    <img className="w-1/2 h-64 md:h-[360px] rounded-xl ml-12" src="https://i.ibb.co/VHNtNHn/images-16.jpg" alt="" />
                    <p className="mr-12 mt-4 md:mt-0 pl-4 md:pl-0">Congratulations on your student joining a professional basketball team from our academy! <br /> Here the some facilities of our academy. <br />Training Fields/Courts: State-of-the-art fields or courts equipped for specific sports, like soccer, basketball, tennis, etc., with proper markings and high-quality surfaces. <br />
                        Fitness Center: A well-equipped fitness center with modern exercise machines, weights, and cardio equipment to support athletes' strength and conditioning training.
                        <p>His Name: Paul Anderson.....</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;