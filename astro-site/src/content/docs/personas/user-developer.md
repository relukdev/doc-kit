---
title: "Developer Dana — User Persona"
description: "Profile of the Developer user — installs, configures, and extends DocKit Master across AI coding IDEs"
keywords: ["persona", "developer", "installation", "IDE integration"]
robots: "index, follow"
sidebar:
  order: 3
---

# Developer Dana — Installer and Extender

> **Quick Reference**
> - **Role**: Developer / DevOps Engineer
> - **Tech Proficiency**: Advanced
> - **Frequency**: Weekly (install, configure, customize)
> - **Key Modules**: scripts/, adapters/, SKILL.md, templates/

## Profile

| Attribute | Detail |
|-----------|--------|
| **Persona Name** | Developer Dana |
| **Role in System** | Installer, configurator, and skill extender |
| **Reports To** | Tech Lead Taylor |
| **Team Size** | 3–10 developers |

## Goals and Motivations

- Quick installation — set up DocKit Master in any IDE in under 2 minutes
- Consistent documentation quality across all team projects
- Customizable output to match team conventions and standards

## Pain Points

- IDE fragmentation — each IDE has different config locations (`scripts/install.sh`)
- Path issues on macOS — spaces in iCloud paths cause script failures
- Keeping adapter files in sync when SKILL.md changes

## Feature Usage Map

| Feature | Access | Frequency | JTBD |
|---------|--------|-----------|------|
| install.sh | Execute | Monthly | Install for team |
| dockit-master.sh | Execute | Weekly | Generate prompts |
| adapters/* | Customize | Monthly | Configure per IDE |
| templates/astro-premium/ | Customize | Quarterly | Adjust appearance |
| SKILL.md | Read/Modify | Monthly | Extend pipeline |

## Typical Workflow

```mermaid
graph LR
    style A fill:#232221,stroke:#3fb950,color:#E8E5DF
    style B fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style C fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style D fill:#232221,stroke:#3fb950,color:#E8E5DF

    A["Install"] --> B["Configure IDE"]
    B --> C["Run CLI"]
    C --> D["Paste Prompt"]
```

**Workflow summary:** Developer Dana runs install.sh, configures the adapter file for their IDE, then uses dockit-master.sh to generate a prompt they paste into their AI coding environment.

## Related

- [Using the CLI](../sop/using-cli)
- [AI Agent Alex](./user-ai-agent) — the agent Dana configures
- [Configure tooling JTBD](../jtbd/configure-tooling)
