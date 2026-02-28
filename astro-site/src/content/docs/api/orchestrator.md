---
title: "SKILL.md Orchestrator API Reference"
description: "API reference for the SKILL.md orchestrator — routing logic, configuration handling, and pipeline execution"
keywords: ["API", "orchestrator", "SKILL.md", "pipeline"]
robots: "index, follow"
sidebar:
  order: 4
---

# SKILL.md Orchestrator API

> **Quick Reference**
> - **File**: `SKILL.md` (295 lines)
> - **Type**: Main entry point and router
> - **Input**: 10-parameter config object
> - **Output**: Routes to appropriate skills

## Interface

The orchestrator accepts a config object with 10 parameters:

| # | Parameter | Type | Required | Default |
|---|-----------|------|----------|---------|
| 1 | DOC_TYPE | enum | Yes | `all` |
| 2 | FORMAT | enum | Yes | `astro` |
| 3 | SCOPE | enum | Yes | `full` |
| 4 | FOCUS_TARGET | string | No | null |
| 5 | LANGUAGE | string | Yes | auto-detect |
| 6 | I18N | boolean | No | false |
| 7 | RECORD | boolean | No | false |
| 8 | PROJECT_PATH | path | Yes | workspace |
| 9 | SEO | boolean | No | true |
| 10 | LLM_OPTIMIZE | boolean | No | true |

## Routing Logic

```mermaid
graph TB
    style K fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style T fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style S fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style A fill:#232221,stroke:#60A5FA,color:#E8E5DF

    D{"DOC_TYPE?"}
    K["knowledge\npersona + jtbd + flow"]
    T["tech\narchitecture + DB + deploy"]
    S["sop\nknowledge first, then SOPs"]
    A["api\nendpoint reference"]
    ALL["all\nknowledge → tech → sop → api"]

    D -->|"knowledge"| K
    D -->|"tech"| T
    D -->|"sop"| S
    D -->|"api"| A
    D -->|"all"| ALL
```

**Routing summary:** The orchestrator maps DOC_TYPE to the corresponding skill files. For `all`, it runs all types sequentially: knowledge → tech → sop → api. For `sop`, it auto-runs knowledge first if not already generated.

## Execution Steps

| Step | Action | Condition |
|------|--------|-----------|
| 1 | Gather input | Always |
| 1b | Generate execution plan | Always |
| 2 | Analyze codebase | Always |
| 3 | Apply content guidelines | Always |
| 3b | Apply SEO + LLM guidelines | If SEO=yes or LLM=yes |
| 4 | Generate documents | Based on DOC_TYPE |
| 5 | Export | Based on FORMAT |
| 5b | Generate sitemap | If SEO=yes |
| 5c | Run SEO audit | If SEO=yes |
| 6 | Summary | Always |

## Related

- [analyze-codebase API](./analyze-codebase)
- [Skill pipeline workflow](../flows/wf-skill-pipeline)
- [System Architecture](../architecture)
