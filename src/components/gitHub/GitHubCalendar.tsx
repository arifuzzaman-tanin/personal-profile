import React from 'react';
import styles from './GitHubCalendar.module.css';

const GitHubCalendar = () => {
    return (
        <div className='light-gray-container rounded-3'>
            <p className="fw-bold fs-4">GitHub Profile</p>
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="stats-card p-3 rounded">
                        <p className="fw-bold text-primary mb-1">Followers</p>
                        <p className="fs-5 text-dark mb-0">8</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="stats-card p-3 rounded">
                        <p className="fw-bold text-primary mb-1">Following</p>
                        <p className="fs-5 text-dark mb-0">8</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="stats-card p-3 rounded">
                        <p className="fw-bold text-primary mb-1">Repositories</p>
                        <p className="fs-5 text-dark mb-0">50</p>
                    </div>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-6">
                    <button className='btn btn-outline-primary w-100'>View profile</button>
                </div>
                <div className="col-6">
                    <button className='btn btn-outline-primary w-100'>View Repositories</button>
                </div>
            </div>

            <iframe
                src='https://arifuzzaman-tanin.tiiny.site/'
                title="GitHub Contribution Chart of Arifuzzaman Tanin"
                aria-label="GitHub Contribution Chart of Arifuzzaman Tanin"
                className={`${styles.contributionCalendarIframe} rounded-4 p-2`}
            />
        </div>
    );
};

export default GitHubCalendar;
