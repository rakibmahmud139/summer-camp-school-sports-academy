import React from 'react';
import useAuth from '../../../hooks/useAuth';

const InstructorHome = () => {
    const { user } = useAuth();
    return (
        <div className="w-full ml-4">
            <h3 className='text-3xl text-accent capitalize'><span className="text-pink-500">
                Hi, </span>{user.displayName}!</h3>
        </div>
    );
};

export default InstructorHome;