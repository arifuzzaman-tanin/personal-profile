// import { generatePageMetadata } from '@/utils/generateMetadata';
// import { Metadata } from 'next';

// type Params = {
//     slug: string;
// };

// // Ensure `generateMetadata` does not await params directly.
// export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
//     const { slug } = params; // params is already a resolved value, no need to await it
//     const metadata = await generatePageMetadata(slug);

//     return metadata;
// }

// interface PageProps {
//     params: Params; // params is already the resolved value, no need to treat it as a promise
// }

// const Page: React.FC<PageProps> = ({ params }) => {
//     const { slug } = params; // Directly destructure from params

//     return (
//         <main>
//             <h1>Dynamic Page: {slug}</h1>
//             <p>This content is dynamically rendered for the slug: {slug}</p>
//         </main>
//     );
// };

// export default Page;
