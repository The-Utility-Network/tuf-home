import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPARISONS } from '@/data/seo';

export const metadata = {
    title: 'Competitive Analysis | The Utility Foundation',
    description: 'Compare The Utility Foundation against leading DePIN projects, RWA platforms, and traditional enterprise solutions.',
};

export default function ComparisonsPage() {
    const categories = Array.from(new Set(COMPARISONS.map(c => c.category)));

    return (
        <div className="min-h-screen bg-black text-white selection:bg-utility-red selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-heading">FOUNDATION IMPACT MODELS</span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 pb-2">
                        Non-Profit <br /> Transformation
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See how The Utility Foundation applies automation and tokenization to revolutionize traditional charitable models.
                    </p>
                </div>

                <div className="space-y-16">
                    {categories.map((category) => (
                        <section key={category}>
                            <h3 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4 flex items-center gap-4">
                                <span className="text-utility-red">{category}</span> Sector
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {COMPARISONS.filter(c => c.category === category).map((comp) => (
                                    <Link
                                        key={comp.slug}
                                        href={`/comparisons/${comp.slug}`}
                                        className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-utility-red/30 flex flex-col"
                                    >
                                        <div className="mb-4">
                                            <span className="text-xs font-mono text-gray-500 uppercase">Case Study</span>
                                            <h4 className="text-2xl font-bold">{comp.competitor}</h4>
                                        </div>

                                        <div className="bg-red-900/10 p-4 rounded-xl border border-red-500/10 mb-4">
                                            <span className="text-red-400 text-xs font-bold block mb-1">Traditional Model</span>
                                            <p className="text-sm text-gray-400 line-clamp-2">
                                                {comp.description}
                                            </p>
                                        </div>

                                        <div className="bg-green-900/10 p-4 rounded-xl border border-green-500/10 mt-auto">
                                            <span className="text-green-400 text-xs font-bold block mb-1">TUF Model</span>
                                            <p className="text-sm text-gray-300 line-clamp-2">
                                                {comp.foundationAdvantage}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex items-center justify-center text-sm font-mono text-gray-500">
                                            VIEW FULL ANALYSIS
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
