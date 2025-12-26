import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Model | The Creative Revolution | The Utility Foundation',
    description: 'A nine-part philosophical treatise on the Creative Revolution. We explore how automation liberates humanity from drudgery, the shift from survival to creation, and the role of the Utility Foundation in building a future where technology serves spiritual and artistic flourishing.',
    keywords: ['Creative Revolution', 'Philosophy', 'Automation', 'Human Flourishing', 'Universal Basic Compute', 'Post-Scarcity', 'Digital Renaissance', 'Technological Humanism', 'Future of Work', 'I3AS Philosophy'],
    openGraph: {
        title: 'Our Model | The Creative Revolution',
        description: 'The Blueprint for a Post-Labor Economy. Read the nine chapters of our foundational philosophy.',
        siteName: 'The Utility Foundation',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Creative Revolution',
        description: 'A philosophical treatise on automation, creativity, and the future of humanity.',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
