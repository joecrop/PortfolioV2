#!/bin/bash
set -e

# -- 1. Build resume PDF -------------------------------------------------------
RESUME_DIR="public/resume"

# Detect TinyTeX on macOS (~/Library/TinyTeX) or Linux (~/.TinyTeX)
if [[ -z "$(command -v pdflatex 2>/dev/null)" ]]; then
  MACOS_BIN="$HOME/Library/TinyTeX/bin/universal-darwin"
  LINUX_BIN="$HOME/.TinyTeX/bin/x86_64-linux"
  if [[ -x "$MACOS_BIN/pdflatex" ]]; then
    export PATH="$MACOS_BIN:$PATH"
  elif [[ -x "$LINUX_BIN/pdflatex" ]]; then
    export PATH="$LINUX_BIN:$PATH"
  fi
fi

if command -v pdflatex &>/dev/null; then
  echo "==> pdflatex found - compiling resume..."
  (cd "$RESUME_DIR" && pdflatex -interaction=nonstopmode resume.tex)
elif [[ "$(uname -s)" == "Linux" ]]; then
  # Netlify: install TinyTeX if not already cached
  LINUX_BIN="$HOME/.TinyTeX/bin/x86_64-linux"
  echo "==> Installing TinyTeX..."
  curl -sL "https://yihui.org/tinytex/install-bin-unix.sh" | sh
  export PATH="$LINUX_BIN:$PATH"
  tlmgr install helvetic oberdiek grfext || true
  echo "==> Compiling resume PDF..."
  (cd "$RESUME_DIR" && pdflatex -interaction=nonstopmode resume.tex)
else
  echo "==> No LaTeX found - using pre-committed resume.pdf"
fi

# -- 2. Build blog -------------------------------------------------------------
cd src/blog
PIP=$(command -v pip3 || command -v pip || echo "")
if [[ -n "$PIP" ]]; then
  "$PIP" install -q mkdocs-material
  python3 -m mkdocs build -d ../../public/blog
else
  echo "==> pip not found - skipping blog build"
fi
cd ../..

# -- 3. Build React app --------------------------------------------------------
npm run build
