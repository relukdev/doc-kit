---
title: "Hướng Dẫn Sử Dụng — Tổng Quan"
description: "Tổng hợp hướng dẫn sử dụng DocKit Master: tạo tài liệu kỹ thuật, SOP, API reference với Astro Starlight output"
keywords: ["user guide", "SOP", "how to", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 1
---

# Hướng Dẫn Sử Dụng

> **Tham Khảo Nhanh**
> - **Tổng tính năng**: 5 hướng dẫn chính
> - **Đối tượng**: Developer, Technical Writer
> - **Thời gian trung bình**: 5-15 phút per guide
> - **Cập nhật**: 2026-02-27

## Sơ Đồ Tính Năng

Sơ đồ dưới mô tả các nhóm tính năng chính và mối quan hệ giữa chúng.

```mermaid
graph TB
    style CORE fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style TECH fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style SOP fill:#2d333b,stroke:#6d5dfc,color:#e6edf3
    style CLI fill:#2d333b,stroke:#3fb950,color:#e6edf3
    style TPL fill:#2d333b,stroke:#d29922,color:#e6edf3

    CORE["📚 DocKit Master"] --> TECH["📐 Tạo Tech Docs"]
    CORE --> SOP["📋 Tạo SOP Guides"]
    CORE --> CLI["💻 Sử Dụng CLI"]
    CORE --> TPL["🎨 Tuỳ Chỉnh Templates"]
```

## Danh Sách Hướng Dẫn

| # | Hướng dẫn | Mô tả | Độ khó | Thời gian |
|---|-----------|-------|--------|-----------|
| 1 | [Tạo tài liệu kỹ thuật](./generating-tech-docs) | Sinh architecture, database, deployment, data-flow | 🟡 Trung bình | ~10 phút |
| 2 | [Tạo hướng dẫn SOP](./generating-sop-guides) | Sinh user guides step-by-step | 🟢 Dễ | ~5 phút |
| 3 | [Sử dụng CLI](./using-cli) | Chạy script CLI tương tác | 🟢 Dễ | ~3 phút |
| 4 | [Tuỳ chỉnh templates](./customizing-templates) | Sửa CSS, config, thêm ngôn ngữ | 🟡 Trung bình | ~15 phút |

:::tip[Bắt đầu từ đâu?]
Nếu bạn mới dùng DocKit Master, hãy bắt đầu với [Sử dụng CLI](./using-cli) — cách nhanh nhất để tạo tài liệu đầu tiên.
:::

---

> Xem thêm: [Kiến trúc hệ thống](../architecture) · [Tham chiếu Skill](../api/index)
