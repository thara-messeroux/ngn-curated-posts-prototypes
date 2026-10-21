# NGN Curated Posts prototypes — NUEAC-398

Three front-end prototypes for the WordPress **Curated Posts** admin screen on
Northeastern Global News (`admin.php?page=ngn-curated-posts`), built on WordPress's own
admin design system so any direction drops in without a restyle.

**Live:** https://thara-messeroux.github.io/ngn-curated-posts-prototypes/

| | Direction | Open |
| --- | --- | --- |
| A | List table — the standard `wp-list-table` component, sortable, with row actions | [01-list-table.html](01-list-table.html) |
| B | Grouped accordion — six families, sticky toolbar, collapsible sections | [02-grouped-accordion.html](02-grouped-accordion.html) |
| C | Two-pane workbench — fixed searchable index, detail pane on the right | [03-two-pane.html](03-two-pane.html) |

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
```

## Data

Read from the live wp-admin screen on **20 October 2026**. Field names match the plugin's
own labels. The prototypes write nothing — they are static HTML, CSS and vanilla JS with
no build step and no dependencies.

## Recommendation

**Direction A, with B's grouping added as view links above the table.** A costs the least,
is the most familiar, and solves all three problems. B's real contribution is the
grouping, which fits inside A as the same pattern the Posts screen uses for post statuses.
C is the strongest editing experience and worth revisiting if editors say the rules need
more room than a table row allows.
