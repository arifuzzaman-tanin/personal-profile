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
        <section className="light-gray-container rounded-3">
            <header className="mb-3">
                <h2 className="fw-bold fs-4">Recent Blogs by Arifuzzaman Tanin</h2>
            </header>
            <div className="row gy-3">
                {articles?.map((article, index) => (
                    <article className="col-md-6 col-lg-4" key={index}>
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
                                    alt={`${article.title} thumbnail`}
                                />
                                <div className="card-body">
                                    <h3 className={`card-title ${styles.cardTitle}`}>
                                        {truncateText(article.title, 80)}
                                    </h3>
                                    <p className={`card-text ${styles.cardText}`}>
                                        {truncateText(article.body, 150)}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
            <footer className="text-center mt-4">
                <a
                    href="https://www.linkedin.com/today/author/tanin-arifuzzaman?trk=article-ssr-frontend-pulse_more-articles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    aria-label="View all blogs by Arifuzzaman Tanin on LinkedIn"
                >
                    View All Blogs by Arifuzzaman Tanin
                </a>
            </footer>
        </section>
    );
};

export default UserArticle;
