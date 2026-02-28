---
title: "analyze-codebase API Reference"
description: "API reference for the analyze-codebase skill — inputs, scanning procedure, output schema, and configuration options"
keywords: ["API", "analyze-codebase", "codebase scanning"]
robots: "index, follow"
sidebar:
  order: 2
---

# analyze-codebase API

> **Quick Reference**
> - **File**: `skills/analyze-codebase.md` (181 lines)
> - **Input**: Project root directory
> - **Output**: `docs/analysis.md`
> - **Dependencies**: None (first in pipeline)

## Interface

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| PROJECT_PATH | path | Yes | Absolute path to project root |
| SCOPE | enum | Yes | `full` (all dirs) or `focused` (specific dir) |
| FOCUS_TARGET | string | No | Directory name when scope is focused |

## Output Schema

The skill generates `docs/analysis.md` with these sections:

| Section | Content |
|---------|---------|
| Quick Reference | Project name, type, languages, frameworks, LOC |
| Architecture | Mermaid graph TB diagram of layers |
| Directory Structure | Annotated tree of important directories |
| Dependencies | Table: category, package, version, purpose |
| Route Map | Table: method, path, handler, auth |
| Database Schema | Table: table, columns, relationships |
| Key Files | Table: file, role, lines |
| Test Coverage | Table: framework, test files, coverage |

## Scanning Procedure

1. Read README.md, package.json, Makefile
2. Detect tech stack from config files (20+ patterns)
3. Map 6 architecture layers (presentation → data)
4. Identify entry points (server, routes, CLI)
5. Extract route map from controllers
6. Extract database schema from models/migrations
7. Analyze dependency graph
8. Detect test framework and coverage

## Rules

- Trace actual code — never guess from filenames
- Cite every finding: `(file_path:line_number)`
- Output file must be named `analysis.md` (not `_analysis.md`)
- Use Mermaid dark-mode colors
- Include Quick Reference card at top

## Related

- [Content Guidelines API](./content-guidelines)
- [Skill Pipeline Workflow](../flows/wf-skill-pipeline)
- [System Architecture](../architecture)
