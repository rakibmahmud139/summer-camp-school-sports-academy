import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";

import img1 from '../../../../src/assets/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg';
import img2 from '../../../../src/assets/alliance-football-club-lZZVqZAnGy0-unsplash.jpg';
import img3 from '../../../../src/assets/mamba-sports-academy-winter-basketball-camp.jpg';
import img4 from '../../../../src/assets/photo-1562552052-dbdd31c06339.jpg';
import img5 from '../../../../src/assets/young-boys-sports-club-soccer-football-training-kids-enhance-skills-natural-turf-grass-pitch-practice-session-children-148328878.webp';



const Banner = () => {
    const [sliderRef] = useKeenSlider()
    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1 ">
                <img className="w-full h-96 md:h-[760px] rounded" src={img1} alt="" />

            </div>
            <div className="keen-slider__slide number-slide2">
                <img className="w-full  h-96 md:h-[760px] rounded" src={img2} alt="" />
            </div>
            <div className="keen-slider__slide number-slide3">
                <img className="w-full  h-96 md:h-[760px] rounded" src={img3} alt="" />
            </div>
            <div className="keen-slider__slide number-slide4">
                <img className="w-full  h-96 md:h-[760px] rounded" src={img4} alt="" />
            </div>
            <div className="keen-slider__slide number-slide5">
                <img className="w-full  h-96 md:h-[760px] rounded" src={img5} alt="" />
            </div>
        </div>
    );
};

export default Banner;