import React from 'react';
import type { User } from "../src/features/UserSlice";

interface UserProfileProps {
    user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <div className='text-[10px] border-2 p-3 '>
            <h1 >Name: {user.name}</h1>
            <h2>Email: {user.email}</h2>
            <h3>Age:{user.age}</h3>
        </div>
    );
}

export default UserProfile;
