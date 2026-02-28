---
title: "Kiến Trúc Hệ Thống — DocKit Master"
description: "Tổng quan kiến trúc DocKit Master: pipeline 6 bước, skill orchestration, và các quyết định thiết kế chính"
keywords: ["architecture", "system design", "DocKit Master", "pipeline"]
robots: "index, follow"
sidebar:
  order: 2
---

# Kiến Trúc Hệ Thống

> **Tham Khảo Nhanh**
> - **Loại**: Skill-based Pipeline (không phải microservices)
> - **Stack**: Markdown, Bash, CSS, Astro Starlight
> - **Modules chính**: Orchestrator, Analyzer, Generators (3), Exporters (2)
> - **Deployment**: Copy vào `~/.gemini/antigravity/skills/`

## Tổng Quan

DocKit Master là một **AI skill toolkit** chạy bên trong Google Antigravity. Nó không phải web app hay API server — mà là tập hợp các file Markdown hướng dẫn AI agent cách đọc code, phân tích kiến trúc, và sinh tài liệu chuyên nghiệp.

Kiến trúc dựa trên mô hình **orchestrator-worker**: `SKILL.md` điều phối toàn bộ quy trình, gọi từng skill con theo thứ tự.

## Sơ Đồ Kiến Trúc

Sơ đồ dưới mô tả luồng dữ liệu chính của DocKit Master, từ input người dùng đến output cuối cùng.

```mermaid
graph TB
    style INPUT fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style ORCH fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style ANALYZE fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style CONTENT fill:#2d333b,stroke:#8b949e,color:#e6edf3
    style TECH fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style SOP fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style API fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style ASTRO fill:#2d333b,stroke:#3fb950,color:#e6edf3
    style MD fill:#2d333b,stroke:#3fb950,color:#e6edf3
    style SEO fill:#2d333b,stroke:#d29922,color:#e6edf3

    INPUT["📥 User Input<br/>doc type, format, scope"] --> ORCH["📋 SKILL.md<br/>Orchestrator"]
    ORCH --> ANALYZE["🔍 analyze-codebase.md<br/>Step 2"]
    ANALYZE --> CONTENT["📝 content-guidelines.md<br/>+ SEO + LLM rules"]
    CONTENT --> TECH["📐 tech-docs.md"]
    CONTENT --> SOP["📋 sop-guide.md"]
    CONTENT --> API["🔌 api-reference.md"]
    TECH --> ASTRO["🚀 Astro Starlight<br/>setup-astro.md"]
    SOP --> ASTRO
    API --> ASTRO
    TECH --> MD["📄 Markdown<br/>export-markdown.md"]
    SOP --> MD
    API --> MD
    ASTRO --> SEO["🔍 SEO Audit<br/>+ Sitemap"]
    MD --> SEO
```

## Thành Phần Cốt Lõi

| Thành phần | File | Vai trò |
|------------|------|---------|
| **Orchestrator** | `SKILL.md` | Điều phối quy trình 6 bước, quản lý config |
| **Analyzer** | `skills/analyze-codebase.md` | Quét codebase, phát hiện tech stack, trích xuất schema |
| **Content Engine** | `skills/content-guidelines.md` | Quy tắc chất lượng: UX laws, Mermaid, frontmatter |
| **SEO Engine** | `skills/content-writing.md` + `seo-checklist.md` | SEO copywriting + per-page audit |
| **LLM Engine** | `skills/llm-optimization.md` | AI-readable structure, NotebookLM support |
| **Tech Generator** | `skills/tech-docs.md` | Sinh architecture, database, deployment, data-flow |
| **SOP Generator** | `skills/sop-guide.md` | Sinh hướng dẫn sử dụng từng bước |
| **API Generator** | `skills/api-reference.md` | Sinh tài liệu API/skill reference |
| **Astro Exporter** | `workflows/setup-astro.md` | Scaffold Astro Starlight site ★ |
| **Markdown Exporter** | `workflows/export-markdown.md` | Xuất Markdown thuần |
| **Sitemap Generator** | `workflows/generate-sitemap.md` | XML sitemap + robots.txt + NotebookLM URLs |
| **CLI** | `scripts/doc-gen.sh` | Giao diện dòng lệnh tương tác |

## Luồng Xử Lý Chi Tiết

Quy trình 6 bước được mô tả chi tiết dưới đây:

```mermaid
sequenceDiagram
    participant U as 👤 User
    participant O as 📋 Orchestrator
    participant A as 🔍 Analyzer
    participant C as 📝 Content Rules
    participant G as ⚙️ Generators
    participant E as 📤 Exporter
    participant S as 🔍 SEO

    Note over O: Step 1: Gather Input
    O->>U: Hiển thị form cấu hình (10 câu hỏi)
    U->>O: Trả lời cấu hình
    O->>O: Auto-generate execution plan

    Note over A: Step 2: Analyze Codebase
    O->>A: Quét project root
    A->>A: Detect tech stack, map architecture
    A->>A: Extract routes, schema, dependencies

    Note over C: Step 3: Apply Guidelines
    O->>C: Áp dụng content-guidelines + SEO + LLM

    Note over G: Step 4: Generate Documents
    O->>G: Sinh tech/sop/api docs
    G->>G: Mỗi file có frontmatter, Quick Ref, Mermaid

    Note over E: Step 5: Export
    O->>E: Scaffold Astro site hoặc export Markdown
    E->>S: Generate sitemap + SEO audit

    Note over U: Step 6: Summary
    O->>U: Danh sách file, hướng dẫn xem docs
```

## Quyết Định Kiến Trúc (ADR)

| # | Quyết định | Bối cảnh | Trạng thái |
|---|-----------|----------|------------|
| 1 | Chuyển từ Docusaurus sang Astro Starlight | Docusaurus nặng (1.5GB node_modules), cần MDX escaping, sidebar thủ công | ✅ Accepted |
| 2 | Thêm SEO + LLM optimization | Documentation cần tối ưu cho cả search engines và AI agents | ✅ Accepted |
| 3 | Sitemap + NotebookLM support | Cho phép import docs vào NotebookLM để nghiên cứu | ✅ Accepted |
| 4 | Skill-based architecture (không phải code) | DocKit Master là AI prompt toolkit, không phải software | ✅ Accepted |

<details>
<summary>ADR-001: Chuyển từ Docusaurus sang Astro Starlight</summary>

**Bối cảnh:** Docusaurus 3 yêu cầu MDX escaping (`<`, `{`, `}`), sidebar thủ công (`sidebars.ts`), và node_modules nặng ~1.5GB. Build time ~30s.

**Quyết định:** Chuyển sang Astro Starlight với pure Markdown, auto-sidebar, built-in search (Pagefind), và node_modules chỉ ~50MB. Build time ~5s.

**Hệ quả:**
- ✅ Không cần escaping — Markdown thuần
- ✅ Auto-sidebar từ folder structure
- ✅ Built-in search, dark mode, i18n
- ✅ Build size giảm 30x
- ⚠️ Cần migration template mới

</details>

<details>
<summary>ADR-002: Tích hợp SEO + LLM Optimization</summary>

**Bối cảnh:** Documentation cần phục vụ cả người đọc, search engines, và AI agents.

**Quyết định:** Thêm 3 skill files mới: `content-writing.md` (SEO copywriting), `seo-checklist.md` (per-page audit), `llm-optimization.md` (AI-readable rules).

**Hệ quả:**
- ✅ Mỗi trang có SEO frontmatter (title, description, keywords, robots)
- ✅ Sitemap XML + `sitemap-urls.txt` cho NotebookLM
- ✅ Self-contained sections cho LLM chunking
- ⚠️ Tăng thời gian generation do thêm bước audit

</details>

## Bảo Mật

DocKit Master không có vấn đề bảo mật đặc biệt vì:
- Là tập hợp file Markdown prompt — không chạy server
- Không lưu trữ dữ liệu người dùng
- CLI script (`doc-gen.sh`) chỉ tạo prompt text và copy vào clipboard
- Output là static HTML site — không có backend

## Khả Năng Mở Rộng

| Khía cạnh | Chiến lược |
|-----------|-----------|
| Thêm doc type mới | Tạo file `skills/[new-type].md` và thêm vào bảng trong `SKILL.md` |
| Thêm output format | Tạo file `workflows/setup-[format].md` và template tương ứng |
| Thêm ngôn ngữ | Thêm locale vào `astro.config.mjs` và tạo thư mục dịch |
| Thêm SEO rules | Cập nhật `skills/seo-checklist.md` và `skills/content-writing.md` |

---

> Xem thêm: [Luồng dữ liệu](./data-flow) · [Hướng dẫn triển khai](./deployment)
