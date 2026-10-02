import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PORTFOLIO_CONFIG, PROJECTS, SKILLS_CATEGORIES, EDUCATION_DATA } from '../data/portfolioData.ts';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  cmd: string;
  output: string;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      cmd: 'welcome',
      output: `Shagun Sharma Portfolio CLI [Version 1.0.0]
Type 'help' to view available system commands.
Try: 'bio', 'projects', 'skills', 'education', 'contact', 'clear'.`,
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    let output = '';

    switch (cleanCmd) {
      case 'help':
        output = `Available commands:
  • bio        - Display background summary & status
  • projects   - View portfolio projects & experiments
  • skills     - Print categorized technical capabilities
  • education  - Academic records & test scores
  • contact    - Get email, LinkedIn, and GitHub coordinates
  • clear      - Clear terminal screen
  • help       - List available commands`;
        break;

      case 'bio':
      case 'whoami':
        output = `${PORTFOLIO_CONFIG.name} — ${PORTFOLIO_CONFIG.role}
Location: ${PORTFOLIO_CONFIG.location}
College: ${PORTFOLIO_CONFIG.college}
Tagline: "${PORTFOLIO_CONFIG.tagline}"

${PORTFOLIO_CONFIG.bio}`;
        break;

      case 'projects':
        output = PROJECTS.map(
          (p) => `[${p.badge}] ${p.title}
Tags: ${p.tags.join(', ')}
${p.description}
`
        ).join('\n');
        break;

      case 'skills':
        output = SKILLS_CATEGORIES.map(
          (cat) => `${cat.title.toUpperCase()}:
  ${cat.skills.join(', ')}`
        ).join('\n\n');
        break;

      case 'education':
        output = EDUCATION_DATA.map(
          (edu) => `${edu.type}: ${edu.title}
  Institution: ${edu.institution}
  Result: ${edu.scoreValue} ${edu.subScore ? `(${edu.subScore})` : ''}`
        ).join('\n\n');
        break;

      case 'contact':
        output = `Reach out to Shagun Sharma:
  Gmail:     ${PORTFOLIO_CONFIG.social.gmail}
  LinkedIn:  ${PORTFOLIO_CONFIG.social.linkedin}
  GitHub:    ${PORTFOLIO_CONFIG.social.github}
  Instagram: ${PORTFOLIO_CONFIG.social.instagram}`;
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      default:
        output = `command not found: "${cleanCmd}". Type 'help' for available commands.`;
        break;
    }

    setLogs((prev) => [...prev, { cmd: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#131b2e]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#131b2e] text-[#faf8ff] rounded-2xl max-w-2xl w-full border border-[#434655]/60 shadow-2xl overflow-hidden font-mono-code flex flex-col h-[520px] max-h-[85vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Terminal Header */}
        <div className="bg-[#1e2638] px-4 py-3 border-b border-[#434655]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 text-[12px] text-[#c3c6d7] font-medium flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#2563eb]" />
              shagun@portfolio: ~ (zsh)
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[#c3c6d7] hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-[13px] leading-relaxed selection:bg-[#2563eb] selection:text-white">
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-[#b4c5ff]">
                <span className="text-[#38bdf8] font-bold">❯</span>
                <span className="text-white font-medium">{log.cmd}</span>
              </div>
              <div className="text-[#c3c6d7] whitespace-pre-wrap pl-4 border-l border-[#434655]/30">
                {log.output}
              </div>
            </div>
          ))}
          <div ref={terminalBottomRef} />
        </div>

        {/* Terminal Prompt Input Bar */}
        <form
          onSubmit={handleCommand}
          className="bg-[#1e2638]/70 border-t border-[#434655]/40 px-4 py-3 flex items-center gap-2"
        >
          <span className="text-[#38bdf8] font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'bio', 'projects'..."
            className="flex-1 bg-transparent text-white text-[13px] focus:outline-none placeholder-[#c3c6d7]/40"
          />
          <button
            type="submit"
            className="text-[#c3c6d7] hover:text-white p-1 rounded hover:bg-white/10"
            aria-label="Execute command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
