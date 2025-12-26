'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Impact Areas', href: '#impact' },
    { label: 'Contributors', href: '#contributors' },
    { label: 'Philosophy', href: '#philosophy' },
];

const externalLinks = [
    { label: 'Our Model', href: '/our-model' },
    { label: 'The Graine Ledger', href: 'https://thegraineledger.com' },
    { label: 'DigiBazaar', href: 'https://digibazaar.io' },
    { label: 'Osiris Protocol', href: 'https://osiris.theutilityfoundation.org' },
];

const socialLinks = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: 'https://medium.com/@theutilityco' },
    { label: 'Podcasts', href: '/podcasts' },
    { label: 'Discord', href: 'https://discord.gg/scHwVByn9m' },
];

export default function Footer() {
    return (
        <footer className="relative bg-black pt-32 pb-16 px-6 border-t border-white/5 overflow-hidden">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-utility-red/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 relative group">
                                <div className="absolute inset-0 bg-utility-red/20 blur-xl rounded-full scale-50 group-hover:scale-100 transition-transform duration-700" />
                                <Image
                                    src="/Medallions/The Utility Foundation Logo.png"
                                    alt="The Utility Foundation Logo"
                                    fill
                                    className="object-contain relative z-10"
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-bold leading-none mb-1">The Utility Foundation</h3>
                                <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">Cultivating Change</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                            <span className="text-white font-semibold italic">Architecting prosperity.</span> Sustaining positive change in society and the environment through decentralized precision.
                        </p>
                        <a
                            href="mailto:info@theutilityfoundation.org"
                            className="text-white/40 text-xs font-mono hover:text-utility-red transition-colors"
                        >
                            info@theutilityfoundation.org
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-[0.3em] text-gray-600 mb-8 uppercase">Navigate</h4>
                        <ul className="space-y-4">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-white transition-all hover:pl-2 font-light"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-[0.3em] text-gray-600 mb-8 uppercase">Ecosystem</h4>
                        <ul className="space-y-4 mb-8">
                            {externalLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-sm hover:text-white transition-all hover:pl-2 flex items-center gap-2 font-light"
                                    >
                                        {link.label}
                                        <svg className="w-3 h-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <h4 className="text-[10px] font-mono tracking-[0.3em] text-gray-600 mt-12 mb-8 uppercase">Join Community</h4>
                        <ul className="space-y-4">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith('/') ? (
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-utility-red transition-all hover:pl-2 font-light"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 text-sm hover:text-utility-red transition-all hover:pl-2 font-light"
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Team */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-[0.3em] text-gray-600 mb-8 uppercase">Our Leadership</h4>
                        <div className="space-y-6">
                            {[
                                { name: 'Krishna Patel', title: 'Founder & CEO' },
                                { name: 'Eric Turner', title: 'Director of Applied Intelligence' },
                            ].map((member) => (
                                <div key={member.name} className="flex flex-col group">
                                    <span className="text-white text-sm font-bold group-hover:text-utility-red transition-colors">{member.name}</span>
                                    <span className="text-gray-600 text-[10px] uppercase font-mono">{member.title}</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href="https://theutilityfoundation.org/pages/about-us/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-12 text-[10px] font-mono text-utility-red hover:tracking-widest transition-all uppercase"
                        >
                            Full Personnel Roster →
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">
                            © {new Date().getFullYear()} The Utility Foundation // All rights reserved.
                        </p>
                        <p className="text-gray-800 text-[8px] font-mono uppercase tracking-widest leading-none">
                            // ENCRYPTED_CONNECTION_SECURE // SYSTEM_TIME_SYNCED
                        </p>
                    </div>

                    <div className="flex items-center gap-10">
                        <a href="#" className="text-gray-600 text-[10px] font-mono uppercase tracking-widest hover:text-white transition-colors">
                            Privacy_Protocols
                        </a>
                        <a href="#" className="text-gray-600 text-[10px] font-mono uppercase tracking-widest hover:text-white transition-colors">
                            Terms_of_Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
