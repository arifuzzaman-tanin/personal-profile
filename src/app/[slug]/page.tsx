import { generatePageMetadata } from '@/utils/generateMetadata';
import { Metadata } from 'next';

type Params = {
    slug: string;
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;

    const metadata = await generatePageMetadata(slug);

    return metadata;
}

interface PageProps {
    params: Params;
}

const Page: React.FC<PageProps> = async ({ params }) => {
    const { slug } = await params;

    return (
        <main>
            <h1>Dynamic Page: {slug}</h1>
            <p>This content is dynamically rendered for the slug: {slug}</p>
        </main>
    );
};

export default Page;
