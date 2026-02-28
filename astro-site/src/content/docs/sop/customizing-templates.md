---
title: "Customizing Templates — User Guide"
description: "Step-by-step guide to customizing Astro Starlight theme, CSS, color palette, and sidebar layout for DocKit Master output"
keywords: ["customization", "templates", "Astro Starlight", "CSS"]
robots: "index, follow"
sidebar:
  order: 5
---

# Customizing Templates

> **Quick Reference**
> - **Who**: Developer (intermediate+)
> - **Where**: `templates/astro-premium/` and `astro-site/`
> - **Time**: ~15-30 minutes
> - **Prerequisites**: Node.js 18+, familiarity with CSS

## Persona Context

> **This guide is for**: [Developer Dana](../personas/user-developer)
>
> **Job To Be Done**: [Configure tooling for team](../jtbd/configure-tooling)

## What Can Be Customized

| Element | File | Scope |
|---------|------|-------|
| Site title and URL | `astro.config.mjs` | Global |
| Color palette | `src/styles/custom.css` | Sitewide |
| Sidebar order | YAML frontmatter `sidebar.order` | Per-page |
| Social links | `astro.config.mjs` social array | Header |
| Mermaid diagram colors | `skills/content-guidelines.md` | All diagrams |
| Fonts | `custom.css` @import | Typography |

## Step-by-Step Guide

### Step 1: Edit Site Configuration

Open `astro-site/astro.config.mjs` and update:

```javascript
export default defineConfig({
  site: 'https://your-docs-url.com',  // Your deployment URL
  integrations: [
    starlight({
      title: 'Your Project',           // Site title
      social: { github: 'https://...' }, // Social links
    }),
  ],
});
```

### Step 2: Customize CSS

Edit `astro-site/src/styles/custom.css` to change colors:

```css
:root {
  --sl-color-accent-low: #your-color;
  --sl-color-accent: #your-color;
  --sl-color-accent-high: #your-color;
}
```

### Step 3: Adjust Sidebar Order

In any doc file's frontmatter, set the sidebar order:

```yaml
---
sidebar:
  order: 1  # Lower numbers appear first
---
```

:::tip
Starlight auto-generates the sidebar from folder structure. Use YAML frontmatter `sidebar.order` to control positioning within each folder.
:::

## Related

- [Deployment Guide](../deployment)
- [Using the CLI](./using-cli)
- [System Architecture](../architecture)
