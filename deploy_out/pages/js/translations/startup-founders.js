const startupTranslations = {
    en: {
        hero: { badge: "Use Case — Startup Founders", title: 'Enterprise deals<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">require enterprise docs.</span>', subtitle: '$50K+ deals are slipping away because you don\'t have documentation. <span class="text-white font-medium">DocKit Master fixes that in 10 minutes.</span>', cta: "✦ Get Enterprise-Ready Docs — Free", cta2: "See How ↓" },
        problem: {
            label: "The Deal Killer", title: "No docs = no deal.<br>Enterprise reality.", subtitle: "Enterprise clients require technical documentation before signing.",
            items: ["Enterprise RFPs require technical documentation — <strong class='text-white'>you have none</strong>", "Investors ask about tech maturity — your docs are a blank page", "Security audits need architecture documentation — it doesn't exist", "Competitors with docs look more professional — <strong class='text-white'>even if your code is better</strong>", "Hiring a tech writer: $15K+ and 6 weeks you don't have"]
        },
        solution: { label: "10 Minutes to Enterprise-Ready", title: "Full documentation suite.<br>Professional-grade. Automatic.", subtitle: "DocKit Master generates architecture docs, SOPs, API reference, and a premium docs site — all from your codebase.", terminal: { cmd: "bash dockit-master.sh --type all --format astro --scope full", output: ["✓ Architecture: 4 layers, 23 services mapped", "✓ Database: 31 tables with relationships", "✓ SOP guides for every user flow", "✓ API: 67 endpoints with examples", "✓ Premium Astro Starlight site generated", "✅ Enterprise-ready documentation complete!"] } },
        benefits: {
            label: "For Founders", title: "Close deals. Impress investors.<br>$0 cost.", items: [
                { icon: "🤝", title: "Close Enterprise Deals Faster", desc: "RFP-ready documentation that proves technical maturity." },
                { icon: "📊", title: "Impress Investors", desc: "Show professional documentation that screams 'this team is serious'." },
                { icon: "🛡️", title: "Pass Security Audits", desc: "Architecture docs that satisfy compliance and security reviews." },
                { icon: "💰", title: "$0 vs $15,000+", desc: "No tech writers. No agencies. Just AI and your codebase." },
                { icon: "⚡", title: "10 Minutes, Not 6 Weeks", desc: "Generate everything before the next investor meeting." },
                { icon: "🌍", title: "Multi-Language Ready", desc: "Docs in English, Vietnamese, Chinese, Russian for global markets." }
            ]
        },
        steps: { label: "How It Works", title: "3 steps. Done.", s1: { title: "Install", desc: "Clone and copy doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Generate", desc: "Select 'all' for complete suite.", code: "bash dockit-master.sh" }, s3: { title: "Ship", desc: "Premium docs site, ready for clients.", result: "Architecture + DB + API + SOPs — enterprise-grade output." } },
        related: { label: "Related", title: "Explore More", links: [{ title: "Astro Starlight Output", desc: "Premium docs site with dark mode", href: "../features/astro-starlight.html" }, { title: "For Solo Makers", desc: "One person, complete docs team", href: "solo-makers.html" }, { title: "Knowledge Engine", desc: "Auto-generate Personas and JTBD", href: "../features/knowledge-engine.html" }] }
    },
    vi: {
        hero: { badge: "Dành Cho — Startup Founder", title: 'Deal enterprise<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">yêu cầu docs enterprise.</span>', subtitle: 'Deals $50K+ đang vuột mất vì bạn không có docs. <span class="text-white font-medium">DocKit Master fix trong 10 phút.</span>', cta: "✦ Tạo Docs Enterprise — Miễn Phí", cta2: "Xem Cách ↓" },
        problem: { label: "Kẻ Giết Deal", title: "Không docs = không deal.<br>Thực tế enterprise.", subtitle: "Khách enterprise yêu cầu docs trước khi ký hợp đồng.", items: ["Enterprise RFP yêu cầu docs — <strong class='text-white'>bạn không có</strong>", "Investor hỏi về tech maturity — docs trống trơn", "Security audit cần architecture docs — không tồn tại", "Đối thủ có docs trông pro hơn — <strong class='text-white'>dù code bạn tốt hơn</strong>", "Tech writer: $15K+ và 6 tuần bạn không có"] },
        solution: { label: "10 Phút → Enterprise-Ready", title: "Bộ docs đầy đủ.<br>Professional-grade. Tự động.", subtitle: "DocKit Master tạo architecture, SOPs, API reference, và docs site premium.", terminal: { cmd: "bash dockit-master.sh --type all --format astro", output: ["✓ Architecture: 4 layers, 23 services", "✓ Database: 31 bảng", "✓ SOP guides mọi flow", "✓ API: 67 endpoints", "✓ Astro Starlight site", "✅ Docs enterprise-ready!"] } },
        benefits: {
            label: "Cho Founder", title: "Close deal. Gây ấn tượng investor.<br>$0 chi phí.", items: [
                { icon: "🤝", title: "Close Deal Enterprise Nhanh Hơn", desc: "Docs sẵn sàng cho RFP, chứng minh technical maturity." },
                { icon: "📊", title: "Gây Ấn Tượng Investor", desc: "Docs chuyên nghiệp nói rằng 'team này nghiêm túc'." },
                { icon: "🛡️", title: "Vượt Qua Security Audit", desc: "Architecture docs đáp ứng compliance." },
                { icon: "💰", title: "$0 Thay Vì $15,000+", desc: "Không tech writer. Chỉ AI và codebase." },
                { icon: "⚡", title: "10 Phút, Không 6 Tuần", desc: "Tạo mọi thứ trước buổi gặp investor." },
                { icon: "🌍", title: "Đa Ngôn Ngữ", desc: "Docs Anh, Việt, Trung, Nga cho thị trường global." }
            ]
        },
        steps: { label: "Cách Hoạt Động", title: "3 bước. Xong.", s1: { title: "Cài Đặt", desc: "Clone và copy doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Tạo", desc: "Chọn 'all' cho bộ đầy đủ.", code: "bash dockit-master.sh" }, s3: { title: "Ship", desc: "Docs site premium cho client.", result: "Architecture + DB + API + SOPs — enterprise-grade." } },
        related: { label: "Liên Quan", title: "Khám Phá Thêm", links: [{ title: "Astro Starlight", desc: "Docs premium với dark mode", href: "../features/astro-starlight.html" }, { title: "Solo Makers", desc: "1 người = cả team docs", href: "solo-makers.html" }, { title: "Knowledge Engine", desc: "Tự động Personas và JTBD", href: "../features/knowledge-engine.html" }] }
    },
    ru: {
        hero: { badge: "Для — Основателей стартапов", title: 'Enterprise-сделки<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">требуют enterprise-документации.</span>', subtitle: 'Сделки на $50K+ ускользают из-за отсутствия документации. <span class="text-white font-medium">DocKit Master исправит это за 10 минут.</span>', cta: "✦ Получить enterprise-документацию — бесплатно", cta2: "Как это работает ↓" },
        problem: { label: "Убийца сделок", title: "Нет документации = нет сделки.<br>Enterprise-реальность.", subtitle: "Enterprise-клиенты требуют техдокументацию перед подписанием.", items: ["RFP требуют документацию — <strong class='text-white'>у вас её нет</strong>", "Инвесторы спрашивают о зрелости — docs пустые", "Аудит безопасности требует архитектуру — она не существует", "Конкуренты с docs выглядят профессиональнее", "Техписатель: $15K+ и 6 недель"] },
        solution: { label: "10 минут до enterprise", title: "Полный комплект документации.<br>Профессионального уровня.", subtitle: "DocKit Master генерирует архитектуру, SOP, API и премиум-сайт.", terminal: { cmd: "bash dockit-master.sh --type all --format astro", output: ["✓ Архитектура: 4 слоя, 23 сервиса", "✓ БД: 31 таблица", "✓ SOP руководства", "✓ API: 67 эндпоинтов", "✓ Astro Starlight сайт", "✅ Enterprise-документация готова!"] } },
        benefits: {
            label: "Для основателей", title: "Закрывайте сделки. Впечатляйте инвесторов.<br>$0.", items: [
                { icon: "🤝", title: "Быстрее закрывайте сделки", desc: "Документация для RFP, доказывающая зрелость." },
                { icon: "📊", title: "Впечатлить инвесторов", desc: "Профессиональная документация серьёзной команды." },
                { icon: "🛡️", title: "Пройти аудит безопасности", desc: "Архитектура для compliance." },
                { icon: "💰", title: "$0 вместо $15,000+", desc: "Без техписателей. Только ИИ." },
                { icon: "⚡", title: "10 минут, не 6 недель", desc: "Всё готово до встречи с инвестором." },
                { icon: "🌍", title: "Мультиязычность", desc: "Английский, вьетнамский, китайский, русский." }
            ]
        },
        steps: { label: "Как это работает", title: "3 шага.", s1: { title: "Установка", desc: "Скопируйте doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Генерация", desc: "Выберите 'all'.", code: "bash dockit-master.sh" }, s3: { title: "Деплой", desc: "Премиум-сайт для клиентов.", result: "Архитектура + БД + API + SOP." } },
        related: { label: "Связанное", title: "Узнать больше", links: [{ title: "Astro Starlight", desc: "Премиум-сайт с тёмной темой", href: "../features/astro-starlight.html" }, { title: "Для соло-мейкеров", desc: "Один = целая команда", href: "solo-makers.html" }, { title: "Knowledge Engine", desc: "Персоны и JTBD", href: "../features/knowledge-engine.html" }] }
    },
    zh: {
        hero: { badge: "适用于 — 创业者", title: '企业级交易<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">需要企业级文档。</span>', subtitle: '$50K+ 的交易因为没有文档而流失。<span class="text-white font-medium">DocKit Master 10 分钟解决。</span>', cta: "✦ 获取企业级文档 — 免费", cta2: "了解详情 ↓" },
        problem: { label: "交易杀手", title: "没文档 = 没交易。<br>企业现实。", subtitle: "企业客户在签约前需要技术文档。", items: ["企业 RFP 需要技术文档 — <strong class='text-white'>你没有</strong>", "投资者问技术成熟度 — 文档空白", "安全审计需要架构文档 — 不存在", "有文档的竞争对手看起来更专业", "技术文档写手：$15K+ 加 6 周时间"] },
        solution: { label: "10 分钟到企业级", title: "完整文档套件。<br>专业级。自动化。", subtitle: "DocKit Master 生成架构文档、SOP、API 参考和高级文档网站。", terminal: { cmd: "bash dockit-master.sh --type all --format astro", output: ["✓ 架构：4 层，23 个服务", "✓ 数据库：31 张表", "✓ SOP 指南", "✓ API：67 个端点", "✓ Astro Starlight 网站", "✅ 企业级文档完成！"] } },
        benefits: {
            label: "为创始人", title: "达成交易。打动投资者。<br>$0 成本。", items: [
                { icon: "🤝", title: "更快达成企业交易", desc: "RFP 就绪的文档证明技术成熟度。" },
                { icon: "📊", title: "打动投资者", desc: "专业文档表明'这个团队很认真'。" },
                { icon: "🛡️", title: "通过安全审计", desc: "满足合规要求的架构文档。" },
                { icon: "💰", title: "$0 替代 $15,000+", desc: "无需技术写手。只需 AI。" },
                { icon: "⚡", title: "10 分钟，而非 6 周", desc: "在下次投资者会议前准备好一切。" },
                { icon: "🌍", title: "多语言就绪", desc: "英语、越南语、中文、俄语。" }
            ]
        },
        steps: { label: "运作方式", title: "3 步完成。", s1: { title: "安装", desc: "复制 doc-kit。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "生成", desc: "选择 'all'。", code: "bash dockit-master.sh" }, s3: { title: "部署", desc: "高级文档网站。", result: "架构 + 数据库 + API + SOP。" } },
        related: { label: "相关", title: "探索更多", links: [{ title: "Astro Starlight", desc: "带暗黑模式的高级网站", href: "../features/astro-starlight.html" }, { title: "独立开发者", desc: "一人 = 完整团队", href: "solo-makers.html" }, { title: "知识引擎", desc: "画像和 JTBD", href: "../features/knowledge-engine.html" }] }
    }
};
