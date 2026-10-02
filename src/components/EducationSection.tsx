import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData.ts';

export const EducationSection: React.FC = () => {
  return (
    <section className="scroll-mt-24 space-y-8" id="education">
      <div>
        <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
          ACADEMICS
        </div>
        <h2 className="font-serif-editorial text-[32px] sm:text-[40px] text-[#131b2e] leading-tight font-normal">
          Education
        </h2>
        <p className="font-sans-inter text-[15px] text-[#434655] mt-1">
          Formal academic background and qualification record.
        </p>
      </div>

      <div className="space-y-4">
        {EDUCATION_DATA.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-[#c3c6d7]/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs hover:border-[#c3c6d7] transition-all"
          >
            <div className="space-y-1.5">
              <div
                className={`inline-block px-2.5 py-0.5 rounded font-mono-code text-[11px] font-semibold ${
                  item.type === 'UNDERGRADUATE'
                    ? 'bg-[#dbe1ff] text-[#00174b]'
                    : 'bg-[#eaedff] text-[#131b2e]'
                }`}
              >
                {item.type}
              </div>

              <h3 className="font-serif-editorial text-[22px] text-[#131b2e] font-semibold">
                {item.title}
              </h3>

              <p className="font-sans-inter text-[15px] text-[#434655]">
                {item.institution}
              </p>
            </div>

            <div className="text-left md:text-right shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-[#c3c6d7]/30">
              <div className="font-mono-code text-[11px] text-[#434655] uppercase tracking-wider">
                {item.scoreLabel}
              </div>
              <div
                className={`font-semibold text-[#131b2e] ${
                  item.type === 'UNDERGRADUATE'
                    ? 'font-sans-inter text-[17px]'
                    : 'font-serif-editorial text-[22px]'
                }`}
              >
                {item.scoreValue}
              </div>
              {item.subScore && (
                <div className="font-mono-code text-[12px] text-[#004ac6] font-medium mt-0.5">
                  {item.subScore}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
