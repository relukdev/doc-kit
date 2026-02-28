---
title: "Installation — Workflow"
description: "Workflow diagram for installing DocKit Master across multiple AI coding IDEs"
keywords: ["workflow", "installation", "multi-IDE", "setup"]
robots: "index, follow"
sidebar:
  order: 3
---

# Multi-IDE Installation — Workflow

> **Quick Reference**
> - **Persona**: [Developer Dana](../personas/user-developer)
> - **JTBD**: [Configure tooling for team](../jtbd/configure-tooling)
> - **Trigger**: Team adopts DocKit Master
> - **Outcome**: Skill installed and working in target IDE(s)

## Process Flow

```mermaid
graph TB
    style Start fill:#232221,stroke:#3fb950,color:#E8E5DF
    style End fill:#232221,stroke:#3fb950,color:#E8E5DF
    style A fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style B fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style C fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style D fill:#232221,stroke:#f78166,color:#E8E5DF

    Start(["Trigger: Team adopts DocKit Master"])
    A["Run install.sh\n--all or --cursor etc."]
    D{"IDE detected?"}
    B["Copy adapter + SKILL.md\nto IDE config location"]
    C["Verify: run test prompt\nin target IDE"]
    End(["Skill active in IDE"])

    Start --> A --> D
    D -->|"Yes"| B --> C --> End
    D -->|"No"| A
```

**Workflow summary:** Developer runs install.sh with target IDE flag. The script detects the IDE config location, copies the adapter and SKILL.md, then verifies the installation by suggesting a test prompt.

## Step Details

| Step | Action | Source |
|------|--------|--------|
| 1 | Choose IDE(s) | `scripts/install.sh` — interactive or `--all` flag |
| 2 | Detect IDE config path | Auto-detect from known locations |
| 3 | Copy adapter file | Copy from `adapters/` to IDE config dir |
| 4 | Copy SKILL.md + skills/ | Optional `--copy-skills` for offline use |
| 5 | Verify installation | Suggest test prompt to paste in IDE |

## Related

- [Developer Dana](../personas/user-developer)
- [Using the CLI](../sop/using-cli)
- [Skill pipeline workflow](./wf-skill-pipeline)
