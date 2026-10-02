import React, { useState } from 'react';
import { BookOpen, FlaskConical, Wrench, FileText, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';
import { JOURNEY_STAGES } from '../data/portfolioData.ts';

export const InteractiveJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1); // default to step 1 (02. EXPERIMENT) like screenshot

  const currentStage = JOURNEY_STAGES[activeStep];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'book-open':
        return <BookOpen className="w-7 h-7 text-[#004ac6]" />;
      case 'flask-conical':
        return <FlaskConical className="w-7 h-7 text-[#004ac6]" />;
      case 'wrench':
        return <Wrench className="w-7 h-7 text-[#004ac6]" />;
      case 'file-text':
        return <FileText className="w-7 h-7 text-[#004ac6]" />;
      case 'refresh-cw':
        return <RefreshCw className="w-7 h-7 text-[#004ac6]" />;
      default:
        return <FlaskConical className="w-7 h-7 text-[#004ac6]" />;
    }
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % JOURNEY_STAGES.length);
  };

  return (
    <section className="scroll-mt-24" id="ai-journey">
      <div className="bg-[#f2f3ff] rounded-2xl p-8 lg:p-12 border border-[#c3c6d7]/40 space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
            Interactive Workflow
          </div>
          <h2 className="font-serif-editorial text-[28px] sm:text-[32px] text-[#131b2e] font-medium">
            Explore My AI Journey
          </h2>
          <p className="font-sans-inter text-[15px] text-[#434655]">
            A 5-stage sequential iterative workflow I follow to understand tools, construct prompts, and build practical solutions.
          </p>
        </div>

        {/* 5-Stage Stepper Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" id="journey-steps">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#004ac6] shadow-sm ring-1 ring-[#004ac6]/20'
                    : 'bg-[#faf8ff]/70 border-[#c3c6d7]/40 hover:bg-white hover:border-[#c3c6d7]'
                }`}
              >
                <span
                  className={`font-mono-code text-[11px] font-bold block ${
                    isActive ? 'text-[#004ac6]' : 'text-[#434655]'
                  }`}
                >
                  {stage.step}
                </span>
                <div className="font-sans-inter text-[14px] sm:text-[15px] font-semibold text-[#131b2e] mt-1">
                  {stage.stepName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#c3c6d7]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-200 shadow-xs">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono-code text-[11px] text-[#004ac6] tracking-widest uppercase font-semibold">
              {currentStage.badge}
            </div>
            <h3 className="font-serif-editorial text-[22px] sm:text-[24px] text-[#131b2e] font-semibold">
              {currentStage.title}
            </h3>
            <p className="font-sans-inter text-[15px] text-[#434655] leading-relaxed">
              {currentStage.description}
            </p>

            {/* Bullets */}
            {currentStage.bullets && (
              <div className="pt-2 space-y-1.5 border-t border-[#c3c6d7]/20">
                {currentStage.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2 text-[13px] text-[#434655]">
                    <CheckCircle2 className="w-4 h-4 text-[#004ac6] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <div className="p-4 bg-[#f2f3ff] rounded-xl border border-[#c3c6d7]/30 text-[#131b2e] flex items-center gap-3">
              {getIcon(currentStage.iconName)}
              <div className="font-mono-code text-[12px]">
                <span className="text-[#131b2e] font-semibold block">Focus Mindset</span>
                <span className="text-[#434655]">{currentStage.focusMindset}</span>
              </div>
            </div>

            <button
              onClick={handleNextStep}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#131b2e] text-white hover:bg-slate-800 text-[12px] font-mono-code transition-all cursor-pointer active:scale-95"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
