'use client';

import UserProfileHeader from "./intro/UserProfileHeader";
import UserProfileHeaderPlaceholder from "./intro/UserProfileHeaderPlaceholder";
import UserSkill from "./skill/UserSkill";
import { useUserProfile } from "@/context/ProfileContext";
import UserTimeline from "./timeline/UserTimeline";

export default function MyProfile() {
    const { userProfile, loading } = useUserProfile();
    const skills = userProfile?.skills || [];

    if(!loading){
        console.log(userProfile?.workHistory);
    }

    return (
        <main className="container">
            {loading ? (
                <UserProfileHeaderPlaceholder />
            ) : (
                <>
                    <UserProfileHeader profileData={userProfile} />
                    <UserSkill skills={skills} />
                    <UserTimeline employmentHistory={userProfile?.workHistory}/>
                </>
            )}
        </main>
    );
}
