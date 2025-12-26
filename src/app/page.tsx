'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
// Components
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import About from '@/components/About';
import EcosystemPartners from '@/components/EcosystemPartners';
import Features from '@/components/Features';
import ImpactCategories from '@/components/ImpactCategories';
import Philosophy from '@/components/Philosophy';
import SeoLinks from '@/components/SeoLinks';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WaveConwayBackground = dynamic(
  () => import('@/components/WaveConwayBackground'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Animation Layer */}
      <WaveConwayBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative bg-transparent">
        <Hero />
        <Pillars />
        <About />
        <EcosystemPartners />
        <Features />
        <ImpactCategories />
        <Philosophy />
        <SeoLinks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
