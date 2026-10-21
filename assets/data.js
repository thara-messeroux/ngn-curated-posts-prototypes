/* ==========================================================================
   Curated Posts — instance data
   Read from the live wp-admin screen (admin.php?page=ngn-curated-posts)
   on 20 October 2026. Field names match the plugin's own labels.
   ========================================================================== */

window.CURATED = [
  { n: "Featured stories", s: "featured-stories", g: "Featured", stories: 4, types: "newspost", inc: [], exc: [], search: "newspost", rot: "timespan", rotStart: "11:00 AM", upcoming: 4, state: "live" },
  { n: "World Cup 2026 stories", s: "world-cup-2026-stories", g: "World Cup", stories: 4, types: "newspost, fcc_promo", inc: [{ t: "category", v: "World Cup 2026" }], exc: [{ t: "category", v: "Preview" }, { t: "category", v: "First Stage" }, { t: "category", v: "Round of 32" }, { t: "category", v: "Round of 16" }, { t: "category", v: "Quarter Final" }, { t: "category", v: "Semi Final" }, { t: "category", v: "Final" }], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "Spotlight", s: "spotlight", g: "Other", stories: 1, types: "newspost, video", inc: [{ t: "category", v: "Spotlight" }], exc: [], search: "newspost, video", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "World Cup 2026 stories preview", s: "world-cup-2026-stories-preview", g: "World Cup", stories: 4, types: "newspost", inc: [{ t: "category", v: "Preview" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "World Cup 2026 stories first stage", s: "world-cup-2026-stories-first-stage", g: "World Cup", stories: 4, types: "newspost", inc: [{ t: "category", v: "First Stage" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "World Cup 2026 stories round of 32", s: "world-cup-2026-stories-round-of-32", g: "World Cup", stories: 4, types: "newspost", inc: [{ t: "category", v: "Round of 32" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "World Cup 2026 stories round of 16", s: "world-cup-2026-stories-round-of-16", g: "World Cup", stories: 4, types: "newspost", inc: [{ t: "category", v: "Round of 16" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "World Cup 2026 stories quarter final", s: "world-cup-2026-stories-quarter-final", g: "World Cup", stories: 4, types: "newspost", inc: [{ t: "category", v: "Quarter Final" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "World Cup 2026 stories semifinal", s: "world-cup-2026-stories-semifinal", g: "World Cup", stories: 4, types: "newspost", inc: [{ t: "category", v: "Semi Final" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "World Cup 2026 final", s: "world-cup-2026-final", g: "World Cup", stories: 4, types: "newspost, web", inc: [{ t: "category", v: "Final" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Convocation 2026", s: "convocation-2026", g: "Other", stories: 4, types: "newspost", inc: [], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Artificial intelligence", s: "artificial-intelligence", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "tag", v: "AI" }, { t: "tag", v: "artificial intelligence" }, { t: "tag", v: "AI ethics" }], exc: [], search: "newspost", rot: "timespan", rotStart: "11:00 AM", upcoming: 4, state: "live" },
  { n: "Global university system", s: "global-university-system", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "14 campus terms" }], exc: [], search: "newspost", rot: "timespan", rotStart: "11:00 AM", upcoming: 4, state: "live" },
  { n: "University news", s: "university-news", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "University News" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Science and technology", s: "science-technology", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "Science & Technology" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "World and national news", s: "world-national-news", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "World & National News" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Arts and entertainment", s: "arts-entertainment", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "Arts & Entertainment" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Health", s: "health", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "Health" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Sports", s: "sports", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "Sports" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Society and culture", s: "society-culture", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "Society & Culture" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Business", s: "business", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "category", v: "Business" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read global university news", s: "most-read-global-university-news", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "category", v: "13 campus terms" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read entrepreneurship", s: "most-read-entrepreneurship", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "tag", v: "6 entrepreneurship terms" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read world and national news", s: "most-read-world-national-news", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "category", v: "World & National News" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read science and technology", s: "most-read-science-technology", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "category", v: "Science & Technology" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read arts and entertainment", s: "most-read-arts-entertainment", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "category", v: "Arts & Entertainment" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read business", s: "most-read-business", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "category", v: "Business" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read health", s: "most-read-health", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "category", v: "Health" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read society and culture", s: "most-read-society-culture", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "category", v: "Society & Culture" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read sports", s: "most-read-sports", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "category", v: "Sports" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Most read artificial intelligence", s: "most-read-artificial-intelligence", g: "Most read", stories: 5, types: "newspost", inc: [{ t: "tag", v: "AI" }, { t: "tag", v: "artificial intelligence" }, { t: "tag", v: "AI ethics" }], exc: [], search: "newspost", rot: "timespan", rotStart: "11:00 AM", upcoming: 4, state: "live" },
  { n: "Global entrepreneurship", s: "global-entrepreneurship", g: "Topic", stories: 4, types: "newspost", inc: [{ t: "tag", v: "entrepreneurship" }, { t: "tag", v: "startups" }, { t: "tag", v: "innovation" }, { t: "tag", v: "founders" }], exc: [], search: "newspost", rot: "timespan", rotStart: "11:00 AM", upcoming: 4, state: "live" },
  { n: "Featured research", s: "featured-research", g: "Featured", stories: 3, types: "newspost", inc: [{ t: "category", v: "Research" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Featured university news", s: "featured-university-news", g: "Featured", stories: 3, types: "newspost", inc: [{ t: "category", v: "University News" }], exc: [{ t: "tag", v: "No sub brand" }], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Multimedia", s: "multimedia", g: "Other", stories: 3, types: "print", inc: [{ t: "category", v: "Multimedia" }], exc: [], search: "print", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Editor's picks", s: "editors-picks", g: "Other", stories: 5, types: "newspost", inc: [], exc: [], search: "newspost, homepage", rot: "timespan", rotStart: "11:00 AM", upcoming: 4, state: "live" },
  { n: "Latest world news", s: "latest-world-news", g: "Latest", stories: 3, types: "post, eight-oh-five, magazine-article, newspost", inc: [{ t: "category", v: "World & National News" }], exc: [{ t: "display-options", v: "Hide Post" }, { t: "article format", v: "Seen Around Northeastern" }], search: "post, eight-oh-five, magazine-article, newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "Latest science and technology", s: "latest-science-technology", g: "Latest", stories: 3, types: "post, eight-oh-five, magazine-article, newspost", inc: [{ t: "category", v: "Science & Technology" }], exc: [{ t: "display-options", v: "Hide Post" }, { t: "article format", v: "Seen Around Northeastern" }], search: "post, eight-oh-five, magazine-article, newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "Latest arts entertainment", s: "latest-arts-entertainment", g: "Latest", stories: 3, types: "post, eight-oh-five, magazine-article, newspost", inc: [{ t: "category", v: "Arts & Entertainment" }], exc: [{ t: "display-options", v: "Hide Post" }, { t: "article format", v: "Seen Around Northeastern" }], search: "post, eight-oh-five, magazine-article, newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "Latest business", s: "latest-business", g: "Latest", stories: 3, types: "post, eight-oh-five, magazine-article, newspost", inc: [{ t: "category", v: "Business" }], exc: [{ t: "display-options", v: "Hide Post" }, { t: "article format", v: "Seen Around Northeastern" }], search: "post, eight-oh-five, magazine-article, newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "Latest health", s: "latest-health", g: "Latest", stories: 3, types: "post, eight-oh-five, magazine-article, newspost", inc: [{ t: "category", v: "Health" }], exc: [{ t: "display-options", v: "Hide Post" }, { t: "article format", v: "Seen Around Northeastern" }], search: "post, eight-oh-five, magazine-article, newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "Latest society culture", s: "latest-society-culture", g: "Latest", stories: 3, types: "post, eight-oh-five, magazine-article, newspost", inc: [{ t: "category", v: "Society & Culture" }], exc: [{ t: "display-options", v: "Hide Post" }, { t: "article format", v: "Seen Around Northeastern" }], search: "post, eight-oh-five, magazine-article, newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "Latest sports", s: "latest-sports", g: "Latest", stories: 3, types: "post, eight-oh-five, magazine-article, newspost", inc: [{ t: "category", v: "Sports" }], exc: [{ t: "display-options", v: "Hide Post" }, { t: "article format", v: "Seen Around Northeastern" }], search: "post, eight-oh-five, magazine-article, newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "Latest entrepreneurship", s: "latest-entrepreneurship", g: "Latest", stories: 3, types: "9 post types", inc: [{ t: "tag", v: "entrepreneurship" }], exc: [{ t: "display-options", v: "Hide Post" }], search: "9 post types", rot: "Off", rotStart: "N/A", upcoming: 0, state: "check" },
  { n: "In the press", s: "in-the-press", g: "Other", stories: 3, types: "In the Press", inc: [], exc: [], search: "In the Press", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Global textbook", s: "global-textbook", g: "Other", stories: 3, types: "ext. resource", inc: [{ t: "category", v: "Global Textbook" }, { t: "tag", v: "text" }], exc: [], search: "ext. resource", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" },
  { n: "Research spotlight", s: "research-spotlight", g: "Featured", stories: 3, types: "newspost", inc: [{ t: "category", v: "Research" }], exc: [], search: "newspost", rot: "Off", rotStart: "N/A", upcoming: 0, state: "live" }
];

window.GROUP_ORDER = ["Featured", "Most read", "Latest", "Topic", "World Cup", "Other"];

/* Shared helpers used by all three directions ----------------------------- */

window.CP = {
  esc: function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  },

  /* The one-line summary that tells two similar shelves apart. */
  summary: function (d) {
    var bits = [d.stories + (d.stories === 1 ? " story" : " stories"), d.types];
    if (d.inc.length) bits.push(d.inc.map(function (t) { return t.v; }).join(", "));
    if (d.exc.length) bits.push(d.exc.length + " excluded");
    return bits.join(" · ");
  },

  terms: function (list, kind) {
    if (!list.length) return '<span class="muted">None</span>';
    return list.map(function (t) {
      return '<span class="term' + (kind === "exc" ? " term-exclude" : "") + '">' +
        CP.esc(t.t) + ": " + CP.esc(t.v) + "</span>";
    }).join("");
  },

  /* Only the fields that actually hold a value. */
  fields: function (d) {
    var rows = [
      ["Stories", d.stories],
      ["Post types", CP.esc(d.types)],
      ["Include terms", CP.terms(d.inc, "inc")],
      ["Exclude terms", d.exc.length ? CP.terms(d.exc, "exc") : null],
      ["Search post types", d.search === d.types ? null : CP.esc(d.search)],
      ["Rotation interval", d.rot === "Off" ? null : CP.esc(d.rot)],
      ["Rotation start", d.rotStart === "N/A" ? null : CP.esc(d.rotStart)],
      ["Upcoming rotations", d.upcoming ? d.upcoming + " scheduled" : null]
    ];
    return rows.filter(function (r) { return r[1] !== null; }).map(function (r) {
      return '<div class="field"><dt>' + r[0] + "</dt><dd>" + r[1] + "</dd></div>";
    }).join("");
  },

  pill: function (d) {
    return d.state === "live"
      ? '<span class="pill pill-live">Live</span>'
      : '<span class="pill pill-check">Needs check</span>';
  },

  /* Count of label/value lines the current screen prints for one instance. */
  LEGACY_FIELDS_PER_CARD: 8
};
