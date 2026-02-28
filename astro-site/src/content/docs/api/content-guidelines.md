---
title: "Content Guidelines Reference"
description: "Tham chiếu chi tiết quy tắc nội dung: UX laws, Markdown rules, frontmatter schema, Mermaid palette, SEO fields"
keywords: ["content guidelines", "UX laws", "Markdown rules", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 4
---

# Content Guidelines

> **Tham Khảo Nhanh**
> - **File**: `skills/content-guidelines.md` (275 dòng)
> - **Vai trò**: Quy tắc chất lượng bắt buộc cho mọi nội dung
> - **Áp dụng**: Step 3 — trước khi generate bất kỳ docs nào
> - **Kèm theo**: `content-writing.md`, `seo-checklist.md`, `llm-optimization.md`

## Mô Tả

Content Guidelines định nghĩa tất cả quy tắc mà mọi nội dung DocKit Master phải tuân theo. Bao gồm UX laws, Markdown formatting, frontmatter schema, Mermaid palette, và writing style.

## UX Laws Áp Dụng

| Luật | Quy tắc | Nguồn |
|------|---------|-------|
| **Hick's Law** | ≤7 items TOC top level, ≤2 CTAs per page | `content-guidelines.md:19-22` |
| **Miller's Law** | Chunk tables 5-9 rows, break \>500 line pages | `content-guidelines.md:26-29` |
| **Doherty Threshold** | Lead with summary, tables \> paragraphs | `content-guidelines.md:33-36` |
| **Jakob's Law** | Standard layouts: sidebar + content + TOC | `content-guidelines.md:40-42` |

## Markdown Rules (Astro Starlight)

### Khác biệt với Docusaurus

| Vấn đề | Docusaurus MDX | Astro Starlight |
|--------|---------------|-----------------|
| `<` trong text | Phải escape: `\<` | **Không cần** ✅ |
| `{` `}` trong text | Phải escape | **Không cần** ✅ |
| HTML tags | Hạn chế | **Hoạt động bình thường** ✅ |
| Sidebar | Thủ công (`sidebars.ts`) | **Auto-generated** ✅ |

### Quy tắc Filename

| Quy tắc | ✅ Đúng | ❌ Sai |
|---------|---------|-------|
| kebab-case | `getting-started.md` | `Getting_Started.md` |
| No underscore prefix | `analysis.md` | `_analysis.md` |
| Lowercase only | `api-reference.md` | `API_Reference.md` |

### YAML Frontmatter Bắt Buộc

Mọi `.md` file phải có:

```yaml
---
title: "Tiêu Đề (50-60 chars)"
description: "Mô tả SEO (150-160 chars)"
---
```

## Admonition Types

```markdown
:::tip[Title]
Helpful hint
:::

:::note
Background info
:::

:::caution[Breaking Change]
Warning
:::

:::danger[Security]
Critical warning
:::
```

## Mermaid Palette

| Element | Color |
|---------|-------|
| Node fill | `#2d333b` |
| Node border | `#6d5dfc` |
| Node text | `#e6edf3` |
| Success | `#3fb950` |
| Warning | `#d29922` |
| Danger | `#f85149` |

## Internal Linking

Mọi trang phải có **≥2 internal links** trong:
- Quick Reference box
- Body text (ngữ cảnh)
- Related section (cuối trang)

**Source:** `skills/content-guidelines.md:1-275`

---

> Xem thêm: [Orchestrator](./orchestrator) · [Analyzer](./analyze-codebase)
