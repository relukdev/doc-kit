const knowledgeTranslations = {
    en: {
        hero: { badge: "Feature — Knowledge Systematization", title: 'Your codebase<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">knows your users.</span>', subtitle: '90% of dev teams can\'t answer "who uses this feature?" <span class="text-white font-medium">Knowledge Engine extracts that from your code.</span>', cta: "✦ Unlock Your Codebase's Knowledge", cta2: "See How ↓" },
        problem: {
            label: "The Knowledge Gap", title: "Who are your users?<br>Your code knows. You don't.", subtitle: "Product decisions without user understanding lead to wasted features.",
            items: ["No formal personas — everyone assumes different users", "JTBD analysis costs <strong class='text-white'>$10,000+</strong> from consultants", "Process flows live in someone's head, not in docs", "User journey maps are outdated or don't exist", "New PMs spend months understanding user context"]
        },
        solution: {
            label: "AI-Powered Knowledge", title: "Personas, JTBD, and Process Flows<br>generated from your codebase.", subtitle: "Knowledge Engine analyzes your features, routes, and data models to build user understanding automatically.",
            terminal: { cmd: "bash doc-gen.sh --type knowledge", output: ["✓ Analyzing user-facing features...", "✓ Generating Buyer Persona: Enterprise IT Manager", "✓ Generating User Persona: Field Technician", "✓ JTBD Canvas: 3 functional, 2 emotional, 1 social job", "✓ Workflow Diagram: Order Processing Flow", "✓ Sequence Diagram: Auth → Dashboard → Report", "✓ Lifecycle: User Onboarding → Active → Renewal", "✅ Knowledge base complete!"] }
        },
        benefits: {
            label: "What You Get", title: "Complete user understanding.<br>From code analysis.", items: [
                { icon: "👤", title: "Buyer & User Personas", desc: "AI generates detailed persona profiles from feature analysis — demographics, goals, pain points." },
                { icon: "🎯", title: "JTBD Canvases", desc: "Functional, Emotional, and Social jobs mapped from your product's capabilities." },
                { icon: "🔄", title: "Workflow Diagrams", desc: "Step-by-step process flows showing how users accomplish tasks in your system." },
                { icon: "📊", title: "Sequence Diagrams", desc: "Technical interaction flows between components, services, and users." },
                { icon: "🗺️", title: "Lifecycle Maps", desc: "User journey from onboarding through active use to renewal/churn." },
                { icon: "📐", title: "Mermaid Visualizations", desc: "All diagrams rendered as beautiful Mermaid charts, dark-mode ready." }
            ]
        },
        steps: { label: "How It Works", title: "3 steps. Done.", s1: { title: "Install", desc: "Copy doc-kit to skills folder.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Analyze", desc: "Select 'knowledge' type.", code: "bash doc-gen.sh" }, s3: { title: "Review", desc: "AI generates personas, JTBD, flows.", result: "Buyer/User Personas + JTBD Canvases + 4 types of Process Flows." } },
        related: { label: "Related", title: "Explore More", links: [{ title: "For CTOs & Tech Leads", desc: "Full team documentation strategy", href: "../use-cases/cto-tech-leads.html" }, { title: "Deep Code Analysis", desc: "How DocKit traces code paths", href: "deep-code-analysis.html" }, { title: "Astro Starlight Output", desc: "Premium docs site", href: "astro-starlight.html" }] }
    },
    vi: {
        hero: { badge: "Tính Năng — Hệ Thống Hóa Kiến Thức", title: 'Codebase của bạn<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">hiểu user hơn bạn tưởng.</span>', subtitle: '90% team dev không trả lời được "ai dùng feature này?" <span class="text-white font-medium">Knowledge Engine trích xuất điều đó từ code.</span>', cta: "✦ Mở Khóa Kiến Thức Codebase", cta2: "Xem Cách ↓" },
        problem: { label: "Khoảng Trống Kiến Thức", title: "User là ai?<br>Code biết. Bạn thì không.", subtitle: "Quyết định sản phẩm không hiểu user = lãng phí features.", items: ["Không có personas chính thức", "JTBD analysis tốn <strong class='text-white'>$10,000+</strong> thuê consultant", "Process flows nằm trong đầu ai đó", "User journey maps lỗi thời hoặc không có", "PM mới mất hàng tháng hiểu user context"] },
        solution: { label: "Knowledge AI", title: "Personas, JTBD, Process Flows<br>tạo từ codebase.", subtitle: "Knowledge Engine phân tích features, routes, data models để xây dựng user understanding.", terminal: { cmd: "bash doc-gen.sh --type knowledge", output: ["✓ Phân tích features...", "✓ Buyer Persona: IT Manager", "✓ User Persona: Kỹ thuật viên", "✓ JTBD Canvas: 3 functional, 2 emotional", "✓ Workflow: Quy trình đặt hàng", "✓ Sequence: Auth → Dashboard → Report", "✓ Lifecycle: Onboarding → Active → Renewal", "✅ Knowledge base hoàn tất!"] } },
        benefits: {
            label: "Bạn Nhận Được", title: "Hiểu user đầy đủ.<br>Từ phân tích code.", items: [
                { icon: "👤", title: "Buyer & User Personas", desc: "AI tạo personas chi tiết từ feature analysis." },
                { icon: "🎯", title: "JTBD Canvases", desc: "Functional, Emotional, Social jobs từ sản phẩm." },
                { icon: "🔄", title: "Workflow Diagrams", desc: "Process flows step-by-step." },
                { icon: "📊", title: "Sequence Diagrams", desc: "Interaction flows giữa components." },
                { icon: "🗺️", title: "Lifecycle Maps", desc: "User journey từ onboarding đến churn." },
                { icon: "📐", title: "Mermaid Visualizations", desc: "Diagrams đẹp, dark-mode ready." }
            ]
        },
        steps: { label: "Cách Hoạt Động", title: "3 bước. Xong.", s1: { title: "Cài Đặt", desc: "Copy doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Phân Tích", desc: "Chọn 'knowledge'.", code: "bash doc-gen.sh" }, s3: { title: "Review", desc: "AI tạo personas, JTBD, flows.", result: "Personas + JTBD + 4 loại Process Flows." } },
        related: { label: "Liên Quan", title: "Khám Phá Thêm", links: [{ title: "Cho CTO", desc: "Chiến lược docs team", href: "../use-cases/cto-tech-leads.html" }, { title: "Phân Tích Code Sâu", desc: "DocKit trace code", href: "deep-code-analysis.html" }, { title: "Astro Starlight", desc: "Docs site premium", href: "astro-starlight.html" }] }
    },
    ru: {
        hero: { badge: "Функция — Систематизация знаний", title: 'Ваша кодовая база<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">знает ваших пользователей.</span>', subtitle: '90% команд не ответят "кто использует эту функцию?" <span class="text-white font-medium">Knowledge Engine извлечёт это из кода.</span>', cta: "✦ Раскройте знания кодовой базы", cta2: "Как это работает ↓" },
        problem: { label: "Пробел в знаниях", title: "Кто ваши пользователи?<br>Код знает. Вы — нет.", subtitle: "Решения без понимания пользователей = потраченные впустую функции.", items: ["Нет формальных персон", "JTBD анализ стоит <strong class='text-white'>$10,000+</strong>", "Процессы только в чьей-то голове", "Карты пользовательских путей устарели", "Новые PM месяцами изучают контекст"] },
        solution: { label: "ИИ-знания", title: "Персоны, JTBD и процессные диаграммы<br>из кодовой базы.", subtitle: "Knowledge Engine анализирует функции, маршруты, модели данных.", terminal: { cmd: "bash doc-gen.sh --type knowledge", output: ["✓ Анализ функций...", "✓ Персона: IT менеджер", "✓ Персона: Техник", "✓ JTBD Canvas", "✓ Процессные диаграммы", "✓ Lifecycle карта", "✅ База знаний готова!"] } },
        benefits: {
            label: "Что вы получаете", title: "Полное понимание пользователей.<br>Из анализа кода.", items: [
                { icon: "👤", title: "Персоны", desc: "Детальные профили из анализа функций." },
                { icon: "🎯", title: "JTBD", desc: "Функциональные, эмоциональные, социальные задачи." },
                { icon: "🔄", title: "Workflow", desc: "Пошаговые процессные потоки." },
                { icon: "📊", title: "Sequence", desc: "Взаимодействия между компонентами." },
                { icon: "🗺️", title: "Lifecycle", desc: "Путь от онбординга до оттока." },
                { icon: "📐", title: "Mermaid", desc: "Красивые диаграммы для тёмной темы." }
            ]
        },
        steps: { label: "Как это работает", title: "3 шага.", s1: { title: "Установка", desc: "Скопируйте doc-kit.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "Анализ", desc: "Выберите 'knowledge'.", code: "bash doc-gen.sh" }, s3: { title: "Обзор", desc: "ИИ создаст персоны и JTBD.", result: "Персоны + JTBD + процессные диаграммы." } },
        related: { label: "Связанное", title: "Узнать больше", links: [{ title: "Для CTO", desc: "Стратегия документации", href: "../use-cases/cto-tech-leads.html" }, { title: "Анализ кода", desc: "Отслеживание кода", href: "deep-code-analysis.html" }, { title: "Astro Starlight", desc: "Премиум-сайт", href: "astro-starlight.html" }] }
    },
    zh: {
        hero: { badge: "功能 — 知识系统化", title: '你的代码库<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">了解你的用户。</span>', subtitle: '90% 的团队无法回答"谁在使用这个功能？"<span class="text-white font-medium">知识引擎从代码中提取答案。</span>', cta: "✦ 解锁代码库知识", cta2: "了解详情 ↓" },
        problem: { label: "知识缺口", title: "用户是谁？<br>代码知道。你不知道。", subtitle: "不了解用户的产品决策 = 浪费功能。", items: ["没有正式的用户画像", "JTBD 分析花费 <strong class='text-white'>$10,000+</strong>", "流程只在某人脑中", "用户旅程图过时或不存在", "新 PM 需要数月理解用户"] },
        solution: { label: "AI 驱动知识", title: "用户画像、JTBD 和流程图<br>从代码库自动生成。", subtitle: "知识引擎分析功能、路由、数据模型。", terminal: { cmd: "bash doc-gen.sh --type knowledge", output: ["✓ 分析功能...", "✓ 买家画像：IT 经理", "✓ 用户画像：技术人员", "✓ JTBD Canvas", "✓ 流程图", "✓ 生命周期图", "✅ 知识库完成！"] } },
        benefits: {
            label: "你将获得", title: "完整的用户理解。<br>来自代码分析。", items: [
                { icon: "👤", title: "买家和用户画像", desc: "从功能分析生成详细画像。" },
                { icon: "🎯", title: "JTBD 画布", desc: "功能性、情感性、社会性工作。" },
                { icon: "🔄", title: "工作流程图", desc: "分步流程。" },
                { icon: "📊", title: "时序图", desc: "组件间的交互流程。" },
                { icon: "🗺️", title: "生命周期图", desc: "从入职到流失的用户旅程。" },
                { icon: "📐", title: "Mermaid 可视化", desc: "精美图表，暗黑模式就绪。" }
            ]
        },
        steps: { label: "运作方式", title: "3 步完成。", s1: { title: "安装", desc: "复制 doc-kit。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" }, s2: { title: "分析", desc: "选择 'knowledge'。", code: "bash doc-gen.sh" }, s3: { title: "查看", desc: "AI 生成画像和 JTBD。", result: "画像 + JTBD + 4 种流程图。" } },
        related: { label: "相关", title: "探索更多", links: [{ title: "CTO 专页", desc: "团队文档策略", href: "../use-cases/cto-tech-leads.html" }, { title: "深度代码分析", desc: "代码追踪", href: "deep-code-analysis.html" }, { title: "Astro Starlight", desc: "高级文档网站", href: "astro-starlight.html" }] }
    }
};
