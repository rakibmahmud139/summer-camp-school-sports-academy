import React from 'react'
import icon1 from '../assets/icon-01.png'
import icon2 from '../assets/icon-02.png'
import icon3 from '../assets/icon-03.png'
import icon4 from '../assets/icon-04.png'

const AboutUs = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Navigation */}
                <nav className="mb-8">
                    <span className="text-pink-600 font-medium">• ABOUT US</span>
                </nav>

                {/* Heading */}
                <h1 className="text-[#1B3B35] text-center text-2xl font-medium mb-20">
                    Total Europe Football Immersion.
                </h1>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1 */}
                    <div className="space-y-4">
                        <img src={icon1} alt="" className="w-12 h-12" />

                        <h3 className="text-[#1B3B35] text-xl font-medium leading-tight">
                            World class academy coaches and player development team
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-4">
                        <img src={icon2} alt="" className="w-12 h-12" />
                        <h3 className="text-[#1B3B35] text-xl font-medium leading-tight">
                            World class / elite competition
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-4">
                        <img src={icon3} alt="" className="w-12 h-12" />

                        <h3 className="text-[#1B3B35] text-xl font-medium leading-tight">
                            Immersion with a Liga Europe Academy team
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="space-y-4">
                        <img src={icon4} alt="" className="w-12 h-12" />

                        <h3 className="text-[#1B3B35] text-xl font-medium leading-tight">
                            World class match, training and learning ecperiences
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs