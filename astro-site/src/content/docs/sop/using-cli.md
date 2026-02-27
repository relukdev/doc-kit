---
title: "Sử Dụng CLI — Hướng Dẫn"
description: "Hướng dẫn sử dụng CLI script doc-gen.sh để tạo tài liệu nhanh chóng với DocKit Master"
keywords: ["CLI", "doc-gen", "command line", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 4
---

# Sử Dụng CLI

> **Tham Khảo Nhanh**
> - **Đối tượng**: Developer
> - **Công cụ**: `doc-gen.sh` (Bash script)
> - **Thời gian**: ~3 phút
> - **OS**: macOS (hỗ trợ `pbcopy`)

## Yêu Cầu

- [ ] macOS (CLI sử dụng `pbcopy` để copy vào clipboard)
- [ ] DocKit Master đã cài đặt
- [ ] `doc-gen.sh` có quyền thực thi

## Hướng Dẫn Từng Bước

### Bước 1: Chạy Script

```bash
bash ~/.gemini/antigravity/skills/doc-kit/scripts/doc-gen.sh
```

Bạn sẽ thấy menu tương tác:

```
╔══════════════════════════════════════════════╗
║  📚 DocKit Master — Documentation Generator ║
║  Powered by Google Antigravity               ║
╚══════════════════════════════════════════════╝
```

### Bước 2: Trả Lời 4 Câu Hỏi

| # | Câu hỏi | Lựa chọn | Gợi ý |
|---|---------|----------|-------|
| 1 | Document Type | `1` tech · `2` sop · `3` api · `4` all | Chọn `4` nếu muốn full suite |
| 2 | Output Format | `1` astro ★ · `2` markdown | Astro khuyến nghị |
| 3 | Source Code Path | `/đường/dẫn/project` | Đường dẫn tuyệt đối |
| 4 | Output Language | `1` English · `2` Vietnamese | Chọn ngôn ngữ output |

### Bước 3: Copy Prompt

Script tự động:
1. Tạo prompt tối ưu từ câu trả lời
2. Copy vào clipboard (macOS)
3. Hiển thị prompt trên terminal

```
✅ Prompt successfully generated!
📋 Copied to clipboard! Paste (Cmd+V) into Antigravity.
```

### Bước 4: Paste Vào Antigravity

1. Mở Google Antigravity session
2. Nhấn **Cmd+V** để paste prompt
3. Agent sẽ tự động bắt đầu từ Step 2 (Analyze Codebase)

:::tip[Nhanh hơn nữa]
Thay vì dùng CLI, bạn có thể gõ trực tiếp trong Antigravity: `/DocKit Master` — Agent sẽ hỏi cấu hình inline.
:::

## Kết Quả Mong Đợi

- ✅ Prompt tối ưu chứa: doc type, format, language, path
- ✅ Prompt tự copy vào clipboard
- ✅ Paste vào Antigravity → bắt đầu ngay lập tức

## Xử Lý Sự Cố

<details>
<summary>🔴 "Directory not found" error</summary>

**Nguyên nhân:** Đường dẫn project không tồn tại hoặc sai format.

**Giải pháp:** Sử dụng đường dẫn tuyệt đối, ví dụ `/Users/username/projects/my-app` thay vì `~/projects/my-app`.

</details>

<details>
<summary>🔴 Clipboard không hoạt động</summary>

**Nguyên nhân:** `pbcopy` chỉ có trên macOS.

**Giải pháp:** Trên Linux, cài `xclip` và thay `pbcopy` bằng `xclip -selection clipboard` trong `doc-gen.sh:116`.

</details>

## FAQ

<details>
<summary>Q: CLI có chạy trên Windows không?</summary>

**A:** Không trực tiếp. Script sử dụng Bash và `pbcopy`. Trên Windows, dùng WSL hoặc Git Bash. Hoặc bỏ qua CLI và dùng chat mode trực tiếp trong Antigravity.

</details>

---

> Xem thêm: [Tạo tech docs](./generating-tech-docs.md) · [Hướng dẫn triển khai](../deployment.md)
