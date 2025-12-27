'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WaveConwayBackground = dynamic(
    () => import('@/components/WaveConwayBackground'),
    { ssr: false }
);

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-black">
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
                    style={{ backgroundImage: 'url(/hero-solarpunk.png)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,64,41,0.1)_0%,transparent_70%)]" />
            </div>

            <div className="relative max-w-6xl mx-auto text-center z-10 pt-12">
                {/* Medallion Logo */}
                <motion.div
                    className="flex justify-center mb-16"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-utility-red/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
                        <img
                            src="/Medallions/TUF-op.png"
                            alt="The Utility Foundation"
                            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full animate-float relative z-10"
                        />
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] italic"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                    <span className="block text-white opacity-90 not-italic">CREATE MORE THAN</span>
                    <span className="block bg-gradient-to-b from-white via-[#F54029] to-[#F54029] bg-clip-text text-transparent italic">
                        YOU CONSUME.
                    </span>
                </motion.h1>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                        Architecting decentralized systems for human prosperity through the
                        <span className="text-white font-medium mx-1 italic">Foundation Partner Program</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="#impact" className="group relative px-10 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <span className="relative z-10 tracking-widest text-xs uppercase">Explore Initiatives</span>
                            <div className="absolute inset-0 bg-utility-red transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link href="/contact" className="px-10 py-5 border border-white/20 text-white font-black rounded-full hover:bg-white/5 transition-all tracking-widest text-xs uppercase">
                            Join the Mission
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
