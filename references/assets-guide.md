# MANAS Paper UI Assets Guide

Use bundled assets only after inspecting the target app. They are migration starting points, not mandatory dependencies.

## CSS Baseline

Copy `assets/styles/manas-paper-ui.css` when the target page lacks a stable paper-minimal layout foundation.

- Keep the `mp-` prefix unless the target project has a stricter naming convention.
- Map `--mp-*` tokens to existing project tokens first. In MANAS, prefer existing `--bg`, `--surface`, `--text`, `--muted`, `--line`, `--accent`, `--success`, `--warning`, and `--danger` when present.
- Delete unused selectors after the migration. Do not paste the whole file if the target only needs status badges or a transcript stream.
- Preserve the low-radius, thin-line, no-shadow character unless the product owner explicitly changes the visual direction.

## React Workbench Skeleton

Copy `assets/react/ManasPaperWorkbench.tsx` when the target page needs the standard MANAS workbench frame.

- Treat it as a slot-based structure: topbar, status row, primary stream, side panel, and bottom controls.
- Replace placeholder content and action handlers with real state from the target page.
- Keep state text truthful. Do not display failed/error UI for queued, running, pending, or retrying work.
- Use local icon and button components if the project already has them; the skeleton intentionally has no icon dependency.

## What Not To Copy

- Do not copy assets into production code before confirming the real route, state source, and page role.
- Do not create a parallel design system if the target project already has equivalent tokens and primitives.
- Do not use the workbench skeleton for simple settings rows, static documents, or pages that only need a small local style adjustment.
