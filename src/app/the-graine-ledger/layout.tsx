import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Graine Ledger | NFT-Mediated Crypto Distillery | The Utility Foundation',
    description: 'The Graine Ledger tokenizes the aging process of fine spirits. By turning whiskey casks into liquid assets, we allow investors to participate in the maturation of value. A subsidiary of The Utility Foundation.',
    keywords: ['The Graine Ledger', 'Crypto Distillery', 'Whiskey NFT', 'Asset Backed NFT', 'Cask Ownership', 'Fine Spirits', 'Real World Assets', 'RWA', 'NFT Investing', 'Digital Deeds'],
    openGraph: {
        title: 'The Graine Ledger | NFT-Mediated Crypto Distillery',
        description: 'Invest in time itself. Tokenized casks of fine spirits, backed by real-world assets.',
        type: 'website',
        locale: 'en_US',
        siteName: 'The Utility Foundation',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Graine Ledger | Crypto Distillery',
        description: 'Tokenizing fine spirits. Own physical whiskey casks through secure NFT deeds.',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
