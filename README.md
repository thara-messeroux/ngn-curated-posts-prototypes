# NGN Curated Posts prototypes — NUEAC-398

Three front-end prototypes for the WordPress **Curated Posts** admin screen on
Northeastern Global News (`admin.php?page=ngn-curated-posts`), built on WordPress's own
admin design system so any direction drops in without a restyle.

**Live:** https://thara-messeroux.github.io/ngn-curated-posts-prototypes/

| | Direction | Open |
| --- | --- | --- |
| A | List table — the standard `wp-list-table` component, sortable, with row actions | [01-list-table.html](01-list-table.html) |
| B | Grouped accordion — six families, sticky toolbar, collapsible sections | [02-grouped-accordion.html](02-grouped-accordion.html) |
| C | Two-pane workbench — fixed searchable index, detail pane, **live headline in every slot** | [03-two-pane.html](03-two-pane.html) |

## The problem

Curated Posts controls every automatically-filled shelf on the site — the homepage rails,
the Most read lists, the section fronts. There are **47 shelves** on one page.

1. **No search or filter.** Reaching one shelf means reading past the others.
2. **Every shelf renders expanded**, including fields that hold no value. Around 376
   label/value lines are printed on load; roughly half read `None`, `N/A` or `Off`.
3. **Delete sits beside Rename and Duplicate**, same size, same row, with nothing marking
   a shelf as live on the site before it is removed.

## What each prototype does

All three are driven by the same data and share the same fixes:

- Search filters on name and slug, client side, no reload
- Collapsed by default; a shelf opens to show only the fields that are set
- A one-line summary (`stories · post types · include terms`) tells similar shelves apart
- Delete moved behind an overflow menu or row-actions strip, with an inline confirm that
  names the shelf and says it is live
- A state pill: **Live**, or **Needs check** where a shelf has unresolved exclude rules

Direction C adds one thing the others do not: each slot shows the **headline currently
live on the site** for that shelf, so the screen answers "what is on this shelf right
now?" without opening the site in another tab.

All **47 shelves are filled**, 182 headlines in total. Two sources, named on screen:

- **Read off the live page** — scraped from the rail where that shelf renders
- **Matched by this shelf's rules** — fetched from the site's own WordPress REST API
  using the shelf's post type and include terms, newest first

Where a slot could not be filled it is drawn differently and labelled *not captured*,
never shown as empty — a gap in the prototype's data is never mistaken for a gap on the
real site.

## Every file in this repo, and what it does

[FILES.md](FILES.md) lists all of them with links.

## Before / after evidence

**Viewable page: https://thara-messeroux.github.io/ngn-curated-posts-prototypes/evidence/**

[evidence/README.md](evidence/README.md) — screenshots of every state, the measured
numbers (**page height 5,372px to 1,659px, a 69% reduction**), how it was verified three
ways, the four defects found in self-audit, and how to reproduce it.

The change itself is
[PR #898](https://github.com/News-at-Northeastern/environment/pull/898) on
`News-at-Northeastern/environment`.

## Where the screen lives in the codebase

Not a plugin — theme code, and the list is a React app:
`themes/ngn-theme/src/scripts/admin/curated-posts-admin/` (`app.tsx` for the list,
`components/instance-card.tsx` for one card), backed by REST routes in
`inc/admin/curated-posts/class-curated-posts-instance-controller.php`.
Repo: `News-at-Northeastern/environment`.

## Scope

Admin template and stylesheet only. **No change to the data model, the shortcodes, or the
front end.** Nothing a visitor sees changes.

## Files

```
index.html                  Stakeholder hub — problems, three directions, comparison
01-list-table.html          Direction A
02-grouped-accordion.html   Direction B
03-two-pane.html            Direction C
assets/wp-admin.css         WordPress 6.x admin design tokens and components
assets/data.js              The 47 instances, read from the live screen, plus shared helpers
assets/headlines.js         182 headlines, all 47 shelves filled, captured 21 Oct 2026
```

## Data

Shelf settings read from the live wp-admin screen on **20 October 2026**; field names
match the plugin's own labels. Headlines scraped from news.northeastern.edu on
**21 October 2026** — a snapshot, not a feed. In the real plugin these come from the same
query the shelf already runs, so no extra request is needed.

The prototypes write nothing — static HTML, CSS and vanilla JS, no build step, no
dependencies.

## Recommendation

**Direction C, with A as the fallback.** All three solve the three problems. Only C
answers the question editors actually have — *what is on this shelf right now?* — by
showing the live headline in each slot instead of a number.

If the build cost comes back too high, **A plus B's grouping as view links** gets most of
the value for a fraction of the work.
