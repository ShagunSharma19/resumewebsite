import React, { useState } from 'react';
import { SKILLS_CATEGORIES } from '../data/portfolioData.ts';
import { Search } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="scroll-mt-24 space-y-8" id="skills">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
            CAPABILITIES
          </div>
          <h2 className="font-serif-editorial text-[32px] sm:text-[40px] text-[#131b2e] leading-tight font-normal">
            Skills &amp; Technical Foundation
          </h2>
          <p className="font-sans-inter text-[15px] text-[#434655] mt-1">
            Honest categorization based on practical experience and current coursework.
          </p>
        </div>

        {/* Optional Search filter */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#434655] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-white border border-[#c3c6d7] rounded-xl text-[13px] text-[#131b2e] placeholder-[#434655]/60 focus:outline-none focus:border-[#004ac6] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS_CATEGORIES.map((cat) => {
          const filteredSkills = searchTerm
            ? cat.skills.filter((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
            : cat.skills;

          return (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 border border-[#c3c6d7]/40 space-y-4 shadow-xs hover:border-[#c3c6d7] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`}></span>
                  <h3 className="font-sans-inter text-[17px] text-[#131b2e] font-semibold">
                    {cat.title}
                  </h3>
                </div>
                <p className="font-sans-inter text-[13px] text-[#434655] mt-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {filteredSkills.length > 0 ? (
                  filteredSkills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg border font-mono-code text-[11px] transition-transform hover:scale-105 ${cat.pillStyle}`}
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-[12px] text-[#434655]/60 italic font-mono-code">
                    No matching skills in this category
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
