---
title: "Luồng Dữ Liệu — DocKit Master"
description: "Luồng xử lý 6 bước của DocKit Master: từ input người dùng đến output tài liệu hoàn chỉnh"
keywords: ["data flow", "pipeline", "workflow", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 5
---

# Luồng Dữ Liệu

> **Tham Khảo Nhanh**
> - **Pattern**: Sequential Pipeline (6 bước)
> - **Input**: Câu trả lời cấu hình + source code
> - **Output**: Astro Starlight site hoặc Markdown files
> - **Serialization**: Markdown + YAML frontmatter

## Pipeline Tổng Quan

DocKit Master xử lý dữ liệu theo pipeline 6 bước tuần tự. Mỗi bước nhận output của bước trước làm input.

```mermaid
graph TB
    style S1 fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style S2 fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style S3 fill:#2d333b,stroke:#8b949e,color:#e6edf3
    style S4 fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style S5 fill:#2d333b,stroke:#3fb950,color:#e6edf3
    style S6 fill:#2d333b,stroke:#3fb950,color:#e6edf3

    S1["📥 Step 1<br/>Gather Input"] --> S2["🔍 Step 2<br/>Analyze Codebase"]
    S2 --> S3["📝 Step 3<br/>Apply Guidelines"]
    S3 --> S4["⚙️ Step 4<br/>Generate Documents"]
    S4 --> S5["📤 Step 5<br/>Export + Sitemap"]
    S5 --> S6["✅ Step 6<br/>Summary"]
```

## Step 1: Gather Input

Orchestrator (`SKILL.md:41-118`) hiển thị form 10 câu hỏi cho người dùng. Output là execution config.

```mermaid
sequenceDiagram
    participant U as 👤 User
    participant O as 📋 SKILL.md

    O->>U: Hiển thị form cấu hình
    Note over U: Trả lời: "all, astro, full, yes, yes"
    U->>O: Cấu hình

    Note over O: Auto-detect language<br/>từ ngôn ngữ chat
    Note over O: Generate execution plan<br/>DOC_TYPE=all, FORMAT=astro...

    O->>U: Hiển thị kế hoạch triển khai
    Note over O: Proceed to Step 2
```

**Input:** Câu trả lời người dùng (text)
**Output:** Execution config object (10 fields)

## Step 2: Analyze Codebase

Analyzer (`skills/analyze-codebase.md`) quét toàn bộ codebase và tạo metadata.

```mermaid
graph LR
    style SCAN fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style DETECT fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style MAP fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style OUTPUT fill:#2d333b,stroke:#3fb950,color:#e6edf3

    SCAN["📂 Scan Files<br/>root, dirs, extensions"] --> DETECT["🔎 Detect Stack<br/>frameworks, languages"]
    DETECT --> MAP["🗺️ Map Architecture<br/>layers, entry points"]
    MAP --> OUTPUT["📄 analysis.md<br/>structured metadata"]
```

**Quy trình quét:**
1. Đọc `README.md`, `package.json`, config files
2. Đếm files theo extension → detect languages
3. Detect frameworks từ signal files
4. Map 6 architecture layers (presentation, business, data, infra, integrations, testing)
5. Extract routes, database schema, dependencies

**Input:** Source code files
**Output:** `docs/analysis.md` với Quick Reference, Architecture diagram, tables

## Step 3: Apply Content Guidelines

Content engine áp dụng 3 bộ quy tắc song song:

| Bộ quy tắc | File | Mục đích |
|------------|------|---------|
| Content Guidelines | `skills/content-guidelines.md` | UX laws, Markdown rules, frontmatter schema |
| SEO Writing | `skills/content-writing.md` | Keyword placement, inverted pyramid, active voice |
| LLM Optimization | `skills/llm-optimization.md` | AI-readable heading, self-contained sections |

Các quy tắc này **không tạo output file** — chúng là constraints cho Step 4.

## Step 4: Generate Documents

3 generators chạy tuần tự, mỗi generator đọc `analysis.md` + source code:

```mermaid
graph TB
    style ANALYSIS fill:#2d333b,stroke:#8b949e,color:#e6edf3
    style TECH fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style SOP fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style API fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style OUT1 fill:#2d333b,stroke:#3fb950,color:#e6edf3
    style OUT2 fill:#2d333b,stroke:#3fb950,color:#e6edf3
    style OUT3 fill:#2d333b,stroke:#3fb950,color:#e6edf3

    ANALYSIS["📄 analysis.md"] --> TECH["📐 tech-docs.md"]
    ANALYSIS --> SOP["📋 sop-guide.md"]
    ANALYSIS --> API["🔌 api-reference.md"]

    TECH --> OUT1["architecture.md<br/>database.md<br/>deployment.md<br/>data-flow.md"]
    SOP --> OUT2["sop/index.md<br/>sop/[feature].md"]
    API --> OUT3["api/index.md<br/>api/[resource].md"]
```

### Tech Docs Generator

Sinh 4 file kỹ thuật với ≥2 Mermaid diagrams mỗi file:
- `architecture.md` — Sơ đồ kiến trúc, ADR
- `database.md` — Schema, ER diagram, indexes
- `deployment.md` — Cài đặt, cấu hình, CI/CD
- `data-flow.md` — Pipeline, sequence diagrams

### SOP Generator

Quét UI routes/components → nhóm theo module → sinh 1 file SOP per feature:
- Quick Reference card
- Step-by-step numbered guide
- Form field tables
- Troubleshooting (progressive disclosure)
- FAQ (schema-ready)

### API Generator

Quét route files → nhóm theo resource → sinh 1 file per resource:
- Endpoints overview table
- Parameters + response schemas
- Multi-language examples (cURL, Python, JS, Go)
- Error codes + rate limiting

## Step 5: Export

Tuỳ theo `FORMAT`, exporter scaffold output:

### Astro Path

```mermaid
graph LR
    style DOCS fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style SCAFFOLD fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style TEMPLATE fill:#2d333b,stroke:#8b949e,color:#e6edf3
    style BUILD fill:#2d333b,stroke:#3fb950,color:#e6edf3
    style SEO fill:#2d333b,stroke:#d29922,color:#e6edf3

    DOCS["📄 docs/*.md"] --> SCAFFOLD["🚀 npm create astro"]
    TEMPLATE["🎯 templates/<br/>config + CSS"] --> SCAFFOLD
    SCAFFOLD --> BUILD["📦 npm run build<br/>→ dist/"]
    BUILD --> SEO["🔍 SEO Audit<br/>+ Sitemap"]
```

1. `npm create astro@latest` — scaffold Starlight project
2. Copy premium template (config + CSS)
3. Copy docs into `src/content/docs/`
4. `npm install && npm run build`
5. Generate `sitemap-urls.txt` + `robots.txt`
6. Run SEO checklist trên mọi trang

### Markdown Path

Copy docs trực tiếp, tạo `docs/README.md` làm index.

## Step 6: Summary

Orchestrator hiển thị cho người dùng:
- Danh sách file đã tạo + kích thước
- Hướng dẫn xem/serve docs
- Next steps (customize, deploy)

## Tích Hợp Bên Ngoài

| Dịch vụ | Protocol | Hướng | Dữ liệu |
|---------|----------|-------|---------|
| Google Antigravity | Prompt/Response | Bidirectional | Markdown text |
| Clipboard (macOS) | `pbcopy` | Output only | Prompt text |
| npm Registry | HTTP | Download | Astro packages |
| NotebookLM | URL paste | Output only | `sitemap-urls.txt` |

---

> Xem thêm: [Kiến trúc hệ thống](./architecture) · [Phân tích mã nguồn](./analysis)
