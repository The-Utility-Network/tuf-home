export default function Features() {
    return (
        <section id="features" className="relative z-10 py-24 px-6">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Innovative Symbiosis & Creator Economy Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Innovative Symbiosis */}
                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F54029]/10 rounded-full blur-3xl group-hover:bg-[#F54029]/20 transition-colors" />
                        <h3 className="section-heading mb-4">CORE FOCUS</h3>
                        <h2 className="text-2xl font-bold text-white mb-4">Innovative Symbiosis</h2>
                        <p className="text-gray-400 leading-relaxed">
                            At The Utility Foundation, we innovate to create symbiotic business models that not only benefit businesses but also empower communities. We are revolutionizing how people engage with technology for a sustainable, better future.
                        </p>
                    </div>

                    {/* Creator Economy */}
                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                        <h3 className="section-heading mb-4 text-blue-400">ECONOMIC MODEL</h3>
                        <h2 className="text-2xl font-bold text-white mb-4">Creator Economy</h2>
                        <p className="text-gray-400 leading-relaxed">
                            The creator economy is about individuals and communities creating value and wealth for themselves. The Utility Foundation leverages NFTs and automated processes to revolutionize how value is created, tracked, and shared.
                        </p>
                    </div>
                </div>


            </div>


        </section >
    );
}
