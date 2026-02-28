---
title: "Jobs To Be Done — Overview"
description: "Complete JTBD analysis for DocKit Master — 3 main jobs covering knowledge systematization, documentation generation, and tool deployment"
keywords: ["JTBD", "jobs to be done", "user needs", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 1
---

# Jobs To Be Done

> **Quick Reference**
> - **Main Jobs**: 3
> - **Small Jobs**: 9
> - **Micro-jobs**: 27+
> - **Framework**: GitLab JTBD (Main → Small → Micro)
> - **Last Updated**: 2026-02-28

## Job Hierarchy Overview

```mermaid
graph TB
    style MJ1 fill:#232221,stroke:#f78166,color:#E8E5DF
    style MJ2 fill:#232221,stroke:#f78166,color:#E8E5DF
    style MJ3 fill:#232221,stroke:#f78166,color:#E8E5DF
    style SJ1 fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style SJ2 fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style SJ3 fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style SJ4 fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style SJ5 fill:#232221,stroke:#60A5FA,color:#E8E5DF

    MJ1["Main: Systematize codebase\nknowledge into docs"]
    MJ2["Main: Configure documentation\ntooling for team"]
    MJ3["Main: Consume and share\ngenerated documentation"]

    MJ1 --> SJ1["Analyze codebase"]
    MJ1 --> SJ2["Generate knowledge layer"]
    MJ1 --> SJ3["Generate technical docs"]
    MJ2 --> SJ4["Install across IDEs"]
    MJ2 --> SJ5["Customize templates"]
    MJ3 --> SJ6["Search and browse"]
    MJ3 --> SJ7["Share with stakeholders"]
```

**Hierarchy summary:** DocKit Master serves three main jobs: (1) transforming code into structured knowledge, (2) setting up the tooling for development teams, and (3) consuming the output for decisions and communication.

## Job Directory

| # | Main Job | Performer | Small Jobs | Canvas |
|---|---------|-----------|-----------|--------|
| 1 | Systematize codebase knowledge into structured documentation | [AI Agent Alex](../personas/user-ai-agent) | 4 | [View](./systematize-knowledge) |
| 2 | Configure documentation tooling for development team | [Developer Dana](../personas/user-developer) | 3 | [View](./configure-tooling) |
| 3 | Consume and share generated documentation | [PM Parker](../personas/user-product-manager) | 2 | [View](./consume-documentation) |

## Persona - Job Matrix

| Persona | Systematize Knowledge | Configure Tooling | Consume Docs |
|---------|:-:|:-:|:-:|
| AI Agent Alex | Primary | — | — |
| Developer Dana | Related | Primary | Related |
| PM Parker | — | — | Primary |
| Tech Lead Taylor | Related | Related | Related |

## Related

- [Personas overview](../personas/)
- [Process Flows](../flows/)
- [System Architecture](../architecture)
