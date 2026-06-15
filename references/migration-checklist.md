# MANAS Paper UI Migration Checklist

## Before Editing

- Confirm the target page role: live console, archive/detail, settings, overview, file/detail, or another workspace surface.
- Find the real entrypoint and wiring. In MANAS this often means checking route/navigation code, the view component, hooks, and imported CSS files.
- Identify state sources before changing UI: session, recording, transcript, generated minutes, save status, queued/running/error task state, settings, and device status.
- Inspect current theme variables and page styles. Reuse local tokens such as background, text, muted text, line, accent, success, warning, and danger when they exist.
- Search for existing design constraints and stale selectors with `rg` before deciding what to replace.

## During Migration

- Establish page structure first: top status/action area, primary content region, optional side context region, and persistent controls when needed.
- Move existing behavior into the new structure before changing data contracts. Do not invent new state if existing hooks or props already provide it.
- Replace table/card-heavy layouts with text streams, document sections, thin dividers, compact action rows, and clear state clusters.
- Keep user-visible Chinese copy aligned with actual behavior. Do not rename an archive center, preview page, save model, or export state without product intent.
- When removing a rejected visual block, remove its component markup, CSS selectors, demo data, and responsive leftovers together.

## Verification

- Run `pnpm lint` after React or CSS-adjacent component edits.
- Run `pnpm build` after frontend migrations.
- Run `pnpm test:server` when server routes, shared types, persisted session shape, export behavior, or settings contracts are touched.
- If a dev server can be started, inspect the page at the active local URL and verify that text does not overlap, fixed controls do not resize unexpectedly, and live states read correctly.
- Use `rg` to confirm old visual names, deleted components, and dead data files are no longer referenced.
