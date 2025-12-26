import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImpactNexus from '@/components/ImpactNexus';
import { INDUSTRIES } from '@/data/seo';

export const metadata = {
    title: 'Global Impact Areas | The Utility Foundation',
    description: 'We don\'t just offer software; we offer structural transformation across 15 critical impact categories.',
};

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-utility-red selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-heading">FOUNDATION_NETWORK</span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 pb-2">
                        Global Impact <br /> Areas
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore our 15 key categories of engagement. Each node represents a structural transformation powered by automation and tokenization.
                    </p>
                </div>

                {/* Detailed Impact Nexus */}
                <div className="mb-12 overflow-hidden py-4">
                    <ImpactNexus detailed={true} />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {INDUSTRIES.map((ind, index) => {
                        // Color mapping to match ImpactNexus
                        const colorMap: Record<string, string> = {
                            'animal-conservation': '#10B981',
                            'childrens-health': '#F472B6',
                            'environmental-awareness': '#34D399',
                            'financial-literacy': '#FBBF24',
                            'gender-equality': '#A855F7',
                            'artists-creators': '#F97316',
                            'indigenous-rights': '#EA580C',
                            'justice-peace': '#3B82F6',
                            'medical-access': '#EF4444',
                            'mental-health': '#14B8A6',
                            'minority-rights': '#6366F1',
                            'nature-habitat': '#84CC16',
                            'research-initiatives': '#0EA5E9',
                            'spirituality': '#D8B4FE',
                            'veterans-community': '#1E40AF',
                        };
                        const catColor = colorMap[ind.slug] || '#F54029';

                        return (
                            <Link
                                key={ind.slug}
                                href={`/industries/${ind.slug}`}
                                className="group glass-panel p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-500 border border-white/5 relative overflow-hidden flex flex-col"
                                style={{
                                    // @ts-ignore
                                    '--hover-glow': `${catColor}15`,
                                    '--hover-border': `${catColor}40`
                                }}
                            >
                                {/* Dynamic Glow Background */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at top right, ${catColor}15, transparent 70%)` }}
                                />

                                <div className="mb-6 relative z-10">
                                    <span className="text-[10px] font-mono text-gray-600 block mb-2 uppercase tracking-widest" style={{ color: `${catColor}80` }}>Category_{index + 1}</span>
                                    <h2 className="text-2xl font-bold group-hover:text-white transition-colors">{ind.title}</h2>
                                </div>

                                <p className="text-sm text-gray-400 mb-8 font-light leading-relaxed flex-grow relative z-10">
                                    {ind.description}
                                </p>

                                <div className="mt-auto relative z-10">
                                    <div className="h-px w-8 bg-white/10 group-hover:w-full transition-all duration-500 mb-6" style={{ backgroundColor: `${catColor}40` }} />
                                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 group-hover:text-white transition-colors">
                                        <span style={{ color: catColor }}>VIEW_ARCHITECTURE</span>
                                        <span>→</span>
                                    </div>
                                </div>

                                {/* Hover Border Overlay */}
                                <div
                                    className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors duration-500 rounded-[2rem]"
                                    style={{ borderColor: `var(--hover-border)` }}
                                />
                            </Link>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
}
