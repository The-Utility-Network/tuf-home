import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Loch Ness Botanical Society | Automated Abundance | The Utility Foundation',
    description: 'Loch Ness Botanical Society combines ancient agricultural wisdom with modern automation. We build self-sustaining botanical systems that provide abundance for communities. A subsidiary of The Utility Foundation.',
    keywords: ['Loch Ness Botanical Society', 'Aquaponics', 'NFT Greenhouse', 'Sustainable Agriculture', 'Grow Spot NFT', 'Automated Abundance', 'Urban Farming', 'Blockchain Agriculture', 'Satellite Project', 'Green Tech'],
    openGraph: {
        title: 'Loch Ness Botanical Society | Automated Abundance',
        description: 'Gardens that tend themselves. Reconnecting humanity with nature through technology.',
        type: 'website',
        locale: 'en_US',
        siteName: 'The Utility Foundation',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Loch Ness Botanical Society | Automated Abundance',
        description: 'World\'s first NFT-mediated crypto greenhouse. Sustainable aquaponics meets decentralized ownership.',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
