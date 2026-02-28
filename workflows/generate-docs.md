---
description: "Generate documentation from codebase analysis. Interactive CLI: choose doc type (knowledge/tech/sop/api/all) and format (markdown/astro)."
---

# Generate Documentation Workflow

Main workflow to generate documentation from code analysis.

## Prerequisites

- Source code path must be accessible
- Node.js 18+ (if choosing Astro format)

## Workflow

### Step 1: Choose Document Type

Ask the user which type of documentation to generate:

- **knowledge** — Personas, JTBD analysis, Process Flow diagrams (knowledge foundation)
- **tech** — Technical system documentation (architecture, database, deployment, data flow)
- **sop** — SOP user guides (step-by-step, enriched with knowledge context)
- **api** — API reference (endpoints, schemas, examples)
- **all** — Generate all of the above

### Step 2: Choose Output Format

Ask the user which output format:

- **markdown** — Plain Markdown files in `docs/` folder. Simple, portable, works anywhere.
- **astro** — Astro Starlight site. Beautiful, fast, searchable, deployable. **(default)**

### Step 3: Specify Source Code Path

Ask for the absolute path to the project root directory.

### Step 4: Run Analysis

// turbo
Read the skill file at `skills/analyze-codebase.md` and follow its procedure to analyze the codebase.

Save output to `[project_root]/docs/analysis.md`.

### Step 5: Generate Documents

Based on the chosen type, read the corresponding skill file and follow its procedure:

- **knowledge**: Run sequentially:
  1. `skills/persona-builder.md` → `docs/personas/`
  2. `skills/jtbd-analyzer.md` → `docs/jtbd/`
  3. `skills/flow-mapper.md` → `docs/flows/`
- **tech**: Read `skills/tech-docs.md`
- **sop**: Auto-run `knowledge` first if not yet generated, then `skills/sop-guide.md`
- **api**: Read `skills/api-reference.md`
- **all**: Read and execute all sequentially: knowledge → tech → sop → api

### Step 6: Export

Based on the chosen format:

**If markdown:**
Read `workflows/export-markdown.md` and follow its procedure.

**If astro:**
Read `workflows/setup-astro.md` and follow its procedure.

### Step 7: Summary

Present to user:
- ✅ List of all generated files
- 📁 Output directory location
- 🚀 How to view/serve the docs
- 📝 Suggestions for customization
