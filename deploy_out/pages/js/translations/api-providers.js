const apiTranslations = {
    en: {
        hero: { badge: "Use Case — API Providers", title: 'API docs that match<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">your actual code. Always.</span>', subtitle: 'Every support ticket from bad docs costs $25-50. <span class="text-white font-medium">DocKit Master eliminates that.</span>', cta: "✦ Generate API Docs — Free", cta2: "See How ↓" },
        problem: { label: "The Real Cost", title: "Outdated API docs<br>cost you developers.", subtitle: "Bad docs → confused developers → support tickets → churn.", items: ["API docs are outdated the day they're written", "Developers rage-quit integrations because of <strong class='text-white'>wrong examples</strong>", "Support tickets about API usage cost <strong class='text-white'>$25-50 each</strong>", "Missing auth docs = failed integrations = lost customers", "Swagger/OpenAPI alone isn't enough — devs need real examples"] },
        solution: { label: "Auto-Generated", title: "AI reads your routes, schemas,<br>and generates everything.", subtitle: "DocKit Master inspects actual endpoints, middleware, auth layers — and generates multi-language examples.", terminal: { cmd: "bash dockit-master.sh --type api --format astro", output: ["✓ Scanning API routes: 67 endpoints found", "✓ Auth layer: JWT + API Key documented", "✓ Request/Response schemas extracted", "✓ Error codes: 23 unique codes documented", "✓ Examples generated: cURL, JavaScript, Python", "✅ API Reference site ready!"] } },
        benefits: {
            label: "For API Builders", title: "Stripe-quality docs.<br>Zero manual effort.", items: [
                { icon: "🔌", title: "Multi-Language Examples", desc: "Every endpoint comes with cURL, JavaScript, and Python examples — auto-generated." },
                { icon: "🔐", title: "Auth Auto-Documented", desc: "JWT, API Keys, OAuth — DocKit Master detects and documents your auth layer." },
                { icon: "⚠️", title: "Error Codes Covered", desc: "Every error code mapped with descriptions and resolution steps." },
                { icon: "📊", title: "Schema-Aware", desc: "Request/response bodies with types, required fields, and validation rules." },
                { icon: "🔄", title: "Always In Sync", desc: "Re-run after code changes. Docs match your actual API, not last month's version." },
                { icon: "🔍", title: "Verifiable Citations", desc: "Every endpoint links to <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(file:line)</code> in your codebase." }
            ]
        },
        steps: { label: "How It Works", title: "3 steps. Done.", s1: { title: "Install", desc: "Copy doc-kit to your AI agent.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Scan API", desc: "Select 'api' type in the CLI.", code: "bash dockit-master.sh" }, s3: { title: "Deploy", desc: "AI generates complete API reference.", result: "Endpoints, schemas, auth, errors — with cURL/JS/Python examples." } },
        related: { label: "Related", title: "Explore More", links: [{ title: "Deep Code Analysis", desc: "How DocKit traces code paths", href: "../features/deep-code-analysis.html" }, { title: "For CTOs & Tech Leads", desc: "Full team documentation strategy", href: "cto-tech-leads.html" }, { title: "SEO & AI Optimization", desc: "Make API docs discoverable", href: "../features/seo-ai-optimization.html" }] }
    },
    vi: {
        hero: { badge: "Dành Cho — API Provider", title: 'API docs khớp với<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">code thực tế. Luôn luôn.</span>', subtitle: 'Mỗi support ticket do docs sai tốn $25-50. <span class="text-white font-medium">DocKit Master loại bỏ điều đó.</span>', cta: "✦ Tạo API Docs — Miễn Phí", cta2: "Xem Cách ↓" },
        problem: {
            label: "Chi Phí Thực", title: "API docs lỗi thời<br>mất developer cho bạn.", subtitle: "Docs tệ → dev bối rối → support tickets → churn.",
            items: ["API docs lỗi thời ngay ngày viết xong", "Dev bỏ cuộc vì <strong class='text-white'>examples sai</strong>", "Support ticket về API tốn <strong class='text-white'>$25-50/ticket</strong>", "Thiếu auth docs = integration fail = mất khách", "Swagger/OpenAPI chưa đủ — dev cần examples thực"]
        },
        solution: { label: "Tự Động Tạo", title: "AI đọc routes, schemas,<br>và tạo mọi thứ.", subtitle: "DocKit Master inspect endpoints, middleware, auth — tạo examples đa ngôn ngữ.", terminal: { cmd: "bash dockit-master.sh --type api --format astro", output: ["✓ Quét API routes: 67 endpoints", "✓ Auth: JWT + API Key", "✓ Request/Response schemas", "✓ Error codes: 23 mã", "✓ Examples: cURL, JS, Python", "✅ API Reference sẵn sàng!"] } },
        benefits: {
            label: "Cho API Builder", title: "Docs chất lượng Stripe.<br>Zero effort thủ công.", items: [
                { icon: "🔌", title: "Examples Đa Ngôn Ngữ", desc: "Mỗi endpoint có cURL, JavaScript, Python — tự động." },
                { icon: "🔐", title: "Auth Tự Documented", desc: "JWT, API Keys, OAuth — tự động detect và document." },
                { icon: "⚠️", title: "Error Codes Đầy Đủ", desc: "Mỗi error code có mô tả và cách giải quyết." },
                { icon: "📊", title: "Schema-Aware", desc: "Request/response với types, required fields, validation." },
                { icon: "🔄", title: "Luôn Đồng Bộ", desc: "Chạy lại sau khi code thay đổi." },
                { icon: "🔍", title: "Trích Dẫn Xác Minh", desc: "Mỗi endpoint link tới <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(file:dòng)</code>." }
            ]
        },
        steps: { label: "Cách Hoạt Động", title: "3 bước. Xong.", s1: { title: "Cài Đặt", desc: "Copy doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Quét API", desc: "Chọn 'api' trong CLI.", code: "bash dockit-master.sh" }, s3: { title: "Deploy", desc: "AI tạo API reference đầy đủ.", result: "Endpoints, schemas, auth, errors — cURL/JS/Python examples." } },
        related: { label: "Liên Quan", title: "Khám Phá Thêm", links: [{ title: "Phân Tích Code Sâu", desc: "DocKit trace code thế nào", href: "../features/deep-code-analysis.html" }, { title: "Cho CTO & Tech Lead", desc: "Chiến lược docs team", href: "cto-tech-leads.html" }, { title: "SEO & AI", desc: "API docs dễ tìm", href: "../features/seo-ai-optimization.html" }] }
    },
    ru: {
        hero: { badge: "Для — Разработчиков API", title: 'Документация API,<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">соответствующая реальному коду.</span>', subtitle: 'Каждый тикет из-за плохих docs стоит $25-50. <span class="text-white font-medium">DocKit Master устраняет это.</span>', cta: "✦ Сгенерировать API Docs — бесплатно", cta2: "Как это работает ↓" },
        problem: { label: "Реальная стоимость", title: "Устаревшая API документация<br>стоит вам разработчиков.", subtitle: "Плохие docs → запутанные разработчики → тикеты → отток.", items: ["API docs устаревают в день написания", "Разработчики бросают интеграцию из-за <strong class='text-white'>неправильных примеров</strong>", "Тикеты поддержки стоят <strong class='text-white'>$25-50 каждый</strong>", "Нет документации auth = провал интеграции", "Swagger/OpenAPI недостаточно — нужны реальные примеры"] },
        solution: { label: "Автогенерация", title: "ИИ читает маршруты, схемы<br>и генерирует всё.", subtitle: "DocKit Master проверяет эндпоинты, middleware, аутентификацию.", terminal: { cmd: "bash dockit-master.sh --type api --format astro", output: ["✓ Сканирование: 67 эндпоинтов", "✓ Auth: JWT + API Key", "✓ Схемы запросов/ответов", "✓ Коды ошибок: 23", "✓ Примеры: cURL, JS, Python", "✅ API Reference готов!"] } },
        benefits: {
            label: "Для API разработчиков", title: "Документация уровня Stripe.<br>Без ручной работы.", items: [
                { icon: "🔌", title: "Мультиязычные примеры", desc: "cURL, JavaScript, Python — автоматически." },
                { icon: "🔐", title: "Auth автодокументация", desc: "JWT, API Keys, OAuth — автоопределение." },
                { icon: "⚠️", title: "Коды ошибок", desc: "Описание и решение для каждого кода." },
                { icon: "📊", title: "Понимание схем", desc: "Типы, обязательные поля, валидация." },
                { icon: "🔄", title: "Всегда актуально", desc: "Перезапустите после изменений кода." },
                { icon: "🔍", title: "Верифицируемые ссылки", desc: "Каждый эндпоинт ссылается на файл:строка." }
            ]
        },
        steps: { label: "Как это работает", title: "3 шага. Готово.", s1: { title: "Установка", desc: "Скопируйте doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Сканирование", desc: "Выберите 'api'.", code: "bash dockit-master.sh" }, s3: { title: "Деплой", desc: "ИИ создаст полный API reference.", result: "Эндпоинты, схемы, auth, ошибки — cURL/JS/Python." } },
        related: { label: "Связанное", title: "Узнать больше", links: [{ title: "Глубокий анализ кода", desc: "Как DocKit отслеживает код", href: "../features/deep-code-analysis.html" }, { title: "Для CTO", desc: "Стратегия документации", href: "cto-tech-leads.html" }, { title: "SEO и ИИ", desc: "Обнаруживаемость API docs", href: "../features/seo-ai-optimization.html" }] }
    },
    zh: {
        hero: { badge: "适用于 — API 提供者", title: 'API 文档始终<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">与实际代码匹配。</span>', subtitle: '每个因文档错误产生的工单花费 $25-50。<span class="text-white font-medium">DocKit Master 消除这个问题。</span>', cta: "✦ 生成 API 文档 — 免费", cta2: "了解详情 ↓" },
        problem: { label: "真实成本", title: "过时的 API 文档<br>正在让你失去开发者。", subtitle: "差文档 → 困惑的开发者 → 工单 → 流失。", items: ["API 文档写完当天就过时了", "开发者因为<strong class='text-white'>错误的示例</strong>放弃集成", "API 支持工单每个花费 <strong class='text-white'>$25-50</strong>", "缺少认证文档 = 集成失败 = 客户流失", "仅有 Swagger/OpenAPI 不够 — 开发者需要真实示例"] },
        solution: { label: "自动生成", title: "AI 读取路由、模式，<br>生成一切。", subtitle: "DocKit Master 检查端点、中间件、认证层 — 生成多语言示例。", terminal: { cmd: "bash dockit-master.sh --type api --format astro", output: ["✓ 扫描 API 路由：67 个端点", "✓ 认证：JWT + API Key", "✓ 请求/响应模式", "✓ 错误码：23 个", "✓ 示例：cURL, JS, Python", "✅ API 参考文档就绪！"] } },
        benefits: {
            label: "为 API 构建者", title: "Stripe 级文档。<br>零手动工作。", items: [
                { icon: "🔌", title: "多语言示例", desc: "cURL、JavaScript、Python — 自动生成。" },
                { icon: "🔐", title: "认证自动文档化", desc: "JWT、API Keys、OAuth — 自动检测和记录。" },
                { icon: "⚠️", title: "错误码全覆盖", desc: "每个错误码都有描述和解决步骤。" },
                { icon: "📊", title: "模式感知", desc: "类型、必填字段、验证规则。" },
                { icon: "🔄", title: "始终同步", desc: "代码更改后重新运行。" },
                { icon: "🔍", title: "可验证引用", desc: "每个端点链接到文件:行号。" }
            ]
        },
        steps: { label: "运作方式", title: "3 步完成。", s1: { title: "安装", desc: "复制 doc-kit。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "扫描", desc: "选择 'api' 类型。", code: "bash dockit-master.sh" }, s3: { title: "部署", desc: "AI 生成完整 API 参考。", result: "端点、模式、认证、错误 — cURL/JS/Python 示例。" } },
        related: { label: "相关", title: "探索更多", links: [{ title: "深度代码分析", desc: "DocKit 如何追踪代码路径", href: "../features/deep-code-analysis.html" }, { title: "CTO 专页", desc: "团队文档策略", href: "cto-tech-leads.html" }, { title: "SEO 和 AI", desc: "让 API 文档被发现", href: "../features/seo-ai-optimization.html" }] }
    }
};
