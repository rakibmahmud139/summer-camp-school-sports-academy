import React from 'react'
import coachImg from '../assets/coach.jpg'

const Section2 = () => {
    return (
        <div className="bg-[#1B3B35] min-h-[400px] flex items-center justify-center p-16 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
                {/* Image container with tilt effect */}
                <div className="relative w-64 h-80 transform -rotate-6">
                    <img
                        src={coachImg}
                        alt="Coach portrait"
                        className="w-full h-full object-cover rounded shadow-xl"
                    />
                </div>

                {/* Quote and author info */}
                <div className="max-w-2xl">
                    <blockquote className="text-white text-xl font-normal leading-relaxed mb-8">
                        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue."
                    </blockquote>

                    {/* Red line separator */}
                    <div className="w-16 h-1 bg-red-500 mb-4"></div>

                    {/* Author info */}
                    <div className="text-white">
                        <h3 className="text-xl font-semibold mb-1">Andrew Yako</h3>
                        <p className="text-gray-300">Coach of Sports Academy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2