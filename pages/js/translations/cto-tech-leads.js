const ctoTranslations = {
    en: {
        hero: {
            badge: "Use Case — Engineering Leaders",
            title: 'Your team\'s knowledge<br>shouldn\'t <span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">walk out the door</span>',
            subtitle: '67% of dev time is spent understanding someone else\'s code. <span class="text-white font-medium">DocKit Master reduces that to near zero.</span>',
            cta: "✦ Start Documenting — Free",
            cta2: "See How It Works ↓"
        },
        problem: {
            label: "The Pain",
            title: "Onboarding hell is real.<br>And expensive.",
            subtitle: "Every new hire costs you weeks. Every departure takes knowledge with them.",
            items: [
                "New devs spend <strong class='text-white'>2-4 weeks</strong> just understanding the codebase",
                "Senior leaves → knowledge walks out the door (bus factor = 1)",
                "Architecture decisions undocumented — \"ask David\" — David quit",
                "Hiring a tech writer: <strong class='text-white'>$5,000–$20,000</strong>, wait 3-6 weeks",
                "Docs written once → outdated in a month"
            ]
        },
        solution: {
            label: "The Solution",
            title: "AI-generated docs that<br>stay in sync with your code.",
            subtitle: "DocKit Master traces actual code paths, maps architecture, and generates verifiable documentation — automatically.",
            terminal: {
                cmd: "bash doc-gen.sh --scope full --format astro",
                output: [
                    "✓ Scanning 847 files across 12 modules...",
                    "✓ Architecture mapped: 4 layers, 23 services",
                    "✓ Database schema: 31 tables, 89 relationships",
                    "✓ API routes: 67 endpoints documented",
                    "✓ Generating Astro Starlight site...",
                    "✅ Complete docs ready in docs/"
                ]
            }
        },
        benefits: {
            label: "Why CTOs Love It",
            title: "From weeks to minutes.<br>From $15K to $0.",
            items: [
                { icon: "⚡", title: "Onboard in 3 Days, Not 3 Weeks", desc: "New devs get architecture docs, data flows, and SOP guides — instantly." },
                { icon: "🛡️", title: "Bus Factor Eliminated", desc: "Knowledge lives in docs, not in people's heads. Nobody is a single point of failure." },
                { icon: "🔄", title: "Always Current", desc: "Re-run the scan after every sprint. Docs reflect actual code, not last quarter's version." },
                { icon: "💰", title: "$0 vs $15,000+", desc: "No tech writers needed. No waiting. Just run DocKit Master and deploy." },
                { icon: "🔍", title: "Verifiable Claims", desc: "Every technical statement cites <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(file:line)</code>. Your team can verify." },
                { icon: "🌍", title: "Global Teams Ready", desc: "Multi-language output for distributed teams across time zones." }
            ]
        },
        steps: {
            label: "How It Works",
            title: "3 steps. Done.",
            s1: { title: "Install", desc: "Copy doc-kit into your AI agent's skills folder.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Scan", desc: "Run the CLI — pick doc type, output format, scope.", code: "bash doc-gen.sh" },
            s3: { title: "Deploy", desc: "Paste the prompt. AI generates everything. Ship it.", result: "Complete architecture, DB, API, SOP docs — ready to deploy." }
        },
        related: {
            label: "Related",
            title: "Explore More",
            links: [
                { title: "Deep Code Analysis", desc: "How DocKit Master traces actual code paths", href: "../features/deep-code-analysis.html" },
                { title: "Knowledge Engine", desc: "Auto-generate Personas, JTBD, Process Flows", href: "../features/knowledge-engine.html" },
                { title: "Astro Starlight Output", desc: "Premium docs site with dark mode", href: "../features/astro-starlight.html" }
            ]
        }
    },
    vi: {
        hero: {
            badge: "Dành Cho — CTO & Tech Lead",
            title: 'Kiến thức team không nên<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">biến mất khi ai đó nghỉ việc</span>',
            subtitle: '67% thời gian dev dành cho việc đọc hiểu code người khác. <span class="text-white font-medium">DocKit Master giảm con số đó xuống gần 0.</span>',
            cta: "✦ Bắt Đầu Miễn Phí",
            cta2: "Xem Cách Hoạt Động ↓"
        },
        problem: {
            label: "Nỗi Đau",
            title: "Onboarding là cơn ác mộng.<br>Và cực kỳ tốn kém.",
            subtitle: "Mỗi nhân viên mới tốn hàng tuần. Mỗi người nghỉ mang theo kiến thức.",
            items: [
                "Dev mới mất <strong class='text-white'>2-4 tuần</strong> chỉ để hiểu codebase",
                "Senior nghỉ → kiến thức biến mất (bus factor = 1)",
                "Quyết định kiến trúc không ghi chép — \"hỏi David\" — David nghỉ rồi",
                "Thuê tech writer: <strong class='text-white'>$5,000–$20,000</strong>, chờ 3-6 tuần",
                "Docs viết xong → lỗi thời sau 1 tháng"
            ]
        },
        solution: {
            label: "Giải Pháp",
            title: "Tài liệu AI tự động<br>luôn đồng bộ với code.",
            subtitle: "DocKit Master trace actual code paths, map kiến trúc, và tạo tài liệu có thể verify — tự động.",
            terminal: {
                cmd: "bash doc-gen.sh --scope full --format astro",
                output: [
                    "✓ Quét 847 files trong 12 modules...",
                    "✓ Kiến trúc: 4 layers, 23 services",
                    "✓ Database schema: 31 bảng, 89 quan hệ",
                    "✓ API routes: 67 endpoints",
                    "✓ Đang tạo Astro Starlight site...",
                    "✅ Docs hoàn tất trong docs/"
                ]
            }
        },
        benefits: {
            label: "Tại Sao CTO Yêu Thích",
            title: "Từ tuần xuống phút.<br>Từ $15K xuống $0.",
            items: [
                { icon: "⚡", title: "Onboard 3 Ngày, Không Phải 3 Tuần", desc: "Dev mới nhận ngay tài liệu kiến trúc, data flow, và SOP." },
                { icon: "🛡️", title: "Loại Bỏ Bus Factor", desc: "Kiến thức nằm trong docs, không trong đầu ai cả." },
                { icon: "🔄", title: "Luôn Cập Nhật", desc: "Chạy lại scan sau mỗi sprint. Docs phản ánh code thực tế." },
                { icon: "💰", title: "$0 Thay Vì $15,000+", desc: "Không cần tech writer. Không chờ đợi. Chạy DocKit Master và deploy." },
                { icon: "🔍", title: "Mọi Claim Đều Verify Được", desc: "Mỗi câu kỹ thuật đều trích dẫn <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(file:dòng)</code>." },
                { icon: "🌍", title: "Sẵn Sàng Team Toàn Cầu", desc: "Đa ngôn ngữ cho team phân tán khắp múi giờ." }
            ]
        },
        steps: {
            label: "Cách Hoạt Động",
            title: "3 bước. Xong.",
            s1: { title: "Cài Đặt", desc: "Copy doc-kit vào thư mục skills.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Quét", desc: "Chạy CLI — chọn loại docs, format, scope.", code: "bash doc-gen.sh" },
            s3: { title: "Deploy", desc: "Paste prompt. AI tạo mọi thứ. Ship thôi.", result: "Kiến trúc, DB, API, SOP docs — sẵn sàng deploy." }
        },
        related: {
            label: "Liên Quan",
            title: "Khám Phá Thêm",
            links: [
                { title: "Phân Tích Code Sâu", desc: "DocKit Master trace code thực tế như thế nào", href: "../features/deep-code-analysis.html" },
                { title: "Knowledge Engine", desc: "Tự động tạo Personas, JTBD, Process Flows", href: "../features/knowledge-engine.html" },
                { title: "Astro Starlight", desc: "Docs site premium với dark mode", href: "../features/astro-starlight.html" }
            ]
        }
    },
    ru: {
        hero: {
            badge: "Для — CTO и Tech Lead",
            title: 'Знания вашей команды<br>не должны <span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">уходить вместе с людьми</span>',
            subtitle: '67% времени разработчиков уходит на понимание чужого кода. <span class="text-white font-medium">DocKit Master сокращает это практически до нуля.</span>',
            cta: "✦ Начать бесплатно",
            cta2: "Как это работает ↓"
        },
        problem: {
            label: "Проблема",
            title: "Онбординг — это ад.<br>И дорогой ад.",
            subtitle: "Каждый новый сотрудник стоит недель. Каждый уход уносит знания.",
            items: [
                "Новые разработчики тратят <strong class='text-white'>2-4 недели</strong> только на понимание кодовой базы",
                "Уходит сениор → знания уходят с ним (bus factor = 1)",
                "Архитектурные решения не задокументированы — \"спросите Давида\" — Давид уволился",
                "Нанять техписателя: <strong class='text-white'>$5,000–$20,000</strong>, ждать 3-6 недель",
                "Документация написана → устарела через месяц"
            ]
        },
        solution: {
            label: "Решение",
            title: "ИИ-документация,<br>всегда синхронизирована с кодом.",
            subtitle: "DocKit Master отслеживает реальные пути кода, строит карту архитектуры и генерирует верифицируемую документацию — автоматически.",
            terminal: {
                cmd: "bash doc-gen.sh --scope full --format astro",
                output: [
                    "✓ Сканирование 847 файлов в 12 модулях...",
                    "✓ Архитектура: 4 слоя, 23 сервиса",
                    "✓ Схема БД: 31 таблица, 89 связей",
                    "✓ API маршруты: 67 эндпоинтов",
                    "✓ Генерация Astro Starlight сайта...",
                    "✅ Документация готова в docs/"
                ]
            }
        },
        benefits: {
            label: "Почему CTO выбирают",
            title: "Из недель в минуты.<br>Из $15K в $0.",
            items: [
                { icon: "⚡", title: "Онбординг за 3 дня, не 3 недели", desc: "Новые разработчики сразу получают документацию по архитектуре, потокам данных и SOP." },
                { icon: "🛡️", title: "Bus Factor устранён", desc: "Знания живут в документации, а не в головах людей." },
                { icon: "🔄", title: "Всегда актуально", desc: "Пересканируйте после каждого спринта. Документация отражает реальный код." },
                { icon: "💰", title: "$0 вместо $15,000+", desc: "Не нужен техписатель. Без ожидания. Запустите DocKit Master и деплойте." },
                { icon: "🔍", title: "Верифицируемые утверждения", desc: "Каждое техническое утверждение ссылается на <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(файл:строка)</code>." },
                { icon: "🌍", title: "Для глобальных команд", desc: "Мультиязычный вывод для распределённых команд." }
            ]
        },
        steps: {
            label: "Как это работает",
            title: "3 шага. Готово.",
            s1: { title: "Установка", desc: "Скопируйте doc-kit в папку skills.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Сканирование", desc: "Запустите CLI — выберите тип, формат, область.", code: "bash doc-gen.sh" },
            s3: { title: "Деплой", desc: "Вставьте промпт. ИИ генерирует всё. Отправляйте.", result: "Архитектура, БД, API, SOP документация готова." }
        },
        related: {
            label: "Связанное",
            title: "Узнать больше",
            links: [
                { title: "Глубокий анализ кода", desc: "Как DocKit Master отслеживает пути кода", href: "../features/deep-code-analysis.html" },
                { title: "Knowledge Engine", desc: "Автогенерация Personas, JTBD, Process Flows", href: "../features/knowledge-engine.html" },
                { title: "Astro Starlight", desc: "Премиум-сайт документации с тёмной темой", href: "../features/astro-starlight.html" }
            ]
        }
    },
    zh: {
        hero: {
            badge: "适用于 — CTO 和技术负责人",
            title: '团队的知识<br>不应该<span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">随着人员离职而消失</span>',
            subtitle: '67% 的开发时间花在理解他人代码上。<span class="text-white font-medium">DocKit Master 将其降至接近零。</span>',
            cta: "✦ 免费开始",
            cta2: "了解运作方式 ↓"
        },
        problem: {
            label: "痛点",
            title: "新人入职是噩梦。<br>而且非常昂贵。",
            subtitle: "每个新员工需要数周。每次离职都带走知识。",
            items: [
                "新开发人员需要 <strong class='text-white'>2-4 周</strong> 才能理解代码库",
                "资深离职 → 知识随之消失（bus factor = 1）",
                "架构决策没有文档记录 — \"问大卫\" — 大卫辞职了",
                "招聘技术文档写手：<strong class='text-white'>$5,000–$20,000</strong>，等待3-6周",
                "文档写完 → 一个月后就过时了"
            ]
        },
        solution: {
            label: "解决方案",
            title: "AI 生成的文档<br>始终与代码同步。",
            subtitle: "DocKit Master 追踪实际代码路径，映射架构，自动生成可验证的文档。",
            terminal: {
                cmd: "bash doc-gen.sh --scope full --format astro",
                output: [
                    "✓ 扫描 12 个模块中的 847 个文件...",
                    "✓ 架构：4 层，23 个服务",
                    "✓ 数据库：31 张表，89 个关系",
                    "✓ API 路由：67 个端点",
                    "✓ 生成 Astro Starlight 网站...",
                    "✅ 文档已完成，位于 docs/"
                ]
            }
        },
        benefits: {
            label: "CTO 青睐的原因",
            title: "从数周到数分钟。<br>从 $15K 到 $0。",
            items: [
                { icon: "⚡", title: "3 天入职，而非 3 周", desc: "新开发人员立即获得架构文档、数据流和 SOP 指南。" },
                { icon: "🛡️", title: "消除 Bus Factor", desc: "知识存在于文档中，而不是某个人的脑海里。" },
                { icon: "🔄", title: "始终最新", desc: "每个 sprint 后重新扫描。文档反映实际代码。" },
                { icon: "💰", title: "$0 替代 $15,000+", desc: "无需技术文档写手。无需等待。运行 DocKit Master 并部署。" },
                { icon: "🔍", title: "可验证的声明", desc: "每个技术声明都引用 <code class='text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs'>(文件:行号)</code>。" },
                { icon: "🌍", title: "全球团队就绪", desc: "为跨时区分布式团队提供多语言输出。" }
            ]
        },
        steps: {
            label: "运作方式",
            title: "3 步完成。",
            s1: { title: "安装", desc: "将 doc-kit 复制到 skills 文件夹。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "扫描", desc: "运行 CLI — 选择文档类型、格式、范围。", code: "bash doc-gen.sh" },
            s3: { title: "部署", desc: "粘贴提示词。AI 生成一切。发布吧。", result: "架构、数据库、API、SOP 文档 — 准备部署。" }
        },
        related: {
            label: "相关",
            title: "探索更多",
            links: [
                { title: "深度代码分析", desc: "DocKit Master 如何追踪实际代码路径", href: "../features/deep-code-analysis.html" },
                { title: "知识引擎", desc: "自动生成用户画像、JTBD、流程图", href: "../features/knowledge-engine.html" },
                { title: "Astro Starlight", desc: "带暗黑模式的高级文档网站", href: "../features/astro-starlight.html" }
            ]
        }
    }
};
