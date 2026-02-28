---
title: "Deployment Guide — DocKit Master"
description: "Installation, configuration, and deployment guide for DocKit Master across AI coding IDEs and static hosting"
keywords: ["deployment", "installation", "infrastructure", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 4
---

# Deployment Guide

> **Quick Reference**
> - **Platform**: Any AI coding IDE + Node.js 18+ (for Astro)
> - **Min Requirements**: Node.js 18, npm 9+
> - **Install Time**: ~2 minutes
> - **Build Time**: ~5 seconds (Astro)

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Node.js | 18.x | 20.x+ |
| npm | 9.x | 10.x+ |
| Disk | 100 MB | 500 MB |
| Bash | 4.x (for CLI) | 5.x |

## Installation Methods

### Method 1: Interactive Installer

```bash
bash scripts/install.sh
```

Presents a menu to choose target IDE(s). Supports: Antigravity, Cursor, Claude Code, Gemini CLI, OpenCode, Windsurf, Generic.

### Method 2: Install for All IDEs

```bash
bash scripts/install.sh --all
```

### Method 3: Specific IDE

```bash
bash scripts/install.sh --cursor
bash scripts/install.sh --claude
bash scripts/install.sh --gemini
```

### Method 4: Manual Copy

```bash
# For Antigravity (default)
cp -r . ~/.gemini/antigravity/skills/doc-kit/

# For Cursor
cp adapters/cursor.mdc .cursor/rules/dockit-master.mdc

# For Claude Code
cp adapters/claude.md CLAUDE.md
```

:::tip
Use `--copy-skills` flag to embed all skill files into the target project for fully portable offline usage.
:::

## Building the Docs Site

After generating documentation with DocKit Master:

```bash
# Navigate to the Astro site
cd astro-site

# Install dependencies
npm install

# Build for production
npm run build

# Preview locally
npm run preview -- --port 4321
```

## Deploy to Static Hosting

The built output in `astro-site/dist/` can be deployed to any static host:

| Host | Command |
|------|---------|
| GitHub Pages | Push `dist/` to `gh-pages` branch |
| Cloudflare Pages | Connect repo, build cmd: `npm run build`, output: `dist/` |
| Netlify | Connect repo, build cmd: `npm run build`, publish: `dist/` |
| Vercel | `npx vercel deploy dist/` |

:::warning
Update the `site` field in `astro.config.mjs` with your actual deployment URL before building. This is required for correct sitemap generation.
:::

## CI/CD Pipeline

```mermaid
graph LR

    A["Push to main"] --> B["npm install"]
    B --> C["npm run build"]
    C --> D["Deploy dist/"]
```

**Pipeline summary:** On push, install dependencies, build the Astro site, and deploy the dist/ output to static hosting. Total pipeline time is under 60 seconds.

## Related

- [System Architecture](./architecture)
- [Data Flow](./data-flow)
- [Using the CLI](./sop/using-cli)
