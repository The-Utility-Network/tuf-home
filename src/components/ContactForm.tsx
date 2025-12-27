'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
    const formSlug = "the-utility-foundation-contact-initiative-interest-5f02bc4d";
    const apiEndpoint = "https://crm.ledger1.ai/api/forms/submit";

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        areas_of_interest: [] as string[],
        message: '',
        preferred_contact_method: 'Email',
        subscribe: false
    });

    const categories = [
        "Animal & Plant Conservation",
        "Children's Health",
        "Environmental Awareness",
        "Financial Literacy",
        "Gender Equality",
        "Independent Artists & Creators",
        "Indigenous Rights & Access",
        "Justice & Peace",
        "Medical Access",
        "Mental Health & Wellness",
        "Minority Rights & Access",
        "Nature & Habitat",
        "Research Initiatives",
        "Spirituality & Self-Discovery",
        "Veterans Community"
    ];

    const contactMethods = ["Email", "Phone"];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleMultiSelect = (category: string) => {
        setFormData(prev => {
            const current = prev.areas_of_interest;
            if (current.includes(category)) {
                return { ...prev, areas_of_interest: current.filter(c => c !== category) };
            } else {
                if (current.length >= 3) return prev; // Limit to 3
                return { ...prev, areas_of_interest: [...current, category] };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Transform array to string for simple CRM storage if needed, or keep as array structure
        const payloadData = {
            ...formData,
            areas_of_interest: formData.areas_of_interest.join(', '),
            subscribe: formData.subscribe ? 'Yes' : 'No'
        };

        try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    form_slug: formSlug,
                    data: payloadData,
                    source_url: window.location.href,
                    referrer: document.referrer
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage("Transmission failed. Please try again or contact us directly.");
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl text-center shadow-2xl"
            >
                <div className="w-24 h-24 bg-utility-red/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <svg className="w-10 h-10 text-utility-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">TRANSMISSION RECEIVED</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Thank you for your interest in The Utility Foundation.<br />
                    Our team is reviewing your initiative details and will respond shortly.
                </p>
                <div className="mt-8 text-xs font-mono text-utility-red uppercase tracking-widest opacity-60">
                    // TICKET_OPEN // HANDSHAKE_COMPLETE
                </div>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-utility-red/5 rounded-full blur-[100px] pointer-events-none -z-10 transition-opacity duration-1000 group-hover:opacity-100 opacity-50" />

            {/* Header */}
            <div className="md:col-span-2 mb-4 border-b border-white/10 pb-8">
                <h2 className="text-3xl font-black text-white mb-3 tracking-tight">Initiative Interest Form</h2>
                <p className="text-gray-400 text-base max-w-2xl">
                    Join us in architecting a new model. Tell us about your organization and how we can collaborate to create more than we consume.
                </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-utility-red font-bold pl-1">First Name *</label>
                <input
                    type="text"
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-utility-red focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="Jane"
                />
            </div>
            <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-utility-red font-bold pl-1">Last Name *</label>
                <input
                    type="text"
                    name="last_name"
                    required
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-utility-red focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="Doe"
                />
            </div>

            <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-utility-red font-bold pl-1">Email *</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-utility-red focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="jane@example.com"
                />
            </div>
            <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold pl-1">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-utility-red focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                />
            </div>

            {/* Organization Info */}
            <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold pl-1">Organization / Company</label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-utility-red focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="Foundation or Company Name"
                />
            </div>
            <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold pl-1">Website</label>
                <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-utility-red focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="https://"
                />
            </div>

            {/* Initiative Categories (Multi-Select) */}
            <div className="md:col-span-2 space-y-4 my-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between items-baseline mb-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-utility-red font-bold">
                        Initiative Categories *
                    </label>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Select up to 3</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => handleMultiSelect(cat)}
                            className={`px-4 py-3 text-xs font-semibold rounded-lg border transition-all duration-300 text-left relative overflow-hidden group/btn ${formData.areas_of_interest.includes(cat)
                                ? 'bg-utility-red text-white border-utility-red shadow-[0_0_20px_rgba(245,64,41,0.3)]'
                                : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20 hover:text-white hover:bg-white/10'
                                } ${formData.areas_of_interest.length >= 3 && !formData.areas_of_interest.includes(cat) ? 'opacity-30 cursor-not-allowed grayscale' : ''}`}
                            disabled={formData.areas_of_interest.length >= 3 && !formData.areas_of_interest.includes(cat)}
                        >
                            <span className="relative z-10">{cat}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Contact Method */}
            <div className="md:col-span-2 space-y-3 mb-4">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold pl-1">Preferred Contact Method</label>
                <div className="flex gap-8 pl-1">
                    {contactMethods.map((method) => (
                        <label key={method} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${formData.preferred_contact_method === method ? 'border-utility-red bg-utility-red/20 scale-110' : 'border-white/20 group-hover:border-white/50'}`}>
                                {formData.preferred_contact_method === method && <div className="w-2.5 h-2.5 rounded-full bg-utility-red shadow-[0_0_10px_#F54029]" />}
                            </div>
                            <input
                                type="radio"
                                name="preferred_contact_method"
                                value={method}
                                checked={formData.preferred_contact_method === method}
                                onChange={(e) => setFormData(prev => ({ ...prev, preferred_contact_method: e.target.value }))}
                                className="hidden"
                            />
                            <span className={`text-xs font-mono uppercase tracking-wider transition-colors ${formData.preferred_contact_method === method ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{method}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-utility-red font-bold pl-1">How can we help? *</label>
                <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-5 text-white placeholder-gray-600 focus:border-utility-red focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none leading-relaxed"
                    placeholder="Tell us about your goals, ideas, or questions..."
                />
            </div>

            {/* Subscribe & Submit */}
            <div className="md:col-span-2 mt-6 space-y-8 border-t border-white/10 pt-8">
                <label className="flex items-center gap-4 cursor-pointer group pl-1">
                    <div className={`w-6 h-6 rounded border flex items-center justify-center transition-all duration-300 ${formData.subscribe ? 'border-utility-red bg-utility-red' : 'border-white/20 group-hover:border-white/50 bg-black/40'}`}>
                        {formData.subscribe && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                    <input
                        type="checkbox"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleCheckboxChange}
                        className="hidden"
                    />
                    <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors uppercase tracking-wide font-medium">
                        I'd like to receive occasional updates from The Utility Foundation.
                    </span>
                </label>

                <div className="relative pt-4">
                    {status === 'error' && (
                        <div className="absolute -top-12 left-0 w-full text-center text-red-500 text-xs font-mono tracking-widest uppercase bg-red-500/10 py-2 rounded">
                            // ERROR: {errorMessage}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-utility-red hover:bg-[#ff553d] text-white font-black py-5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 tracking-[0.2em] uppercase disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_30px_rgba(245,64,41,0.4)] hover:shadow-[0_10px_50px_rgba(245,64,41,0.6)] relative overflow-hidden group/submit"
                    >
                        {status === 'submitting' ? (
                            <span className="flex items-center justify-center gap-3">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                PROCESSING TRANSMISSION...
                            </span>
                        ) : (
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                SUBMIT INITIATIVE FORM
                                <svg className="w-5 h-5 transform group-hover/submit:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover/submit:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                    </button>
                    <div className="text-center mt-4">
                        <span className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">// SECURE_CONNECTION_ESTABLISHED</span>
                    </div>
                </div>
            </div>
        </form>
    );
}
