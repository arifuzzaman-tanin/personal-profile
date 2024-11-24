import { Metadata } from 'next';
import { fetchData } from './fetchData'; // Import the fetchData utility

export async function generatePageMetadata(slug: string): Promise<Metadata> {
    const data = await fetchData<{ title: string; description?: string; image?: string }>(
        `https://jsonplaceholder.typicode.com/posts/${slug}`
    );

    if (!data) {
        // If fetch fails, return default metadata
        return {
            title: "Default Title - My Application",
            description: "Default description for my app.",
            openGraph: {
                title: "Default Title",
                description: "Default description for my app.",
                url: `https://www.mywebsite.com/${slug}`,
                images: [{ url: "/static/og-image.jpg", width: 800, height: 600, alt: "Default Title" }],
            },
            twitter: {
                card: "summary_large_image",
                title: "Default Title",
                description: "Default description for my app.",
                images: ["/static/og-image.jpg"],
            },
        };
    }

    // Otherwise, return metadata based on the fetched data
    const title = data.title ?? "Default Title";

    return {
        title: `${title} - My Application`,
        description: data.description || "Default description for my app.",
        openGraph: {
            title,
            description: data.description,
            url: `https://www.mywebsite.com/${slug}`,
            images: [
                {
                    url: data.image || "/static/og-image.jpg",
                    width: 800,
                    height: 600,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: data.description,
            images: [data.image || "/static/og-image.jpg"],
        },
    };
}
