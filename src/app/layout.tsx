import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Utility Foundation",
  description: "Cultivating partnerships to sustain positive change in society and the environment through the Graine Ledger Partner Program.",
  keywords: ["I3AS", "Industrial Automation as a Service", "Web3", "NFT", "Blockchain", "Decentralized Automation", "The Graine Ledger", "DigiBazaar", "Osiris Protocol", "Sustainable Technology", "Tokenized Infrastructure", "Smart Contracts", "ERC-2535", "Diamond Standard"],
  authors: [{ name: "The Utility Foundation" }],
  creator: "The Utility Foundation",
  publisher: "The Utility Foundation",
  metadataBase: new URL('https://theutilityfoundation.org'),
  openGraph: {
    title: "The Utility Foundation | Create More Than You Consume.",
    description: "Industrial Automation as a Service. Create More Than You Consume. We weave blockchain, sustainable agriculture, and creative innovation into a tapestry of human flourishing—transforming industries through decentralized automation.",
    type: "website",
    locale: "en_US",
    siteName: "The Utility Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Utility Foundation | I3AS",
    description: "Where ancient wisdom meets autonomous machinery. Empowering communities to own the means of production through decentralized automation.",
    creator: "@theutilityfoundation",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Medallions/TUF-op.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
