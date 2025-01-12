import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        author: "Abraham Movix",
        role: "Player Junior",
        image1: "https://i.ibb.co/FwDQkrD/football-player-kicking-a-ball.jpg",
        image2: "https://i.ibb.co/KhFms1n/sitting-football-player-e1683723476487.jpg"
    },
    {
        id: 2,
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        author: "Marcus Silva",
        role: "Senior Player",
        image1: "https://i.ibb.co/zZk6pNy/player-sitting-on-a-ball-e1683723483105.jpg",
        image2: "https://i.ibb.co/r2yBYQt/young-soccer-player-e1683723479845.jpg"
    }
];

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000); // Rotate every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#1B3B35] min-h-screen mt-16">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Navigation */}
                <div className="mb-8">
                    <span className="text-pink-600 font-medium uppercase">• Testimonial</span>
                </div>

                <h2 className="text-white text-3xl  text-center font-bold leading-tight mb-12">
                    Developing Complete, Modern Players.
                </h2>

                {/* Carousel */}
                <div className="relative overflow-hidden">
                    <div
                        className="transition-transform duration-500 ease-in-out flex"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-8">
                                        <blockquote className="text-white/90 text-lg italic">
                                            "{testimonial.quote}"
                                        </blockquote>

                                        <div className="space-y-1">
                                            <div className="text-white font-semibold">{testimonial.author}</div>
                                            <div className="text-white/70 text-sm">{testimonial.role}</div>
                                        </div>
                                    </div>

                                    <div className="relative h-[500px] flex items-center justify-center">
                                        <div className="absolute w-72 h-96 transform rotate-6 right-8 top-8 transition-all duration-500">
                                            <img
                                                src={testimonial.image1}
                                                alt={`${testimonial.author} portrait`}
                                                className="w-full h-full object-cover rounded-lg shadow-2xl"
                                            />
                                        </div>
                                        <div className="absolute w-72 h-96 transform -rotate-6 left-8 bottom-8 transition-all duration-500">
                                            <img
                                                src={testimonial.image2}
                                                alt="Player in action"
                                                className="w-full h-full object-cover rounded-lg shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-white' : 'bg-white/30'
                                }`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
