import React, { useState } from 'react';
import { ArrowDown, Download, MapPin, Sparkles, User } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-4 md:pt-8 scroll-mt-24" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0e0ff]/60 border border-[#c3c6d7]/40 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse"></span>
            <span className="font-mono-code text-[11px] font-medium tracking-wider text-[#131b2e] uppercase">
              BCA STUDENT • AI EXPLORER
            </span>
          </div>

          <h1 className="font-serif-editorial text-[42px] sm:text-[52px] md:text-[58px] leading-[1.1] text-[#131b2e] tracking-tight font-normal">
            Hi, I'm Shagun.
          </h1>

          <p className="font-serif-editorial text-[22px] sm:text-[24px] text-[#004ac6] font-medium leading-snug">
            {PORTFOLIO_CONFIG.tagline}
          </p>

          <p className="font-sans-inter text-[17px] text-[#434655] max-w-2xl leading-relaxed">
            {PORTFOLIO_CONFIG.bio}
          </p>

          {/* Action Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#131b2e] text-white px-6 py-3.5 rounded-xl font-mono-code text-[13px] hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-sm group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 border border-[#c3c6d7] bg-white text-[#131b2e] px-6 py-3.5 rounded-xl font-mono-code text-[13px] hover:bg-[#eaedff] hover:border-[#2563eb] transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 text-[#004ac6]" />
            </button>
          </div>

          {/* Academic Status & Location Badge */}
          <div className="pt-4 border-t border-[#c3c6d7]/40 flex items-center gap-3 text-[#434655]">
            <MapPin className="w-5 h-5 text-[#004ac6] shrink-0" />
            <span className="font-mono-code text-[12px] tracking-wide">
              {PORTFOLIO_CONFIG.status}
            </span>
          </div>
        </div>

        {/* Right Column: Real Portrait Image */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            {/* Decorative Offset Subtle Lavender Frame */}
            <div className="absolute inset-0 bg-[#e0e0ff]/50 rounded-[2.5rem] rotate-2 scale-[1.03] transition-transform duration-300 pointer-events-none"></div>

            {/* Real Portrait Container */}
            <div className="relative rounded-[2.2rem] overflow-hidden bg-white border border-[#c3c6d7]/60 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.12)] aspect-[3/4]">
              {!imageError ? (
                <img
                  src={PORTFOLIO_CONFIG.avatarUrl}
                  alt="Shagun Sharma - BCA Student & AI Explorer"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              ) : (
                /* High-fidelity elegant fallback container (Zero-Broken-Image Policy) */
                <div className="w-full h-full bg-gradient-to-br from-[#eaedff] to-[#dae2fd] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4 text-[#004ac6]">
                    <User className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif-editorial text-[24px] font-semibold text-[#131b2e]">
                    Shagun Sharma
                  </h3>
                  <p className="font-mono-code text-[12px] text-[#434655] mt-1">
                    BCA 5th Sem · SVGC Ghumarwin
                  </p>
                  <div className="mt-4 px-3 py-1 rounded-full bg-white/80 border border-[#c3c6d7]/50 text-[11px] font-mono-code text-[#004ac6]">
                    AI Explorer
                  </div>
                </div>
              )}

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#c3c6d7]/50 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono-code text-[11px] text-[#131b2e] font-medium">
                  AI Explorer
                </span>
              </div>
            </div>

            {/* Tasteful Note Beneath */}
            <div className="mt-4 text-center">
              <span className="inline-block font-mono-code text-[12px] text-[#434655]/85 tracking-wider">
                Learning → Building → Exploring
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
