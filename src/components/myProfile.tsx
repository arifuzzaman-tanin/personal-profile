'use client';

import UserProfileHeader from "./intro/UserProfileHeader";
import UserProfileHeaderPlaceholder from "./intro/UserProfileHeaderPlaceholder";
import UserSkill from "./skill/UserSkill";
import { useUserProfile } from "@/context/ProfileContext";

export default function MyProfile() {
    const { userProfile, loading } = useUserProfile();
    const skills = userProfile?.skills || [];

    return (
        <main className="container">
            {loading ? (
                <UserProfileHeaderPlaceholder />
            ) : (
                <>
                    <UserProfileHeader profileData={userProfile} />
                    <UserSkill skills={skills} />
                </>
            )}
        </main>
    );
}
