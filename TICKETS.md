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
