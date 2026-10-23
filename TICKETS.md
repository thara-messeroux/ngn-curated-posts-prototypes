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
