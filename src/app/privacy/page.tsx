'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    const effectiveDate = "December 26, 2024";
    const lastUpdated = "December 26, 2024";

    return (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <Navbar />

            <main className="relative pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <span className="text-xs font-mono text-utility-red tracking-widest uppercase">
                            LEGAL_FRAMEWORK
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Privacy Protocols
                        </h1>
                        <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-mono">
                            <span>Effective Date: {effectiveDate}</span>
                            <span>Last Updated: {lastUpdated}</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <div className="glass-panel p-8 rounded-2xl mb-8 border-l-4 border-utility-red">
                            <p className="text-gray-300 leading-relaxed m-0">
                                The Utility Foundation ("Foundation," "we," "us," or "our") is committed to protecting your privacy
                                and ensuring the security of your personal information. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you interact with our websites, applications,
                                services, and blockchain-based protocols (collectively, the "Services").
                            </p>
                        </div>

                        <Section title="1. Information We Collect">
                            <Subsection title="1.1 Information You Provide Directly">
                                <p>We collect information you voluntarily provide when interacting with our Services, including:</p>
                                <ul>
                                    <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address, and organizational affiliation.</li>
                                    <li><strong>Account Information:</strong> Username, password, and account preferences.</li>
                                    <li><strong>Transaction Information:</strong> Wallet addresses, transaction histories, and payment details for donations or purchases.</li>
                                    <li><strong>Communications:</strong> Correspondence with our team, feedback, survey responses, and support inquiries.</li>
                                    <li><strong>Professional Information:</strong> Company name, job title, and industry sector for partnership inquiries.</li>
                                </ul>
                            </Subsection>

                            <Subsection title="1.2 Information Collected Automatically">
                                <p>When you access our Services, we automatically collect certain technical information:</p>
                                <ul>
                                    <li><strong>Device Information:</strong> Hardware model, operating system, unique device identifiers, and mobile network information.</li>
                                    <li><strong>Log Data:</strong> IP address, browser type, access times, pages viewed, referring URL, and click-stream data.</li>
                                    <li><strong>Blockchain Data:</strong> Public wallet addresses and on-chain transaction data when interacting with our protocols.</li>
                                    <li><strong>Cookies and Tracking Technologies:</strong> Information collected via cookies, web beacons, and similar technologies (see Section 6).</li>
                                </ul>
                            </Subsection>

                            <Subsection title="1.3 Information from Third Parties">
                                <p>We may receive information about you from third-party sources, including:</p>
                                <ul>
                                    <li>Identity verification services for compliance purposes.</li>
                                    <li>Analytics providers and advertising networks.</li>
                                    <li>Public blockchain networks and on-chain data aggregators.</li>
                                    <li>Social media platforms when you interact with our social presence.</li>
                                </ul>
                            </Subsection>
                        </Section>

                        <Section title="2. How We Use Your Information">
                            <p>We use collected information for the following purposes:</p>
                            <ul>
                                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our Services, process transactions, and fulfill your requests.</li>
                                <li><strong>Communications:</strong> To send administrative notices, respond to inquiries, and provide customer support.</li>
                                <li><strong>Personalization:</strong> To customize your experience and deliver relevant content and recommendations.</li>
                                <li><strong>Analytics:</strong> To analyze usage patterns, monitor performance, and improve our Services.</li>
                                <li><strong>Security:</strong> To detect, prevent, and address fraud, abuse, and security incidents.</li>
                                <li><strong>Compliance:</strong> To comply with legal obligations, including anti-money laundering (AML) and know-your-customer (KYC) requirements.</li>
                                <li><strong>Marketing:</strong> To send promotional communications (with your consent where required).</li>
                                <li><strong>Research:</strong> To conduct research and development for new products and services.</li>
                            </ul>
                        </Section>

                        <Section title="3. Legal Basis for Processing (EEA/UK Users)">
                            <p>For users in the European Economic Area and United Kingdom, we process personal data based on:</p>
                            <ul>
                                <li><strong>Contract Performance:</strong> Processing necessary to fulfill our contractual obligations to you.</li>
                                <li><strong>Legitimate Interests:</strong> Processing for our legitimate business interests, such as fraud prevention, security, and service improvement.</li>
                                <li><strong>Legal Compliance:</strong> Processing required to comply with applicable laws and regulations.</li>
                                <li><strong>Consent:</strong> Processing based on your explicit consent, which you may withdraw at any time.</li>
                            </ul>
                        </Section>

                        <Section title="4. Information Sharing and Disclosure">
                            <p>We may share your information in the following circumstances:</p>
                            <Subsection title="4.1 Service Providers">
                                <p>We engage third-party vendors to perform services on our behalf, including cloud hosting, analytics, payment processing, and customer support. These providers are contractually bound to protect your information and use it only for specified purposes.</p>
                            </Subsection>

                            <Subsection title="4.2 Legal Requirements">
                                <p>We may disclose information when required by law, subpoena, court order, or government request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</p>
                            </Subsection>

                            <Subsection title="4.3 Business Transfers">
                                <p>In connection with a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control.</p>
                            </Subsection>

                            <Subsection title="4.4 With Your Consent">
                                <p>We may share information with third parties when you provide explicit consent or direct us to do so.</p>
                            </Subsection>

                            <Subsection title="4.5 Aggregated or De-identified Data">
                                <p>We may share aggregated, anonymized, or de-identified data that cannot reasonably be used to identify you for research, analytics, or marketing purposes.</p>
                            </Subsection>
                        </Section>

                        <Section title="5. Data Retention">
                            <p>We retain personal information for as long as necessary to:</p>
                            <ul>
                                <li>Provide our Services and fulfill the purposes described in this Policy.</li>
                                <li>Comply with legal, regulatory, and contractual obligations.</li>
                                <li>Resolve disputes and enforce our agreements.</li>
                                <li>Maintain security and prevent fraud.</li>
                            </ul>
                            <p>Blockchain-based transaction data is immutable and cannot be deleted from public ledgers. However, we will delete or anonymize any personal information we control upon request, subject to legal retention requirements.</p>
                        </Section>

                        <Section title="6. Cookies and Tracking Technologies">
                            <p>We use cookies, web beacons, and similar technologies to:</p>
                            <ul>
                                <li>Authenticate users and maintain session security.</li>
                                <li>Remember user preferences and settings.</li>
                                <li>Analyze website traffic and usage patterns.</li>
                                <li>Deliver targeted advertising (where permitted).</li>
                            </ul>
                            <p>You can manage cookie preferences through your browser settings. Note that disabling cookies may affect Service functionality.</p>
                        </Section>

                        <Section title="7. Data Security">
                            <p>We implement industry-standard security measures to protect your information, including:</p>
                            <ul>
                                <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256).</li>
                                <li>Multi-factor authentication for administrative access.</li>
                                <li>Regular security audits and penetration testing.</li>
                                <li>Access controls and employee training programs.</li>
                                <li>Incident response and breach notification procedures.</li>
                            </ul>
                            <p>While we strive to protect your information, no method of transmission or storage is 100% secure. You are responsible for maintaining the security of your wallet private keys and account credentials.</p>
                        </Section>

                        <Section title="8. Your Rights and Choices">
                            <p>Depending on your jurisdiction, you may have the following rights:</p>
                            <ul>
                                <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal exceptions).</li>
                                <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
                                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
                                <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent at any time.</li>
                            </ul>
                            <p>To exercise these rights, contact us at <a href="mailto:privacy@theutilityfoundation.org" className="text-utility-red hover:underline">privacy@theutilityfoundation.org</a>.</p>
                        </Section>

                        <Section title="9. International Data Transfers">
                            <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:</p>
                            <ul>
                                <li>Standard Contractual Clauses approved by the European Commission.</li>
                                <li>Adequacy decisions for approved jurisdictions.</li>
                                <li>Binding Corporate Rules where applicable.</li>
                            </ul>
                        </Section>

                        <Section title="10. Children's Privacy">
                            <p>Our Services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we learn that we have collected information from a child, we will delete it promptly. If you believe a child has provided us with personal information, please contact us immediately.</p>
                        </Section>

                        <Section title="11. California Privacy Rights (CCPA/CPRA)">
                            <p>California residents have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including:</p>
                            <ul>
                                <li>The right to know what personal information is collected, used, and shared.</li>
                                <li>The right to delete personal information.</li>
                                <li>The right to opt-out of the sale or sharing of personal information.</li>
                                <li>The right to non-discrimination for exercising privacy rights.</li>
                                <li>The right to correct inaccurate personal information.</li>
                                <li>The right to limit use of sensitive personal information.</li>
                            </ul>
                            <p>We do not sell personal information as defined by the CCPA/CPRA.</p>
                        </Section>

                        <Section title="12. Changes to This Policy">
                            <p>We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated Policy on our website and updating the "Last Updated" date. Your continued use of our Services after changes become effective constitutes acceptance of the revised Policy.</p>
                        </Section>

                        <Section title="13. Contact Us">
                            <p>For questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:</p>
                            <div className="glass-panel p-6 rounded-xl mt-4">
                                <p className="m-0"><strong>The Utility Foundation</strong></p>
                                <p className="m-0">Privacy Office</p>
                                <p className="m-0">Email: <a href="mailto:privacy@theutilityfoundation.org" className="text-utility-red hover:underline">privacy@theutilityfoundation.org</a></p>
                            </div>
                            <p className="mt-4">For EEA/UK residents, you also have the right to lodge a complaint with your local data protection authority.</p>
                        </Section>

                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">{title}</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">{children}</div>
        </div>
    );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
            <div className="text-gray-400 leading-relaxed space-y-3">{children}</div>
        </div>
    );
}
