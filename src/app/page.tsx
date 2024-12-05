import MyProfile from "@/components/myProfile";
import { generatePageMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await generatePageMetadata('', true);

  return metadata;
}

export default function Home() {
  return (
    <main>
      <MyProfile/>
    </main>
  );
}
