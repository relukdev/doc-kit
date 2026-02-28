# Content Writing Guidelines — SEO & Quality Edition

Rules for writing documentation that ranks well in search engines, reads naturally, and provides maximum value to users.

## When to Apply

Apply these rules when generating **any** documentation content (tech docs, SOPs, API references). These supplement the rules in `content-guidelines.md`.

---

## 1. Keyword Strategy

### Primary Keyword Placement

Every page targets ONE primary keyword. Place it in:

| Location | Required | Example |
|----------|----------|---------|
| **Title** (frontmatter `title`) | ✅ | `"System Architecture Guide"` |
| **H1** heading | ✅ | `# System Architecture Guide` |
| **Meta description** | ✅ | `"Complete system architecture..."` |
| **First paragraph** (within 100 words) | ✅ | "This architecture guide covers..." |
| **At least 1 H2** heading | ✅ | `## Architecture Overview` |
| **URL/filename** | ✅ | `architecture.md` |
| **Image alt text** (if applicable) | 🟢 | `"architecture diagram"` |

### Semantic Keywords (LSI)

Include 3–5 related terms naturally in the body:

```
Primary: "system architecture"
LSI: "microservices", "deployment", "scalability", "infrastructure", "tech stack"
```

Place LSI keywords in:
- Table headers and descriptions
- Mermaid diagram labels
- Section summaries
- FAQ answers

---

## 2. Writing Structure

### Inverted Pyramid

Lead with the **answer**, then provide **details**, then **context**:

```markdown
## Database Schema          ← Topic (H2 with keyword)

The system uses PostgreSQL with 12 tables organized in 3 schemas.  ← Answer FIRST
The core schema handles user data and authentication.              ← Key detail
This design was chosen for ACID compliance and JSON support.       ← Why/context
```

**❌ Don't** start with background or history:
```markdown
## Database Schema
In 2023, the team evaluated several database options...  ← Boring, no value upfront
```

### Paragraph Rules

| Rule | Target |
|------|--------|
| **Max sentences per paragraph** | 4 |
| **Max words per paragraph** | 80 |
| **Sentence length mix** | Short (≤15 words) + Medium (15–25 words) |
| **One idea per paragraph** | ✅ Always |

### Sentence Variety

Mix sentence lengths for rhythm:

```markdown
✅ GOOD:
PostgreSQL handles all persistent data. The schema includes 12 tables
organized across three logical schemas: core, analytics, and audit.
Each schema is independently versioned through Prisma migrations.

❌ BAD:
PostgreSQL handles all persistent data and the schema includes 12 tables
organized across three logical schemas which are core, analytics, and audit
and each schema is independently versioned through Prisma migrations.
```

---

## 3. Transition Words

Use transitions to improve flow. Target: **≥30% of sentences** start with a transition.

### Common Transitions for Technical Writing

| Purpose | Words |
|---------|-------|
| **Sequence** | First, Next, Then, Finally, After that |
| **Addition** | Additionally, Furthermore, Also, Moreover |
| **Contrast** | However, In contrast, Unlike, On the other hand |
| **Cause** | Because, Since, As a result, Therefore |
| **Example** | For example, Specifically, In particular, Such as |
| **Summary** | In summary, Overall, To summarize |

---

## 4. Active Voice

Use active voice in **≥80%** of sentences:

| ✅ Active | ❌ Passive |
|-----------|-----------|
| "The API validates the token" | "The token is validated by the API" |
| "Run `npm install` to set up" | "The setup is done by running `npm install`" |
| "Users submit forms via POST" | "Forms are submitted by users via POST" |

**Exception:** Passive is OK when the actor is unknown or irrelevant:
- "The request is logged automatically" ✅ (system does it, actor doesn't matter)

---

## 5. Power Writing

### Use Action Verbs

| ❌ Weak | ✅ Strong |
|---------|----------|
| "is able to" | "can" |
| "in order to" | "to" |
| "make use of" | "use" |
| "has the ability to" | "can" |
| "it is important to note" | "Note:" |
| "there are several ways" | "Three approaches exist:" |

### Eliminate Filler

| ❌ Remove | ✅ Instead |
|-----------|----------|
| "basically" | (delete) |
| "actually" | (delete) |
| "very" | (delete or use precise word) |
| "It should be noted that" | (delete, just state the fact) |
| "As you can see" | (delete) |

---

## 6. FAQ Section — Schema-Ready

For SOP and tech docs, write FAQs in a format ready for search engine rich snippets:

```markdown
## Frequently Asked Questions

### How do I reset my password?

Navigate to **Settings → Security → Change Password**. Enter your current
password, then your new password twice. Click **Save** to confirm.

### What happens if the database connection fails?

The system automatically retries 3 times with exponential backoff (1s, 2s, 4s).
If all retries fail, it returns a `503 Service Unavailable` error and logs
the failure to the monitoring dashboard.
```

**Rules for FAQ:**
- Use `### Question?` format (H3 under H2 "FAQ")
- Answer in 2–4 sentences
- Include specific details (numbers, paths, commands)
- Derive from actual code logic, not guesses

---

## 7. Meta Description Templates

### Tech Docs
```
"Complete guide to [Project] [topic]: [key feature 1], [key feature 2], and [key feature 3]. Built with [stack]."
```

### SOP Guides
```
"Step-by-step guide to [action] in [Project]. Covers prerequisites, walkthrough, troubleshooting, and FAQ."
```

### API Reference
```
"[Resource] API reference for [Project]: endpoints, parameters, examples in cURL/Python/JS. Includes auth and error codes."
```

---

## 8. Internal Linking Strategy

Every page MUST link to ≥2 other doc pages. Use this pattern:

### Where to Place Links

| Location | Type | Example |
|----------|------|---------|
| **Quick Reference box** | Related docs | `See [Database](./database)` |
| **Within body text** | Contextual | `...uses the [auth flow](./data-flow#authentication)` |
| **Related section** (bottom) | Cross-references | `## Related\n- [Architecture](./architecture)` |
| **See Also** | Alternative paths | `:::tip\nFor deployment, see [Deploy Guide](./deployment)\n:::` |

### Anchor Text Rules

| ✅ Descriptive | ❌ Generic |
|---------------|-----------|
| "See the [deployment guide](./deployment)" | "Click [here](./deployment)" |
| "Refer to [database schema](./database)" | "See [this page](./database)" |
| "Follow the [user registration SOP](./sop/registration)" | "Read [more](./sop/registration)" |
