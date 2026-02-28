const devTranslations = {
    en: {
        hero: {
            badge: "Use Case — Developers",
            title: 'Your code is great.<br>Your docs are <span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">nonexistent.</span>',
            subtitle: 'You know you should write docs. You never will. <span class="text-white font-medium">DocKit Master writes them for you — from your actual code.</span>',
            cta: "✦ Start Documenting — Free",
            cta2: "See How It Works ↓"
        },
        problem: {
            label: "The Pain",
            title: "Writing docs is the task<br>you'll never get to.",
            subtitle: "You're shipping features, fixing bugs, and reviewing PRs. Documentation always loses.",
            items: [
                "README hasn't been updated since <strong class='text-white'>6 months ago</strong>",
                "New team members DM you constantly — \"how does this module work?\"",
                "Architecture decisions live in <strong class='text-white'>old Slack threads</strong> nobody can find",
                "API endpoints have zero documentation — consumers guess the schema",
                "You spend <strong class='text-white'>30% of your time</strong> explaining code instead of writing it"
            ]
        },
        solution: {
            label: "The Solution",
            title: "AI traces your code<br>and writes the docs.",
            subtitle: "DocKit Master reads your actual codebase — ORMs, API routes, data flows — and generates accurate, verifiable documentation.",
            terminal: {
                cmd: "bash dockit-master.sh --scope full --format astro",
                output: [
                    "✓ Scanning 1,247 files across 18 modules...",
                    "✓ Architecture: 5 layers, 31 services mapped",
                    "✓ Database: 42 tables, 127 relationships documented",
                    "✓ API: 89 endpoints with request/response schemas",
                    "✓ Data flows: 14 critical paths traced",
                    "✅ Complete documentation generated in docs/"
                ]
            }
        },
        benefits: {
            label: "Why Devs Love It",
            title: "Zero effort.<br>Always current.",
            items: [
                { icon: "⚡", title: "Zero Manual Writing", desc: "AI reads your code and writes the docs. You review, not create. Ship features instead." },
                { icon: "🔍", title: "Every Claim Cites Code", desc: "All technical statements reference <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(file:line)</code>. No handwaving." },
                { icon: "🏗️", title: "Architecture Docs That Match", desc: "Service maps, data flow diagrams, DB schemas — all generated from the living codebase." },
                { icon: "🔌", title: "API Docs With Examples", desc: "Every endpoint documented with cURL, JavaScript, and Python examples. Consumers love it." },
                { icon: "🔄", title: "Re-run After Every Sprint", desc: "Code changed? Run DocKit Master again. Docs update automatically. No more doc rot." },
                { icon: "📝", title: "Markdown or Astro Site", desc: "Choose plain .md files in your repo or a premium Astro Starlight site with search and dark mode." }
            ]
        },
        steps: {
            label: "How It Works",
            title: "3 steps. Done.",
            s1: { title: "Install", desc: "Copy doc-kit into your AI agent's skills folder.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Scan", desc: "Run the CLI — pick doc type, output format, scope.", code: "bash dockit-master.sh" },
            s3: { title: "Ship", desc: "AI generates everything. Review and deploy.", result: "Architecture, DB, API, SOP docs — ready to deploy." }
        },
        related: {
            label: "Related",
            title: "Explore More",
            links: [
                { title: "Deep Code Analysis", desc: "How DocKit Master traces actual code paths", href: "../features/deep-code-analysis.html" },
                { title: "For CTOs & Tech Leads", desc: "Onboard new devs in days, not weeks", href: "cto-tech-leads.html" },
                { title: "For Product Managers", desc: "SOPs and knowledge systems on autopilot", href: "product-managers.html" }
            ]
        }
    },
    vi: {
        hero: {
            badge: "Dành Cho — Developers",
            title: 'Code của bạn tuyệt vời.<br>Docs của bạn thì <span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">không tồn tại.</span>',
            subtitle: 'Bạn biết mình nên viết docs. Nhưng sẽ không bao giờ làm. <span class="text-white font-medium">DocKit Master viết thay bạn — từ code thực tế.</span>',
            cta: "✦ Bắt Đầu Miễn Phí",
            cta2: "Xem Cách Hoạt Động ↓"
        },
        problem: {
            label: "Nỗi Đau",
            title: "Viết docs là task<br>bạn sẽ không bao giờ làm.",
            subtitle: "Bạn đang ship features, fix bugs, review PRs. Documentation luôn thua.",
            items: [
                "README chưa cập nhật từ <strong class='text-white'>6 tháng trước</strong>",
                "Team mới DM bạn liên tục — \"module này hoạt động thế nào?\"",
                "Quyết định kiến trúc nằm trong <strong class='text-white'>tin nhắn Slack cũ</strong> không ai tìm được",
                "API endpoints không có tài liệu — consumers đoán schema",
                "Bạn mất <strong class='text-white'>30% thời gian</strong> giải thích code thay vì viết code"
            ]
        },
        solution: {
            label: "Giải Pháp",
            title: "AI trace code của bạn<br>và viết docs.",
            subtitle: "DocKit Master đọc codebase thực tế — ORMs, API routes, data flows — và tạo tài liệu chính xác, có thể verify.",
            terminal: {
                cmd: "bash dockit-master.sh --scope full --format astro",
                output: [
                    "✓ Quét 1,247 files trong 18 modules...",
                    "✓ Kiến trúc: 5 layers, 31 services",
                    "✓ Database: 42 bảng, 127 quan hệ",
                    "✓ API: 89 endpoints với request/response schemas",
                    "✓ Data flows: 14 critical paths",
                    "✅ Docs hoàn tất trong docs/"
                ]
            }
        },
        benefits: {
            label: "Tại Sao Dev Yêu Thích",
            title: "Không tốn công sức.<br>Luôn cập nhật.",
            items: [
                { icon: "⚡", title: "Không Viết Thủ Công", desc: "AI đọc code và viết docs. Bạn review, không create. Ship features thay vì viết docs." },
                { icon: "🔍", title: "Mọi Claim Đều Trích Dẫn Code", desc: "Mỗi câu kỹ thuật đều reference <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(file:dòng)</code>." },
                { icon: "🏗️", title: "Architecture Docs Khớp Thực Tế", desc: "Service maps, data flow diagrams, DB schemas — đều từ codebase thực." },
                { icon: "🔌", title: "API Docs Có Ví Dụ", desc: "Mỗi endpoint có docs với cURL, JavaScript, Python examples." },
                { icon: "🔄", title: "Chạy Lại Sau Mỗi Sprint", desc: "Code thay đổi? Chạy lại DocKit Master. Docs tự cập nhật." },
                { icon: "📝", title: "Markdown Hoặc Astro Site", desc: "Chọn .md files hoặc Astro Starlight site premium với search và dark mode." }
            ]
        },
        steps: {
            label: "Cách Hoạt Động",
            title: "3 bước. Xong.",
            s1: { title: "Cài Đặt", desc: "Copy doc-kit vào thư mục skills.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Quét", desc: "Chạy CLI — chọn loại docs, format, scope.", code: "bash dockit-master.sh" },
            s3: { title: "Ship", desc: "AI tạo mọi thứ. Review và deploy.", result: "Kiến trúc, DB, API, SOP docs — sẵn sàng deploy." }
        },
        related: {
            label: "Liên Quan",
            title: "Khám Phá Thêm",
            links: [
                { title: "Phân Tích Code Sâu", desc: "DocKit Master trace code thực tế như thế nào", href: "../features/deep-code-analysis.html" },
                { title: "Cho CTO & Tech Lead", desc: "Onboard dev mới trong vài ngày", href: "cto-tech-leads.html" },
                { title: "Cho Product Managers", desc: "SOPs và hệ thống kiến thức tự động", href: "product-managers.html" }
            ]
        }
    },
    ru: {
        hero: {
            badge: "Для — Разработчиков",
            title: 'Ваш код отличный.<br>Документация <span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">отсутствует.</span>',
            subtitle: 'Вы знаете, что нужно писать документацию. И никогда не будете. <span class="text-white font-medium">DocKit Master напишет за вас — из реального кода.</span>',
            cta: "✦ Начать бесплатно",
            cta2: "Как это работает ↓"
        },
        problem: {
            label: "Проблема",
            title: "Написание документации —<br>задача, до которой вы не дойдёте.",
            subtitle: "Вы выпускаете фичи, исправляете баги, ревьюите PR. Документация всегда проигрывает.",
            items: [
                "README не обновлялся <strong class='text-white'>6 месяцев</strong>",
                "Новые члены команды пишут вам — \"как работает этот модуль?\"",
                "Архитектурные решения живут в <strong class='text-white'>старых тредах Slack</strong>",
                "API эндпоинты без документации — потребители гадают о схеме",
                "Вы тратите <strong class='text-white'>30% времени</strong> на объяснение кода вместо написания"
            ]
        },
        solution: {
            label: "Решение",
            title: "ИИ анализирует ваш код<br>и пишет документацию.",
            subtitle: "DocKit Master читает реальную кодовую базу — ORM, API маршруты, потоки данных — и генерирует точную, верифицируемую документацию.",
            terminal: {
                cmd: "bash dockit-master.sh --scope full --format astro",
                output: [
                    "✓ Сканирование 1 247 файлов в 18 модулях...",
                    "✓ Архитектура: 5 слоёв, 31 сервис",
                    "✓ База данных: 42 таблицы, 127 связей",
                    "✓ API: 89 эндпоинтов со схемами",
                    "✓ Потоки данных: 14 критических путей",
                    "✅ Документация готова в docs/"
                ]
            }
        },
        benefits: {
            label: "Почему разработчики выбирают",
            title: "Без усилий.<br>Всегда актуально.",
            items: [
                { icon: "⚡", title: "Без ручного написания", desc: "ИИ читает код и пишет документацию. Вы ревьюите, а не создаёте." },
                { icon: "🔍", title: "Каждое утверждение ссылается на код", desc: "Все технические утверждения ссылаются на <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(файл:строка)</code>." },
                { icon: "🏗️", title: "Архитектурная документация", desc: "Карты сервисов, диаграммы потоков данных, схемы БД — из живого кода." },
                { icon: "🔌", title: "API документация с примерами", desc: "Каждый эндпоинт с примерами на cURL, JavaScript и Python." },
                { icon: "🔄", title: "Перезапуск после каждого спринта", desc: "Код изменился? Запустите снова. Документация обновится автоматически." },
                { icon: "📝", title: "Markdown или Astro сайт", desc: "Выберите .md файлы или премиум Astro Starlight сайт с поиском и тёмной темой." }
            ]
        },
        steps: {
            label: "Как это работает",
            title: "3 шага. Готово.",
            s1: { title: "Установка", desc: "Скопируйте doc-kit в папку skills.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Сканирование", desc: "Запустите CLI — выберите тип, формат, область.", code: "bash dockit-master.sh" },
            s3: { title: "Запуск", desc: "ИИ генерирует всё. Проверьте и деплойте.", result: "Архитектура, БД, API, SOP документация готова." }
        },
        related: {
            label: "Связанное",
            title: "Узнать больше",
            links: [
                { title: "Глубокий анализ кода", desc: "Как DocKit Master отслеживает пути кода", href: "../features/deep-code-analysis.html" },
                { title: "Для CTO и Tech Lead", desc: "Онбординг за дни, а не недели", href: "cto-tech-leads.html" },
                { title: "Для продуктовых менеджеров", desc: "SOP и системы знаний на автопилоте", href: "product-managers.html" }
            ]
        }
    },
    zh: {
        hero: {
            badge: "适用于 — 开发者",
            title: '你的代码很棒。<br>文档<span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">不存在。</span>',
            subtitle: '你知道应该写文档。但永远不会去写。<span class="text-white font-medium">DocKit Master 替你写——从实际代码中。</span>',
            cta: "✦ 免费开始",
            cta2: "了解运作方式 ↓"
        },
        problem: {
            label: "痛点",
            title: "写文档是你<br>永远不会去做的任务。",
            subtitle: "你在发布功能、修复 bug、审查 PR。文档总是排在最后。",
            items: [
                "README 已经 <strong class='text-white'>6 个月</strong>没更新了",
                "新团队成员不停私信你——「这个模块怎么工作的？」",
                "架构决策存在于<strong class='text-white'>旧的 Slack 消息</strong>中，没人能找到",
                "API 端点没有文档——消费者只能猜测 schema",
                "你花 <strong class='text-white'>30% 的时间</strong>解释代码而不是写代码"
            ]
        },
        solution: {
            label: "解决方案",
            title: "AI 追踪你的代码<br>并编写文档。",
            subtitle: "DocKit Master 读取实际代码库——ORM、API 路由、数据流——并生成准确、可验证的文档。",
            terminal: {
                cmd: "bash dockit-master.sh --scope full --format astro",
                output: [
                    "✓ 扫描 18 个模块中的 1,247 个文件...",
                    "✓ 架构：5 层，31 个服务",
                    "✓ 数据库：42 张表，127 个关系",
                    "✓ API：89 个端点及请求/响应结构",
                    "✓ 数据流：14 条关键路径",
                    "✅ 完整文档已生成到 docs/"
                ]
            }
        },
        benefits: {
            label: "开发者青睐的原因",
            title: "零投入。<br>始终最新。",
            items: [
                { icon: "⚡", title: "无需手动编写", desc: "AI 读取代码并编写文档。你只需审核，不用创建。把时间花在开发功能上。" },
                { icon: "🔍", title: "每个声明都引用代码", desc: "所有技术声明都引用 <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(文件:行号)</code>。" },
                { icon: "🏗️", title: "匹配实际的架构文档", desc: "服务地图、数据流图、数据库 schema——全部从活跃代码库生成。" },
                { icon: "🔌", title: "带示例的 API 文档", desc: "每个端点都有 cURL、JavaScript 和 Python 示例文档。" },
                { icon: "🔄", title: "每个 Sprint 后重新运行", desc: "代码变了？再次运行 DocKit Master。文档自动更新。" },
                { icon: "📝", title: "Markdown 或 Astro 网站", desc: "选择纯 .md 文件或带搜索和暗黑模式的高级 Astro Starlight 网站。" }
            ]
        },
        steps: {
            label: "运作方式",
            title: "3 步完成。",
            s1: { title: "安装", desc: "将 doc-kit 复制到 skills 文件夹。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "扫描", desc: "运行 CLI — 选择文档类型、格式、范围。", code: "bash dockit-master.sh" },
            s3: { title: "发布", desc: "AI 生成一切。审核并部署。", result: "架构、数据库、API、SOP 文档——准备部署。" }
        },
        related: {
            label: "相关",
            title: "探索更多",
            links: [
                { title: "深度代码分析", desc: "DocKit Master 如何追踪实际代码路径", href: "../features/deep-code-analysis.html" },
                { title: "适用于 CTO 和技术负责人", desc: "新人入职从数周缩短到数天", href: "cto-tech-leads.html" },
                { title: "适用于产品经理", desc: "SOP 和知识系统自动化", href: "product-managers.html" }
            ]
        }
    }
};
