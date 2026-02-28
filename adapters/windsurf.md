# DocKit Master — Knowledge Systematization Engine

Analyze codebases and generate complete documentation: Personas, JTBD, Process Flows, Technical Docs, SOPs, API References. **1 scan = complete knowledge base.**

## Activation

Trigger on: "generate docs", "create documentation", "SOP", "user guide", "DocKit", "technical docs", "API reference".

## Procedure

Read `SKILL.md` for the full 6-step procedure. Summary:

1. **Gather Input** — Configuration form (doc type, format, scope, language, SEO, LLM)
2. **Analyze Codebase** — `skills/analyze-codebase.md`
3. **Apply Guidelines** — `skills/content-guidelines.md` + SEO/LLM rules if enabled
4. **Generate Docs** — Based on type:
   - `knowledge`: persona-builder → jtbd-analyzer → flow-mapper
   - `tech`: tech-docs
   - `sop`: sop-guide (auto-runs knowledge first)
   - `api`: api-reference
   - `all`: everything sequentially
5. **Export** — `markdown` (plain) or `astro` (Starlight premium site)
6. **Summary** — File list, viewing instructions, next steps

## Document Types

| Type | Output |
|------|--------|
| `knowledge` | Personas, JTBD Canvases, Process Flows |
| `tech` | Architecture, Database, Deployment, Data Flow |
| `sop` | User guides with persona context |
| `api` | API endpoints with examples |
| `all` | Full suite ★ |

## Rules

- YAML frontmatter: `title`, `description`, `keywords`, `robots`
- Filenames: kebab-case only
- ≥2 internal links per page
- Mermaid: dark-mode colors + text fallback
- Self-contained H2 sections
