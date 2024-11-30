import React from 'react'

interface AchievementsProps {
  achivements: string[] | [] | undefined;
}

const getCertificatesUrl = (index: number) => {
  if (index === 0) {
    return 'https://1drv.ms/i/c/cbb0ff3a7b514031/ETFAUXs6_7AggMsVCAAAAAABrlsiRX5GB1P5D1nzIQpv2A?e=gsYo5z';
  }
  else {
    return 'https://www.hackerrank.com/profile/arifuzzamantanin';
  }
}

const UserAchievements: React.FC<AchievementsProps> = ({ achivements }) => {
  return (
    <div className="light-gray-container rounded-3 p-4">
      <p className="fw-bold fs-4">Achievements & Certifications</p>
      <ul className="list-unstyled">
        {achivements?.map((achievement, index) => (
          <li key={index} className="d-flex justify-content-between align-items-center mb-3">
            <span className="pe-1">{achievement}</span>
            <span className="text-primary fs-6 cursor-pointer">
              <a
                className="text-decoration-none"
                href={getCertificatesUrl(index)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View certificate for ${achievement} by Arifuzzaman Tanin`}
                title={`Certificate of ${achievement} - Arifuzzaman Tanin`}
              >
                View
              </a>

            </span>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default UserAchievements