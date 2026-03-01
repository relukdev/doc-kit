/**
 * landing.js — Translations for DocKit Master main landing page
 */
const landingTranslations = {
    en: {
        nav: {
            home: "Home", features: "Features", docs: "Docs Site", claw: "Claw",
            getStarted: "Get Started Free"
        },
        hero: {
            badge: "Google Antigravity Toolkit",
            title1: "Documentation that",
            title2: "Writes Itself",
            desc: 'Unleash your AI agent. One scan = complete knowledge base:<br class="hidden sm:block"><span class="text-white font-medium">Personas, JTBD, Process Flows, Tech Docs, SOPs, API References</span> — all automated.',
            subdesc: "Output as structured Markdown or a premium Astro Starlight site with glassmorphism, dark mode, and rich diagrams.",
            cta1: "✦ Get Started — 60 Seconds",
            cta2: "See the Magic ↓",
            stat1: "Doc Types",
            stat2: "Output Formats",
            stat3: "AI Sub-Skills",
            stat4: "Forever Free"
        },
        problem: {
            label: "The Real Problem",
            title: 'Your codebase is amazing.<br>Your docs are... nonexistent.',
            subtitle: "This is the reality for 90% of dev teams and solo makers.",
            before: "Without DocKit Master",
            beforeItems: [
                '"We\'ll write docs later" — later never comes',
                "New team members spend weeks understanding the codebase",
                "API docs are outdated the day they're written",
                "Hiring a technical writer: $5,000–$20,000. Wait 3–6 weeks.",
                'SOPs? "Just ask David" — but David left last month.'
            ],
            after: "With DocKit Master",
            afterItems: [
                'Complete docs generated in <span class="text-white font-medium">minutes</span>, not weeks',
                'AI traces <span class="text-white font-medium">actual code paths</span> — no shallow analysis',
                'Every claim cites <span class="text-white font-medium">(file:line_number)</span> — verifiable',
                "$0 cost. Zero waiting. Deploy-ready docs.",
                "Premium Astro Starlight site with dark mode, diagrams, search"
            ],
            quote: '"Good documentation isn\'t a luxury — it\'s the difference between a <span class="text-white">product</span> and a <span class="text-white">project</span>."'
        },
        magic: {
            label: "The Magic",
            title: "One scan. Complete knowledge base.",
            subtitle: "DocKit Master orchestrates 11 AI sub-skills to analyze, systematize, and write your entire knowledge base + documentation suite."
        },
        features: {
            deepCode: { title: "Deep Code Analysis", desc: "Traces actual code paths, inspects ORMs, maps API routes. No more guessing or shallow descriptions." },
            diagrams: { title: "Intelligent Diagrams", desc: "Beautiful Mermaid diagrams for Data Flows, ER Diagrams, and System Architecture — dark-mode ready." },
            dualOutput: { title: "Dual Output Formats", desc: "Clean Markdown files or a premium Astro Starlight site with glassmorphism, search, and sidebar navigation." },
            ux: { title: "UX-Powered Docs", desc: "Applies Hick's Law, Miller's Law, progressive disclosure. Docs that are scannable, not overwhelming." },
            zeroShallow: { title: "Zero Shallow Analysis", desc: 'Every technical claim cites <code class="text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs">(file_path:line_number)</code>. Verifiable by design.' },
            multiLang: { title: "Multi-Language Output", desc: "Auto-detect chat language. Support for English, Vietnamese, Chinese, Russian, and more." },
            knowledge: { title: "Knowledge Engine", desc: "Auto-generate Personas, JTBD Canvases, and 4 types of Process Flow diagrams from your codebase." },
            seo: { title: "SEO Optimized", desc: "Built-in SEO checklist, keyword strategy, content writing guidelines, sitemap generation, and robots directives." },
            ai: { title: "AI/LLM-Ready", desc: "Documentation structured for AI parsing. NotebookLM-friendly sitemaps, text fallbacks for diagrams, clean UTF-8." }
        },
        personas: {
            label: "Built for",
            title: 'Your code deserves great docs.<br>Now it gets them automatically.',
            cto: { title: "🏗️ CTOs & Tech Leads", desc: "Onboard new devs in days, not weeks. Architecture docs always current." },
            dev: { title: "💻 Developers", desc: "Stop writing docs manually. Let AI trace the code and generate everything." },
            pm: { title: "📋 Product Managers", desc: "SOP guides with visual flows. Hand off to support and training teams." },
            startup: { title: "🚀 Startup Founders", desc: "Ship professional docs for investors and enterprise clients. Zero extra cost." },
            solo: { title: "💡 Solo Makers", desc: "One person = entire docs team. Technical + user-facing, all automated." },
            api: { title: "🔌 API Providers", desc: "Auto-generate endpoint docs with examples in cURL, JS, and Python." }
        },
        how: {
            label: "Surprisingly Simple",
            title: "3 steps. Done.",
            subtitle: "No complicated setup. No config files. Just run and go.",
            step1: { title: "Install", desc: "Copy doc-kit into your Antigravity skills folder. One command." },
            step2: { title: "Generate Prompt", desc: "Run the interactive CLI to pick doc type, output format, and language." },
            step3: { title: "Let AI Work", desc: "Paste the prompt. AI orchestrates 11 skills to systematize and document." }
        },
        docTypes: {
            label: "Under the Hood",
            title: '5 doc types. 11 AI sub-skills.<br>Complete knowledge base.',
            subtitle: "Each document type is powered by dedicated AI skills with strict content guidelines, SEO rules, citation standards, and UX principles baked in.",
            knowledge: { title: "Knowledge", desc: "Buyer & User Personas • JTBD Canvases • Workflow, Sequence, Lifecycle & Journey diagrams." },
            tech: { title: "Technical Docs", desc: "Architecture • Database Schema • Deployment • Data Flow diagrams. All with Mermaid visualizations." },
            sop: { title: "SOP User Guides", desc: "Persona Context → Process Flow → Steps → Journey → Troubleshooting → FAQ. Enriched with knowledge." },
            apiRef: { title: "API Reference", desc: "Endpoints, schemas, auth, error codes. Multi-language examples in cURL, JavaScript, Python." },
            hicksLaw: "≤7 TOC items. Progressive disclosure for advanced content.",
            millersLaw: "Information chunked into groups of 5-9. Scannable hierarchy.",
            wcag: "Focus-visible rings, contrast ratios, reduced motion support."
        },
        output: {
            label: "Choose Your Output",
            title: 'Markdown or Astro Starlight.<br>Your call.',
            markdown: { title: "Markdown", subtitle: "Clean, portable, version-controlled" },
            astro: { title: "Astro Starlight", subtitle: "Blazing-fast static site, zero client JS" }
        },
        claw: {
            label: "AI Agent Platforms",
            title: "Works with",
            titleHighlight: "OpenClaw & ZeroClaw",
            subtitle: "Generate docs through Telegram chat or Rust-native CLI. Create design systems. Code with them. All from one skill.",
            viewGuide: "🐾 ⚡ View Full Claw Integration Guide →"
        },
        start: {
            label: "Get Started",
            title: "60 seconds. Free. Forever.",
            subtitle: "Just copy the folder. No dependencies. No credit card.",
            tryPrompt: "Then open your AI tool and try:",
            prompt: '"Generate complete documentation for my project — all types, astro format, full scope"',
            working: "If the AI mentions"
        },
        stats: {
            label: "By the Numbers",
            title: "5 doc types. 11 AI sub-skills. 6 UX Laws."
        },
        footer: {
            tagline: "Your code dreams it. AI documents it. DocKit Master makes it beautiful."
        }
    },
    vi: {
        nav: {
            home: "Trang Chủ", features: "Tính Năng", docs: "Tài Liệu", claw: "Claw",
            getStarted: "Bắt Đầu Miễn Phí"
        },
        hero: {
            badge: "Google Antigravity Toolkit",
            title1: "Tài liệu tự động",
            title2: "Viết Chính Nó",
            desc: 'Giải phóng AI agent của bạn. Một lần quét = knowledge base hoàn chỉnh:<br class="hidden sm:block"><span class="text-white font-medium">Personas, JTBD, Process Flows, Tech Docs, SOPs, API References</span> — tất cả tự động.',
            subdesc: "Xuất ra Markdown có cấu trúc hoặc trang Astro Starlight cao cấp với glassmorphism, dark mode, và biểu đồ phong phú.",
            cta1: "✦ Bắt Đầu — 60 Giây",
            cta2: "Xem Phép Thuật ↓",
            stat1: "Loại Tài Liệu",
            stat2: "Định Dạng",
            stat3: "AI Sub-Skills",
            stat4: "Miễn Phí Mãi"
        },
        problem: {
            label: "Vấn Đề Thực Sự",
            title: 'Codebase của bạn tuyệt vời.<br>Tài liệu thì... không tồn tại.',
            subtitle: "Đây là thực tế của 90% team dev và makers solo.",
            before: "Không có DocKit Master",
            beforeItems: [
                '"Viết docs sau" — sau chẳng bao giờ đến',
                "Thành viên mới mất hàng tuần để hiểu codebase",
                "API docs lỗi thời ngay ngày viết xong",
                "Thuê technical writer: $5,000–$20,000. Đợi 3–6 tuần.",
                'SOPs? "Hỏi David đi" — nhưng David nghỉ tháng trước.'
            ],
            after: "Với DocKit Master",
            afterItems: [
                'Docs hoàn chỉnh trong <span class="text-white font-medium">vài phút</span>, không phải vài tuần',
                'AI trace <span class="text-white font-medium">code paths thực tế</span> — không phân tích nông',
                'Mọi claim trích dẫn <span class="text-white font-medium">(file:line_number)</span> — có thể kiểm chứng',
                "$0. Không đợi. Docs sẵn sàng deploy.",
                "Trang Astro Starlight cao cấp với dark mode, biểu đồ, search"
            ],
            quote: '"Tài liệu tốt không phải xa xỉ phẩm — nó là sự khác biệt giữa một <span class="text-white">sản phẩm</span> và một <span class="text-white">dự án</span>."'
        },
        magic: {
            label: "Phép Thuật",
            title: "Một lần quét. Knowledge base hoàn chỉnh.",
            subtitle: "DocKit Master điều phối 11 AI sub-skills để phân tích, hệ thống hóa, và viết toàn bộ knowledge base + bộ tài liệu."
        },
        features: {
            deepCode: { title: "Phân Tích Code Sâu", desc: "Trace code paths thực tế, kiểm tra ORMs, map API routes. Không còn đoán hay mô tả nông." },
            diagrams: { title: "Biểu Đồ Thông Minh", desc: "Biểu đồ Mermaid cho Data Flows, ER Diagrams, và System Architecture — hỗ trợ dark-mode." },
            dualOutput: { title: "Hai Định Dạng Xuất", desc: "File Markdown sạch hoặc trang Astro Starlight cao cấp với glassmorphism, search, và sidebar." },
            ux: { title: "Docs Theo UX", desc: "Áp dụng Hick's Law, Miller's Law, progressive disclosure. Docs dễ scan, không overwhelm." },
            zeroShallow: { title: "Phân Tích Không Nông", desc: 'Mọi claim kỹ thuật trích dẫn <code class="text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs">(file_path:line_number)</code>. Kiểm chứng được.' },
            multiLang: { title: "Đa Ngôn Ngữ", desc: "Tự nhận diện ngôn ngữ chat. Hỗ trợ Tiếng Anh, Tiếng Việt, Tiếng Trung, Tiếng Nga, và nhiều hơn." },
            knowledge: { title: "Knowledge Engine", desc: "Tự tạo Personas, JTBD Canvases, và 4 loại Process Flow diagrams từ codebase." },
            seo: { title: "Tối Ưu SEO", desc: "SEO checklist tích hợp, chiến lược keyword, content writing guidelines, sitemap, và robots." },
            ai: { title: "Sẵn Sàng AI/LLM", desc: "Tài liệu cấu trúc cho AI parsing. Sitemaps thân thiện NotebookLM, text fallbacks, UTF-8 sạch." }
        },
        personas: {
            label: "Dành Cho",
            title: 'Code của bạn xứng đáng có docs tuyệt vời.<br>Giờ nó có tự động.',
            cto: { title: "🏗️ CTOs & Tech Leads", desc: "Onboard dev mới trong ngày, không phải tuần. Architecture docs luôn cập nhật." },
            dev: { title: "💻 Developers", desc: "Ngừng viết docs thủ công. Để AI trace code và tạo mọi thứ." },
            pm: { title: "📋 Product Managers", desc: "SOP guides với visual flows. Bàn giao cho team hỗ trợ và đào tạo." },
            startup: { title: "🚀 Startup Founders", desc: "Ship docs chuyên nghiệp cho nhà đầu tư và khách hàng enterprise. Zero chi phí." },
            solo: { title: "💡 Solo Makers", desc: "Một người = cả team docs. Technical + user-facing, tất cả tự động." },
            api: { title: "🔌 API Providers", desc: "Tự tạo endpoint docs với ví dụ bằng cURL, JS, và Python." }
        },
        how: {
            label: "Đơn Giản Bất Ngờ",
            title: "3 bước. Xong.",
            subtitle: "Không setup phức tạp. Không file config. Chỉ chạy thôi.",
            step1: { title: "Cài Đặt", desc: "Copy doc-kit vào thư mục skills Antigravity. Một lệnh." },
            step2: { title: "Tạo Prompt", desc: "Chạy CLI tương tác để chọn loại docs, format, và ngôn ngữ." },
            step3: { title: "Để AI Làm", desc: "Paste prompt. AI điều phối 11 skills để hệ thống hóa và tài liệu hóa." }
        },
        docTypes: {
            label: "Bên Trong",
            title: '5 loại docs. 11 AI sub-skills.<br>Knowledge base hoàn chỉnh.',
            subtitle: "Mỗi loại tài liệu được hỗ trợ bởi các AI skills chuyên dụng với quy tắc nội dung, SEO, tiêu chuẩn trích dẫn, và nguyên tắc UX.",
            knowledge: { title: "Knowledge", desc: "Buyer & User Personas • JTBD Canvases • Workflow, Sequence, Lifecycle & Journey diagrams." },
            tech: { title: "Technical Docs", desc: "Architecture • Database Schema • Deployment • Data Flow. Tất cả với Mermaid." },
            sop: { title: "SOP User Guides", desc: "Persona Context → Process Flow → Steps → Journey → Troubleshooting → FAQ." },
            apiRef: { title: "API Reference", desc: "Endpoints, schemas, auth, error codes. Ví dụ đa ngôn ngữ: cURL, JavaScript, Python." },
            hicksLaw: "≤7 mục TOC. Progressive disclosure cho nội dung nâng cao.",
            millersLaw: "Thông tin chia nhóm 5-9. Hierarchy dễ scan.",
            wcag: "Focus-visible rings, contrast ratios, reduced motion support."
        },
        output: {
            label: "Chọn Output",
            title: 'Markdown hay Astro Starlight.<br>Bạn chọn.',
            markdown: { title: "Markdown", subtitle: "Sạch, portable, version-controlled" },
            astro: { title: "Astro Starlight", subtitle: "Static site siêu nhanh, zero client JS" }
        },
        claw: {
            label: "Nền Tảng AI Agent",
            title: "Hoạt động với",
            titleHighlight: "OpenClaw & ZeroClaw",
            subtitle: "Tạo docs qua chat Telegram hoặc CLI Rust-native. Tạo design systems. Code với chúng. Tất cả từ một skill.",
            viewGuide: "🐾 ⚡ Xem Hướng Dẫn Tích Hợp Claw →"
        },
        start: {
            label: "Bắt Đầu",
            title: "60 giây. Miễn phí. Mãi mãi.",
            subtitle: "Chỉ copy folder. Không dependencies. Không cần thẻ.",
            tryPrompt: "Rồi mở công cụ AI và thử:",
            prompt: '"Tạo tài liệu hoàn chỉnh cho dự án — tất cả loại, astro format, full scope"',
            working: "Nếu AI nhắc đến"
        },
        stats: {
            label: "Con Số",
            title: "5 loại docs. 11 AI sub-skills. 6 UX Laws."
        },
        footer: {
            tagline: "Code của bạn mơ ước. AI tài liệu hóa. DocKit Master làm nó đẹp."
        }
    },
    ru: {
        nav: {
            home: "Главная", features: "Функции", docs: "Документация", claw: "Claw",
            getStarted: "Начать бесплатно"
        },
        hero: {
            badge: "Google Antigravity Toolkit",
            title1: "Документация, которая",
            title2: "Пишет Себя",
            desc: 'Раскройте потенциал вашего AI-агента. Одно сканирование = полная база знаний:<br class="hidden sm:block"><span class="text-white font-medium">Персоны, JTBD, Процессные диаграммы, Техническая документация, SOP, API Справочник</span> — всё автоматически.',
            subdesc: "Результат в виде структурированного Markdown или премиального сайта на Astro Starlight с glassmorphism, тёмной темой и диаграммами.",
            cta1: "✦ Начать — 60 Секунд",
            cta2: "Увидеть Магию ↓",
            stat1: "Типов Документов",
            stat2: "Форматов",
            stat3: "AI Под-Навыков",
            stat4: "Навсегда Бесплатно"
        },
        problem: {
            label: "Реальная Проблема",
            title: 'Ваша кодовая база великолепна.<br>Ваша документация... отсутствует.',
            subtitle: "Это реальность для 90% команд разработчиков и соло-мейкеров.",
            before: "Без DocKit Master",
            beforeItems: [
                '"Мы напишем документацию позже" — позже не наступает',
                "Новые сотрудники тратят недели на изучение кодовой базы",
                "API-документация устаревает в день написания",
                "Нанять технического писателя: $5,000–$20,000. Ждать 3–6 недель.",
                'SOP? "Спросите Дмитрия" — но Дмитрий ушёл в прошлом месяце.'
            ],
            after: "С DocKit Master",
            afterItems: [
                'Полная документация за <span class="text-white font-medium">минуты</span>, не недели',
                'AI отслеживает <span class="text-white font-medium">реальные пути кода</span> — без поверхностного анализа',
                'Каждое утверждение цитирует <span class="text-white font-medium">(file:line_number)</span> — проверяемо',
                "$0 стоимости. Без ожидания. Готово к деплою.",
                "Премиальный сайт Astro Starlight с тёмной темой, диаграммами, поиском"
            ],
            quote: '"Хорошая документация — не роскошь, а разница между <span class="text-white">продуктом</span> и <span class="text-white">проектом</span>."'
        },
        magic: {
            label: "Магия",
            title: "Одно сканирование. Полная база знаний.",
            subtitle: "DocKit Master управляет 11 AI под-навыками для анализа, систематизации и написания полной базы знаний + документации."
        },
        features: {
            deepCode: { title: "Глубокий Анализ Кода", desc: "Отслеживает реальные пути кода, проверяет ORM, маршруты API. Без догадок." },
            diagrams: { title: "Интеллектуальные Диаграммы", desc: "Красивые Mermaid-диаграммы: потоки данных, ER-диаграммы, архитектура — с тёмной темой." },
            dualOutput: { title: "Два Формата", desc: "Чистые Markdown-файлы или премиальный сайт Astro Starlight с glassmorphism, поиском и навигацией." },
            ux: { title: "UX-Документация", desc: "Закон Хика, Закон Миллера, прогрессивное раскрытие. Документация, которую легко сканировать." },
            zeroShallow: { title: "Без Поверхностного Анализа", desc: 'Каждое утверждение цитирует <code class="text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs">(file_path:line_number)</code>. Проверяемо.' },
            multiLang: { title: "Мультиязычность", desc: "Автоопределение языка чата. Поддержка английского, вьетнамского, китайского, русского и других." },
            knowledge: { title: "Движок Знаний", desc: "Автоматическая генерация персон, канвасов JTBD и 4 типов диаграмм процессов из кодовой базы." },
            seo: { title: "SEO Оптимизация", desc: "Встроенный SEO чеклист, стратегия ключевых слов, руководство по контенту, генерация sitemap." },
            ai: { title: "AI/LLM-Ready", desc: "Документация для AI парсинга. NotebookLM-совместимые сайтмапы, текстовые альтернативы для диаграмм." }
        },
        personas: {
            label: "Создано Для",
            title: 'Ваш код заслуживает отличной документации.<br>Теперь он получает её автоматически.',
            cto: { title: "🏗️ CTO и Техлиды", desc: "Онбординг новых разработчиков за дни, а не недели. Документация архитектуры всегда актуальна." },
            dev: { title: "💻 Разработчики", desc: "Прекратите писать документацию вручную. Пусть AI проанализирует код и сгенерирует всё." },
            pm: { title: "📋 Продакт-Менеджеры", desc: "SOP-руководства с визуальными схемами. Передайте команде поддержки и обучения." },
            startup: { title: "🚀 Основатели Стартапов", desc: "Профессиональная документация для инвесторов и корпоративных клиентов. Бесплатно." },
            solo: { title: "💡 Инди-Разработчики", desc: "Один человек = целая команда документации. Техническая + пользовательская, автоматически." },
            api: { title: "🔌 API Провайдеры", desc: "Автогенерация документации эндпоинтов с примерами на cURL, JS и Python." }
        },
        how: {
            label: "Удивительно Просто",
            title: "3 шага. Готово.",
            subtitle: "Никакой сложной настройки. Никаких конфигов. Просто запустите.",
            step1: { title: "Установка", desc: "Скопируйте doc-kit в папку навыков Antigravity. Одна команда." },
            step2: { title: "Создайте Промпт", desc: "Запустите интерактивный CLI для выбора типа документации, формата и языка." },
            step3: { title: "AI Работает", desc: "Вставьте промпт. AI координирует 11 навыков для систематизации и документирования." }
        },
        docTypes: {
            label: "Под Капотом",
            title: '5 типов документации. 11 AI под-навыков.<br>Полная база знаний.',
            subtitle: "Каждый тип документации поддерживается специализированными AI-навыками с правилами контента, SEO, стандартами цитирования и UX-принципами.",
            knowledge: { title: "Знания", desc: "Buyer & User Personas • JTBD Canvases • Workflow, Sequence, Lifecycle & Journey диаграммы." },
            tech: { title: "Техническая Документация", desc: "Архитектура • Схема БД • Деплой • Потоки данных. Всё с Mermaid-визуализациями." },
            sop: { title: "SOP Руководства", desc: "Контекст Персоны → Процесс → Шаги → Путь → Устранение неисправностей → FAQ." },
            apiRef: { title: "API Справочник", desc: "Эндпоинты, схемы, аутентификация, коды ошибок. Мультиязычные примеры: cURL, JavaScript, Python." },
            hicksLaw: "≤7 пунктов оглавления. Прогрессивное раскрытие продвинутого контента.",
            millersLaw: "Информация разбита на группы по 5-9. Сканируемая иерархия.",
            wcag: "Focus-visible, контраст, поддержка reduced motion."
        },
        output: {
            label: "Выберите Формат",
            title: 'Markdown или Astro Starlight.<br>Ваш выбор.',
            markdown: { title: "Markdown", subtitle: "Чистый, переносимый, под контролем версий" },
            astro: { title: "Astro Starlight", subtitle: "Молниеносный статический сайт, без клиентского JS" }
        },
        claw: {
            label: "Платформы AI Агентов",
            title: "Работает с",
            titleHighlight: "OpenClaw и ZeroClaw",
            subtitle: "Генерируйте документацию через чат Telegram или Rust-native CLI. Создавайте дизайн-системы. Пишите код. Всё из одного навыка.",
            viewGuide: "🐾 ⚡ Полное руководство по интеграции Claw →"
        },
        start: {
            label: "Начать",
            title: "60 секунд. Бесплатно. Навсегда.",
            subtitle: "Просто скопируйте папку. Без зависимостей. Без кредитной карты.",
            tryPrompt: "Затем откройте AI-инструмент и попробуйте:",
            prompt: '"Создайте полную документацию для моего проекта — все типы, формат astro, полный охват"',
            working: "Если AI упоминает"
        },
        stats: {
            label: "В Цифрах",
            title: "5 типов документации. 11 AI под-навыков. 6 UX Законов."
        },
        footer: {
            tagline: "Ваш код мечтает об этом. ИИ документирует это. DocKit Master делает это красиво."
        }
    },
    zh: {
        nav: {
            home: "首页", features: "功能", docs: "文档", claw: "Claw",
            getStarted: "免费开始"
        },
        hero: {
            badge: "Google Antigravity Toolkit",
            title1: "文档自动",
            title2: "编写自己",
            desc: '释放你的AI代理。一次扫描 = 完整知识库：<br class="hidden sm:block"><span class="text-white font-medium">用户画像、JTBD、流程图、技术文档、SOP、API参考</span> — 全部自动化。',
            subdesc: "输出为结构化Markdown或高级Astro Starlight站点，带有毛玻璃效果、暗模式和丰富图表。",
            cta1: "✦ 开始使用 — 60 秒",
            cta2: "查看魔法 ↓",
            stat1: "文档类型",
            stat2: "输出格式",
            stat3: "AI子技能",
            stat4: "永久免费"
        },
        problem: {
            label: "真正的问题",
            title: '你的代码很棒。<br>你的文档...不存在。',
            subtitle: "这是90%开发团队和独立开发者的现实。",
            before: "没有DocKit Master",
            beforeItems: [
                '"我们以后写文档" — 以后永远不会来',
                "新团队成员花数周理解代码库",
                "API文档写完当天就过时了",
                "聘请技术作家：$5,000–$20,000。等待3–6周。",
                'SOP？"问大卫" — 但大卫上个月离职了。'
            ],
            after: "使用DocKit Master",
            afterItems: [
                '完整文档在<span class="text-white font-medium">几分钟</span>内生成，而不是几周',
                'AI追踪<span class="text-white font-medium">实际代码路径</span> — 不是浅层分析',
                '每个声明引用<span class="text-white font-medium">(file:line_number)</span> — 可验证',
                "$0成本。零等待。部署就绪的文档。",
                "高级Astro Starlight站点，带暗模式、图表、搜索"
            ],
            quote: '"好的文档不是奢侈品 — 它是<span class="text-white">产品</span>和<span class="text-white">项目</span>之间的区别。"'
        },
        magic: {
            label: "魔法",
            title: "一次扫描。完整知识库。",
            subtitle: "DocKit Master协调11个AI子技能来分析、系统化并编写你的完整知识库+文档套件。"
        },
        features: {
            deepCode: { title: "深度代码分析", desc: "追踪实际代码路径，检查ORM，映射API路由。不再猜测或浅层描述。" },
            diagrams: { title: "智能图表", desc: "美观的Mermaid图表：数据流、ER图和系统架构 — 支持暗模式。" },
            dualOutput: { title: "双输出格式", desc: "干净的Markdown文件或高级Astro Starlight站点，带毛玻璃效果、搜索和侧边栏导航。" },
            ux: { title: "UX驱动文档", desc: "应用希克定律、米勒定律、渐进式披露。文档可扫描，不会令人困惑。" },
            zeroShallow: { title: "零浅层分析", desc: '每个技术声明引用<code class="text-accent-light bg-white/5 px-1.5 py-0.5 rounded text-xs">(file_path:line_number)</code>。可验证设计。' },
            multiLang: { title: "多语言输出", desc: "自动检测聊天语言。支持英语、越南语、中文、俄语等。" },
            knowledge: { title: "知识引擎", desc: "从代码库自动生成用户画像、JTBD画布和4种流程图。" },
            seo: { title: "SEO优化", desc: "内置SEO检查清单、关键词策略、内容写作指南、站点地图生成和robots指令。" },
            ai: { title: "AI/LLM就绪", desc: "为AI解析结构化的文档。NotebookLM友好的站点地图，图表文本后备，干净的UTF-8。" }
        },
        personas: {
            label: "为谁打造",
            title: '你的代码值得拥有优秀的文档。<br>现在它自动获得。',
            cto: { title: "🏗️ CTO和技术负责人", desc: "几天内即可让新开发者上手，而不是几周。架构文档始终最新。" },
            dev: { title: "💻 开发者", desc: "停止手动编写文档。让AI追踪代码并生成一切。" },
            pm: { title: "📋 产品经理", desc: "带有可视化流程的SOP指南。移交给支持和培训团队。" },
            startup: { title: "🚀 创业者", desc: "为投资者和企业客户提供专业文档。零额外成本。" },
            solo: { title: "💡 独立开发者", desc: "一个人 = 整个文档团队。技术+面向用户，全部自动化。" },
            api: { title: "🔌 API提供商", desc: "自动生成端点文档，附带cURL、JS和Python示例。" }
        },
        how: {
            label: "出奇简单",
            title: "3步。完成。",
            subtitle: "无需复杂设置。无需配置文件。运行即可。",
            step1: { title: "安装", desc: "将doc-kit复制到Antigravity技能文件夹。一条命令。" },
            step2: { title: "生成提示", desc: "运行交互式CLI选择文档类型、输出格式和语言。" },
            step3: { title: "让AI工作", desc: "粘贴提示。AI协调11个技能进行系统化和文档化。" }
        },
        docTypes: {
            label: "引擎内部",
            title: '5种文档类型。11个AI子技能。<br>完整知识库。',
            subtitle: "每种文档类型由专用AI技能支持，内置内容准则、SEO规则、引用标准和UX原则。",
            knowledge: { title: "知识", desc: "买家和用户画像 • JTBD画布 • 工作流、序列、生命周期和旅程图。" },
            tech: { title: "技术文档", desc: "架构 • 数据库模式 • 部署 • 数据流图。全部包含Mermaid可视化。" },
            sop: { title: "SOP用户指南", desc: "画像上下文 → 流程 → 步骤 → 旅程 → 问题排除 → FAQ。" },
            apiRef: { title: "API参考", desc: "端点、模式、认证、错误码。多语言示例：cURL、JavaScript、Python。" },
            hicksLaw: "≤7个目录项。高级内容渐进式披露。",
            millersLaw: "信息分组为5-9个。可扫描的层次结构。",
            wcag: "Focus-visible环、对比度、reduced motion支持。"
        },
        output: {
            label: "选择输出",
            title: 'Markdown或Astro Starlight。<br>你来选。',
            markdown: { title: "Markdown", subtitle: "干净、便携、版本控制" },
            astro: { title: "Astro Starlight", subtitle: "极速静态站点，零客户端JS" }
        },
        claw: {
            label: "AI代理平台",
            title: "支持",
            titleHighlight: "OpenClaw和ZeroClaw",
            subtitle: "通过Telegram聊天或Rust原生CLI生成文档。创建设计系统。用它们编码。一个技能搞定一切。",
            viewGuide: "🐾 ⚡ 查看完整Claw集成指南 →"
        },
        start: {
            label: "开始使用",
            title: "60秒。免费。永远。",
            subtitle: "只需复制文件夹。无依赖。无需信用卡。",
            tryPrompt: "然后打开AI工具试试：",
            prompt: '"为我的项目生成完整文档 — 所有类型，astro格式，全范围"',
            working: "如果AI提到"
        },
        stats: {
            label: "数据说话",
            title: "5种文档类型。11个AI子技能。6个UX法则。"
        },
        footer: {
            tagline: "你的代码梦想它。AI记录它。DocKit Master让它变美。"
        }
    }
};
