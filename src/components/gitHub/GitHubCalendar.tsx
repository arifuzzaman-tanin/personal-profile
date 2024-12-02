import React from 'react';
import styles from './GitHubCalendar.module.css';
import useMediaQuery from '@/hooks/useMediaQuery';
import { GitHubData } from '@/context/ProfileContext';

interface GitHubDataProps {
    gitHubData: GitHubData | undefined;
}

const GitHubCalendar: React.FC<GitHubDataProps> = ({ gitHubData }) => {
    const { isMobile } = useMediaQuery();
    return (
        <div className='light-gray-container rounded-3'>
            <p className="fw-bold fs-4">GitHub Profile</p>
            <div className="row text-center">
                <div className="col-md-4">
                    <div className={`${styles.statsCard} stats-card p-3 rounded`}>
                        <p className="fw-bold text-primary mb-1">Followers</p>
                        <p className="fs-5 text-dark mb-0">{gitHubData?.followers}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={`${styles.statsCard} stats-card p-3 rounded`}>
                        <p className="fw-bold text-primary mb-1">Following</p>
                        <p className="fs-5 text-dark mb-0">{gitHubData?.following}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={`${styles.statsCard} stats-card p-3 rounded`}>
                        <p className="fw-bold text-primary mb-1">Repositories</p>
                        <p className="fs-5 text-dark mb-0">{gitHubData?.totalPublicRepos}</p>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-6">
                    <a
                        href="https://github.com/arifuzzaman-tanin"
                        className="btn btn-outline-primary w-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Arifuzzaman Tanin's GitHub profile"
                    >
                        View Profile
                    </a>
                </div>
                <div className="col-6">
                    <a
                        href="https://github.com/arifuzzaman-tanin?tab=repositories"
                        className="btn btn-outline-primary w-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Arifuzzaman Tanin's GitHub repositories"
                    >
                        {isMobile ? 'Repositories' : 'View Repositories'}
                    </a>
                </div>
            </div>

            <iframe
                src='https://arifuzzaman-tanin.github.io/arifuzzaman-tanin-resume/github-cal.html'
                title="GitHub Contribution Chart of Arifuzzaman Tanin"
                aria-label="GitHub Contribution Chart of Arifuzzaman Tanin"
                className={`${styles.contributionCalendarIframe}`}
            />
        </div>
    );
};

export default GitHubCalendar;
