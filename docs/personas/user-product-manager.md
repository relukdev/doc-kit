---
title: "PM Parker — User Persona"
description: "Profile of the Product Manager user — reviews generated documentation for product decisions and stakeholder communication"
keywords: ["persona", "product manager", "documentation consumer"]
robots: "index, follow"
sidebar:
  order: 4
---

# PM Parker — Documentation Consumer

> **Quick Reference**
> - **Role**: Product Manager / Technical Writer
> - **Tech Proficiency**: Intermediate
> - **Frequency**: Weekly (review, share with stakeholders)
> - **Key Modules**: docs/, astro-site/, landing pages

## Profile

| Attribute | Detail |
|-----------|--------|
| **Persona Name** | PM Parker |
| **Role in System** | Documentation consumer and reviewer |
| **Reports To** | Tech Lead Taylor / CEO |
| **Team Size** | 3–5 cross-functional members |

## Goals and Motivations

- Reduce onboarding time — new team members find answers in docs, not in Slack
- Share architecture and flow diagrams in stakeholder meetings
- Preserve institutional knowledge across team changes

## Pain Points

- Outdated docs that diverge from code within weeks
- Technical jargon in SOP guides assumes developer knowledge
- Markdown files buried in repos are hard to discover without search

## Feature Usage Map

| Feature | Access | Frequency | JTBD |
|---------|--------|-----------|------|
| Astro site | Read | Daily | Find answers |
| SOP guides | Read | Weekly | Train team |
| Architecture docs | Read | Monthly | Present to stakeholders |
| JTBD canvases | Read | Quarterly | Align priorities |
| Landing page | Share | Monthly | Pitch to other teams |

## Typical Workflow

```mermaid
graph LR
    style A fill:#232221,stroke:#3fb950,color:#E8E5DF
    style B fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style C fill:#232221,stroke:#60A5FA,color:#E8E5DF
    style D fill:#232221,stroke:#3fb950,color:#E8E5DF

    A["Browse Docs"] --> B["Search"]
    B --> C["Extract Diagram"]
    C --> D["Share with Team"]
```

**Workflow summary:** PM Parker opens the Astro Starlight site, uses built-in search, extracts diagrams for presentations, and shares links with stakeholders.

## Related

- [User Guides overview](../sop/)
- [Tech Lead Taylor](./buyer-tech-lead) — PM Parker's sponsor
- [Systematize knowledge JTBD](../jtbd/systematize-knowledge)
