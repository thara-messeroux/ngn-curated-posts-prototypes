# What is in here, and what each file does

Everything built for **NUEAC-398**, the Curated Posts admin redesign on Northeastern
Global News. Live index: https://thara-messeroux.github.io/ngn-curated-posts-prototypes/

---

## The prototypes

Three directions for the same screen, all driven by the same data, all built on
WordPress core admin design tokens so any of them drops into wp-admin without a restyle.

| File | Opens | What it does |
| --- | --- | --- |
| [`index.html`](index.html) | [live](https://thara-messeroux.github.io/ngn-curated-posts-prototypes/) | The stakeholder hub. States the three problems with measured numbers, presents the three directions side by side, and gives a recommendation. Start here. |
| [`01-list-table.html`](01-list-table.html) | [live](https://thara-messeroux.github.io/ngn-curated-posts-prototypes/01-list-table.html) | **Direction A.** The screen as a standard WordPress list table: sortable columns, view links, row actions on hover. Lowest build cost, highest familiarity. |
| [`02-grouped-accordion.html`](02-grouped-accordion.html) | [live](https://thara-messeroux.github.io/ngn-curated-posts-prototypes/02-grouped-accordion.html) | **Direction B.** Six collapsible families derived from the instance names, with a toolbar that sticks to the top of the screen. |
| [`03-two-pane.html`](03-two-pane.html) | [live](https://thara-messeroux.github.io/ngn-curated-posts-prototypes/03-two-pane.html) | **Direction C.** A searchable index on the left that never moves, settings on the right, and the real headline currently live on the site in every slot. The only direction that shows content rather than configuration. |

## What the prototypes are built from

| File | What it does |
| --- | --- |
| [`assets/wp-admin.css`](assets/wp-admin.css) | The WordPress 6.x admin design system as tokens and components: surfaces, borders, text, the blue and the danger red, `.button`, `.button-primary`, `.wp-list-table`, notices, pills. Shared by all three directions. |
| [`assets/data.js`](assets/data.js) | All 47 curated instances read off the live wp-admin screen on 20 October 2026, with the plugin's own field names, plus the shared helpers the three directions use to render terms, summaries and pills. |
| [`assets/headlines.js`](assets/headlines.js) | 182 headlines filling every slot on all 47 instances. Each one records where it came from: `rail` means it was read off the live page, `rule` means it was fetched through the site's WordPress REST API using that instance's own post type and include terms. |

## The evidence

| File | What it does |
| --- | --- |
| [`evidence/README.md`](evidence/README.md) | **The before and after.** Measured numbers, embedded screenshots of every state, how it was verified three ways, what could not be run and why, the four defects found in self-audit, and how to reproduce the whole thing. |
| `evidence/before-01-viewport-1440.png` | The screen as it was: fully expanded cards, no search. |
| `evidence/before-02-fullpage-1440.png` | The same, top to bottom. 5,372px. |
| `evidence/after-01-viewport-1440.png` | After: toolbar, collapsed cards with a summary line. |
| `evidence/after-02-fullpage-1440.png` | The same, top to bottom. 1,659px. |
| `evidence/after-03-search-1440.png` | Search filtering to one card, count reading "1 of 14". |
| `evidence/after-04-expanded-1440.png` | One card opened, showing only the settings that hold a value. |
| `evidence/after-05-1280px.png`, `-1280-fullpage.png`, `-1440px.png` | The same screen at both widths, proving no horizontal scroll and no toolbar wrap. |
| `evidence/after-06-keyboard-focus.png` | The card header focused by keyboard, with its focus ring. |

## Documentation

| File | What it does |
| --- | --- |
| [`README.md`](README.md) | The repo's front page: the problem, the three directions, what they share, the scope line, and the recommendation. |
| [`FILES.md`](FILES.md) | This file. |

---

## The actual code change

The implementation does not live in this repo. It is on a branch of the NGN monorepo.

**[PR #898 — News-at-Northeastern/environment](https://github.com/News-at-Northeastern/environment/pull/898)**, branch `NUEAC-398-curated-posts-admin`, based on `develop`.

| File | What it does |
| --- | --- |
| `themes/ngn-theme/src/scripts/admin/curated-posts-admin/app.tsx` | Holds the filter and expansion state for the list, and decides which instances are visible. Changed. |
| `.../components/instance-filter.tsx` | **New.** The toolbar — search across key and label, the group filter, the visible count, collapse all — plus the rules that derive a group from an instance key. |
| `.../components/instance-card.tsx` | One instance. Now collapsible, with a summary line in the header, settings that hold no value omitted, and a delete confirm that names what it is about to remove. Changed. |
| `.../index.scss` | Layout only, per the file's own convention: the toolbar, the card header button, and the clamp that makes a long label truncate instead of widening the row. Changed. |

Two commits: `501768c0a` builds it, `01fc8ce9e` fixes four defects found auditing it.

---

## Scope

Admin screen only. **No change to the data model, the REST layer, the store, the
shortcodes, or anything a visitor sees.**
