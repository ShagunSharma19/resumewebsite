import { JourneyStage, PlaygroundItem, ProjectItem, TimelineMilestone, EducationItem } from '../types.ts';

export const PORTFOLIO_CONFIG = {
  name: "Shagun Sharma",
  role: "BCA Student • AI Explorer",
  tagline: "Learning AI. Building with AI. Exploring what's next.",
  location: "Himachal Pradesh, India",
  college: "SVGC Ghumarwin",
  status: "BCA 5th Semester • SVGC Ghumarwin • Himachal Pradesh, India",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHqhUqq6hHtxFr_74gNAcZwMMy8f6N5uMfhPSZDxnhilphaSqfnStxhub5QLlvkNpr7cKudvU0XIqxt1b6KkIniDFvUlcI-kOLAlncXm9saY58MfCWGMKIAl469NkHBiKDKJiJ_nYFCJ1OG9HrqQqPY_DN6Xp7YGR5Bt7OLGxq519C9xW9v4OsiZfPhx20tROU6qt3uTxzjETVcMLllFm9oTkcA_mj4J4U-V3MWXEjeogZLDaRUb7osUBGf87W9XIhGHpsFdmQHnN6SQ",
  bio: "I'm a BCA student exploring Artificial Intelligence, prompt engineering, automation, and emerging technologies through practical projects. I enjoy experimenting with useful tools, learning new workflows, and turning ideas into practical digital experiences.",
  aboutParagraphs: [
    "I'm Shagun Sharma, a BCA student with a growing interest in Artificial Intelligence and emerging technologies. I enjoy experimenting with AI tools, learning how modern workflows work, and turning what I learn into practical projects.",
    "Rather than relying only on theoretical concepts, I focus on building tangible tools like prompt systems and automation pipelines. My goal is to understand how these technologies integrate into everyday software workflows."
  ],
  social: {
    gmail: "shagunsharma.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/shagun-sharma",
    github: "https://github.com/shagunsharma",
    instagram: "https://www.instagram.com/shagunsharma"
  }
};

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: "01. LEARN",
    stepName: "Study Tools",
    badge: "STAGE 01 — FOUNDATION",
    title: "Learn about AI tools and workflows.",
    description: "Studying prompt architectures, investigating foundational models, understanding parameter tuning, and assessing real-world problem sets suited for smart automation.",
    iconName: "book-open",
    focusMindset: "Continuous Study",
    bullets: [
      "Analyzing frontier model capabilities and instruction-following behaviors.",
      "Deconstructing system prompts and context window dynamics.",
      "Evaluating latency vs. quality trade-offs for varied reasoning tasks."
    ]
  },
  {
    step: "02. EXPERIMENT",
    stepName: "Prompt Tests",
    badge: "STAGE 02 — TESTING",
    title: "Experiment with prompt structures.",
    description: "Testing zero-shot, few-shot, and role-based prompt constructions to document how nuances in token choice affect output reliability and format adherence.",
    iconName: "flask-conical",
    focusMindset: "Prompt Prototyping",
    bullets: [
      "Rigorous benchmarking of markdown & JSON output constraints.",
      "Comparing chain-of-thought vs. direct instructions for deterministic outputs.",
      "Building a library of reusable role definitions and guardrail parameters."
    ]
  },
  {
    step: "03. BUILD",
    stepName: "Generator",
    badge: "STAGE 03 — IMPLEMENTATION",
    title: "Build a prompt generator.",
    description: "Synthesizing test insights into a guided application that empowers users to generate structured, repeatable prompts tailored to diverse tasks.",
    iconName: "wrench",
    focusMindset: "Practical Utility",
    bullets: [
      "Designing modular prompt builders with role, context, goal, and boundary inputs.",
      "Ensuring clean copy-to-clipboard workflows with dynamic formatting.",
      "Validating output with multi-model tests."
    ]
  },
  {
    step: "04. DOCUMENT",
    stepName: "Project Logs",
    badge: "STAGE 04 — DOCUMENTATION",
    title: "Document projects and learning.",
    description: "Logging challenges, edge cases, workflow diagrams, and architectural choices to build clear knowledge repositories for future collaboration.",
    iconName: "file-text",
    focusMindset: "Knowledge Sharing",
    bullets: [
      "Maintaining versioned markdown runbooks for prompt configurations.",
      "Creating visual schema diagrams for multi-step automation flows.",
      "Recording reflections and performance metrics after project milestones."
    ]
  },
  {
    step: "05. IMPROVE",
    stepName: "Iterate",
    badge: "STAGE 05 — ITERATION",
    title: "Improve projects through practice.",
    description: "Refining previously built projects through real user feedback, integrating API hooks, and optimizing response speeds and usability.",
    iconName: "refresh-cw",
    focusMindset: "Continuous Refinement",
    bullets: [
      "Refining edge-case error handling and input sanitization.",
      "Incorporating modern UI patterns and tactile feedback loops.",
      "Preparing modules for scalable API integrations and cloud deployments."
    ]
  }
];

export const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Understanding fundamental AI concepts, models, and real-world system applications without ungrounded hype.",
    icon: "brain",
    detail: {
      overview: "Deepening my grasp on transformer architectures, attention mechanisms, fine-tuning paradigms, and multi-modal foundational models. Emphasizing functional utility over speculative buzzwords.",
      keyTools: ["Gemini 2.5/Flash", "Claude 3.5 Sonnet", "OpenAI GPT-4o", "Ollama", "Hugging Face"],
      sampleExperiment: "Benchmarking zero-shot reasoning vs. structured few-shot examples for extracting schema-compliant JSON entities from unstructured educational transcripts."
    }
  },
  {
    id: "prompting",
    title: "Prompt Engineering",
    description: "Formulating structured input prompts, context variables, and testing constraints for consistent outputs.",
    icon: "edit-3",
    detail: {
      overview: "Designing system prompts, context injection schemas, few-shot formatting, and negative constraints to tame LLM stochasticity and enforce rigorous business logic.",
      keyTools: ["System Prompts", "XML/Markdown Delimiters", "Few-Shot Framing", "Role Assignment", "Output Parsers"],
      sampleExperiment: "Developing the 'Constraint Matrix' formula: Role + Context + Goal + Boundary Conditions + Output Schema = 99.4% syntax adherence across test prompts."
    }
  },
  {
    id: "automation",
    title: "AI Automation",
    description: "Connecting triggers and webhooks to eliminate repetitive human steps across communication and data pipelines.",
    icon: "repeat",
    detail: {
      overview: "Building event-driven pipelines that listen for incoming data, invoke intelligent LLM analysis, transform payloads, and dispatch notifications or database updates autonomously.",
      keyTools: ["Make.com (Integromat)", "Webhooks", "JSON Parsers", "Slack/Email Integrations", "Notion API"],
      sampleExperiment: "An automated lead qualification scenario that ingests form submissions via webhook, scores intent via an LLM prompt, and updates Google Sheets while alerting via Slack."
    }
  },
  {
    id: "generation",
    title: "AI Image and Video Generation",
    description: "Experimenting with synthetic visual media, diffusion aesthetics, keyframing, and video narratives.",
    icon: "clapperboard",
    detail: {
      overview: "Investigating text-to-image and text-to-video tools to create coherent visual campaigns, exploring camera movements, lighting prompts, and temporal consistency.",
      keyTools: ["Midjourney v6", "Runway Gen-2/Gen-3", "Pika Labs", "ElevenLabs", "CapCut"],
      sampleExperiment: "Production of the Techigigs promo commercial: script creation -> voice synthesis -> scene keyframe rendering -> temporal motion interpolation -> sound mixing."
    }
  },
  {
    id: "tools",
    title: "AI Tools",
    description: "Testing developer assistants, research summarizers, and productivity apps to build faster with precision.",
    icon: "wrench",
    detail: {
      overview: "Curating and evaluating daily workflow accelerators for software development, technical paper digestion, documentation synthesis, and debugging.",
      keyTools: ["GitHub Copilot", "Cursor IDE", "Perplexity AI", "Obsidian", "NotebookLM"],
      sampleExperiment: "Conducting comparative study on development throughput when architecting C++ data structures with Copilot paired with structured inline specifications."
    }
  },
  {
    id: "webdev",
    title: "Web Development",
    description: "Pairing semantic HTML, CSS styling, and logic to produce clear user interfaces that house interactive AI modules.",
    icon: "code-2",
    detail: {
      overview: "Writing clean, accessible frontend architectures using semantic HTML5, modern Tailwind CSS, and reactive component frameworks to give AI capabilities an intuitive, responsive home.",
      keyTools: ["React", "TypeScript", "Tailwind CSS", "Vite", "Modern JavaScript (ESNext)"],
      sampleExperiment: "Engineering this editorial tech portfolio with zero-pill metadata discipline, fluid typography, interactive stage workflows, and embedded prompt playground."
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "prompt-generator",
    badge: "PROJECT 01",
    title: "Universal AI Prompt Generator",
    description: "An AI prompt-generation project designed to create structured prompts through a guided workflow. Provides clear parameters and constraints for reliable outputs.",
    tags: ["AI", "Prompt Engineering", "AI Tools"],
    icon: "terminal",
    details: {
      overview: "A browser-based interactive prompt generator designed to eliminate guesswork when instructing LLMs. Users select an objective, target audience, tone, and operational boundaries to immediately receive a production-ready, structured system prompt.",
      motivation: "Most beginners struggle with ambiguous instructions and halluncinations. This project formalizes the architecture of a high-yield prompt: context, persona, task, guardrails, and output contract.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Local State Storage"],
      keyFeatures: [
        "Step-by-step parameter configuration (Role, Context, Goal, Guardrails).",
        "Instant preview with structured markdown / XML delimiters.",
        "One-click copy with toast confirmation and token-saving layout.",
        "Pre-baked templates for Code Review, Content Creation, and Data Analysis."
      ],
      demoType: "prompt-builder"
    }
  },
  {
    id: "make-automation",
    badge: "PROJECT 02",
    title: "Make Automation Workflows",
    description: "Learning to create simple workflow automations using Make and gradually moving toward AI-powered automation pipelines for productivity and multi-app sync.",
    tags: ["Make", "Automation", "No-Code"],
    icon: "git-branch",
    details: {
      overview: "Multi-branch automation scenario designed in Make.com that bridges incoming webhook requests with AI reasoning modules, structured JSON extraction, and automated cross-platform distribution.",
      motivation: "To explore how modern operations teams eliminate manual data transfers and leverage AI as a cognitive filter inside continuous business processes.",
      stack: ["Make.com", "Custom Webhooks", "OpenAI / Gemini API", "Google Sheets", "Slack Webhooks"],
      keyFeatures: [
        "Automated incoming trigger detection via custom REST webhook.",
        "Payload sanitization and dynamic variable mapping.",
        "Conditional routing branches based on AI sentiment and urgency scores.",
        "Automated reporting logs and fallback error handlers."
      ],
      demoType: "pipeline-visualizer"
    }
  },
  {
    id: "techigigs-ad",
    badge: "PROJECT 03",
    title: "Techigigs AI Advertisement",
    description: "Created a short AI advertisement as part of my AI learning program, experimenting with AI video tools, visual storytelling, and content creation for modern media.",
    tags: ["AI Video", "AI Tools", "Content Creation"],
    icon: "video",
    details: {
      overview: "An experimental 30-second conceptual commercial generated entirely through generative AI toolchains for Techigigs, showcasing rapid advertising prototyping without physical camera crews.",
      motivation: "To understand the end-to-end creative workflow of synthetic media: concept writing, image diffusion generation, video motion extrapolation, synthetic voiceover, and pacing.",
      stack: ["Midjourney v6", "Runway Gen-2", "ElevenLabs Voice AI", "CapCut Pro", "Audacity"],
      keyFeatures: [
        "Full storyboard script with visual lighting and camera angle prompts.",
        "Diffusion generation with consistent aesthetic color grading.",
        "Synthesized voiceover narrative synchronized with keyframe motion.",
        "Audio landscape combining synthesized voice and ambient electronic track."
      ],
      demoType: "storyboard"
    }
  },
  {
    id: "upcoming",
    badge: "UPCOMING",
    title: "More Projects Coming",
    description: "Currently learning, experimenting, and building more practical AI and technology projects. New workflow prototypes and interactive web modules are underway.",
    tags: ["In Progress", "Coming Soon"],
    icon: "hourglass",
    isUpcoming: true,
    upcomingTag: "In Progress / Coming Soon"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    stage: "STAGE 1",
    title: "BCA Studies",
    description: "Established core foundations in computer applications, programming principles, and database management at SVGC Ghumarwin."
  },
  {
    stage: "STAGE 2",
    title: "Exploring AI",
    description: "Discovered the potential of artificial intelligence tools, diving beyond theory into real experimentation with natural language interfaces."
  },
  {
    stage: "STAGE 3",
    title: "AI Mastery Growth Program",
    description: "Committed to an intensive structured program to deepen hands-on understanding of automation, AI tools, and creative production workflows."
  },
  {
    stage: "STAGE 4",
    title: "First Prompt Generator",
    description: "Engineered the Universal AI Prompt Generator to formalize how prompts are composed systematically for varied domains."
  },
  {
    stage: "STAGE 5",
    title: "Prompt Engineering Practice",
    description: "Practicing structured prompting, constraint engineering, and persona design across multiple LLM environments."
  },
  {
    stage: "STAGE 6",
    title: "Make Automation",
    description: "Constructing multi-step no-code workflows to integrate data sources, notifications, and intelligent automation."
  },
  {
    stage: "STAGE 7 (ACTIVE)",
    isActive: true,
    title: "Future Projects",
    description: "Integrating Python scripting, web interfaces, and AI automation to deliver end-to-end practical digital solutions."
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    type: "UNDERGRADUATE",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "SVGC Ghumarwin • Himachal Pradesh, India",
    meta: "CURRENT STATUS: 5th Semester",
    scoreLabel: "CURRENT STATUS",
    scoreValue: "5th Semester",
    subScore: "4th Sem CGPA: 7.2"
  },
  {
    type: "SENIOR SECONDARY",
    title: "Class 12 (Senior Secondary Examination)",
    institution: "GSSS Dadhol • Year: 2024",
    meta: "Senior Secondary Board Examination",
    scoreLabel: "SCORE",
    scoreValue: "85.8%"
  },
  {
    type: "MATRICULATION",
    title: "Class 10 (Matriculation Examination)",
    institution: "SVM Dadhol • Year: 2021",
    meta: "Secondary Board Examination",
    scoreLabel: "SCORE",
    scoreValue: "92.2%"
  }
];

export const SKILLS_CATEGORIES = [
  {
    title: "Current Foundation",
    dotColor: "bg-emerald-500",
    description: "Core programming and computing competencies established through coursework:",
    skills: ["C", "C++", "HTML", "MS Word", "MS Excel"],
    pillStyle: "bg-[#eaedff] border-[#c3c6d7]/30 text-[#131b2e]"
  },
  {
    title: "Learning",
    dotColor: "bg-[#2563eb]",
    description: "Actively developing proficiency through labs and self-guided projects:",
    skills: ["Python Basics", "C# / .NET Basics", "ASP.NET", "Web Development"],
    pillStyle: "bg-[#e0e0ff]/60 border-[#c3c6d7]/30 text-[#131b2e]"
  },
  {
    title: "Exploring",
    dotColor: "bg-[#4953bc]",
    description: "Emerging paradigms and intelligent tooling under active exploration:",
    skills: [
      "Artificial Intelligence",
      "Prompt Engineering",
      "AI Automation",
      "Make",
      "AI Image Generation",
      "AI Video Generation",
      "AI Tools"
    ],
    pillStyle: "bg-[#e2e7ff] border-[#c3c6d7]/30 text-[#131b2e]"
  }
];

export const ALWAYS_LEARNING_TOPICS = [
  "Artificial Intelligence",
  "Prompt Engineering",
  "Make Automation",
  "AI-Powered Workflows",
  "AI Image Generation",
  "AI Video Generation",
  "Emerging AI Tools"
];
