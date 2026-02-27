---
title: "Tuỳ Chỉnh Templates — Hướng Dẫn"
description: "Hướng dẫn tuỳ chỉnh Astro Starlight template: CSS, config, i18n, và Mermaid cho DocKit Master"
keywords: ["customization", "template", "Astro Starlight", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 5
---

# Tuỳ Chỉnh Templates

> **Tham Khảo Nhanh**
> - **Đối tượng**: Developer, Designer
> - **Files chính**: `astro.config.mjs`, `custom.css`
> - **Thời gian**: ~15 phút
> - **Yêu cầu**: Kiến thức CSS cơ bản

## Yêu Cầu

- [ ] DocKit Master đã cài đặt
- [ ] Đã build thành công Astro site ít nhất 1 lần
- [ ] Hiểu CSS custom properties cơ bản

## Tuỳ Chỉnh Màu Sắc

### Thay Đổi Accent Color

Edit `astro-site/src/styles/custom.css`:

```css
:root {
    /* Đổi từ purple sang teal */
    --sl-color-accent-low: #0d2818;
    --sl-color-accent: #00d4aa;
    --sl-color-accent-high: #b8fff0;
}
```

### Thay Đổi Dark Mode Background

```css
:root[data-theme='dark'] {
    --sl-color-bg: #0a0a0a;         /* Darker background */
    --sl-color-bg-nav: rgba(10, 10, 10, 0.9);
}
```

:::tip[Preview nhanh]
Chạy `npm run dev` để xem thay đổi CSS realtime mà không cần rebuild.
:::

## Tuỳ Chỉnh Config

### Thay Đổi Project Info

Edit `astro-site/astro.config.mjs`:

```javascript
starlight({
    title: 'Tên Project Của Bạn',
    description: 'Mô tả project',
    social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/your-repo' },
    ],
})
```

### Thêm Logo

```javascript
starlight({
    logo: {
        src: './src/assets/logo.svg',
        alt: 'Logo Alt Text',
    },
})
```

## Cấu Hình Đa Ngôn Ngữ (i18n)

### Bước 1: Uncomment Locales

Trong `astro.config.mjs`:

```javascript
locales: {
    root: { label: 'English', lang: 'en' },
    vi: { label: 'Tiếng Việt', lang: 'vi' },   // Uncomment
    zh: { label: '中文', lang: 'zh-CN' },        // Uncomment
},
```

### Bước 2: Tạo Thư Mục Ngôn Ngữ

```bash
mkdir -p astro-site/src/content/docs/vi
mkdir -p astro-site/src/content/docs/zh
```

### Bước 3: Copy Và Dịch

Copy các file `.md` vào thư mục ngôn ngữ tương ứng và dịch nội dung.

## Thêm Mermaid Support

### Bước 1: Cài Package

```bash
cd astro-site
npm install remark-mermaidjs
```

### Bước 2: Cấu Hình

Thêm vào `astro.config.mjs`:

```javascript
import remarkMermaid from 'remark-mermaidjs';

export default defineConfig({
    markdown: {
        remarkPlugins: [remarkMermaid],
    },
    // ...
});
```

## Custom Sidebar

Mặc định Starlight auto-generates sidebar từ folder structure. Để custom:

```javascript
starlight({
    sidebar: [
        {
            label: 'Kiến Trúc & Kỹ Thuật',
            autogenerate: { directory: 'tech' },
        },
        {
            label: 'Hướng Dẫn Sử Dụng',
            autogenerate: { directory: 'sop' },
        },
        {
            label: 'Tham Chiếu API',
            autogenerate: { directory: 'api' },
        },
    ],
})
```

## Xử Lý Sự Cố

<details>
<summary>🔴 CSS thay đổi không có hiệu lực</summary>

**Nguyên nhân:** CSS cache hoặc sai đường dẫn.

**Giải pháp:**
1. Kiểm tra `customCss` path trong `astro.config.mjs`
2. Hard refresh browser (Cmd+Shift+R)
3. Clear cache: `rm -rf node_modules/.astro`

</details>

## FAQ

<details>
<summary>Q: Có thể dùng Tailwind CSS thay cho custom CSS không?</summary>

**A:** Có, nhưng không khuyến nghị. Starlight đã có design system tốt qua CSS custom properties. Thêm Tailwind sẽ tăng build size không cần thiết.

</details>

---

> Xem thêm: [Hướng dẫn triển khai](../deployment.md) · [Sử dụng CLI](./using-cli.md)
