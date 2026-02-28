---
title: "DocKit Master — Tài Liệu Chính Thức"
description: "Trang chủ tài liệu DocKit Master — bộ công cụ tạo tài liệu tự động với Astro Starlight, SEO-optimized, AI-readable"
keywords: ["DocKit Master", "documentation", "Astro Starlight", "AI skill"]
robots: "index, follow"
sidebar:
  order: 1
---

# DocKit Master — Documentation Toolkit

> **Tham Khảo Nhanh**
> - **Phiên bản**: SEO & AI Edition
> - **Loại**: AI Skill Toolkit cho Google Antigravity
> - **Tính năng**: Tech Docs + SOP Guides + API Reference
> - **Output**: Markdown thuần hoặc Astro Starlight Premium Site

## DocKit Master Là Gì?

DocKit Master là bộ công cụ tạo tài liệu tự động, giúp AI agent của Google Antigravity **đọc mã nguồn, truy vết logic, vẽ sơ đồ kiến trúc**, và viết tài liệu chuyên nghiệp mà developer và end-user đều muốn đọc.

:::tip[Tại Sao Dùng DocKit Master?]
Viết tài liệu rất tẻ nhạt. Cập nhật tài liệu còn tẻ nhạt hơn. **DocKit Master tự động hóa toàn bộ quy trình** — chỉ cần 5 phút và vài câu trả lời.
:::

## Bắt Đầu Nhanh

```bash
# Cài đặt
cp -r doc-kit ~/.gemini/antigravity/skills/
chmod +x ~/.gemini/antigravity/skills/doc-kit/scripts/dockit-master.sh

# Sử dụng — Cách 1: Chat
# Gõ trong Antigravity: /DocKit Master

# Sử dụng — Cách 2: CLI
bash ~/.gemini/antigravity/skills/doc-kit/scripts/dockit-master.sh
```

## Tính Năng Nổi Bật

| Tính Năng | Mô Tả |
|-----------|-------|
| **Deep Analysis** | Truy vết actual code paths, không đoán từ file names |
| **Tech Docs** | Architecture, Database, Deployment, Data-Flow với Mermaid |
| **SOP Guides** | Hướng dẫn step-by-step cho end-user |
| **API Reference** | Auto-extract endpoints, multi-language examples |
| **Astro Starlight** | Static site: dark mode, search, i18n, auto-sidebar |
| **SEO Optimized** | Frontmatter, sitemap, robots.txt, keyword placement |
| **AI-Readable** | Self-contained sections, NotebookLM support |

## Tài Liệu Kỹ Thuật

- [Kiến Trúc Hệ Thống](./architecture) — Sơ đồ tổng quan, ADR
- [Cấu Trúc Dữ Liệu](./database) — Design tokens, config schemas
- [Hướng Dẫn Triển Khai](./deployment) — Cài đặt, cấu hình, deploy
- [Luồng Dữ Liệu](./data-flow) — Pipeline 6 bước, tích hợp

## Hướng Dẫn Sử Dụng (SOP)

- [Tổng Quan Hướng Dẫn](./sop/index)
- [Tạo Tài Liệu Kỹ Thuật](./sop/generating-tech-docs)
- [Tạo Hướng Dẫn SOP](./sop/generating-sop-guides)
- [Sử Dụng CLI](./sop/using-cli)
- [Tuỳ Chỉnh Templates](./sop/customizing-templates)

## Tham Chiếu Skill

- [Tổng Quan Skill](./api/index)
- [Orchestrator — SKILL.md](./api/orchestrator)
- [Analyzer — analyze-codebase.md](./api/analyze-codebase)
- [Content Guidelines](./api/content-guidelines)

---

> Được tạo bởi **DocKit Master** SEO & AI Edition cho Google Antigravity
> Cập nhật: 2026-02-27
