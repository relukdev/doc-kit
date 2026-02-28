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
            title: 'DocKit Master',
            description: 'Bộ công cụ tạo tài liệu tự động với Astro Starlight — SEO & AI Edition',

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
                root: { label: 'Tiếng Việt', lang: 'vi' },
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
    site: 'https://dockit-master.todyai.io',
    base: '/docs',
});
