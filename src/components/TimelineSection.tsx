import React from 'react';
import { TIMELINE_MILESTONES } from '../data/portfolioData.ts';

export const TimelineSection: React.FC = () => {
  return (
    <section className="scroll-mt-24 space-y-8" id="journey-timeline">
      <div>
        <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
          PROGRESSION
        </div>
        <h2 className="font-serif-editorial text-[32px] sm:text-[40px] text-[#131b2e] leading-tight font-normal">
          My Journey
        </h2>
        <p className="font-sans-inter text-[15px] text-[#434655] mt-1">
          A visual step timeline tracking my ongoing learning milestones and technical growth.
        </p>
      </div>

      <div className="relative border-l-2 border-[#c3c6d7]/40 ml-4 md:ml-6 pl-6 md:pl-10 space-y-8">
        {TIMELINE_MILESTONES.map((item) => (
          <div key={item.stage} className="relative group">
            {/* Timeline bullet indicator */}
            {item.isActive ? (
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#004ac6] border-2 border-[#faf8ff] shadow-xs"></span>
            ) : (
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#004ac6] group-hover:scale-110 transition-transform"></span>
            )}

            <span
              className={`font-mono-code text-[11px] uppercase tracking-wider block ${
                item.isActive ? 'text-[#004ac6] font-bold' : 'text-[#004ac6]'
              }`}
            >
              {item.stage}
            </span>

            <h3 className="font-serif-editorial text-[20px] text-[#131b2e] font-semibold mt-0.5">
              {item.title}
            </h3>

            <p className="font-sans-inter text-[15px] text-[#434655] mt-1 max-w-2xl leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
