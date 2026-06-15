# MANAS Paper-Minimal Design System

## Principles

- Treat the interface as a quiet paper workspace, not a dashboard skin. Use white or near-white backgrounds, calm text contrast, and restrained color.
- Build hierarchy with whitespace, alignment, type weight, and 1px separators before adding containers.
- Keep radius small and purposeful. Rounded containers should not become the dominant visual language.
- Prefer workbench density over marketing composition. Users should be able to scan status, content, and next actions quickly.
- Keep visual assets and interaction affordances tied to real product state. Do not add decorative elements that do not help the workflow.

## Layout Patterns

- Use a top status bar when the page has live state, session identity, or global actions. Keep it light and horizontal.
- Use a main split layout for workbench pages: primary content on the left, generated summary, context, or secondary actions on the right.
- Use a bottom lightweight control bar for persistent live controls such as recording, pause/resume, mark important, add note, and end/generate.
- Use timelines, text streams, and document-like sections for transcript or archive content. Avoid making transcript data look like a log table.
- Separate columns with a thin vertical divider. Avoid thick cards or nested card frames for main work areas.

## Component Tone

- Buttons should say what will actually happen. Destructive or final actions need confirmation and result-oriented copy.
- Save, generate, refresh, retry, queued, running, paused, and failed states must be represented truthfully. Do not show an old error while a new queued/running task is active.
- Icons should support scanning, not decorate. Use existing icon conventions in the target project.
- Empty states should be quiet and useful, with enough context to explain the current state without instructional clutter.
- Numeric and time data should remain stable in fixed-width or clearly aligned areas so live updates do not shift the layout.

## Anti-Patterns

- Do not use a traditional backend/admin table as the primary structure for live meeting, archive detail, or workspace pages.
- Do not wrap the main page in large white rounded cards or thick bordered panels.
- Do not preserve a standalone player shell when the interaction is better expressed as a slim live control bar.
- Do not use decorative gradient blobs, oversized hero treatment, or marketing-card composition for operational MANAS screens.
- Do not leave old selectors, dead demo data, unused visual blocks, or stale responsive overrides after a migration.
