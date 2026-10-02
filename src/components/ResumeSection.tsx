import React, { useState } from 'react';
import { Download, Eye, X, Printer, Check, Copy, ExternalLink, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_CONFIG, EDUCATION_DATA, PROJECTS, SKILLS_CATEGORIES } from '../data/portfolioData.ts';

interface ResumeSectionProps {
  isModalOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  isModalOpen,
  onOpenModal,
  onCloseModal,
}) => {
  const [copiedResume, setCopiedResume] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `SHAGUN SHARMA - RESUME
BCA Student & AI Explorer
Email: ${PORTFOLIO_CONFIG.social.gmail}
Location: ${PORTFOLIO_CONFIG.location}
LinkedIn: ${PORTFOLIO_CONFIG.social.linkedin}
GitHub: ${PORTFOLIO_CONFIG.social.github}

ACADEMIC QUALIFICATIONS:
- Bachelor of Computer Applications (BCA), SVGC Ghumarwin (Current: 5th Sem, 4th Sem CGPA: 7.2)
- Class 12 Senior Secondary Examination, GSSS Dadhol, 2024 (85.8%)
- Class 10 Matriculation Examination, SVM Dadhol, 2021 (92.2%)

KEY PROJECTS:
1. Universal AI Prompt Generator
   - Structured prompt-generation workflow system for reproducible LLM outputs.
2. Make Automation Workflows
   - Multi-step no-code and AI pipelines bridging webhooks, data filtering, and Slack/Sheets notifications.
3. Techigigs AI Advertisement
   - End-to-end synthetic video campaign utilizing generative text-to-image, video extrapolation, and synthetic voiceover.

TECHNICAL SKILLS:
- Languages & Core: C, C++, HTML, Python Basics, C# / .NET Basics, ASP.NET, Web Development
- AI & Automation: Prompt Engineering, Make.com, AI Image/Video Generation, Workflow Optimization
`;
    navigator.clipboard.writeText(text);
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 2000);
  };

  return (
    <>
      <section className="scroll-mt-24" id="resume">
        <div className="bg-[#f2f3ff] rounded-2xl p-8 lg:p-12 border border-[#c3c6d7]/40 text-center space-y-6 shadow-xs">
          <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
            CURRICULUM VITAE
          </div>

          <h2 className="font-serif-editorial text-[32px] sm:text-[40px] text-[#131b2e] leading-tight font-normal max-w-2xl mx-auto">
            Want the complete picture?
          </h2>

          <p className="font-sans-inter text-[16px] sm:text-[18px] text-[#434655] max-w-xl mx-auto leading-relaxed">
            Explore my education, skills, projects, and learning journey in my resume.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 bg-[#131b2e] text-white px-6 py-3.5 rounded-xl font-mono-code text-[13px] hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 border border-[#c3c6d7] bg-white text-[#131b2e] px-6 py-3.5 rounded-xl font-mono-code text-[13px] hover:bg-[#eaedff] hover:border-[#2563eb] transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
            >
              <span>View Resume</span>
              <Eye className="w-4 h-4 text-[#004ac6]" />
            </button>
          </div>
        </div>
      </section>

      {/* High-Fidelity Resume Viewer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#131b2e]/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-10 border border-[#c3c6d7] shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            {/* Modal Controls Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#c3c6d7]/40 mb-6">
              <div className="flex items-center gap-2 text-[#004ac6] font-mono-code text-[11px] font-semibold uppercase tracking-wider">
                <span>Official Curriculum Vitae</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyText}
                  className="p-2 text-[#434655] hover:text-[#004ac6] hover:bg-[#eaedff] rounded-lg transition-colors"
                  title="Copy Resume Plaintext"
                  aria-label="Copy text"
                >
                  {copiedResume ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={handlePrint}
                  className="p-2 text-[#434655] hover:text-[#004ac6] hover:bg-[#eaedff] rounded-lg transition-colors"
                  title="Print / Save PDF"
                  aria-label="Print resume"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={onCloseModal}
                  className="p-2 text-[#434655] hover:text-[#131b2e] hover:bg-[#eaedff] rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Document Content */}
            <div className="space-y-8 font-sans-inter text-[#131b2e]">
              {/* Header */}
              <div className="border-b border-[#c3c6d7]/40 pb-6">
                <h1 className="font-serif-editorial text-[34px] font-semibold text-[#131b2e]">
                  {PORTFOLIO_CONFIG.name}
                </h1>
                <p className="font-serif-editorial text-[18px] text-[#004ac6] font-medium mt-0.5">
                  BCA Student &bull; AI Explorer
                </p>

                <div className="flex flex-wrap gap-4 mt-3 text-[12px] font-mono-code text-[#434655]">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#004ac6]" />
                    {PORTFOLIO_CONFIG.social.gmail}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#004ac6]" />
                    {PORTFOLIO_CONFIG.location}
                  </span>
                </div>
              </div>

              {/* Profile Summary */}
              <div>
                <h2 className="font-mono-code text-[12px] font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                  Professional Profile
                </h2>
                <p className="text-[14px] text-[#434655] leading-relaxed">
                  {PORTFOLIO_CONFIG.bio}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-mono-code text-[12px] font-bold uppercase tracking-wider text-[#004ac6] mb-3">
                  Academic Education
                </h2>
                <div className="space-y-3">
                  {EDUCATION_DATA.map((edu) => (
                    <div
                      key={edu.title}
                      className="p-3.5 rounded-xl bg-[#faf8ff] border border-[#c3c6d7]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <div>
                        <div className="font-semibold text-[15px] text-[#131b2e]">{edu.title}</div>
                        <div className="text-[13px] text-[#434655]">{edu.institution}</div>
                      </div>
                      <div className="font-mono-code text-[12px] text-[#004ac6] font-medium sm:text-right">
                        <div>{edu.scoreValue}</div>
                        {edu.subScore && <div className="text-[11px] text-[#434655]">{edu.subScore}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="font-mono-code text-[12px] font-bold uppercase tracking-wider text-[#004ac6] mb-3">
                  Key Projects & Experiments
                </h2>
                <div className="space-y-3">
                  {PROJECTS.filter((p) => !p.isUpcoming).map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3.5 rounded-xl bg-[#faf8ff] border border-[#c3c6d7]/30 space-y-1.5"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-[15px] text-[#131b2e]">{proj.title}</h3>
                        <span className="font-mono-code text-[11px] text-[#004ac6]">{proj.badge}</span>
                      </div>
                      <p className="text-[13px] text-[#434655] leading-relaxed">{proj.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-[#eaedff] font-mono-code text-[10px] text-[#131b2e]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-mono-code text-[12px] font-bold uppercase tracking-wider text-[#004ac6] mb-3">
                  Technical Foundation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SKILLS_CATEGORIES.map((cat) => (
                    <div
                      key={cat.title}
                      className="p-3 rounded-xl bg-[#faf8ff] border border-[#c3c6d7]/30"
                    >
                      <div className="font-mono-code text-[11px] font-semibold text-[#131b2e] mb-2">
                        {cat.title}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded bg-white border border-[#c3c6d7]/40 font-mono-code text-[10px] text-[#131b2e]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-[#c3c6d7]/40 flex flex-wrap justify-between items-center gap-3">
              <span className="font-mono-code text-[11px] text-[#434655]">
                SVGC Ghumarwin &bull; Verified Academic Record
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-[#004ac6] text-white rounded-xl text-[12px] font-mono-code hover:bg-[#003ea8] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={onCloseModal}
                  className="px-4 py-2 bg-[#131b2e] text-white rounded-xl text-[12px] font-mono-code hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
