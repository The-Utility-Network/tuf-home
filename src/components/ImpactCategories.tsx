'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/data/seo';

export default function ImpactCategories() {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-heading"
                    >
                        GLOBAL_IMPACT
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                    >
                        Categories of Engagement
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {INDUSTRIES.slice(0, 6).map((ind, index) => (
                        <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-500 h-full flex flex-col"
                            >
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="text-4xl">{ind.processStages?.[0]?.icon || '🌐'}</span>
                                    <span className="text-xs font-mono text-gray-500 group-hover:text-utility-blue transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                                    {ind.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {ind.description}
                                </p>

                                <div className="flex items-center text-sm font-mono text-gray-500 group-hover:text-white transition-colors">
                                    <span>EXPLORE_CATEGORY</span>
                                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/industries"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                    >
                        <span className="text-sm font-bold tracking-wide">VIEW ALL 15 CATEGORIES</span>
                        <span className="ml-2">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
