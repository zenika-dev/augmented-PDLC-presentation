#!/bin/sh
# SessionStart hook (.claude/settings.json): on a fresh clone (no node_modules/ yet) tells Claude that /welcome
# exists, so it can suggest it. Silent in every other session. The text reaches Claude, not the screen.
dir="${CLAUDE_PROJECT_DIR:-.}"
[ -d "$dir/node_modules" ] && exit 0
printf '%s\n' '{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"This repository of decks provides /welcome, a newcomer'"'"'s first command: it checks the setup (npm install has not run yet here), explains the framework'"'"'s concepts, lists the decks and routes to the task."}}'
