import { Article } from '@/context/ProfileContext';
import React from 'react';
import styles from './UserArticle.module.css';

interface UserArticleProps {
    articles: Article[] | [] | undefined;
}

const UserArticle: React.FC<UserArticleProps> = ({ articles }) => {
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };

    return (
        <div className="light-gray-container rounded-3">
            <p className="fw-bold fs-4">Recent Blogs</p>
            <div className="row gy-3">
                {articles?.map((article, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-decoration-none ${styles.articleLink}`}
                        >
                            <div className={`card ${styles.articleCard}`}>
                                <img
                                    src={article.image}
                                    className={`card-img-top ${styles.cardImage}`}
                                    alt="user profile image"
                                />
                                <div className="card-body">
                                    <h5 className={`card-title ${styles.cardTitle}`}>
                                        {truncateText(article.title, 80)}
                                    </h5>
                                    <p className={`card-text ${styles.cardText}`}>
                                        {truncateText(article.body, 150)}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            {/* View All Button */}
            <div className="text-center mt-4">
                <a
                    href="https://www.linkedin.com/today/author/tanin-arifuzzaman?trk=article-ssr-frontend-pulse_more-articles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    View All
                </a>
            </div>
        </div>
    );
};

export default UserArticle;
