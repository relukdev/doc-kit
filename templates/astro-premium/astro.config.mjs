// ============================================================
// DocKit Master Premium — Astro Starlight Configuration Template
//
// Replace all [PLACEHOLDER] values with actual project info.
// Lines marked with "CUSTOMIZE" should be updated per project.
// ============================================================

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    integrations: [
        starlight({
            // CUSTOMIZE: Project identity
            title: '[Project Name]',
            description: '[Project description]',

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
                // ja: { label: '日本語', lang: 'ja' },
            },

            // Sidebar: auto-generated from folder structure
            // Override here if custom grouping is needed
            // sidebar: [
            //   {
            //     label: 'Architecture & Technical',
            //     autogenerate: { directory: 'tech' },
            //   },
            //   {
            //     label: 'User Guides',
            //     autogenerate: { directory: 'sop' },
            //   },
            //   {
            //     label: 'API Reference',
            //     autogenerate: { directory: 'api' },
            //   },
            // ],

            // Premium custom CSS
            customCss: ['./src/styles/custom.css'],

            // Built-in components customization
            components: {},

            // Theme: dark mode default + SEO meta tags
            head: [
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

    // Markdown configuration
    markdown: {
        // Mermaid: Starlight doesn't include mermaid by default.
        // Use remark-mermaidjs for server-side rendering (recommended)
        // or add a client-side script via head injection.
        // Install: npm install remark-mermaidjs
        // Then uncomment:
        // remarkPlugins: [remarkMermaid],
    },

    // CUSTOMIZE: Deployment
    site: 'https://docs.example.com', // CUSTOMIZE: your deployment URL
    // base: '/docs/',                // CUSTOMIZE: if deploying to a subdirectory
});
