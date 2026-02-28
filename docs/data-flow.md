---
title: "Data Flow — DocKit Master"
description: "Data flow diagrams showing how information transforms from codebase scan to final documentation output"
keywords: ["data flow", "integration", "pipeline", "DocKit Master"]
robots: "index, follow"
sidebar:
  order: 5
---

# Data Flow

> **Quick Reference**
> - **Pattern**: Sequential pipeline (each step reads previous output)
> - **Protocol**: File system (Markdown read/write)
> - **Serialization**: YAML frontmatter + Markdown body

## End-to-End Data Flow

```mermaid
graph TB
    style Input fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style Process fill:#232221,stroke:#d29922,color:#E8E5DF
    style Output fill:#232221,stroke:#3fb950,color:#E8E5DF

    Input["Source Code\nProject files, README,\npackage.json, routes"]
    Process["Skill Pipeline\n11 skills process\nsequentially"]
    Output["Documentation\ndocs/ or\nastro-site/dist/"]

    Input --> Process --> Output
```

**Flow summary:** Source code enters the pipeline, is processed by 11 skills sequentially, and exits as structured documentation files.

## Detailed Pipeline Flow

```mermaid
graph LR
    style A fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style B fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style C fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style D fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style E fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style F fill:#232221,stroke:#3fb950,color:#E8E5DF

    A["Source Code"] -->|"scan"| B["analysis.md"]
    B -->|"extract roles"| C["personas/"]
    B -->|"extract jobs"| D["jtbd/"]
    C -->|"enrich"| E["sop/"]
    D -->|"enrich"| E
    B -->|"arch + deploy"| F["tech docs"]
```

**Pipeline data flow:** Source code is scanned into analysis.md. From analysis, roles are extracted into personas and jobs into JTBD canvases. These knowledge artifacts then enrich the SOP guides. Technical docs are generated directly from the analysis.

## Data Transformation Details

| Stage | Input | Transform | Output | Size |
|-------|-------|-----------|--------|------|
| Analysis | Project files | Scan, detect, map | analysis.md | ~8 KB |
| Personas | analysis.md + source code | Extract roles, build profiles | 5 files | ~15 KB |
| JTBD | analysis.md + personas | Extract jobs, build canvases | 4 files | ~10 KB |
| Flows | analysis.md + personas + JTBD | Map processes, draw diagrams | 6 files | ~12 KB |
| Tech Docs | analysis.md | Generate architecture, DB, deploy | 4 files | ~20 KB |
| SOPs | All above | Enrich with knowledge context | 5+ files | ~15 KB |
| API Ref | analysis.md | Document skill interfaces | 4+ files | ~10 KB |
| Export | All docs | Copy + build | astro-site/dist/ | ~5 MB |

## Quality Layer Data Flow

```mermaid
graph TB
    style S fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style Q1 fill:#232221,stroke:#d29922,color:#E8E5DF
    style Q2 fill:#232221,stroke:#d29922,color:#E8E5DF
    style Q3 fill:#232221,stroke:#d29922,color:#E8E5DF
    style Q4 fill:#232221,stroke:#d29922,color:#E8E5DF
    style O fill:#232221,stroke:#3fb950,color:#E8E5DF

    S["Generated Docs\nRaw content"]
    Q1["content-guidelines\nStructure, UX laws"]
    Q2["content-writing\nSEO keywords, voice"]
    Q3["llm-optimization\nAI-readable structure"]
    Q4["seo-checklist\nPer-page audit"]
    O["Final Docs\nSEO + LLM optimized"]

    S --> Q1 --> Q2 --> Q3 --> Q4 --> O
```

**Quality flow summary:** Raw documentation passes through four quality filters: structural guidelines, SEO writing rules, LLM optimization, and a final SEO audit before export.

## Related

- [System Architecture](./architecture)
- [Skill pipeline workflow](./flows/wf-skill-pipeline)
- [Deployment Guide](./deployment)
