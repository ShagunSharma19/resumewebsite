/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { InteractiveJourney } from './components/InteractiveJourney.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { PlaygroundSection } from './components/PlaygroundSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { TimelineSection } from './components/TimelineSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { EducationSection } from './components/EducationSection.tsx';
import { AlwaysLearning } from './components/AlwaysLearning.tsx';
import { ResumeSection } from './components/ResumeSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { TerminalModal } from './components/TerminalModal.tsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen flex flex-col font-sans-inter selection:bg-[#e0e0ff] selection:text-[#000767]">
      {/* Top Application Bar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-12 space-y-24 md:space-y-32 py-10 md:py-16">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <InteractiveJourney />
        <AboutSection />
        <PlaygroundSection />
        <ProjectsSection />
        <TimelineSection />
        <SkillsSection />
        <EducationSection />
        <AlwaysLearning />
        <ResumeSection
          isModalOpen={isResumeOpen}
          onOpenModal={() => setIsResumeOpen(true)}
          onCloseModal={() => setIsResumeOpen(false)}
        />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CLI Terminal Dialog */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
