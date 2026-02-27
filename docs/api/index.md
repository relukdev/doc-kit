---
title: "Tham Chiếu Skill — Tổng Quan"
description: "Tổng hợp tham chiếu tất cả skill files của DocKit Master: orchestrator, analyzer, generators, và support skills"
keywords: ["API reference", "skill files", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 1
---

# Tham Chiếu Skill

> **Tham Khảo Nhanh**
> - **Tổng skills**: 8 skill files + 5 workflow files
> - **Entry point**: `SKILL.md` (Orchestrator)
> - **Format**: Markdown prompt files
> - **Invocation**: Chat trực tiếp hoặc CLI

## Tổng Quan

DocKit Master sử dụng hệ thống skill files — mỗi file Markdown chứa hướng dẫn chi tiết để AI agent thực hiện một nhiệm vụ cụ thể. Orchestrator (`SKILL.md`) gọi từng skill theo thứ tự pipeline.

## Danh Sách Skills

### Core Skills (Generation)

| Skill | File | Vai trò |
|-------|------|---------|
| [Orchestrator](./orchestrator.md) | `SKILL.md` | Điều phối pipeline 6 bước |
| [Analyzer](./analyze-codebase.md) | `skills/analyze-codebase.md` | Quét codebase, phát hiện tech stack |
| [Content Guidelines](./content-guidelines.md) | `skills/content-guidelines.md` | Quy tắc chất lượng nội dung |

### Generator Skills

| Skill | File | Output |
|-------|------|--------|
| Tech Docs | `skills/tech-docs.md` | `architecture.md`, `database.md`, `deployment.md`, `data-flow.md` |
| SOP Guide | `skills/sop-guide.md` | `sop/[feature].md` per module |
| API Reference | `skills/api-reference.md` | `api/[resource].md` per resource |

### Support Skills (SEO + LLM)

| Skill | File | Vai trò |
|-------|------|---------|
| SEO Checklist | `skills/seo-checklist.md` | Per-page SEO audit |
| Content Writing | `skills/content-writing.md` | SEO copywriting rules |
| LLM Optimization | `skills/llm-optimization.md` | AI-readable structure |

### Workflow Files

| Workflow | File | Vai trò |
|----------|------|---------|
| Generate Docs | `workflows/generate-docs.md` | Quy trình tổng |
| Setup Astro | `workflows/setup-astro.md` | Scaffold Astro Starlight ★ |
| Export Markdown | `workflows/export-markdown.md` | Xuất plain Markdown |
| Generate Sitemap | `workflows/generate-sitemap.md` | XML sitemap + NotebookLM URLs |
| Setup Docusaurus | `workflows/setup-docusaurus.md` | Legacy — Docusaurus scaffolding |

:::note
`setup-docusaurus.md` vẫn được giữ lại cho backward compatibility, nhưng **Astro Starlight** là output format mặc định và khuyến nghị.
:::

---

> Xem thêm: [Kiến trúc hệ thống](../architecture.md) · [Hướng dẫn sử dụng](../sop/index.md)
