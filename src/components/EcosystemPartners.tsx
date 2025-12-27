'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { LOCATIONS, INDUSTRIES } from '@/data/seo';

const PARTNER_DETAILS: Record<string, { image: string, role: string, description: string, color: string, url: string }> = {
  'Arthaneeti': {
    image: '/Medallions/AR_opt.png',
    role: 'Civic Engagement Protocol',
    description: 'Incentivizing civic engagement through blockchain identity and voting strategies.',
    color: '#3B82F6',
    url: 'https://theutilitycompany.co/arthaneeti'
  },
  'Cornucopia Robotics': {
    image: '/Medallions/CornucopiaRobotics_opt.png',
    role: 'Automated Precision Agriculture',
    description: 'Automated precision agriculture using swarm robotics and the I3AS framework.',
    color: '#EC4899',
    url: 'https://theutilitycompany.co/cornucopia-robotics'
  },
  'DigiBazaar': {
    image: '/Medallions/DigiBazaarMedallion_opt.png',
    role: 'Digital Asset Marketplace',
    description: 'The "Creative Revolution" marketplace for discovering digital assets and the $2 Sweep.',
    color: '#EF4444',
    url: 'https://theutilitycompany.co/digibazaar'
  },
  'Elysium Athletica': {
    image: '/Medallions/Elysium_opt.png',
    role: 'Future of Sports Operations',
    description: 'Decentralized sports operations and AR experiences for next-gen fan engagement.',
    color: '#F54029',
    url: 'https://theutilitycompany.co/elysium-athletica'
  },
  'Invisible Enemies': {
    image: '/Medallions/IE_opt.png',
    role: 'Veterans Community',
    description: 'Championing the health and well-being of veterans through education, medical support, and legal advocacy for toxic exposure survivors.',
    color: '#7C3AED',
    url: 'https://ie.theutilityfoundation.org'
  },
  'BasaltHQ': {
    image: '/Medallions/BasaltM.png',
    role: 'Enterprise Infrastructure',
    description: 'Enterprise-grade distributed ledger infrastructure and CRM solutions for the ecosystem.',
    color: '#64748B',
    url: 'https://theutilitycompany.co/basalt-hq'
  },
  'NFTPD': {
    image: '/Medallions/NFTPD.png',
    role: 'Justice & Peace',
    description: 'Protecting the Web3 community through decentralized security services, digital forensics, and elite training programs.',
    color: '#F59E0B',
    url: 'https://nftpd.org'
  },
  'The Loch Ness Botanical Society': {
    image: '/Medallions/TLN_opt.png',
    role: 'Sustainable Food Systems',
    description: 'NFT-mediated hydroponic greenhouses for sustainable, automated food production.',
    color: '#2ECC71',
    url: 'https://theutilitycompany.co/lochness-botanical-society'
  },
  'Osiris Protocol': {
    image: '/Medallions/OP_opt.png',
    role: 'Bio-Data & Security',
    description: 'Secure, decentralized protocols for bio-data, token creation, and cross-chain interoperability.',
    color: '#A855F7',
    url: 'https://theutilitycompany.co/osiris-protocol'
  },
  'Requiem Electric': {
    image: '/Medallions/RE_opt.png',
    role: 'Distributed Energy',
    description: 'Distributed EV charging infrastructure powering community wealth and energy independence.',
    color: '#FFD700',
    url: 'https://theutilitycompany.co/requiem-electric'
  },
  'The Graine Ledger': {
    image: '/Medallions/TGL_opt.png',
    role: 'Asset-Backed Spirits',
    description: 'Bespoke whiskey distilling where NFTs serve as immutable deeds to physical casks.',
    color: '#F97316',
    url: 'https://theutilitycompany.co/the-graine-ledger'
  },
  'The Utility Foundation': {
    image: '/Medallions/TUF-op.png',
    role: 'Global Orchestration',
    description: 'The central coordinating body ensuring global impact alignment and partner compliance.',
    color: '#F54029',
    url: 'https://theutilitycompany.co/'
  },
  'Vulcan Forge': {
    image: '/Medallions/VulcanForge2_opt.png',
    role: 'Decentralized Manufacturing',
    description: 'Tokenized 3D printing farms allowing distributed ownership of manufacturing infrastructure.',
    color: '#F97316',
    url: 'https://theutilitycompany.co/vulcan-forge'
  }
};

export default function EcosystemPartners() {
  const { contributors, initiatives } = useMemo(() => {
    const allPartners = new Set<string>();
    const initiativeNames = ['Invisible Enemies', 'NFTPD'];

    LOCATIONS.forEach(loc => {
      loc.activeContributors.forEach(c => allPartners.add(c));
    });

    INDUSTRIES.forEach(ind => {
      ind.contributors.forEach(c => allPartners.add(c));
    });

    // Manually ensure initiatives are present if not in SEO data yet, or filter them out
    initiativeNames.forEach(name => allPartners.add(name));

    const sortedPartners = Array.from(allPartners).sort();

    return {
      contributors: sortedPartners.filter(p => !initiativeNames.includes(p)),
      initiatives: sortedPartners.filter(p => initiativeNames.includes(p))
    };
  }, []);

  const renderCard = (partner: string, index: number) => {
    const details = PARTNER_DETAILS[partner] || {
      image: '/Medallions/TUF-op.png',
      role: 'Strategic Partner',
      description: 'Collaborating to drive sustainable impact.',
      color: '#ffffff',
      url: '#'
    };

    return (
      <a
        key={partner}
        href={details.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          transition={{ delay: index * 0.1 }}
          className="group h-full relative bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 p-8 transition-all duration-300 overflow-hidden hover:border-white/20 hover:shadow-2xl"
          style={{ '--hover-color': details.color } as any}
        >
          {/* Hover Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
            style={{ background: `linear-gradient(to bottom right, ${details.color}, transparent)` }}
          />

          {/* Border Glow */}
          <div
            className="absolute inset-0 border border-transparent group-hover:border-[var(--hover-color)] rounded-2xl transition-colors duration-500 pointer-events-none opacity-50"
          />

          <div className="flex flex-col items-center text-center relative z-10 h-full">
            <div className="w-32 h-32 mb-6 relative group-hover:scale-105 transition-transform duration-500">
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: details.color }}
              />
              <img
                src={details.image}
                alt={partner}
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-2 border-white/5 group-hover:border-white/20 transition-colors"
              />
            </div>

            <h3
              className="text-2xl font-bold text-white mb-2 transition-colors duration-300"
              style={{ textShadow: '0 0 20px rgba(0,0,0,0.5)' }}
            >
              {partner}
            </h3>

            <div
              className="text-xs font-mono uppercase tracking-wider mb-4 border-b border-white/10 pb-4 w-full"
              style={{ color: details.color }}
            >
                          // {details.role}
            </div>

            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {details.description}
            </p>
          </div>
        </motion.div>
      </a>
    );
  };

  return (
    <section id="contributors" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Foundation Initiatives Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="section-heading text-[#F54029]"
            >
              CORE_MISSIONS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 pb-2 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
              Foundation Initiatives
            </motion.h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Direct impact vehicles launched and operated by The Utility Foundation to address critical global challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {initiatives.map((partner, index) => renderCard(partner, index))}
          </div>
        </div>


        {/* Strategic Contributors Section */}
        <div>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="section-heading"
            >
              NETWORK_ALLIANCE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 pb-2 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
              Strategic Contributors
            </motion.h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              The entities and protocols powering the Utility Foundation's mission across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((partner, index) => renderCard(partner, index))}
          </div>
        </div>

      </div>
    </section>
  );
}
