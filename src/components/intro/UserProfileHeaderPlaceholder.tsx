import React from 'react'
import styles from './UserProfileIntro.module.css';

const UserProfileHeaderPlaceholder = () => {
    return (
        <div className='card shadow-none p-2 mb-5 mt-1 bg-body-tertiary rounded'>
            <div className={`${styles.profileHeaderRow} card-body`}>
                <div className={styles.profileImageWrapper}>
                    <img className={styles.placeholderImage} src="/static/no-image.png" alt='user profile image' />
                </div>
                <div>
                    <h5 className="card-title placeholder-glow mb-0 pb-0">
                        <span className="placeholder col-4"></span>
                    </h5>
                    <p className="card-title placeholder-glow">
                        <span className="placeholder col-2"></span>
                    </p>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileHeaderPlaceholder