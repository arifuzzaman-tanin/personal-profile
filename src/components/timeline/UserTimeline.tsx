import React from 'react';
import styles from './UserTimeline.module.css';
import { EmploymentHistory } from '@/context/ProfileContext';

interface EmploymentHistoryProps {
  employmentHistory: EmploymentHistory[] | undefined;
}

const UserTimeline: React.FC<EmploymentHistoryProps> = ({ employmentHistory }) => {

  return (
    <div className={styles.timeline}>
      <div className={styles.outer}>
        {employmentHistory?.map((item, index) => (
          <div
            className={`${styles.card} ${index % 2 === 0 ? styles.even : styles.odd}`}
            key={index}
          >
            <div className={styles.info}>
              <h4 className={styles.title}>{item.employer.companyName}</h4>
              <h5 className={styles.title}>{item.jobTitle}</h5>
              <ul>
                {item.jobResponsibilities.map((responsibility: any, i) => {
                  return <li key={i}>{responsibility}</li>;
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTimeline;
