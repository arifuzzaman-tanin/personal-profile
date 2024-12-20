import React from 'react';
import styles from './UserTimeline.module.css';
import { EmploymentHistory } from '@/context/ProfileContext';
import useMediaQuery from '@/hooks/useMediaQuery';

interface EmploymentHistoryProps {
  employmentHistory: EmploymentHistory[] | undefined;
}

const UserTimeline: React.FC<EmploymentHistoryProps> = ({ employmentHistory }) => {
  const { isMobile } = useMediaQuery();

  const renderTimelineCardMobileView = (item: EmploymentHistory, index: number) => {
    const isEven = index % 2 === 0;
    return (
      <div
        className={`${styles.card} ${isEven ? styles.even : styles.odd}`}
        key={index}
      >
        <div className={styles.info}>
          <h4 className={styles.title}>{item.employer.companyName}</h4>
          <p className={`${isEven ? '' : 'text-end'} fw-bold mb-0 pb-0`}>{item.jobTitle}</p>
          <p className={`${isEven ? '' : 'text-end'} fw-bold mb-0 pb-0`}>{item.employmentPeriod} ({item.employmentType})</p>
          <p className={`${isEven ? '' : 'text-end'}`}>{item.jobLocation}</p>
          <ul>
            {item.jobResponsibilities.map((responsibility: any, i) => {
              return <li key={i} className='lh-lg'>{responsibility}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  };

  const timelineContentMobileView = (
    <div className={styles.timeline}>
      <div className={styles.outer}>
        {employmentHistory?.map((item, index) => renderTimelineCardMobileView(item, index))}
      </div>
    </div>
  );

  const timelineContentTabletDestop = (
    <div className="light-gray-container">
      <p className="fw-bold fs-4">Professional Experience</p>
      {employmentHistory?.map((item, index) => (
        <div key={index} className={`${index === 0 ? 'mt-0' : 'mt-3'} card shadow-none p-2 bg-body-tertiary rounded`}>
          <div className='card-body'>
            <h5 className={styles.timelineTitle}>{item.employer.companyName}</h5>
            <p className='fw-bold mb-0 pb-0'>{item.jobTitle}</p>
            <p className='fw-bold mb-0 pb-0'>{item.employmentPeriod} ({item.employmentType})</p>
            <p>{item.jobLocation}</p>
            <ul>
              {item.jobResponsibilities.map((responsibility: any, i) => {
                return <li key={i} className='lh-lg'>{responsibility}</li>;
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  return isMobile ? timelineContentMobileView : timelineContentTabletDestop;
};

export default UserTimeline;
