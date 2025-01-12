import React from 'react'
import galleryImg1 from '../assets/gallery1.jpg'
import galleryImg2 from '../assets/gallery2.jpg'
import galleryImg3 from '../assets/gallery3.jpg'

const Gallery = () => {
    return (
        <div className="bg-[#fae8e4] pt-20 pb-4 mt-16 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-[#1B3B35] text-4xl md:text-5xl font-medium text-center mb-16">
                    The Gallery Academy
                </h2>

                {/* Gallery */}
                <div className="relative h-[400px] md:h-[500px] flex gap-4 items-center justify-center">
                    {/* Images with staggered layout */}
                    <div className="absolute transform -rotate-6 -translate-x-[15%] hover:z-10 transition-transform hover:scale-105">
                        <img
                            src={galleryImg1}
                            className="w-64 md:w-80 h-80 md:h-96 object-cover rounded-lg shadow-xl"
                        />
                    </div>

                    <div className="absolute z-[1] hover:z-10 transition-transform hover:scale-105">
                        <img
                            src={galleryImg2}
                            alt="Players on football field"
                            className="w-64 md:w-80 h-80 md:h-96 object-cover rounded-lg shadow-xl"
                        />
                    </div>

                    <div className="absolute transform rotate-6 translate-x-[15%] hover:z-10 transition-transform hover:scale-105">
                        <img
                            src={galleryImg3}
                            alt="Player with ball near goal"
                            className="w-64 md:w-80 h-80 md:h-96 object-cover rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery