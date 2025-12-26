'use client';

import { motion } from 'framer-motion';

export default function ComparisonChart({ competitorName }: { competitorName: string }) {
    const metrics = [
        { label: 'Settlement Speed', foundation: 98, comp: 12 },
        { label: 'Audit Precision', foundation: 99, comp: 45 },
        { label: 'Operating Cost', foundation: 92, comp: 35 },
        { label: 'Resource Recovery', foundation: 95, comp: 20 },
    ];

    return (
        <div className="w-full mt-12 bg-black/60 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-3xl relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grain-ledger.com/grid.svg')] bg-repeat" />
            <div className="absolute top-0 right-0 p-32 bg-utility-red/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-utility-red/20 transition-colors duration-1000" />

            <div className="flex items-center justify-between mb-10 relative z-10">
                <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-[0.4em]">Performance Delta</h4>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-utility-red shadow-[0_0_10px_#F54029]" />
                        <span className="text-[10px] font-mono text-white">TUF_PROTOCOL</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-700" />
                        <span className="text-[10px] font-mono text-gray-500">LEGACY_NGO</span>
                    </div>
                </div>
            </div>

            <div className="space-y-8 relative z-10">
                {metrics.map((m, i) => (
                    <div key={m.label} className="relative group/line">
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-bold text-gray-300 tracking-tight">{m.label}</span>
                            <div className="text-[10px] font-mono">
                                <span className="text-utility-red">+{m.foundation - m.comp}% Improvement</span>
                            </div>
                        </div>

                        <div className="relative h-12 flex items-center">
                            {/* Track */}
                            <div className="absolute inset-0 bg-white/[0.02] rounded-xl border border-white/5" />

                            {/* Segment Markers */}
                            <div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-20">
                                {[...Array(10)].map((_, idx) => (
                                    <div key={idx} className="h-full w-px bg-white/20" />
                                ))}
                            </div>

                            {/* Legacy Bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${m.comp}%` }}
                                transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                                className="absolute left-0 h-4 bg-gray-800 rounded-r-lg z-0 ml-1 opacity-50"
                            />

                            {/* TUF Bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${m.foundation}%` }}
                                transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 + 0.2 }}
                                className="absolute left-0 h-4 bg-gradient-to-r from-utility-red/40 to-utility-red rounded-r-lg z-10 ml-1 shadow-[0_0_20px_rgba(245,64,41,0.3)]"
                            >
                                <div className="absolute inset-0 bg-[url('https://grain-ledger.com/noise.png')] opacity-20" />
                                <div className="absolute top-0 right-0 h-4 w-1 bg-white shadow-[0_0_10px_white]" />
                            </motion.div>

                            {/* Percentage Tooltip (TUF) */}
                            <motion.div
                                className="absolute top-0 text-[10px] font-mono text-utility-red font-black -mt-6"
                                initial={{ opacity: 0, x: 0 }}
                                whileInView={{ opacity: 1, x: `${m.foundation - 2}%` }}
                                transition={{ duration: 1.5, delay: i * 0.1 + 0.2 }}
                            >
                                {m.foundation}%
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-gray-600 opacity-50 relative z-10">
                <span>// SOURCE: FOUNDATION_AUDIT_2025</span>
                <span>// ENCRYPTION: SHA-256_ACTIVE</span>
                <span>// STATUS: OPTIMIZED</span>
            </div>
        </div>
    );
}
