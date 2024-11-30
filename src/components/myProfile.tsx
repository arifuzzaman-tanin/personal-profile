'use client';

import UserProfileHeader from "./intro/UserProfileHeader";
import UserProfileHeaderPlaceholder from "./intro/UserProfileHeaderPlaceholder";
import UserSkill from "./skill/UserSkill";
import { useUserProfile } from "@/context/ProfileContext";
import UserTimeline from "./timeline/UserTimeline";
import UserAchievements from "./achievement/UserAchievements";

export default function MyProfile() {
    const { userProfile, loading } = useUserProfile();

    if (!loading) {
        console.log(userProfile?.achievements);
    }

    return (
        <main className="container">
            {loading ? (
                <UserProfileHeaderPlaceholder />
            ) : (
                <div>
                    <UserProfileHeader profileData={userProfile} />
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-5">
                            <UserAchievements achivements={userProfile?.achievements} />
                        </div>
                        <div className="col-lg-6 col-md-12 mb-5">
                            <UserSkill skills={userProfile?.skills} />
                        </div>
                    </div>
                    <UserTimeline employmentHistory={userProfile?.workHistory} />
                </div>
            )}
        </main>
    );
}
