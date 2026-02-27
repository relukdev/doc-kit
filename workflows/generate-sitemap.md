---
description: "Generate sitemap files for SEO and NotebookLM — XML sitemap, robots.txt, and plain URL list."
---

# Generate Sitemap Workflow

Create sitemap files for search engine indexing and easy research via NotebookLM.

## Output Files

| File | Format | Purpose |
|------|--------|---------|
| `sitemap-index.xml` | XML | Google/Bing search engine crawling (Astro only) |
| `robots.txt` | Text | Search engine directives |
| `sitemap.md` | Markdown | Human-readable link index page |
| `sitemap-urls.txt` | Plain text | Copy-paste all URLs into NotebookLM |

---

## For Astro Format

### Step 1: Install Sitemap Integration

// turbo
```bash
cd astro-site
npm install @astrojs/sitemap
```

### Step 2: Update `astro.config.mjs`

Add the sitemap integration:

```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://docs.example.com',  // REQUIRED for sitemap
    integrations: [
        starlight({ /* ... */ }),
        sitemap(),
    ],
});
```

### Step 3: Create `public/robots.txt`

// turbo
```bash
cat > astro-site/public/robots.txt << 'EOF'
User-agent: *
Allow: /

Sitemap: https://docs.example.com/sitemap-index.xml
EOF
```

**CUSTOMIZE:** Replace `https://docs.example.com` with the actual deployment URL.

### Step 4: Generate `sitemap-urls.txt` for NotebookLM

After building, extract all page URLs:

// turbo
```bash
cd astro-site

# Build first to generate all pages
npm run build

# Extract all HTML pages from dist/ and create URL list
SITE_URL=$(grep -o "site: '[^']*'" astro.config.mjs | cut -d"'" -f2)
[ -z "$SITE_URL" ] && SITE_URL="https://docs.example.com"

echo "# ============================================" > sitemap-urls.txt
echo "# Sitemap URLs — Copy ALL lines below into NotebookLM" >> sitemap-urls.txt
echo "# Project: $(grep -o "title: '[^']*'" astro.config.mjs | cut -d"'" -f2)" >> sitemap-urls.txt
echo "# Generated: $(date '+%Y-%m-%d %H:%M')" >> sitemap-urls.txt
echo "# Total pages: $(find dist -name 'index.html' | wc -l | tr -d ' ')" >> sitemap-urls.txt
echo "# ============================================" >> sitemap-urls.txt
echo "" >> sitemap-urls.txt

find dist -name 'index.html' | sort | while read f; do
    path=$(echo "$f" | sed 's|^dist||' | sed 's|/index.html$|/|')
    echo "${SITE_URL}${path}"
done >> sitemap-urls.txt

echo ""
echo "✅ Generated sitemap-urls.txt with $(find dist -name 'index.html' | wc -l | tr -d ' ') URLs"
echo "📋 Copy the contents into NotebookLM → Add Sources → Website"
```

### Step 5: Generate `sitemap.md` (Human-Readable Index)

Create `astro-site/src/content/docs/sitemap.md`:

```markdown
---
title: "Sitemap"
description: "Complete index of all documentation pages"
robots: "noindex, follow"
sidebar:
  order: 99
---

# Sitemap

Complete index of all documentation pages for quick navigation.

## Technical Documentation

- [Architecture](./architecture.md) — System architecture and design decisions
- [Database](./database.md) — Database schema and data model
- [Deployment](./deployment.md) — Installation and deployment guide
- [Data Flow](./data-flow.md) — Data flow diagrams and integration points

## User Guides

- [SOP Overview](./sop/index.md) — User guide index
- [Feature guides listed here...]

## API Reference

- [API Overview](./api/index.md) — API reference index
- [Resource docs listed here...]

---

> 🤖 **For AI/LLM Research:** Download [sitemap-urls.txt](../sitemap-urls.txt)
> and paste all URLs into [NotebookLM](https://notebooklm.google.com/) to
> instantly create a research assistant for this documentation.
```

**CUSTOMIZE:** Replace placeholder links with actual generated page paths.

---

## For Markdown Format

### Step 1: Generate `docs/sitemap.md`

Create a clickable index of all documentation files:

```markdown
---
title: "Sitemap"
description: "Complete index of all documentation pages"
---

# Sitemap — [Project Name] Documentation

## All Pages

| # | Page | Description | Category |
|---|------|-------------|----------|
| 1 | [Architecture](./architecture.md) | System architecture | Tech |
| 2 | [Database](./database.md) | Database schema | Tech |
| 3 | [Deployment](./deployment.md) | Deployment guide | Tech |
| 4 | [Data Flow](./data-flow.md) | Data flow diagrams | Tech |
| 5 | [SOP Index](./sop/index.md) | User guides overview | SOP |
| 6+ | [Feature SOPs...] | Individual guides | SOP |
| N | [API Index](./api/index.md) | API reference overview | API |
| N+1 | [Resource APIs...] | Individual resources | API |
```

### Step 2: Generate `docs/sitemap-urls.txt`

// turbo
```bash
cd [project_root]
SITE_URL="${SITE_URL:-https://docs.example.com}"

echo "# ============================================" > docs/sitemap-urls.txt
echo "# Sitemap URLs — Copy ALL lines below into NotebookLM" >> docs/sitemap-urls.txt
echo "# Project: [Project Name]" >> docs/sitemap-urls.txt
echo "# Generated: $(date '+%Y-%m-%d %H:%M')" >> docs/sitemap-urls.txt
echo "# Total pages: $(find docs -name '*.md' ! -name '_*' ! -name 'sitemap*' | wc -l | tr -d ' ')" >> docs/sitemap-urls.txt
echo "# ============================================" >> docs/sitemap-urls.txt
echo "" >> docs/sitemap-urls.txt

# List all doc pages as URLs
find docs -name '*.md' ! -name '_*' ! -name 'sitemap*' | sort | while read f; do
    slug=$(echo "$f" | sed 's|^docs/||' | sed 's|\.md$|/|' | sed 's|README/|/|' | sed 's|index/|/|')
    echo "${SITE_URL}/${slug}"
done >> docs/sitemap-urls.txt

echo "✅ Generated docs/sitemap-urls.txt"
```

---

## NotebookLM Import Instructions

Include these in the generated `sitemap-urls.txt` header:

```
# ============================================
# Sitemap URLs — Copy ALL lines below into NotebookLM
# Project: [Project Name]
# Generated: 2026-02-27 23:20
# Total pages: [N]
# ============================================
#
# HOW TO USE:
# 1. Open https://notebooklm.google.com/
# 2. Create a new notebook
# 3. Click "Add Sources" → "Website"
# 4. Paste each URL below (one at a time or batch)
# 5. NotebookLM will index all pages for AI-powered Q&A
#
# ============================================

https://docs.example.com/
https://docs.example.com/architecture/
https://docs.example.com/database/
...
```

---

## Verify

- [ ] `sitemap-urls.txt` contains all doc page URLs
- [ ] URLs are absolute (include `https://...`)
- [ ] No duplicate URLs
- [ ] No internal/draft pages (files with `robots: "noindex"` are excluded)
- [ ] `robots.txt` references the sitemap (Astro only)
- [ ] `sitemap.md` links to all pages with descriptions
