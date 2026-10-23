/* ==========================================================================
   What the Query settings dialog actually offers, read from the live screen.
   ========================================================================== */

window.POST_TYPES = [
  { k: 'post',            n: 'Post',                       common: true },
  { k: 'newspost',        n: 'News Post',                  common: true },
  { k: 'magazine-article',n: 'Magazine Article',           common: true },
  { k: 'eight-oh-five',   n: 'Eight Oh Five',              common: true },
  { k: 'live-update',     n: 'Live Update' },
  { k: 'research',        n: 'Research Article' },
  { k: 'faculty-expert',  n: 'Faculty Expert' },
  { k: 'in-the-news',     n: 'In the Press Article' },
  { k: 'parents',         n: 'Parents and Family Article' },
  { k: 'livestream',      n: 'Livestream Page' },
  { k: 'image-sequences', n: 'Image Sequences' },
  { k: 'page',            n: 'Page' },
  { k: 'wp_block',        n: 'Pattern' },
  { k: 'wp_navigation',   n: 'Navigation Menu' },
  { k: 'custom-search',   n: 'Custom Search Result' }
];

window.TAXONOMIES = [
  { k: 'category',     n: 'Category',         terms: [ 'University News', 'Research', 'Health', 'Sports', 'Business', 'Arts & Entertainment', 'Science & Technology', 'World & National News', 'Society & Culture' ] },
  { k: 'post_tag',     n: 'Tag',              terms: [ 'AI', 'artificial intelligence', 'AI ethics', 'entrepreneurship', 'startups', 'innovation', 'world cup 2026', 'No sub brand' ] },
  { k: 'audience',     n: 'Audience',         terms: [ 'Students', 'Faculty', 'Alumni', 'Parents' ] },
  { k: 'article-format', n: 'Article Format', terms: [ 'Seen Around Northeastern', 'Explainer', 'Q&A', 'Photo essay' ] },
  { k: 'department',   n: 'Department',       terms: [ 'Khoury', 'Bouvé', 'CSSH', 'D’Amore-McKim' ] },
  { k: 'campus',       n: 'Campus',           terms: [ 'Boston', 'Oakland', 'London', 'Vancouver', 'Toronto' ] },
  { k: 'newsfeed',     n: 'Newsfeed Display', terms: [ 'Hide Post', 'Pin to top' ] },
  { k: 'kicker',       n: 'Kicker Category',  terms: [ 'Preview', 'First Stage', 'Round of 32', 'Round of 16', 'Quarter Final', 'Semi Final', 'Final' ] },
  { k: 'spotlight',    n: 'Spotlight',        terms: [ 'Spotlight' ] }
];

/* The shelf being edited in every one of these designs. */
window.SHELF = {
  name: 'Featured Stories',
  key: 'featured-stories',
  count: 4,
  sort: 'Newest',
  types: [ 'newspost' ],
  include: [],
  exclude: [],
  rotation: { on: true, interval: '1h', start: '12:00' }
};

/* A stand-in for "how many stories match these rules right now". Real
   screens should ask the server; the point is that the number exists. */
window.matchCount = function (s) {
  var base = { newspost: 4120, post: 9800, 'magazine-article': 310, 'eight-oh-five': 95 };
  var n = s.types.reduce(function (t, k) { return t + (base[k] || 140); }, 0);
  s.include.forEach(function () { n = Math.round(n * 0.18); });
  s.exclude.forEach(function () { n = Math.round(n * 0.86); });
  return n;
};

/* --------------------------------------------------------------------------
   When does this shelf next rotate?

   Derived from the start time and the interval, the same way the plugin's
   getNextRotationTimes does it: anchor to today's start time, step forward
   by the interval until you pass now.
   -------------------------------------------------------------------------- */

/** "1h" / "90m" / "2h 30m" -> minutes. Returns 0 when it cannot be read. */
window.intervalMinutes = function (text) {
  var m = String(text).toLowerCase().match(/(\d+)\s*h|(\d+)\s*m/g);
  if (!m) return 0;
  return m.reduce(function (total, part) {
    var n = parseInt(part, 10);
    return total + (part.indexOf('h') > -1 ? n * 60 : n);
  }, 0);
};

/**
 * The next few rotation times.
 *
 * @param {string} start  "HH:MM" local.
 * @param {string} every  Interval as typed.
 * @param {number} count  How many to return.
 * @param {Date}   now    Injectable, so this can be tested.
 */
window.nextRotations = function (start, every, count, now) {
  var mins = intervalMinutes(every);
  if (!mins) return [];

  now = now || new Date();
  var bits = String(start).split(':');
  var anchor = new Date(now);
  anchor.setHours(parseInt(bits[0], 10) || 0, parseInt(bits[1], 10) || 0, 0, 0);

  var step = mins * 60000;
  var elapsed = now.getTime() - anchor.getTime();
  var first = anchor.getTime() + (elapsed < 0 ? 0 : Math.floor(elapsed / step) + 1) * step;

  return Array.from({ length: count || 1 }, function (_, i) { return new Date(first + i * step); });
};

/** One line: when it next runs, and how often after that. */
window.nextRunLine = function (start, every, now) {
  var times = nextRotations(start, every, 1, now);
  if (!times.length) return 'Set an interval like 1h or 30m.';

  var t = times[0];
  var sameDay = t.toDateString() === (now || new Date()).toDateString();
  var when = t.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });

  return 'Next at ' + when + (sameDay ? '' : ' tomorrow') + ', then every ' + every + '.';
};
