/* ==========================================================================
   Query settings data.

   Post types come from WP-CLI on the running site, reproducing exactly what
   class-post-selector-data.php localises. Terms come from the taxonomy
   export, which carries what the dialog's own endpoint does not return:
   slug, parent and post count.

   Term lists over 500 are an alphabet-wide spread, not the first 500 - the
   dialog's own 500 cap hides 87% of all terms, and a prototype that copied
   the cap would hide the problem too.
   ========================================================================== */

window.POST_TYPES = [
 {
  "k": "post",
  "n": "Post",
  "tax": [
   "category",
   "post_tag",
   "audience",
   "article-format",
   "department",
   "campus",
   "newsfeed",
   "kicker",
   "spotlight"
  ]
 },
 {
  "k": "page",
  "n": "Page",
  "tax": [
   "post_tag",
   "campus",
   "kicker",
   "spotlight"
  ]
 },
 {
  "k": "wp_block",
  "n": "Pattern",
  "tax": []
 },
 {
  "k": "wp_navigation",
  "n": "Navigation Menu",
  "tax": []
 },
 {
  "k": "acf-taxonomy",
  "n": "Taxonomies",
  "tax": []
 },
 {
  "k": "acf-post-type",
  "n": "Post Type",
  "tax": []
 },
 {
  "k": "acf-ui-options-page",
  "n": "Options Pages",
  "tax": []
 },
 {
  "k": "acf-field-group",
  "n": "Field Group",
  "tax": []
 },
 {
  "k": "jp_search_overlay",
  "n": "Search overlay template",
  "tax": []
 },
 {
  "k": "jetpack_form",
  "n": "Form",
  "tax": []
 },
 {
  "k": "ceremony",
  "n": "Ceremony",
  "tax": []
 },
 {
  "k": "section",
  "n": "Section",
  "tax": [
   "spotlight"
  ]
 },
 {
  "k": "topic",
  "n": "Topic",
  "tax": [
   "spotlight"
  ]
 },
 {
  "k": "internal-news",
  "n": "Faculty & Staff Article",
  "tax": [
   "post_tag",
   "campus",
   "newsfeed",
   "kicker",
   "faculty-staff-category",
   "spotlight"
  ]
 },
 {
  "k": "eight-oh-five",
  "n": "8:05 Post",
  "tax": [
   "category",
   "post_tag",
   "campus",
   "kicker",
   "spotlight"
  ]
 },
 {
  "k": "seen-around",
  "n": "Seen Around",
  "tax": [
   "post_tag",
   "seen-around-audience",
   "kicker",
   "spotlight"
  ]
 },
 {
  "k": "dates-to-remember",
  "n": "Event",
  "tax": [
   "campus",
   "kicker",
   "event-location",
   "spotlight"
  ]
 },
 {
  "k": "faculty-staff-video",
  "n": "Video",
  "tax": [
   "post_tag",
   "kicker",
   "spotlight"
  ]
 },
 {
  "k": "livestream",
  "n": "Livestream Page",
  "tax": [
   "post_tag",
   "spotlight"
  ]
 },
 {
  "k": "newspost",
  "n": "News Post",
  "tax": [
   "category",
   "post_tag",
   "audience",
   "department",
   "campus",
   "newsfeed",
   "kicker",
   "spotlight"
  ]
 },
 {
  "k": "parents",
  "n": "Parents and Family Article",
  "tax": [
   "post_tag",
   "audience",
   "campus",
   "newsfeed",
   "spotlight"
  ]
 },
 {
  "k": "magazine-article",
  "n": "Magazine Article",
  "tax": [
   "category",
   "post_tag",
   "audience",
   "newsfeed",
   "spotlight"
  ]
 },
 {
  "k": "image-sequences",
  "n": "Image Sequences",
  "tax": [
   "spotlight"
  ]
 },
 {
  "k": "research",
  "n": "Research Article",
  "tax": [
   "post_tag",
   "research-section",
   "research-topic",
   "faculty",
   "external-research",
   "publication",
   "department",
   "campus",
   "newsfeed",
   "kicker",
   "spotlight"
  ]
 },
 {
  "k": "live_update",
  "n": "Live Update",
  "tax": [
   "live_update_channel",
   "streaming_event"
  ]
 },
 {
  "k": "faculty-experts",
  "n": "Faculty Expert",
  "tax": [
   "department",
   "expertise"
  ]
 },
 {
  "k": "in-the-news",
  "n": "In the Press Article",
  "tax": [
   "post_tag",
   "publication",
   "expertise"
  ]
 },
 {
  "k": "ep-pointer",
  "n": "Custom Search Result",
  "tax": []
 }
];


/* The taxonomies offered by a set of post types, in the order the dialog
   lists them, with no duplicates. */
window.taxonomiesFor = function (typeKeys) {
  var seen = {}, list = [];
  typeKeys.forEach(function (k) {
    var pt = POST_TYPES.filter(function (p) { return p.k === k; })[0];
    if (!pt) return;
    pt.tax.forEach(function (t) { if (!seen[t] && TAXONOMIES[t]) { seen[t] = 1; list.push(t); } });
  });
  return list;
};

/* Matches the name or the slug, the way the live endpoint does, which is how
   "digital-" finds Retain Default Styles, whose slug is digital-default.

   Ranked, because a substring match over 12,710 tags buries the obvious
   answer: typing "AI" should offer AI before Air Force Life Cycle
   Management Center. Exact first, then starts-with, then anywhere. */
window.searchTerms = function (taxKey, query, limit) {
  var all = (TAXONOMIES[taxKey] || { terms: [] }).terms;
  limit = limit || 40;
  if (!query) return all.slice(0, limit);

  var q = query.trim().toLowerCase();
  var exact = [], starts = [], anywhere = [];

  for (var i = 0; i < all.length; i++) {
    var t = all[i], n = t.n.toLowerCase(), sl = (t.s || '').toLowerCase();
    if (n === q || sl === q) exact.push(t);
    else if (n.indexOf(q) === 0 || sl.indexOf(q) === 0) starts.push(t);
    else if (n.indexOf(q) > -1 || sl.indexOf(q) > -1) anywhere.push(t);
    if (exact.length + starts.length >= limit && anywhere.length > limit) break;
  }

  var byUse = function (a, b) { return b.c - a.c; };
  return exact.concat(starts.sort(byUse), anywhere.sort(byUse)).slice(0, limit);
};

/* How many terms match, for the count line. */
window.countMatches = function (taxKey, query) {
  var all = (TAXONOMIES[taxKey] || { terms: [] }).terms;
  if (!query) return all.length;
  var q = query.trim().toLowerCase();
  var n = 0;
  for (var i = 0; i < all.length; i++) {
    var t = all[i];
    if (t.n.toLowerCase().indexOf(q) > -1 || (t.s || '').toLowerCase().indexOf(q) > -1) n++;
  }
  return n;
};

/* The term record for a name, so a saved filter can show its post count. */
window.termByName = function (taxKey, name) {
  var all = (TAXONOMIES[taxKey] || { terms: [] }).terms;
  return all.filter(function (t) { return t.n === name; })[0] || null;
};

/* Designs A to D were written against a flat array of
   { k, n, terms: [ name ] }. Derived from the real data so they keep working
   and keep showing real terms. Design E uses TAXONOMIES directly. */
window.TAXONOMIES_V1 = Object.keys(TAXONOMIES).map(function (k) {
  return { k: k, n: TAXONOMIES[k].n, terms: TAXONOMIES[k].terms.slice(0, 40).map(function (t) { return t.n; }) };
});

/* The shelf being edited in every one of these designs. Terms are real:
   Health is a Category, Hide Post never existed. */
window.SHELF = {
  name: 'Featured Stories',
  key: 'featured-stories',
  count: 4,
  sort: 'Newest',
  types: [ 'newspost' ],
  include: [],
  exclude: [],
  rotation: { on: true, interval: '1h', start: '00:00' }
};


/* --------------------------------------------------------------------------
   When does this shelf next rotate?

   Derived from the start time and the interval, the same way the plugin's
   getNextRotationTimes does it: anchor to today's start time, step forward
   by the interval until you pass now.
   -------------------------------------------------------------------------- */

/**
 * "1h", "90m", "2h 30m" or a bare "90" -> minutes. Returns 0 when it cannot
 * be read. Mirrors parseDuration() in duration-input.tsx, including the bare
 * number being treated as minutes.
 */
window.intervalMinutes = function (text) {
  var t = String(text).trim().toLowerCase();
  if (!t) return 0;
  if (/^\d+$/.test(t)) return parseInt(t, 10);

  var m = t.match(/^(?:(\d+)\s*h)?\s*(?:(\d+)\s*m)?$/);
  if (!m || (!m[1] && !m[2])) return 0;
  return parseInt(m[1] || '0', 10) * 60 + parseInt(m[2] || '0', 10);
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

/**
 * When the next rotation lands.
 *
 * It opens with the current time, because "next run 3:00 PM" under a midnight
 * start reads as a mistake with nothing to measure it against.
 */
window.nextRunLine = function (start, every, now) {
  var times = nextRotations(start, every, 1, now);
  if (!times.length) return 'Try 1h, 30m, 1h 30m, or a number of minutes.';

  now = now || new Date();
  var t = times[0];
  var clock = function (d) { return d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }); };

  var bits = String(start).split(':');
  var anchor = new Date(now);
  anchor.setHours(parseInt(bits[0], 10) || 0, parseInt(bits[1], 10) || 0, 0, 0);

  var away = Math.ceil((t.getTime() - now.getTime()) / 60000);
  var inWords = away < 1 ? 'less than a minute'
    : away < 60 ? away + ' min'
    : Math.floor(away / 60) + 'h ' + (away % 60) + 'm';

  var sameDay = t.toDateString() === now.toDateString();

  /* The current time was scaffolding for working out whether the maths was
     right. It is on the reader's own clock, so it never needed saying. */
  return 'Next run ' + clock(t) +
    (sameDay ? '' : ' tomorrow') + ', in ' + inWords + '.';
};
