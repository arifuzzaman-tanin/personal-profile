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
              <p className={`${index % 2 === 0 ? '' : 'text-end'} fw-bold mb-0 pb-0`}>{item.jobTitle}</p>
              <p className={`${index % 2 === 0 ? '' : 'text-end'} fw-bold mb-0 pb-0`}>{item.employmentPeriod} ({item.employmentType})</p>
              <p className={`${index % 2 === 0 ? '' : 'text-end'}`}>{item.jobLocation}</p>
              <ul>
                {item.jobResponsibilities.map((responsibility: any, i) => {
                  return <li key={i} className='lh-lg'>{responsibility}</li>;
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
