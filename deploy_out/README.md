# 📚 DocKit Master

[![Knowledge Engine](https://img.shields.io/badge/Knowledge-Systematization_Engine-blueviolet?style=for-the-badge)]()
[![Astro Starlight](https://img.shields.io/badge/Output-Astro_Starlight-FF5D01?style=for-the-badge&logo=astro)](https://starlight.astro.build/)
[![Markdown](https://img.shields.io/badge/Output-Markdown-black?style=for-the-badge&logo=markdown)]()

A professional knowledge systematization engine powered by codebase analysis.
**1 scan = 1 complete knowledge base** — Personas, JTBD, Process Flows, Technical Docs, SOPs, API Reference.

🌐 **[Landing Page](https://dockit-master.todyai.io)** · 📖 **[Documentation](https://dockit-master.todyai.io/docs/)** · ⭐ **[GitHub](https://github.com/relukdev/doc-kit)**

---

## 🚀 What It Does

DocKit Master reads your source code and generates a complete documentation suite:

| Document Type | What It Generates |
|---------------|-------------------|
| **Knowledge** | Buyer & User Personas, JTBD Canvases (3-level hierarchy), Process Flow diagrams (4 types) |
| **Tech Docs** | System Architecture + ADR, Database Schema, Deployment Guide, Data Flow diagrams |
| **SOP Guides** | Step-by-step user guides enriched with Persona context, JTBD alignment, Process Flows |
| **API Reference** | Endpoints, parameters, multi-language examples (cURL, Python, JS, Go) |

### Output Formats

| Format | Description |
|--------|-------------|
| **Astro Starlight** ⭐ | Premium static site — dark mode, built-in search, i18n, auto-sidebar |
| **Markdown** | Plain `.md` files — portable, works anywhere |

### Built-in Optimization

- **SEO** — Per-page audit checklist, keyword placement, sitemap generation, robots.txt
- **AI/LLM** — Clean heading hierarchy, text fallbacks for Mermaid, NotebookLM-ready URL lists
- **UX** — Hick's Law, Miller's Law, progressive disclosure, WCAG 2.1 AA accessibility

## 🛠 Installation

### Universal Installer (Any IDE)

```bash
cd /path/to/your-project
bash /path/to/doc-kit/scripts/install.sh
```

Or install for a specific IDE directly:

```bash
bash scripts/install.sh --cursor     # Cursor IDE
bash scripts/install.sh --claude     # Claude Code
bash scripts/install.sh --gemini     # Gemini CLI
bash scripts/install.sh --opencode   # OpenCode
bash scripts/install.sh --windsurf   # Windsurf IDE
bash scripts/install.sh --agents     # Generic (Kimi, Copilot, etc.)
bash scripts/install.sh --all        # All IDEs at once
```

### Antigravity (Native)

```bash
cp -r doc-kit ~/.gemini/antigravity/skills/
```

### Supported IDEs

| IDE | Format | Location |
|-----|--------|----------|
| ![Cursor](https://img.shields.io/badge/Cursor-black?style=flat-square) | `.mdc` | `.cursor/rules/dockit-master.mdc` |
| ![Claude](https://img.shields.io/badge/Claude_Code-cc785c?style=flat-square) | `.md` | `CLAUDE.md` |
| ![Gemini](https://img.shields.io/badge/Gemini_CLI-4285F4?style=flat-square) | `.md` + `@import` | `GEMINI.md` |
| ![OpenCode](https://img.shields.io/badge/OpenCode-333?style=flat-square) | `.md` | `.opencode/rules/dockit-master.md` |
| ![Windsurf](https://img.shields.io/badge/Windsurf-09B6A2?style=flat-square) | `.md` | `.windsurf/rules/dockit-master.md` |
| ![Generic](https://img.shields.io/badge/AGENTS.md-555?style=flat-square) | `.md` | `AGENTS.md` |
| ![Antigravity](https://img.shields.io/badge/Antigravity-blueviolet?style=flat-square) | `SKILL.md` | `~/.gemini/antigravity/skills/` |

## 💻 Quick Start

### Interactive CLI (Any IDE)

```bash
bash scripts/dockit-master.sh
```

Select your IDE, document type, format, and language — the script generates a ready-to-paste prompt.

### Direct Trigger

Type in your AI coding IDE:

> "Use DocKit Master to create documentation for the project at /path/to/project"


## 📂 Architecture

```text
doc-kit/
├── SKILL.md                     # Main orchestration engine
├── adapters/                    # IDE-specific instruction files
│   ├── cursor.mdc               # Cursor (.cursor/rules/)
│   ├── claude.md                # Claude Code (CLAUDE.md)
│   ├── gemini.md                # Gemini CLI (GEMINI.md)
│   ├── opencode.md              # OpenCode (.opencode/rules/)
│   ├── windsurf.md              # Windsurf (.windsurf/rules/)
│   └── agents.md                # Generic (AGENTS.md — Kimi, Copilot)
├── skills/
│   ├── analyze-codebase.md      # Deep semantic code analysis
│   ├── persona-builder.md       # Buyer & User Persona generation
│   ├── jtbd-analyzer.md         # Jobs To Be Done analysis (3-level)
│   ├── flow-mapper.md           # 4 types of process flow diagrams
│   ├── tech-docs.md             # Architecture, DB, deployment, data flow
│   ├── sop-guide.md             # Knowledge-enriched SOP user guides
│   ├── api-reference.md         # Multi-language API reference
│   ├── content-guidelines.md    # Content structure & formatting rules
│   ├── content-writing.md       # SEO copywriting guidelines
│   ├── seo-checklist.md         # Per-page SEO audit template
│   └── llm-optimization.md      # AI-readable content rules
├── workflows/
│   ├── generate-docs.md         # Main generation workflow
│   ├── setup-astro.md           # Astro Starlight scaffolding
│   ├── export-markdown.md       # Markdown export
│   └── generate-sitemap.md      # XML sitemap + NotebookLM URLs
├── templates/
│   ├── astro-premium/           # Astro Starlight config + CSS template
│   └── markdown/                # Markdown structure template
├── scripts/
│   ├── dockit-master.sh               # Interactive CLI prompt generator
│   └── install.sh               # Universal IDE installer
├── index.html                   # Landing page
└── astro-site/                  # Live documentation site
```

## ✨ Key Features

### Knowledge Systematization (New)
- **Persona Builder** — Auto-detect roles from RBAC, generate Buyer + User Personas (GitLab format)
- **JTBD Analyzer** — 3-level job hierarchy: Main Job → Small Job → Micro-job
- **Flow Mapper** — 4 diagram types: Workflow, Sequence, Lifecycle, User Journey

### Documentation Quality
- Every claim cites `(file_path:line_number)`
- Minimum 2 dark-mode Mermaid diagrams per technical file
- Progressive disclosure via `<details>` for advanced content
- Schema-ready FAQ sections for search engine rich snippets

### Design System
- Claude Docs-inspired warm neutral palette
- Serif headings (Source Serif 4) + sans-serif body (Inter)
- Bilingual support (Vietnamese, Chinese, Russian, English)
- Touch-friendly targets (≥44px), focus-visible rings

---

*One scan = one complete knowledge base.*
