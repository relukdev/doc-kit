# DocKit Master — Documentation Generation Skill

Knowledge systematization engine. Analyze codebases and generate complete documentation suites: Personas, JTBD, Process Flows, Technical Docs, SOPs, API References.

## Activation Keywords

Generate docs, create documentation, SOP, user guide, manual, DocKit, technical docs, API reference, knowledge base.

## Procedure

When activated, read the **SKILL.md** file and follow the 6-step procedure:

### Step 1: Gather Input
Present the configuration form to the user (all questions in one message):
- Document type: `knowledge` | `tech` | `sop` | `api` | `all`
- Output format: `markdown` | `astro` (default: `astro`)
- Scope: `full` | `focused`
- Language: auto-detect from user's chat language
- SEO optimization: `yes` (default) | `no`
- LLM optimization: `yes` (default) | `no`

### Step 2: Analyze Codebase
Read and follow `skills/analyze-codebase.md`. Output to `docs/analysis.md`.

### Step 3: Apply Content Guidelines
Read `skills/content-guidelines.md` before generating any content.
If SEO enabled: also read `skills/content-writing.md`.
If LLM enabled: also read `skills/llm-optimization.md`.

### Step 4: Generate Documents
Based on doc type, read the corresponding skill file:
- `knowledge` → `skills/persona-builder.md` + `skills/jtbd-analyzer.md` + `skills/flow-mapper.md`
- `tech` → `skills/tech-docs.md`
- `sop` → `skills/sop-guide.md` (auto-runs knowledge first)
- `api` → `skills/api-reference.md`
- `all` → All of the above sequentially

### Step 5: Export
- `markdown` → `workflows/export-markdown.md`
- `astro` → `workflows/setup-astro.md`
If SEO enabled: also run `workflows/generate-sitemap.md` and `skills/seo-checklist.md`.

### Step 6: Summary
Present generated files with sizes, viewing instructions, and next steps.

## Key Constraints

- YAML frontmatter on every `.md`: `title`, `description`, `keywords`, `robots`
- Filenames: kebab-case, no underscores, no dots
- ≥2 internal cross-links per page
- Mermaid: dark-mode colors (fill: `#232221`, border: `#60A5FA`) + text fallback
- Self-contained sections (each H2 readable independently)
- SEO default: `robots: "index, follow"`
