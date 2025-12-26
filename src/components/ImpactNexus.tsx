'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES, LOCATIONS } from '@/data/seo';

interface ImpactNexusProps {
    detailed?: boolean;
}

export default function ImpactNexus({ detailed = false }: ImpactNexusProps) {
    // Just a simple visualization for now that shows connections
    // In a real app this might be D3 or React Flow, but we'll use a stylized SVG/Div structure

    const nodes = useMemo(() => {
        if (detailed) {
            return INDUSTRIES.map((ind, i) => ({
                id: ind.slug,
                label: ind.title,
                type: 'industry',
                color: '#3B82F6' // simplistic default
            }));
        }
        return LOCATIONS.slice(0, 5).map((loc, i) => ({
            id: loc.slug,
            label: loc.city,
            type: 'location',
            color: '#10B981'
        }));
    }, [detailed]);

    return (
        <div className={`relative w-full ${detailed ? 'h-[600px]' : 'h-[400px]'} glass-panel rounded-3xl overflow-hidden border border-white/5`}>
            <div className="absolute inset-0 bg-black/50" />

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-4xl h-full p-12 flex items-center justify-center">
                    {/* Central Node */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute w-32 h-32 rounded-full border border-white/20 bg-black/80 backdrop-blur-md flex items-center justify-center z-20"
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold">TUF</div>
                            <div className="text-[10px] text-gray-400">NEXUS_CORE</div>
                        </div>
                    </motion.div>

                    {/* Orbiting Nodes */}
                    {nodes.map((node, i) => {
                        const angle = (i / nodes.length) * 2 * Math.PI;
                        const radius = detailed ? 220 : 140;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0, x: 0, y: 0 }}
                                animate={{ opacity: 1, x, y }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="absolute w-24 h-24 flex flex-col items-center justify-center text-center z-10"
                            >
                                <div className="w-3 h-3 rounded-full bg-white mb-2 shadow-[0_0_10px_white]" />
                                <div className="text-[10px] font-mono bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
                                    {node.label}
                                </div>
                                {/* Connection Line */}
                                <svg className="absolute -z-10 top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                                    <line
                                        x1="250"
                                        y1="250"
                                        x2={250 - x}
                                        y2={250 - y}
                                        stroke="white"
                                        strokeWidth="1"
                                    />
                                </svg>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {!detailed && (
                <div className="absolute bottom-6 right-6">
                    <div className="glass-panel px-4 py-2 text-xs font-mono text-gray-400">
                        LIVE_NET_STATUS: ACTIVE
                    </div>
                </div>
            )}
        </div>
    );
}
