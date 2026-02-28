---
title: "User Guides — Overview"
description: "Complete index of DocKit Master user guides — step-by-step instructions for generating documentation, using the CLI, and customizing templates"
keywords: ["user guide", "SOP", "how to", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 1
---

# User Guides

> **Quick Reference**
> - **Total Guides**: 4
> - **Roles**: Developer, AI Agent, Product Manager
> - **Last Updated**: 2026-02-28

## Persona Navigation

| Persona | Role | Key Guides | JTBD |
|---------|------|-----------|------|
| [Developer Dana](../personas/user-developer) | Installer | [Using the CLI](./using-cli), [Customizing Templates](./customizing-templates) | Configure tooling |
| [AI Agent Alex](../personas/user-ai-agent) | Executor | [Generating Tech Docs](./generating-tech-docs), [Generating SOPs](./generating-sop-guides) | Systematize knowledge |
| [PM Parker](../personas/user-product-manager) | Consumer | All guides (reader) | Consume documentation |

## Quick Start

```mermaid
graph LR
    style A fill:#232221,stroke:#3fb950,color:#E8E5DF
    style B fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style C fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style D fill:#232221,stroke:#3fb950,color:#E8E5DF

    A["Install"] --> B["Run CLI"]
    B --> C["Paste Prompt"]
    C --> D["Review Docs"]
```

## Guide Index

| # | Guide | Description | Role | Difficulty |
|---|-------|-------------|------|------------|
| 1 | [Using the CLI](./using-cli) | Generate documentation prompts via interactive CLI | Developer | Easy |
| 2 | [Generating Tech Docs](./generating-tech-docs) | Create architecture, database, and deployment docs | AI Agent | Moderate |
| 3 | [Generating SOP Guides](./generating-sop-guides) | Create knowledge-enriched user guides | AI Agent | Moderate |
| 4 | [Customizing Templates](./customizing-templates) | Modify Astro theme, CSS, and sidebar layout | Developer | Advanced |

## Related

- [Personas](../personas/)
- [System Architecture](../architecture)
- [Skill pipeline workflow](../flows/wf-skill-pipeline)
