import { Metadata } from 'next';
import { fetchData } from './fetchData';

// Add default SEO metadata
export async function generatePageMetadata(slug: string, useDefault: boolean = false): Promise<Metadata> {
    if (useDefault) {
        // Return default metadata if useDefault is true
        return {
            title: "Arifuzzaman Tanin - Software Engineer",
            description: "Arifuzzaman Tanin, a results-driven Full Stack Developer with expertise in .NET technologies, Azure, and modern frontend frameworks.",
            openGraph: {
                title: "Arifuzzaman Tanin - Software Engineer",
                description: "Discover the professional portfolio of Arifuzzaman Tanin, featuring over 9 years of experience in software development.",
                url: `https://arifuzzaman-tanin.github.io/personal-profile`,
                images: [
                    {
                        url: "https://raw.githubusercontent.com/arifuzzaman-tanin/arifuzzaman-tanin-resume/refs/heads/main/assets/images/tanin.webp",
                        width: 800,
                        height: 600,
                        alt: "Arifuzzaman Tanin",
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: "Arifuzzaman Tanin - Software Engineer",
                description: "Explore the portfolio of Arifuzzaman Tanin, Full Stack Developer and software engineering specialist.",
                images: [
                    "https://raw.githubusercontent.com/arifuzzaman-tanin/arifuzzaman-tanin-resume/refs/heads/main/assets/images/tanin.webp",
                ],
            },
        };
    }

    const data = await fetchData<{ title: string; description?: string; image?: string }>(
        `https://jsonplaceholder.typicode.com/posts/${slug}`
    );

    if (!data) {
        // Default metadata if data fetch fails
        return {
            title: "Arifuzzaman Tanin - Software Engineer",
            description: "Arifuzzaman Tanin, a results-driven Full Stack Developer with expertise in .NET technologies, Azure, and modern frontend frameworks.",
            openGraph: {
                title: "Arifuzzaman Tanin - Software Engineer",
                description: "Discover the professional portfolio of Arifuzzaman Tanin, featuring over 9 years of experience in software development.",
                url: `https://www.arifuzzaman-tanin.github.io/${slug}`,
                images: [
                    {
                        url: "https://raw.githubusercontent.com/arifuzzaman-tanin/arifuzzaman-tanin-resume/refs/heads/main/assets/images/tanin.webp",
                        width: 800,
                        height: 600,
                        alt: "Arifuzzaman Tanin",
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: "Arifuzzaman Tanin - Software Engineer",
                description: "Explore the portfolio of Arifuzzaman Tanin, Full Stack Developer and software engineering specialist.",
                images: [
                    "https://raw.githubusercontent.com/arifuzzaman-tanin/arifuzzaman-tanin-resume/refs/heads/main/assets/images/tanin.webp",
                ],
            },
        };
    }

    // Metadata based on fetched data
    const title = data.title ?? "Arifuzzaman Tanin - Software Engineer";
    const description = data.description || "Explore the professional journey of Arifuzzaman Tanin.";

    return {
        title: `${title} - My Application`,
        description,
        openGraph: {
            title,
            description,
            url: `https://www.arifuzzaman-tanin.github.io/${slug}`,
            images: [
                {
                    url: data.image || "https://raw.githubusercontent.com/arifuzzaman-tanin/arifuzzaman-tanin-resume/refs/heads/main/assets/images/tanin.webp",
                    width: 800,
                    height: 600,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                data.image || "https://raw.githubusercontent.com/arifuzzaman-tanin/arifuzzaman-tanin-resume/refs/heads/main/assets/images/tanin.webp",
            ],
        },
    };
}
