/**
 * i18n.js — Core Engine for DocKit Master Sub-Pages
 */
const I18n = {
    currentLang: 'en',
    translations: {},

    init(pageTranslations) {
        this.translations = pageTranslations;
        // Auto-detect lang: localStorage > navigator > 'en'
        this.currentLang = localStorage.getItem('dockit-lang')
            || navigator.language.slice(0, 2)
            || 'en';

        // Supported languages
        const supported = ['en', 'vi', 'ru', 'zh'];
        if (!supported.includes(this.currentLang)) this.currentLang = 'en';

        // Update doc attribute
        document.documentElement.lang = this.currentLang;

        // Initial apply
        this.apply();
    },

    switchTo(lang) {
        this.currentLang = lang;
        localStorage.setItem('dockit-lang', lang);
        document.documentElement.lang = lang;
        this.apply();
    },

    apply() {
        // 1. Base text translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const text = this.get(key);
            if (text) el.innerHTML = text;
        });

        // 2. Attributes (placeholder, title, alt)
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const config = el.dataset.i18nAttr.split(':');
            if (config.length === 2) {
                const attr = config[0];
                const key = config[1];
                const text = this.get(key);
                if (text) el.setAttribute(attr, text);
            }
        });

        // 3. Update Language Switcher UI
        document.querySelectorAll('[data-lang-btn]').forEach(btn => {
            const lang = btn.dataset.langBtn;
            if (lang === this.currentLang) {
                btn.classList.add('text-white', 'bg-white/10');
                btn.classList.remove('text-zinc-500', 'hover:text-white');
            } else {
                btn.classList.remove('text-white', 'bg-white/10');
                btn.classList.add('text-zinc-500', 'hover:text-white');
            }
        });
    },

    get(key) {
        const keys = key.split('.');
        let val = this.translations[this.currentLang] || this.translations['en'];

        for (const k of keys) {
            val = val?.[k];
        }

        // Fallback to English if key missing in current language
        if (val === undefined && this.currentLang !== 'en') {
            let fallback = this.translations['en'];
            for (const k of keys) {
                fallback = fallback?.[k];
            }
            return fallback;
        }

        return val;
    }
};
