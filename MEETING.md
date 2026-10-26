# NUEAC-398 review, 30 minutes

**What I need out of it:** four decisions. Everything else is context.

Links, open before we start:

- Settings: <https://thara-messeroux.github.io/ngn-curated-posts-prototypes/08-settings-sentence-workbench.html>
- Index: <https://thara-messeroux.github.io/ngn-curated-posts-prototypes/09-direction-d-ngn.html>
- All designs: <https://thara-messeroux.github.io/ngn-curated-posts-prototypes/>

---

## The four decisions

1. **Is the sentence the right direction for Query settings?** If not, say so now, before
   any of it is built.
2. **Index: Direction C or Direction D?** Same layout, different design system.
3. **Do the production defects become tickets?** Seven of them, one is live data loss.
4. **Does building it sit in NUEAC-398, or a follow-up ticket?**

---

## Running order

### 0 to 3 · Where it stands

The settings were the point of the redesign, so that is what I rebuilt. Both screens are
clickable now, grounded in the real data rather than placeholders: 28 post types, 14,983
real terms, the real field names.

### 3 to 14 · The settings (the main event)

Open Settings E and drive it. In this order:

- **Read the sentence out loud.** "Show the 4 newest News Posts in anything, skipping
  nothing. Rotate them every 1h." That is the whole rule, no field labels to decode.
- **Click a word.** The editor opens underneath; the sentence updates as you change it.
- **Click Tag.** 12,710 terms. Type "ocean". This is why search had to be everywhere.
- **Add an AND group.** Each group gets its own box, because OR within and AND between is
  the thing people get wrong.
- **Type "banana" as the interval.** Save refuses and says why. The current screen saves it.

### 14 to 19 · The index, C or D

Put them side by side. Same layout. C is WordPress admin, D is the NGN design system, so
D sits beside the settings screen without a seam. C stays on record either way.

### 19 to 25 · What the audit found in production

Lead with the two that matter:

- **Removing one term silently wipes that taxonomy's AND groups.** `removeTermFilter()`
  rebuilds the filter without `andGroups`. That is live data loss today.
- **87% of terms cannot be reached by scrolling.** 13,108 of 14,983. The endpoint caps at
  500 and Tag stops at "and Innovation."

Then, briefly: the chip area pushes the list so the next click misses; the AND group's
search box is clipped; no Cancel button; three duplicated Department terms; 101 of 210
Research Topics unused.

### 25 to 30 · Decisions and what happens next

Get answers to the four. Agree who files the defect tickets.

---

## Not in this meeting

- The six cosmetic items still open (commas, capitalisation, sort order). Real, small,
  and worth doing only after the direction is confirmed.
- How the audit was run.
- `rotationInterval` being text in the prototype and minutes in the model. It is a known
  implementation note, not a decision.

---

## If he only has ten minutes

Show the sentence, click one word, type "banana", then ask decisions 1 and 2. The rest
can go in writing.

---

## Honest position

The design is finished and proven: thirty checks pass, axe clean at every width, and an
independent browser review tried to break it and found four real defects, all now fixed.

Nothing is built in the theme. The branch touches only the index screen; `settings-panel.tsx`
is untouched. That is the larger half of the work and it has not started.
