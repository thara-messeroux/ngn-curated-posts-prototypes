# Ticket log — Curated Posts admin

Running log of every ticket raised from this work. Newest last.

---

## NUEAC-398 — Curated Posts index is unusable at 47 instances

**Status** — PR open, awaiting review
**Link** — https://home.atlassian.com/o/885d5626-3540-13b5-7jd5-20bc13ckaj12/s/557f7808-1723-41d7-9af7-03de41ebca40/project/NUEAC-398/updates
**PR** — https://github.com/News-at-Northeastern/environment/pull/898
**Owner** — Thara Messeroux, reporter and assignee

**Why it was filed**
The index renders every instance fully expanded, in creation order, with no search. 47
instances on production; 5,372px of page for 14 on the local environment.

**Measured impact**
Page height 5,372px to 1,636px, a 70% reduction. Six screens of scroll down to 1.8. The
screen now shows what each shelf is publishing, which it never did before.

**Evidence**
https://thara-messeroux.github.io/ngn-curated-posts-prototypes/evidence/

**Still to verify**
PHP suite could not run in the local environment — no Composer autoload. The change
contains no PHP.

---

## NUEAC-399 — not filed, and no longer needed

**Status** — withdrawn before filing

It was drafted to defer the two-pane workbench on the grounds that live slot contents
would cost one query per instance across 47 instances. That reasoning was wrong: it is a
cost of the single-column layout, not of the data. In two panes only the selected shelf
needs stories, so it is one request on selection.

The workbench shipped inside NUEAC-398 instead, with one new read-only endpoint.

---

## Feedback from review — 23 October 2026

**Grouping removed.** Xris: grouping the index into Featured, Most read and Latest is
high maintenance for the team.

He is right, and the earlier note here that it was derived "so nothing new has to be kept
in sync" was only half true. The groups came from the key prefix, but the mapping itself
was hardcoded and the naming convention became load-bearing: rename `latest-health` and it
drops silently into Other; add a family and someone edits code.

The index is now one flat list sorted A to Z. No rule, nothing to maintain, and shelves
that share a name prefix still sit together because sorting puts them there.

**Live slots removed.** Xris: the page is for setting up curated posts now and then, not
for watching what is live, so the slot boxes are not needed.

Taken out. Worth recording that this removes the one thing Direction C had that A and B
did not, which changes the comparison rather than just trimming the screen. With the
slots gone the right pane holds the rules alone, and the case for two panes over a plain
list table is narrower: it is now about finding a shelf and keeping your place while you
edit, not about seeing what a shelf is publishing.

**Red removed from exclude terms.** Xris: red should be kept for things that genuinely
matter.

Right. An excluded term is configuration, not a problem, and spending the alarm colour on
a routine setting means it carries no weight when something does need attention. The chips
are now neutral, told apart from include terms by a dashed edge and a leading minus rather
than by colour, which also means the difference survives for anyone who cannot rely on
hue.

**Stories count restored.** Spotted in review that the new detail pane had lost it.

My regression, not a decision. The count lived in the slots as the number of boxes drawn,
so removing the slots took it with it. Every field the old screen carried is now on the
new one again.

One deliberate difference remains: the old screen listed the next five rotation times as
five lines, the new one says how many are scheduled, with Interval and Starts above it.
Worth confirming that is wanted rather than the full list.

**Settings audit against the real model — 23 October 2026**

Checked the designs field by field against `QuerySettings` in
`themes/ngn-theme/src/scripts/admin/curated-posts/types.ts` rather than against the
screenshots. Three gaps, all now closed in Design D:

| Field | Was | Now |
| --- | --- | --- |
| `sortWindowDays` | missing | shown only for a most-viewed sort, in the sentence too |
| `searchPostTypes` | missing | its own step, defaulting to the auto types |
| rotation vs sort | both offered at once | rotation is off for a most-viewed sort, and says why |

The third is a rule, not a field. `settings-panel.tsx` saves
`rotationEnabled: localSort !== 'views' && localRotationEnabled`, so the two were never
compatible. None of the three designs knew that.

Two notes carried forward rather than fixed:

- `rotationInterval` is a number of minutes in the model; the designs take "1h" as text
  and would need the repo's existing `duration-input` component.
- Taxonomies differ per post type. Parents and Family Article offers Tag, Audience,
  Campus, Newsfeed Display and Spotlight, where Post also offers Category, Article
  Format, Department and Kicker Category. The designs list them globally.

**Rotation line reworded.** Review question: under a midnight start, why does it say the
next run is 1:00 PM and not 1:00 AM?

The time was right and the sentence was not. It rotates hourly from midnight, so at
12:37 PM the next one really is 1:00 PM. But "Next at 1:00 PM" under "Starting at
12:00 AM" reads as a sequence, as though the first run were in the afternoon.

It now says both things: "Runs every 1h from 12:00 AM. Next at 1:00 PM, in 23 min." The
schedule and the next run are different facts and the line was only giving one of them.

**Design C completed against the real model.** Preferred in review for reading well, so
it was audited the same way D was.

It was missing the same three things, now added:

- `sortWindowDays` reads inside the sentence: "the 4 most viewed News Post **from the
  last 30 days**". It only appears for a most-viewed sort.
- Rotation and a most-viewed sort are mutually exclusive, so instead of offering a
  control that gets dropped the sentence says "A most-viewed order changes on its own,
  so there is no rotation."
- `searchPostTypes` gets its own short sentence, since what a hand-pinned search offers
  is a different question from what fills the shelf: "When someone pins a story by hand,
  search the same types."

A bug found while stress-testing it: choosing a term re-rendered the editor and snapped
the taxonomy dropdown back to Category, so picking two kicker terms in a row was
impossible. The open taxonomy is now remembered.

**Where it still strains.** With four post types, three include terms and three exclude
terms the sentence runs to 46 words over eight lines. It stays readable and the page does
not overflow, but it is no longer a glance. Most shelves are far smaller than that, so
this is a question of how often the worst case turns up rather than a fault.

---

## Settings E — the sentence, in the pane (`08-settings-sentence-workbench.html`)

C's sentence with D's layout, because the two things C was short on were both the
dialog's fault. A 600px dialog covers the shelf list and caps the sentence width, which
is what made the 46-word worst case look bad. Moving the same sentence into the pane
gives it the full column and leaves the list on screen.

C already had a live count; what it gained here is per-shelf unsaved state. Switching
shelf mid-edit keeps the draft and marks the row with a dot, so there is nothing to lose
by looking at another shelf.

Verified at 1280 and 1440 in a real browser: no horizontal overflow, no axe WCAG 2.1 AA
violations, no console errors, count updates on every keystroke, and all eight settings
reachable including `sortWindowDays`, `searchPostTypes` and the most-viewed/rotation
rule. Screenshot at `evidence/settings-e-sentence-workbench.png`.

Still carried forward from the other designs: taxonomies are listed globally rather than
per post type, `rotationInterval` is text here but minutes in the model, and
`matchCount()` is a stand-in that must be labelled as such in any demo.

---

## Next-run sentence reworded (`assets/settings-data.js`)

"Runs every 1h from 12:00 AM. Next at 1:00 PM" was read as a mistake twice, because
1:00 AM is what follows 12:00 AM. The maths was right — 1:00 AM ran twelve hours ago,
and 1:00 PM is the next one from now — but the sentence never said what time it was,
so there was nothing to anchor "next" to.

Now: "Every 1h from 12:00 AM. It's 12:44 PM now, so the next run is 1:00 PM — 16 min
away." Tested against a fixed clock, including half past midnight (correctly says 1:00
AM), the last minute of the day, and an interval that crosses midnight.

Shared by Settings A, B, D and E.

---

## Audit against the real dialog: AND groups were missing (`08`)

Checked every design against `curated-posts/types.ts` rather than against the
screenshots. Three differences, one of them serious.

**1. AND groups — a real gap, now fixed.** `TaxonomyFilterState.andGroups` is
`number[][]`: further include lists for the same taxonomy that the query ANDs together,
so "has a founder tag AND a tech tag" is two groups and never one merged list. No design
of mine had it. E now renders each group as its own token joined by "and also in", and
the editor can add or drop a group.

**2. Terms are tri-state, not two lists.** `TermFilterMode` is `'include' | 'exclude' |
'none'` per term — the radios and "No filter" in the dialog. The sentence's two buckets
produce the same query, so this is a presentation difference, not a gap.

**3. Taxonomies nested under each post type is duplication.** The dialog repeats the
taxonomy list under every checked post type, but `QuerySettingsUIState.taxonomyFilters`
is `Record<string, TaxonomyFilterState>` keyed by taxonomy alone. Setting Tag under News
Post is the same state as Tag under Parents and Family Article. The flat list in these
designs is the honest shape; the nesting invites editors to believe they are setting two
different things.

Found in passing, worth a ticket: `removeTermFilter()` in `settings-panel.tsx` rebuilds
the filter as `{ taxonomy, terms }` and drops `andGroups`, so removing any one term
silently wipes that taxonomy's AND groups.

Also fixed here: the taxonomy `<select>` had no label (axe `select-name`).
Verified at 1280 and 1440 — axe clean, no overflow, no console errors.

---

## Real data, per-type taxonomies and term search (`08`, `assets/settings-data.js`)

The post type and taxonomy data was invented. It is now exported from the running site
with WP-CLI, reproducing exactly what `class-post-selector-data.php` localises:
`get_post_types( show_ui )` minus attachment, and each type's selectable taxonomies.

**28 post types, not the 15 I had.** Eleven of them offer no filterable taxonomy at all
(Pattern, Navigation Menu, Taxonomies, Post Type, Options Pages, Field Group, Search
overlay template, Form, Ceremony, Custom Search Result). They are listed as curation
sources anyway, which is worth questioning separately.

**Taxonomies differ per post type**, so the picker now offers only what the chosen types
have: News Post 8, Parents and Family Article 5, Page 4, Research Article 11.

**Search is mandatory, not a nicety.** Real counts: Tag 12,460, Expertise 2,428,
publication 1,148, Faculty Member 737. `useTerms` already says why — the REST endpoint
caps at 500 alphabetical results, so an unfiltered list silently drops everything past
the cutoff. Anything over 20 terms now gets a search box with a "showing 40 of 12,460"
line; anything smaller stays as chips. Typing redraws only the term list so focus and
caret survive, which the live dialog does not manage.

**The duplication is worse than it looked.** `taxonomyFilters` is keyed by taxonomy
alone, but the dialog renders a section per ticked post type, in both the auto and the
manual search list. News Post and Page ticked in both sections is 24 taxonomy sections
for at most 9 distinct filters, each a view of the same value. Chrome confirmed it:
setting a Tag under News Post showed the same chip and badge under Parents and Family
Article and under the manual lists.

Verified at 1280 and 1440: axe clean, no overflow, no console errors, 28 types offered,
8 taxonomies for News Post, searching "bio" in 12,460 tags returns four real terms, and
a type with no taxonomies says so instead of showing an empty picker.

---

## Three gaps closed, taxonomy data corrected from the export (`08`)

**Story count** was capped at 100; the real input is `min={1} max={50}`. Now 1-50, and
typing 999 snaps the field back to 50 rather than leaving a number the screen will not
accept.

**Upcoming rotations** was one sentence; the live dialog lists the next five. Now both -
the sentence that says what "next" is relative to, then the five times.

**Manual search post types** repeat every taxonomy picker in the live screen. They all
write to the same `taxonomyFilters` entry, so rather than repeat the pickers a third
time the editor says so and points at the terms already set. Also fixed a real bug found
here: an earlier edit had injected the AND group buttons into the manual search editor,
where `gi` is undefined, so "+ Add AND group" appeared in the wrong place.

**Taxonomy data** now comes from `evidence/NGN_Curated_Posts_Taxonomy_Terms.csv`, which
carries what the dialog's own endpoint does not return: slug, parent and post count.
14,983 terms across 14 taxonomies.

- `Hide Post` and `Pin to top` do not exist. Newsfeed Display's real terms are Faculty &
  Staff, NGN Daily, Parents & Families and Research. The invented data had them wrong.
- **Terms are hierarchical and the dialog flattens them.** World Cup 2026 is the parent
  of Final, First stage, Preview and four more; Photo is the parent of Seen Around
  Northeastern; Department nests 48 children. Chips now read "World Cup 2026 › Final".
- **Post counts are shown**, since the export has them and the dialog hides them. Art
  Scene 18, Final 7, University News 8,072, Spotlight 0.
- **Search matches the slug as well as the name**, which is how "digital-" finds Retain
  Default Styles (slug `digital-default`), and why "Q-A" finds nothing - Q&A's slug is
  `qa`.
- **The 500 cap hides 87% of all terms** (13,108 of 14,983). Tag stops at "and
  Innovation." The editor says so where the list is capped.

Worth raising separately: three Department terms are duplicated (Health Sciences,
History, Philosophy and Religion each appear twice, once nested and once at top level),
101 of 210 Research Topics have no posts, and Spotlight's only term is unused.

Verified at 1280 and 1440: axe clean, no overflow, no console errors.
