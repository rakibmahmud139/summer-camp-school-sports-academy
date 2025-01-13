import React from 'react'
import { Brain, Target, Shield, Users } from 'lucide-react'
import FeatureCard from './FeatureCard'

const WhatDoes = () => {
    const features = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Experience Coaching",
            description: "Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna"
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Mental Stability",
            description: "Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Controlled Recovery",
            description: "Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Cultural & Educational Activities",
            description: "Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna"
        }
    ]
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className=" mb-12">
                    <nav className="mb-4">
                        <span className="text-pink-600 font-medium uppercase">• What Does</span>
                    </nav>
                    <h2 className="text-3xl text-center font-bold text-gray-900">
                        Improve the Game by Focusing on Key Elements
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhatDoes