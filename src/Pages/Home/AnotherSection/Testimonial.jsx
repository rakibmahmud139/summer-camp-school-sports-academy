import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (


        <div className="bg-[#1B3B35] py-8 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="mb-4">
                    <span className="text-pink-600 font-medium uppercase">• Testimonial</span>
                </div>



                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className=" rounded-lg p-8 text-center">
                                        <div className="mb-6">
                                            <img
                                                src={testimonial.image1}
                                                alt={testimonial.author}
                                                className="w-20 h-20 rounded-full mx-auto"
                                            />
                                        </div>
                                        <h3 className="text-white text-xl font-semibold mb-1">
                                            {testimonial.author}
                                        </h3>
                                        <p className="text-gray-400 mb-4">{testimonial.role}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed flex items-start">
                                            <FaQuoteLeft className="w-6 h-6 mr-2" />
                                            <span className="flex-1">{testimonial.quote}</span>
                                            <FaQuoteRight className="w-6 h-6 ml-2" />
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pink-600 p-2 rounded-full text-white hover:bg-pink-700 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pink-600 p-2 rounded-full text-white hover:bg-pink-700 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="flex justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
