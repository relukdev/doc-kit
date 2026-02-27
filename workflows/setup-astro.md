---
description: "Scaffold a premium Astro Starlight site from generated documentation files."
---

# Setup Astro Starlight — Premium Workflow

Create a professional documentation site from generated Markdown files using Astro Starlight.

## Prerequisites

- Node.js 18+
- Generated docs in `[project_root]/docs/`

## Steps

### 1. Initialize Astro Starlight

// turbo
```bash
cd [project_root]
npm create astro@latest ./astro-site -- --template starlight --no-install --no-git --yes
```

### 2. Copy Premium Template

// turbo
```bash
# Copy premium config
cp ~/.gemini/antigravity/skills/DocKit Master/templates/astro-premium/astro.config.mjs \
   astro-site/astro.config.mjs

# Copy premium CSS
mkdir -p astro-site/src/styles
cp ~/.gemini/antigravity/skills/DocKit Master/templates/astro-premium/src/styles/custom.css \
   astro-site/src/styles/custom.css
```

### 3. Copy Generated Docs

// turbo
```bash
# Remove default example docs
rm -rf astro-site/src/content/docs/*

# Copy generated docs into Starlight content directory
cp -r docs/*.md astro-site/src/content/docs/

# Copy subdirectories (sop/, api/) if they exist
[ -d docs/sop ] && cp -r docs/sop astro-site/src/content/docs/
[ -d docs/api ] && cp -r docs/api astro-site/src/content/docs/

# Rename README.md to index.md (Starlight convention)
[ -f astro-site/src/content/docs/README.md ] && \
  mv astro-site/src/content/docs/README.md astro-site/src/content/docs/index.md

# Remove internal analysis file
rm -f astro-site/src/content/docs/_analysis.md
rm -f astro-site/src/content/docs/analysis.md
```

> **Note:** No need to escape `<`, `{`, `}` — Starlight uses pure Markdown, not MDX.
> No need to create `sidebars.ts` — Starlight auto-generates sidebar from folder structure.

### 4. Customize Configuration

Edit `astro-site/astro.config.mjs`:

Replace all `[PLACEHOLDER]` values:
- `[Project Name]` → actual project name
- `[GITHUB_URL]` → actual GitHub URL (for social link)
- Update `site` URL for deployment target
- Add/remove locale configs if multilingual

**For i18n projects:** Uncomment additional locales in the `locales` object. Create matching locale directories:

```bash
# Example: add Vietnamese
mkdir -p astro-site/src/content/docs/vi
# Copy and translate docs into vi/ directory
```

### 5. Install & Build

// turbo
```bash
cd astro-site
npm install
npm run build 2>&1 | tee build.log
```

**Expected:** Build completes with exit code 0. Output in `dist/`.

**Common build issues:**

| Error | Cause | Fix |
|-------|-------|-----|
| Missing `title` in frontmatter | Starlight requires `title` | Add `title: "Page Title"` to frontmatter |
| Duplicate slugs | Two files with same name | Rename one file |
| Image not found | Broken image path | Fix path or remove image |

> No MDX escaping issues — Starlight handles raw Markdown natively!

### 6. Preview

```bash
cd astro-site
npm run preview -- --port 4321
```

Open `http://localhost:4321` to preview.

**Verify:**
- [ ] Dark mode default with toggle
- [ ] Sidebar auto-generated from docs structure
- [ ] Search works (built-in Pagefind)
- [ ] Admonitions render (`:::tip`, `:::note`, `:::caution`, `:::danger`)
- [ ] Mobile responsive (hamburger menu works)
- [ ] Custom CSS applied (purple accent colors)
- [ ] Every page has `title` and `description` in frontmatter
- [ ] `robots.txt` exists in `public/`
- [ ] `sitemap-urls.txt` generated after build
- [ ] All pages have ≥2 internal links

### 7. Post-Setup Optimizations (Optional)

#### Add Mermaid Support

```bash
cd astro-site
npm install remark-mermaidjs
```

Add to `astro.config.mjs`:
```javascript
import remarkMermaid from 'remark-mermaidjs';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  integrations: [/* ... */],
});
```

#### Deploy to GitHub Pages

```bash
cd astro-site
npm run build
# Output is in dist/ — deploy to any static host
```

#### Deploy to Cloudflare Pages

```bash
# In Cloudflare dashboard: connect repo → build command: npm run build → output: dist/
```

## Comparison with Previous Docusaurus Workflow

| Step | Docusaurus | Astro Starlight |
|------|-----------|-----------------|
| Init | `npx create-docusaurus` + install | `npm create astro` |
| Config | `docusaurus.config.ts` + `sidebars.ts` + `tsconfig.json` | `astro.config.mjs` only |
| Copy docs | Remove boilerplate, fix filenames | Just copy to `src/content/docs/` |
| MDX escaping | Escape `<`, `{`, `}` in all docs | **Not needed** |
| Sidebar | Manual `sidebars.ts` with matching IDs | **Auto-generated** |
| Search | Install 3rd-party plugin | **Built-in** (Pagefind) |
| Mobile fixes | CSS workarounds for transparent sidebar | **Not needed** |
| Build size | ~1.5GB node_modules | **~50MB** node_modules |
| Build time | ~30s | **~5s** |

### 8. SEO & Sitemap Setup

Follow the `workflows/generate-sitemap.md` workflow to:

1. Install `@astrojs/sitemap`
2. Generate `robots.txt`
3. Build and extract `sitemap-urls.txt` for NotebookLM
4. Create `sitemap.md` index page

After setup, run the SEO checklist (`skills/seo-checklist.md`) on all generated pages.
