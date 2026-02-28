# DocKit Master

> Knowledge systematization engine — **1 scan = complete knowledge base.**

Analyze any codebase and generate: Personas, JTBD, Process Flows, Technical Docs, SOPs, API References. Output as Markdown or premium Astro Starlight site. SEO-optimized, AI/LLM-readable.

## When to Activate

- User asks to "create documentation", "generate docs"
- User mentions "SOP", "user guide", "manual"
- User wants technical docs from a codebase
- User runs "DocKit" or "DocKit Master"

## Procedure

### Step 1: Gather Input

Ask ALL questions in ONE message:

| # | Question | Options | Default |
|---|----------|---------|---------|
| 1 | Document type? | `knowledge` · `tech` · `sop` · `api` · `all` | `all` |
| 2 | Output format? | `markdown` (plain) · `astro` (premium site) | `astro` |
| 3 | Code scope? | `full` (entire project) · `focused` (specific module) | `full` |
| 4 | Focus target? | *(only if focused)* Directory/module name | — |
| 5 | Language? | Auto-detect from user's chat language | auto |
| 6 | Multi-language? | `yes` (add English) · `no` | `no` |
| 7 | SEO optimization? | `yes` · `no` | `yes` |
| 8 | LLM optimization? | `yes` · `no` | `yes` |

### Step 2: Analyze Codebase

Read and follow `skills/analyze-codebase.md`. Output to `docs/analysis.md`:
- Project type, languages, frameworks
- Directory structure and architecture
- Entry points, routes, database schema
- Key business logic modules

### Step 3: Apply Content Guidelines

Read `skills/content-guidelines.md` before generating any content.
- If SEO enabled: read `skills/content-writing.md`
- If LLM enabled: read `skills/llm-optimization.md`

### Step 4: Generate Documents

Based on chosen type, read the corresponding skill file:

| Type | Skill Files | Output |
|------|-------------|--------|
| `knowledge` | `persona-builder.md` + `jtbd-analyzer.md` + `flow-mapper.md` | `docs/personas/`, `docs/jtbd/`, `docs/flows/` |
| `tech` | `tech-docs.md` | `docs/architecture.md`, `docs/database.md`, etc. |
| `sop` | `sop-guide.md` (auto-runs knowledge first) | `docs/sop/` |
| `api` | `api-reference.md` | `docs/api/` |
| `all` | All above in sequence | Full suite |

All skill files are in the `skills/` directory.

### Step 5: Export

- **markdown** → `workflows/export-markdown.md`
- **astro** → `workflows/setup-astro.md` (Starlight with search, dark mode, i18n)
- If SEO: run `workflows/generate-sitemap.md` + `skills/seo-checklist.md`

### Step 6: Summary

Present: generated file list with sizes, how to view/serve, next steps.

## Constraints

- YAML frontmatter on every `.md`: `title`, `description`, `keywords`, `robots`
- Filenames: kebab-case, no underscores, no dots
- ≥2 internal cross-links per page
- Mermaid diagrams: dark-mode colors (fill: `#232221`, border: `#60A5FA`)
- Every Mermaid diagram has a text fallback
- Self-contained sections (each H2 readable alone)
- SEO default: `robots: "index, follow"`

## Skill Files Directory

```
skills/
├── analyze-codebase.md      — Codebase analysis procedure
├── persona-builder.md       — Buyer & User Personas
├── jtbd-analyzer.md         — Jobs To Be Done canvases
├── flow-mapper.md           — Workflow, Sequence, Lifecycle flows
├── tech-docs.md             — Technical architecture docs
├── sop-guide.md             — SOP user guides
├── api-reference.md         — API endpoint reference
├── content-guidelines.md    — Formatting & content rules
├── content-writing.md       — SEO copywriting rules
├── seo-checklist.md         — Per-page SEO audit
└── llm-optimization.md      — AI/LLM readability rules

workflows/
├── export-markdown.md       — Plain Markdown export
├── setup-astro.md           — Astro Starlight setup
└── generate-sitemap.md      — Sitemap & robots.txt
```
