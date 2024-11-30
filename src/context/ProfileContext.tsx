'use client'
import React, { createContext, useState, useEffect } from 'react';

export interface SkillDetail {
    skillName: string;
    proficiencyLevel: string;
    shortName: string;
    icon: string;
    isHidden: boolean;
}

export interface CompanyContactInfo {
    websiteUrl: string;
    logoUrl: string;
}

export interface EmployerDetails {
    companyName: string;
    contactInformation: CompanyContactInfo[];
}

export interface JobResponsibility {
    responsibilityTitle: string;
    responsibilityDescription?: string;
}

export interface EmploymentHistory {
    employer: EmployerDetails;
    jobTitle: string;
    employmentType: string;
    employmentPeriod: string;
    jobLocation: string;
    jobResponsibilities: JobResponsibility[];
}

export interface ProjectDetail {
    projectName: string;
    projectDescription: string;
    techStack: string[];
}

export interface UserProfile {
    name: string;
    image: string;
    emailAddress: string;
    phoneNumber: string;
    location: string;
    linkedin: string;
    github: string;
    role: string;
    about: string;
    achievements: string[];
    skills: SkillDetail[];
    workHistory: EmploymentHistory[];
    projectDetails?: ProjectDetail[];
}

interface UserProfileContextType {
    userProfile: UserProfile | null;
    loading: boolean;
    error: string | null;
    updateUserProfile: (profile: UserProfile) => void;
}

const UserProfileContext = createContext<UserProfileContextType>({
    userProfile: null,
    loading: true,
    error: null,
    updateUserProfile: () => { },
});

interface UserProfileProviderProps {
    children: React.ReactNode;
}

const populateUserProfile = (userProfile: any): UserProfile => {
    const profileData: UserProfile = {
        name: userProfile.profile.name,
        image: userProfile.profile.image,
        emailAddress: userProfile.profile.email,
        phoneNumber: userProfile.profile.phone,
        location: userProfile.profile.location,
        linkedin: userProfile.profile.linkedin,
        github: userProfile.profile.github,
        role: userProfile.profile.role,
        about: userProfile.profile.about,
        achievements: userProfile.achievements,
        skills: Array.isArray(userProfile.skills) ? userProfile.skills.map((skill: any) => ({
            skillName: skill.name,
            proficiencyLevel: skill.achieved,
            shortName: skill.title,
            icon: skill.icon,
            isHidden: skill.isHidden

        })) : [],
        workHistory: Array.isArray(userProfile.workExperiences) ? userProfile.workExperiences.map((experience: any) => ({
            employer: {
                companyName: experience.company.name,
                contactInformation: experience.company.contact.map((contact: any) => ({
                    websiteUrl: contact.website,
                    logoUrl: contact.logo
                }))
            },
            jobTitle: experience.position,
            employmentType: experience.jobType,
            employmentPeriod: experience.duration,
            jobLocation: experience.location,
            jobResponsibilities: experience.responsibilities
        })) : [],
        projectDetails: userProfile.projects
    };

    return profileData
}

export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({ children }) => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/arifuzzaman-tanin/arifuzzaman-tanin-resume/refs/heads/main/assets/database.json');
                const data: UserProfile = await response.json();
                const populatedProfileData = populateUserProfile(data);

                setUserProfile(populatedProfileData);
            } catch (err) {
                setError('Failed to load user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const updateUserProfile = (profile: UserProfile) => {
        setUserProfile(profile);
    };

    return (
        <UserProfileContext.Provider
            value={{
                userProfile,
                loading,
                error,
                updateUserProfile,
            }}
        >
            {children}
        </UserProfileContext.Provider>
    );
};

export const useUserProfile = () => React.useContext(UserProfileContext);