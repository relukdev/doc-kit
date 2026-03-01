const codeTranslations = {
    en: {
        hero: { badge: "Feature — Verification", title: 'No more guessing.<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Every claim verified. Every line cited.</span>', subtitle: 'Most AI doc tools guess what your code does. <span class="text-white font-medium">DocKit Master traces it. Every claim cites (file:line).</span>', cta: "✦ Analyze Your Codebase — Free", cta2: "See How ↓" },
        problem: { label: "The Trust Problem", title: "AI-generated docs<br>you can't trust.", subtitle: "Generic AI tools hallucinate. DocKit Master doesn't.", items: ["Generic AI writes plausible-sounding but <strong class='text-white'>wrong documentation</strong>", "No way to verify claims — \"trust me, bro\" documentation", "Database schemas described incorrectly → broken integrations", "API auth requirements guessed, not verified", "Architecture diagrams that look right but <strong class='text-white'>don't match reality</strong>"] },
        solution: { label: "Code-Level Tracing", title: "Every claim → (file:line).<br>Verifiable by your team.", subtitle: "DocKit Master inspects actual ORM models, routes, middleware, schemas — and cites every claim.", terminal: { cmd: "bash dockit-master.sh --scope full --format astro", output: ["✓ Tracing ORM models: 31 entities found", "✓ Inspecting route handlers: 67 endpoints", "✓ Mapping middleware chain: auth → validate → handle", "✓ Database relationships: 89 foreign keys traced", "✓ Every claim linked to (file:line) citation", "✅ Verifiable documentation complete!"] } },
        benefits: {
            label: "Trust Through Verification", title: "Documentation your team<br>can actually trust.", items: [
                { icon: "📍", title: "File:Line Citations", desc: "Every technical claim links to exact source code location. No guessing." },
                { icon: "🔍", title: "ORM Tracing", desc: "Inspects actual ORM models — Prisma, Sequelize, TypeORM, Django, SQLAlchemy." },
                { icon: "🛤️", title: "Route Analysis", desc: "Maps every API endpoint with its middleware chain and auth requirements." },
                { icon: "🗄️", title: "Schema Inspection", desc: "Reads actual database schemas, relationships, and constraints." },
                { icon: "🔐", title: "Auth Verification", desc: "Detects and documents actual auth layers — not assumed, verified." },
                { icon: "✅", title: "Team Verifiable", desc: "Any dev can click a citation and verify the claim in source code." }
            ]
        },
        steps: { label: "How It Works", title: "3 steps. Done.", s1: { title: "Install", desc: "Copy doc-kit to skills.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Analyze", desc: "Run full scope analysis.", code: "bash dockit-master.sh" }, s3: { title: "Verify", desc: "Every claim has a citation.", result: "Click any citation → see the exact code. Zero hallucination." } },
        related: { label: "Related", title: "Explore More", links: [{ title: "For CTOs", desc: "Team documentation strategy", href: "../use-cases/cto-tech-leads.html" }, { title: "Knowledge Engine", desc: "Personas and JTBD from code", href: "knowledge-engine.html" }, { title: "SEO & AI", desc: "Make docs discoverable", href: "seo-ai-optimization.html" }] }
    },
    vi: {
        hero: { badge: "Tính Năng — Xác Minh", title: 'Không đoán mò.<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Mọi claim đều verify. Mọi dòng đều trích dẫn.</span>', subtitle: 'Phần lớn AI docs tools đoán code làm gì. <span class="text-white font-medium">DocKit Master trace nó. Mỗi claim trích dẫn (file:dòng).</span>', cta: "✦ Phân Tích Codebase — Miễn Phí", cta2: "Xem Cách ↓" },
        problem: { label: "Vấn Đề Tin Cậy", title: "AI docs<br>không tin được.", subtitle: "AI chung hallucinate. DocKit Master thì không.", items: ["AI viết docs nghe hợp lý nhưng <strong class='text-white'>sai</strong>", "Không cách verify — docs \"tin tôi đi\"", "DB schema mô tả sai → integration hỏng", "API auth bị đoán, không verify", "Architecture diagrams <strong class='text-white'>không khớp thực tế</strong>"] },
        solution: { label: "Trace Code Thực", title: "Mỗi claim → (file:dòng).<br>Team verify được.", subtitle: "DocKit Master inspect ORM, routes, middleware, schemas — trích dẫn mọi claim.", terminal: { cmd: "bash dockit-master.sh --scope full", output: ["✓ Trace ORM: 31 entities", "✓ Routes: 67 endpoints", "✓ Middleware chain mapped", "✓ DB: 89 foreign keys", "✓ Mỗi claim có (file:dòng)", "✅ Docs xác minh hoàn tất!"] } },
        benefits: {
            label: "Tin Cậy Qua Xác Minh", title: "Docs team<br>thực sự tin được.", items: [
                { icon: "📍", title: "File:Dòng Citations", desc: "Mỗi claim link đến source code chính xác." },
                { icon: "🔍", title: "ORM Tracing", desc: "Inspect Prisma, Sequelize, TypeORM, Django." },
                { icon: "🛤️", title: "Route Analysis", desc: "Map mọi endpoint + middleware + auth." },
                { icon: "🗄️", title: "Schema Inspection", desc: "Đọc DB schema, relationships, constraints." },
                { icon: "🔐", title: "Auth Verification", desc: "Detect auth thực tế, không giả định." },
                { icon: "✅", title: "Team Verify", desc: "Click citation → xem code. Zero hallucination." }
            ]
        },
        steps: { label: "Cách Hoạt Động", title: "3 bước.", s1: { title: "Cài", desc: "Copy doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Phân Tích", desc: "Full scope.", code: "bash dockit-master.sh" }, s3: { title: "Verify", desc: "Mỗi claim có citation.", result: "Click → xem code." } },
        related: { label: "Liên Quan", title: "Thêm", links: [{ title: "Cho CTO", desc: "Docs strategy", href: "../use-cases/cto-tech-leads.html" }, { title: "Knowledge Engine", desc: "Personas từ code", href: "knowledge-engine.html" }, { title: "SEO & AI", desc: "Docs dễ tìm", href: "seo-ai-optimization.html" }] }
    },
    ru: {
        hero: { badge: "Функция — Верификация", title: 'Никаких догадок.<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Каждое утверждение проверено.</span>', subtitle: 'Обычные ИИ-инструменты гадают. <span class="text-white font-medium">DocKit Master отслеживает. Каждая ссылка на (файл:строка).</span>', cta: "✦ Анализировать код — бесплатно", cta2: "Как ↓" },
        problem: { label: "Проблема доверия", title: "ИИ-документация<br>которой нельзя верить.", subtitle: "Обычный ИИ галлюцинирует. DocKit Master — нет.", items: ["ИИ пишет правдоподобно, но <strong class='text-white'>неправильно</strong>", "Нельзя проверить утверждения", "Схемы БД описаны неверно", "Auth требования угаданы", "Архитектура <strong class='text-white'>не соответствует реальности</strong>"] },
        solution: { label: "Трассировка кода", title: "Каждое утверждение → (файл:строка).", subtitle: "DocKit Master проверяет ORM, маршруты, middleware.", terminal: { cmd: "bash dockit-master.sh --scope full", output: ["✓ ORM: 31 сущность", "✓ Маршруты: 67", "✓ Middleware mapped", "✓ БД: 89 FK", "✓ Цитаты (файл:строка)", "✅ Верифицируемые docs!"] } },
        benefits: {
            label: "Доверие через проверку", title: "Документация, которой<br>можно верить.", items: [
                { icon: "📍", title: "Файл:Строка", desc: "Каждое утверждение ссылается на код." },
                { icon: "🔍", title: "ORM трассировка", desc: "Prisma, Sequelize, TypeORM, Django." },
                { icon: "🛤️", title: "Анализ маршрутов", desc: "Эндпоинты + middleware + auth." },
                { icon: "🗄️", title: "Инспекция схем", desc: "Реальные схемы БД." },
                { icon: "🔐", title: "Auth верификация", desc: "Реальные auth слои." },
                { icon: "✅", title: "Команда проверит", desc: "Клик → увидеть код." }
            ]
        },
        steps: { label: "Как", title: "3 шага.", s1: { title: "Установка", desc: "Скопируйте.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Анализ", desc: "Full scope.", code: "bash dockit-master.sh" }, s3: { title: "Проверка", desc: "Каждое утверждение.", result: "Клик → код." } },
        related: { label: "Связанное", title: "Ещё", links: [{ title: "Для CTO", desc: "Стратегия", href: "../use-cases/cto-tech-leads.html" }, { title: "Knowledge Engine", desc: "Персоны", href: "knowledge-engine.html" }, { title: "SEO", desc: "Обнаруживаемость", href: "seo-ai-optimization.html" }] }
    },
    zh: {
        hero: { badge: "功能 — 验证", title: '不再猜测。<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">每个声明已验证。每行已引用。</span>', subtitle: '大多数 AI 文档工具靠猜。<span class="text-white font-medium">DocKit Master 追踪。每个声明引用 (文件:行号)。</span>', cta: "✦ 分析代码库 — 免费", cta2: "了解 ↓" },
        problem: { label: "信任问题", title: "AI 文档<br>不可信。", subtitle: "通用 AI 产生幻觉。DocKit Master 不会。", items: ["AI 写的看似合理但<strong class='text-white'>错误</strong>", "无法验证声明", "数据库描述错误", "认证被猜测", "架构图<strong class='text-white'>不匹配实际</strong>"] },
        solution: { label: "代码级追踪", title: "每个声明 → (文件:行号)。", subtitle: "DocKit Master 检查 ORM、路由、中间件。", terminal: { cmd: "bash dockit-master.sh --scope full", output: ["✓ ORM: 31 实体", "✓ 路由: 67", "✓ 中间件已映射", "✓ 数据库: 89 FK", "✓ 引用 (文件:行号)", "✅ 可验证文档！"] } },
        benefits: {
            label: "通过验证建立信任", title: "团队可以<br>真正信任的文档。", items: [
                { icon: "📍", title: "文件:行号引用", desc: "每个声明链接到代码。" },
                { icon: "🔍", title: "ORM 追踪", desc: "Prisma、Sequelize、TypeORM。" },
                { icon: "🛤️", title: "路由分析", desc: "端点 + 中间件 + 认证。" },
                { icon: "🗄️", title: "模式检查", desc: "真实数据库模式。" },
                { icon: "🔐", title: "认证验证", desc: "实际认证层。" },
                { icon: "✅", title: "团队可验证", desc: "点击 → 查看代码。" }
            ]
        },
        steps: { label: "方式", title: "3 步。", s1: { title: "安装", desc: "复制。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "分析", desc: "完整范围。", code: "bash dockit-master.sh" }, s3: { title: "验证", desc: "每个声明有引用。", result: "点击 → 代码。" } },
        related: { label: "相关", title: "更多", links: [{ title: "CTO", desc: "策略", href: "../use-cases/cto-tech-leads.html" }, { title: "知识引擎", desc: "画像", href: "knowledge-engine.html" }, { title: "SEO", desc: "可发现性", href: "seo-ai-optimization.html" }] }
    }
};
