# Before / after evidence — NUEAC-398

Captured with Playwright against the **local VIP dev environment**
(`https://ngn.local.northeastern.edu/wp-admin/admin.php?page=ngn-curated-posts`),
not production. Chromium, 1440 × 900, deviceScaleFactor 2.

## Before — 21 October 2026

| File | What it shows |
| --- | --- |
| `before-01-viewport-1440.png` | First screen an editor sees |
| `before-02-fullpage-1440.png` | The whole page, top to bottom |

### Measured, not estimated

| | Local environment | Production |
| --- | --- | --- |
| Instances on the page | 14 | 47 |
| Page height at 1440 wide | 5,372px | — |
| Screens of scroll at 900px tall | **6.0** | ~40 |
| Search or filter controls | **0** | 0 |
| Rename buttons | 14 | 47 |
| Duplicate buttons | 14 | 47 |
| Delete buttons | 14 | 47 |

**The local database holds 14 instances; production holds 47.** The problems are the
same in kind and smaller in degree — six screens of scroll instead of forty. Production
numbers in this repo come from reading the live screen, and are labelled as such.

## How to reproduce

The VIP dev environment must be running (`vip dev-env start --slug ngn`), and the admin
must be loaded over **https**. Over http every REST call returns 403 and the page shows
*"Failed to load instances: 403"* — the login cookie is set for one scheme and the REST
URL uses the other, so the cookie is never sent. This is an environment quirk, not a bug
in the screen.

Get a login URL with `vip dev-env list` and take the **https** one.

## Where the screen lives

Not a plugin — it is theme code, and the list itself is a React app.

```
themes/ngn-theme/
  inc/admin/curated-posts/
    class-curated-posts-admin-page.php        registers the page, enqueues the app
    class-curated-posts-instance-controller.php  REST routes under ngn/v1/curated-posts
  src/scripts/admin/curated-posts-admin/
    app.tsx                                   the list — where search and filtering go
    components/instance-card.tsx              one card — Rename, Duplicate, Delete
    components/create-instance.tsx            the "New instance" control
```

Repo: `News-at-Northeastern/environment`.

## After — 21 October 2026

Same environment, same viewport, after the change on branch
`NUEAC-398-curated-posts-admin`.

| File | What it shows |
| --- | --- |
| `after-01-viewport-1440.png` | First screen, everything collapsed |
| `after-02-fullpage-1440.png` | The whole page |
| `after-03-search-1440.png` | Typing "featured" — 1 of 14 |
| `after-04-expanded-1440.png` | One card opened |

### Measured

| | Before | After | Change |
| --- | --- | --- | --- |
| Page height at 1440 wide | 5,372px | **1,659px** | **−69%** |
| Screens of scroll at 900px | 6.0 | **1.8** | −70% |
| Search controls | 0 | **1** | — |
| Group filter | none | **1** | — |
| Settings rows on an open card | 8 | **6** | unset ones dropped |
| Visible count | none | "14 of 14" | — |

Verified in the browser, not assumed: searching `featured` leaves 1 card and the
count reads "1 of 14"; clicking a card header opens exactly one settings block;
no JavaScript errors and no failed REST calls on load or interaction.

### What changed in the code

```
themes/ngn-theme/src/scripts/admin/curated-posts-admin/
  app.tsx                            filter + collapse state, visible list
  components/instance-filter.tsx     new — the toolbar and grouping rules
  components/instance-card.tsx       collapsible, summary line, unset rows hidden
  index.scss                         layout for the toolbar and card header
```

372 insertions, 49 deletions. `npm run build:admin` compiles clean. Nothing in the
REST layer, the store, or the public site was touched.

### Correction to the original audit

The audit said Delete had no confirmation. That was wrong — it was read from a
screenshot of the resting state, and the card already had a two-step
Delete → Confirm/Cancel. What was true: Delete sat at the same size beside Rename
and Duplicate, and the confirm said only "Delete?" without naming the instance.
The confirm now names it and says it is live.

## Test and accessibility pass — 21 October 2026

### JavaScript unit tests

```
npx jest --config private/jest.config.js
Test Suites: 2 failed, 142 passed, 144 total
Tests:       1275 passed, 1275 total
```

**Every test passed.** The two failing suites never ran: they fail to resolve
`@observablehq/plot`, a dependency that is not installed in this environment
(`npm ls @observablehq/plot` returns empty). Both sit in `client-mu-plugins/ngn-app`
Chart components. This commit touches four files, all under
`themes/ngn-theme/src/scripts/admin/curated-posts-admin/`, and none in `ngn-app`,
so the failure predates the change and cannot be caused by it.

### Responsive — 1280 and 1440

| | 1280 | 1440 |
| --- | --- | --- |
| Page height | 1,659px | 1,659px |
| Horizontal page scroll | none | none |
| Toolbar wraps to a second row | no | no |
| JavaScript errors | none | none |

Screenshots: `after-05-1280px.png`, `after-05-1280-fullpage.png`, `after-05-1440px.png`.

### Keyboard only

| Check | Result |
| --- | --- |
| Search field reachable and typeable | yes — typing `featured` filtered to 1 card |
| Result count announced | yes — `aria-live="polite"`, reads "1 of 14" |
| Tab order reaches a card header | yes — search → group → collapse all → first card |
| Focus is visible on the card header | yes — `outline: solid 2px` |
| Enter expands the card | yes — 0 settings blocks → 1 |
| State exposed to assistive tech | yes — `aria-expanded` flips to `true` |

Screenshot: `after-06-keyboard-focus.png`.

### PHP tests — not run

`bash bin/test-php.sh` stops at `env: php: No such file or directory`; PHP is not on
the host PATH. Inside the `ngn-php-1` container PHPUnit is present but
`themes/ngn-theme/vendor/autoload.php` is missing, so Composer dependencies are not
installed in this environment.

**This commit changes no PHP** — four files, all `.tsx` and `.scss`. Running the suite
needs `composer install`, which would add a large untracked `vendor/` tree to the
working copy, so it is left for whoever picks this up to decide.

### End-to-end visual regression — not run

`npm run test:e2e` drives the public site's holotype pages. It does not cover wp-admin
and would not exercise this change.
