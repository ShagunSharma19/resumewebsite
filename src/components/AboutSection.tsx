import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

export const AboutSection: React.FC = () => {
  const quickFacts = [
    { label: 'Name', value: PORTFOLIO_CONFIG.name },
    { label: 'Education', value: 'BCA, 5th Semester' },
    { label: 'College', value: PORTFOLIO_CONFIG.college },
    { label: 'Location', value: PORTFOLIO_CONFIG.location },
  ];

  const interests = ['AI', 'Automation', 'Prompt Engineering', 'Emerging Technologies'];

  return (
    <section className="scroll-mt-24" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest font-semibold uppercase">
            ABOUT ME
          </div>

          <h2 className="font-serif-editorial text-[32px] sm:text-[40px] text-[#131b2e] leading-tight font-normal">
            Turning curiosity into practical projects.
          </h2>

          <p className="font-sans-inter text-[17px] text-[#434655] leading-relaxed">
            {PORTFOLIO_CONFIG.aboutParagraphs[0]}
          </p>

          <p className="font-sans-inter text-[15px] text-[#434655] leading-relaxed">
            {PORTFOLIO_CONFIG.aboutParagraphs[1]}
          </p>
        </div>

        {/* Right Column: Quick Facts Card */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 lg:p-8 border border-[#c3c6d7]/40 shadow-xs space-y-4">
          <div className="font-serif-editorial text-[22px] font-semibold text-[#131b2e] border-b border-[#c3c6d7]/30 pb-3">
            Quick Facts
          </div>

          <dl className="space-y-3 font-sans-inter text-[14px]">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between items-center py-1.5 border-b border-[#c3c6d7]/20"
              >
                <dt className="text-[#434655] font-mono-code text-[12px]">{fact.label}</dt>
                <dd className="text-[#131b2e] font-medium text-right">{fact.value}</dd>
              </div>
            ))}

            <div className="pt-2">
              <dt className="text-[#434655] font-mono-code text-[12px] mb-2.5">Interests</dt>
              <dd className="flex flex-wrap gap-1.5">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 rounded-md bg-[#e0e0ff]/50 border border-[#c3c6d7]/30 font-mono-code text-[11px] text-[#131b2e]"
                  >
                    {interest}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
