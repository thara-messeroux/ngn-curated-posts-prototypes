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
