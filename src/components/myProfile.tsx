'use client'

import UserProfileHeader from "./intro/UserProfileHeader";
import UserSkill from "./skill/UserSkill";
import { useUserProfile } from "@/context/ProfileContext";

export default function MyProfile() {

    const { userProfile, loading } = useUserProfile();
    const skills = userProfile?.skills || [];
    return (
        <main className="container">
            <UserProfileHeader/>
            <UserSkill skills={skills}/>
        </main>
    );
}

