---
description: "Generate documentation from codebase analysis. Interactive CLI: choose doc type (tech/sop/api/all) and format (markdown/astro)."
---

# Generate Documentation Workflow

Main workflow to generate documentation from code analysis.

## Prerequisites

- Source code path must be accessible
- Node.js 18+ (if choosing Astro format)

## Workflow

### Step 1: Choose Document Type

Ask the user which type of documentation to generate:

- **tech** — Technical system documentation (architecture, database, deployment, data flow)
- **sop** — SOP user guides (step-by-step, troubleshooting, FAQ)
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
Read the skill file at `skills/DocKit Master/skills/analyze-codebase.md` and follow its procedure to analyze the codebase.

Save output to `[project_root]/docs/_analysis.md`.

### Step 5: Generate Documents

Based on the chosen type, read the corresponding skill file and follow its procedure:

- **tech**: Read `skills/DocKit Master/skills/tech-docs.md`
- **sop**: Read `skills/DocKit Master/skills/sop-guide.md`
- **api**: Read `skills/DocKit Master/skills/api-reference.md`
- **all**: Read and execute all three sequentially

### Step 6: Export

Based on the chosen format:

**If markdown:**
Read `skills/DocKit Master/workflows/export-markdown.md` and follow its procedure.

**If astro:**
Read `skills/DocKit Master/workflows/setup-astro.md` and follow its procedure.

### Step 7: Summary

Present to user:
- ✅ List of all generated files
- 📁 Output directory location
- 🚀 How to view/serve the docs
- 📝 Suggestions for customization
