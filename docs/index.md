---
title: "DocKit Master — Tài Liệu Chính Thức"
description: "Trang chủ tài liệu DocKit Master — bộ công cụ tạo tài liệu tự động với Astro Starlight output, SEO-optimized, AI-readable"
keywords: ["DocKit Master", "documentation", "Astro Starlight", "AI skill"]
robots: "index, follow"
sidebar:
  order: 1
---

# 📚 DocKit Master — Documentation Toolkit

> **Tham Khảo Nhanh**
> - **Phiên bản**: SEO & AI Edition
> - **Loại**: AI Skill Toolkit cho Google Antigravity
> - **Tính năng**: Tech Docs + SOP Guides + API Reference
> - **Output**: Markdown thuần hoặc Astro Starlight Premium Site

## DocKit Master là gì?

DocKit Master là bộ công cụ tạo tài liệu tự động, giúp AI agent của Google Antigravity **đọc mã nguồn, truy vết logic, vẽ sơ đồ kiến trúc**, và viết tài liệu chuyên nghiệp mà developer và end-user đều muốn đọc.

:::tip[Tại sao dùng DocKit Master?]
Viết tài liệu rất tẻ nhạt. Cập nhật tài liệu còn tẻ nhạt hơn. **DocKit Master tự động hóa toàn bộ quy trình** — chỉ cần 5 phút và vài câu trả lời.
:::

## Bắt Đầu Nhanh

```bash
# Cài đặt
cp -r doc-kit ~/.gemini/antigravity/skills/
chmod +x ~/.gemini/antigravity/skills/doc-kit/scripts/doc-gen.sh

# Sử dụng — Cách 1: Chat
# Gõ trong Antigravity: /DocKit Master

# Sử dụng — Cách 2: CLI
bash ~/.gemini/antigravity/skills/doc-kit/scripts/doc-gen.sh
```

## Tính Năng Nổi Bật

| Tính năng | Mô tả |
|-----------|-------|
| 🧠 **Deep Analysis** | Truy vết actual code paths, không đoán từ file names |
| 📐 **Tech Docs** | Architecture, Database, Deployment, Data-Flow với Mermaid |
| 📋 **SOP Guides** | Hướng dẫn step-by-step cho end-user |
| 🔌 **API Reference** | Auto-extract endpoints, multi-language examples |
| 🚀 **Astro Starlight** | Static site: dark mode, search, i18n, auto-sidebar |
| 🔍 **SEO Optimized** | Frontmatter, sitemap, robots.txt, keyword placement |
| 🤖 **AI-Readable** | Self-contained sections, NotebookLM support |

## 📐 Tài Liệu Kỹ Thuật

- [Kiến trúc hệ thống](./architecture.md) — Sơ đồ tổng quan, ADR
- [Cấu trúc dữ liệu](./database.md) — Design tokens, config schemas
- [Hướng dẫn triển khai](./deployment.md) — Cài đặt, cấu hình, deploy
- [Luồng dữ liệu](./data-flow.md) — Pipeline 6 bước, tích hợp

## 📋 Hướng Dẫn Sử Dụng (SOP)

- [Tổng quan hướng dẫn](./sop/index.md)
- [Tạo tài liệu kỹ thuật](./sop/generating-tech-docs.md)
- [Tạo hướng dẫn SOP](./sop/generating-sop-guides.md)
- [Sử dụng CLI](./sop/using-cli.md)
- [Tuỳ chỉnh templates](./sop/customizing-templates.md)

## 🔌 Tham Chiếu Skill

- [Tổng quan skill](./api/index.md)
- [Orchestrator — SKILL.md](./api/orchestrator.md)
- [Analyzer — analyze-codebase.md](./api/analyze-codebase.md)
- [Content Guidelines](./api/content-guidelines.md)

## 📊 Phân Tích Mã Nguồn

- [Phân tích codebase](./analysis.md)

---

> Được tạo bởi **DocKit Master** SEO & AI Edition cho Google Antigravity
> Cập nhật: 2026-02-27
