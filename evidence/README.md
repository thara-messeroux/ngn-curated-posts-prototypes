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

## After

Not captured yet. Pending the implementation.
