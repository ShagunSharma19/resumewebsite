import React, { useState } from 'react';
import { Terminal, GitBranch, Video, Hourglass, ArrowRight, X, Copy, Check, Sparkles, Play, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Interactive Prompt Generator Mini-App State
  const [promptTask, setPromptTask] = useState('Code Review');
  const [promptAudience, setPromptAudience] = useState('Senior Developer');
  const [promptTone, setPromptTone] = useState('Rigorous & Constructive');
  const [promptConstraint, setPromptConstraint] = useState('Strict JSON Output & Complexity Analysis');
  const [copied, setCopied] = useState(false);

  const generatedPromptText = `You are an elite Software Engineer specializing in ${promptTask}.
Target Audience: ${promptAudience}.
Tone & Demeanor: ${promptTone}.

PRIMARY DIRECTIVE:
Execute an in-depth review focusing on architecture, edge-case vulnerabilities, and execution efficiency.

OPERATIONAL CONSTRAINTS:
1. ${promptConstraint}.
2. Adhere strictly to clean code principles without colloquial speculation.
3. Every recommendation must cite the exact line block and asymptotic complexity impact.

OUTPUT FORMAT:
Return response formatted in structured markdown using delimiter blocks:
<analysis_summary>
<vulnerabilities>
<performance_optimizations>
<final_verdict>`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getProjectIcon = (icon: string) => {
    switch (icon) {
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#434655]" />;
      case 'git-branch':
        return <GitBranch className="w-5 h-5 text-[#434655]" />;
      case 'video':
        return <Video className="w-5 h-5 text-[#434655]" />;
      case 'hourglass':
        return <Hourglass className="w-5 h-5 text-[#434655]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#434655]" />;
    }
  };

  return (
    <section className="scroll-mt-24 space-y-8" id="projects">
      <div>
        <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
          PORTFOLIO WORK
        </div>
        <h2 className="font-serif-editorial text-[32px] sm:text-[40px] text-[#131b2e] leading-tight font-normal">
          Things I've Built
        </h2>
        <p className="font-sans-inter text-[15px] text-[#434655] mt-1">
          Small experiments today, bigger systems tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => {
          if (project.isUpcoming) {
            return (
              <div
                key={project.id}
                className="bg-[#f2f3ff]/70 rounded-2xl p-8 border border-dashed border-[#c3c6d7] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="font-mono-code text-[11px] text-[#434655] uppercase tracking-wider font-semibold">
                      {project.badge}
                    </span>
                    {getProjectIcon(project.icon)}
                  </div>

                  <h3 className="font-serif-editorial text-[22px] text-[#131b2e] font-semibold">
                    {project.title}
                  </h3>

                  <p className="font-sans-inter text-[15px] text-[#434655] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaedff] border border-[#c3c6d7]/40 font-mono-code text-[11px] text-[#131b2e]">
                      <span className="w-2 h-2 rounded-full bg-[#4953bc]"></span>
                      {project.upcomingTag}
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#c3c6d7]/30 flex items-center justify-between">
                  <span className="font-mono-code text-[11px] text-[#434655]">Stay tuned</span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-8 border border-[#c3c6d7]/40 hover:border-[#004ac6]/40 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="font-mono-code text-[11px] text-[#004ac6] uppercase tracking-wider font-semibold">
                    {project.badge}
                  </span>
                  {getProjectIcon(project.icon)}
                </div>

                <h3 className="font-serif-editorial text-[22px] text-[#131b2e] font-semibold">
                  {project.title}
                </h3>

                <p className="font-sans-inter text-[15px] text-[#434655] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#e0e0ff]/50 font-mono-code text-[11px] text-[#131b2e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#c3c6d7]/30 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 font-mono-code text-[12px] text-[#004ac6] hover:underline cursor-pointer group"
                >
                  <span>View Project</span>
                  <span className="text-[14px] transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-[#c3c6d7] shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-[#434655] hover:text-[#131b2e] rounded-lg hover:bg-[#eaedff] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono-code text-[11px] text-[#004ac6] font-bold uppercase tracking-wider">
                {selectedProject.badge}
              </span>
            </div>

            <h3 className="font-serif-editorial text-[26px] font-semibold text-[#131b2e]">
              {selectedProject.title}
            </h3>

            <div className="flex flex-wrap gap-2 my-3">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-[#eaedff] text-[#131b2e] font-mono-code text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-sans-inter text-[15px] text-[#434655] leading-relaxed mt-3">
              {selectedProject.details?.overview}
            </p>

            {/* Interactive Demo Area according to Project */}
            {selectedProject.id === 'prompt-generator' && (
              <div className="mt-6 p-5 bg-[#faf8ff] rounded-xl border border-[#c3c6d7]/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#004ac6]" />
                    <span className="font-mono-code text-[12px] font-semibold text-[#131b2e]">
                      Interactive Prompt Builder
                    </span>
                  </div>
                  <span className="font-mono-code text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Live Simulator
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px]">
                  <div>
                    <label className="block font-mono-code text-[11px] text-[#434655] mb-1">
                      Target Task:
                    </label>
                    <select
                      value={promptTask}
                      onChange={(e) => setPromptTask(e.target.value)}
                      className="w-full bg-white border border-[#c3c6d7] rounded-lg p-2 text-[#131b2e] text-[12px] focus:outline-none focus:border-[#004ac6]"
                    >
                      <option value="Code Review">Code Review & Architecture</option>
                      <option value="Technical Documentation">Technical Documentation</option>
                      <option value="Workflow Automation Spec">Workflow Automation Spec</option>
                      <option value="Data Schema Extraction">Data Schema Extraction</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono-code text-[11px] text-[#434655] mb-1">
                      Role / Audience:
                    </label>
                    <select
                      value={promptAudience}
                      onChange={(e) => setPromptAudience(e.target.value)}
                      className="w-full bg-white border border-[#c3c6d7] rounded-lg p-2 text-[#131b2e] text-[12px] focus:outline-none focus:border-[#004ac6]"
                    >
                      <option value="Senior Developer">Senior Developer</option>
                      <option value="BCA Student / Learner">BCA Student / Learner</option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="Strict Automated Linter">Strict Automated Linter</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <pre className="bg-[#131b2e] text-[#faf8ff] p-4 rounded-xl text-[11px] font-mono-code overflow-x-auto whitespace-pre-wrap max-h-48 leading-relaxed">
                    {generatedPromptText}
                  </pre>
                  <button
                    onClick={handleCopyPrompt}
                    className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded text-[11px] font-mono-code flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {selectedProject.id === 'make-automation' && (
              <div className="mt-6 p-5 bg-[#faf8ff] rounded-xl border border-[#c3c6d7]/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-[#004ac6]" />
                    <span className="font-mono-code text-[12px] font-semibold text-[#131b2e]">
                      Automated Pipeline Architecture
                    </span>
                  </div>
                  <span className="font-mono-code text-[10px] text-[#004ac6] bg-[#eaedff] px-2 py-0.5 rounded border border-[#c3c6d7]/50">
                    Active Scenario
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-[12px]">
                  <div className="p-3 bg-white rounded-lg border border-[#c3c6d7]/50 shadow-xs">
                    <div className="font-mono-code text-[10px] text-[#004ac6]">STEP 01</div>
                    <div className="font-semibold text-[#131b2e] mt-1">Webhook Ingest</div>
                    <div className="text-[11px] text-[#434655]">JSON Payload</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#c3c6d7]/50 shadow-xs">
                    <div className="font-mono-code text-[10px] text-[#004ac6]">STEP 02</div>
                    <div className="font-semibold text-[#131b2e] mt-1">AI Reasoning</div>
                    <div className="text-[11px] text-[#434655]">GPT-4o Analysis</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#c3c6d7]/50 shadow-xs">
                    <div className="font-mono-code text-[10px] text-[#004ac6]">STEP 03</div>
                    <div className="font-semibold text-[#131b2e] mt-1">Router Logic</div>
                    <div className="text-[11px] text-[#434655]">Urgency Split</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#c3c6d7]/50 shadow-xs">
                    <div className="font-mono-code text-[10px] text-[#004ac6]">STEP 04</div>
                    <div className="font-semibold text-[#131b2e] mt-1">Action Dispatch</div>
                    <div className="text-[11px] text-[#434655]">Slack + Sheets</div>
                  </div>
                </div>

                <p className="text-[12px] text-[#434655] leading-relaxed">
                  Eliminates manual triage by parsing inbound customer and tech inquiries, evaluating sentiment scores, and synchronizing with team databases automatically.
                </p>
              </div>
            )}

            {selectedProject.id === 'techigigs-ad' && (
              <div className="mt-6 p-5 bg-[#faf8ff] rounded-xl border border-[#c3c6d7]/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#004ac6]" />
                    <span className="font-mono-code text-[12px] font-semibold text-[#131b2e]">
                      Creative Video Production Toolchain
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-[12px]">
                  <div className="p-3 bg-white rounded-lg border border-[#c3c6d7]/40 flex items-start gap-3">
                    <span className="font-mono-code text-[11px] font-semibold text-[#004ac6] shrink-0">
                      Phase 1:
                    </span>
                    <span className="text-[#434655]">
                      Visual Concept & Prompt Crafting using structured camera descriptors in Midjourney v6.
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#c3c6d7]/40 flex items-start gap-3">
                    <span className="font-mono-code text-[11px] font-semibold text-[#004ac6] shrink-0">
                      Phase 2:
                    </span>
                    <span className="text-[#434655]">
                      Diffusion Video Extrapolation & Camera Pan Keyframing in Runway Gen-2.
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#c3c6d7]/40 flex items-start gap-3">
                    <span className="font-mono-code text-[11px] font-semibold text-[#004ac6] shrink-0">
                      Phase 3:
                    </span>
                    <span className="text-[#434655]">
                      Synthetic Voiceover narration recorded via ElevenLabs with audio master in CapCut.
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#c3c6d7]/30 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 bg-[#131b2e] text-white rounded-xl text-[12px] font-mono-code hover:bg-slate-800 transition-colors"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
