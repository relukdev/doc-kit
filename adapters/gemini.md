# DocKit Master

Knowledge systematization engine — **1 scan = complete knowledge base**: Personas, JTBD, Process Flows, Technical Docs, SOPs, API Reference.

## Activation

Trigger on: "create documentation", "generate docs", "SOP", "user guide", "manual", "DocKit", "technical docs".

## Procedure

Read the full skill procedure:
@SKILL.md

The skill files are organized as follows — import them as needed during execution:

### Analysis
@skills/analyze-codebase.md

### Content Rules
@skills/content-guidelines.md
@skills/content-writing.md
@skills/llm-optimization.md
@skills/seo-checklist.md

### Document Generators
@skills/persona-builder.md
@skills/jtbd-analyzer.md
@skills/flow-mapper.md
@skills/tech-docs.md
@skills/sop-guide.md
@skills/api-reference.md

### Export Workflows
@workflows/export-markdown.md
@workflows/setup-astro.md
@workflows/generate-sitemap.md

## Quick Reference

| Type | Generates |
|------|-----------|
| `knowledge` | Personas, JTBD, Process Flows |
| `tech` | Architecture, Database, Deployment, Data Flow |
| `sop` | User guides enriched with knowledge |
| `api` | API endpoints with examples |
| `all` | Everything above |

| Format | Output |
|--------|--------|
| `markdown` | Plain `.md` files |
| `astro` | Premium Astro Starlight site |

## Key Rules

- YAML frontmatter: `title`, `description`, `keywords`, `robots`
- Filenames: kebab-case, no underscores
- ≥2 cross-links per page
- Mermaid: dark-mode colors + text fallback
- Self-contained H2 sections
