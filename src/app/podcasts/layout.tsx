import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Refrain | Philosophy & Spirituality | The Utility Foundation',
    description: 'Explore the philosophical bedrock of The Utility Foundation. The Refrain investigates the clandestine spaces between territory and technology, framing automation as a spiritual and ethical imperative.',
    openGraph: {
        title: 'The Refrain | Philosophy & Spirituality',
        description: 'The Podcast from the Edge of the Machine. Discussing the metaphysics of money and the soul of software.',
        url: 'https://theutility.com/podcasts',
        siteName: 'The Utility Foundation',
        images: [
            {
                url: '/podcasts-og.png',
                width: 1200,
                height: 630,
                alt: 'The Refrain Podcast',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Refrain | Philosophy & Spirituality',
        description: 'Philosophy, Spirituality, and Economics. The intellectual engine of The Utility Foundation.',
        images: ['/podcasts-og.png'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
