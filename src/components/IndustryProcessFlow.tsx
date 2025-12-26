'use client';

import { motion } from 'framer-motion';

interface Stage {
    icon: string;
    title: string;
    desc: string;
}

interface Props {
    stages?: Stage[];
}

export default function IndustryProcessFlow({ stages }: Props) {
    const defaultStages = [
        { icon: '📝', title: 'Legacy Audit', desc: 'Manual Data Entry' },
        { icon: '⛓️', title: 'Tokenization', desc: 'Asset Digitzation' },
        { icon: '⚡', title: 'Automation', desc: 'Smart Contract Logic' },
        { icon: '🚀', title: 'Settlement', desc: 'Instant Value Transfer' }
    ];

    const activeStages = stages || defaultStages;

    return (
        <div className="w-full py-20 relative">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-r from-utility-red/5 via-transparent to-blue-500/5 blur-3xl opacity-30 pointer-events-none" />

            <h3 className="text-sm font-bold mb-16 text-center uppercase tracking-[0.3em] text-gray-500 relative z-10">System Architecture Flow</h3>

            <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-6xl mx-auto px-4 translate-y-2">
                {/* Connecting Line with Animated Flow */}
                <div className="absolute top-1/2 left-20 right-20 h-px bg-white/10 -z-10 hidden md:block overflow-hidden">
                    <motion.div
                        className="h-full w-1/4 bg-gradient-to-r from-transparent via-utility-red to-transparent"
                        animate={{ x: ['-100%', '400%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Stages */}
                {activeStages.map((stage, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex flex-col items-center flex-1"
                    >
                        <div className="relative group w-full h-full flex flex-col items-center">
                            {/* Card Content */}
                            <div className="relative z-10 w-full h-full bg-black/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] text-center hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 flex flex-col items-center shadow-2xl">
                                {/* Ambient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Step Indicator */}
                                <div className="mb-6 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-mono text-xs text-gray-500 group-hover:border-utility-red/50 group-hover:text-utility-red transition-all duration-500">
                                        0{i + 1}
                                    </div>
                                </div>

                                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                    {stage.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-utility-red transition-colors">{stage.title}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed font-light flex-grow">{stage.desc}</p>

                                {/* Bottom Accent */}
                                <div className="mt-6 w-8 h-1 bg-white/10 rounded-full group-hover:w-16 group-hover:bg-utility-red transition-all duration-500" />
                            </div>

                            {/* Arrow for mobile (Hidden on desktop) */}
                            {i < activeStages.length - 1 && (
                                <div className="md:hidden py-4 text-gray-600 animate-bounce">
                                    ↓
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Tech HUD Accents */}
            <div className="mt-20 flex justify-center gap-8 opacity-20 pointer-events-none">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-white" />
                <div className="text-[10px] font-mono tracking-widest uppercase">Process_Verification_Module_v2</div>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-white" />
            </div>
        </div>
    );
}
