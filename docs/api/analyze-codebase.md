---
title: "Analyzer — analyze-codebase.md Reference"
description: "Tham chiếu chi tiết skill phân tích codebase: quét files, detect tech stack, map architecture"
keywords: ["analyzer", "codebase analysis", "tech stack detection", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 3
---

# Analyzer — analyze-codebase.md

> **Tham Khảo Nhanh**
> - **File**: `skills/analyze-codebase.md` (181 dòng)
> - **Vai trò**: Quét codebase và tạo metadata cho generators
> - **Input**: Source code + project root
> - **Output**: `docs/analysis.md`

## Mô Tả

Analyzer thực hiện 8 bước quét tự động để tạo metadata mà các generators (tech, SOP, API) sử dụng làm input. Nó phát hiện tech stack, map kiến trúc, extract routes và database schema.

## Quy Trình Quét

| Bước | Hành động | Output |
|------|----------|--------|
| 1 | Scan Project Root | README, package.json, config files |
| 2 | Detect Tech Stack | Framework signals (xem bảng bên dưới) |
| 3 | Map Architecture | 6 layers: presentation → testing |
| 4 | Identify Entry Points | server startup, routes, migrations |
| 5 | Extract Route Map | Method, path, handler, auth, middleware |
| 6 | Extract Database Schema | Tables, columns, relationships, indexes |
| 7 | Analyze Dependencies | Category, package, version, purpose |
| 8 | Detect Test Coverage | Framework, file count, CI integration |

## Framework Detection Signals

| Signal File | Framework |
|-------------|-----------|
| `package.json` + `next.config.*` | Next.js |
| `package.json` + `astro.config.*` | Astro |
| `package.json` + `vite.config.*` | Vite + React/Vue |
| `requirements.txt` / `pyproject.toml` | Python |
| `go.mod` | Go |
| `Cargo.toml` | Rust |
| `docker-compose.yml` | Containerized |
| `deno.json` / `deno.jsonc` | Deno |

## Output Format

Output là `docs/analysis.md` với cấu trúc:

```
analysis.md
├── Quick Reference card
├── Architecture (Mermaid graph TB)
├── Directory Structure (tree)
├── Dependencies (table)
├── Route Map (table)
├── Database Schema (table)
├── Key Files (table)
└── Test Coverage (table)
```

## Quy Tắc

- **Trace actual code** — không đoán từ filename (`analyze-codebase.md:172-173`)
- **Cite every finding**: `(file_path:line_number)` (`analyze-codebase.md:173`)
- **Output filename**: `analysis.md` — KHÔNG dùng `_analysis.md` (`analyze-codebase.md:174`)
- **Dark-mode Mermaid**: fill `#2d333b`, border `#6d5dfc` (`analyze-codebase.md:175-177`)
- **Quick Reference card** ở đầu output (`analyze-codebase.md:106-112`)

**Source:** `skills/analyze-codebase.md:1-181`

---

> Xem thêm: [Orchestrator](./orchestrator) · [Content Guidelines](./content-guidelines)
