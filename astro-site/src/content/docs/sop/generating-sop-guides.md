---
title: "Tạo Hướng Dẫn SOP — Hướng Dẫn"
description: "Hướng dẫn tạo Standard Operating Procedure (SOP) user guides với DocKit Master cho end-user"
keywords: ["SOP", "user guide", "how to", "documentation"]
robots: "index, follow"
sidebar:
  order: 3
---

# Tạo Hướng Dẫn SOP

> **Tham Khảo Nhanh**
> - **Đối tượng**: Technical Writer, Product Manager
> - **Đầu ra**: 1 file `.md` per feature/module
> - **Thời gian**: ~5 phút
> - **Yêu cầu**: Project có UI/frontend routes

## Yêu Cầu

- [ ] DocKit Master đã cài đặt
- [ ] Project có frontend pages/routes hoặc UI components
- [ ] Đang ở trong session Google Antigravity

## Hướng Dẫn Từng Bước

### Bước 1: Trigger DocKit Master

```
Dùng DocKit Master để tạo hướng dẫn SOP cho project tại /path/to/project
```

### Bước 2: Chọn Cấu Hình SOP

| Câu hỏi | Trả lời |
|---------|---------|
| Loại tài liệu | `sop` |
| Định dạng output | `astro` |
| Phạm vi | `full` hoặc `focused` |
| Ngôn ngữ | Auto-detect |

### Bước 3: Chờ Quét Code

Agent sẽ:
1. Quét frontend routes/pages
2. Phát hiện UI components
3. Nhóm features theo module (Miller's Law: 5-9 items/group)
4. Sinh 1 file SOP per feature

### Bước 4: Review Output

Mỗi SOP file có cấu trúc chuẩn:

```
sop/[feature-name].md
├── Quick Reference (Who, Where, Time)
├── Prerequisites (checklist)
├── Step-by-Step Guide (numbered)
│   ├── Form field tables
│   └── :::tip hints
├── Expected Results
├── Troubleshooting (<details>)
└── FAQ (<details>)
```

:::tip[SOP chất lượng cao]
Agent sẽ truy vết actual validation rules trong code để sinh FAQ chính xác, không phải đoán.
:::

## Kết Quả Mong Đợi

- ✅ `docs/sop/index.md` — Feature map + danh sách
- ✅ `docs/sop/[feature].md` — 1 file per feature
- ✅ Quick Reference card ở mỗi file
- ✅ Form field tables với real examples
- ✅ Troubleshooting và FAQ trong `<details>`

## Xử Lý Sự Cố

<details>
<summary>🔴 SOP không có step-by-step guide</summary>

**Nguyên nhân:** Project không có frontend routes hoặc UI components rõ ràng.

**Giải pháp:** Chỉ định `focused` scope và tên module cụ thể. Hoặc sử dụng `tech` docs thay vì `sop`.

</details>

## FAQ

<details>
<summary>Q: SOP có hỗ trợ screenshot không?</summary>

**A:** DocKit Master tạo placeholder `<!-- Screenshot: description -->`. Nếu bạn chọn `RECORD = yes`, Agent sẽ quay browser walkthrough và embedded vào docs.

</details>

---

> Xem thêm: [Tạo tech docs](./generating-tech-docs) · [Tuỳ chỉnh templates](./customizing-templates)
