# NUEAC-398 Curated Posts, before and after

Two screens were redesigned: the list of Curated Posts instances, and the Query
settings dialog where the rules are written. This maps every state, before
against after.

**Before** is the live WordPress admin at
`admin.php?page=ngn-curated-posts`, captured on the develop environment.
**After** is the prototype at
<https://thara-messeroux.github.io/ngn-curated-posts-prototypes/10-complete.html>,
captured with Playwright 1.62 at three widths, deviceScaleFactor 2.

| Width | Folder |
| --- | --- |
| 1440 desktop | `NUEAC-398-after/desktop-1440/` |
| 768 tablet | `NUEAC-398-after/tablet-768/` |
| 360 mobile | `NUEAC-398-after/mobile-360/` |

Before shots are in `NUEAC-398-before/`, desktop only, because they come from a
logged-in admin session rather than a script.

---

## The list of instances

| | Before | After |
| --- | --- | --- |
| The screen | `NUEAC-398-before/01-desktop-before-viewport-1440.png` | `01-index-viewport.png` |
| The whole page | `NUEAC-398-before/02-desktop-before-fullpage-1440.png` | `02-index-fullpage.png` |
| Scrolled | `NUEAC-398-before/03-desktop-before-midscroll-1440.png` | — the list scrolls in place |
| One instance | `NUEAC-398-before/05-desktop-before-empty-fields-1440.png` | `01-index-viewport.png`, right pane |
| Its actions | `NUEAC-398-before/04-desktop-before-actions-1440.png` | `03-actions-menu-open.png` |
| Finding one | `NUEAC-398-before/06-desktop-before-no-search-1440.png` | `01-index-viewport.png`, the search box |
| Narrower | `NUEAC-398-before/07-desktop-before-1280.png` | `tablet-768/` and `mobile-360/` |

**What changed.** Every instance was expanded at once, in creation order, with
no search: 5,372px of page for 14 instances, and production carries 47. It is a
searchable list on the left and the selected instance on the right. Rename,
Duplicate and Delete were three buttons on every row; they are one menu button.

---

## The Query settings dialog

The bulk of the work, and the part with no before shot. See the gap below.

| State | After |
| --- | --- |
| The rule as a sentence | `04-settings-dialog.png` |
| How many stories | `05-editor-how-many-stories.png` |
| Order | `06-editor-order.png` |
| Post types | `07-editor-post-types.png` |
| Include terms | `08-editor-include-terms.png` |
| Exclude terms | `09-editor-exclude-terms.png` |
| Rotation | `10-editor-rotation.png` |
| Manual search, following the rule | `11-manual-search-same.png` |
| Manual search, its own rule | `12-manual-search-different.png` |

**What changed.** The settings were a form of separate fields. They are one
sentence you edit: how many stories, of what type, in what order, which terms to
include and which to exclude. Each term names the taxonomy it came from. The
search used when someone picks a story by hand has its own rule, built in a box
under the two choices.

---

## Managing instances

| State | After |
| --- | --- |
| Rename, in place | `13-rename-in-place.png` |
| Delete, with what breaks named | `14-delete-confirmation.png` |
| Add new | `15-add-new-naming.png` |

**What changed.** Renaming happens where the name is, and the slug fills itself
in the way `sanitize_title()` would while staying editable. Deleting asks first
and names what breaks, by file, for the instances the theme reads directly.

---

## States that did not exist before

| State | After |
| --- | --- |
| No instances at all | `17-empty-no-instances.png` |
| A search with no hits | `16-search-no-match.png` |

**What changed.** With no instances the old screen threw on load and rendered
nothing. It now explains what an instance is and offers the one action that ends
the state. A search with no hits is a different state and says so.

Reachable without deleting anything:
<https://thara-messeroux.github.io/ngn-curated-posts-prototypes/10-complete.html?empty=1>

---

## The curation interface

| State | After |
| --- | --- |
| The screen | `18-curation-screen.png` |
| The whole page | `19-curation-fullpage.png` |
| The same dialog, opened from it | `20-curation-settings-dialog.png` |

The settings dialog had to work on the post curation screen as well. It is the
same dialog in the same file, opened from a single column with no index behind
it.

<https://thara-messeroux.github.io/ngn-curated-posts-prototypes/11-curation.html>

---

## The gap

**There is no before shot of the Query settings dialog.** The existing before
captures cover the list only. The dialog is behind a WordPress login, so it
cannot be scripted the way the after shots were.

That matters, because the dialog is the bulk of the redesign and the part with
the most to show. Capturing it needs a logged-in browser on:

`https://news-northeastern-edu-develop.go-vip.net/wp-admin/admin.php?page=ngn-curated-posts`

Open an instance's Query settings and capture the panel, each field, the term
picker, and the post type lists.
