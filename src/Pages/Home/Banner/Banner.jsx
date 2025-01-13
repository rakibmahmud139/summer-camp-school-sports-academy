import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import img1 from '../../../../src/assets/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg';
import img2 from '../../../../src/assets/alliance-football-club-lZZVqZAnGy0-unsplash.jpg';
import img3 from '../../../../src/assets/mamba-sports-academy-winter-basketball-camp.jpg';
import img4 from '../../../../src/assets/photo-1562552052-dbdd31c06339.jpg';
import img5 from '../../../../src/assets/young-boys-sports-club-soccer-football-training-kids-enhance-skills-natural-turf-grass-pitch-practice-session-children-148328878.webp';

const Banner = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: { perView: 1 },
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
    });

    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <img className="w-full h-96 md:h-[600px] " src={img1} alt="Slide 1" />
            </div>
            <div className="keen-slider__slide number-slide2">
                <img className="w-full h-96 md:h-[600px] " src={img2} alt="Slide 2" />
            </div>
            <div className="keen-slider__slide number-slide3">
                <img className="w-full h-96 md:h-[600px] " src={img3} alt="Slide 3" />
            </div>
            <div className="keen-slider__slide number-slide4">
                <img className="w-full h-96 md:h-[600px] " src={img4} alt="Slide 4" />
            </div>
            <div className="keen-slider__slide number-slide5">
                <img className="w-full h-96 md:h-[600px] " src={img5} alt="Slide 5" />
            </div>
        </div>
    );
};

export default Banner;
