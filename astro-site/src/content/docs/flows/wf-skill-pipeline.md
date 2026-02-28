---
title: "Skill Execution Pipeline — Workflow"
description: "Business workflow diagram for DocKit Master's core skill execution pipeline from analysis to export"
keywords: ["workflow", "skill pipeline", "documentation generation"]
robots: "index, follow"
sidebar:
  order: 2
---

# Skill Execution Pipeline — Workflow

> **Quick Reference**
> - **Persona**: [AI Agent Alex](../personas/user-ai-agent)
> - **JTBD**: [Systematize codebase knowledge](../jtbd/systematize-knowledge)
> - **Trigger**: User runs CLI or invokes /DocKit Master command
> - **Outcome**: Complete documentation suite in docs/ or astro-site/

## Process Flow

```mermaid
graph TB
    style Start fill:#232221,stroke:#3fb950,color:#E8E5DF
    style End fill:#232221,stroke:#3fb950,color:#E8E5DF
    style A fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style B fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style C fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style D fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style E fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style F fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style G fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style Decision fill:#232221,stroke:#f78166,color:#E8E5DF

    Start(["Trigger: CLI or IDE command"])
    A["Step 1: Gather config\ntype, format, scope, language"]
    B["Step 2: Analyze codebase\nskills/analyze-codebase.md"]
    C["Step 3: Generate knowledge\npersonas, JTBD, flows"]
    D["Step 4: Generate tech docs\narchitecture, DB, deploy"]
    E["Step 5: Generate SOP guides\nKnowledge-enriched"]
    F["Step 6: Generate API ref\nEndpoints and schemas"]
    Decision{"Format?"}
    G["Export: Astro Starlight\nsetup-astro.md"]
    H["Export: Markdown\nexport-markdown.md"]
    End(["Complete documentation suite"])

    Start --> A --> B --> C --> D --> E --> F --> Decision
    Decision -->|"astro"| G --> End
    Decision -->|"markdown"| H --> End
```

**Workflow summary:** The pipeline starts with configuration gathering, then sequentially runs codebase analysis, knowledge generation, technical documentation, SOP guides, and API reference. Finally, it exports to either Astro Starlight or plain Markdown based on user choice.

## Step Details

| Step | Action | Skill File | Output |
|------|--------|-----------|--------|
| 1 | Gather input (10 config questions) | `SKILL.md:42-82` | Config object |
| 2 | Analyze codebase (scan, detect, map) | `skills/analyze-codebase.md` | `docs/analysis.md` |
| 3 | Generate knowledge layer | `persona-builder.md`, `jtbd-analyzer.md`, `flow-mapper.md` | `docs/personas/`, `docs/jtbd/`, `docs/flows/` |
| 4 | Generate technical docs | `skills/tech-docs.md` | `docs/architecture.md`, `docs/database.md`, etc. |
| 5 | Generate SOP guides | `skills/sop-guide.md` | `docs/sop/` |
| 6 | Generate API reference | `skills/api-reference.md` | `docs/api/` |
| 7 | Export to chosen format | `workflows/setup-astro.md` or `workflows/export-markdown.md` | `astro-site/` or `docs/` |

## Related

- [Doc generation sequence](./seq-doc-generation)
- [AI Agent Alex](../personas/user-ai-agent)
- [Generating tech docs SOP](../sop/generating-tech-docs)
