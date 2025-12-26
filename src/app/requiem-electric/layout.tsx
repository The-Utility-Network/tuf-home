import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Requiem Electric | Distributed Energy & Community | The Utility Foundation',
    description: 'Requiem Electric reimagines the power grid as a peer-to-peer network. We empower communities to generate, store, and trade their own energy, breaking dependence on centralized providers. A subsidiary of The Utility Foundation.',
    openGraph: {
        title: 'Requiem Electric | Distributed Energy & Community',
        description: 'Power to the people. Literally. Decentralized energy grids for sovereign communities.',
        siteName: 'The Utility Foundation',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Requiem Electric | Distributed Energy Network',
        description: 'Building the decentralized charging network of the future.',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
