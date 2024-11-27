'use client'

import React from 'react'
import styles from './UserProfileIntro.module.css';
import { useUserProfile } from "@/context/ProfileContext";
import UserProfileHeaderPlaceholder from './UserProfileHeaderPlaceholder';
import GitHubIcon from '@/components/icons/GitHubIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'

const UserProfileHeader = () => {

    const { userProfile, loading } = useUserProfile();
    if (!loading) {
        console.log(userProfile);
    }

    if (loading) {
        return <UserProfileHeaderPlaceholder />;
    }

    return (
        <div>
            <div className='card shadow-none p-2 mb-5 mt-1 bg-body-tertiary rounded'>
                <div className={`${styles.profileHeaderRow} card-body`}>
                    <div className={styles.profileImageWrapper}>
                        <img src={userProfile?.image ?? "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="} alt='user profile image' />
                    </div>
                    <div>
                        <div className={styles.textCenterMobileView}>
                            <p className='fw-bold fs-3 mb-0 pb-0'>{userProfile?.name}</p>
                            <p className='fw-bold fs-7 text-primary'>{userProfile?.role}</p>
                        </div>
                        <p>{userProfile?.about}</p>
                        <div className={styles.socialIconsCenterMobileView}>
                            <a
                                className='me-3'
                                href={userProfile?.github}
                                target="_blank"
                                title={`Visit ${userProfile?.name}'s GitHub profile`}
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href={userProfile?.linkedin}
                                target="_blank"
                                title={`View ${userProfile?.name}'s LinkedIn profile`}
                            >
                                <LinkedinIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileHeader
