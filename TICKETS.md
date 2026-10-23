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
