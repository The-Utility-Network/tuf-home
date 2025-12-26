'use client';

import { motion } from 'framer-motion';

const pillars = [
    {
        title: 'AUTOMATED INDUSTRY',
        description: 'Developing autonomous systems that increase efficiency and reduce manual labor.',
        code: 'MOD_01',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: 'SYMBIOTIC BUSINESS MODELS',
        description: 'Creating frameworks where businesses and communities grow together.',
        code: 'MOD_02',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: 'EMPOWERMENT & AGENCY',
        description: 'Providing tools for individuals to regain control over their economic future.',
        code: 'MOD_03',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        title: 'MITIGATING DISRUPTION',
        description: 'Ensuring a smooth transition into an automated world through education & access.',
        code: 'MOD_04',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

export default function Pillars() {
    return (
        <section id="pillars" className="relative z-10 py-32 px-6 overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-1/4 h-1/2 bg-utility-red/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-utility-red/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] font-mono tracking-[0.5em] text-utility-red uppercase mb-4 block">Architectural Integrity</span>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">Four Pillars of Innovation</h2>
                        <div className="w-24 h-1 bg-utility-red mx-auto rounded-full mb-8" />
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                            The foundation upon which we build sustainable, community-driven technology solutions for the next era of industrial civilization.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative z-10 h-full glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-utility-red/40 transition-all duration-500 hover:bg-white/[0.04] flex flex-col items-start overflow-hidden">
                                {/* HUD Accents */}
                                <div className="absolute top-6 right-8 font-mono text-[8px] text-gray-700 tracking-widest uppercase">
                                    {pillar.code}
                                </div>

                                <div className="text-utility-red mb-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(245,64,41,0.3)]">
                                    {pillar.icon}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-4 tracking-tight group-hover:text-utility-red transition-colors duration-300">
                                    {pillar.title}
                                </h3>

                                <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                                    {pillar.description}
                                </p>

                                {/* Interactive Footline */}
                                <div className="mt-8 w-1/4 h-0.5 bg-white/10 rounded-full group-hover:w-full group-hover:bg-utility-red transition-all duration-700" />
                            </div>

                            {/* Outer Glow on Hover */}
                            <div className="absolute -inset-4 bg-utility-red/5 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
