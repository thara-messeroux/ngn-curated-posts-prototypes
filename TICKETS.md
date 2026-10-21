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
Page height 5,372px to 1,659px, a 69% reduction. Six screens of scroll down to 1.8. Zero
search controls to one, plus a group filter and a visible count.

**Evidence**
https://thara-messeroux.github.io/ngn-curated-posts-prototypes/evidence/

**Still to verify**
PHP suite could not run in the local environment — no Composer autoload. The change
contains no PHP.

---

## NUEAC-399 — Two-pane workbench for Curated Posts, with live slot contents

**Status** — to be filed
**Link** — _pending_
**Owner** — Thara Messeroux, reporter
**Depends on** — NUEAC-398 merging first

**Why it is being filed**
Three directions were prototyped for NUEAC-398 and the two-pane workbench was preferred in
design review. It did not ship with NUEAC-398 because its one real advantage — showing the
headline each shelf is currently serving — needs data the screen does not have today.

**The blocker, in the team's own words**
`class-curated-posts-instance-controller.php` returns configuration, not stories. A live
headline per slot means one query per instance. `instance-card.tsx` already carries the
comment *"behind one request per instance on the page, is seconds"*, so the team has
already hit this on a lighter payload.

**What has to be decided before any UI work**
Whether the index endpoint can return the first N stories per instance, and at what cost
on a page carrying 47 of them. That is a `Curated_Posts_Store` question, not a layout one.

**Prototype**
https://thara-messeroux.github.io/ngn-curated-posts-prototypes/03-two-pane.html
All 47 shelves filled with real headlines, each labelled with where it came from.

**Why it is worth doing**
It is the only direction that answers the question editors actually have — what is on this
shelf right now — without opening the site in another tab.
