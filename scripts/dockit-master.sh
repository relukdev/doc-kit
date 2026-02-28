#!/bin/bash
# ============================================================
# DocKit Master — Documentation Generator CLI
# Generates optimized prompts for any AI coding IDE
# ============================================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
DIM='\033[2m'
NC='\033[0m' # No Color

# Header
echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║${NC}  ${BOLD}📚 DocKit Master — Documentation Generator${NC}  ${CYAN}║${NC}"
echo -e "${CYAN}║${NC}  ${DIM}Works with any AI coding IDE${NC}               ${CYAN}║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════╝${NC}"
echo ""

# Step 0: Choose IDE
echo -e "${BOLD}🖥  Step 0: Target IDE${NC}"
echo ""
echo -e "  ${GREEN}1)${NC} Antigravity    ${DIM}(Google Gemini)${NC}"
echo -e "  ${GREEN}2)${NC} Cursor         ${DIM}(Cursor IDE)${NC}"
echo -e "  ${GREEN}3)${NC} Claude Code    ${DIM}(Anthropic)${NC}"
echo -e "  ${GREEN}4)${NC} Gemini CLI     ${DIM}(Google)${NC}"
echo -e "  ${GREEN}5)${NC} OpenCode       ${DIM}(Terminal-based)${NC}"
echo -e "  ${GREEN}6)${NC} Windsurf       ${DIM}(Codeium)${NC}"
echo -e "  ${GREEN}7)${NC} Other          ${DIM}(Kimi, Copilot, etc.)${NC}"
echo ""
read -p "$(echo -e ${BLUE}Select [1-7] \(Enter = Antigravity\):${NC} )" IDE_CHOICE

case $IDE_CHOICE in
  2) IDE="cursor" ; IDE_NAME="Cursor" ;;
  3) IDE="claude" ; IDE_NAME="Claude Code" ;;
  4) IDE="gemini" ; IDE_NAME="Gemini CLI" ;;
  5) IDE="opencode" ; IDE_NAME="OpenCode" ;;
  6) IDE="windsurf" ; IDE_NAME="Windsurf" ;;
  7) IDE="other" ; IDE_NAME="AI IDE" ;;
  *) IDE="antigravity" ; IDE_NAME="Antigravity" ;;
esac

echo ""

# Step 1: Choose document type
echo -e "${BOLD}📑 Step 1: Document Type${NC}"
echo ""
echo -e "  ${GREEN}1)${NC} knowledge  — Personas, JTBD, Process Flows"
echo -e "  ${GREEN}2)${NC} tech       — Technical docs (Architecture, DB, Deployment)"
echo -e "  ${GREEN}3)${NC} sop        — SOP User Guides (enriched with knowledge)"
echo -e "  ${GREEN}4)${NC} api        — API Reference (endpoints, schemas)"
echo -e "  ${GREEN}5)${NC} all        — Full documentation suite ${YELLOW}★ recommended${NC}"
echo ""
read -p "$(echo -e ${BLUE}Select [1-5]:${NC} )" DOC_CHOICE

case $DOC_CHOICE in
  1) DOC_TYPE="knowledge" ;;
  2) DOC_TYPE="tech" ;;
  3) DOC_TYPE="sop" ;;
  4) DOC_TYPE="api" ;;
  5) DOC_TYPE="all" ;;
  *) echo -e "${RED}❌ Invalid choice${NC}"; exit 1 ;;
esac

echo ""

# Step 2: Choose output format
echo -e "${BOLD}🎨 Step 2: Output Format${NC}"
echo ""
echo -e "  ${GREEN}1)${NC} astro      — Astro Starlight site (beautiful, fast, searchable) ${YELLOW}★ recommended${NC}"
echo -e "  ${GREEN}2)${NC} markdown   — Plain Markdown (simple, portable)"
echo ""
read -p "$(echo -e ${BLUE}Select [1-2] \(Enter = Astro\):${NC} )" FORMAT_CHOICE

case $FORMAT_CHOICE in
  2) FORMAT="markdown" ;;
  *) FORMAT="astro" ;;
esac

echo ""

# Step 3: Source code path
echo -e "${BOLD}📂 Step 3: Source Code Path${NC}"
echo ""
read -p "$(echo -e ${BLUE}Path to project root:${NC} )" SOURCE_PATH

# Validate path
if [ ! -d "$SOURCE_PATH" ]; then
  echo -e "${RED}❌ Directory not found: $SOURCE_PATH${NC}"
  exit 1
fi

# Convert to absolute path
SOURCE_PATH=$(cd "$SOURCE_PATH" && pwd)

echo ""

# Step 4: Documentation language
echo -e "${BOLD}🌏 Step 4: Output Language${NC}"
echo ""
echo -e "  ${GREEN}1)${NC} en — English"
echo -e "  ${GREEN}2)${NC} vi — Tiếng Việt"
echo -e "  ${GREEN}3)${NC} zh — 中文"
echo -e "  ${GREEN}4)${NC} ru — Русский"
echo ""
read -p "$(echo -e ${BLUE}Select [1-4] \(Enter = English\):${NC} )" LANG_CHOICE

case $LANG_CHOICE in
  2) DOC_LANG="Vietnamese" ;;
  3) DOC_LANG="Chinese" ;;
  4) DOC_LANG="Russian" ;;
  *) DOC_LANG="English" ;;
esac

echo ""

# Step 5: SEO optimization
echo -e "${BOLD}🔍 Step 5: SEO Optimization${NC}"
echo ""
echo -e "  ${GREEN}1)${NC} yes — SEO frontmatter + checklist + sitemap ${YELLOW}★ recommended${NC}"
echo -e "  ${GREEN}2)${NC} no  — Skip SEO"
echo ""
read -p "$(echo -e ${BLUE}Select [1-2] \(Enter = Yes\):${NC} )" SEO_CHOICE

case $SEO_CHOICE in
  2) SEO="no" ;;
  *) SEO="yes" ;;
esac

echo ""

# Step 6: LLM optimization
echo -e "${BOLD}🤖 Step 6: AI/LLM Optimization${NC}"
echo ""
echo -e "  ${GREEN}1)${NC} yes — AI-readable structure + NotebookLM sitemap ${YELLOW}★ recommended${NC}"
echo -e "  ${GREEN}2)${NC} no  — Skip LLM optimization"
echo ""
read -p "$(echo -e ${BLUE}Select [1-2] \(Enter = Yes\):${NC} )" LLM_CHOICE

case $LLM_CHOICE in
  2) LLM="no" ;;
  *) LLM="yes" ;;
esac

echo ""
echo -e "${CYAN}══════════════════════════════════════════════${NC}"
echo ""

# Generate prompt based on IDE
CORE_PROMPT="Use the DocKit Master skill to generate documentation for the project at: $SOURCE_PATH

Configuration:
- Document type: $DOC_TYPE
- Output format: $FORMAT
- Language: $DOC_LANG
- SEO optimization: $SEO
- LLM optimization: $LLM"

case $IDE in
  antigravity)
    PROMPT="${CORE_PROMPT}

Please refer to the skill file at skills/doc-kit/SKILL.md and execute the procedure.
Start from Step 2 (Analyze Codebase) since input parameters are already provided above."
    PASTE_TARGET="Antigravity"
    ;;
  cursor)
    PROMPT="${CORE_PROMPT}

Read the DocKit Master instructions in .cursor/rules/dockit-master.mdc.
Follow the SKILL.md procedure starting from Step 2 (Analyze Codebase) — input is already provided."
    PASTE_TARGET="Cursor Chat"
    ;;
  claude)
    PROMPT="${CORE_PROMPT}

Follow the DocKit Master procedure defined in CLAUDE.md and SKILL.md.
Start from Step 2 (Analyze Codebase) since input parameters are already provided."
    PASTE_TARGET="Claude Code"
    ;;
  gemini)
    PROMPT="${CORE_PROMPT}

Follow the DocKit Master procedure defined in GEMINI.md (which imports SKILL.md).
Start from Step 2 (Analyze Codebase) since input parameters are already provided."
    PASTE_TARGET="Gemini CLI"
    ;;
  opencode)
    PROMPT="${CORE_PROMPT}

Follow the DocKit Master procedure in .opencode/rules/dockit-master.md and SKILL.md.
Start from Step 2 (Analyze Codebase) since input parameters are already provided."
    PASTE_TARGET="OpenCode"
    ;;
  windsurf)
    PROMPT="${CORE_PROMPT}

Follow the DocKit Master rules defined in .windsurf/rules/dockit-master.md.
Start from Step 2 (Analyze Codebase) since input parameters are already provided."
    PASTE_TARGET="Windsurf"
    ;;
  other)
    PROMPT="${CORE_PROMPT}

Follow the DocKit Master procedure defined in AGENTS.md.
Start from Step 2 (Analyze Codebase) since input parameters are already provided."
    PASTE_TARGET="your AI IDE"
    ;;
esac

echo -e "${BOLD}✅ Prompt generated for ${YELLOW}$IDE_NAME${NC}!${NC}"
echo ""
echo -e "${YELLOW}━━━ Copy the prompt below and paste it into $PASTE_TARGET ━━━${NC}"
echo ""
echo -e "${GREEN}$PROMPT${NC}"
echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Copy to clipboard if pbcopy available (macOS)
if command -v pbcopy &> /dev/null; then
  echo "$PROMPT" | pbcopy
  echo -e "${GREEN}📋 Copied to clipboard! Paste (Cmd+V) into $PASTE_TARGET.${NC}"
fi

echo ""
