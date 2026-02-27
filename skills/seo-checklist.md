# SEO Checklist — Per-Page Audit

Run this checklist after generating every documentation page. Mark each item ✅ or ❌.

## How to Use

After doc generation (Step 4), audit every `.md` file against this checklist. Fix any ❌ items before proceeding to export (Step 5).

---

## 1. Title & Meta

| # | Check | Rule | Priority |
|---|-------|------|----------|
| 1.1 | **Title tag exists** | YAML frontmatter `title` is set | 🔴 Critical |
| 1.2 | **Title length** | 50–60 characters, contains primary keyword | 🟡 Important |
| 1.3 | **Meta description exists** | YAML frontmatter `description` is set | 🔴 Critical |
| 1.4 | **Meta description length** | 150–160 characters, includes CTA or value prop | 🟡 Important |
| 1.5 | **Keywords field** | `keywords` array in frontmatter (3–5 relevant terms) | 🟢 Nice |

## 2. Heading Structure

| # | Check | Rule | Priority |
|---|-------|------|----------|
| 2.1 | **Single H1** | Exactly one `# Heading` per page | 🔴 Critical |
| 2.2 | **H1 matches title** | H1 text aligns with frontmatter `title` | 🟡 Important |
| 2.3 | **No skipped levels** | H1→H2→H3, never H1→H3 directly | 🔴 Critical |
| 2.4 | **Keywords in H2s** | At least 1 H2 contains a target keyword | 🟡 Important |
| 2.5 | **Max H2 count** | ≤7 H2 sections per page (Hick's Law) | 🟢 Nice |

## 3. Content Quality

| # | Check | Rule | Priority |
|---|-------|------|----------|
| 3.1 | **First paragraph** | Contains primary keyword within first 100 words | 🟡 Important |
| 3.2 | **Paragraph length** | Max 4 sentences / 80 words per paragraph | 🟡 Important |
| 3.3 | **Active voice** | ≥80% of sentences use active voice | 🟢 Nice |
| 3.4 | **Transition words** | ≥30% of sentences start with transitions | 🟢 Nice |
| 3.5 | **No orphan pages** | Every page has ≥2 internal links to other docs | 🔴 Critical |

## 4. URL & Slug

| # | Check | Rule | Priority |
|---|-------|------|----------|
| 4.1 | **Kebab-case** | Filename uses `kebab-case.md`, no underscores | 🔴 Critical |
| 4.2 | **Slug length** | ≤60 characters | 🟡 Important |
| 4.3 | **Contains keyword** | Filename reflects the page topic | 🟡 Important |
| 4.4 | **No special chars** | No dots, spaces, or uppercase in filename | 🔴 Critical |

## 5. Robots & Indexing

| # | Check | Rule | Priority |
|---|-------|------|----------|
| 5.1 | **Robots directive** | `robots` field in frontmatter (default: `"index, follow"`) | 🔴 Critical |
| 5.2 | **Canonical URL** | `canonical` field set if page could have duplicates | 🟢 Nice |
| 5.3 | **Nofollow when needed** | Set `robots: "noindex, nofollow"` for internal/draft pages | 🟡 Important |

### Follow / Nofollow Control

Every page frontmatter supports a `robots` field:

```yaml
---
title: "Page Title"
description: "SEO description"
robots: "index, follow"        # DEFAULT — search engines index and follow links
# robots: "noindex, nofollow"  # Use for: drafts, internal docs, admin pages
# robots: "index, nofollow"    # Use for: public pages with untrusted outbound links
# robots: "noindex, follow"    # Use for: duplicate content with valid links
---
```

**Decision guide:**

| Page Type | Recommended `robots` |
|-----------|---------------------|
| Public documentation | `index, follow` ✅ (default) |
| API reference | `index, follow` |
| Internal SOP / admin guide | `noindex, nofollow` |
| Draft / work-in-progress | `noindex, nofollow` |
| Changelog / release notes | `index, follow` |
| Duplicate translations | `noindex, follow` + `canonical` to primary |

## 6. Structured Data

| # | Check | Rule | Priority |
|---|-------|------|----------|
| 6.1 | **Open Graph** | `og_title`, `og_description`, `og_type` in frontmatter | 🟡 Important |
| 6.2 | **Article schema** | Tech docs use `TechArticle` type | 🟢 Nice |
| 6.3 | **FAQ schema** | SOPs with FAQ section use Q&A schema format | 🟡 Important |
| 6.4 | **Breadcrumbs** | Auto-generated from directory structure (Astro handles this) | 🟢 Nice |

## 7. Images & Media

| # | Check | Rule | Priority |
|---|-------|------|----------|
| 7.1 | **Alt text** | Every `![](image)` has descriptive alt text | 🔴 Critical |
| 7.2 | **Descriptive filenames** | `architecture-diagram.png` not `img1.png` | 🟡 Important |
| 7.3 | **Diagram text fallback** | Every Mermaid diagram has text description nearby | 🟡 Important |

## 8. Links

| # | Check | Rule | Priority |
|---|-------|------|----------|
| 8.1 | **Internal links** | ≥2 cross-links to other docs per page | 🔴 Critical |
| 8.2 | **Anchor text** | Descriptive text, not "click here" | 🟡 Important |
| 8.3 | **No broken links** | All relative paths resolve to existing files | 🔴 Critical |
| 8.4 | **External links** | Use `rel="noopener"` for external links | 🟢 Nice |

---

## Quick Audit Template

Copy this template and fill in for each generated page:

```markdown
## SEO Audit: [page-name.md]

- [ ] 1.1 Title exists
- [ ] 1.3 Meta description exists
- [ ] 2.1 Single H1
- [ ] 2.3 No skipped heading levels
- [ ] 3.5 ≥2 internal links
- [ ] 4.1 Kebab-case filename
- [ ] 5.1 Robots directive set
- [ ] 7.1 All images have alt text
- [ ] 8.3 No broken links

**Score: __/9 critical items passed**
```
