# Sub-Landing Pages — DocKit Master

## Mục Tiêu

8 trang landing phụ (4 use-case + 4 feature), **i18n 4 ngôn ngữ** (EN/VI/RU/ZH) bằng JavaScript — mỗi trang chỉ 1 file HTML.

---

## Kiến Trúc

```
pages/
├── use-cases/
│   ├── cto-tech-leads.html
│   ├── solo-makers.html
│   ├── api-providers.html
│   └── startup-founders.html
├── features/
│   ├── knowledge-engine.html
│   ├── astro-starlight.html
│   ├── seo-ai-optimization.html
│   └── deep-code-analysis.html
├── css/
│   └── sub-page.css            ← styles bổ sung cho sub-pages
└── js/
    ├── i18n.js                 ← i18n engine (shared)
    └── translations/
        ├── cto-tech-leads.js    ← translations cho từng trang
        ├── solo-makers.js
        ├── api-providers.js
        ├── startup-founders.js
        ├── knowledge-engine.js
        ├── astro-starlight.js
        ├── seo-ai-optimization.js
        ├── deep-code-analysis.js
        └── shared.js            ← navbar, footer, CTA chung
```

**Tổng: 8 HTML + 1 CSS + 10 JS = 19 files** (thay vì 32 HTML)

---

## i18n Engine (`i18n.js`)

### Cơ chế

```html
<!-- HTML dùng data-i18n attribute -->
<h1 data-i18n="hero.title">Documentation that Writes Itself</h1>
<p data-i18n="hero.subtitle">One scan = complete knowledge base</p>
```

```js
// i18n.js — core engine
const I18n = {
  currentLang: 'en',
  translations: {},

  init(pageTranslations) {
    this.translations = pageTranslations;
    this.currentLang = localStorage.getItem('dockit-lang') 
      || navigator.language.slice(0,2) 
      || 'en';
    // Fallback nếu lang không hỗ trợ
    if (!['en','vi','ru','zh'].includes(this.currentLang)) 
      this.currentLang = 'en';
    this.apply();
  },

  switchTo(lang) {
    this.currentLang = lang;
    localStorage.setItem('dockit-lang', lang);
    this.apply();
    // Update lang attribute cho SEO
    document.documentElement.lang = lang;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = this.get(key);
      if (text) el.innerHTML = text;
    });
    // Update active state trên language switcher
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('text-white', btn.dataset.lang === this.currentLang);
      btn.classList.toggle('text-zinc-500', btn.dataset.lang !== this.currentLang);
    });
  },

  get(key) {
    const keys = key.split('.');
    let val = this.translations[this.currentLang];
    for (const k of keys) { val = val?.[k]; }
    return val ?? this.translations['en']?.[keys.reduce((o,k) => o?.[k], undefined)];
  }
};
```

### Language Switcher (trong Navbar)

```html
<div class="flex items-center gap-1.5 text-xs font-medium">
  <button data-lang="en" onclick="I18n.switchTo('en')" 
    class="px-2 py-1 rounded-lg hover:bg-white/10 transition">EN</button>
  <button data-lang="vi" onclick="I18n.switchTo('vi')" 
    class="px-2 py-1 rounded-lg hover:bg-white/10 transition">VI</button>
  <button data-lang="ru" onclick="I18n.switchTo('ru')" 
    class="px-2 py-1 rounded-lg hover:bg-white/10 transition">RU</button>
  <button data-lang="zh" onclick="I18n.switchTo('zh')" 
    class="px-2 py-1 rounded-lg hover:bg-white/10 transition">ZH</button>
</div>
```

### Đặc điểm:
- **Auto-detect** ngôn ngữ từ `navigator.language`
- **Persist** lựa chọn vào `localStorage`
- **Fallback** về EN nếu key thiếu
- **HTML support** — dùng `innerHTML` để hỗ trợ `<span>`, `<br>`, v.v.

---

## Translation File Mẫu (`translations/cto-tech-leads.js`)

```js
const translations = {
  en: {
    hero: {
      badge: "Use Case — Engineering Leaders",
      title: "Your team's knowledge shouldn't<br>walk out the door",
      subtitle: "67% of dev time is spent understanding someone else's code. DocKit Master reduces that to near zero.",
      cta: "✦ Start Documenting — Free",
      cta2: "See How It Works ↓"
    },
    problem: { ... },
    solution: { ... },
    // ...
  },
  vi: {
    hero: {
      badge: "Dành Cho — CTO & Tech Lead",
      title: "Kiến thức team không nên<br>biến mất khi ai đó nghỉ việc",
      subtitle: "67% thời gian dev dành cho việc đọc hiểu code người khác. DocKit Master giảm con số đó xuống gần 0.",
      cta: "✦ Bắt Đầu Miễn Phí",
      cta2: "Xem Cách Hoạt Động ↓"
    },
    // ...
  },
  ru: { ... },
  zh: { ... }
};
```

---

## 8 Trang — Tóm Tắt Content Strategy

### Use-Case Pages

| # | Trang | Hook Type | Primary KW | Persona |
|---|-------|-----------|------------|---------|
| 1 | **CTOs & Tech Leads** | Data Shock | `automated code documentation tool` | CTO, VP Eng, 30-50 tuổi |
| 2 | **Solo Makers** | Before/After | `ai documentation generator` | Indie hacker, 22-40 |
| 3 | **API Providers** | Pain Agitation | `auto generate api documentation` | Backend dev, SaaS PM |
| 4 | **Startup Founders** | FOMO | `startup documentation toolkit` | CEO/founder, seed-A |

### Feature Deep-Dive Pages

| # | Trang | Hook Type | Primary KW | Focus |
|---|-------|-----------|------------|-------|
| 5 | **Knowledge Engine** | Insider Secret | `automated persona generation tool` | Personas, JTBD, Flows |
| 6 | **Astro Starlight** | Before/After | `astro starlight docs template` | Premium output |
| 7 | **SEO & AI/LLM** | Data Shock | `seo optimized documentation` | Discoverability |
| 8 | **Deep Code Analysis** | Contrarian | `ai code analysis documentation` | Citations, tracing |

### Page Template Structure (mỗi trang theo SB7)

```
1. Navbar + Language Switcher ← shared
2. Hero — Hook cá nhân hóa
3. Problem — 3 levels (External + Internal + Philosophical)
4. Solution Demo — Terminal/diagram/screenshot
5. Benefits — 3-6 items cụ thể
6. How It Works (mini) — 3 bước
7. CTA — Direct + Transitional
8. Related Pages — 2-3 links
9. Footer ← shared
```

---

## Navigation Updates cho `index.html`

- **Persona cards** (Who Is This For) → link đến use-case pages
- **Doc type cards** → link đến feature pages
- **Footer** → thêm links "Use Cases" + "Features"

---

## Verification

1. **Mở mỗi trang** trong browser, kiểm tra responsive
2. **Click language switcher** EN → VI → RU → ZH, verify text thay đổi đúng
3. **Refresh page** — verify language persist qua localStorage
4. **Check SEO:** mỗi trang có unique `<title>`, `<meta description>`, 1 `<h1>`
5. **Check links:** cross-links giữa pages hoạt động, link về home đúng

---

## Thứ Tự Triển Khai

1. Tạo `pages/js/i18n.js` + `pages/js/translations/shared.js`
2. Tạo `pages/css/sub-page.css`
3. Tạo 8 HTML files với EN content + `data-i18n` attributes
4. Tạo 8 translation JS files (EN + VI + RU + ZH)
5. Update `index.html` — thêm links đến sub-pages
6. Verify tất cả trong browser
