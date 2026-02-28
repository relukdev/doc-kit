---
title: "Doc Generation — Sequence Flow"
description: "Sequence diagram showing component interactions during documentation generation"
keywords: ["sequence diagram", "doc generation", "API flow"]
robots: "index, follow"
sidebar:
  order: 4
---

# Documentation Generation — Sequence Flow

> **Quick Reference**
> - **Trigger**: User invokes DocKit Master in AI IDE
> - **Components**: 6 participants
> - **Total Steps**: 14

## Sequence Diagram

```mermaid
sequenceDiagram
    autonumber

    actor User
    participant CLI as CLI Script
    participant SK as SKILL.md
    participant AN as Analyze Skill
    participant KN as Knowledge Skills
    participant GN as Doc Gen Skills
    participant EX as Export Workflow

    User->>CLI: Run dockit-master.sh
    CLI->>CLI: Gather config (type, format, scope)
    CLI-->>User: Generated prompt (clipboard)

    User->>SK: Paste prompt in AI IDE
    SK->>AN: Step 2 - Analyze codebase
    AN->>AN: Scan dirs, detect stack, map routes
    AN-->>SK: analysis.md

    SK->>KN: Step 4a - Build personas
    KN-->>SK: personas/
    SK->>KN: Step 4b - Extract JTBD
    KN-->>SK: jtbd/
    SK->>KN: Step 4c - Map flows
    KN-->>SK: flows/

    SK->>GN: Step 4d-f - Generate docs
    GN-->>SK: architecture.md, sop/, api/

    SK->>EX: Step 5 - Export
    EX->>EX: Build Astro site
    EX-->>User: Docs site at localhost:4321
```

**Sequence summary:** The user runs the CLI to generate a prompt, pastes it into their AI IDE, and the SKILL.md orchestrator sequentially invokes analysis, knowledge, documentation, and export skills. Each skill reads previous output for enrichment.

## Interaction Details

| # | From | To | Action |
|---|------|----|--------|
| 1 | User | CLI | Run dockit-master.sh |
| 2 | CLI | CLI | Gather 6 config parameters |
| 3 | CLI | User | Copy prompt to clipboard |
| 4 | User | SKILL.md | Paste prompt in AI IDE |
| 5-7 | SKILL.md | Analyze | Scan, detect, map |
| 8-10 | SKILL.md | Knowledge | Personas, JTBD, Flows |
| 11-12 | SKILL.md | Doc Gen | Tech, SOP, API |
| 13-14 | SKILL.md | Export | Build and serve |

## Related

- [Skill pipeline workflow](./wf-skill-pipeline)
- [AI Agent Alex](../personas/user-ai-agent)
- [Systematize knowledge JTBD](../jtbd/systematize-knowledge)
