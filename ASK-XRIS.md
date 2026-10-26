# Ask Xris — NUEAC-398

He wrote: *"please ask questions early to get clarity on what the scope is."*

---

## 1. The curation interface

> The settings dialog is also used on the post curation interface. Should I design for
> that now, or is this round just the instance management screen?

**Why it matters:** a dialog can be lifted into a second screen, a pane built into the
list cannot. This decides which design is right, not just which one looks better.

## 2. The manual search query builder

> You listed the manual search tool as its own query builder. Does it get its own term
> filters, or does it share the ones above?

**Why it matters:** the code shares them today, so the current screen shows the same
taxonomy picker up to three times. If they are meant to be separate, that is new work.

## 3. The usefulness metrics

> The usefulness metrics from the paper — are those a parameter inside the query, or
> something shown alongside the results?

**Why it matters:** a query parameter becomes another clause in the sentence. A display
metric is a different surface entirely.

---

# The demo, in order

1. **Read the sentence aloud.** That is the whole pitch in one breath.
2. **Click a word.** The editor opens underneath, the sentence updates live.
3. **Click Tag, type "ocean".** 12,710 terms. This is why search is on every taxonomy.
4. **Add an AND group.** Each gets its own box: OR within, AND between.
5. **Rotation, Custom, type "banana".** Save refuses and says why. *The current screen
   saves it.*
6. **Set the interval to 7h.** The upcoming list explains why the times move.

Links:

- Settings C, the dialog: <https://thara-messeroux.github.io/ngn-curated-posts-prototypes/06-settings-sentence.html>
- Settings E, the pane: <https://thara-messeroux.github.io/ngn-curated-posts-prototypes/08-settings-sentence-workbench.html>
- Direction D, the list: <https://thara-messeroux.github.io/ngn-curated-posts-prototypes/09-direction-d-ngn.html>

---

# Where it stands, if he asks

Everything on the list is done. The dialog is four of five. Three scope questions open,
the biggest being the curation interface.

**Say early:** the design is finished and proven, nothing is built in the theme yet.

---

# The decisions to leave with

1. Is the sentence the right direction?
2. C or D for the index?
3. Do the seven defects we found in the current screen become tickets?
4. Does building it sit in NUEAC-398 or a follow-up?
