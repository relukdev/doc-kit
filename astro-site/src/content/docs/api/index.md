---
title: "Skill API Reference — Overview"
description: "Complete API reference for DocKit Master skills — inputs, outputs, configuration, and rules for each skill file"
keywords: ["API", "reference", "skills", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 1
---

# Skill API Reference

> **Quick Reference**
> - **Total Skills**: 11 (4 knowledge + 3 docs + 4 quality)
> - **Total Workflows**: 5
> - **Input Format**: Markdown + YAML frontmatter
> - **Output Format**: Markdown files in docs/

DocKit Master skills function as an API — each skill file defines inputs, processing rules, and outputs. This reference documents the interface of each skill.

## Skills Overview

| Skill | Input | Output | Category |
|-------|-------|--------|----------|
| [analyze-codebase](./analyze-codebase) | Project files | analysis.md | Foundation |
| persona-builder | analysis.md, source code | personas/ | Knowledge |
| jtbd-analyzer | analysis.md, personas/ | jtbd/ | Knowledge |
| flow-mapper | analysis.md, personas/, jtbd/ | flows/ | Knowledge |
| tech-docs | analysis.md | architecture.md, database.md, etc. | Documentation |
| sop-guide | analysis.md, knowledge layer | sop/ | Documentation |
| api-reference | analysis.md | api/ | Documentation |
| [content-guidelines](./content-guidelines) | N/A (rules only) | N/A | Quality |
| content-writing | N/A (rules only) | N/A | Quality |
| llm-optimization | N/A (rules only) | N/A | Quality |
| seo-checklist | Generated docs | Audit report | Quality |

## Dependency Graph

```mermaid
graph LR
    style A fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style B fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style C fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style D fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style E fill:#232221,stroke:#3fb950,color:#E8E5DF
    style F fill:#232221,stroke:#3fb950,color:#E8E5DF
    style G fill:#232221,stroke:#3fb950,color:#E8E5DF

    A["analyze-codebase"] --> B["persona-builder"]
    A --> C["jtbd-analyzer"]
    B --> C
    A --> D["flow-mapper"]
    B --> D
    C --> D
    A --> E["tech-docs"]
    D --> F["sop-guide"]
    A --> G["api-reference"]
```

**Dependency summary:** analyze-codebase is the root dependency. Knowledge skills chain: personas → JTBD → flows. Tech docs depend only on analysis. SOPs depend on the full knowledge layer.

## Common Configuration

All skills accept the global config object defined in Step 1:

```
DOC_TYPE     = knowledge | tech | sop | api | all
FORMAT       = markdown | astro
SCOPE        = full | focused
LANGUAGE     = en | vi | zh | ja
SEO          = yes | no
LLM_OPTIMIZE = yes | no
```

## Related

- [System Architecture](../architecture)
- [Data Flow](../data-flow)
- [Skill pipeline workflow](../flows/wf-skill-pipeline)
