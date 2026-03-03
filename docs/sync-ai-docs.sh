#!/usr/bin/env bash
set -euo pipefail

DEFAULT_TARGET="/Users/liulipeng/workspace/quicktv/quicktvui-ai/packages/quicktvui-ai/rules/.docs"

usage() {
  cat <<'EOF'
Usage:
  ./sync-ai-docs.sh [target_dir] [--dry-run]

Behavior:
  1) Copy only *.md files from docs/zh-CN -> <target>/zh-CN
  2) Copy entire docs/examples -> <target>/examples
  3) Copy entire docs/public   -> <target>/public

Default target:
  /Users/liulipeng/workspace/quicktv/quicktvui-ai/packages/quicktvui-ai/rules/.docs
EOF
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC_ZH_CN="${SCRIPT_DIR}/zh-CN"
SRC_EXAMPLES="${SCRIPT_DIR}/examples"
SRC_PUBLIC="${SCRIPT_DIR}/public"

TARGET_DIR="${DEFAULT_TARGET}"
DRY_RUN=0

for arg in "$@"; do
  case "$arg" in
    --dry-run)
      DRY_RUN=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      if [[ "${TARGET_DIR}" != "${DEFAULT_TARGET}" ]]; then
        echo "Error: too many positional arguments." >&2
        usage
        exit 1
      fi
      TARGET_DIR="$arg"
      ;;
  esac
done

if [[ ! -d "${SRC_ZH_CN}" || ! -d "${SRC_EXAMPLES}" || ! -d "${SRC_PUBLIC}" ]]; then
  echo "Error: source docs directories are missing." >&2
  exit 1
fi

RSYNC_OPTS=(-av --delete)
if [[ "${DRY_RUN}" -eq 1 ]]; then
  RSYNC_OPTS+=(--dry-run)
fi

mkdir -p "${TARGET_DIR}/zh-CN" "${TARGET_DIR}/examples" "${TARGET_DIR}/public"

echo "[1/3] Sync zh-CN markdown files -> ${TARGET_DIR}/zh-CN"
rsync "${RSYNC_OPTS[@]}" --prune-empty-dirs \
  --include='*/' \
  --include='*.md' \
  --exclude='*' \
  "${SRC_ZH_CN}/" "${TARGET_DIR}/zh-CN/"

echo "[2/3] Sync examples -> ${TARGET_DIR}/examples"
rsync "${RSYNC_OPTS[@]}" "${SRC_EXAMPLES}/" "${TARGET_DIR}/examples/"

echo "[3/3] Sync public -> ${TARGET_DIR}/public"
rsync "${RSYNC_OPTS[@]}" "${SRC_PUBLIC}/" "${TARGET_DIR}/public/"

echo "Done."
if [[ "${DRY_RUN}" -eq 1 ]]; then
  echo "Dry run only. No files were changed."
fi

