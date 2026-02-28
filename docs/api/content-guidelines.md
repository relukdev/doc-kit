---
title: "content-guidelines API Reference"
description: "API reference for the content-guidelines skill — formatting rules, UX laws, Mermaid colors, and Astro Starlight conventions"
keywords: ["API", "content-guidelines", "formatting rules", "Mermaid"]
robots: "index, follow"
sidebar:
  order: 3
---

# content-guidelines API

> **Quick Reference**
> - **File**: `skills/content-guidelines.md` (276 lines)
> - **Type**: Quality rules (read-only, no output)
> - **Dependencies**: None
> - **Applied To**: All generated documentation

## Rules Summary

### UX Laws Applied

| Law | Rule | Application |
|-----|------|-------------|
| Hick's Law | Max 7 items | TOC top level, sidebar categories |
| Miller's Law | Chunk 5-9 | Table row groups, section breaks |
| Doherty Threshold | Scan-first | Lead with summary, use tables |
| Jakob's Law | Standard layout | Sidebar left, content center, TOC right |

### Formatting Rules

| Rule | Correct | Wrong |
|------|---------|-------|
| Filenames | `kebab-case.md` | `_Under_Score.md` |
| Frontmatter | Required (title, description) | Missing |
| Links | `[text](./page)` without .md | `[text](./page.md)` |
| Admonitions | `:::tip`, `:::note` | Custom HTML |

### Mermaid Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Node fill | Dark gray | `#232221` |
| Node border | Blue | `#60A5FA` |
| Node text | Light gray | `#E8E5DF` |
| Background | Near-black | `#1C1B1A` |
| Success | Green | `#3fb950` |
| Warning | Gold | `#d29922` |
| Danger | Red | `#f85149` |

### Internal Linking

Every page must include at least 2 internal links to other documentation pages. Use descriptive anchor text (never "click here").

## Related

- [analyze-codebase API](./analyze-codebase)
- [Skill API Overview](./index)
- [Data Flow](../data-flow)
