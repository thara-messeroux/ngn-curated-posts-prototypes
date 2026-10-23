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

**Upcoming rotations.** The live dialog lists the next five times. Matching it was the
wrong call: at a fixed interval every row in that list is the interval field restated,
so five rows said what "every 1h" already said. Reverted to the one line. A list would
earn its place only if the schedule were irregular, which it never is.

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

---

## Next-run line shortened

"Every 1h from 12:00 AM. It's 2:14 PM now, so the next run is 3:00 PM — 46 min away."
repeated the interval and start time that sit in their own fields directly above it, and
used an em dash.

Now: "It's 2:14 PM. Next run 3:00 PM, in 46 min." The current time stays, because that is
what stopped the midnight start from reading as a mistake, and the five upcoming times
below carry the schedule. Retested against a fixed clock across midnight.

---

## AND groups rebuilt as boxes (`08`)

"+ Add AND group" appeared to do nothing. It did create the group, but the only feedback
was the editor heading changing to "And also tagged (group 2)" over an identical term
list, and an empty group has no token in the sentence, so pressing Done made it vanish.
Created but invisible is worse than not created.

Rebuilt the way the live dialog boxes them, which is also clearer. One editor now shows
every group stacked as its own bordered box, each with:

- a heading that counts its own selection: "Has any of (1 selected)", then "AND has any
  of (1 selected)" for each group after the first
- its own search box and term list, searched independently
- its own Remove, shown only when more than one group exists
- its own selected chips

The taxonomy select sits above all of them, because `andGroups` belongs to a taxonomy -
group 2 of Tag is still Tag.

Exclude gets a single box and no Add button, since `termsExclude` is one NOT IN list with
no groups.

Verified at 1280 and 1440: two boxes after Add, counts track per box, the two searches do
not interfere, focus and caret survive typing, Remove drops the right group, axe clean,
no overflow, no console errors.

---

## Copy pass on the whole design (`08`)

Ten sentences rewritten. The worst was the manual search note, which spent 32 words and
an em dash explaining what the old screen does internally:

> The live screen repeats every taxonomy picker under each of these types too. They all
> write to the same filter, so the terms you set above already apply here - there is
> nothing extra to set.

Now: "Your filters above already apply here." An editor does not need to know how the old
screen was built, only whether there is anything left to do here.

Others:

- "but not nothing" was not English. The clause is now "skipping nothing", which reads as
  a sentence whether or not anything is excluded.
- "A most-viewed order changes on its own, so there is no rotation." became "Most viewed
  reshuffles itself, so there is no rotation."
- "When someone pins a story by hand" became "When you pin a story by hand."
- The capped-list note was explaining the old screen's limit instead of what to do about
  it: "The live screen stops at 500, so typing is the only way past it" became "Type to
  find the rest."
- The search label repeated the term count printed directly below it: "Search Tag, 12,710
  terms" became "Search Tag."
- Headings trimmed: "How far back a most-viewed sort looks" to "How far back to look",
  "Types the manual search offers" to "Types you can pin by hand".
- "The chosen post types have no taxonomies to filter on" became "These post types have
  nothing to filter on."

No em dashes anywhere on the page, checked against the rendered text rather than the
source. Axe clean at 1280 and 1440, no overflow, no console errors.

---

## Search on every taxonomy, not just the big ones (`08`)

`CHIP_LIMIT = 20` was a number I invented, and it made the editor change shape depending
on which taxonomy was picked: Tag had a search box, Campus did not. Learn the interaction
on one, lose it on the next.

It also does not survive growth. Campus has 15 terms today and would have silently grown
a search box at 21. Kicker Category has 13 and gains one per World Cup stage. Every
taxonomy crosses an arbitrary line eventually, and the UI changing under the editor when
it does is worse than a search box on a four-item list.

Search is now unconditional. One count line covers all three states:

- whole list: "15 terms."
- filtered: "1 of 15 match "bos"."
- nothing found: "Nothing matches "zzz"."
- capped: "Showing 40 of 12,710. Type to find the rest."

Verified across Campus (15), Newsfeed Display (4), Spotlight (1), Department (97) and
Tag (12,710): the box is present on all of them, filtering works on the small ones,
focus and caret survive typing, axe clean at 1280 and 1440, no overflow, no errors.

---

## Select chevron sat at the far right

The taxonomy select had no custom styling, so it used the native chevron, which pins
itself to the right edge. The select was also a flex child with no width set, so it
stretched the full 694px of the editor and left the arrow a long way from "Campus (15)".

Two changes in `assets/ngn-v2.css`, shared by every design:

- `appearance: none` with an inline SVG chevron at `right 12px center`, so the arrow
  position is ours rather than the browser's.
- `width: auto` instead of filling its container. 187px rather than 694px.

The select sizes to its widest option, not the selected one, so the box does not resize
when you change taxonomy.

Verified at 1280 and 1440: axe clean, no overflow, no errors.

---

## "the same types" was invented, and the fallback was wrong too

`searchPostTypes` is a plain `string[]`. There is no "same as the auto types" anywhere in
the model, and `post-selector.tsx` spells out what empty means:

```
settings.postTypes = searchTypes.length > 0
  ? searchTypes
  : ( defaultPostTypes ?? curatedPostsConfig.postTypes.map( pt => pt.value ) );
```

Empty falls back to **every** post type, not to the auto types. So the sentence was wrong
twice: it described a link that does not exist, and implied the wrong default. Chrome saw
the same thing from the other side, reporting Page and News Post ticked under manual
search while only News Post was ticked under auto.

Now: "search Post or News Post" when types are chosen, "search every type" when none are,
and the editor is a plain chip list with a line saying what empty means. The "Same as the
types above" checkbox is gone.

### Audit against QuerySettings, field by field

| Field | Where it lives in the sentence |
| --- | --- |
| `count` | "Show the **4**" |
| `sort` | "**newest** / **most viewed**" |
| `sortWindowDays` | "from the last **14 days**", only under most viewed |
| `postTypes` | "**News Post**" |
| `searchPostTypes` | "search **every type**" |
| `termsInclude` | "in **anything**", one token per AND group |
| `termsExclude` | "skipping **nothing**" |
| `rotationEnabled` | "**They never rotate**" |
| `rotationInterval` | "Rotate them **every 1h**" |
| `rotationStartTime` | inside the rotation editor |

All ten reachable, verified by clicking each one. Rotation is correctly hidden under a
most-viewed sort and `sortWindowDays` appears in its place, matching
`localSort !== 'views'` in the panel.

Still outstanding and unchanged: `rotationInterval` is text here and minutes in the
model, and the repo has a `duration-input` component for it.

---

## Four defects from an independent review, all real

Claude in Chrome audited the page separately and found four things my own audit missed.

1. **The box and the sentence disagreed.** Typing 0 or -5 left the box showing the typed
   value while the sentence said 1. I had asserted on the sentence and never read the box
   back. Both now clamp through one `clampWhole()`.
2. **3.7 was accepted**, giving "Show the 3.7 newest". Rounds now, and `step="1"` is set.
3. **Two inputs had no accessible name**: the stories box and the days box. My axe runs
   had scanned the page with those editors closed, so "0 violations" was true only of the
   states I left open. Scanning every editor state found both. This was the serious miss;
   the scan now walks all eight editors.
4. **No plural handling anywhere**: "1 stories" in the shelf list, and "News Post" never
   pluralised. Now "1 story" / "4 stories" and "4 News Posts or Magazine Articles".

Not a defect, answered for the record: there is no separate token for the rotation start
time because it lives inside the "every 1h" editor, alongside the interval it anchors.
