import React, { useState } from 'react';
import { Brain, Edit3, Repeat, Clapperboard, Wrench, Code2, X, ExternalLink, Sparkles } from 'lucide-react';
import { PLAYGROUND_ITEMS } from '../data/portfolioData.ts';
import { PlaygroundItem } from '../types.ts';

export const PlaygroundSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PlaygroundItem | null>(null);

  const getPlaygroundIcon = (icon: string) => {
    switch (icon) {
      case 'brain':
        return <Brain className="w-6 h-6 text-[#004ac6]" />;
      case 'edit-3':
        return <Edit3 className="w-6 h-6 text-[#004ac6]" />;
      case 'repeat':
        return <Repeat className="w-6 h-6 text-[#004ac6]" />;
      case 'clapperboard':
        return <Clapperboard className="w-6 h-6 text-[#004ac6]" />;
      case 'wrench':
        return <Wrench className="w-6 h-6 text-[#004ac6]" />;
      case 'code-2':
        return <Code2 className="w-6 h-6 text-[#004ac6]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#004ac6]" />;
    }
  };

  return (
    <section className="scroll-mt-24 space-y-8" id="playground">
      <div>
        <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
          EXPLORATION MATRIX
        </div>
        <h2 className="font-serif-editorial text-[32px] sm:text-[40px] text-[#131b2e] leading-tight font-normal">
          My AI Playground
        </h2>
        <p className="font-sans-inter text-[15px] text-[#434655] mt-1">
          Technologies and ideas I'm currently exploring.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLAYGROUND_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-2xl p-6 border border-[#c3c6d7]/40 hover:border-[#004ac6]/60 transition-all duration-200 group cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#e0e0ff]/50 flex items-center justify-center text-[#004ac6] mb-4 group-hover:scale-105 transition-transform">
                {getPlaygroundIcon(item.icon)}
              </div>
              <h3 className="font-serif-editorial text-[19px] text-[#131b2e] font-semibold mb-2 group-hover:text-[#004ac6] transition-colors">
                {item.title}
              </h3>
              <p className="font-sans-inter text-[13px] text-[#434655] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#c3c6d7]/20 flex items-center justify-between text-[#004ac6] font-mono-code text-[11px]">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                Deep Dive →
              </span>
              <span className="text-[#434655]/60 group-hover:text-[#004ac6]">Active Focus</span>
            </div>
          </div>
        ))}
      </div>

      {/* Exploration Deep Dive Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-[#c3c6d7] shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 text-[#434655] hover:text-[#131b2e] rounded-lg hover:bg-[#eaedff] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#e0e0ff] flex items-center justify-center">
                {getPlaygroundIcon(selectedItem.icon)}
              </div>
              <div>
                <span className="font-mono-code text-[10px] text-[#004ac6] uppercase tracking-wider font-semibold">
                  Field Deep-Dive
                </span>
                <h3 className="font-serif-editorial text-[22px] font-semibold text-[#131b2e]">
                  {selectedItem.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 font-sans-inter text-[14px] text-[#434655]">
              <p className="leading-relaxed bg-[#f2f3ff] p-4 rounded-xl border border-[#c3c6d7]/30">
                {selectedItem.detail.overview}
              </p>

              <div>
                <h4 className="font-mono-code text-[11px] font-semibold text-[#131b2e] uppercase tracking-wider mb-2">
                  Tools & Environments:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.detail.keyTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded bg-[#eaedff] text-[#131b2e] font-mono-code text-[11px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono-code text-[11px] font-semibold text-[#131b2e] uppercase tracking-wider mb-1.5">
                  Active Sandbox Experiment:
                </h4>
                <div className="p-3 bg-[#faf8ff] rounded-lg border border-[#c3c6d7]/40 font-mono-code text-[12px] text-[#131b2e] leading-relaxed">
                  {selectedItem.detail.sampleExperiment}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#c3c6d7]/30 flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 bg-[#131b2e] text-white rounded-xl text-[12px] font-mono-code hover:bg-slate-800 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
