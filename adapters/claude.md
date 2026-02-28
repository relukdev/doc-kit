# DocKit Master

Knowledge systematization engine — analyze codebases, generate Personas, JTBD, Process Flows, technical docs, SOP user guides, API references. **1 scan = complete knowledge base.**

## When to Use

Activate when the user asks to:
- "create documentation", "generate docs"
- "SOP", "user guide", "manual"
- Generate technical docs from a codebase
- Run "DocKit" or "DocKit Master"

## How to Use

The full skill procedure is in `SKILL.md`. Read it and follow the 6-step process:

1. **Gather Input** — Ask the configuration questions (doc type, format, scope, language, SEO, LLM)
2. **Analyze Codebase** — Read and follow `skills/analyze-codebase.md`
3. **Apply Content Guidelines** — Read `skills/content-guidelines.md`, then optionally `skills/content-writing.md` (SEO) and `skills/llm-optimization.md` (AI-readable)
4. **Generate Documents** — Read the corresponding skill file for each doc type:
   - `knowledge`: `skills/persona-builder.md` → `skills/jtbd-analyzer.md` → `skills/flow-mapper.md`
   - `tech`: `skills/tech-docs.md`
   - `sop`: `skills/sop-guide.md` (auto-runs knowledge first)
   - `api`: `skills/api-reference.md`
   - `all`: Run all sequentially
5. **Export** — `workflows/export-markdown.md` (plain) or `workflows/setup-astro.md` (premium site)
6. **Summary** — Present results

## Document Types

| Type | Skill Files | Output |
|------|-------------|--------|
| `knowledge` | persona-builder + jtbd-analyzer + flow-mapper | Personas, JTBD, Process Flows |
| `tech` | tech-docs | Architecture, Database, Deployment, Data Flow |
| `sop` | sop-guide | Step-by-step user guides with persona context |
| `api` | api-reference | API endpoints with multi-language examples |
| `all` | All above | Full documentation suite |

## Output Formats

| Format | Description |
|--------|-------------|
| `markdown` | Plain `.md` files in `docs/` folder |
| `astro` | Premium Astro Starlight static site (default) |

## Key Rules

- YAML frontmatter on every `.md`: `title`, `description`, `keywords`, `robots`
- Filenames: kebab-case only
- ≥2 internal links per page
- Mermaid: dark-mode colors (fill: `#232221`, border: `#60A5FA`) + text fallback
- Self-contained sections (each H2 standalone)
- SEO default: `robots: "index, follow"`

## Skill Files Location

All skill files are relative to the DocKit Master installation directory:

```
skills/
├── analyze-codebase.md
├── persona-builder.md
├── jtbd-analyzer.md
├── flow-mapper.md
├── tech-docs.md
├── sop-guide.md
├── api-reference.md
├── content-guidelines.md
├── content-writing.md
├── seo-checklist.md
└── llm-optimization.md

workflows/
├── export-markdown.md
├── setup-astro.md
└── generate-sitemap.md
```
