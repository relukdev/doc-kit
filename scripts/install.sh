#!/bin/bash
# ============================================================
# DocKit Master — Universal IDE Installer
# Install DocKit Master skill into any AI coding IDE
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
NC='\033[0m'

# Resolve DocKit Master root directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCKIT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ADAPTERS_DIR="$DOCKIT_ROOT/adapters"

# Target project directory (default: current directory)
TARGET_DIR="${TARGET_DIR:-$(pwd)}"

# Flags
DRY_RUN=false
IDE_FLAG=""
COPY_SKILLS=false

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --cursor)    IDE_FLAG="cursor" ; shift ;;
    --claude)    IDE_FLAG="claude" ; shift ;;
    --gemini)    IDE_FLAG="gemini" ; shift ;;
    --opencode)  IDE_FLAG="opencode" ; shift ;;
    --windsurf)  IDE_FLAG="windsurf" ; shift ;;
    --agents)    IDE_FLAG="agents" ; shift ;;
    --all)       IDE_FLAG="all" ; shift ;;
    --dry-run)   DRY_RUN=true ; shift ;;
    --copy-skills) COPY_SKILLS=true ; shift ;;
    --target)    TARGET_DIR="$2" ; shift 2 ;;
    --help|-h)
      echo ""
      echo -e "${BOLD}DocKit Master — Universal IDE Installer${NC}"
      echo ""
      echo "Usage: bash install.sh [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --cursor       Install for Cursor IDE"
      echo "  --claude       Install for Claude Code"
      echo "  --gemini       Install for Gemini CLI"
      echo "  --opencode     Install for OpenCode"
      echo "  --windsurf     Install for Windsurf IDE"
      echo "  --agents       Install generic AGENTS.md"
      echo "  --all          Install for all IDEs"
      echo "  --target DIR   Target project directory (default: current dir)"
      echo "  --copy-skills  Copy skill files into target project"
      echo "  --dry-run      Show what would be installed without doing it"
      echo "  -h, --help     Show this help"
      echo ""
      exit 0
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      exit 1
      ;;
  esac
done

# Header
echo ""
echo -e "${CYAN}╔═══════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║${NC}  ${BOLD}📚 DocKit Master — Universal IDE Installer${NC}       ${CYAN}║${NC}"
echo -e "${CYAN}║${NC}  ${DIM}Install documentation skills into any AI IDE${NC}     ${CYAN}║${NC}"
echo -e "${CYAN}╚═══════════════════════════════════════════════════╝${NC}"
echo ""

# Verify adapters exist
if [ ! -d "$ADAPTERS_DIR" ]; then
  echo -e "${RED}❌ Adapters directory not found: $ADAPTERS_DIR${NC}"
  exit 1
fi

# Verify target directory
if [ ! -d "$TARGET_DIR" ]; then
  echo -e "${RED}❌ Target directory not found: $TARGET_DIR${NC}"
  exit 1
fi

echo -e "${DIM}DocKit Master: $DOCKIT_ROOT${NC}"
echo -e "${DIM}Target project: $TARGET_DIR${NC}"
echo ""

# ============================================================
# Install functions
# ============================================================

install_file() {
  local src="$1"
  local dest="$2"
  local label="$3"

  if [ "$DRY_RUN" = true ]; then
    echo -e "  ${YELLOW}[DRY-RUN]${NC} Would install: ${BOLD}$dest${NC}"
    return
  fi

  # Create parent directory if needed
  mkdir -p "$(dirname "$dest")"

  # Copy file
  cp "$src" "$dest"
  echo -e "  ${GREEN}✅${NC} Installed: ${BOLD}$dest${NC}"
}

install_cursor() {
  echo -e "${BLUE}▸ Cursor IDE${NC}"
  install_file "$ADAPTERS_DIR/cursor.mdc" "$TARGET_DIR/.cursor/rules/dockit-master.mdc" "Cursor"
}

install_claude() {
  echo -e "${BLUE}▸ Claude Code${NC}"
  install_file "$ADAPTERS_DIR/claude.md" "$TARGET_DIR/CLAUDE.md" "Claude"
}

install_gemini() {
  echo -e "${BLUE}▸ Gemini CLI${NC}"
  install_file "$ADAPTERS_DIR/gemini.md" "$TARGET_DIR/GEMINI.md" "Gemini"
}

install_opencode() {
  echo -e "${BLUE}▸ OpenCode${NC}"
  install_file "$ADAPTERS_DIR/opencode.md" "$TARGET_DIR/.opencode/rules/dockit-master.md" "OpenCode"
}

install_windsurf() {
  echo -e "${BLUE}▸ Windsurf IDE${NC}"
  install_file "$ADAPTERS_DIR/windsurf.md" "$TARGET_DIR/.windsurf/rules/dockit-master.md" "Windsurf"
}

install_agents() {
  echo -e "${BLUE}▸ Generic (AGENTS.md)${NC}"
  install_file "$ADAPTERS_DIR/agents.md" "$TARGET_DIR/AGENTS.md" "Generic"
}

copy_skill_files() {
  echo ""
  echo -e "${BLUE}▸ Copying skill files...${NC}"

  local DEST_SKILLS="$TARGET_DIR/.dockit"

  if [ "$DRY_RUN" = true ]; then
    echo -e "  ${YELLOW}[DRY-RUN]${NC} Would copy SKILL.md + skills/ + workflows/ to $DEST_SKILLS/"
    return
  fi

  mkdir -p "$DEST_SKILLS"

  # Copy SKILL.md
  cp "$DOCKIT_ROOT/SKILL.md" "$DEST_SKILLS/SKILL.md"
  echo -e "  ${GREEN}✅${NC} SKILL.md"

  # Copy skills directory
  cp -r "$DOCKIT_ROOT/skills" "$DEST_SKILLS/skills"
  echo -e "  ${GREEN}✅${NC} skills/ ($(ls "$DOCKIT_ROOT/skills" | wc -l | tr -d ' ') files)"

  # Copy workflows directory
  cp -r "$DOCKIT_ROOT/workflows" "$DEST_SKILLS/workflows"
  echo -e "  ${GREEN}✅${NC} workflows/ ($(ls "$DOCKIT_ROOT/workflows" | wc -l | tr -d ' ') files)"

  # Copy templates directory
  if [ -d "$DOCKIT_ROOT/templates" ]; then
    cp -r "$DOCKIT_ROOT/templates" "$DEST_SKILLS/templates"
    echo -e "  ${GREEN}✅${NC} templates/"
  fi

  echo ""
  echo -e "  ${DIM}Skill files installed to: $DEST_SKILLS/${NC}"
}

# ============================================================
# Interactive menu or flag-based install
# ============================================================

if [ -n "$IDE_FLAG" ]; then
  # Flag-based install
  case $IDE_FLAG in
    cursor)   install_cursor ;;
    claude)   install_claude ;;
    gemini)   install_gemini ;;
    opencode) install_opencode ;;
    windsurf) install_windsurf ;;
    agents)   install_agents ;;
    all)
      install_cursor
      install_claude
      install_gemini
      install_opencode
      install_windsurf
      install_agents
      ;;
  esac
else
  # Interactive menu
  echo -e "${BOLD}Select IDE(s) to install for:${NC}"
  echo ""
  echo -e "  ${GREEN}1)${NC} Cursor          ${DIM}(.cursor/rules/dockit-master.mdc)${NC}"
  echo -e "  ${GREEN}2)${NC} Claude Code      ${DIM}(CLAUDE.md)${NC}"
  echo -e "  ${GREEN}3)${NC} Gemini CLI       ${DIM}(GEMINI.md)${NC}"
  echo -e "  ${GREEN}4)${NC} OpenCode         ${DIM}(.opencode/rules/dockit-master.md)${NC}"
  echo -e "  ${GREEN}5)${NC} Windsurf         ${DIM}(.windsurf/rules/dockit-master.md)${NC}"
  echo -e "  ${GREEN}6)${NC} Generic          ${DIM}(AGENTS.md — Kimi, Copilot, etc.)${NC}"
  echo -e "  ${GREEN}7)${NC} All of the above ${YELLOW}★${NC}"
  echo ""
  read -p "$(echo -e ${BLUE}Select [1-7]:${NC} )" IDE_CHOICE

  echo ""

  case $IDE_CHOICE in
    1) install_cursor ;;
    2) install_claude ;;
    3) install_gemini ;;
    4) install_opencode ;;
    5) install_windsurf ;;
    6) install_agents ;;
    7)
      install_cursor
      install_claude
      install_gemini
      install_opencode
      install_windsurf
      install_agents
      ;;
    *)
      echo -e "${RED}❌ Invalid choice${NC}"
      exit 1
      ;;
  esac
fi

# Copy skill files if requested
if [ "$COPY_SKILLS" = true ]; then
  copy_skill_files
fi

# ============================================================
# Summary
# ============================================================

echo ""
echo -e "${CYAN}══════════════════════════════════════════════════════${NC}"
echo ""

if [ "$DRY_RUN" = true ]; then
  echo -e "${YELLOW}🔍 Dry run complete. No files were modified.${NC}"
else
  echo -e "${GREEN}✅ Installation complete!${NC}"
  echo ""
  echo -e "${BOLD}Next steps:${NC}"
  echo -e "  1. Open your project in the IDE"
  echo -e "  2. Ask the AI: ${CYAN}\"Generate docs for this project using DocKit Master\"${NC}"
  echo -e "  3. The AI will follow the DocKit Master procedure automatically"

  if [ "$COPY_SKILLS" != true ]; then
    echo ""
    echo -e "${DIM}💡 Tip: Add --copy-skills to embed skill files in your project${NC}"
    echo -e "${DIM}   This enables fully offline/portable usage.${NC}"
  fi
fi

echo ""
