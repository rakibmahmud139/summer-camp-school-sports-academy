import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Navigation */}
                <nav className="mb-8">
                    <span className="text-pink-600 font-medium">• ABOUT</span>
                </nav>

                {/* Heading */}
                <h1 className="text-[#1B3B35] text-5xl font-medium mb-20">
                    Total Europe Football<br />Immersion.
                </h1>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1 */}
                    <div className="space-y-4">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="2" y="6" width="20" height="12" rx="2" />
                            <path d="M12 6v12M2 12h20" />
                        </svg>
                        <h3 className="text-[#1B3B35] text-xl font-medium leading-tight">
                            World class academy coaches and player development team
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-4">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2v20M2 12h20" />
                        </svg>
                        <h3 className="text-[#1B3B35] text-xl font-medium leading-tight">
                            World class / elite competition
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-4">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M7 7l5 5-5 5M14 7l5 5-5 5" />
                        </svg>
                        <h3 className="text-[#1B3B35] text-xl font-medium leading-tight">
                            Immersion with a Liga Europe Academy team
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="space-y-4">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M3 12h6M15 12h6M12 3v6M12 15v6" />
                        </svg>
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