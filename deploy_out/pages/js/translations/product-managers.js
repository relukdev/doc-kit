const pmTranslations = {
    en: {
        hero: {
            badge: "Use Case — Product Managers",
            title: 'Stop writing SOPs manually.<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Let AI do it.</span>',
            subtitle: 'Product knowledge is scattered across Slack, Notion, and people\'s heads. <span class="text-white font-medium">DocKit Master turns your codebase into a complete knowledge system.</span>',
            cta: "✦ Start Documenting — Free",
            cta2: "See How It Works ↓"
        },
        problem: {
            label: "The Pain",
            title: "Knowledge silos are<br>killing your team.",
            subtitle: "You're the bridge between dev, design, and support — but there's no single source of truth.",
            items: [
                "SOPs are written in Google Docs and <strong class='text-white'>outdated within a month</strong>",
                "Support team keeps asking the same questions — no proper handoff docs",
                "You can't explain the product architecture to stakeholders without asking a dev",
                "User flows exist only in <strong class='text-white'>someone's head</strong> — undocumented",
                "Onboarding new PMs takes weeks because nothing is written down"
            ]
        },
        solution: {
            label: "The Solution",
            title: "AI-generated knowledge base<br>from your actual codebase.",
            subtitle: "DocKit Master scans your code and generates Personas, JTBD canvases, Process Flows, SOPs, and technical docs — automatically.",
            terminal: {
                cmd: "bash dockit-master.sh --scope full --type knowledge,sop",
                output: [
                    "✓ Scanning codebase for user-facing features...",
                    "✓ Generating 3 Buyer Personas + 2 User Personas",
                    "✓ JTBD Canvas: 8 jobs mapped across personas",
                    "✓ Process Flows: 12 workflows visualized (Mermaid)",
                    "✓ SOP Guides: 15 step-by-step procedures generated",
                    "✅ Knowledge base ready — hand off to support & training!"
                ]
            }
        },
        benefits: {
            label: "Why PMs Love It",
            title: "From knowledge chaos<br>to organized system.",
            items: [
                { icon: "📋", title: "SOPs That Write Themselves", desc: "Step-by-step user guides generated from actual code flows. Always accurate, always current." },
                { icon: "🎯", title: "Personas & JTBD from Code", desc: "AI analyzes your codebase to identify user types, their jobs-to-be-done, and pain points." },
                { icon: "🔄", title: "Visual Process Flows", desc: "Mermaid diagrams for every workflow, sequence, and lifecycle — ready for stakeholder presentations." },
                { icon: "🤝", title: "Instant Support Handoff", desc: "Generate training docs for support teams. No more 'ask the dev' for every edge case." },
                { icon: "📊", title: "Stakeholder-Ready Docs", desc: "Architecture overviews and feature maps that non-technical stakeholders can actually understand." },
                { icon: "🌍", title: "Multi-Language Output", desc: "Generate docs in English, Vietnamese, Chinese, Russian — perfect for distributed teams." }
            ]
        },
        steps: {
            label: "How It Works",
            title: "3 steps. Done.",
            s1: { title: "Install", desc: "Copy doc-kit into your AI agent's skills folder.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Generate", desc: "Run the CLI — choose knowledge + SOP doc types.", code: "bash dockit-master.sh" },
            s3: { title: "Hand Off", desc: "Share the generated knowledge base with your team.", result: "Personas, JTBD, Process Flows, SOPs — ready to share." }
        },
        related: {
            label: "Related",
            title: "Explore More",
            links: [
                { title: "Knowledge Engine", desc: "Auto-generate Personas, JTBD, Process Flows", href: "../features/knowledge-engine.html" },
                { title: "For CTOs & Tech Leads", desc: "Onboard new devs in days, not weeks", href: "cto-tech-leads.html" },
                { title: "For Developers", desc: "Stop writing docs manually", href: "developers.html" }
            ]
        }
    },
    vi: {
        hero: {
            badge: "Dành Cho — Product Managers",
            title: 'Đừng viết SOP thủ công nữa.<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Để AI làm.</span>',
            subtitle: 'Kiến thức sản phẩm nằm rải rác trên Slack, Notion, và trong đầu mọi người. <span class="text-white font-medium">DocKit Master biến codebase thành hệ thống kiến thức hoàn chỉnh.</span>',
            cta: "✦ Bắt Đầu Miễn Phí",
            cta2: "Xem Cách Hoạt Động ↓"
        },
        problem: {
            label: "Nỗi Đau",
            title: "Silo kiến thức đang<br>giết chết team bạn.",
            subtitle: "Bạn là cầu nối giữa dev, design, và support — nhưng không có nguồn sự thật duy nhất.",
            items: [
                "SOPs viết trên Google Docs và <strong class='text-white'>lỗi thời sau 1 tháng</strong>",
                "Team support hỏi đi hỏi lại cùng câu hỏi — không có tài liệu bàn giao",
                "Bạn không thể giải thích kiến trúc sản phẩm cho stakeholder mà không hỏi dev",
                "User flows chỉ tồn tại trong <strong class='text-white'>đầu ai đó</strong> — không được ghi chép",
                "Onboarding PM mới mất hàng tuần vì không có gì được viết ra"
            ]
        },
        solution: {
            label: "Giải Pháp",
            title: "Hệ thống kiến thức AI<br>từ codebase thực tế.",
            subtitle: "DocKit Master quét code và tạo Personas, JTBD, Process Flows, SOPs, và tài liệu kỹ thuật — tự động.",
            terminal: {
                cmd: "bash dockit-master.sh --scope full --type knowledge,sop",
                output: [
                    "✓ Quét codebase tìm tính năng user-facing...",
                    "✓ Tạo 3 Buyer Personas + 2 User Personas",
                    "✓ JTBD Canvas: 8 jobs mapped",
                    "✓ Process Flows: 12 workflows (Mermaid)",
                    "✓ SOP Guides: 15 quy trình step-by-step",
                    "✅ Knowledge base hoàn tất — bàn giao cho support & training!"
                ]
            }
        },
        benefits: {
            label: "Tại Sao PM Yêu Thích",
            title: "Từ hỗn loạn kiến thức<br>thành hệ thống có tổ chức.",
            items: [
                { icon: "📋", title: "SOPs Tự Viết", desc: "Hướng dẫn step-by-step từ code flows thực tế. Luôn chính xác, luôn cập nhật." },
                { icon: "🎯", title: "Personas & JTBD Từ Code", desc: "AI phân tích codebase để xác định user types, jobs-to-be-done, và pain points." },
                { icon: "🔄", title: "Process Flows Trực Quan", desc: "Sơ đồ Mermaid cho mọi workflow, sequence, lifecycle — sẵn sàng cho stakeholder." },
                { icon: "🤝", title: "Bàn Giao Support Ngay", desc: "Tạo tài liệu training cho team support. Không cần 'hỏi dev' cho mọi edge case." },
                { icon: "📊", title: "Docs Cho Stakeholder", desc: "Tổng quan kiến trúc và feature maps mà non-technical stakeholders hiểu được." },
                { icon: "🌍", title: "Đa Ngôn Ngữ", desc: "Tạo docs bằng Tiếng Anh, Tiếng Việt, Tiếng Trung, Tiếng Nga — cho team phân tán." }
            ]
        },
        steps: {
            label: "Cách Hoạt Động",
            title: "3 bước. Xong.",
            s1: { title: "Cài Đặt", desc: "Copy doc-kit vào thư mục skills.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Tạo", desc: "Chạy CLI — chọn knowledge + SOP.", code: "bash dockit-master.sh" },
            s3: { title: "Bàn Giao", desc: "Chia sẻ knowledge base cho team.", result: "Personas, JTBD, Process Flows, SOPs — sẵn sàng chia sẻ." }
        },
        related: {
            label: "Liên Quan",
            title: "Khám Phá Thêm",
            links: [
                { title: "Knowledge Engine", desc: "Tự động tạo Personas, JTBD, Process Flows", href: "../features/knowledge-engine.html" },
                { title: "Cho CTO & Tech Lead", desc: "Onboard dev mới trong vài ngày", href: "cto-tech-leads.html" },
                { title: "Cho Developers", desc: "Ngưng viết docs thủ công", href: "developers.html" }
            ]
        }
    },
    ru: {
        hero: {
            badge: "Для — Продуктовых менеджеров",
            title: 'Хватит писать SOP вручную.<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">Пусть AI сделает это.</span>',
            subtitle: 'Знания о продукте разбросаны по Slack, Notion и головам сотрудников. <span class="text-white font-medium">DocKit Master превращает кодовую базу в полноценную систему знаний.</span>',
            cta: "✦ Начать бесплатно",
            cta2: "Как это работает ↓"
        },
        problem: {
            label: "Проблема",
            title: "Информационные силосы<br>убивают вашу команду.",
            subtitle: "Вы — мост между разработкой, дизайном и поддержкой, но единого источника правды нет.",
            items: [
                "SOP написаны в Google Docs и <strong class='text-white'>устаревают за месяц</strong>",
                "Команда поддержки задаёт одни и те же вопросы — нет документации для передачи",
                "Вы не можете объяснить архитектуру стейкхолдерам без разработчика",
                "Пользовательские потоки существуют только <strong class='text-white'>в чьей-то голове</strong>",
                "Онбординг нового PM занимает недели, потому что ничего не записано"
            ]
        },
        solution: {
            label: "Решение",
            title: "ИИ-генерация базы знаний<br>из реального кода.",
            subtitle: "DocKit Master сканирует код и генерирует Персоны, JTBD, Процессные потоки, SOP и техническую документацию — автоматически.",
            terminal: {
                cmd: "bash dockit-master.sh --scope full --type knowledge,sop",
                output: [
                    "✓ Сканирование кодовой базы...",
                    "✓ Генерация 3 Buyer Persona + 2 User Persona",
                    "✓ JTBD Canvas: 8 задач",
                    "✓ Процессные потоки: 12 воркфлоу (Mermaid)",
                    "✓ SOP: 15 пошаговых инструкций",
                    "✅ База знаний готова — передайте поддержке и обучению!"
                ]
            }
        },
        benefits: {
            label: "Почему PM выбирают",
            title: "От хаоса знаний<br>к организованной системе.",
            items: [
                { icon: "📋", title: "SOP, которые пишутся сами", desc: "Пошаговые инструкции из реальных потоков кода. Всегда точные, всегда актуальные." },
                { icon: "🎯", title: "Персоны и JTBD из кода", desc: "ИИ анализирует кодовую базу для определения типов пользователей и их задач." },
                { icon: "🔄", title: "Визуальные процессные потоки", desc: "Mermaid-диаграммы для каждого рабочего процесса — готовы для презентаций." },
                { icon: "🤝", title: "Мгновенная передача поддержке", desc: "Создавайте обучающие материалы для поддержки. Больше никаких «спросите разработчика»." },
                { icon: "📊", title: "Документы для стейкхолдеров", desc: "Обзоры архитектуры, понятные нетехническим стейкхолдерам." },
                { icon: "🌍", title: "Мультиязычный вывод", desc: "Документация на английском, вьетнамском, китайском, русском." }
            ]
        },
        steps: {
            label: "Как это работает",
            title: "3 шага. Готово.",
            s1: { title: "Установка", desc: "Скопируйте doc-kit в папку skills.", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "Генерация", desc: "Запустите CLI — выберите knowledge + SOP.", code: "bash dockit-master.sh" },
            s3: { title: "Передача", desc: "Поделитесь базой знаний с командой.", result: "Персоны, JTBD, потоки, SOP — готовы к передаче." }
        },
        related: {
            label: "Связанное",
            title: "Узнать больше",
            links: [
                { title: "Knowledge Engine", desc: "Автогенерация Персон, JTBD, потоков", href: "../features/knowledge-engine.html" },
                { title: "Для CTO и Tech Lead", desc: "Онбординг за дни, а не недели", href: "cto-tech-leads.html" },
                { title: "Для разработчиков", desc: "Хватит писать документацию вручную", href: "developers.html" }
            ]
        }
    },
    zh: {
        hero: {
            badge: "适用于 — 产品经理",
            title: '别再手动写 SOP 了。<br><span class="bg-gradient-to-r from-accent-light via-magic to-magic-light bg-clip-text text-transparent">让 AI 来做。</span>',
            subtitle: '产品知识分散在 Slack、Notion 和人们的脑海中。<span class="text-white font-medium">DocKit Master 将代码库转化为完整的知识体系。</span>',
            cta: "✦ 免费开始",
            cta2: "了解运作方式 ↓"
        },
        problem: {
            label: "痛点",
            title: "知识孤岛正在<br>拖垮你的团队。",
            subtitle: "你是开发、设计和支持之间的桥梁——但没有唯一的事实来源。",
            items: [
                "SOP 写在 Google Docs 中，<strong class='text-white'>一个月后就过时了</strong>",
                "支持团队反复问同样的问题——没有交接文档",
                "你无法在不问开发人员的情况下向利益相关者解释产品架构",
                "用户流程只存在于<strong class='text-white'>某人的脑海中</strong>——没有文档记录",
                "新 PM 入职需要数周，因为什么都没有写下来"
            ]
        },
        solution: {
            label: "解决方案",
            title: "AI 从实际代码库<br>生成知识库。",
            subtitle: "DocKit Master 扫描代码，自动生成用户画像、JTBD 画布、流程图、SOP 和技术文档。",
            terminal: {
                cmd: "bash dockit-master.sh --scope full --type knowledge,sop",
                output: [
                    "✓ 扫描代码库中面向用户的功能...",
                    "✓ 生成 3 个买家画像 + 2 个用户画像",
                    "✓ JTBD 画布：8 个任务已映射",
                    "✓ 流程图：12 个工作流可视化（Mermaid）",
                    "✓ SOP 指南：15 个步骤流程已生成",
                    "✅ 知识库就绪——交付给支持和培训团队！"
                ]
            }
        },
        benefits: {
            label: "PM 青睐的原因",
            title: "从知识混乱<br>到有序系统。",
            items: [
                { icon: "📋", title: "自动生成的 SOP", desc: "从实际代码流程生成的分步指南。始终准确，始终最新。" },
                { icon: "🎯", title: "从代码中提取用户画像和 JTBD", desc: "AI 分析代码库，识别用户类型、待完成任务和痛点。" },
                { icon: "🔄", title: "可视化流程图", desc: "每个工作流、序列和生命周期的 Mermaid 图表——可直接用于汇报。" },
                { icon: "🤝", title: "即时交付给支持团队", desc: "为支持团队生成培训文档。不再需要「问开发」。" },
                { icon: "📊", title: "面向利益相关者的文档", desc: "非技术利益相关者也能理解的架构概览和功能地图。" },
                { icon: "🌍", title: "多语言输出", desc: "生成英语、越南语、中文、俄语文档——适合分布式团队。" }
            ]
        },
        steps: {
            label: "运作方式",
            title: "3 步完成。",
            s1: { title: "安装", desc: "将 doc-kit 复制到 skills 文件夹。", code: "cp -r doc-kit ~/.gemini/antigravity/skills/" },
            s2: { title: "生成", desc: "运行 CLI — 选择 knowledge + SOP。", code: "bash dockit-master.sh" },
            s3: { title: "交付", desc: "将知识库分享给团队。", result: "用户画像、JTBD、流程图、SOP——准备交付。" }
        },
        related: {
            label: "相关",
            title: "探索更多",
            links: [
                { title: "知识引擎", desc: "自动生成用户画像、JTBD、流程图", href: "../features/knowledge-engine.html" },
                { title: "适用于 CTO 和技术负责人", desc: "新人入职从数周缩短到数天", href: "cto-tech-leads.html" },
                { title: "适用于开发者", desc: "不再手动编写文档", href: "developers.html" }
            ]
        }
    }
};
