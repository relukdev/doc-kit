const seoTranslations = {
    en: {
        hero: { badge: "Feature — Discoverability", title: 'Documentation that<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Google finds AND AI understands.</span>', subtitle: '93% of docs sites are NOT indexed by Google. <span class="text-white font-medium">DocKit Master ensures you\'re in the top 7%.</span>', cta: "✦ Make Docs Discoverable — Free", cta2: "See How ↓" },
        problem: {
            label: "Invisible Docs", title: "Great docs.<br>Nobody can find them.", subtitle: "Without SEO, your docs are invisible to Google and AI.",
            items: ["No meta tags — <strong class='text-white'>Google ignores you</strong>", "Missing sitemaps → search engines can't crawl", "AI tools can't parse efficiently", "Broken heading hierarchy", "No internal linking — orphaned pages"]
        },
        solution: {
            label: "Built-in SEO Engine", title: "SEO audit + AI optimization.<br>Automatic.", subtitle: "DocKit Master generates SEO-optimized docs with meta tags, schema, sitemaps, and AI-friendly structure.",
            terminal: { cmd: "bash doc-gen.sh --seo yes --llm yes", output: ["✓ Title tags ≤60 chars ✓", "✓ Meta descriptions ✓", "✓ Schema markup: FAQ, HowTo ✓", "✓ XML Sitemap (47 URLs)", "✓ Internal links: 4.2/page ✓", "✓ LLM optimization ✓", "✅ SEO score: 94/100"] }
        },
        benefits: {
            label: "Discoverability Stack", title: "Found by Google.<br>Understood by AI.", items: [
                { icon: "🔍", title: "Auto SEO Audit", desc: "Title tags, meta descriptions, heading hierarchy — auto optimized." },
                { icon: "📋", title: "Schema Markup", desc: "FAQ, HowTo, Article schemas for rich snippets." },
                { icon: "🗺️", title: "Sitemap Generation", desc: "XML sitemap + URL list for search engines and AI." },
                { icon: "🤖", title: "AI/LLM-Ready", desc: "Structured for AI parsing. NotebookLM-friendly." },
                { icon: "🔗", title: "Internal Linking", desc: "Auto cross-references. No orphaned content." },
                { icon: "📈", title: "Content Guidelines", desc: "SEO-friendly rules baked into every doc." }
            ]
        },
        steps: { label: "How It Works", title: "3 steps. Done.", s1: { title: "Install", desc: "Copy doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Generate", desc: "Enable SEO + LLM.", code: "bash doc-gen.sh" }, s3: { title: "Deploy", desc: "SEO-ready out of the box.", result: "Meta + schema + sitemap + AI — all automatic." } },
        related: { label: "Related", title: "Explore More", links: [{ title: "Astro Starlight", desc: "Premium docs site", href: "astro-starlight.html" }, { title: "Deep Code Analysis", desc: "Verifiable docs", href: "deep-code-analysis.html" }, { title: "API Providers", desc: "Discoverable API docs", href: "../use-cases/api-providers.html" }] }
    },
    vi: {
        hero: { badge: "Tính Năng — Khả Năng Tìm Thấy", title: 'Docs<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Google tìm được VÀ AI hiểu.</span>', subtitle: '93% docs site KHÔNG được index. <span class="text-white font-medium">DocKit Master đưa bạn vào top 7%.</span>', cta: "✦ Docs Dễ Tìm — Miễn Phí", cta2: "Xem Cách ↓" },
        problem: { label: "Docs Vô Hình", title: "Docs tuyệt vời.<br>Không ai tìm được.", subtitle: "Không SEO = docs vô hình.", items: ["Không meta — <strong class='text-white'>Google bỏ qua</strong>", "Thiếu sitemap", "AI không parse được", "Heading sai thứ tự", "Không internal links"] },
        solution: { label: "SEO Tích Hợp", title: "SEO + AI tối ưu.<br>Tự động.", subtitle: "DocKit Master tạo docs SEO với meta, schema, sitemaps.", terminal: { cmd: "bash doc-gen.sh --seo yes --llm yes", output: ["✓ Titles ≤60 chars ✓", "✓ Meta ✓", "✓ Schema ✓", "✓ Sitemap ✓", "✓ Links 4.2/page ✓", "✓ LLM ✓", "✅ SEO: 94/100"] } },
        benefits: {
            label: "Stack Tìm Kiếm", title: "Google tìm.<br>AI hiểu.", items: [
                { icon: "🔍", title: "Auto SEO", desc: "Title, meta, headings tự động." },
                { icon: "📋", title: "Schema", desc: "FAQ, HowTo rich snippets." },
                { icon: "🗺️", title: "Sitemap", desc: "XML + URL list." },
                { icon: "🤖", title: "AI-Ready", desc: "NotebookLM-friendly." },
                { icon: "🔗", title: "Internal Links", desc: "Cross-references tự động." },
                { icon: "📈", title: "Content Rules", desc: "SEO rules tích hợp." }
            ]
        },
        steps: { label: "Cách Hoạt Động", title: "3 bước.", s1: { title: "Cài", desc: "Copy.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Tạo", desc: "Bật SEO+LLM.", code: "bash doc-gen.sh" }, s3: { title: "Deploy", desc: "SEO sẵn.", result: "Meta+schema+sitemap+AI." } },
        related: { label: "Liên Quan", title: "Thêm", links: [{ title: "Astro Starlight", desc: "Docs premium", href: "astro-starlight.html" }, { title: "Code Sâu", desc: "Docs verify", href: "deep-code-analysis.html" }, { title: "API", desc: "API docs dễ tìm", href: "../use-cases/api-providers.html" }] }
    },
    ru: {
        hero: { badge: "Функция — Обнаруживаемость", title: 'Документация<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">для Google И ИИ.</span>', subtitle: '93% сайтов docs не индексируются. <span class="text-white font-medium">DocKit Master — в топ-7%.</span>', cta: "✦ Сделать docs обнаруживаемыми", cta2: "Как ↓" },
        problem: { label: "Невидимые docs", title: "Отличные docs.<br>Никто не находит.", subtitle: "Без SEO docs невидимы.", items: ["Нет мета-тегов", "Нет sitemap", "ИИ не парсит", "Заголовки нарушены", "Нет внутренних ссылок"] },
        solution: { label: "Встроенный SEO", title: "SEO + ИИ.<br>Автоматически.", subtitle: "SEO-оптимизированная документация.", terminal: { cmd: "bash doc-gen.sh --seo yes", output: ["✓ Заголовки ✓", "✓ Мета ✓", "✓ Schema ✓", "✓ Sitemap ✓", "✓ Ссылки ✓", "✅ SEO: 94/100"] } },
        benefits: {
            label: "Обнаруживаемость", title: "Google находит.<br>ИИ понимает.", items: [
                { icon: "🔍", title: "Авто SEO", desc: "Заголовки и мета автоматически." },
                { icon: "📋", title: "Schema", desc: "Rich snippets." },
                { icon: "🗺️", title: "Sitemap", desc: "XML + текст." },
                { icon: "🤖", title: "ИИ-готово", desc: "NotebookLM." },
                { icon: "🔗", title: "Ссылки", desc: "Кросс-ссылки." },
                { icon: "📈", title: "Правила", desc: "SEO встроено." }
            ]
        },
        steps: { label: "Как", title: "3 шага.", s1: { title: "Установка", desc: "Скопируйте.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Генерация", desc: "SEO+LLM.", code: "bash doc-gen.sh" }, s3: { title: "Деплой", desc: "Готово.", result: "Мета+schema+sitemap." } },
        related: { label: "Связанное", title: "Ещё", links: [{ title: "Astro Starlight", desc: "Премиум", href: "astro-starlight.html" }, { title: "Анализ кода", desc: "Верифицируемо", href: "deep-code-analysis.html" }, { title: "API", desc: "API docs", href: "../use-cases/api-providers.html" }] }
    },
    zh: {
        hero: { badge: "功能 — 可发现性", title: '文档<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Google 能找，AI 能懂。</span>', subtitle: '93% 文档站未被收录。<span class="text-white font-medium">DocKit Master 确保前 7%。</span>', cta: "✦ 让文档可被发现", cta2: "了解 ↓" },
        problem: { label: "隐形文档", title: "好文档。<br>找不到。", subtitle: "无 SEO = 隐形。", items: ["无 meta — <strong class='text-white'>Google 忽略</strong>", "无 sitemap", "AI 无法解析", "标题混乱", "无内部链接"] },
        solution: { label: "内置 SEO", title: "SEO + AI。<br>自动。", subtitle: "SEO 优化的文档。", terminal: { cmd: "bash doc-gen.sh --seo yes", output: ["✓ 标题 ✓", "✓ Meta ✓", "✓ Schema ✓", "✓ Sitemap ✓", "✓ 链接 ✓", "✅ SEO: 94/100"] } },
        benefits: {
            label: "可发现性", title: "Google 找到。<br>AI 理解。", items: [
                { icon: "🔍", title: "自动 SEO", desc: "标题和描述自动优化。" },
                { icon: "📋", title: "Schema", desc: "富摘要。" },
                { icon: "🗺️", title: "站点地图", desc: "XML + 文本。" },
                { icon: "🤖", title: "AI 就绪", desc: "NotebookLM 友好。" },
                { icon: "🔗", title: "内部链接", desc: "交叉引用。" },
                { icon: "📈", title: "规则", desc: "SEO 内置。" }
            ]
        },
        steps: { label: "方式", title: "3 步。", s1: { title: "安装", desc: "复制。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "生成", desc: "SEO+LLM。", code: "bash doc-gen.sh" }, s3: { title: "部署", desc: "就绪。", result: "Meta+schema+sitemap。" } },
        related: { label: "相关", title: "更多", links: [{ title: "Astro Starlight", desc: "高级网站", href: "astro-starlight.html" }, { title: "代码分析", desc: "可验证", href: "deep-code-analysis.html" }, { title: "API", desc: "API 文档", href: "../use-cases/api-providers.html" }] }
    }
};
