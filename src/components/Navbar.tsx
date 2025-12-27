'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'IMPACT', href: '#impact' },
    { label: 'CONTRIBUTORS', href: '#contributors' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
];

const externalLinks: { label: string; href: string; internal?: boolean }[] = [
    { label: 'OUR MODEL', href: '/our-model', internal: true },
    { label: 'BLOG', href: 'https://medium.com/@theutilityco' },
    { label: 'PODCASTS', href: '/podcasts', internal: true },
];

const portalOptions = [
    {
        name: 'NFTPD Portal',
        description: 'Blockchain security services & digital forensics',
        url: 'https://portal.nftpd.org',
        icon: '/Medallions/NFTPD.png',
        color: '#F59E0B'
    },
    {
        name: 'Invisible Enemies Portal',
        description: 'Veterans advocacy & support services',
        url: 'https://portal.ie.theutilityfoundation.org',
        icon: '/Medallions/IE_opt.png',
        color: '#7C3AED'
    }
];

interface NavbarProps {
    themeColor?: string;
}

export default function Navbar({ themeColor = '#F54029' }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [portalModalOpen, setPortalModalOpen] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const tick = () => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        tick();
        const interval = setInterval(tick, 1000);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setPortalModalOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? 'bg-black/60 backdrop-blur-2xl border-b shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3'
                    : 'py-5 bg-transparent'
                    }`}
                style={scrolled ? { borderBottomColor: `${themeColor}30`, boxShadow: `0 4px 30px ${themeColor}10` } : { borderBottomColor: 'transparent' }}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo & System Status */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src="/Medallions/TUF-op.png"
                                    alt="The Utility Foundation"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <span className="text-lg font-bold text-white tracking-widest font-mono group-hover:opacity-80 transition-opacity">
                                TUF//HOME
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                                    className="px-4 py-2 text-xs font-mono tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {/* Time Display */}
                        <div className="hidden md:block text-xs font-mono tracking-wider" style={{ color: themeColor }}>
                            {time}
                        </div>

                        {/* External Links */}
                        <div className="hidden xl:flex items-center gap-2">
                            {externalLinks.map((link) => (
                                link.internal ? (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="px-3 py-1.5 text-[10px] font-mono tracking-wider text-gray-500 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-200"
                                        style={{ '--hover-color': themeColor } as React.CSSProperties}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = themeColor}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 text-[10px] font-mono tracking-wider text-gray-500 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-200"
                                        style={{ '--hover-color': themeColor } as React.CSSProperties}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = themeColor}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    >
                                        {link.label}
                                    </a>
                                )
                            ))}
                        </div>

                        {/* Portal Button - Opens Modal */}
                        <button
                            onClick={() => setPortalModalOpen(true)}
                            className="text-xs font-mono tracking-wider px-6 py-3 rounded bg-white text-black font-bold hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: themeColor, color: '#000' }}
                        >
                            PORTAL
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-white transition-colors"
                            style={{ color: mobileMenuOpen ? themeColor : 'white' }}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-black/80 backdrop-blur-xl mt-2 mx-4 rounded-2xl p-4 animate-fadeInUp border" style={{ borderColor: `${themeColor}40` }}>
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-sm font-mono tracking-wider text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-white/10 mt-2 pt-2">
                                {externalLinks.map((link) => (
                                    link.internal ? (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-4 py-2 text-xs font-mono tracking-wider text-gray-500 hover:text-white transition-colors"
                                            style={{ color: '#9ca3af' }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = themeColor}
                                            onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 text-xs font-mono tracking-wider text-gray-500 hover:text-white transition-colors"
                                            style={{ color: '#9ca3af' }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = themeColor}
                                            onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                                        >
                                            ↗ {link.label}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Portal Selection Modal */}
            <AnimatePresence>
                {portalModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        onClick={() => setPortalModalOpen(false)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative z-10 w-full max-w-lg bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setPortalModalOpen(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <span className="text-xs font-mono text-utility-red tracking-widest uppercase">SELECT_PORTAL</span>
                                <h2 className="text-2xl font-bold text-white mt-2">Choose Your Destination</h2>
                                <p className="text-gray-400 text-sm mt-2">Access your initiative portal</p>
                            </div>

                            {/* Portal Options */}
                            <div className="space-y-4">
                                {portalOptions.map((portal) => (
                                    <a
                                        key={portal.name}
                                        href={portal.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300"
                                        style={{ '--portal-color': portal.color } as React.CSSProperties}
                                        onClick={() => setPortalModalOpen(false)}
                                    >
                                        <div
                                            className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden border-2 transition-colors duration-300"
                                            style={{ borderColor: portal.color }}
                                        >
                                            <img
                                                src={portal.icon}
                                                alt={portal.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <h3
                                                className="font-bold text-white group-hover:text-white transition-colors"
                                                style={{ color: portal.color }}
                                            >
                                                {portal.name}
                                            </h3>
                                            <p className="text-sm text-gray-400">{portal.description}</p>
                                        </div>
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors"
                                            style={{ color: portal.color }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Footer */}
                            <p className="text-center text-xs text-gray-600 mt-6 font-mono">
                                // SECURE_CONNECTION_VERIFIED
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
