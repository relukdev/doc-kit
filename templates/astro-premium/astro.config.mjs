// ============================================================
// DocKit Master Premium — Astro Starlight Configuration Template
//
// Replace all [PLACEHOLDER] values with actual project info.
// Lines marked with "CUSTOMIZE" should be updated per project.
// ============================================================

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    integrations: [
        mermaid(),
        starlight({
            title: '[Project Name]', // CUSTOMIZE: Project name

            // CUSTOMIZE: Social links
            social: [
                // { icon: 'github', label: 'GitHub', href: '[GITHUB_URL]' },
            ],

            // CUSTOMIZE: Logo (optional)
            // logo: {
            //   src: './src/assets/logo.svg',
            //   alt: '[Project Name] Logo',
            // },

            // CUSTOMIZE: Localization
            // Default: single locale (English)
            // Uncomment additional locales as needed
            defaultLocale: 'root',
            locales: {
                root: { label: 'English', lang: 'en' },
                // vi: { label: 'Tiếng Việt', lang: 'vi' },
                // zh: { label: '中文', lang: 'zh-CN' },
                // ru: { label: 'Русский', lang: 'ru' },
            },

            // Sidebar: auto-generated from folder structure

            // Premium custom CSS
            customCss: ['./src/styles/custom.css'],

            // Built-in components customization
            components: {},

            // Theme: dark mode default + SEO meta tags + font preconnect
            head: [
                {
                    tag: 'link',
                    attrs: {
                        rel: 'preconnect',
                        href: 'https://fonts.googleapis.com',
                    },
                },
                {
                    tag: 'link',
                    attrs: {
                        rel: 'preconnect',
                        href: 'https://fonts.gstatic.com',
                        crossorigin: true,
                    },
                },
                {
                    tag: 'script',
                    content: `
            // Set dark mode as default if no preference stored
            if (!localStorage.getItem('starlight-theme')) {
              document.documentElement.dataset.theme = 'dark';
            }
          `,
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:type',
                        content: 'article',
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'robots',
                        content: 'index, follow', // DEFAULT: SEO-enabled
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'generator',
                        content: 'DocKit Master — https://dockit-master.todyai.io',
                    },
                },
                {
                    tag: 'script',
                    content: `
            // DocKit Master referral footer
            document.addEventListener('DOMContentLoaded', function() {
              var footer = document.querySelector('footer');
              if (footer) {
                var ref = document.createElement('div');
                ref.style.cssText = 'text-align:center;padding:8px 0 4px;font-size:11px;color:#87827C;';
                ref.innerHTML = '📚 Powered by <a href="https://dockit-master.todyai.io" target="_blank" rel="noopener" style="color:#2563EB;text-decoration:none;">DocKit Master</a>';
                footer.appendChild(ref);
              }
            });
          `,
                },
            ],

            // Show last updated date for SEO freshness signals
            lastUpdated: true,

            // Disable "Edit this page" link (unless GitHub URL is set)
            editLink: {
                baseUrl: undefined, // CUSTOMIZE: e.g. 'https://github.com/user/repo/edit/main/'
            },

            // Table of Contents depth
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
        }),

        // Sitemap: auto-generates sitemap-index.xml on build
        sitemap(),
    ],

    // CUSTOMIZE: Deployment
    site: 'https://example.com', // CUSTOMIZE: Your deployed site URL
    // base: '/docs',           // CUSTOMIZE: Base path if not at root
});
