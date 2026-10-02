import React from 'react';
import { ALWAYS_LEARNING_TOPICS } from '../data/portfolioData.ts';

export const AlwaysLearning: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl p-8 border border-[#c3c6d7]/40 space-y-4 shadow-xs">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="font-mono-code text-[11px] tracking-wider text-[#131b2e] font-semibold uppercase">
          ALWAYS LEARNING
        </span>
      </div>

      <p className="font-sans-inter text-[15px] text-[#434655]">
        Topics currently open in my study queue and practice environments:
      </p>

      <div className="flex flex-wrap gap-2.5 pt-2">
        {ALWAYS_LEARNING_TOPICS.map((topic) => (
          <span
            key={topic}
            className="px-3.5 py-1.5 rounded-full bg-[#e0e0ff]/40 border border-[#c3c6d7]/40 font-mono-code text-[11px] text-[#131b2e] hover:bg-[#e0e0ff]/70 transition-colors"
          >
            {topic}
          </span>
        ))}
      </div>
    </section>
  );
};
