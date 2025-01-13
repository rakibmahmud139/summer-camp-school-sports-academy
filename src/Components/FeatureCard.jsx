import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div>
            <div className="flex flex-col items-center text-center p-6">
                <div className="mb-4 text-primary">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard