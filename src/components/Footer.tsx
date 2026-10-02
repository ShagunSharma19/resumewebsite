import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f2f3ff] border-t border-[#c3c6d7]/30 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-10 max-w-7xl mx-auto gap-4">
        {/* Left: Name & Tagline */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="font-serif-editorial text-[22px] font-semibold text-[#131b2e] tracking-tight hover:text-[#004ac6] transition-colors"
          >
            SHAGUN
          </a>
          <p className="font-sans-inter text-[13px] text-[#434655] mt-0.5">
            Learning • Building • Exploring
          </p>
        </div>

        {/* Center / Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href={PORTFOLIO_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#434655] font-mono-code text-[12px] hover:text-[#004ac6] transition-colors"
          >
            Instagram
          </a>
          <a
            href={`mailto:${PORTFOLIO_CONFIG.social.gmail}`}
            className="text-[#434655] font-mono-code text-[12px] hover:text-[#004ac6] transition-colors"
          >
            Gmail
          </a>
          <a
            href={PORTFOLIO_CONFIG.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#434655] font-mono-code text-[12px] hover:text-[#004ac6] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PORTFOLIO_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#434655] font-mono-code text-[12px] hover:text-[#004ac6] transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right">
          <span className="font-mono-code text-[12px] text-[#434655]">
            © 2026 Shagun Sharma
          </span>
        </div>
      </div>
    </footer>
  );
};
