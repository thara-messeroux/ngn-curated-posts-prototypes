# NUEAC-398 audit: does the redesign close the ticket?

Run against the live prototype at
<https://thara-messeroux.github.io/ngn-curated-posts-prototypes/08-settings-sentence-workbench.html>,
not a local copy, on 23 October 2026.

## The short answer

**The design is finished and proven. The ticket is not closed, and the remaining work is
the larger half.**

Thirty checks pass. Every requirement anyone has stated is met. But NUEAC-398 asks for
the admin screen itself to change, and none of the settings redesign exists in
`themes/ngn-theme/` yet.

---

## 1. Requirements, traced

### From Xris

| What he asked for | Status | Evidence |
| --- | --- | --- |
| No grouping into Featured / Most Read / Latest sections, too high maintenance | Met | The shelf list is a flat A to Z list. No headings, no `optgroup`. |
| No live story slots shown as boxes, the page is for setup not monitoring | Met | No slot or story-row elements anywhere on the page. |
| No red for Exclude terms, keep red for things that matter | Met | Exclude chips are a dashed border with a minus sign in muted ink. Red appears only on the Save button, where it is the Northeastern brand. |
| The settings are the whole purpose, make them premium and modern and follow the NGN design system | Met | The settings are now the primary interface rather than a dialog. Every colour, radius and type size is a token read from the theme's own design system v2. |

### From Thara

| What she asked for | Status |
| --- | --- |
| Keep every piece of information the old design showed, including the stories count | Met. All eight fields audited; the count reads in both the list rows and the sentence. |
| Short, natural, human sentences | Met. Ten sentences rewritten; the longest is 46 words in the worst case and 12 in the common case. |
| No em dashes | Met. Checked against the rendered page text, not the source. |
| Search on every taxonomy, for the future as it scales | Met. Unconditional, after the arbitrary 20-term threshold was removed. |

### From Alex

| What he found | Status |
| --- | --- |
| Editing the shelf you are viewing left stale headlines | Fixed in code on `NUEAC-398-curated-posts-admin`, with six regression tests. |

---

## 2. The data model, field by field

Every field of `QuerySettings` is reachable, verified by clicking each one.

| Field | Where it is | Verified |
| --- | --- | --- |
| `count` | "Show the **4**" | Clamps 1 to 50, matching `min={1} max={50}` |
| `sort` | "**newest** / **most viewed**" | Both options switch the sentence |
| `sortWindowDays` | "from the last **14 days**" | Appears only under most viewed |
| `postTypes` | "**News Post**" | All 28 real types offered |
| `searchPostTypes` | "search **every type**" | Separate list; empty falls back to all 28, as `post-selector.tsx` does |
| `termsInclude` | "in **anything**" | One token per AND group |
| `termsExclude` | "skipping **nothing**" | One flat list, no groups, as the model has it |
| `rotationEnabled` | "**They never rotate**" | Hidden under most viewed, matching `localSort !== 'views'` |
| `rotationInterval` | "Rotate them **every 1h**" | Parsed, and bad input explains itself |
| `rotationStartTime` | In the rotation editor | Drives the next-run line |

---

## 3. Behaviour

| Check | Result |
| --- | --- |
| Save bar appears on change | Pass |
| Switching shelf mid-edit keeps the draft and marks the row | Pass |
| Returning to the shelf restores the draft | Pass |
| Discard reverts | Pass |
| Save clears the bar and the marker | Pass |
| Count typed as 999 clamps to 50, 0 floors at 1 | Pass |
| Interval typed as "banana" explains itself | Pass |
| Add AND group creates a visible box with its own count, search and Remove | Pass |
| Two groups search independently | Pass |
| Search across 12,710 tags returns real matches | Pass |
| No match says so | Pass |
| Focus and caret survive typing | Pass |
| Terms show their parent and post count | Pass |

## 4. Quality gates

| Check | Result |
| --- | --- |
| axe WCAG 2.1 AA at 1280 and 1440 | 0 violations, all nine pages |
| Horizontal overflow at 1440, 1280, 1024, 900, 768 | None |
| Two columns down to 1024, one column at 900 and below | Pass |
| Reachable and operable by keyboard alone | Pass |
| No focus trap | Pass |
| Console errors | None, all nine pages |
| All hub links resolve | Pass, 8 of 8 |

---

## 5. What is not done

This is the part that matters.

| Step | Status |
| --- | --- |
| Settings redesign built in `themes/ngn-theme/` | **Not started.** `git diff develop...NUEAC-398-curated-posts-admin` touches only `curated-posts-admin/`, the list screen. Zero changes to `settings-panel.tsx`, `taxonomy-section.tsx` or `term-search.tsx`. |
| Xris has seen Design E | **No.** |
| PR merged | **No.** #898 was closed unmerged when the work moved back to prototype stage. |
| NUEAC-398 Jira description written | **No.** |

### Two things to carry into implementation

- `rotationInterval` is free text in the prototype and **minutes** in the model. The repo
  already has a `duration-input` component for this.
- `matchCount()` is an invented number. It is labelled "prototype figure" on screen, and
  it must become a real REST call before anyone demos it.

---

## 6. Defects found in the current production screen

Found while auditing, all evidenced, none yet filed.

| Defect | Severity |
| --- | --- |
| `removeTermFilter()` rebuilds the filter as `{ taxonomy, terms }` and drops `andGroups`, so removing any one term silently wipes that taxonomy's AND groups | Data loss |
| 13,108 of 14,983 terms, 87%, cannot be reached by scrolling; the endpoint caps at 500 and Tag stops at "and Innovation." | Architectural |
| Selecting a term inserts a chip area that pushes the list down, so the next click lands on the search box | Usability |
| The AND group's search box is clipped off the right edge | Visual |
| No Cancel button; the close cross is the only way out without saving | Usability |
| Three Department terms are duplicated, once nested and once at top level | Data |
| 101 of 210 Research Topics have no posts; Spotlight's only term is unused | Data |

---

## 7. Verdict

| | |
| --- | --- |
| Design complete and proven | Yes |
| Every stated requirement met | Yes |
| Closes NUEAC-398 | **No** |
| Share of the ticket done | 7 of 11 steps |

The design half is finished to a standard that will survive review. The build half has not
started, and it is the part that takes the time: real REST calls, the `duration-input`
component, 28 post types and per-type taxonomies, and the 500-term cap.

The single thing standing in front of all of it is Xris confirming the direction.
