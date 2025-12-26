'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { LOCATIONS, INDUSTRIES } from '@/data/seo';

export default function EcosystemPartners() {
  const partners = useMemo(() => {
    const allPartners = new Set<string>();
    
    LOCATIONS.forEach(loc => {
      loc.activeContributors.forEach(c => allPartners.add(c));
    });
    
    INDUSTRIES.forEach(ind => {
      ind.contributors.forEach(c => allPartners.add(c));
    });

    return Array.from(allPartners).sort();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            Ecosystem Partners
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel p-6 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-center text-center"
            >
              <span className="text-lg font-medium text-gray-300 hover:text-white transition-colors">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
