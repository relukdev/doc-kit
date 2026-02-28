---
title: "Tạo Tài Liệu Kỹ Thuật — Hướng Dẫn"
description: "Hướng dẫn từng bước tạo tài liệu kỹ thuật (architecture, database, deployment, data-flow) với DocKit Master"
keywords: ["tech docs", "documentation", "how to", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 2
---

# Tạo Tài Liệu Kỹ Thuật

> **Tham Khảo Nhanh**
> - **Đối tượng**: Developer, Tech Lead
> - **Đầu ra**: 4 file `.md` (architecture, database, deployment, data-flow)
> - **Thời gian**: ~10 phút
> - **Yêu cầu**: Project cần có source code để quét

## Yêu Cầu

- [ ] DocKit Master đã cài đặt (xem [Hướng dẫn triển khai](../deployment))
- [ ] Có source code project cần tạo tài liệu
- [ ] Đang ở trong session Google Antigravity

## Hướng Dẫn Từng Bước

### Bước 1: Trigger DocKit Master

1. Mở Google Antigravity chat
2. Gõ một trong các câu sau:

```
Dùng DocKit Master để tạo tài liệu kỹ thuật cho project tại /path/to/project
```

Hoặc sử dụng CLI:
```bash
bash ~/.gemini/antigravity/skills/doc-kit/scripts/doc-gen.sh
```

### Bước 2: Trả Lời Cấu Hình

Agent sẽ hiển thị form 10 câu hỏi. Trả lời ngắn gọn:

| Câu hỏi | Trả lời cho Tech Docs |
|---------|----------------------|
| Loại tài liệu | `tech` |
| Định dạng output | `astro` hoặc `markdown` |
| Phạm vi quét | `full` |
| Ngôn ngữ | Auto-detect từ ngôn ngữ bạn chat |
| SEO | `yes` (khuyến nghị) |
| LLM optimize | `yes` (khuyến nghị) |

:::tip
Bạn có thể trả lời tất cả trong 1 dòng: `tech, astro, full, yes, yes`
:::

### Bước 3: Chờ Quét Code

Agent sẽ tự động:
1. Quét toàn bộ codebase (`skills/analyze-codebase.md`)
2. Detect tech stack, frameworks, dependencies
3. Map architecture layers
4. Extract routes, database schema
5. Tạo `docs/analysis.md`

<!-- Screenshot: Terminal showing codebase analysis output -->

### Bước 4: Review Output

Sau khi hoàn thành, kiểm tra 4 file được tạo:

| File | Nội dung | Check |
|------|---------|-------|
| `docs/architecture.md` | Sơ đồ kiến trúc, ADR, components | ≥2 Mermaid diagrams |
| `docs/database.md` | Database schema, ER diagram | Table schema chi tiết |
| `docs/deployment.md` | Cài đặt, CI/CD, monitoring | Copy-paste commands |
| `docs/data-flow.md` | Pipeline, sequence diagrams | ≥3 Mermaid diagrams |

### Bước 5: Build Site (Nếu chọn Astro)

```bash
cd astro-site
npm install
npm run build
npm run preview -- --port 4321
```

Mở `http://localhost:4321` để xem kết quả.

## Kết Quả Mong Đợi

- ✅ Mỗi file có Quick Reference card ở đầu
- ✅ Mỗi file có ≥2 Mermaid diagrams với dark-mode colors
- ✅ Mỗi claim cite `(file_path:line_number)`
- ✅ SEO frontmatter đầy đủ (title, description, keywords, robots)
- ✅ ≥2 internal links per page

## Xử Lý Sự Cố

<details>
<summary>🔴 Mermaid diagram không render</summary>

**Nguyên nhân:** Astro Starlight không hỗ trợ Mermaid mặc định.

**Giải pháp:**
1. Cài `remark-mermaidjs`:
```bash
cd astro-site && npm install remark-mermaidjs
```
2. Thêm vào `astro.config.mjs`:
```javascript
import remarkMermaid from 'remark-mermaidjs';
// ...
markdown: { remarkPlugins: [remarkMermaid] }
```

</details>

<details>
<summary>🔴 Build fail: Missing title in frontmatter</summary>

**Nguyên nhân:** Starlight yêu cầu mọi `.md` file phải có `title` trong frontmatter.

**Giải pháp:** Thêm `title: "..."` vào YAML frontmatter ở đầu file.

</details>

## FAQ

<details>
<summary>Q: Tech docs có tự cập nhật khi code thay đổi không?</summary>

**A:** Không tự động. Bạn cần chạy lại DocKit Master khi code thay đổi đáng kể. Tuy nhiên, quá trình chạy lại rất nhanh (~5 phút) vì Agent sẽ quét code mới và ghi đè docs cũ.

</details>

<details>
<summary>Q: Có thể tạo tech docs cho 1 module cụ thể thay vì toàn bộ project?</summary>

**A:** Có. Chọn `focused` ở câu hỏi "Phạm vi quét" và chỉ định tên module/thư mục cụ thể.

</details>

---

> Xem thêm: [Tạo SOP guides](./generating-sop-guides) · [Sử dụng CLI](./using-cli)
