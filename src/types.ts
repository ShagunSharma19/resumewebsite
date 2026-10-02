export interface JourneyStage {
  step: string;
  stepName: string;
  badge: string;
  title: string;
  description: string;
  iconName: 'book-open' | 'flask-conical' | 'wrench' | 'file-text' | 'refresh-cw';
  focusMindset: string;
  bullets?: string[];
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface PlaygroundItem {
  id: string;
  title: string;
  description: string;
  icon: 'brain' | 'edit-3' | 'repeat' | 'clapperboard' | 'wrench' | 'code-2';
  detail: {
    overview: string;
    keyTools: string[];
    sampleExperiment: string;
  };
}

export interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  icon: 'terminal' | 'git-branch' | 'video' | 'hourglass';
  isUpcoming?: boolean;
  upcomingTag?: string;
  details?: {
    overview: string;
    motivation: string;
    stack: string[];
    keyFeatures: string[];
    demoType?: 'prompt-builder' | 'pipeline-visualizer' | 'storyboard';
  };
}

export interface TimelineMilestone {
  stage: string;
  isActive?: boolean;
  title: string;
  description: string;
}

export interface EducationItem {
  type: string;
  title: string;
  institution: string;
  meta: string;
  scoreLabel: string;
  scoreValue: string;
  subScore?: string;
}
