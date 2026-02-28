---
title: "Codebase Analysis — DocKit Master"
description: "Automated analysis of the DocKit Master codebase — skill engine with 96 files, 11 skills, 5 workflows, and 6 IDE adapters"
keywords: ["codebase analysis", "DocKit Master", "skill architecture"]
robots: "noindex, nofollow"
sidebar:
  order: 99
---

# Codebase Analysis

> **Quick Reference**
> - **Project**: DocKit Master
> - **Type**: AI Skill Engine / Static Landing Site
> - **Languages**: Markdown (skills), Bash (CLI), HTML/CSS/JS (landing pages)
> - **Frameworks**: Astro Starlight (docs output)
> - **Files**: ~96 (excluding node_modules, dist)
> - **Lines of Code**: ~12,000+

## Architecture

```mermaid
graph TB
    style SKILL fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style WORKFLOW fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style SCRIPTS fill:#232221,stroke:#3fb950,color:#E8E5DF
    style ADAPTERS fill:#232221,stroke:#d29922,color:#E8E5DF
    style PAGES fill:#232221,stroke:#f78166,color:#E8E5DF
    style OUTPUT fill:#232221,stroke:#3fb950,color:#E8E5DF

    subgraph Core["Knowledge Engine"]
        SKILL["Skills - 11 files\nAnalysis, Personas, JTBD\nFlows, Tech, SOP, API\nSEO, Content, LLM"]
        WORKFLOW["Workflows - 5 files\nExport Markdown\nSetup Astro\nGenerate Sitemap"]
    end

    subgraph Integration["Multi-IDE Integration"]
        ADAPTERS["Adapters - 6 IDEs\nCursor, Claude, Gemini\nOpenCode, Windsurf, AGENTS"]
        SCRIPTS["Scripts\ndockit-master.sh\ninstall.sh"]
    end

    subgraph Presentation["Landing Site"]
        PAGES["Pages\nHome, Features, Use Cases\nClaw Platforms"]
    end

    subgraph Output["Generated Output"]
        OUTPUT["docs/ Markdown\nastro-site/ Starlight"]
    end

    SKILL --> WORKFLOW
    WORKFLOW --> OUTPUT
    SCRIPTS --> SKILL
    ADAPTERS --> SKILL
```

**Architecture summary:** DocKit Master is a skill-based AI documentation engine. The core consists of 11 Markdown skill files that instruct AI agents to analyze codebases and generate structured documentation. Workflows orchestrate the export process. Scripts provide CLI interaction, and adapters enable cross-IDE compatibility.

## Directory Structure

```
DocKit Master/
├── SKILL.md              # Main orchestrator (295 lines)
├── README.md             # Project overview
├── index.html            # Landing page (59K)
├── skills/               # 11 skill files — core engine
│   ├── analyze-codebase.md
│   ├── persona-builder.md
│   ├── jtbd-analyzer.md
│   ├── flow-mapper.md
│   ├── tech-docs.md
│   ├── sop-guide.md
│   ├── api-reference.md
│   ├── content-guidelines.md
│   ├── content-writing.md
│   ├── llm-optimization.md
│   └── seo-checklist.md
├── workflows/            # 5 workflow files
│   ├── export-markdown.md
│   ├── setup-astro.md
│   ├── generate-sitemap.md
│   ├── generate-docs.md
│   └── setup-docusaurus.md
├── scripts/              # 2 CLI scripts
│   ├── dockit-master.sh
│   └── install.sh
├── adapters/             # 6 IDE adapters
│   ├── cursor.mdc
│   ├── claude.md
│   ├── gemini.md
│   ├── opencode.md
│   ├── windsurf.md
│   └── agents.md
├── templates/            # 3 template sets
│   ├── astro-premium/
│   ├── docusaurus-premium/
│   └── markdown/
├── pages/                # Landing site sub-pages
│   ├── features/
│   ├── use-cases/
│   ├── claw/
│   ├── css/
│   └── js/
├── docs/                 # Generated documentation (this)
└── astro-site/           # Generated Astro Starlight site
```

## Core Components

| Component | Description | Key Files |
|-----------|-------------|-----------|
| **Skill Engine** | 11 instruction files guiding AI agents | `skills/*.md` |
| **Orchestrator** | Main entry point routing to skills | `SKILL.md` |
| **CLI** | Interactive Bash prompt generator | `scripts/dockit-master.sh` |
| **Installer** | Multi-IDE installer | `scripts/install.sh` |
| **IDE Adapters** | Entry points for 6 AI IDEs | `adapters/*` |
| **Astro Template** | Premium Starlight config | `templates/astro-premium/` |
| **Landing Site** | Multi-page showcase (vi/en/zh/ja) | `index.html`, `pages/` |

## Skill Pipeline

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant CLI as CLI / IDE
    participant SK as SKILL.md
    participant AN as Analyze
    participant KN as Knowledge
    participant TD as Tech Docs
    participant SP as SOP
    participant AP as API Ref
    participant EX as Export

    User->>CLI: Run dockit-master.sh
    CLI->>SK: Config params
    SK->>AN: Scan codebase
    AN-->>SK: analysis.md
    SK->>KN: Personas + JTBD + Flows
    KN-->>SK: personas/ jtbd/ flows/
    SK->>TD: Architecture + DB + Deploy
    TD-->>SK: tech docs
    SK->>SP: User Guides
    SP-->>SK: sop/
    SK->>AP: Endpoint Reference
    AP-->>SK: api/
    SK->>EX: Astro or Markdown
    EX-->>User: Final site
```

**Pipeline summary:** User triggers the CLI, SKILL.md orchestrates: Analyze → Knowledge → Tech → SOP → API → Export. Each step reads previous output and enriches it.

## Key Files

| File | Role | Size |
|------|------|------|
| `SKILL.md` | Main orchestrator | 13.2 KB |
| `skills/flow-mapper.md` | 4 flow type generator | 11.5 KB |
| `skills/persona-builder.md` | Buyer & User Personas | 8.6 KB |
| `skills/content-guidelines.md` | Content structure rules | 8.5 KB |
| `scripts/install.sh` | Multi-IDE installer | 8.5 KB |
| `scripts/dockit-master.sh` | Interactive CLI | 7.7 KB |
| `index.html` | Landing page | 59.4 KB |

## Architecture Decisions

| # | Decision | Rationale | Status |
|---|----------|-----------|--------|
| 1 | Markdown-based skills | Portable, IDE-agnostic, version-controllable | Accepted |
| 2 | Astro Starlight over Docusaurus | 50MB vs 1.5GB, auto-sidebar, native Markdown | Accepted |
| 3 | Knowledge layer first | Personas + JTBD + Flows enrich all downstream docs | Accepted |
| 4 | Multi-IDE adapters | Lightweight references to SKILL.md, no duplication | Accepted |
| 5 | SEO + LLM dual optimization | Every page serves both search engines and AI | Accepted |
