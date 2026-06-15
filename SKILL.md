---
name: manas-paper-ui
description: "Use when Codex needs to migrate, refine, or review MANAS-style paper-minimal UI: OpenAI-like restrained paper surfaces, live meeting console layouts, archive/settings semantics, thin divider hierarchy, workbench density, and avoidance of admin-table feel, thick cards, player shells, large rounded white containers, and stale visual remnants."
---

# MANAS Paper UI

## Workflow

1. Inspect the target feature before designing. Identify the real route, component entrypoint, state sources, CSS imports, theme variables, and any existing page-specific conventions.
2. Read `references/design-system.md` before choosing the visual direction. Use it as the source of truth for MANAS paper-minimal layout, hierarchy, component tone, and anti-patterns.
3. Read `references/migration-checklist.md` before editing. Follow the checklist to preserve existing data flow, user-visible semantics, and cleanup expectations.
4. Read `references/assets-guide.md` when the task needs reusable frontend structure. Copy from `assets/styles/manas-paper-ui.css` or `assets/react/ManasPaperWorkbench.tsx` only when it reduces real implementation work.
5. Make the smallest implementation that moves the target surface into the MANAS paper style. Prefer existing components, CSS variables, icons, and local state contracts.
6. Verify with the repo's normal frontend checks. For this repository, use `pnpm lint` and `pnpm build`; add `pnpm test:server` when server or shared contracts are affected.

## Operating Rules

- Preserve product semantics over visual decoration. A queued or running task is not an error; pause, save, generate, retry, and end states must match actual state.
- Use paper-like structure: white or near-white surfaces, breathing room, thin separators, restrained borders, compact controls, and scannable workbench density.
- Avoid recreating rejected UI: traditional admin tables, thick card grids, large rounded white containers, standalone player shells, decorative blobs, and leftover old selectors.
- Clean up old JSX, styles, dead files, and stale responsive rules when replacing a visual pattern.

## Bundled Assets

- `assets/styles/manas-paper-ui.css`: reusable paper-minimal CSS tokens, shell, split workspace, transcript stream, side panel, controls, and state badges.
- `assets/react/ManasPaperWorkbench.tsx`: dependency-light React skeleton for a MANAS-style workbench page with slots for status, primary stream, side content, and controls.
