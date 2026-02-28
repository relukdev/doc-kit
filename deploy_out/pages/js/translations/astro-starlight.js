const astroTranslations = {
    en: {
        hero: { badge: "Feature — Premium Output Format", title: 'Docs that look<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">as good as your product.</span>', subtitle: 'Before: text files nobody reads. After: a premium docs site that rivals Stripe\'s. <span class="text-white font-medium">Generated in 5 minutes.</span>', cta: "✦ Generate Your Docs Site — Free", cta2: "See the Preview ↓" },
        problem: { label: "The Ugly Truth", title: "Great docs in ugly format<br>= docs nobody reads.", subtitle: "Presentation matters. Nobody navigates raw Markdown files.", items: ["Plain Markdown files get lost in repos — <strong class='text-white'>nobody reads them</strong>", "Setting up a docs site manually takes <strong class='text-white'>days of config</strong>", "Docusaurus, GitBook need MDX expertise and maintenance", "Light-mode-only sites look dated in 2026", "No built-in search = users can't find anything"] },
        solution: { label: "One Command, Premium Site", title: "Astro Starlight.<br>Zero config. Premium by default.", subtitle: "DocKit Master generates a complete Astro Starlight site with glassmorphism, dark mode, search, and i18n — automatically.", terminal: { cmd: "bash doc-gen.sh --format astro --type all", output: ["✓ Generating Astro Starlight project...", "✓ Applying glassmorphism dark theme...", "✓ Built-in search configured", "✓ Auto-sidebar from doc structure", "✓ Mermaid diagrams with dark-mode colors", "✓ i18n: English + Vietnamese configured", "✅ npm run build — Success! Zero errors."] } },
        benefits: {
            label: "Premium Features", title: "Everything you expect.<br>Nothing to configure.", items: [
                { icon: "🌙", title: "Glassmorphism Dark Theme", desc: "Stunning dark mode with glass effects, subtle gradients, and premium typography." },
                { icon: "🔍", title: "Built-in Search", desc: "Full-text search across all docs — zero configuration needed." },
                { icon: "📊", title: "Dark-Mode Mermaid", desc: "Diagrams rendered with dark-friendly colors. No white backgrounds." },
                { icon: "🌍", title: "i18n Multi-Language", desc: "Built-in internationalization. Auto-detect language, persistent selection." },
                { icon: "📝", title: "Pure Markdown", desc: "No MDX escaping. No JSX. Just write Markdown, it just works." },
                { icon: "⚡", title: "Zero Client JS", desc: "Astro ships zero JavaScript by default. Blazing fast. Perfect Lighthouse." }
            ]
        },
        steps: { label: "How It Works", title: "3 steps. Done.", s1: { title: "Install", desc: "Copy doc-kit to skills.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Generate", desc: "Select 'astro' format.", code: "bash doc-gen.sh" }, s3: { title: "Deploy", desc: "Build and deploy anywhere.", result: "Static site — deploy to Vercel, Netlify, GitHub Pages, anywhere." } },
        related: { label: "Related", title: "Explore More", links: [{ title: "SEO & AI Optimization", desc: "Make your docs discoverable", href: "seo-ai-optimization.html" }, { title: "For Solo Makers", desc: "Premium docs, zero effort", href: "../use-cases/solo-makers.html" }, { title: "Knowledge Engine", desc: "Personas and JTBD from code", href: "knowledge-engine.html" }] }
    },
    vi: {
        hero: { badge: "Tính Năng — Định Dạng Output Premium", title: 'Docs đẹp như<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">sản phẩm của bạn.</span>', subtitle: 'Trước: text files không ai đọc. Sau: docs site premium ngang Stripe. <span class="text-white font-medium">Tạo trong 5 phút.</span>', cta: "✦ Tạo Docs Site — Miễn Phí", cta2: "Xem Preview ↓" },
        problem: { label: "Sự Thật Phũ Phàng", title: "Docs tốt + format xấu<br>= không ai đọc.", subtitle: "Trình bày quan trọng. Không ai navigate raw Markdown.", items: ["Markdown loss trong repo — <strong class='text-white'>không ai đọc</strong>", "Setup docs site thủ công tốn <strong class='text-white'>vài ngày config</strong>", "Docusaurus, GitBook cần MDX expertise", "Site chỉ light-mode trông cũ kỹ năm 2026", "Không search = user không tìm được gì"] },
        solution: { label: "Một Lệnh, Site Premium", title: "Astro Starlight.<br>Zero config. Premium mặc định.", subtitle: "DocKit Master tạo Astro Starlight site với glassmorphism, dark mode, search, i18n — tự động.", terminal: { cmd: "bash doc-gen.sh --format astro --type all", output: ["✓ Tạo Astro Starlight...", "✓ Glassmorphism dark theme...", "✓ Search configured", "✓ Auto-sidebar", "✓ Mermaid dark-mode", "✓ i18n: Anh + Việt", "✅ Build thành công!"] } },
        benefits: {
            label: "Tính Năng Premium", title: "Mọi thứ bạn cần.<br>Zero config.", items: [
                { icon: "🌙", title: "Glassmorphism Dark", desc: "Dark mode với glass effects, gradients, typography premium." },
                { icon: "🔍", title: "Search Tích Hợp", desc: "Full-text search không cần config." },
                { icon: "📊", title: "Mermaid Dark-Mode", desc: "Diagrams với colors dark-friendly." },
                { icon: "🌍", title: "i18n Đa Ngôn Ngữ", desc: "Internationalization tích hợp." },
                { icon: "📝", title: "Pure Markdown", desc: "Không MDX. Không JSX. Viết Markdown, done." },
                { icon: "⚡", title: "Zero Client JS", desc: "Astro không ship JS. Lighthouse hoàn hảo." }
            ]
        },
        steps: { label: "Cách Hoạt Động", title: "3 bước. Xong.", s1: { title: "Cài Đặt", desc: "Copy doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Tạo", desc: "Chọn 'astro'.", code: "bash doc-gen.sh" }, s3: { title: "Deploy", desc: "Build và deploy.", result: "Static site — Vercel, Netlify, GitHub Pages." } },
        related: { label: "Liên Quan", title: "Khám Phá Thêm", links: [{ title: "SEO & AI", desc: "Docs dễ tìm", href: "seo-ai-optimization.html" }, { title: "Solo Makers", desc: "Docs premium, zero effort", href: "../use-cases/solo-makers.html" }, { title: "Knowledge Engine", desc: "Personas từ code", href: "knowledge-engine.html" }] }
    },
    ru: {
        hero: { badge: "Функция — Премиум формат вывода", title: 'Документация,<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">красивая как ваш продукт.</span>', subtitle: 'До: текстовые файлы. После: премиум-сайт уровня Stripe. <span class="text-white font-medium">За 5 минут.</span>', cta: "✦ Создать сайт документации — бесплатно", cta2: "Предпросмотр ↓" },
        problem: { label: "Неприятная правда", title: "Отличные docs в плохом формате<br>= docs, которые никто не читает.", subtitle: "Представление имеет значение.", items: ["Markdown файлы теряются в репозиториях", "Настройка сайта вручную — <strong class='text-white'>дни конфигурации</strong>", "Docusaurus требует MDX опыт", "Только светлая тема — устарело", "Нет поиска = пользователи ничего не найдут"] },
        solution: { label: "Одна команда — премиум", title: "Astro Starlight.<br>Ноль конфигурации.", subtitle: "DocKit Master создаёт сайт с glassmorphism, тёмной темой, поиском и i18n.", terminal: { cmd: "bash doc-gen.sh --format astro", output: ["✓ Генерация Astro Starlight...", "✓ Glassmorphism тема...", "✓ Поиск настроен", "✓ Авто-сайдбар", "✓ Mermaid тёмный режим", "✅ Build успешен!"] } },
        benefits: {
            label: "Премиум функции", title: "Всё что нужно.<br>Без настройки.", items: [
                { icon: "🌙", title: "Glassmorphism", desc: "Тёмный режим со стеклянными эффектами." },
                { icon: "🔍", title: "Встроенный поиск", desc: "Полнотекстовый поиск без настройки." },
                { icon: "📊", title: "Mermaid", desc: "Диаграммы для тёмной темы." },
                { icon: "🌍", title: "i18n", desc: "Встроенная мультиязычность." },
                { icon: "📝", title: "Чистый Markdown", desc: "Без MDX. Без JSX." },
                { icon: "⚡", title: "Ноль клиентского JS", desc: "Astro — молниеносная скорость." }
            ]
        },
        steps: { label: "Как это работает", title: "3 шага.", s1: { title: "Установка", desc: "Скопируйте doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Генерация", desc: "Выберите 'astro'.", code: "bash doc-gen.sh" }, s3: { title: "Деплой", desc: "Build и деплой.", result: "Статический сайт для любого хостинга." } },
        related: { label: "Связанное", title: "Узнать больше", links: [{ title: "SEO и ИИ", desc: "Обнаруживаемость", href: "seo-ai-optimization.html" }, { title: "Для мейкеров", desc: "Премиум без усилий", href: "../use-cases/solo-makers.html" }, { title: "Knowledge Engine", desc: "Персоны из кода", href: "knowledge-engine.html" }] }
    },
    zh: {
        hero: { badge: "功能 — 高级输出格式", title: '文档和产品<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">一样精美。</span>', subtitle: '之前：没人看的文本文件。之后：媲美 Stripe 的高级文档网站。<span class="text-white font-medium">5 分钟生成。</span>', cta: "✦ 生成文档网站 — 免费", cta2: "查看预览 ↓" },
        problem: { label: "残酷真相", title: "好文档 + 丑格式<br>= 没人看。", subtitle: "展示方式很重要。", items: ["Markdown 文件在仓库中被忽略", "手动搭建文档网站需要<strong class='text-white'>数天配置</strong>", "Docusaurus 需要 MDX 经验", "只有浅色模式在 2026 年已过时", "没有搜索 = 用户找不到任何东西"] },
        solution: { label: "一个命令，高级网站", title: "Astro Starlight。<br>零配置。默认高级。", subtitle: "DocKit Master 生成带毛玻璃效果、暗黑模式、搜索和 i18n 的网站。", terminal: { cmd: "bash doc-gen.sh --format astro", output: ["✓ 生成 Astro Starlight...", "✓ 毛玻璃主题...", "✓ 搜索已配置", "✓ 自动侧边栏", "✓ Mermaid 暗黑模式", "✅ 构建成功！"] } },
        benefits: {
            label: "高级功能", title: "一切所需。<br>无需配置。", items: [
                { icon: "🌙", title: "毛玻璃暗黑主题", desc: "玻璃效果、渐变、高级排版。" },
                { icon: "🔍", title: "内置搜索", desc: "全文搜索，无需配置。" },
                { icon: "📊", title: "Mermaid 暗黑模式", desc: "暗色友好的图表。" },
                { icon: "🌍", title: "i18n 多语言", desc: "内置国际化。" },
                { icon: "📝", title: "纯 Markdown", desc: "无需 MDX 或 JSX。" },
                { icon: "⚡", title: "零客户端 JS", desc: "Astro 极速加载。" }
            ]
        },
        steps: { label: "运作方式", title: "3 步完成。", s1: { title: "安装", desc: "复制 doc-kit。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "生成", desc: "选择 'astro'。", code: "bash doc-gen.sh" }, s3: { title: "部署", desc: "构建并部署。", result: "静态网站 — 部署到任何平台。" } },
        related: { label: "相关", title: "探索更多", links: [{ title: "SEO 和 AI", desc: "可发现性", href: "seo-ai-optimization.html" }, { title: "独立开发者", desc: "高级文档零花费", href: "../use-cases/solo-makers.html" }, { title: "知识引擎", desc: "从代码生成画像", href: "knowledge-engine.html" }] }
    }
};
