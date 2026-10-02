import React, { useState } from 'react';
import { Terminal, Download, Menu, X, ArrowDown } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#ai-journey' },
    { label: 'Playground', href: '#playground' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-[#faf8ff]/90 backdrop-blur-md border-b border-[#c3c6d7]/30 sticky top-0 z-40 transition-all duration-200">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 max-w-7xl mx-auto h-16">
        {/* Brand Logo Anchor */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif-editorial text-[22px] font-semibold tracking-tight text-[#131b2e] group-hover:text-[#004ac6] transition-colors duration-150">
            SHAGUN
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#434655] font-mono-code text-[12px] tracking-wider hover:text-[#004ac6] transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#004ac6] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Trailing Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="p-2 text-[#434655] hover:text-[#004ac6] hover:bg-[#eaedff] rounded-lg transition-all duration-150 cursor-pointer"
            title="Open Interactive CLI Terminal"
            aria-label="Open CLI Terminal"
          >
            <Terminal className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 bg-[#131b2e] text-[#faf8ff] px-4 py-2 rounded-xl text-[12px] font-mono-code hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
          >
            <span>Resume</span>
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 text-[#434655] hover:text-[#004ac6] rounded-lg cursor-pointer"
            title="Terminal"
          >
            <Terminal className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#131b2e] hover:text-[#004ac6] transition-colors rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#c3c6d7]/30 bg-[#faf8ff] px-6 py-4 flex flex-col gap-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-[#131b2e] text-[15px] font-medium hover:text-[#004ac6] border-b border-[#c3c6d7]/15"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-[#131b2e] text-[#faf8ff] px-4 py-2.5 rounded-xl font-mono-code text-[12px] active:scale-95 transition-transform"
          >
            <span>Download Resume</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
