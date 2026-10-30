# NUEAC-398 Curated Posts, the screen before the redesign

Captured from the local dev environment with Playwright 1.62, deviceScaleFactor 2.

    https://ngn.local.northeastern.edu/wp-admin/admin.php?page=ngn-curated-posts

Sign in first with the dev-env autologin link, and use **https**: over http the
page loads but every REST call is refused, so Curated Posts comes up empty.

| Folder | Width |
| --- | --- |
| `desktop-1440/` | 1440 |
| `tablet-768/` | 768 |
| `mobile-360/` | 360 |

The same 14 shots in each, so `05-before-settings-panel.png` is the same state
at every width. `desktop-1440/earlier-captures/` holds the seven ad-hoc shots
taken before this was scripted, kept because two of them are at 1280.

| # | What |
| --- | --- |
| 01 | The list |
| 02 | The whole page |
| 03 | The row of action buttons |
| 04 | The settings panel in its window |
| 05 | The settings panel on its own |
| 06 | Scrolled, a third down |
| 07 | Scrolled, two thirds down |
| 08 | The bottom of the panel |
| 09 | Post types and their taxonomy dropdowns |
| 10 | A term picker open |
| 11 | The same, in its window |
| 12 | The Add AND group control |
| 13 | An instance with terms set, so the chips show |
| 14 | The same, in its window |

This environment has 14 instances. Production has 47, so the real list is about
three times the height shown here.
