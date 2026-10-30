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

---

## Reading the sentence aloud in every state

Ran check K from the review prompt myself rather than waiting: read the whole sentence in
eight states. Two more English problems, both now fixed.

**"News Posts or Posts or Magazine Articles"** repeated "or" once per item, which reads
like a machine. English uses commas until the last item. A `listJoin()` helper now gives
"a", "a or b", "a, b or c", and it applies to post types, manual search types, include
terms within a group, and exclude terms.

**"search News Post"** left the manual search types singular. They name kinds of thing
rather than a count, so they read plural: "search News Posts."

Before and after, worst case:

- was: Show the 50 newest News Posts or Posts or Magazine Articles in Arts & Entertainment
  and also in Digital Projects, skipping Faculty & Staff.
- now: Show the 50 newest News Posts, Posts or Magazine Articles in Arts & Entertainment
  and also in Digital Projects, skipping Faculty & Staff.

Left alone deliberately: "and also in" between AND groups. It is wordier than "and", but
it is carrying the one thing about this rule that is easy to get wrong.

---

## Rotation interval: presets plus Custom

A plain text box asking for "1h" with no hint is a poor first encounter. A plain dropdown
would have been worse, though: `duration-input.tsx` accepts "1h 24m", "33m" and a bare
"90" on purpose, and a fixed list throws that away.

So both. A dropdown of the intervals editors actually pick (15m, 30m, 1h, 2h, 3h, 4h, 6h,
12h, 24h) with "Custom..." at the end, which reveals the text box and focuses it. Common
cases become one click; the flexible format stays available.

Also brought `intervalMinutes()` in line with the real `parseDuration()`, which it had
drifted from: a bare number is minutes, so "90" is an hour and a half. It previously read
as unparseable. Tested against eight inputs including "1h 24m", "90", "" and "banana".

The failure hint said "Set an interval like 1h or 30m", which did not mention the plain
number it now accepts. Now "Try 1h, 30m, 1h 30m, or a number of minutes."

---

## Direction D: the index on the NGN system (`09-direction-d-ngn.html`)

The index and the settings screen were built on two different systems. Direction C uses
`wp-admin.css`, Settings E uses `ngn-v2.css`, so side by side they look like two products.

Direction C is untouched and stays as the record. Direction D is a new fourth direction:
the same two panes, the same flat A to Z list, the same behaviour, rebuilt on the NGN
tokens so it sits beside Settings E without a seam.

What changed beyond the tokens:

- **State reads as a word.** "Live" and "Draft" rather than a coloured dot, so it does not
  depend on colour alone.
- **Delete is a named button with a confirm strip**, instead of hiding behind a kebab menu.
  The strip uses a left border in the error colour, which is what the error token is for,
  rather than the brand red that Xris wanted reserved.
- **"1 story" / "4 stories"**, matching the plural work in Settings E.
- Badge contrast measured at 8.42:1 after swapping a token that did not exist
  (`--ngn-on-tertiary-container`) for `--ngn-tertiary`.

Verified: 47 shelves listed, search filters, selecting a shelf swaps only the right pane,
delete asks first and Keep it cancels, no `wp-admin.css` anywhere on the page, axe clean
at 1440, 1280, 1024 and 900 with no overflow and no console errors.

---

## Direction D: Delete protected again, and a real status green

**Delete behind a menu.** Porting C to the NGN system I promoted Delete to a visible
button next to Duplicate. That was a regression: C hid it behind a kebab precisely so it
could not be hit on the way to something else. The menu is back, with Rename, Duplicate,
a separator and Delete in the error colour, and the confirm strip still follows. It opens
with the first item focused, closes on Escape and on an outside click, and carries
`aria-haspopup`, `aria-expanded` and `role="menu"`.

**Status colours are now tokens, not a one-off hex.** The system had no green at all, so
rather than paste WordPress's `#00a32a` into one rule, `ngn-v2.css` gains four semantic
tokens: `--ngn-success` / `--ngn-success-container` and `--ngn-warning` /
`--ngn-warning-container`. Red stays reserved for the brand and for errors.

Live is a delicate green again: a 7px dot on live rows and a soft green badge in the
detail pane, measured at 6.10:1 after darkening the green from #1a7f37, which only
cleared AA by 0.06. The nine shelves that need a look keep their amber "Check" chip at
5.35:1, so the exception is still visible rather than blending into 38 identical rows.

Caught while measuring: `.shelf span` was overriding `.state` on specificity, so the
chip had been rendering in muted grey rather than the warning colour.

---

## Cards hug their content again

Both NGN cards carried a `min-height` I had put there, 560px on Direction D and 620px on
Settings E, so a short shelf left a block of empty card beneath it. Direction C never had
one, which is why it looked tidier side by side.

Removed from both. Direction D's card now ends 1px below its last section, the same as C.
Settings E's save bar is still flush at the bottom, because it was sticky rather than
relying on the forced height.

Measured, short shelf at 1280:

| | card height | gap below content |
| --- | --- | --- |
| C | 399px | 1px |
| D was | 560px (forced) | ~160px of nothing |
| D now | 418px | 1px |
| E was | 620px (forced) | ~300px of nothing |
| E now | 319px | 17px, which is the result block's own margin |

---

## Five defects from the independent review

**1. Save accepted a rule that cannot run.** "Rotate them every banana" saved without
complaint. There is now one `problems()` function that returns everything wrong with the
draft, and the save bar has three states: hidden, blocked with the reason in the error
colour, or ready. Save also refuses on click, not only by looking disabled.

**2. A term could be required and skipped at once.** Including Sports while excluding
Sports saved happily and the count claimed 638 matches. Picking a term on one side now
releases it from the other, since no story can satisfy both.

**3. The interval and start time stayed editable with rotation off**, so you could set a
schedule that would never run. Both are disabled now, with "Turn this on to set an
interval" where the fields were.

**4. "1 days".** Now "1 day" / "14 days".

**5. The keyboard path was a one-way trip.** Enter opened an editor but left focus in the
sentence, so you had to Tab past every remaining word to reach it, Escape did nothing,
and after Done focus was lost to the address bar. Opening a word now moves focus to the
first control in its editor, Escape closes, and both Escape and Done return focus to the
word you came from.

Verified: Save blocked on "banana" and re-enabled on "2h", the contradiction resolves
itself, both rotation fields disable, "1 day" reads correctly, and the keyboard loop
holds. axe clean at 1440, 1280 and 900, no console errors.

---

## Settings C rebuilt, and the last three cosmetic items

**C was two days behind E.** Its "Advanced: match several groups of terms" was a paragraph
describing a feature that did not exist, it had no term search against a 12,710-term
taxonomy, it listed nine taxonomies globally rather than per post type, and it still
carried the invented "search the same types" rule, "but not nothing", no plurals and no
validation. The dialog, the sentence and the layout are unchanged; everything behind them
is now the same engine as the two-pane design.

Then the three items the independent review raised that were still open in both:

**"Show the 1 newest News Post"** is not English. A shelf holding one story now reads
"Show the **single** newest News Post", which keeps the count clickable rather than
dropping the control to fix the grammar.

**A visible gap before every comma and full stop.** The token carries 6px of side padding,
so the punctuation that follows it sat 6px off the word. Punctuation is now wrapped in a
`.punc` span pulled back 5px, leaving the ~1px a comma should have. Invisible in a
screenshot, obvious on a shared screen.

**"NEVER STORIES TAGGED"** became "Never show stories tagged".

Both designs verified: all ten `QuerySettings` fields reachable, AND groups working,
search on every taxonomy, Save blocked on an invalid or contradictory rule, keyboard loop
intact, axe clean at 1440, 1280 and 900, no overflow, no console errors.

---

## Upcoming rotations: always shown, and it says which kind of schedule

I argued for showing the list only when the schedule is unpredictable, on the grounds
that at 1h every row is the interval restated. Thara pushed back: a control that appears
and disappears is harder to trust than one that is always in the same place. That is the
same principle that put the search box on every taxonomy, and it is right here too.

So the list is always there, five runs, and the line underneath earns the space in both
cases rather than only one:

- repeating schedule: "Same times every day."
- drifting schedule: "These times shift each day, because 7h does not divide evenly into
  24 hours."

The test is `1440 % intervalMinutes === 0`. All nine presets repeat; only a custom value
such as 7h, 5h or 1h 24m drifts, and that is exactly the case where a reader cannot work
the times out for themselves.

Applied to both sentence designs. Verified: five rows at 1h and at 7h, the right line
under each, a bad interval still explains itself instead of listing nothing.

---

## Upcoming rotations: full dates and a heading

Two changes to match the format Thara asked for, both in C and E.

**The date is spelled out**: "Mon, Oct 26, 5:00 PM" rather than "Mon 5:00 PM". The
weekday alone is ambiguous past the first few runs, and at a 24h interval the list spans
five different days, where "Thu" could mean this week or next.

**The list is labelled "Upcoming rotations"**, so it says what it is before you read it
rather than reading as five loose timestamps under a sentence.

The block now reads, top to bottom: the next run in words, the labelled list of five, and
the line saying whether the schedule repeats daily.

---

## "Same times every day" removed

At a 3h interval the list reads 6PM, 9PM, 12AM, 3AM, 6AM, with a caption underneath
saying "Same times every day." The caption was technically true, since 3h divides into
24 and the daily set repeats, but nobody reads five different clock times and accepts a
line telling them they are the same. It contradicted the thing it sat under.

It was also there for the wrong reason: I added it to justify always showing the list.
A caption that exists to defend a design decision is not carrying information.

Gone for every repeating schedule. The warning stays only where the times genuinely move,
where a reader could otherwise think the schedule is broken:

> The times move each day, because 7h does not divide evenly into 24 hours.

Worth separating from the earlier decision: a **control** that appears and disappears is
hard to trust, which is why search is on every taxonomy and the list is always shown. A
**warning** is conditional by nature; it means something is unusual, and showing it when
nothing is unusual is what makes warnings worthless.

---

## The AND groups were modelled at the wrong level

Thara compared the designs against the real dialog and said the information architecture
did not look right. She was correct, and it was structural rather than cosmetic.

`buildQueryParams()` loops over `taxonomyFilters` and emits one `{ taxonomy, terms }`
clause per group:

```
for ( const [ taxonomy, filter ] of Object.entries( settings.taxonomyFilters ) ) {
  if ( include.length ) termsInclude.push( { taxonomy, terms: include } );
  for ( const group of filter.andGroups ?? [] ) termsInclude.push( { taxonomy, terms: [ ...group ] } );
}
```

Terms inside one clause are ORed, clauses are ANDed, and **every clause belongs to
exactly one taxonomy**. That is why the live screen has a separate "+ Add AND group"
under Category, under Tag, under Audience, rather than one button for the whole filter.

My model held a flat list of groups whose members carried their own `tax`, so a single
OR group could span two taxonomies. Proven reachable before the fix:

> Show the 4 newest News Posts in **Health or #LikeAHusky**, skipping nothing.

Category OR Tag. `buildQueryParams` cannot produce that, so the UI was offering a query
the system cannot run.

**The state now mirrors the real shape:**

```
filters[taxonomySlug] = { groups: [ [term, term], [term] ], exclude: [term] }
```

`groups[0]` is that taxonomy's base include and the rest are its AND groups, which is
`TaxonomyFilterState.terms` plus `andGroups` exactly. Picking a term in a second taxonomy
now opens its own clause rather than joining the first one.

Three things that fell out of the fix:

- The add button names its scope: "+ Add AND group to Category".
- The taxonomy picker marks what is already set: "Category (12) • 3 set".
- A line under the editor says what is filtered elsewhere, so switching taxonomy does not
  hide the rest of the rule.

The include/exclude contradiction check is now scoped per taxonomy too, which is correct:
excluding Health only releases Health from Category, not a same-named term elsewhere.

Applied to both C and E. All ten pages axe clean at 1440, 1280 and 900, no overflow, no
console errors.

---

## Checked against the live DOM

Thara pasted the rendered page. Three things came out of it.

**The post type map is right.** All 28 types and their taxonomy counts match
`curatedPostsConfig` exactly: post 9, page 4, newspost 8, parents 5, research 11, and the
ten types with none. The WP-CLI export and the page agree.

**"Post types: All" is a real state, and I was blocking it.** The instance card for
"Parents - Latest" renders `<dd>All</dd>` for Post types, so an empty list means every
type rather than an error. My `problems()` refused to save with "Pick at least one post
type", which would have stopped a rule the system already runs. Removed. The sentence now
reads "Show the 4 newest stories of any type", and the editor says what empty means
instead of treating it as a mistake.

**A defect for the ticket list: duplicate DOM ids.** `PostTypeList` renders
`id="ngn-cp-pt-{slug}"` in both the auto section and the manual search section, so every
post type id exists twice on the page. Labels bind by `for`, and a duplicate id resolves
to the first match, so clicking a post type under "Manual search post types" toggles the
checkbox in "Auto post types" instead. That is wrong behaviour, not just invalid HTML,
and it would also confuse a screen reader.

Not a defect, worth noting: the taxonomy accordions keep independent open and closed
state between the two sections while sharing the same filter data, which is consistent
with `taxonomyFilters` being keyed by taxonomy alone.

---

## Every term now ships, because a demo has to find what you type

Searching Tag for "Ahmaud Arbery" or "AI" returned nothing. The data file carried an
alphabet-wide sample of 400 tags out of 12,710, so anything outside the sample simply did
not exist. Fine for proving a search box works, useless in front of a manager.

The full set now ships: **17,435 terms across 21 taxonomies**, in `assets/terms.js`,
889KB raw and about 200KB over the wire. The page is interactive in 45ms and a keystroke
redraws in 23ms, so there was no reason to be precious about it.

**Search is ranked rather than first-come.** A substring sweep of 12,710 tags buries the
obvious answer: "AI" used to surface Air Force Life Cycle Management Center. Now exact
matches come first, then starts-with, then anywhere, each sorted by how many stories use
the term. Typing "AI" gives AI (302), AI ethics (40), AI-Robotics (30).

**The count line tells the truth.** It said "5 of 12,710 match" when 404 matched and only
40 were shown. Now: "404 terms match "AI", showing the closest 40."

Two data faults the completeness check caught:

- **A wrong slug.** The export labels the taxonomy "Internal or External" and I keyed it
  `internal-external`, but the real slug is `external-research`. Research Article was
  therefore offering 10 taxonomies instead of 11.
- **A filtered post type map.** `POST_TYPES` had been built only from taxonomies I had
  terms for, so any taxonomy without data silently vanished from the type that owns it.
  Rebuilt unfiltered from `get_object_taxonomies`, and every count now matches
  `curatedPostsConfig`: post 9, page 4, newspost 8, parents 5, research 11.

Seen Around Audience is registered with no terms, so it is listed and says "0 terms"
rather than being hidden. That is what the real dialog does.

---

## "0 stories match" when every type was allowed

With no post type selected the count read 0, which is the opposite of the truth: an
empty list means every type, so it is the widest the shelf can be. `matchCount()` summed
over `s.types` and an empty array sums to nothing, and the caller then short-circuited to
'0' as well. Both fixed; the count now reads 17,685 against 4,120 for News Post alone.

Also unified the vocabulary. The two sentences said "stories of any type" and "every
type" for the same idea, which reads as two different settings. Both now say "any type",
so the difference lives where it actually is: one sentence is about what fills the shelf,
the other about what you can pin by hand.

---

## The index and the dialog on one page

The two prototypes answered half a question each. The index proved you could find a shelf
among 47; the dialog proved you could read its rule. Neither showed the thing an editor
actually does, which is go from one to the other and back. `10-complete.html` is both:
Direction D's list, Settings C's sentence, and a **Query settings** button on the selected
shelf that opens the dialog over the page.

**Every shelf is seeded from the real export.** Opening Artificial intelligence shows
*"Show the 4 newest News Posts in AI, artificial intelligence or AI ethics"*, because
those are its three tags. World Cup 2026 stories opens on one category and seven
exclusions. Nothing is typed in by hand.

**Save writes back to the list.** Change the count to 9, save, and the dialog closes, the
row reads "9 stories", the detail pane reads 9, and a quiet "Settings saved." appears. A
dialog that saves into nothing is a mockup; this one is the loop.

Three things the export cannot tell us, carried as stated assumptions rather than
invented detail:

- **The rotation interval.** The export records that rotation is on and when it starts,
  not how long the gap is. Seeded as 1h.
- **Sort and look-back.** Not in the export. Seeded as Newest and 14 days.
- **Post type labels.** The export's column is prose: "web", "print", "9 post types".
  Only the tokens matching a real post type are mapped; the rest are left out, so a shelf
  may open on "stories of any type" where the spreadsheet named something.

"Hide Post" belongs to a taxonomy the term export did not cover, so it is registered on
this page alone. The taxonomy dropdown now also lists any taxonomy that already carries a
filter, not only the ones the chosen post types offer, so a term set on a shelf can
always be found and removed.

### A defect this page exposed in the other two

Opening a taxonomy's editor creates that taxonomy's filter record, which counted as an
edit. On the dialog pages it only lit the Save button early. Here, where Save closes and
writes, a plain look round would have saved an empty record. `changed()` now compares
normalised copies with the empty records and empty groups dropped. Fixed in all three
pages, and all three re-tested: Save stays off through a look round, comes on for a real
change, and goes off again after saving.

Checked at 1440, 1280 and 375: axe-core finds nothing in nine states, index and dialog
and each of the seven editors. No page overflow at any width, the sheet scrolls itself
rather than the page, Tab stays inside the dialog, Escape closes the editor before the
dialog, and focus returns to the button that opened it.

---

## Add new, Rename and Duplicate were decoration

Three buttons sat on the screen doing nothing. Rather than invent what they should do,
`class-curated-posts-instance-controller.php` and `class-curated-posts-store.php` say it
outright:

- **`create_instance`** takes a **key** and a label. The key is sanitised, must be unique,
  and comes back as a **409** if it is taken. Nothing afterwards changes it.
- **`duplicate_instance`** does not ask for anything. The store picks the key, as
  `<key>-copy`, then `-copy-2`, and labels the copy `<label> (Copy)`.
- **Renaming** writes the label. The key never moves.
- **`empty_query`** is what a new shelf starts as: 5 stories, News Post, search News Post,
  no terms, rotation off, Newest, 14 days.

So the design follows the API rather than the other way round:

**Add new** opens a naming field at the top of the list, where the shelf is about to
appear, not in a dialog over the page. The field shows the key it is about to take, live,
because the key cannot be changed later. Type a name whose key is taken and Create goes
grey with "A shelf already uses the key `featured-stories`. Try another name." That is the
409, caught before it is sent rather than after.

Create makes the shelf with the backend's defaults, selects it, and opens Query settings,
because a new shelf has defaults and no terms, so the rule is the only sensible next step.

**Duplicate** asks nothing and takes one click, since the store names and keys the copy
itself. **Rename** reuses the same field, prefilled, and says "The key stays
`featured-stories`. Only the name changes."

**A shelf with no terms now says so.** The detail pane shows "No terms set, so this shelf
takes the newest News Posts on the site", with a Narrow it button. A shelf matching
everything looks identical to a finished one otherwise.

Two things the backend does that are worth a ticket, not a redesign:

- `next_copy_key` appends to whatever key it is given, so duplicating a copy gives
  `empty-test-copy-copy` and the label stacks to "(Copy) (Copy)". Faithful here because
  it is faithful there.
- Creating refuses a clashing key with a 409 while duplicating silently numbers around
  one. Two ways to answer the same question.

Checked again with axe-core in four more states: the naming field empty, the naming field
showing the key clash error, a fresh shelf with the no-terms notice, and the rename field.
Nothing found, no overflow. Escape closes the field and returns focus to Add new.

---

## Where the dialog sits

It opened pinned near the top with a large empty gap underneath, which reads as
unfinished rather than deliberate. Four things decide this, in the order they cost
something when they are wrong.

**1. `margin: auto` on the sheet, not `align-items: center` on the scrim.** Centring a
flex child that is taller than its scrollable parent puts the top of it above the scroll
origin, where no amount of scrolling will reach it. Auto margins centre it while there is
room and let it sit at the top and scroll once there is not. This is the bug that the
usual `display:flex; align-items:center` recipe ships with.

**2. More gutter below than above.** `padding: 4vh ... 9vh`, which lands the sheet's
centre at **47.5%** of the viewport rather than 50%. The optical centre of a frame sits
above the geometric one, so a dialog at a true 50% reads as low. It also shortens the
trip from the button that opened it, which is in the upper half of the page.

**3. The sheet never outgrows the viewport.** `max-height: 100%`, which is 100% of the
scrim's content box and therefore already excludes the gutters. The title stays at the
top, Cancel and Save stay at the bottom, and only the middle scrolls.

This one was found by testing rather than reasoning. The first attempt released the
height cap on short windows, on the theory that content should win. At 1440x560 with the
term picker open the sheet grew to 1005px and **took the footer off screen with it**, so
Save and Cancel could not be reached at all. Capping it instead, and letting
`.sheet-scroll` do the scrolling, keeps both ends in place at every size tested.

**4. A gutter at both ends.** Some scrim always shows above and below, so the sheet reads
as a layer over the page rather than a new page.

Below 640px tall or 400px wide the gutters shrink to 12px, per **WCAG 1.4.10 Reflow**,
which has to hold at 320px wide and at 400% zoom. The height cap does not shrink, for the
reason above.

The footer needed its own fix at that width. Wrapping alone dropped Save onto a second
row to the left of Cancel, reversing them. The status line now takes the first row and
the two buttons share the second, Save still last.

A 140ms fade and 8px rise on open, inside `prefers-reduced-motion: no-preference`. A full
width layer that appears with no transition reads as a page change.

Measured at 1440x900: 182px of scrim above, 229px below, centre at 47.5%. Checked at
1440x900, 1440x560, 375x812 and 320x480: title and Save visible in all eight editor
states at every size, only the body scrolls, no horizontal scroll anywhere, axe-core
clean.

---

## The cog on Query settings

`assets/images/icons/cog-8-tooth-micro.svg`, taken from the theme as it is and inlined
rather than linked, so `fill="currentColor"` picks up the button's own colour and it stays
white on the filled button and correct in dark mode. 16px against the 13px label, with the
leading edge tightened from 16px to 12px, which is what the system's own buttons do.
`aria-hidden="true"` is already on the file: the icon is decoration beside a real label,
so a screen reader should read "Query settings" once.

**The label stays.** A cog on its own is ambiguous, it could be settings, preferences or
configure, and this is the primary action on the row. The icon earns its place next to the
word, not instead of it. Happy to go icon-only if that is the call.

**It is not in the kebab menu.** It was, and it pushed "Query settings" right while Rename,
Duplicate and Delete stayed at the left edge, so four items read as a ragged column. One
icon among four unlabelled ones is worse than none. All four now start at the same x.

axe-core clean on the index, with the menu open, and in the dialog.

---

## One action visible, the rest behind the kebab

Rename and Duplicate were in the header and in the kebab, so the same three actions sat on
screen twice. They are gone from the header.

**Query settings left the kebab instead of the header.** Removing all three would have put
the screen's primary action two clicks away behind an unlabelled glyph, and the whole point
of this screen is reading and changing the rule. So the split is by role rather than by
convenience:

- **Query settings** is the thing you came to do, so it is one click, labelled, and the
  only filled button on the row.
- **Rename, Duplicate, Delete** are occasional and reversible-ish, so they sit under the
  kebab beside each other.

Nothing now appears in both places, the header is two controls instead of four, and the
kebab's three items line up without the odd icon pushing one of them out.

Rename's focus return had to move with it: it pointed at a header button that no longer
exists, and now goes back to the kebab that opened it.

axe-core clean on the index, with the kebab open, and in the dialog. No overflow.

---

## The "Check" chip was mine, and it was wrong

Nine shelves carried an amber **Check** chip. The export never said they needed checking.
`state: 'check'` is a field I added to `assets/data.js` myself, and looking at what those
nine actually hold, there is nothing to check:

- all nine have an include term
- all nine have post types
- all nine are filling their 3 or 4 stories
- eight of them share the same four-post-type config as each other

The only thing they have in common is exclusions, which is a normal thing for a shelf to
have. So the chip was reporting a judgement I had no evidence for, on a status the backend
does not have. `Curated_Posts_Store` has no "needs check" state.

**The green dot and the Live badge went with it.** Once the exception is gone, every row is
the same, and a status that reads the same on all 47 rows is not a status, it is 47 pieces
of decoration. The list is now name, count and post types, which is the whole of what the
export can honestly tell you.

The delete confirmation claimed liveness too: "It is live and fills 4 stories" is now
"It fills 4 stories on the site", which is a fact rather than a status.

**There is a real published state, and this is not it.** `save_draft_query` says settings
have no draft stage, saving them is publishing them, while story picks and exclusions are
drafted and published separately. So a badge could one day mean "this shelf has unpublished
story picks". That is a thing the store actually tracks. "Needs check" was not.

axe-core clean on the index, the delete confirmation and the dialog. No overflow.

---

## All four actions in the kebab

Corrected. The previous entry kept Query settings as a visible button on the argument that
the primary action should be one click, which was not what was asked for. The header is now
the kebab alone, and the menu reads Query settings, Rename, Duplicate, Delete, in that
order, with the separator above Delete.

The cog went with the button. There is nowhere in this layout for it now, since the menu is
a plain text list and an icon on one of four items pushes that label out of line with the
rest.

**The focus return had to be rebuilt.** Two different controls open the dialog, the kebab's
first item and the notice's Narrow it, and both answer to `[data-settings]`, so looking the
element up by shelf meant the first match won and closing from the kebab landed focus on
Narrow it. `returnTo` now carries a selector for whichever control was clicked, falling back
to the kebab, because the menu item itself has closed by the time the dialog does.

Four routes checked: kebab to close returns to the kebab, Narrow it to close returns to
Narrow it, the kebab on a shelf with no notice returns to the kebab, and Escape does the
same as Cancel.

The whole run end to end after the change: rename, duplicate, add new, pick a term, save,
list and detail both update, notice clears. axe-core clean at every step. No overflow.

---

## Naming moved to the right pane

It opened at the top of the left list, which put a form on top of the list of names and
squeezed it into a 340px column. It is now a card in the right pane, where a shelf's own
details are read, and the detail card steps aside while it is open so the pane holds one
thing at a time.

What it gains besides the position:

- **A heading rather than a field label.** "Name this shelf" is a title now, with "It will
  join the list on the left, in order." underneath, and the input has its own label.
- **Room.** The field is 420px instead of 300px, and the key hint sits on one line instead
  of wrapping to two.
- **The list stays whole.** You can read the 47 names you might be about to duplicate while
  typing the forty-eighth.

Rename opens in the same place, with the shelf's current name as the subtitle and the key
line unchanged.

The form is static markup toggled with `hidden`, not rebuilt on each render, so the caret
and focus survive typing. The detail card carries `hidden` too, since it is written on
every render whether or not it is on screen.

Checked: Add new and Rename both open in the right pane with the list intact, the caret
holds while typing, the key clash still blocks Create, Cancel and Escape both restore the
detail card and return focus to Add new, Rename returns focus to the kebab, and creating
still opens the dialog on the new shelf. axe-core clean in all four form states. No
overflow.

---

## Renaming in place, and the key is editable after all

**I had this wrong.** Two entries ago this log said the key cannot be changed and the
prototype printed "This cannot be changed later" under the field. There is a route for it:

- `PATCH .../instances/{key}/key` calls `Curated_Posts_Store::rename()`, which moves the
  entry and its purge log, 409s on a collision, and needs `check_admin`.
- `PATCH .../instances/{key}/label` sets the label and needs only `check_editor`.

So a key is renameable, by an administrator, and the name is renameable by an editor. The
earlier claim came from reading `create_instance` and stopping there.

Renaming now happens on the title itself. The kebab's Rename turns the title and the key
into the two fields that replace them, with Save and Cancel underneath, and the kebab steps
out while they are open. Enter saves from either field, Escape leaves without saving, and
focus returns to the kebab.

**The key does not follow the name on an existing shelf.** On Add new it does, until the
key field is typed in, which is how a slug field is expected to behave. On a rename it
holds still, because a shelf that is already live is being asked for by that key and
retitling it should not quietly move it. This is what WordPress does with a published
post's slug, for the same reason.

**What the key field says depends on which key it is.** Two keys are written into theme
files:

| Key | Asked for in |
| --- | --- |
| `editors-picks` | `sidebar-editors-picks.php` |
| `featured-stories` | `class-feed-featured.php`, `overlay-fullscreen-menu-news.php` |

Changing either leaves those templates asking for a shelf that is not there, and the field
says so by name. Any other key gets the milder note that this is an administrator action
and anything asking for the old key stops finding it. Neither is blocked, because the
backend does not block it. A collision is blocked, because the backend returns a 409.

**An empty name is allowed.** `set_label` with an empty string drops the custom label and
`get_label` derives one from the key, so clearing the field gives "Editors Picks" from
`editors-picks`, and the hint says that before you do it.

Checked: name only, key only, a key the theme hardcodes, a colliding key, an empty name,
the key following and then not following on Add new, Enter, Escape, and focus return.
axe-core clean on the add form, the inline editor and the inline editor showing a warning.
No overflow.

---

## The no-terms bar is gone

Removed from the detail pane: the style, the markup and the Narrow it button it carried.
It appeared on the four shelves with no terms, which are the hand-picked ones, so it was
warning about something deliberate on every shelf it ever showed on. Flagged as suspect in
this log when it went in, and now out.

The kebab is the only way into the dialog again, so `returnTo` and the selector it carried
have gone with it and focus returns to the kebab, which is the one control that opened it.

Three other `.notice` blocks remain, on `01-list-table.html`, `02-grouped-accordion.html`
and `03-two-pane.html`. Those are the "Why this one" explanations on the closed A, B and C
concepts, which are commentary for a reader rather than anything the product renders, so
they stay unless they are asked about too.

Checked on all four shelves that used to show it, plus a newly created shelf, which has no
terms by definition. axe-core clean, focus still returns to the kebab from every route,
no overflow.

---

## "Instance", not "shelf"

Xris names a Curated Posts entry an **instance**, and the code has been saying so all
along: `class-curated-posts-instance-controller.php`, `create_instance`,
`rename_instance`, `duplicate_instance`, `list_instances`, and a store that talks about
instances throughout. "Shelf" was my word, and it appears nowhere in the theme.

Renamed in everything a person reads, across all eleven pages plus `README.md`,
`AUDIT.md` and `FILES.md`: 47 instances, Search instances, Name this instance, What this
instance shows, "An instance already uses featured-stories", "The site asks for this
instance by this key". The a/an before it was fixed with it, so the hub now reads "every
automatically-filled instance" and "Pick an instance, press Query settings".

**Identifiers were left alone.** The `.shelf` CSS class and the `shelf()` lookup still say
shelf, and `window.SHELF` in `assets/settings-data.js` is untouched because four pages
read it and renaming a shared global to no reader's benefit is how two designs got broken
earlier in this log. `addShelf` did become `addInstance`, since it lives in one file.
Rename the rest when it is built in the theme.

Entries above this line keep the old word, because a dated log should say what was written
at the time. Everything from here uses instance.

Checked with the cache defeated on all eleven pages: no "shelf" in any rendered text, the
index still lists 47, every route on the combined page still works, axe-core clean, and no
console errors.

---

## Key, not slug

Both words were on the screen, for two different things, which is the reason to settle it.

**A slug is a URL-safe string that appears in a web address.** A key is a lookup name in a
data structure. An instance has no address: `Curated_Posts_Store` keeps them as keys in a
WordPress option, and the theme fetches one with
`Curated_Posts::get_wp_posts( 'editors-picks', 5 )`. There is no page at `/editors-picks`,
no rewrite rule, no permalink. The `get_permalink()` calls in the cache purge are for the
posts an instance returns, not for the instance.

**The theme already reserves "slug" for something else.** Every one of its seven uses is a
post type slug or a taxonomy term slug. The term picker inside this very dialog says "Type
a name or a slug", and it means term slugs, which genuinely are slugs. Calling the instance
identifier a slug too would put one word on two things one dialog apart.

**The API says key and so will the errors.** `sanitize_key`, `new_key`, and the 409 reads
"An instance with this key already exists." An editor who trips that error should see the
same word the field used.

So: key. The instance search said "Search name or slug" on five pages and now says
"Search name or key". The term search is untouched.

Premium here is one word meaning one thing, not the fancier-sounding word. The field's hint
does the explaining anyway: "The site asks for this instance by this key."

---

## Deleting asks in a dialog

The strip could be clicked past. `Store::delete` unsets the entry, writes the option and
drops the purge log, and there is no trash, no restore and no undo anywhere in the module,
so the question now arrives as a modal that has to be answered.

- `role="alertdialog"`, which is the role for a question that must be settled before
  anything else, rather than `dialog`.
- **Focus opens on "Keep it."** A stray Enter or space should not delete anything, so the
  answer that changes nothing has the keyboard.
- Three lines: what it is, what it costs, and that it cannot be taken back. "This cannot be
  undone. There is no trash to restore it from" is the literal behaviour of
  `Store::delete`.
- Deleting `editors-picks` or `featured-stories` also tells you which template file stops
  rendering, by name.
- **The destructive button takes `--ngn-error`, not the brand fill.** The brand is already
  red, so a red Delete and a red Save would otherwise read as the same button.
- Escape cancels, a click on the scrim cancels, Tab stays inside, and focus returns to the
  kebab whichever way it ends.

460px rather than the settings dialog's 720px, because a question with two answers should
not look like a workspace. The `.sheet` rule is declared further down the file, so the
narrow width needed `.sheet.sheet-sm` to win on specificity rather than source order; it
was rendering at the full 720px until that was caught.

Checked at 1440 and 320: axe-core clean with and without the template warning, no
horizontal scroll, title and both buttons visible, Keep it to the left of Delete on one
row, and five routes exercised including an actual delete, which took the list to 46.

## The sentence names the taxonomy now

He is right, and the proof was already on screen. The sentence read

> Show the 3 newest Posts in **Arts & Entertainment**, skipping **Hide Post** and **Seen
> Around Northeastern**.

while the chips directly beneath it read "Category: Arts & Entertainment" and "Display
Options: Hide Post". Two renderings of the same rule, on one screen, disagreeing about
whether the taxonomy matters.

**A term alone does not say what it is.** "Health" is a Category, a Department and a Kicker
Category. Picking it from the dropdown dropped the dropdown's own answer on the floor.
Worse on the exclude side, where every excluded term from every taxonomy was flattened into
one list, so "skipping Hide Post and Seen Around Northeastern" hid that those are two
different taxonomies, which is the whole architecture of the query.

So the taxonomy goes inside the token, muted at .82em, in the same shape the chips use:

> Show the 3 newest Posts, 8:05 Posts, Magazine Articles or News Posts in
> **Category: Arts & Entertainment**, skipping **Display Options: Hide Post** and
> **Article Format: Seen Around Northeastern**.

Excludes are now one token per taxonomy rather than one flat list, and each carries its own
`data-ref`, so clicking "Article Format: Seen Around Northeastern" opens the Article Format
exclude editor rather than whichever taxonomy happened to be first. `allExcluded()` had no
callers left and went.

`tok()` takes an `isHtml` flag for this, because the label now carries markup. Term text
still goes through `esc`.

Checked on three instances: tags only, one category with seven category exclusions, and the
two-taxonomy exclude case above. Both include clauses across two taxonomies read "Category:
… and also in Department: …". Clicking each of the three tokens in turn opens its own
taxonomy, re-queried each time because the sentence is rebuilt on every render. axe-core
clean on the exclude editor and with two clauses. No console errors.

## The delete question asks it out loud

"Delete "Artificial intelligence"?" was a question, but the consequence sat under it as a
muted line that read like a footnote. Both halves fixed.

**The title says it.** "Are you sure you want to delete "Artificial intelligence"?"

**The consequence is a panel, not a footnote.** `--ngn-error-container` behind
`--ngn-error`, measured at **5.00:1**, with a 3px left border and the theme's own
`exclamation-triangle-micro.svg`. The irreversibility line is the first thing in it, at
weight 500.

Both consequences live in the one panel, because they answer the same question. For
`editors-picks` and `featured-stories` the template warning joins it underneath at normal
weight, so the eye takes the severe line first and the specific one second, rather than
weighing two panels against each other.

Checked at 1440 and 320: axe-core clean with and without the template warning, no
horizontal scroll, the title wraps to two lines on a phone with the panel and both buttons
still in view, Keep it still to the left of Delete. All four routes re-run after the
change, including a real delete that took the list to 46. No console errors.

## The wired-in warning in plain words

It read:

> The theme asks for this instance by featured-stories in class-feed-featured.php and
> overlay-fullscreen-menu-news.php. Those will render nothing once it is gone.

160 characters, two sentences doing one job, a construction nobody says out loud, and two
PHP paths in front of someone who is deleting from wp-admin. It named the file instead of
the consequence.

So I read what those files actually are. `class-feed-featured.php` is the
**Featured Stories feed**, the `ngn/featured` REST endpoint. `overlay-fullscreen-menu-news.php`
is the **fullscreen menu**. `sidebar-editors-picks.php` is the **Editor's Picks sidebar**.
Those are things a person recognises; a filename is not.

> The featured stories feed and the fullscreen menu pull from this. Both will go empty.

85 characters. The Editor's Picks one is 61. The paths moved into a code comment, which is
where a developer would look for them anyway.

The two strings are written out per case rather than assembled from a template, because the
grammar changes with the number of places, "pulls" against "pull" and "it" against "both",
and a sentence stitched together from parts reads like one.

**Three siblings had the same voice and went with it:**

| Was | Is |
| --- | --- |
| "Changing the key is an administrator action. Anything asking for X stops finding it." | "Only an administrator can change a key, and anything still using the old one stops working." |
| "The theme asks for this instance by X in Y. Changing the key empties whatever those render until they are updated too." | "The featured stories feed and the fullscreen menu look for this key. Change it and both go empty." |
| "With no name, the list falls back to one built from the key." | "Leave it empty and the name comes from the key instead." |

Also caught in passing: the rename collision read "A instance already uses…" after the
shelf-to-instance pass. Now "An instance".

Checked both delete cases, a plain delete with no warning, both rename cases and the empty
name. axe-core clean, no console errors.

## The by-hand search gets its own term filters

This was open question 2 in `ASK-XRIS.md`: does the manual search get its own term filters
or share the ones above? Xris asking for this answers it. **Its own.**

**The endpoint was already there.** `Post_Selector_Controller::search` reads
`terms_include` and `terms_exclude` as its own request parameters and hands them to
`Post_Selector_Search::query`, which builds a `tax_query` from them. Nothing needed
inventing at the search layer.

**What is missing is one layer up.** `QuerySettings` in `types.ts` carries its own
`searchPostTypes` but only one `termsInclude` / `termsExclude` pair, and `handleApply`
sends `searchPostTypes: localSettings.searchPostTypes` beside
`termsInclude: params.termsInclude` — the automatic query's terms, to both. So the panel
has always had the post types separate and the terms shared, which is exactly why the
by-hand line only ever offered post types. **Building this needs a second pair on the
stored query, `search_terms_include` and `search_terms_exclude`, in
`Curated_Posts_Store::empty_query` and the controller's extract. That is a store change,
not a UI change, and it belongs in the estimate.**

The sentence now reads the same shape on both halves:

> When you pin a story by hand, search **News Posts** in **Category: Research**, skipping
> **Campus: Oakland**.

`draft.searchFilters` mirrors `draft.filters`, and a `scope` of `auto` or `manual` decides
which set a token or editor is working on. The whole apparatus is shared: the taxonomy
dropdown, the ranked term search across all 17,435 terms, AND groups, the "also filtered"
line, the term chips, and the rule that a term cannot be required and skipped at once
within one taxonomy. `norm()` and `problems()` run over both sets.

Three things that are deliberately not shared:

- **The match count ignores the by-hand filters.** It answers "what fills this instance",
  which is the automatic query. The by-hand filters only narrow what the picker offers.
- **The editor headings differ**, so you always know which half you are in: "Only stories
  tagged" against "The by-hand search only offers stories tagged".
- **An empty post type list falls back to every taxonomy** rather than none, because the
  by-hand types are usually left empty and an empty list means every type.

The detail pane gained a **Pinning by hand** section rather than more rows under Rules, so
the two halves of the rule read apart there as well.

Checked: a term on each side independently, an AND group on the by-hand side, switching
scopes with neither leaking into the other, the mutual exclusion firing inside the manual
set only, save writing both sets through to the pane. axe-core clean on both new editors
and the pane. No console errors.

## The by-hand sentence has everything the first one has

Adding the term filters fixed half of it. The by-hand line still had three of the first
sentence's words missing, and `/search` takes all three as its own parameters:

| Parameter | Range in the route | Default |
| --- | --- | --- |
| `count` | 1 to `MAX_RECENT_RESULTS` (50) | `MAX_SEARCH_RESULTS` (3) |
| `sort` | `Post_Selector_Search::SORTS` | Newest |
| `sort_window_days` | 1 and up | 14 |

So the two halves now read the same shape:

> Show the **4** **newest** **News Posts** in …, skipping … .
> When you pin a story by hand, the search offers the **3** **newest** **News Posts** in …,
> skipping … .

"the search offers the" rather than "search", because once there is a number the verb needs
an object. Picking **Most viewed** reveals a **from the last 14 days** word on this half too,
exactly as it does on the first.

**Rotation is still absent, and correctly so.** There is nothing to rotate in a picker; the
route has no rotation parameter. Absent because it does not exist, not because it was
forgotten.

### A defect the count field surfaced

`search()` sets `$max = $is_recent ? MAX_RECENT_RESULTS : MAX_SEARCH_RESULTS` and then
`limit: min( absint( $count ), $max )`. The schema accepts a `count` up to 50, but the
moment the box holds two or more characters the ceiling drops to **3**. So a count of 20 is
valid, saved, and silently becomes 3 as soon as anyone actually searches. 20 applies only
to the empty-box recent list.

The field takes the schema's range and says where the real ceiling is, rather than pretending
the number always holds. Worth a ticket: either the cap is deliberate and the schema maximum
is wrong, or the cap is a leftover. **Candidate for the six unfiled defects, making seven.**

The detail pane's Pinning by hand section gained Results offered, Sort, and Looking back when
the sort is Most viewed.

Checked: count to 12, sort to Most viewed revealing the window word, window to 30, save
writing all of it to the pane, reopening showing it back with no phantom change, the
automatic half and the match count untouched throughout. axe-core clean on all three new
editors. No console errors.

## Xris's recap, all fifteen

### Wording

"Query settings…" in the kebab is now **Settings**, and the dialog it opens is titled
**Query settings** rather than "What this instance shows". "When you pin a story by hand"
is **"When you choose a story manually"**.

**The taxonomy reads as a phrase, not a field label.** It said "in Category: Business and
also in Tag: 2016 election"; his words were "with category Business and also with tag 2016
election", so each clause carries its own "with", the joins read "and also with", and the
taxonomy is lowercase because it is part of the sentence now. "anything" keeps "in", since
there is no taxonomy to name.

**"Next runs" lost the clock.** `nextRunLine` was returning "It's 11:31 AM. Next run 12:00
PM, in 29 min." The current time was scaffolding from proving the arithmetic, and it is on
the reader's own clock. The row label said "Next runs" above a value beginning "Next run",
so the label is now "Next run" and the value drops the repeat.

### Key became slug

He wrote "slug" twice and named `sanitize_title()`. I had argued the opposite in this log,
on the grounds that an instance has no URL and the API says `sanitize_key`, and shipped it
as "Key". He decided; it is **Slug** in every label, hint and placeholder.

`keyFrom` now matches `sanitize_title()` rather than approximating it: NFD normalise and
strip combining marks before lowercasing, so "Café Résumé Test" gives `cafe-resume-test`
where it used to give `caf-r-sum-test`.

### The manual half follows the automatic one

Two of his items are one behaviour. The default now reads:

> When you choose a story manually, **search the same stories**.

One word, because while it follows there is nothing to spell out. Clicking it offers "The
same stories" or "Something different", and choosing the second **copies the automatic
query into the manual one** — post types, count, sort, window and every term filter — so
everything is preselected and the work is removing rather than finding, which is what he
asked for. The pane says "The search offers: the same stories as above" instead of
repeating six rows.

Seeded from the export by comparing the mapped post types, which makes all 47 follow. Three
instances list different search types in the spreadsheet, but the extra tokens are
`fcc_promo`, `web` and `homepage`, none of which is a real post type, so after mapping the
lists match. Following is the honest reading of the data we have.

### A cache bug caught on the way through

The `?v=` stamps on the asset URLs were fixed at the date the files were created and never
moved when `settings-data.js` changed. The detail pane was still showing the old "It's
11:31 AM" line from a cached copy while a freshly loaded page showed the new one. All
eleven pages are now stamped together, and the stamp has to move whenever an asset does.

Checked: all fifteen items confirmed on the page, the three other pages that share
`settings-data.js` still correct, axe-core clean throughout, no console errors.

## The two open requirements, answered by demonstration

`11-curation.html`. Both of Xris's original email requirements were still open. Neither
needed a question; both needed evidence.

### "The settings dialog is also used on the post curation interface, so it must be flexible"

The code already says this is how it works. `settings-trigger.tsx` is documented as a
"reusable button that opens the shared settings panel via context. **Any component in the
tree can render this** to give the user access to query settings without owning the panel
itself." The panel belongs to the provider, not to a screen.

So the proof is to open it from a second screen. This page is the curation interface, the
one where the stories themselves are set: a single column, no index behind it, the merged
list of manual placements and organic fill that `MergedList` renders, with `manual`,
`expiresAt` and `retain` from `MergedPost` showing as "Pinned, kept", "Pinned to 14 Nov"
and "From the rule".

**It is the same dialog, from the same file, not a copy of its look.** The page was made by
copying `10-complete.html` and replacing the index, so the dialog and its whole engine are
byte-for-byte the ones Xris signed off. Opening it, editing a clause and saving all work
here, and the plain-text summary above the button updates.

The story rows are indicative and say so on the page. Their titles come from the REST API
and the list is not designed in this round; they are there so the dialog has its real
second home rather than a blank page.

### "Easily expandable, such as the usefulness metrics"

The sentence on this page carries one clause that does not exist yet: **scoring at least
70**. Adding it cost one token in `rule()`, one branch in `editor()`, one input handler and
one field in the seed. Nothing was restructured, and setting it to 0 takes it back out in
front of you.

The number is a stand-in. I do not know what the metric is, so the page says so rather than
inventing semantics for it, which is the same mistake the Check chip was.

**It also answers the third question instead of asking it.** `ASK-XRIS.md` asks whether the
metric is a query parameter or something shown beside the results. Both fit: as a parameter
it is the clause above; as a display it is a column in the list on the same page. The page
says so, so Xris can choose rather than being asked.

Checked: axe-core clean on the curation screen and in the usefulness editor, the dialog
opens and saves from this screen, 0 removes the clause, no console errors. All twelve pages
restamped so nothing serves a cached asset.

## Excluding, not skipping

Xris asked for "excluding" in place of "skipping". It is the word the rest of the
screen already uses: the detail pane says "Exclude terms" and the editor is
headed "Exclude". The sentence was the only place reading "skipping", so the
screen was using two words for one thing.

Changed in the four pages that render the sentence (06, 08, 10, 11), in the UI
string and in the validation message that read "is both required and skipped".
The dated entries above keep the old word, since they record what was written at
the time.

## Rotation stays on the instance, not on the manual search

Thara asked whether the manual half needs its own "Rotate them every 1h", since
the automatic half has one.

It does not, and the model settles it. Rotation is stored once per instance
(`rot`, `rotStart`), and `Post_Selector_Search::query()` takes `terms_include`,
`terms_exclude`, `count`, `sort` and `sort_window_days` and no rotation
parameter at all. The manual half is a search tool: an editor is looking at the
results and picking one. Rotating a list while someone is reading it would be a
defect, not a feature. And a story pinned by hand is pinned on purpose; rotating
it away would undo the pin.

So the sentence says "Rotate them every 1h" once, about the instance, which is
where the setting lives.

## The usefulness clause, shaped from the paper instead of guessed

The demo clause was "scoring at least 70", a score on one story. Reading the
paper Xris cited (Lu, Dumitrache, Graus, UMAP 2020) shows that is the wrong
shape. All four of its usefulness metrics are measured over a list:

- Diversity is intra-list: average pairwise dissimilarity within one list.
- Dynamism is inter-list: |L2 \ L1| / N between two consecutive rankings.
- Coverage is the share of a day's published articles a list serves.
- Serendipity balances confidence against distance from one reader's history.

None is a per-story score, so the clause is now "spread across at least 3
categories", a constraint on the set. Same cost to add, same one line to remove.

Two consequences worth saying out loud:

- Dynamism is already in the design. Inter-list change between two consecutive
  rankings is what this screen calls rotation.
- Serendipity cannot apply to a Curated Posts instance. It needs one reader's
  history, and an instance shows the same stories to everyone.

## The match count comes out

Xris asked what "prototype figure" meant. The honest answer is that the whole
number was invented:

```js
var base = { newspost: 4120, post: 9800, ... };          // made up
n = Math.round(n * (1 - Math.pow(1 - 0.18, g.length)));  // made up
```

It is also not a field the current screen has. The live export carries stories,
post types, include terms, exclude terms, search post types, rotation interval,
rotation start and upcoming rotations. No match count. I added it.

So rewording the label would have kept a fabricated number on a screen a manager
reviews. It is removed from every page that showed it: 04, 06, 07, 08, 10 and 11,
along with the styles and the now-dead `flat()` helper that only fed it.

### The idea is still worth having

Showing how many stories a rule matches while you are building it is the standard
way to stop someone narrowing a query into nothing, and it is the one question
the current screen cannot answer. It needs a real count from the server, not a
guess. Proposed, with the endpoint it would need, rather than faked.

## The manual search stops being a one-way door

Xris: "once you set this to 'something different' you can't reset back to
'search the same stories'. lets have that selection only change between
'search the same stories' and 'something different' with an outlined box
below it being where you construct the 'something different'."

He is right, and it was a dead end rather than a preference. Picking the other
mode replaced the whole clause with the spelled-out manual rule, and the token
that could switch back only existed in the first branch, so it left the screen
with the state it had created.

The clause now reads as the toggle in both modes, "search the same stories" or
"search for something different", so the way back is never taken off screen.
What the other mode searches is built in an outlined box underneath, titled
The manual search, whose words and tokens are the same as the first sentence.

Two things fell out of it:

- A live edit repainted the sentence only, so a number changed in the box
  stayed on its old value. Both are views of one draft, so both repaint
  through `paintRule()`.
- Switching is one click now, so looking at the other mode used to throw away
  a rule someone had just built. The built rule is set aside per dialog and
  handed back. A first switch with nothing kept still starts from a copy of
  the automatic query, which is what makes the work removing rather than
  finding.
