import React from 'react';
import { SkillDetail } from '@/context/ProfileContext';
import styles from './UserSkill.module.css';
import DotNetIcon40x40 from '@/components/icons/DotNetIcon40x40';
import GitHubIcon40x40 from '@/components/icons/GitHubIcon40x40';
import NoIcon from '@/components/icons/NoIcon';
import PhpIcon40x40 from '@/components/icons/PhpIcon40x40';
import DatabaseIcon40x40 from '@/components/icons/DatabaseIcon40x40';
import RestApiIcon40x40 from '@/components/icons/RestApiIcon40x40';
import JavaScriptIcon40x40 from '@/components/icons/JavaScriptIcon40x40';
import DockerIcon40x40 from '@/components/icons/DockerIcon40x40';
import AzureIcon40x40 from '@/components/icons/AzureIcon40x40';
import AwsIcon40x40 from '@/components/icons/AwsIcon40x40';
import HtmlIcon40x40 from '@/components/icons/HtmlIcon40x40';
import CssIcon40x40 from '@/components/icons/CssIcon40x40';
import CacheIcon40x40 from '@/components/icons/CacheIcon40x40';
import MicroservicesIcon40x40 from '@/components/icons/MicroservicesIcon40x40';
import useMediaQuery from '@/hooks/useMediaQuery';

const iconMap: Record<string, React.FC> = {
    DotNetIcon: DotNetIcon40x40,
    GitIcon: GitHubIcon40x40,
    PhpIcon: PhpIcon40x40,
    DatabaseIcon: DatabaseIcon40x40,
    RestApiIcon: RestApiIcon40x40,
    JavaScriptIcon: JavaScriptIcon40x40,
    DockerIcon: DockerIcon40x40,
    AzureIcon: AzureIcon40x40,
    AwsIcon: AwsIcon40x40,
    HtmlIcon: HtmlIcon40x40,
    CssIcon: CssIcon40x40,
    CacheIcon: CacheIcon40x40,
    MicroservicesIcon: MicroservicesIcon40x40,
    default: NoIcon,
};

interface SkillDetailProps {
    skills: SkillDetail[] | [] | undefined;
}

const UserSkill: React.FC<SkillDetailProps> = ({ skills }) => {
    const visibleSkills = skills?.filter((skill) => !skill.isHidden);
    const { isMobile } = useMediaQuery();

    return (
        <div className='light-gray-container rounded-3'>
            <p className='fw-bold fs-4'>
                {isMobile ? "Expert in this area" : "Advanced expertise in these technologies"}
            </p>
            <div className={`${styles.skillItemContainer}`}>
                {visibleSkills?.map((skill, index) => {
                    const IconComponent = iconMap[skill.icon] || iconMap.default;

                    return (
                        <div
                            key={index}
                            className={styles.skillItemCard}
                            title={skill.skillName}
                        >
                            <div>
                                <IconComponent />
                                <p>{skill.shortName}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default UserSkill;
