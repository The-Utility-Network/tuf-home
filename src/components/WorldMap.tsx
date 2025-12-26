'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { LOCATIONS } from '@/data/seo';
import Link from 'next/link';
import { useState } from 'react';

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap() {
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

    return (
        <div className="relative w-full aspect-[21/9] bg-black rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl group">
            {/* Deep Space Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a0a_0%,#000_100%)]" />

            {/* Tech Grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(245,64,41,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245,64,41,0.2) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Scanning Line Animation */}
            <motion.div
                className="absolute left-0 right-0 h-px bg-utility-red/20 z-20 pointer-events-none shadow-[0_0_15px_#F54029]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative w-full h-full flex items-center justify-center p-4">
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ scale: 120, center: [0, 20] }}
                    className="w-full h-full"
                >
                    <Geographies geography={GEO_URL}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#111"
                                    stroke="#222"
                                    strokeWidth={0.5}
                                    className="transition-all duration-500 hover:fill-[#1a1a1a] outline-none"
                                />
                            ))
                        }
                    </Geographies>

                    {LOCATIONS.map((loc) => (
                        <Marker key={loc.slug} coordinates={[loc.coordinates.x, loc.coordinates.y]}>
                            <g
                                onMouseEnter={() => setHoveredLocation(loc.slug)}
                                onMouseLeave={() => setHoveredLocation(null)}
                                className="cursor-pointer"
                            >
                                <Link href={`/locations/${loc.slug}`}>
                                    {/* Waves */}
                                    <motion.circle
                                        r={6}
                                        fill="none"
                                        stroke="#F54029"
                                        strokeWidth={1}
                                        initial={{ scale: 1, opacity: 0.5 }}
                                        animate={{ scale: 3, opacity: 0 }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <circle r={3} fill="#F54029" className="filter drop-shadow-[0_0_5px_#F54029]" />

                                    {/* Marker HUD */}
                                    <AnimatePresence>
                                        {hoveredLocation === loc.slug && (
                                            <motion.foreignObject
                                                x={10}
                                                y={-60}
                                                width={240}
                                                height={120}
                                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                            >
                                                <div className="bg-black/80 backdrop-blur-2xl border border-utility-red/30 p-4 rounded-2xl shadow-2xl relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-1 bg-utility-red text-[8px] font-mono font-bold text-black uppercase">
                                                        {loc.code}
                                                    </div>
                                                    <div className="font-bold text-white text-sm mb-1">{loc.city}</div>
                                                    <div className="text-utility-red text-[10px] uppercase font-mono tracking-wider mb-2">{loc.keyFocus}</div>
                                                    <p className="text-[9px] text-gray-400 leading-tight italic line-clamp-2">"{loc.description}"</p>
                                                    <div className="mt-2 text-[8px] font-mono text-green-500">SYNC_SECURE: 100%</div>
                                                </div>
                                            </motion.foreignObject>
                                        )}
                                    </AnimatePresence>
                                </Link>
                            </g>
                        </Marker>
                    ))}
                </ComposableMap>
            </div>

            {/* Corner Decorative Brackets */}
            <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-xl pointer-events-none" />
            <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-xl pointer-events-none" />

            {/* Status Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-8 text-[8px] font-mono text-gray-600 uppercase tracking-widest bg-black/50 backdrop-blur-lg px-6 py-2 rounded-full border border-white/5 pointer-events-none">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Global_Uplink: Active
                </div>
                <div>Coverage: 100%</div>
                <div>Nodes: {LOCATIONS.length}</div>
            </div>
        </div>
    );
}
