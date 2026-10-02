import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, ArrowRight, ExternalLink, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [messageFormOpen, setMessageFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.social.gmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessageFormOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2200);
  };

  return (
    <section className="scroll-mt-24 space-y-8" id="contact">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
            GET IN TOUCH
          </div>
          <h2 className="font-serif-editorial text-[32px] sm:text-[40px] text-[#131b2e] leading-tight font-normal">
            Let's Connect
          </h2>
          <p className="font-sans-inter text-[15px] text-[#434655] mt-1 max-w-2xl">
            I'm always interested in learning, building, and connecting with people working with technology and AI.
          </p>
        </div>

        <button
          onClick={() => setMessageFormOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#004ac6] text-white hover:bg-[#003ea8] text-[12px] font-mono-code transition-all cursor-pointer shadow-xs active:scale-95 shrink-0 self-start sm:self-auto"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send Quick Note</span>
        </button>
      </div>

      {/* 4 Cards Only: Gmail, LinkedIn, GitHub, Instagram (Strictly NO Facebook) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Gmail */}
        <a
          href={`mailto:${PORTFOLIO_CONFIG.social.gmail}`}
          className="bg-white rounded-2xl p-6 border border-[#c3c6d7]/40 hover:border-[#004ac6] hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-xs"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#e0e0ff]/50 flex items-center justify-center text-[#004ac6] group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>

            <div>
              <div className="font-sans-inter text-[18px] text-[#131b2e] font-semibold">
                Gmail
              </div>
              <p className="font-mono-code text-[12px] text-[#004ac6] font-medium mt-0.5 truncate">
                {PORTFOLIO_CONFIG.social.gmail}
              </p>
            </div>

            <p className="font-sans-inter text-[13px] text-[#434655] leading-relaxed">
              Direct inquiries, collaboration opportunities, and discussions.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#c3c6d7]/30 flex items-center justify-between text-[#004ac6] font-mono-code text-[12px] font-medium group-hover:underline">
            <span>Send Email</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopyEmail}
                className="p-1 hover:bg-[#eaedff] rounded text-[#434655] hover:text-[#004ac6] transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </a>

        {/* Card 2: LinkedIn */}
        <a
          href={PORTFOLIO_CONFIG.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 border border-[#c3c6d7]/40 hover:border-[#004ac6] hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-xs"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#e0e0ff]/50 flex items-center justify-center text-[#004ac6] group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>

            <div>
              <div className="font-sans-inter text-[18px] text-[#131b2e] font-semibold">
                LinkedIn
              </div>
              <p className="font-mono-code text-[12px] text-[#004ac6] font-medium mt-0.5">
                in/shagun-sharma
              </p>
            </div>

            <p className="font-sans-inter text-[13px] text-[#434655] leading-relaxed">
              Professional updates, industry networking, and work background.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#c3c6d7]/30 flex items-center justify-between text-[#004ac6] font-mono-code text-[12px] font-medium group-hover:underline">
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>

        {/* Card 3: GitHub */}
        <a
          href={PORTFOLIO_CONFIG.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 border border-[#c3c6d7]/40 hover:border-[#004ac6] hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-xs"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#e0e0ff]/50 flex items-center justify-center text-[#004ac6] group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>

            <div>
              <div className="font-sans-inter text-[18px] text-[#131b2e] font-semibold">
                GitHub
              </div>
              <p className="font-mono-code text-[12px] text-[#004ac6] font-medium mt-0.5">
                @shagunsharma
              </p>
            </div>

            <p className="font-sans-inter text-[13px] text-[#434655] leading-relaxed">
              Code repositories, experimental tools, prompt tests, and forks.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#c3c6d7]/30 flex items-center justify-between text-[#004ac6] font-mono-code text-[12px] font-medium group-hover:underline">
            <span>View GitHub Profile</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>

        {/* Card 4: Instagram */}
        <a
          href={PORTFOLIO_CONFIG.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 border border-[#c3c6d7]/40 hover:border-[#004ac6] hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-xs"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#e0e0ff]/50 flex items-center justify-center text-[#004ac6] group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>

            <div>
              <div className="font-sans-inter text-[18px] text-[#131b2e] font-semibold">
                Instagram
              </div>
              <p className="font-mono-code text-[12px] text-[#004ac6] font-medium mt-0.5">
                @shagunsharma
              </p>
            </div>

            <p className="font-sans-inter text-[13px] text-[#434655] leading-relaxed">
              Creative visual media, design experiments, and behind-the-scenes moments.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#c3c6d7]/30 flex items-center justify-between text-[#004ac6] font-mono-code text-[12px] font-medium group-hover:underline">
            <span>Follow on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>
      </div>

      {/* Quick Message Modal */}
      {messageFormOpen && (
        <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 border border-[#c3c6d7] shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#c3c6d7]/30 mb-4">
              <h3 className="font-serif-editorial text-[22px] font-semibold text-[#131b2e]">
                Send a Message to Shagun
              </h3>
              <button
                onClick={() => setMessageFormOpen(false)}
                className="text-[#434655] hover:text-[#131b2e] p-1.5 rounded-lg hover:bg-[#eaedff]"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-sans-inter text-[16px] font-semibold text-[#131b2e]">
                  Message Dispatched!
                </h4>
                <p className="text-[13px] text-[#434655]">
                  Thank you! Shagun will receive your note and get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4 font-sans-inter">
                <div>
                  <label className="block text-[12px] font-mono-code text-[#434655] mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#faf8ff] border border-[#c3c6d7] rounded-xl px-3.5 py-2 text-[13px] text-[#131b2e] focus:outline-none focus:border-[#004ac6]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-mono-code text-[#434655] mb-1">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full bg-[#faf8ff] border border-[#c3c6d7] rounded-xl px-3.5 py-2 text-[13px] text-[#131b2e] focus:outline-none focus:border-[#004ac6]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-mono-code text-[#434655] mb-1">
                    Note or Project Inquiry:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discussing an internship, AI project, prompt engineering challenge, or collaboration..."
                    className="w-full bg-[#faf8ff] border border-[#c3c6d7] rounded-xl px-3.5 py-2 text-[13px] text-[#131b2e] focus:outline-none focus:border-[#004ac6]"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setMessageFormOpen(false)}
                    className="px-4 py-2 border border-[#c3c6d7] rounded-xl text-[12px] font-mono-code text-[#434655] hover:bg-[#eaedff]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#004ac6] text-white rounded-xl text-[12px] font-mono-code hover:bg-[#003ea8] transition-colors flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Note</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
