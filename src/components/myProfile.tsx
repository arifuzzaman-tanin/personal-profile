'use client'

import { useUserProfile } from "@/context/ProfileContext";

export default function MyProfile() {
    const { userProfile, loading } = useUserProfile();
    if(!loading){
        console.log(userProfile);
    }
    
    return (
        <main>
            <h1>My Profile</h1>
            <h1>{loading ? 'Loading...' : 'Profile Loaded'}</h1>
        </main>
    );
}

