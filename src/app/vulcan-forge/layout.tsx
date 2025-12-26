import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vulcan Forge | Tokenized 3D Printing | The Utility Foundation',
    description: 'Vulcan Forge connects digital design to physical production. By tokenizing the manufacturing process, we allow creators to access industrial-grade 3D printing and logistics infrastructure as a service, powered by The Utility Foundation.',
    openGraph: {
        title: 'Vulcan Forge | Tokenized 3D Printing',
        description: 'Decentralized manufacturing for the creator economy. Turn your digital assets into physical reality.',
        siteName: 'The Utility Foundation',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vulcan Forge | Own the Means of Production',
        description: 'Tokenized 3D printing infrastructure. Distributed manufacturing for the 21st century.',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
