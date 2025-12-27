'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
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
                            Terms of Service
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
                                <strong>IMPORTANT:</strong> Please read these Terms of Service ("Terms," "Agreement") carefully before
                                accessing or using any websites, applications, smart contracts, protocols, or services
                                (collectively, the "Services") operated by The Utility Foundation ("Foundation," "we," "us," or "our").
                                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree,
                                do not use our Services.
                            </p>
                        </div>

                        <Section title="1. Acceptance of Terms">
                            <p>By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference. These Terms constitute a legally binding agreement between you and The Utility Foundation.</p>
                            <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Services after any modifications constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.</p>
                        </Section>

                        <Section title="2. Eligibility">
                            <Subsection title="2.1 Age and Capacity">
                                <p>You must be at least 18 years of age (or the age of legal majority in your jurisdiction) to use our Services. By using our Services, you represent and warrant that you meet this requirement and have the legal capacity to enter into binding agreements.</p>
                            </Subsection>

                            <Subsection title="2.2 Jurisdictional Restrictions">
                                <p>Our Services are not available to persons or entities in jurisdictions where access or use would be contrary to local laws or regulations. You are responsible for ensuring compliance with all applicable local laws. Specifically, our Services are not available to residents or citizens of:</p>
                                <ul>
                                    <li>Countries subject to comprehensive U.S. sanctions (including but not limited to Cuba, Iran, North Korea, Syria, and the Crimea, Donetsk, and Luhansk regions).</li>
                                    <li>Any jurisdiction where the use of blockchain technology or digital assets is prohibited.</li>
                                </ul>
                            </Subsection>

                            <Subsection title="2.3 Compliance Verification">
                                <p>We reserve the right to implement identity verification (KYC) and anti-money laundering (AML) procedures as required by applicable laws and regulations. You agree to provide accurate information and cooperate with any verification requests.</p>
                            </Subsection>
                        </Section>

                        <Section title="3. Description of Services">
                            <p>The Utility Foundation provides a range of services related to decentralized technology, industrial automation, and community empowerment, including but not limited to:</p>
                            <ul>
                                <li><strong>Informational Resources:</strong> Educational content, research, and documentation about blockchain technology and sustainable development.</li>
                                <li><strong>Platform Access:</strong> Access to decentralized applications (dApps), protocols, and tools developed or supported by the Foundation.</li>
                                <li><strong>Community Engagement:</strong> Participation in forums, governance, and collaborative initiatives.</li>
                                <li><strong>Marketplace Services:</strong> Access to digital asset marketplaces and tokenized asset platforms operated by ecosystem partners.</li>
                            </ul>
                            <p>We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice.</p>
                        </Section>

                        <Section title="4. User Accounts and Security">
                            <Subsection title="4.1 Account Registration">
                                <p>Certain Services may require account registration. You agree to provide accurate, current, and complete information during registration and to update such information as necessary. You may not create an account using false information or on behalf of another person without authorization.</p>
                            </Subsection>

                            <Subsection title="4.2 Account Security">
                                <p>You are solely responsible for:</p>
                                <ul>
                                    <li>Maintaining the confidentiality of your account credentials and private keys.</li>
                                    <li>All activities that occur under your account.</li>
                                    <li>Notifying us immediately of any unauthorized access or security breaches.</li>
                                </ul>
                                <p>We are not liable for any loss or damage arising from your failure to maintain account security.</p>
                            </Subsection>

                            <Subsection title="4.3 Wallet Connections">
                                <p>When connecting blockchain wallets to our Services, you acknowledge that:</p>
                                <ul>
                                    <li>You are the sole owner and controller of the connected wallet.</li>
                                    <li>All transactions initiated from your wallet are your responsibility.</li>
                                    <li>Blockchain transactions are irreversible once confirmed.</li>
                                    <li>We have no ability to recover lost private keys or reverse transactions.</li>
                                </ul>
                            </Subsection>
                        </Section>

                        <Section title="5. Prohibited Conduct">
                            <p>You agree not to engage in any of the following prohibited activities:</p>
                            <ul>
                                <li>Violating any applicable laws, regulations, or third-party rights.</li>
                                <li>Using the Services for fraudulent, deceptive, or illegal purposes.</li>
                                <li>Attempting to gain unauthorized access to our systems, networks, or other users' accounts.</li>
                                <li>Interfering with or disrupting the integrity or performance of our Services.</li>
                                <li>Transmitting viruses, malware, or other harmful code.</li>
                                <li>Engaging in market manipulation, wash trading, or other deceptive trading practices.</li>
                                <li>Using automated systems (bots, scrapers, etc.) without express written permission.</li>
                                <li>Circumventing or attempting to circumvent access restrictions or security measures.</li>
                                <li>Harassing, threatening, or abusing other users or Foundation personnel.</li>
                                <li>Infringing intellectual property rights of the Foundation or third parties.</li>
                                <li>Using the Services for money laundering, terrorist financing, or sanctions evasion.</li>
                            </ul>
                            <p>Violation of these prohibitions may result in immediate termination of access and potential legal action.</p>
                        </Section>

                        <Section title="6. Intellectual Property">
                            <Subsection title="6.1 Foundation IP">
                                <p>All content, software, designs, logos, trademarks, and other intellectual property associated with our Services ("Foundation IP") are owned by or licensed to The Utility Foundation. You are granted a limited, non-exclusive, non-transferable license to access and use the Services for personal, non-commercial purposes, subject to these Terms.</p>
                            </Subsection>

                            <Subsection title="6.2 User Content">
                                <p>You retain ownership of content you create and submit through our Services ("User Content"). By submitting User Content, you grant us a worldwide, royalty-free, sublicensable license to use, reproduce, modify, and display such content in connection with operating and promoting our Services.</p>
                            </Subsection>

                            <Subsection title="6.3 Open Source">
                                <p>Certain components of our Services may be released under open-source licenses. Such components are governed by their respective license terms, which may differ from these Terms.</p>
                            </Subsection>

                            <Subsection title="6.4 DMCA and Takedowns">
                                <p>We respect intellectual property rights. If you believe content on our Services infringes your copyright, please contact us at <a href="mailto:legal@theutilityfoundation.org" className="text-utility-red hover:underline">legal@theutilityfoundation.org</a> with a detailed description of the alleged infringement.</p>
                            </Subsection>
                        </Section>

                        <Section title="7. Digital Assets and Blockchain Technology">
                            <Subsection title="7.1 Risks of Digital Assets">
                                <p>You acknowledge and accept the inherent risks associated with digital assets and blockchain technology, including but not limited to:</p>
                                <ul>
                                    <li><strong>Volatility:</strong> Digital asset prices can be extremely volatile and may result in significant financial loss.</li>
                                    <li><strong>Regulatory Uncertainty:</strong> The regulatory landscape for digital assets is evolving and may change in ways that adversely affect your holdings.</li>
                                    <li><strong>Technical Risks:</strong> Smart contracts may contain bugs, vulnerabilities, or unintended behaviors.</li>
                                    <li><strong>Irreversibility:</strong> Blockchain transactions cannot be reversed once confirmed.</li>
                                    <li><strong>Key Management:</strong> Loss of private keys results in permanent loss of access to digital assets.</li>
                                    <li><strong>Network Risks:</strong> Blockchain networks may experience congestion, forks, or other disruptions.</li>
                                </ul>
                            </Subsection>

                            <Subsection title="7.2 No Financial Advice">
                                <p>Nothing in our Services constitutes financial, investment, legal, or tax advice. You should consult qualified professionals before making any financial decisions. The Foundation does not recommend or endorse any particular digital assets, investment strategies, or trading activities.</p>
                            </Subsection>

                            <Subsection title="7.3 Tax Obligations">
                                <p>You are solely responsible for determining and fulfilling your tax obligations related to digital asset transactions. The Foundation does not provide tax advice and is not responsible for calculating, reporting, or paying your taxes.</p>
                            </Subsection>
                        </Section>

                        <Section title="8. Third-Party Services and Links">
                            <p>Our Services may contain links to third-party websites, applications, or services ("Third-Party Services"). We do not control or endorse Third-Party Services and are not responsible for their content, privacy practices, or terms of use. Your interactions with Third-Party Services are governed by their respective terms and policies.</p>
                            <p>Integration with third-party protocols (including decentralized exchanges, lending protocols, and other DeFi applications) carries additional risks. You are responsible for conducting your own due diligence before interacting with any Third-Party Services.</p>
                        </Section>

                        <Section title="9. Disclaimers">
                            <div className="glass-panel p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                                <p className="uppercase text-sm font-bold text-utility-red mb-4">IMPORTANT DISCLAIMERS</p>
                                <p><strong>AS-IS BASIS:</strong> THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
                                <p><strong>NO GUARANTEE:</strong> WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
                                <p><strong>SMART CONTRACT RISKS:</strong> SMART CONTRACTS ARE EXPERIMENTAL TECHNOLOGY. WE DO NOT GUARANTEE THE ACCURACY, RELIABILITY, OR SECURITY OF ANY SMART CONTRACTS OR PROTOCOLS.</p>
                                <p><strong>BLOCKCHAIN DATA:</strong> BLOCKCHAIN DATA MAY BE DELAYED, INACCURATE, OR INCOMPLETE. WE ARE NOT RESPONSIBLE FOR THE ACCURACY OF ON-CHAIN DATA.</p>
                            </div>
                        </Section>

                        <Section title="10. Limitation of Liability">
                            <div className="glass-panel p-6 rounded-xl">
                                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE UTILITY FOUNDATION, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR:</p>
                                <ul>
                                    <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</li>
                                    <li>LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES.</li>
                                    <li>DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA.</li>
                                    <li>CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES.</li>
                                    <li>ANY BUGS, VIRUSES, OR OTHER HARMFUL CODE TRANSMITTED THROUGH THE SERVICES.</li>
                                </ul>
                                <p>IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).</p>
                            </div>
                        </Section>

                        <Section title="11. Indemnification">
                            <p>You agree to indemnify, defend, and hold harmless The Utility Foundation, its directors, officers, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:</p>
                            <ul>
                                <li>Your use of the Services.</li>
                                <li>Your violation of these Terms.</li>
                                <li>Your violation of any rights of another party.</li>
                                <li>Your User Content.</li>
                                <li>Any dispute between you and a third party.</li>
                            </ul>
                        </Section>

                        <Section title="12. Dispute Resolution">
                            <Subsection title="12.1 Governing Law">
                                <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.</p>
                            </Subsection>

                            <Subsection title="12.2 Arbitration Agreement">
                                <p>Any dispute, controversy, or claim arising out of or relating to these Terms or the Services shall be resolved through binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Wilmington, Delaware. Judgment on the arbitration award may be entered in any court of competent jurisdiction.</p>
                            </Subsection>

                            <Subsection title="12.3 Class Action Waiver">
                                <p>YOU AGREE THAT ANY DISPUTES SHALL BE RESOLVED ON AN INDIVIDUAL BASIS AND NOT AS PART OF ANY CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU WAIVE ANY RIGHT TO PARTICIPATE IN CLASS ACTION LAWSUITS OR CLASS-WIDE ARBITRATION.</p>
                            </Subsection>

                            <Subsection title="12.4 Exceptions">
                                <p>Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement of intellectual property rights.</p>
                            </Subsection>
                        </Section>

                        <Section title="13. Termination">
                            <p>We may suspend or terminate your access to the Services at any time, with or without cause, with or without notice. Upon termination:</p>
                            <ul>
                                <li>Your right to use the Services immediately ceases.</li>
                                <li>You remain bound by all provisions that by their nature should survive termination (including disclaimers, limitations of liability, and indemnification).</li>
                                <li>We may delete your account and User Content without further obligation.</li>
                            </ul>
                            <p>You may terminate your account at any time by contacting us. Termination does not relieve you of obligations incurred prior to termination.</p>
                        </Section>

                        <Section title="14. General Provisions">
                            <Subsection title="14.1 Entire Agreement">
                                <p>These Terms, together with the Privacy Policy and any other policies incorporated by reference, constitute the entire agreement between you and The Utility Foundation regarding the Services.</p>
                            </Subsection>

                            <Subsection title="14.2 Severability">
                                <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
                            </Subsection>

                            <Subsection title="14.3 Waiver">
                                <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
                            </Subsection>

                            <Subsection title="14.4 Assignment">
                                <p>You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.</p>
                            </Subsection>

                            <Subsection title="14.5 Force Majeure">
                                <p>We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, labor disputes, government actions, or network failures.</p>
                            </Subsection>
                        </Section>

                        <Section title="15. Contact Information">
                            <p>For questions or concerns regarding these Terms, please contact:</p>
                            <div className="glass-panel p-6 rounded-xl mt-4">
                                <p className="m-0"><strong>The Utility Foundation</strong></p>
                                <p className="m-0">Legal Department</p>
                                <p className="m-0">Email: <a href="mailto:legal@theutilityfoundation.org" className="text-utility-red hover:underline">legal@theutilityfoundation.org</a></p>
                            </div>
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
