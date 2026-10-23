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
  {"k": "post", "n": "Post", "tax": ["category", "post_tag", "audience", "article-format", "department", "campus", "newsfeed", "kicker", "spotlight"]},
  {"k": "page", "n": "Page", "tax": ["post_tag", "campus", "kicker", "spotlight"]},
  {"k": "wp_block", "n": "Pattern", "tax": []},
  {"k": "wp_navigation", "n": "Navigation Menu", "tax": []},
  {"k": "acf-taxonomy", "n": "Taxonomies", "tax": []},
  {"k": "acf-post-type", "n": "Post Type", "tax": []},
  {"k": "acf-ui-options-page", "n": "Options Pages", "tax": []},
  {"k": "acf-field-group", "n": "Field Group", "tax": []},
  {"k": "jp_search_overlay", "n": "Search overlay template", "tax": []},
  {"k": "jetpack_form", "n": "Form", "tax": []},
  {"k": "ceremony", "n": "Ceremony", "tax": []},
  {"k": "section", "n": "Section", "tax": ["spotlight"]},
  {"k": "topic", "n": "Topic", "tax": ["spotlight"]},
  {"k": "internal-news", "n": "Faculty & Staff Article", "tax": ["post_tag", "campus", "newsfeed", "kicker", "spotlight"]},
  {"k": "eight-oh-five", "n": "8:05 Post", "tax": ["category", "post_tag", "campus", "kicker", "spotlight"]},
  {"k": "seen-around", "n": "Seen Around", "tax": ["post_tag", "seen-around-audience", "kicker", "spotlight"]},
  {"k": "dates-to-remember", "n": "Event", "tax": ["campus", "kicker", "spotlight"]},
  {"k": "faculty-staff-video", "n": "Video", "tax": ["post_tag", "kicker", "spotlight"]},
  {"k": "livestream", "n": "Livestream Page", "tax": ["post_tag", "spotlight"]},
  {"k": "newspost", "n": "News Post", "tax": ["category", "post_tag", "audience", "department", "campus", "newsfeed", "kicker", "spotlight"]},
  {"k": "parents", "n": "Parents and Family Article", "tax": ["post_tag", "audience", "campus", "newsfeed", "spotlight"]},
  {"k": "magazine-article", "n": "Magazine Article", "tax": ["category", "post_tag", "audience", "newsfeed", "spotlight"]},
  {"k": "image-sequences", "n": "Image Sequences", "tax": ["spotlight"]},
  {"k": "research", "n": "Research Article", "tax": ["post_tag", "research-section", "research-topic", "faculty", "publication", "department", "campus", "newsfeed", "kicker", "spotlight"]},
  {"k": "live_update", "n": "Live Update", "tax": ["live_update_channel"]},
  {"k": "faculty-experts", "n": "Faculty Expert", "tax": ["department", "expertise"]},
  {"k": "in-the-news", "n": "In the Press Article", "tax": ["post_tag", "publication", "expertise"]},
  {"k": "ep-pointer", "n": "Custom Search Result", "tax": []}
];


/* Keyed by slug, because taxonomyFilters is Record<string, ...> - one
   filter per taxonomy, shared by every post type that offers it. */
window.TAXONOMIES = {
 "post_tag": {
  "n": "Tag",
  "count": 12710,
  "terms": [
   {
    "n": "#LikeAHusky",
    "s": "likeahusky",
    "p": null,
    "c": 5
   },
   {
    "n": "2016-17",
    "s": "2016-17",
    "p": null,
    "c": 2
   },
   {
    "n": "30 under 30",
    "s": "30-under-30",
    "p": null,
    "c": 3
   },
   {
    "n": "6G technology",
    "s": "6g-technology",
    "p": null,
    "c": 2
   },
   {
    "n": "aaron hernandez",
    "s": "aaron-hernandez",
    "p": null,
    "c": 2
   },
   {
    "n": "academic journal",
    "s": "academic-journal",
    "p": null,
    "c": 1
   },
   {
    "n": "ACLU",
    "s": "aclu",
    "p": null,
    "c": 8
   },
   {
    "n": "Adam Naylor",
    "s": "adam-naylor",
    "p": null,
    "c": 1
   },
   {
    "n": "ads",
    "s": "ads",
    "p": null,
    "c": 1
   },
   {
    "n": "Affective and Brain Sciences Laboratory",
    "s": "affective-and-brain-sciences-laboratory",
    "p": null,
    "c": 3
   },
   {
    "n": "Agganis Arena",
    "s": "agganis-arena",
    "p": null,
    "c": 2
   },
   {
    "n": "Air Force Life Cycle Management Center",
    "s": "air-force-life-cycle-management-center",
    "p": null,
    "c": 1
   },
   {
    "n": "Al Franken",
    "s": "al-franken",
    "p": null,
    "c": 2
   },
   {
    "n": "ALERT",
    "s": "alert",
    "p": null,
    "c": 8
   },
   {
    "n": "Alexandra Roth",
    "s": "alexandra-roth",
    "p": null,
    "c": 1
   },
   {
    "n": "Alicia Lezama",
    "s": "alicia-lezama",
    "p": null,
    "c": 1
   },
   {
    "n": "alternative investments",
    "s": "alternative-investments",
    "p": null,
    "c": 4
   },
   {
    "n": "Amelia Earhart",
    "s": "amelia-earhart",
    "p": null,
    "c": 1
   },
   {
    "n": "American Pharmacists Association",
    "s": "american-pharmacists-association",
    "p": null,
    "c": 2
   },
   {
    "n": "Amy Farrell",
    "s": "amy-farrell",
    "p": null,
    "c": 11
   },
   {
    "n": "and Medical Devices",
    "s": "and-medical-devices",
    "p": null,
    "c": 1
   },
   {
    "n": "Andrew Yang",
    "s": "andrew-yang",
    "p": null,
    "c": 3
   },
   {
    "n": "Aniyah Smith",
    "s": "aniyah-smith",
    "p": null,
    "c": 3
   },
   {
    "n": "anole lizards",
    "s": "anole-lizards",
    "p": null,
    "c": 1
   },
   {
    "n": "anti-Semitism",
    "s": "anti-semitism",
    "p": null,
    "c": 1
   },
   {
    "n": "Anvers island biology",
    "s": "anvers-island-biology",
    "p": null,
    "c": 1
   },
   {
    "n": "apps",
    "s": "apps",
    "p": null,
    "c": 25
   },
   {
    "n": "archives",
    "s": "archives",
    "p": null,
    "c": 25
   },
   {
    "n": "Army Research Laboratory",
    "s": "army-research-laboratory",
    "p": null,
    "c": 4
   },
   {
    "n": "arXiv",
    "s": "arxiv",
    "p": null,
    "c": 1
   },
   {
    "n": "ASR",
    "s": "asr",
    "p": null,
    "c": 1
   },
   {
    "n": "Atacama Desert",
    "s": "atacama-desert",
    "p": null,
    "c": 1
   },
   {
    "n": "attack",
    "s": "attack",
    "p": null,
    "c": 2
   },
   {
    "n": "Aug. 3 to Aug. 7",
    "s": "aug-3-to-aug-7",
    "p": null,
    "c": 1
   },
   {
    "n": "automotive",
    "s": "automotive",
    "p": null,
    "c": 2
   },
   {
    "n": "Ayanna Miller",
    "s": "ayanna-miller",
    "p": null,
    "c": 1
   },
   {
    "n": "BAFTA",
    "s": "bafta",
    "p": null,
    "c": 1
   },
   {
    "n": "banking",
    "s": "banking",
    "p": null,
    "c": 9
   },
   {
    "n": "Basra",
    "s": "basra",
    "p": null,
    "c": 1
   },
   {
    "n": "beauty",
    "s": "beauty",
    "p": null,
    "c": 12
   },
   {
    "n": "behrakis",
    "s": "behrakis",
    "p": null,
    "c": 2
   },
   {
    "n": "benefit corporations",
    "s": "benefit-corporations",
    "p": null,
    "c": 1
   },
   {
    "n": "best bees company",
    "s": "best-bees-company",
    "p": null,
    "c": 2
   },
   {
    "n": "biases",
    "s": "biases",
    "p": null,
    "c": 1
   },
   {
    "n": "bill fowler",
    "s": "bill-fowler",
    "p": null,
    "c": 1
   },
   {
    "n": "Biogen Idec",
    "s": "biogen-idec",
    "p": null,
    "c": 1
   },
   {
    "n": "biosensors",
    "s": "biosensors",
    "p": null,
    "c": 4
   },
   {
    "n": "Black Arts Movement",
    "s": "black-arts-movement",
    "p": null,
    "c": 1
   },
   {
    "n": "blind",
    "s": "blind",
    "p": null,
    "c": 2
   },
   {
    "n": "blues",
    "s": "blues",
    "p": null,
    "c": 1
   },
   {
    "n": "Bon Jovi",
    "s": "bon-jovi",
    "p": null,
    "c": 1
   },
   {
    "n": "Boston 2024",
    "s": "boston-2024",
    "p": null,
    "c": 2
   },
   {
    "n": "Boston Police Department",
    "s": "boston-police-department",
    "p": null,
    "c": 8
   },
   {
    "n": "Bouvé College of Health Sciences",
    "s": "bouve-college-of-health-sciences",
    "p": null,
    "c": 361
   },
   {
    "n": "brand awareness",
    "s": "brand-awareness",
    "p": null,
    "c": 7
   },
   {
    "n": "Brendan Joseph",
    "s": "brendan-joseph",
    "p": null,
    "c": 1
   },
   {
    "n": "brigham and women's hospital",
    "s": "brigham-and-womens-hospital",
    "p": null,
    "c": 9
   },
   {
    "n": "Bruce Clark",
    "s": "bruce-clark",
    "p": null,
    "c": 5
   },
   {
    "n": "Build for Black Lives",
    "s": "build-for-black-lives",
    "p": null,
    "c": 1
   },
   {
    "n": "Bush v. Gore",
    "s": "bush-v-gore",
    "p": null,
    "c": 3
   },
   {
    "n": "Byron Kress",
    "s": "byron-kress",
    "p": null,
    "c": 1
   },
   {
    "n": "Caitlin Cloonan",
    "s": "caitlin-cloonan",
    "p": null,
    "c": 1
   },
   {
    "n": "Camille Martin",
    "s": "camille-martin",
    "p": null,
    "c": 3
   },
   {
    "n": "campus safety",
    "s": "campus-safety",
    "p": null,
    "c": 14
   },
   {
    "n": "cap and gown",
    "s": "cap-and-gown",
    "p": null,
    "c": 8
   },
   {
    "n": "carbon fibers",
    "s": "carbon-fibers",
    "p": null,
    "c": 1
   },
   {
    "n": "career success",
    "s": "career-success",
    "p": null,
    "c": 9
   },
   {
    "n": "Carnegie Corporation of New York",
    "s": "carnegie-corporation-of-new-york",
    "p": null,
    "c": 3
   },
   {
    "n": "casirivimab",
    "s": "casirivimab",
    "p": null,
    "c": 1
   },
   {
    "n": "Cayden Primeau",
    "s": "cayden-primeau",
    "p": null,
    "c": 23
   },
   {
    "n": "cellular aggregation",
    "s": "cellular-aggregation",
    "p": null,
    "c": 2
   },
   {
    "n": "Center for Intercultural Engagement",
    "s": "center-for-intercultural-engagement",
    "p": null,
    "c": 3
   },
   {
    "n": "Central Park",
    "s": "central-park",
    "p": null,
    "c": 1
   },
   {
    "n": "change agents",
    "s": "change-agents",
    "p": null,
    "c": 1
   },
   {
    "n": "Charles Stuart",
    "s": "charles-stuart",
    "p": null,
    "c": 1
   },
   {
    "n": "cheesed",
    "s": "cheesed",
    "p": null,
    "c": 1
   },
   {
    "n": "Cheryl Clarke",
    "s": "cheryl-clarke",
    "p": null,
    "c": 1
   },
   {
    "n": "childhood trauma",
    "s": "childhood-trauma",
    "p": null,
    "c": 3
   },
   {
    "n": "Chris Christie",
    "s": "chris-christie",
    "p": null,
    "c": 1
   },
   {
    "n": "Christine Blasey Ford",
    "s": "christine-blasey-ford",
    "p": null,
    "c": 2
   },
   {
    "n": "chronic stress",
    "s": "chronic-stress",
    "p": null,
    "c": 4
   },
   {
    "n": "city and community affairs",
    "s": "city-and-community-affairs",
    "p": null,
    "c": 7
   },
   {
    "n": "Civil Rights Act",
    "s": "civil-rights-act",
    "p": null,
    "c": 3
   },
   {
    "n": "classical music",
    "s": "classical-music",
    "p": null,
    "c": 8
   },
   {
    "n": "climate modeling",
    "s": "climate-modeling",
    "p": null,
    "c": 2
   },
   {
    "n": "co-cop",
    "s": "co-cop",
    "p": null,
    "c": 1
   },
   {
    "n": "Codie Cross",
    "s": "codie-cross",
    "p": null,
    "c": 7
   },
   {
    "n": "Colege of Arts",
    "s": "colege-of-arts",
    "p": null,
    "c": 1
   },
   {
    "n": "College of Arts Media and Design (CAMD)",
    "s": "college-of-arts-media-and-design-camd",
    "p": null,
    "c": 251
   },
   {
    "n": "colognoisseur",
    "s": "colognoisseur",
    "p": null,
    "c": 2
   },
   {
    "n": "comedy show",
    "s": "comedy-show",
    "p": null,
    "c": 2
   },
   {
    "n": "commencement speech",
    "s": "commencement-speech",
    "p": null,
    "c": 6
   },
   {
    "n": "communism",
    "s": "communism",
    "p": null,
    "c": 4
   },
   {
    "n": "Community Servings",
    "s": "community-servings",
    "p": null,
    "c": 1
   },
   {
    "n": "computer",
    "s": "computer",
    "p": null,
    "c": 3
   },
   {
    "n": "condensed matter physics",
    "s": "condensed-matter-physics-3",
    "p": null,
    "c": 3
   },
   {
    "n": "connections and resources",
    "s": "connections-and-resources",
    "p": null,
    "c": 1
   },
   {
    "n": "consumer rights",
    "s": "consumer-rights",
    "p": null,
    "c": 1
   },
   {
    "n": "cooking and baking",
    "s": "cooking-and-baking",
    "p": null,
    "c": 2
   },
   {
    "n": "Coretta Scott King",
    "s": "coretta-scott-king",
    "p": null,
    "c": 1
   },
   {
    "n": "Cosmology",
    "s": "cosmology",
    "p": null,
    "c": 17
   },
   {
    "n": "Covax",
    "s": "covax",
    "p": null,
    "c": 2
   },
   {
    "n": "COVID-19 symptoms",
    "s": "covid-19-symptoms",
    "p": null,
    "c": 1
   },
   {
    "n": "crab walk",
    "s": "crab-walk",
    "p": null,
    "c": 1
   },
   {
    "n": "credit rating",
    "s": "credit-rating",
    "p": null,
    "c": 2
   },
   {
    "n": "Critical Infrastructure Resilience",
    "s": "critical-infrastructure-resilience",
    "p": null,
    "c": 9
   },
   {
    "n": "crystal growth",
    "s": "crystal-growth",
    "p": null,
    "c": 1
   },
   {
    "n": "cuprate superconductivity",
    "s": "cuprate-superconductivity",
    "p": null,
    "c": 1
   },
   {
    "n": "cyber crime",
    "s": "cyber-crime",
    "p": null,
    "c": 2
   },
   {
    "n": "D'a",
    "s": "da",
    "p": null,
    "c": 0
   },
   {
    "n": "dan knudsen",
    "s": "dan-knudsen",
    "p": null,
    "c": 1
   },
   {
    "n": "Daniel Douglass",
    "s": "daniel-douglass",
    "p": null,
    "c": 3
   },
   {
    "n": "dark comedy",
    "s": "dark-comedy",
    "p": null,
    "c": 1
   },
   {
    "n": "data protection policy",
    "s": "data-protection-policy",
    "p": null,
    "c": 2
   },
   {
    "n": "David Cotton",
    "s": "david-cotton",
    "p": null,
    "c": 2
   },
   {
    "n": "David Nirenberg",
    "s": "david-nirenberg",
    "p": null,
    "c": 1
   },
   {
    "n": "de-escalation",
    "s": "de-escalation",
    "p": null,
    "c": 2
   },
   {
    "n": "Debra Katz",
    "s": "debra-katz",
    "p": null,
    "c": 1
   },
   {
    "n": "Defense Distributed",
    "s": "defense-distributed",
    "p": null,
    "c": 1
   },
   {
    "n": "democratic candidates",
    "s": "democratic-candidates",
    "p": null,
    "c": 1
   },
   {
    "n": "department chair",
    "s": "department-chair",
    "p": null,
    "c": 1
   },
   {
    "n": "Department of Pharmaceudical Sciences",
    "s": "department-of-pharmaceudical-sciences",
    "p": null,
    "c": 7
   },
   {
    "n": "design studio",
    "s": "design-studio",
    "p": null,
    "c": 2
   },
   {
    "n": "Diablo 3",
    "s": "diablo-3",
    "p": null,
    "c": 1
   },
   {
    "n": "dietary supplement",
    "s": "dietary-supplement",
    "p": null,
    "c": 3
   },
   {
    "n": "Digital Measures",
    "s": "digital-measures",
    "p": null,
    "c": 1
   },
   {
    "n": "dinner",
    "s": "dinner",
    "p": null,
    "c": 1
   },
   {
    "n": "disease module",
    "s": "disease-module",
    "p": null,
    "c": 1
   },
   {
    "n": "Diwali",
    "s": "diwali",
    "p": null,
    "c": 1
   },
   {
    "n": "dogs",
    "s": "dogs",
    "p": null,
    "c": 22
   },
   {
    "n": "Donghee Jo",
    "s": "donghee-jo",
    "p": null,
    "c": 2
   },
   {
    "n": "Doug Ducey",
    "s": "doug-ducey",
    "p": null,
    "c": 1
   },
   {
    "n": "drawing",
    "s": "drawing",
    "p": null,
    "c": 2
   },
   {
    "n": "drug policy",
    "s": "drug-policy",
    "p": null,
    "c": 4
   },
   {
    "n": "Dustin Darou",
    "s": "dustin-darou",
    "p": null,
    "c": 1
   },
   {
    "n": "earthwatch",
    "s": "earthwatch",
    "p": null,
    "c": 1
   },
   {
    "n": "ecological resilience",
    "s": "ecological-resilience",
    "p": null,
    "c": 4
   },
   {
    "n": "Eddie Garcia",
    "s": "eddie-garcia",
    "p": null,
    "c": 1
   },
   {
    "n": "Eighth continent",
    "s": "eighth-continent",
    "p": null,
    "c": 1
   },
   {
    "n": "electric grid",
    "s": "electric-grid",
    "p": null,
    "c": 2
   },
   {
    "n": "Elia Nara",
    "s": "elia-nara",
    "p": null,
    "c": 1
   },
   {
    "n": "Ellen Cushman",
    "s": "ellen-cushman",
    "p": null,
    "c": 4
   },
   {
    "n": "emergency management",
    "s": "emergency-management",
    "p": null,
    "c": 5
   },
   {
    "n": "Emily White",
    "s": "emily-white",
    "p": null,
    "c": 2
   },
   {
    "n": "employment discrimination",
    "s": "employment-discrimination",
    "p": null,
    "c": 1
   },
   {
    "n": "enemy of the american people",
    "s": "enemy-of-the-american-people",
    "p": null,
    "c": 1
   },
   {
    "n": "enrollment",
    "s": "enrollment",
    "p": null,
    "c": 6
   },
   {
    "n": "environmental clean-up",
    "s": "environmental-clean-up",
    "p": null,
    "c": 1
   },
   {
    "n": "epidemic and pandemic",
    "s": "epidemic-and-pandemic",
    "p": null,
    "c": 3
   },
   {
    "n": "Eric Schneiderman",
    "s": "eric-schneiderman",
    "p": null,
    "c": 1
   },
   {
    "n": "essential workers",
    "s": "essential-workers",
    "p": null,
    "c": 3
   },
   {
    "n": "Euphrates",
    "s": "euphrates",
    "p": null,
    "c": 2
   },
   {
    "n": "everglades",
    "s": "everglades",
    "p": null,
    "c": 1
   },
   {
    "n": "exercise science lab",
    "s": "exercise-science-lab",
    "p": null,
    "c": 3
   },
   {
    "n": "expo",
    "s": "expo",
    "p": null,
    "c": 2
   },
   {
    "n": "face shields",
    "s": "face-shields",
    "p": null,
    "c": 4
   },
   {
    "n": "faculty governance",
    "s": "faculty-governance",
    "p": null,
    "c": 2
   },
   {
    "n": "family",
    "s": "family",
    "p": null,
    "c": 15
   },
   {
    "n": "fashion",
    "s": "fashion",
    "p": null,
    "c": 28
   },
   {
    "n": "federal budget",
    "s": "federal-budget",
    "p": null,
    "c": 7
   },
   {
    "n": "feedback system",
    "s": "feedback-system",
    "p": null,
    "c": 1
   },
   {
    "n": "Fernanda Lopez",
    "s": "fernanda-lopez",
    "p": null,
    "c": 1
   },
   {
    "n": "Fields Medal",
    "s": "fields-medal",
    "p": null,
    "c": 1
   },
   {
    "n": "financial services committee",
    "s": "financial-services-committee",
    "p": null,
    "c": 1
   },
   {
    "n": "first home opener",
    "s": "first-home-opener",
    "p": null,
    "c": 1
   },
   {
    "n": "Fitbit",
    "s": "fitbit",
    "p": null,
    "c": 3
   },
   {
    "n": "flu shot",
    "s": "flu-shot",
    "p": null,
    "c": 10
   },
   {
    "n": "forced labor patterns",
    "s": "forced-labor-patterns",
    "p": null,
    "c": 3
   },
   {
    "n": "Forum Restaurant",
    "s": "forum-restaurant",
    "p": null,
    "c": 1
   },
   {
    "n": "Francis Choi",
    "s": "francis-choi",
    "p": null,
    "c": 1
   },
   {
    "n": "freelancing",
    "s": "freelancing",
    "p": null,
    "c": 1
   },
   {
    "n": "FTC Commercial Corp.",
    "s": "ftc-commercial-corp",
    "p": null,
    "c": 1
   },
   {
    "n": "future",
    "s": "future",
    "p": null,
    "c": 5
   },
   {
    "n": "Gallaudet University",
    "s": "gallaudet-university",
    "p": null,
    "c": 2
   },
   {
    "n": "games",
    "s": "games",
    "p": null,
    "c": 14
   },
   {
    "n": "Gateway Pundit",
    "s": "gateway-pundit",
    "p": null,
    "c": 1
   },
   {
    "n": "gender nonconforming",
    "s": "gender-nonconforming",
    "p": null,
    "c": 1
   },
   {
    "n": "genetic engineering",
    "s": "genetic-engineering",
    "p": null,
    "c": 3
   },
   {
    "n": "George H.W. Bush",
    "s": "george-h-w-bush",
    "p": null,
    "c": 2
   },
   {
    "n": "Germeshausen Foundation",
    "s": "germeshausen-foundation",
    "p": null,
    "c": 1
   },
   {
    "n": "gingerbread house",
    "s": "gingerbread-house",
    "p": null,
    "c": 4
   },
   {
    "n": "Glenn Stowell",
    "s": "glenn-stowell",
    "p": null,
    "c": 1
   },
   {
    "n": "global leader",
    "s": "global-leader",
    "p": null,
    "c": 2
   },
   {
    "n": "global security",
    "s": "global-security",
    "p": null,
    "c": 11
   },
   {
    "n": "GoFundMe",
    "s": "gofundme",
    "p": null,
    "c": 1
   },
   {
    "n": "Google union",
    "s": "google-union",
    "p": null,
    "c": 1
   },
   {
    "n": "GPU",
    "s": "gpu",
    "p": null,
    "c": 1
   },
   {
    "n": "graduation rate",
    "s": "graduation-rate",
    "p": null,
    "c": 1
   },
   {
    "n": "Great Barrier Reef",
    "s": "great-barrier-reef",
    "p": null,
    "c": 2
   },
   {
    "n": "green infrastructure",
    "s": "green-infrastructure",
    "p": null,
    "c": 1
   },
   {
    "n": "Gregory Fiete",
    "s": "gregory-fiete",
    "p": null,
    "c": 8
   },
   {
    "n": "group violence",
    "s": "group-violence",
    "p": null,
    "c": 1
   },
   {
    "n": "gun control",
    "s": "gun-control",
    "p": null,
    "c": 18
   },
   {
    "n": "hackathon",
    "s": "hackathon",
    "p": null,
    "c": 15
   },
   {
    "n": "Hancock",
    "s": "hancock",
    "p": null,
    "c": 1
   },
   {
    "n": "Haris N. Koutsopoulos",
    "s": "haris-n-koutsopoulos",
    "p": null,
    "c": 1
   },
   {
    "n": "Hassan Hassan",
    "s": "hassan-hassan",
    "p": null,
    "c": 1
   },
   {
    "n": "Health Affairs",
    "s": "health-affairs",
    "p": null,
    "c": 1
   },
   {
    "n": "healthcare industry",
    "s": "healthcare-industry",
    "p": null,
    "c": 2
   },
   {
    "n": "Heather Hauck",
    "s": "heather-hauck",
    "p": null,
    "c": 1
   },
   {
    "n": "Henry Luce Foundation",
    "s": "henry-luce-foundation",
    "p": null,
    "c": 1
   },
   {
    "n": "high tech",
    "s": "high-tech",
    "p": null,
    "c": 2
   },
   {
    "n": "historical",
    "s": "historical",
    "p": null,
    "c": 5
   },
   {
    "n": "holiday season",
    "s": "holiday-season",
    "p": null,
    "c": 16
   },
   {
    "n": "homeless",
    "s": "homeless",
    "p": null,
    "c": 3
   },
   {
    "n": "Horace Miller",
    "s": "horace-miller",
    "p": null,
    "c": 2
   },
   {
    "n": "House Speaker Paul Ryan",
    "s": "house-speaker-paul-ryan",
    "p": null,
    "c": 1
   },
   {
    "n": "Hughes",
    "s": "hughes",
    "p": null,
    "c": 3
   },
   {
    "n": "human services",
    "s": "human-services",
    "p": null,
    "c": 8
   },
   {
    "n": "Huntington Testing Center",
    "s": "huntington-testing-center",
    "p": null,
    "c": 2
   },
   {
    "n": "Husky Closet Clothing Drive",
    "s": "husky-closet-clothing-drive",
    "p": null,
    "c": 1
   },
   {
    "n": "hypertrophic cardiomyopathy",
    "s": "hypertrophic-cardiomyopathy",
    "p": null,
    "c": 2
   },
   {
    "n": "Idaho",
    "s": "idaho",
    "p": null,
    "c": 2
   },
   {
    "n": "imdevimab",
    "s": "imdevimab",
    "p": null,
    "c": 1
   },
   {
    "n": "implementation",
    "s": "implementation",
    "p": null,
    "c": 1
   },
   {
    "n": "incandescent",
    "s": "incandescent",
    "p": null,
    "c": 1
   },
   {
    "n": "indie music",
    "s": "indie-music",
    "p": null,
    "c": 2
   },
   {
    "n": "inflation",
    "s": "inflation",
    "p": null,
    "c": 33
   },
   {
    "n": "infrastructure",
    "s": "infrastructure",
    "p": null,
    "c": 34
   },
   {
    "n": "Innovator Award",
    "s": "innovator-award",
    "p": null,
    "c": 5
   },
   {
    "n": "insurance",
    "s": "insurance",
    "p": null,
    "c": 6
   },
   {
    "n": "interfaith service",
    "s": "interfaith-service",
    "p": null,
    "c": 1
   },
   {
    "n": "international human security",
    "s": "international-human-security",
    "p": null,
    "c": 1
   },
   {
    "n": "Internet law",
    "s": "internet-law",
    "p": null,
    "c": 3
   },
   {
    "n": "investigative reporting",
    "s": "investigative-reporting",
    "p": null,
    "c": 2
   },
   {
    "n": "Iran nuclear deal",
    "s": "iran-nuclear-deal",
    "p": null,
    "c": 4
   },
   {
    "n": "Israeli-Palestinian conflict",
    "s": "israeli-palestinian-conflict",
    "p": null,
    "c": 14
   },
   {
    "n": "Jack Dennerlein",
    "s": "jack-dennerlein",
    "p": null,
    "c": 2
   },
   {
    "n": "Jagatpreet Nir",
    "s": "jagatpreet-nir",
    "p": null,
    "c": 1
   },
   {
    "n": "James Madison University",
    "s": "james-madison-university",
    "p": null,
    "c": 2
   },
   {
    "n": "Jared Auclair",
    "s": "jared-auclair",
    "p": null,
    "c": 36
   },
   {
    "n": "JEA",
    "s": "jea",
    "p": null,
    "c": 1
   },
   {
    "n": "Jeffrey Konya",
    "s": "jeffrey-konya",
    "p": null,
    "c": 2
   },
   {
    "n": "Jeriyla Kamau-Weng",
    "s": "jeriyla-kamau-weng",
    "p": null,
    "c": 1
   },
   {
    "n": "Jetyak",
    "s": "jetyak",
    "p": null,
    "c": 1
   },
   {
    "n": "Jimmy Fallon",
    "s": "jimmy-fallon",
    "p": null,
    "c": 1
   },
   {
    "n": "Jodie Whittaker",
    "s": "jodie-whittaker",
    "p": null,
    "c": 1
   },
   {
    "n": "John Dean",
    "s": "john-dean",
    "p": null,
    "c": 1
   },
   {
    "n": "John Portz",
    "s": "john-portz",
    "p": null,
    "c": 4
   },
   {
    "n": "Jonah Peretti",
    "s": "jonah-peretti",
    "p": null,
    "c": 1
   },
   {
    "n": "José Buscaglia",
    "s": "jose-buscaglia",
    "p": null,
    "c": 6
   },
   {
    "n": "Journal of Applied Physics",
    "s": "journal-of-applied-physics",
    "p": null,
    "c": 1
   },
   {
    "n": "Judy Garland",
    "s": "judy-garland",
    "p": null,
    "c": 1
   },
   {
    "n": "July 6 to July 10",
    "s": "july-6-to-july-10",
    "p": null,
    "c": 1
   },
   {
    "n": "Justice Department",
    "s": "justice-department",
    "p": null,
    "c": 8
   },
   {
    "n": "Kaeli",
    "s": "kaeli",
    "p": null,
    "c": 2
   },
   {
    "n": "Karl Reid",
    "s": "karl-reid",
    "p": null,
    "c": 9
   },
   {
    "n": "Katie May",
    "s": "katie-may",
    "p": null,
    "c": 2
   },
   {
    "n": "Kellie Bedoni",
    "s": "kellie-bedoni",
    "p": null,
    "c": 1
   },
   {
    "n": "Kenny Joseph",
    "s": "kenny-joseph",
    "p": null,
    "c": 2
   },
   {
    "n": "Khalil Islam",
    "s": "khalil-islam",
    "p": null,
    "c": 1
   },
   {
    "n": "King Richard",
    "s": "king-richard",
    "p": null,
    "c": 1
   },
   {
    "n": "koi pond",
    "s": "koi-pond",
    "p": null,
    "c": 2
   },
   {
    "n": "Kyle Bancroft Taylor",
    "s": "kyle-bancroft-taylor",
    "p": null,
    "c": 1
   },
   {
    "n": "laboratories",
    "s": "laboratories",
    "p": null,
    "c": 5
   },
   {
    "n": "landscaping",
    "s": "landscaping",
    "p": null,
    "c": 7
   },
   {
    "n": "Latin honors",
    "s": "latin-honors",
    "p": null,
    "c": 1
   },
   {
    "n": "Laurie Poklop",
    "s": "laurie-poklop",
    "p": null,
    "c": 1
   },
   {
    "n": "leaders",
    "s": "leaders",
    "p": null,
    "c": 7
   },
   {
    "n": "Lee Breckenridge",
    "s": "lee-breckenridge",
    "p": null,
    "c": 1
   },
   {
    "n": "leila deravi",
    "s": "leila-deravi",
    "p": null,
    "c": 16
   },
   {
    "n": "lgbt",
    "s": "lgbt",
    "p": null,
    "c": 4
   },
   {
    "n": "Lichuan Ye",
    "s": "lichuan-ye",
    "p": null,
    "c": 3
   },
   {
    "n": "Lil Nas X",
    "s": "lil-nas-x",
    "p": null,
    "c": 1
   },
   {
    "n": "links",
    "s": "links",
    "p": null,
    "c": 1
   },
   {
    "n": "Living Colour",
    "s": "living-colour",
    "p": null,
    "c": 1
   },
   {
    "n": "location-independent worker",
    "s": "location-independent-worker",
    "p": null,
    "c": 1
   },
   {
    "n": "Lorna Hayward",
    "s": "lorna-hayward",
    "p": null,
    "c": 1
   },
   {
    "n": "lte",
    "s": "lte",
    "p": null,
    "c": 1
   },
   {
    "n": "Lydia Brown",
    "s": "lydia-brown",
    "p": null,
    "c": 1
   },
   {
    "n": "Maddie Mills",
    "s": "maddie-mills",
    "p": null,
    "c": 2
   },
   {
    "n": "Mai’a Cross",
    "s": "maia-cross",
    "p": null,
    "c": 42
   },
   {
    "n": "malaria in India",
    "s": "malaria-in-india",
    "p": null,
    "c": 1
   },
   {
    "n": "mapping",
    "s": "mapping",
    "p": null,
    "c": 3
   },
   {
    "n": "mardi gras",
    "s": "mardi-gras",
    "p": null,
    "c": 3
   },
   {
    "n": "marine",
    "s": "marine",
    "p": null,
    "c": 2
   },
   {
    "n": "Mark Angelson",
    "s": "mark-angelson",
    "p": null,
    "c": 1
   },
   {
    "n": "marketing summit",
    "s": "marketing-summit",
    "p": null,
    "c": 1
   },
   {
    "n": "Martin Rodriguez-Vega",
    "s": "martin-rodriguez-vega",
    "p": null,
    "c": 2
   },
   {
    "n": "masculinity",
    "s": "masculinity",
    "p": null,
    "c": 3
   },
   {
    "n": "Massachusetts governor Charlie Baker",
    "s": "massachusetts-governor-charlie-baker",
    "p": null,
    "c": 1
   },
   {
    "n": "massive online open courses",
    "s": "massive-online-open-courses",
    "p": null,
    "c": 2
   },
   {
    "n": "Matt Cameron",
    "s": "matt-cameron",
    "p": null,
    "c": 2
   },
   {
    "n": "Matthew Nisbet",
    "s": "matthew-nisbet",
    "p": null,
    "c": 3
   },
   {
    "n": "Max Conley",
    "s": "max-conley",
    "p": null,
    "c": 1
   },
   {
    "n": "mayor of huntington avenue",
    "s": "mayor-of-huntington-avenue",
    "p": null,
    "c": 4
   },
   {
    "n": "media and screen studies",
    "s": "media-and-screen-studies",
    "p": null,
    "c": 4
   },
   {
    "n": "medicine",
    "s": "medicine",
    "p": null,
    "c": 32
   },
   {
    "n": "melatonin",
    "s": "melatonin",
    "p": null,
    "c": 1
   },
   {
    "n": "mental illness",
    "s": "mental-illness",
    "p": null,
    "c": 7
   },
   {
    "n": "Meta",
    "s": "meta",
    "p": null,
    "c": 23
   },
   {
    "n": "Michael Armini",
    "s": "michael-armini",
    "p": null,
    "c": 5
   },
   {
    "n": "Michael Trudeau",
    "s": "michael-trudeau",
    "p": null,
    "c": 1
   },
   {
    "n": "microelectromechanical systems",
    "s": "microelectromechanical-systems",
    "p": null,
    "c": 1
   },
   {
    "n": "midnight master class",
    "s": "midnight-master-class",
    "p": null,
    "c": 1
   },
   {
    "n": "military families",
    "s": "military-families",
    "p": null,
    "c": 2
   },
   {
    "n": "mind-wandering",
    "s": "mind-wandering",
    "p": null,
    "c": 1
   },
   {
    "n": "Minus",
    "s": "minus",
    "p": null,
    "c": 2
   },
   {
    "n": "mitch weiss",
    "s": "mitch-weiss",
    "p": null,
    "c": 1
   },
   {
    "n": "mobility",
    "s": "mobility",
    "p": null,
    "c": 11
   },
   {
    "n": "Monaghan",
    "s": "monaghan",
    "p": null,
    "c": 1
   },
   {
    "n": "Moody’s Investor Services",
    "s": "moodys-investor-services",
    "p": null,
    "c": 1
   },
   {
    "n": "Mother’s Day",
    "s": "mothers-day",
    "p": null,
    "c": 1
   },
   {
    "n": "MRSA",
    "s": "mrsa",
    "p": null,
    "c": 6
   },
   {
    "n": "mural",
    "s": "mural",
    "p": null,
    "c": 27
   },
   {
    "n": "musical performance",
    "s": "musical-performance",
    "p": null,
    "c": 7
   },
   {
    "n": "N95 masks",
    "s": "n95-masks",
    "p": null,
    "c": 2
   },
   {
    "n": "Nancy Wong",
    "s": "nancy-wong",
    "p": null,
    "c": 1
   },
   {
    "n": "Narendra Modi",
    "s": "narendra-modi",
    "p": null,
    "c": 3
   },
   {
    "n": "Nathan Phillips",
    "s": "nathan-phillips",
    "p": null,
    "c": 1
   },
   {
    "n": "National Grid Massachusetts",
    "s": "national-grid-massachusetts",
    "p": null,
    "c": 1
   },
   {
    "n": "National Violent Death Reporting System",
    "s": "national-violent-death-reporting-system",
    "p": null,
    "c": 2
   },
   {
    "n": "Nazi",
    "s": "nazi",
    "p": null,
    "c": 2
   },
   {
    "n": "neglected tro",
    "s": "neglected-tro",
    "p": null,
    "c": 1
   },
   {
    "n": "Network of Experiential Learning Teachers",
    "s": "network-of-experiential-learning-teachers",
    "p": null,
    "c": 4
   },
   {
    "n": "neurology",
    "s": "neurology",
    "p": null,
    "c": 4
   },
   {
    "n": "new faculty",
    "s": "new-faculty",
    "p": null,
    "c": 17
   },
   {
    "n": "New Year's resolution",
    "s": "new-years-resolution",
    "p": null,
    "c": 5
   },
   {
    "n": "NewScientist",
    "s": "newscientist",
    "p": null,
    "c": 1
   },
   {
    "n": "Nicholas Brown",
    "s": "nicholas-brown",
    "p": null,
    "c": 1
   },
   {
    "n": "NIEHS",
    "s": "niehs",
    "p": null,
    "c": 1
   },
   {
    "n": "Noah Ossanna",
    "s": "noah-ossanna",
    "p": null,
    "c": 2
   },
   {
    "n": "nonfiction",
    "s": "nonfiction",
    "p": null,
    "c": 4
   },
   {
    "n": "northeastern",
    "s": "northeastern",
    "p": null,
    "c": 219
   },
   {
    "n": "Northeastern Crossing",
    "s": "northeastern-crossing",
    "p": null,
    "c": 12
   },
   {
    "n": "Northeastern IDEA Lab",
    "s": "northeastern-idea-lab",
    "p": null,
    "c": 1
   },
   {
    "n": "Northeastern Skate Club",
    "s": "northeastern-skate-club",
    "p": null,
    "c": 1
   },
   {
    "n": "Northeastern University Political Review",
    "s": "northeastern-university-political-review",
    "p": null,
    "c": 2
   },
   {
    "n": "Northeastern’s department of Chemistry and Chemical Biology",
    "s": "northeasterns-department-of-chemistry-and-chemical-biology",
    "p": null,
    "c": 1
   },
   {
    "n": "Notre Dame fire damage",
    "s": "notre-dame-fire-damage",
    "p": null,
    "c": 2
   },
   {
    "n": "NSF grant",
    "s": "nsf-grant",
    "p": null,
    "c": 1
   },
   {
    "n": "NU.io",
    "s": "nu-io",
    "p": null,
    "c": 1
   },
   {
    "n": "NUPD Advisory Board",
    "s": "nupd-advisory-board",
    "p": null,
    "c": 1
   },
   {
    "n": "NUworks",
    "s": "nuworks",
    "p": null,
    "c": 2
   },
   {
    "n": "Ocean Genome Legacy",
    "s": "ocean-genome-legacy",
    "p": null,
    "c": 14
   },
   {
    "n": "Office of Alumni Relations",
    "s": "office-of-alumni-relations",
    "p": null,
    "c": 3
   },
   {
    "n": "OkCupid",
    "s": "okcupid",
    "p": null,
    "c": 1
   },
   {
    "n": "on-campus move-in",
    "s": "on-campus-move-in",
    "p": null,
    "c": 3
   },
   {
    "n": "online reputation",
    "s": "online-reputation",
    "p": null,
    "c": 1
   },
   {
    "n": "OpenNotes",
    "s": "opennotes",
    "p": null,
    "c": 2
   },
   {
    "n": "optimization",
    "s": "optimization",
    "p": null,
    "c": 2
   },
   {
    "n": "Ornami",
    "s": "ornami",
    "p": null,
    "c": 1
   },
   {
    "n": "Oval Office address",
    "s": "oval-office-address",
    "p": null,
    "c": 1
   },
   {
    "n": "Pacific Ocean",
    "s": "pacific-ocean",
    "p": null,
    "c": 3
   },
   {
    "n": "panel discussion",
    "s": "panel-discussion",
    "p": null,
    "c": 15
   },
   {
    "n": "Park",
    "s": "park",
    "p": null,
    "c": 2
   },
   {
    "n": "partnership",
    "s": "partnership",
    "p": null,
    "c": 10
   },
   {
    "n": "Patricia Davis",
    "s": "patricia-davis",
    "p": null,
    "c": 10
   },
   {
    "n": "Paul Whitford",
    "s": "paul-whitford",
    "p": null,
    "c": 2
   },
   {
    "n": "Pearl Harbor",
    "s": "pearl-harbor",
    "p": null,
    "c": 2
   },
   {
    "n": "Penny Beuning",
    "s": "penny-beuning",
    "p": null,
    "c": 3
   },
   {
    "n": "persisters",
    "s": "persisters",
    "p": null,
    "c": 1
   },
   {
    "n": "pest and pest control",
    "s": "pest-and-pest-control",
    "p": null,
    "c": 2
   },
   {
    "n": "Petrochemical America",
    "s": "petrochemical-america",
    "p": null,
    "c": 2
   },
   {
    "n": "PhD Hooding",
    "s": "phd-hooding",
    "p": null,
    "c": 1
   },
   {
    "n": "phishing scam",
    "s": "phishing-scam",
    "p": null,
    "c": 1
   },
   {
    "n": "piano",
    "s": "piano",
    "p": null,
    "c": 3
   },
   {
    "n": "plane-sharing",
    "s": "plane-sharing",
    "p": null,
    "c": 2
   },
   {
    "n": "play",
    "s": "play",
    "p": null,
    "c": 7
   },
   {
    "n": "pokemon go",
    "s": "pokemon-go",
    "p": null,
    "c": 6
   },
   {
    "n": "political prisoners",
    "s": "political-prisoners",
    "p": null,
    "c": 1
   },
   {
    "n": "pop culture",
    "s": "pop-culture",
    "p": null,
    "c": 137
   },
   {
    "n": "post-doctoral researcher",
    "s": "post-doctoral-researcher",
    "p": null,
    "c": 4
   },
   {
    "n": "Pre-medical school applications",
    "s": "pre-medical-school-applications",
    "p": null,
    "c": 1
   },
   {
    "n": "preseason preparation",
    "s": "preseason-preparation",
    "p": null,
    "c": 1
   },
   {
    "n": "Presidential Council on Inclusion and Diversity",
    "s": "presidential-council-on-inclusion-and-diversity",
    "p": null,
    "c": 1
   },
   {
    "n": "price of gas",
    "s": "price-of-gas",
    "p": null,
    "c": 1
   },
   {
    "n": "Privacy’s Blueprint",
    "s": "privacys-blueprint",
    "p": null,
    "c": 1
   },
   {
    "n": "Professional graduate degrees",
    "s": "professional-graduate-degrees",
    "p": null,
    "c": 1
   },
   {
    "n": "PROTECT Center",
    "s": "protect-center",
    "p": null,
    "c": 3
   },
   {
    "n": "provost",
    "s": "provost-2",
    "p": null,
    "c": 6
   },
   {
    "n": "public architecture",
    "s": "public-architecture",
    "p": null,
    "c": 1
   },
   {
    "n": "public relations",
    "s": "public-relations",
    "p": null,
    "c": 3
   },
   {
    "n": "pumpkin carving",
    "s": "pumpkin-carving",
    "p": null,
    "c": 1
   },
   {
    "n": "Qin Jim Chen",
    "s": "qin-jim-chen",
    "p": null,
    "c": 4
   },
   {
    "n": "queer comics",
    "s": "queer-comics",
    "p": null,
    "c": 1
   },
   {
    "n": "Rachael Rollins",
    "s": "rachael-rollins",
    "p": null,
    "c": 5
   },
   {
    "n": "radio",
    "s": "radio",
    "p": null,
    "c": 7
   },
   {
    "n": "Ralph and Russo",
    "s": "ralph-and-russo",
    "p": null,
    "c": 1
   },
   {
    "n": "rare earth",
    "s": "rare-earth",
    "p": null,
    "c": 5
   },
   {
    "n": "reading",
    "s": "reading",
    "p": null,
    "c": 15
   },
   {
    "n": "recidivism",
    "s": "recidivism",
    "p": null,
    "c": 2
   },
   {
    "n": "Red tide",
    "s": "red-tide",
    "p": null,
    "c": 2
   },
   {
    "n": "RegenX",
    "s": "regenx",
    "p": null,
    "c": 1
   },
   {
    "n": "Relativity",
    "s": "relativity",
    "p": null,
    "c": 1
   },
   {
    "n": "renminbi",
    "s": "renminbi",
    "p": null,
    "c": 1
   },
   {
    "n": "Republican Party",
    "s": "republican-party",
    "p": null,
    "c": 16
   },
   {
    "n": "resident assistants",
    "s": "resident-assistants",
    "p": null,
    "c": 1
   },
   {
    "n": "restaurant week",
    "s": "restaurant-week",
    "p": null,
    "c": 1
   },
   {
    "n": "reviews",
    "s": "reviews",
    "p": null,
    "c": 1
   },
   {
    "n": "Richard Ernst",
    "s": "richard-ernst",
    "p": null,
    "c": 1
   },
   {
    "n": "Riley Hughes",
    "s": "riley-hughes",
    "p": null,
    "c": 2
   },
   {
    "n": "rivalry",
    "s": "rivalry",
    "p": null,
    "c": 2
   },
   {
    "n": "Robert Morris University",
    "s": "robert-morris-university",
    "p": null,
    "c": 1
   },
   {
    "n": "rock and roll music",
    "s": "rock-and-roll-music",
    "p": null,
    "c": 3
   },
   {
    "n": "Rolling Thunder",
    "s": "rolling-thunder",
    "p": null,
    "c": 1
   },
   {
    "n": "Rosskam",
    "s": "rosskam",
    "p": null,
    "c": 1
   },
   {
    "n": "ruderman family foundation",
    "s": "ruderman-family-foundation",
    "p": null,
    "c": 1
   },
   {
    "n": "Russia Ukraine ceasefire",
    "s": "russia-ukraine-ceasefire",
    "p": null,
    "c": 5
   },
   {
    "n": "Ryan Shea",
    "s": "ryan-shea",
    "p": null,
    "c": 2
   },
   {
    "n": "safe distancing",
    "s": "safe-distancing",
    "p": null,
    "c": 1
   },
   {
    "n": "Sally Yates",
    "s": "sally-yates",
    "p": null,
    "c": 1
   },
   {
    "n": "Samuel Felton",
    "s": "samuel-felton",
    "p": null,
    "c": 1
   },
   {
    "n": "Santa Clara Principles",
    "s": "santa-clara-principles",
    "p": null,
    "c": 1
   },
   {
    "n": "Sarah Riccardi-Swartz",
    "s": "sarah-riccardi-swartz",
    "p": null,
    "c": 7
   },
   {
    "n": "Scary",
    "s": "scary",
    "p": null,
    "c": 1
   },
   {
    "n": "school of public policy and urban affairs",
    "s": "school-of-public-policy-and-urban-affairs",
    "p": null,
    "c": 25
   },
   {
    "n": "Scientific American",
    "s": "scientific-american",
    "p": null,
    "c": 1
   },
   {
    "n": "scrum",
    "s": "scrum",
    "p": null,
    "c": 1
   },
   {
    "n": "seating",
    "s": "seating",
    "p": null,
    "c": 2
   },
   {
    "n": "security and resilience studies",
    "s": "security-and-resilience-studies",
    "p": null,
    "c": 3
   },
   {
    "n": "Self-Authored Integrated Learning",
    "s": "self-authored-integrated-learning",
    "p": null,
    "c": 2
   },
   {
    "n": "senior week",
    "s": "senior-week",
    "p": null,
    "c": 9
   },
   {
    "n": "serial killers",
    "s": "serial-killers",
    "p": null,
    "c": 7
   },
   {
    "n": "sex as a biological variable",
    "s": "sex-as-a-biological-variable",
    "p": null,
    "c": 3
   },
   {
    "n": "Shamima Begum",
    "s": "shamima-begum",
    "p": null,
    "c": 1
   },
   {
    "n": "sharon harlan",
    "s": "sharon-harlan",
    "p": null,
    "c": 1
   },
   {
    "n": "short films",
    "s": "short-films",
    "p": null,
    "c": 2
   },
   {
    "n": "Silk Road Chamber of International Commerce",
    "s": "silk-road-chamber-of-international-commerce",
    "p": null,
    "c": 1
   },
   {
    "n": "Sir Richard John Roberts",
    "s": "sir-richard-john-roberts",
    "p": null,
    "c": 2
   },
   {
    "n": "SLAM Your Voice",
    "s": "slam-your-voice",
    "p": null,
    "c": 1
   },
   {
    "n": "smallpox",
    "s": "smallpox",
    "p": null,
    "c": 3
   },
   {
    "n": "SNAP",
    "s": "snap",
    "p": null,
    "c": 5
   },
   {
    "n": "social bots",
    "s": "social-bots",
    "p": null,
    "c": 2
   },
   {
    "n": "Social media regulations",
    "s": "social-media-regulations",
    "p": null,
    "c": 10
   },
   {
    "n": "societal issues",
    "s": "societal-issues",
    "p": null,
    "c": 4
   },
   {
    "n": "solar panels",
    "s": "solar-panels",
    "p": null,
    "c": 4
   },
   {
    "n": "South Bay House of Correction",
    "s": "south-bay-house-of-correction",
    "p": null,
    "c": 1
   },
   {
    "n": "Spaceflight",
    "s": "spaceflight",
    "p": null,
    "c": 2
   },
   {
    "n": "Special purpose acquisition company",
    "s": "special-purpose-acquisition-company",
    "p": null,
    "c": 1
   },
   {
    "n": "sperm whale",
    "s": "sperm-whale",
    "p": null,
    "c": 1
   },
   {
    "n": "sports coaching",
    "s": "sports-coaching",
    "p": null,
    "c": 2
   },
   {
    "n": "spring production",
    "s": "spring-production",
    "p": null,
    "c": 2
   },
   {
    "n": "Stacy C. Marsella",
    "s": "stacy-c-marsella",
    "p": null,
    "c": 1
   },
   {
    "n": "start-ups",
    "s": "start-ups",
    "p": null,
    "c": 6
   },
   {
    "n": "STEM Cultivation",
    "s": "stem-cultivation",
    "p": null,
    "c": 1
   },
   {
    "n": "stetson west",
    "s": "stetson-west",
    "p": null,
    "c": 2
   },
   {
    "n": "stoneman douglas high school",
    "s": "stoneman-douglas-high-school",
    "p": null,
    "c": 1
   },
   {
    "n": "String Theory",
    "s": "string-theory",
    "p": null,
    "c": 6
   },
   {
    "n": "student discounts",
    "s": "student-discounts",
    "p": null,
    "c": 2
   },
   {
    "n": "student production",
    "s": "student-production",
    "p": null,
    "c": 4
   },
   {
    "n": "Students for the Exploration and Development of Space",
    "s": "students-for-the-exploration-and-development-of-space",
    "p": null,
    "c": 3
   },
   {
    "n": "successful artists",
    "s": "successful-artists",
    "p": null,
    "c": 1
   },
   {
    "n": "summit meeting",
    "s": "summit-meeting",
    "p": null,
    "c": 1
   },
   {
    "n": "supreme court",
    "s": "supreme-court",
    "p": null,
    "c": 102
   },
   {
    "n": "Susan Picillo",
    "s": "susan-picillo",
    "p": null,
    "c": 1
   },
   {
    "n": "Suzanna Gratia Hupp",
    "s": "suzanna-gratia-hupp",
    "p": null,
    "c": 1
   },
   {
    "n": "Sydney Morris",
    "s": "sydney-morris",
    "p": null,
    "c": 1
   },
   {
    "n": "Ta-Nehisi Coates",
    "s": "ta-nehisi-coates",
    "p": null,
    "c": 3
   },
   {
    "n": "Tara Duffy",
    "s": "tara-duffy",
    "p": null,
    "c": 1
   },
   {
    "n": "taxes",
    "s": "taxes",
    "p": null,
    "c": 18
   },
   {
    "n": "TED conference",
    "s": "ted-conference",
    "p": null,
    "c": 4
   },
   {
    "n": "television production",
    "s": "television-production",
    "p": null,
    "c": 5
   },
   {
    "n": "testing",
    "s": "testing",
    "p": null,
    "c": 11
   },
   {
    "n": "the americans",
    "s": "the-americans",
    "p": null,
    "c": 1
   },
   {
    "n": "The Embrace",
    "s": "the-embrace",
    "p": null,
    "c": 1
   },
   {
    "n": "the internet",
    "s": "the-internet",
    "p": null,
    "c": 2
   },
   {
    "n": "The PFAS Project Lab",
    "s": "the-pfas-project-lab",
    "p": null,
    "c": 8
   },
   {
    "n": "The Vatican",
    "s": "the-vatican",
    "p": null,
    "c": 3
   },
   {
    "n": "therapy",
    "s": "therapy",
    "p": null,
    "c": 12
   },
   {
    "n": "three seas",
    "s": "three-seas",
    "p": null,
    "c": 1
   },
   {
    "n": "TIME magazine",
    "s": "time-magazine",
    "p": null,
    "c": 2
   },
   {
    "n": "TJX",
    "s": "tjx",
    "p": null,
    "c": 2
   },
   {
    "n": "Tom Vicino",
    "s": "tom-vicino",
    "p": null,
    "c": 3
   },
   {
    "n": "Toronto",
    "s": "toronto",
    "p": null,
    "c": 20
   },
   {
    "n": "Tracy Carter",
    "s": "tracy-carter",
    "p": null,
    "c": 1
   },
   {
    "n": "transistors",
    "s": "transistors",
    "p": null,
    "c": 2
   },
   {
    "n": "trauma",
    "s": "trauma",
    "p": null,
    "c": 14
   },
   {
    "n": "Trevor Appier",
    "s": "trevor-appier",
    "p": null,
    "c": 1
   },
   {
    "n": "Truman Scholarship",
    "s": "truman-scholarship",
    "p": null,
    "c": 6
   },
   {
    "n": "Tucker Carlson",
    "s": "tucker-carlson",
    "p": null,
    "c": 2
   },
   {
    "n": "typhoons",
    "s": "typhoons",
    "p": null,
    "c": 2
   },
   {
    "n": "U.S. Department of Justice",
    "s": "u-s-department-of-justice",
    "p": null,
    "c": 4
   },
   {
    "n": "U.S. territory",
    "s": "u-s-territory",
    "p": null,
    "c": 2
   },
   {
    "n": "UMass-Lowell",
    "s": "umass-lowell",
    "p": null,
    "c": 1
   },
   {
    "n": "underwater research station",
    "s": "underwater-research-station",
    "p": null,
    "c": 2
   },
   {
    "n": "United States Army Leadership Excellence Award",
    "s": "united-states-army-leadership-excellence-award",
    "p": null,
    "c": 1
   },
   {
    "n": "university honors program",
    "s": "university-honors-program",
    "p": null,
    "c": 4
   },
   {
    "n": "Unsize Me",
    "s": "unsize-me",
    "p": null,
    "c": 1
   },
   {
    "n": "Urban Landscape Program",
    "s": "urban-landscape-program",
    "p": null,
    "c": 1
   },
   {
    "n": "Usama Fayyad",
    "s": "usama-fayyad",
    "p": null,
    "c": 14
   },
   {
    "n": "Vaccination requirement",
    "s": "vaccination-requirement",
    "p": null,
    "c": 2
   },
   {
    "n": "varsity esports",
    "s": "varsity-esports",
    "p": null,
    "c": 3
   },
   {
    "n": "venture",
    "s": "venture",
    "p": null,
    "c": 10
   },
   {
    "n": "Vicarious Trauma Toolkit",
    "s": "vicarious-trauma-toolkit",
    "p": null,
    "c": 1
   },
   {
    "n": "vietnamese student association",
    "s": "vietnamese-student-association",
    "p": null,
    "c": 2
   },
   {
    "n": "viral sensataion",
    "s": "viral-sensataion",
    "p": null,
    "c": 5
   },
   {
    "n": "vitamins",
    "s": "vitamins",
    "p": null,
    "c": 6
   },
   {
    "n": "voter",
    "s": "voter",
    "p": null,
    "c": 2
   },
   {
    "n": "wall",
    "s": "wall",
    "p": null,
    "c": 1
   },
   {
    "n": "Warren Buffett",
    "s": "warren-buffett",
    "p": null,
    "c": 3
   },
   {
    "n": "watergate",
    "s": "watergate",
    "p": null,
    "c": 1
   },
   {
    "n": "Weber State University",
    "s": "weber-state-university",
    "p": null,
    "c": 1
   },
   {
    "n": "Wendi Williams",
    "s": "wendi-williams",
    "p": null,
    "c": 5
   },
   {
    "n": "Wex",
    "s": "wex",
    "p": null,
    "c": 2
   },
   {
    "n": "white supremacists",
    "s": "white-supremacists",
    "p": null,
    "c": 1
   },
   {
    "n": "wildfires",
    "s": "wildfires",
    "p": null,
    "c": 17
   },
   {
    "n": "Willie Horton",
    "s": "willie-horton",
    "p": null,
    "c": 1
   },
   {
    "n": "wireless internet",
    "s": "wireless-internet",
    "p": null,
    "c": 1
   },
   {
    "n": "women in STEM",
    "s": "women-in-stem",
    "p": null,
    "c": 11
   }
  ]
 },
 "publication": {
  "n": "publication",
  "count": 1158,
  "terms": [
   {
    "n": "13 WMAZ",
    "s": "13-wmaz",
    "p": null,
    "c": 1
   },
   {
    "n": "99% Invisible",
    "s": "99-invisible",
    "p": null,
    "c": 1
   },
   {
    "n": "AARP",
    "s": "aarp",
    "p": null,
    "c": 3
   },
   {
    "n": "ABC",
    "s": "abc",
    "p": null,
    "c": 9
   },
   {
    "n": "ABC Boston",
    "s": "abc-boston",
    "p": null,
    "c": 1
   },
   {
    "n": "ABC News",
    "s": "abc-news",
    "p": null,
    "c": 97
   },
   {
    "n": "Above the Law",
    "s": "above-the-law",
    "p": null,
    "c": 2
   },
   {
    "n": "AdAge",
    "s": "adage",
    "p": null,
    "c": 1
   },
   {
    "n": "Adotas",
    "s": "adotas",
    "p": null,
    "c": 1
   },
   {
    "n": "AdWeek",
    "s": "adweek",
    "p": null,
    "c": 3
   },
   {
    "n": "AFP",
    "s": "afp",
    "p": null,
    "c": 34
   },
   {
    "n": "AI Trends",
    "s": "ai-trends",
    "p": null,
    "c": 1
   },
   {
    "n": "Al Arabiya",
    "s": "al-arabiya",
    "p": null,
    "c": 2
   },
   {
    "n": "Al Jazeera America",
    "s": "al-jazeera-america",
    "p": null,
    "c": 3
   },
   {
    "n": "Alabama Political Reporter",
    "s": "alabama-political-reporter",
    "p": null,
    "c": 1
   },
   {
    "n": "All Gov",
    "s": "all-gov",
    "p": null,
    "c": 1
   },
   {
    "n": "AllAfrica",
    "s": "allafrica",
    "p": null,
    "c": 0
   },
   {
    "n": "American Ethnologist",
    "s": "american-ethnologist",
    "p": null,
    "c": 1
   },
   {
    "n": "American Public Media",
    "s": "american-public-media",
    "p": null,
    "c": 1
   },
   {
    "n": "American Way",
    "s": "american-way",
    "p": null,
    "c": 1
   },
   {
    "n": "Archinect",
    "s": "archinect",
    "p": null,
    "c": 2
   },
   {
    "n": "Army Times",
    "s": "army-times",
    "p": null,
    "c": 1
   },
   {
    "n": "Ars Technica UK",
    "s": "ars-technica-uk",
    "p": null,
    "c": 1
   },
   {
    "n": "Artscope",
    "s": "artscope",
    "p": null,
    "c": 1
   },
   {
    "n": "Asia Times",
    "s": "asia-times",
    "p": null,
    "c": 3
   },
   {
    "n": "Associated Press",
    "s": "associated-press",
    "p": null,
    "c": 233
   },
   {
    "n": "Atlanta Blackstar",
    "s": "atlanta-blackstar",
    "p": null,
    "c": 1
   },
   {
    "n": "Atlanta Journal-Constitution",
    "s": "atlanta-journal-constitution",
    "p": null,
    "c": 5
   },
   {
    "n": "Auto Blog",
    "s": "auto-blog",
    "p": null,
    "c": 1
   },
   {
    "n": "Axios D.C.",
    "s": "axios-d-c",
    "p": null,
    "c": 1
   },
   {
    "n": "AZoM.com",
    "s": "azom-com",
    "p": null,
    "c": 1
   },
   {
    "n": "Bangor Daily News",
    "s": "bangor-daily-news",
    "p": null,
    "c": 8
   },
   {
    "n": "Barron's",
    "s": "barrons",
    "p": null,
    "c": 6
   },
   {
    "n": "BBC Brazil",
    "s": "bbc-brazil",
    "p": null,
    "c": 0
   },
   {
    "n": "BBC News",
    "s": "bbc-news",
    "p": null,
    "c": 88
   },
   {
    "n": "BBC Science Focus",
    "s": "bbc-science-focus",
    "p": null,
    "c": 2
   },
   {
    "n": "BBC Women's Hour",
    "s": "bbc-womens-hour",
    "p": null,
    "c": 1
   },
   {
    "n": "Becker's Hospital Revew",
    "s": "beckers-hospital-revew",
    "p": null,
    "c": 4
   },
   {
    "n": "Becker's Spine Review",
    "s": "beckers-spine-review",
    "p": null,
    "c": 1
   },
   {
    "n": "Berkshire Eagle",
    "s": "berkshire-eagle",
    "p": null,
    "c": 1
   },
   {
    "n": "BGR",
    "s": "bgr",
    "p": null,
    "c": 1
   },
   {
    "n": "Big Picture Science",
    "s": "big-picture-science",
    "p": null,
    "c": 1
   },
   {
    "n": "Billboard",
    "s": "billboard",
    "p": null,
    "c": 2
   },
   {
    "n": "Bisnow",
    "s": "bisnow",
    "p": null,
    "c": 1
   },
   {
    "n": "BizEd Magazine",
    "s": "bized-magazine",
    "p": null,
    "c": 1
   },
   {
    "n": "bizwomen",
    "s": "bizwomen",
    "p": null,
    "c": 1
   },
   {
    "n": "Bloomberg",
    "s": "bloomberg",
    "p": null,
    "c": 241
   },
   {
    "n": "Bloomberg Businessweek",
    "s": "bloomberg-businessweek",
    "p": null,
    "c": 28
   },
   {
    "n": "Bloomberg Tax",
    "s": "bloomberg-tax",
    "p": null,
    "c": 2
   },
   {
    "n": "Blue Ridge Public Radio",
    "s": "blue-ridge-public-radio",
    "p": null,
    "c": 1
   },
   {
    "n": "Boing Boing",
    "s": "boing-boing",
    "p": null,
    "c": 1
   },
   {
    "n": "BostInno",
    "s": "bostinno",
    "p": null,
    "c": 125
   },
   {
    "n": "Boston 25",
    "s": "boston-25",
    "p": null,
    "c": 61
   },
   {
    "n": "Boston Globe",
    "s": "boston-globe",
    "p": null,
    "c": 870
   },
   {
    "n": "Boston Magazine",
    "s": "boston-magazine",
    "p": null,
    "c": 108
   },
   {
    "n": "Boston Neighborhood Network",
    "s": "boston-neighborhood-network",
    "p": null,
    "c": 1
   },
   {
    "n": "Boston Real Estate Times",
    "s": "boston-real-estate-times",
    "p": null,
    "c": 1
   },
   {
    "n": "Boston Review",
    "s": "boston-review",
    "p": null,
    "c": 1
   },
   {
    "n": "Brain Blogger",
    "s": "brain-blogger",
    "p": null,
    "c": 1
   },
   {
    "n": "Broadway World",
    "s": "broadway-world",
    "p": null,
    "c": 1
   },
   {
    "n": "Brookline Wicked Local",
    "s": "brookline-wicked-local",
    "p": null,
    "c": 1
   },
   {
    "n": "Burlington Free Press",
    "s": "burlington-free-press",
    "p": null,
    "c": 1
   },
   {
    "n": "Business Day",
    "s": "business-day",
    "p": null,
    "c": 1
   },
   {
    "n": "Business Insider (Germany)",
    "s": "business-insider-germany",
    "p": null,
    "c": 1
   },
   {
    "n": "Business Today",
    "s": "business-today",
    "p": null,
    "c": 1
   },
   {
    "n": "Business West",
    "s": "business-west",
    "p": null,
    "c": 1
   },
   {
    "n": "Bustle",
    "s": "bustle",
    "p": null,
    "c": 3
   },
   {
    "n": "BuzzFeed (Germany)",
    "s": "buzzfeed-germany",
    "p": null,
    "c": 1
   },
   {
    "n": "C&EN",
    "s": "cen",
    "p": null,
    "c": 4
   },
   {
    "n": "Cape Ann Beacon",
    "s": "cape-ann-beacon",
    "p": null,
    "c": 1
   },
   {
    "n": "Capital Gazette",
    "s": "capital-gazette",
    "p": null,
    "c": 1
   },
   {
    "n": "CardHub",
    "s": "cardhub",
    "p": null,
    "c": 1
   },
   {
    "n": "CBC Radio",
    "s": "cbc-radio",
    "p": null,
    "c": 7
   },
   {
    "n": "CBS",
    "s": "cbs",
    "p": null,
    "c": 13
   },
   {
    "n": "CBS Minnesota",
    "s": "cbs-minnesota",
    "p": null,
    "c": 1
   },
   {
    "n": "CBS MoneyWatch",
    "s": "cbs-moneywatch",
    "p": null,
    "c": 2
   },
   {
    "n": "CBS Sports",
    "s": "cbs-sports",
    "p": null,
    "c": 1
   },
   {
    "n": "CCTV",
    "s": "cctv",
    "p": null,
    "c": 6
   },
   {
    "n": "Center for Digital Education",
    "s": "center-for-digital-education",
    "p": null,
    "c": 8
   },
   {
    "n": "CGTN",
    "s": "cgtn",
    "p": null,
    "c": 1
   },
   {
    "n": "Charlotte Business Journal",
    "s": "charlotte-business-journal",
    "p": null,
    "c": 9
   },
   {
    "n": "Charlotte Sun",
    "s": "charlotte-sun",
    "p": null,
    "c": 1
   },
   {
    "n": "Chemistry World",
    "s": "chemistry-world",
    "p": null,
    "c": 3
   },
   {
    "n": "Chicago Magazine",
    "s": "chicago-magazine",
    "p": null,
    "c": 1
   },
   {
    "n": "Chicago Reader",
    "s": "chicago-reader",
    "p": null,
    "c": 1
   },
   {
    "n": "Chicago Tribune",
    "s": "chicago-tribune",
    "p": null,
    "c": 38
   },
   {
    "n": "Christian Post",
    "s": "christian-post",
    "p": null,
    "c": 1
   },
   {
    "n": "Chromatography Today",
    "s": "chromatography-today",
    "p": null,
    "c": 1
   },
   {
    "n": "Cinco Dias",
    "s": "cinco-dias",
    "p": null,
    "c": 1
   },
   {
    "n": "CIO",
    "s": "cio",
    "p": null,
    "c": 4
   },
   {
    "n": "Cisco",
    "s": "cisco",
    "p": null,
    "c": 1
   },
   {
    "n": "City Limits",
    "s": "city-limits",
    "p": null,
    "c": 1
   },
   {
    "n": "Citybizlist",
    "s": "citybizlist",
    "p": null,
    "c": 1
   },
   {
    "n": "Clarion Ledger",
    "s": "clarion-ledger",
    "p": null,
    "c": 1
   },
   {
    "n": "CMO Magazine",
    "s": "cmo-magazine",
    "p": null,
    "c": 1
   },
   {
    "n": "CNBC Indonesia",
    "s": "cnbc-indonesia",
    "p": null,
    "c": 1
   },
   {
    "n": "CNET News",
    "s": "cnet-news",
    "p": null,
    "c": 26
   },
   {
    "n": "CNN Money",
    "s": "cnn-money",
    "p": null,
    "c": 11
   },
   {
    "n": "College Hockey News",
    "s": "college-hockey-news",
    "p": null,
    "c": 1
   },
   {
    "n": "Columbus Dispatch",
    "s": "columbus-dispatch",
    "p": null,
    "c": 1
   },
   {
    "n": "Common Wealth",
    "s": "common-wealth",
    "p": null,
    "c": 2
   },
   {
    "n": "CommonWealth Magazine",
    "s": "commonwealth-magazine",
    "p": null,
    "c": 69
   },
   {
    "n": "Computerworld",
    "s": "computerworld",
    "p": null,
    "c": 4
   },
   {
    "n": "Consumer Affairs",
    "s": "consumer-affairs",
    "p": null,
    "c": 2
   },
   {
    "n": "Control Design",
    "s": "control-design",
    "p": null,
    "c": 1
   },
   {
    "n": "Cooks Illustrated",
    "s": "cooks-illustrated",
    "p": null,
    "c": 1
   },
   {
    "n": "Cosmopolitam",
    "s": "cosmopolitam",
    "p": null,
    "c": 0
   },
   {
    "n": "Council on Foreign Relations",
    "s": "council-on-foreign-relations",
    "p": null,
    "c": 1
   },
   {
    "n": "Crain's Chicago Business",
    "s": "crains-chicago-business",
    "p": null,
    "c": 1
   },
   {
    "n": "Crain's New York Business",
    "s": "crains-new-york-business",
    "p": null,
    "c": 2
   },
   {
    "n": "Crosscut",
    "s": "crosscut",
    "p": null,
    "c": 1
   },
   {
    "n": "CTV News",
    "s": "ctv-news",
    "p": null,
    "c": 2
   },
   {
    "n": "Daily Caller",
    "s": "daily-caller",
    "p": null,
    "c": 1
   },
   {
    "n": "Daily Express",
    "s": "daily-express",
    "p": null,
    "c": 2
   },
   {
    "n": "Daily Herald",
    "s": "daily-herald",
    "p": null,
    "c": 1
   },
   {
    "n": "Daily Mail",
    "s": "daily-mail",
    "p": null,
    "c": 38
   },
   {
    "n": "Daily Mirror",
    "s": "daily-mirror",
    "p": null,
    "c": 1
   },
   {
    "n": "Daily Wire",
    "s": "daily-wire",
    "p": null,
    "c": 1
   },
   {
    "n": "Dallas Observer",
    "s": "dallas-observer",
    "p": null,
    "c": 1
   },
   {
    "n": "DC Velocity",
    "s": "dc-velocity",
    "p": null,
    "c": 1
   },
   {
    "n": "Deccan Chronicle",
    "s": "deccan-chronicle",
    "p": null,
    "c": 1
   },
   {
    "n": "Del Mar Times",
    "s": "del-mar-times",
    "p": null,
    "c": 1
   },
   {
    "n": "Denver Post",
    "s": "denver-post",
    "p": null,
    "c": 6
   },
   {
    "n": "Des Moines Register",
    "s": "des-moines-register",
    "p": null,
    "c": 1
   },
   {
    "n": "Design News",
    "s": "design-news",
    "p": null,
    "c": 1
   },
   {
    "n": "Deutsche Welle",
    "s": "deutsche-welle",
    "p": null,
    "c": 10
   },
   {
    "n": "Digiday",
    "s": "digiday",
    "p": null,
    "c": 6
   },
   {
    "n": "Discover",
    "s": "discover",
    "p": null,
    "c": 11
   },
   {
    "n": "Diverse",
    "s": "diverse",
    "p": null,
    "c": 5
   },
   {
    "n": "Dorchester Reporter",
    "s": "dorchester-reporter",
    "p": null,
    "c": 2
   },
   {
    "n": "DR",
    "s": "dr",
    "p": null,
    "c": 1
   },
   {
    "n": "Drug Target Review",
    "s": "drug-target-review",
    "p": null,
    "c": 1
   },
   {
    "n": "E&E",
    "s": "ee",
    "p": null,
    "c": 1
   },
   {
    "n": "Eagle Tribune",
    "s": "eagle-tribune",
    "p": null,
    "c": 3
   },
   {
    "n": "Earth.com",
    "s": "earth-com",
    "p": null,
    "c": 1
   },
   {
    "n": "East Bay Express",
    "s": "east-bay-express",
    "p": null,
    "c": 1
   },
   {
    "n": "East Bay Times",
    "s": "east-bay-times",
    "p": null,
    "c": 1
   },
   {
    "n": "Ecommerce Times",
    "s": "ecommerce-times",
    "p": null,
    "c": 1
   },
   {
    "n": "Economic Times",
    "s": "economic-times",
    "p": null,
    "c": 3
   },
   {
    "n": "Edmonton Journal",
    "s": "edmonton-journal",
    "p": null,
    "c": 1
   },
   {
    "n": "EdSurge",
    "s": "edsurge",
    "p": null,
    "c": 20
   },
   {
    "n": "EducationDive",
    "s": "educationdive",
    "p": null,
    "c": 10
   },
   {
    "n": "El Nuevo Dia",
    "s": "el-nuevo-dia",
    "p": null,
    "c": 1
   },
   {
    "n": "Electronic Products",
    "s": "electronic-products",
    "p": null,
    "c": 1
   },
   {
    "n": "Employee Benefit Advisor",
    "s": "employee-benefit-advisor",
    "p": null,
    "c": 1
   },
   {
    "n": "Engadget",
    "s": "engadget",
    "p": null,
    "c": 22
   },
   {
    "n": "Enterprise News",
    "s": "enterprise-news",
    "p": null,
    "c": 2
   },
   {
    "n": "Entrepreneur",
    "s": "entrepreneur-2",
    "p": null,
    "c": 7
   },
   {
    "n": "Esquire",
    "s": "esquire",
    "p": null,
    "c": 3
   },
   {
    "n": "Ethics & International Affairs",
    "s": "ethics-international-affairs",
    "p": null,
    "c": 1
   },
   {
    "n": "Euronews",
    "s": "euronews",
    "p": null,
    "c": 16
   },
   {
    "n": "Examiner",
    "s": "examiner",
    "p": null,
    "c": 4
   },
   {
    "n": "Express UK",
    "s": "express-uk",
    "p": null,
    "c": 4
   },
   {
    "n": "Fall River Herald",
    "s": "fall-river-herald",
    "p": null,
    "c": 1
   },
   {
    "n": "Fast Company",
    "s": "fast-company",
    "p": null,
    "c": 137
   },
   {
    "n": "Fatherly",
    "s": "fatherly",
    "p": null,
    "c": 4
   },
   {
    "n": "FedScoop",
    "s": "fedscoop",
    "p": null,
    "c": 1
   },
   {
    "n": "FierceBiotech",
    "s": "fiercebiotech",
    "p": null,
    "c": 1
   },
   {
    "n": "FierceGovernmentIT",
    "s": "fiercegovernmentit",
    "p": null,
    "c": 1
   },
   {
    "n": "FierceHealthFinance",
    "s": "fiercehealthfinance",
    "p": null,
    "c": 1
   },
   {
    "n": "FierceWireless",
    "s": "fiercewireless",
    "p": null,
    "c": 2
   },
   {
    "n": "Financial Post",
    "s": "financial-post",
    "p": null,
    "c": 2
   },
   {
    "n": "FINS",
    "s": "fins",
    "p": null,
    "c": 1
   },
   {
    "n": "Florida Courier",
    "s": "florida-courier",
    "p": null,
    "c": 1
   },
   {
    "n": "Florida Record",
    "s": "florida-record",
    "p": null,
    "c": 1
   },
   {
    "n": "Food Navigator",
    "s": "food-navigator",
    "p": null,
    "c": 1
   },
   {
    "n": "Forbes Czech Republic",
    "s": "forbes-czech-republic",
    "p": null,
    "c": 1
   },
   {
    "n": "Forbes Spain",
    "s": "forbes-spain",
    "p": null,
    "c": 1
   },
   {
    "n": "Foreign Policy",
    "s": "foreign-policy-2",
    "p": null,
    "c": 10
   },
   {
    "n": "Fort Smith Times Record",
    "s": "fort-smith-times-record",
    "p": null,
    "c": 1
   },
   {
    "n": "Fortune",
    "s": "fortune",
    "p": null,
    "c": 60
   },
   {
    "n": "Fortune Greece",
    "s": "fortune-greece",
    "p": null,
    "c": 1
   },
   {
    "n": "Forward",
    "s": "forward",
    "p": null,
    "c": 6
   },
   {
    "n": "Fox 10",
    "s": "fox-10",
    "p": null,
    "c": 1
   },
   {
    "n": "Fox 2",
    "s": "fox-2",
    "p": null,
    "c": 1
   },
   {
    "n": "Fox 25",
    "s": "fox-25",
    "p": null,
    "c": 20
   },
   {
    "n": "Fox News",
    "s": "fox-news",
    "p": null,
    "c": 83
   },
   {
    "n": "Fox Sports",
    "s": "fox-sports",
    "p": null,
    "c": 1
   },
   {
    "n": "Frankfurter Rundschau",
    "s": "frankfurter-rundschau",
    "p": null,
    "c": 3
   },
   {
    "n": "Freethink",
    "s": "freethink",
    "p": null,
    "c": 1
   },
   {
    "n": "Fund Strategy",
    "s": "fund-strategy",
    "p": null,
    "c": 1
   },
   {
    "n": "Future of Education",
    "s": "future-of-education",
    "p": null,
    "c": 1
   },
   {
    "n": "Futurism",
    "s": "futurism",
    "p": null,
    "c": 6
   },
   {
    "n": "Gamasutra",
    "s": "gamasutra",
    "p": null,
    "c": 2
   },
   {
    "n": "Gas2",
    "s": "gas2",
    "p": null,
    "c": 1
   },
   {
    "n": "Gazettes",
    "s": "gazettes",
    "p": null,
    "c": 1
   },
   {
    "n": "GeekWire",
    "s": "geekwire",
    "p": null,
    "c": 2
   },
   {
    "n": "Genetic Literacy Project",
    "s": "genetic-literacy-project",
    "p": null,
    "c": 1
   },
   {
    "n": "GigaOM",
    "s": "gigaom",
    "p": null,
    "c": 2
   },
   {
    "n": "Gizmodo",
    "s": "gizmodo",
    "p": null,
    "c": 36
   },
   {
    "n": "Global News",
    "s": "global-news",
    "p": null,
    "c": 6
   },
   {
    "n": "Global Times",
    "s": "global-times",
    "p": null,
    "c": 1
   },
   {
    "n": "Gloucester Times",
    "s": "gloucester-times",
    "p": null,
    "c": 3
   },
   {
    "n": "Good Housekeeping",
    "s": "good-housekeeping",
    "p": null,
    "c": 2
   },
   {
    "n": "Governing",
    "s": "governing",
    "p": null,
    "c": 5
   },
   {
    "n": "Government Technology",
    "s": "government-technology",
    "p": null,
    "c": 1
   },
   {
    "n": "Greater Good Magazine",
    "s": "greater-good-magazine",
    "p": null,
    "c": 1
   },
   {
    "n": "Grid",
    "s": "grid",
    "p": null,
    "c": 4
   },
   {
    "n": "Grosse Pointe News",
    "s": "grosse-pointe-news",
    "p": null,
    "c": 1
   },
   {
    "n": "Hartford Business Journal",
    "s": "hartford-business-journal",
    "p": null,
    "c": 2
   },
   {
    "n": "Harvard Business Review",
    "s": "harvard-business-review",
    "p": null,
    "c": 34
   },
   {
    "n": "Harvard Gazette",
    "s": "harvard-gazette",
    "p": null,
    "c": 2
   },
   {
    "n": "Health Affairs",
    "s": "health-affairs",
    "p": null,
    "c": 2
   },
   {
    "n": "Health Day",
    "s": "health-day",
    "p": null,
    "c": 2
   },
   {
    "n": "Health Magazine",
    "s": "health-magazine",
    "p": null,
    "c": 4
   },
   {
    "n": "Healthline",
    "s": "healthline",
    "p": null,
    "c": 1
   },
   {
    "n": "Hechinger Report",
    "s": "hechinger-report",
    "p": null,
    "c": 1
   },
   {
    "n": "Herald-Tribune",
    "s": "herald-tribune",
    "p": null,
    "c": 1
   },
   {
    "n": "Hindustan Times",
    "s": "hindustan-times",
    "p": null,
    "c": 4
   },
   {
    "n": "History Extra",
    "s": "history-extra",
    "p": null,
    "c": 1
   },
   {
    "n": "Honolulu Civil Beat",
    "s": "honolulu-civil-beat",
    "p": null,
    "c": 1
   },
   {
    "n": "Houston Business Journal",
    "s": "houston-business-journal",
    "p": null,
    "c": 1
   },
   {
    "n": "HowStuffWorks",
    "s": "howstuffworks",
    "p": null,
    "c": 1
   },
   {
    "n": "Huffington Post",
    "s": "huffington-post",
    "p": null,
    "c": 276
   },
   {
    "n": "IEEE Spectrum",
    "s": "ieee-spectrum",
    "p": null,
    "c": 15
   },
   {
    "n": "IFLScience",
    "s": "iflscience",
    "p": null,
    "c": 7
   },
   {
    "n": "Inc.com",
    "s": "inc-com",
    "p": null,
    "c": 43
   },
   {
    "n": "Indianapolis Recorder",
    "s": "indianapolis-recorder",
    "p": null,
    "c": 1
   },
   {
    "n": "Industry Week",
    "s": "industry-week",
    "p": null,
    "c": 1
   },
   {
    "n": "iNews",
    "s": "inews",
    "p": null,
    "c": 1
   },
   {
    "n": "Infosecurity Magazine",
    "s": "infosecurity-magazine",
    "p": null,
    "c": 1
   },
   {
    "n": "Inside Climate News",
    "s": "inside-climate-news",
    "p": null,
    "c": 2
   },
   {
    "n": "Inside Philanthropy",
    "s": "inside-philanthropy",
    "p": null,
    "c": 3
   },
   {
    "n": "Inside Sources",
    "s": "inside-sources",
    "p": null,
    "c": 1
   },
   {
    "n": "InStyle",
    "s": "instyle",
    "p": null,
    "c": 1
   },
   {
    "n": "International Journalists' Network",
    "s": "international-journalists-network",
    "p": null,
    "c": 1
   },
   {
    "n": "Inverse",
    "s": "inverse",
    "p": null,
    "c": 4
   },
   {
    "n": "IT World",
    "s": "it-world",
    "p": null,
    "c": 1
   },
   {
    "n": "ITProPortal",
    "s": "itproportal",
    "p": null,
    "c": 1
   },
   {
    "n": "Jagran Post",
    "s": "jagran-post",
    "p": null,
    "c": 1
   },
   {
    "n": "Japan Times",
    "s": "japan-times",
    "p": null,
    "c": 2
   },
   {
    "n": "Jezebel",
    "s": "jezebel",
    "p": null,
    "c": 1
   },
   {
    "n": "Kaiser Health News",
    "s": "kaiser-health-news",
    "p": null,
    "c": 4
   },
   {
    "n": "Kansas City NPR",
    "s": "kansas-city-npr",
    "p": null,
    "c": 1
   },
   {
    "n": "KERA",
    "s": "kera",
    "p": null,
    "c": 1
   },
   {
    "n": "Kiplinger",
    "s": "kiplinger",
    "p": null,
    "c": 1
   },
   {
    "n": "Knovel",
    "s": "knovel",
    "p": null,
    "c": 1
   },
   {
    "n": "KPBS",
    "s": "kpbs",
    "p": null,
    "c": 2
   },
   {
    "n": "KQED",
    "s": "kqed",
    "p": null,
    "c": 6
   },
   {
    "n": "KTVU (Oakland)",
    "s": "ktvu-oakland",
    "p": null,
    "c": 1
   },
   {
    "n": "LA Review of Books",
    "s": "la-review-of-books",
    "p": null,
    "c": 1
   },
   {
    "n": "Las Vegas Review-Journal",
    "s": "las-vegas-review-journal",
    "p": null,
    "c": 4
   },
   {
    "n": "Le Monde",
    "s": "le-monde",
    "p": null,
    "c": 5
   },
   {
    "n": "Life News",
    "s": "life-news",
    "p": null,
    "c": 1
   },
   {
    "n": "Live Boston",
    "s": "live-boston",
    "p": null,
    "c": 1
   },
   {
    "n": "Live Now Fo",
    "s": "live-now-fo",
    "p": null,
    "c": 0
   },
   {
    "n": "Live Science",
    "s": "live-science",
    "p": null,
    "c": 3
   },
   {
    "n": "LiveScience",
    "s": "livescience",
    "p": null,
    "c": 12
   },
   {
    "n": "London Review of Books",
    "s": "london-review-of-books",
    "p": null,
    "c": 1
   },
   {
    "n": "Los Angeles Times",
    "s": "los-angeles-times",
    "p": null,
    "c": 106
   },
   {
    "n": "LSE US Centre",
    "s": "lse-us-centre",
    "p": null,
    "c": 1
   },
   {
    "n": "Mail & Guardian",
    "s": "mail-guardian",
    "p": null,
    "c": 4
   },
   {
    "n": "Maine Public Radio",
    "s": "maine-public-radio",
    "p": null,
    "c": 7
   },
   {
    "n": "MAJLIS",
    "s": "majlis",
    "p": null,
    "c": 0
   },
   {
    "n": "Market News International",
    "s": "market-news-international",
    "p": null,
    "c": 1
   },
   {
    "n": "Marketing Week",
    "s": "marketing-week",
    "p": null,
    "c": 1
   },
   {
    "n": "MarketWatch",
    "s": "marketwatch",
    "p": null,
    "c": 43
   },
   {
    "n": "Mashable",
    "s": "mashable",
    "p": null,
    "c": 21
   },
   {
    "n": "Mass Live",
    "s": "mass-live",
    "p": null,
    "c": 81
   },
   {
    "n": "McKnight's",
    "s": "mcknights",
    "p": null,
    "c": 1
   },
   {
    "n": "MedCity News",
    "s": "medcity-news",
    "p": null,
    "c": 1
   },
   {
    "n": "Media File",
    "s": "media-file",
    "p": null,
    "c": 1
   },
   {
    "n": "Medical Economics",
    "s": "medical-economics",
    "p": null,
    "c": 1
   },
   {
    "n": "Medium",
    "s": "medium",
    "p": null,
    "c": 26
   },
   {
    "n": "MedScape",
    "s": "medscape",
    "p": null,
    "c": 5
   },
   {
    "n": "Men's Health",
    "s": "mens-health",
    "p": null,
    "c": 6
   },
   {
    "n": "Mercer Island Reporter Reporter",
    "s": "mercer-island-reporter-reporter",
    "p": null,
    "c": 1
   },
   {
    "n": "Metro Boston",
    "s": "metro-boston",
    "p": null,
    "c": 10
   },
   {
    "n": "Miami Herald",
    "s": "miami-herald",
    "p": null,
    "c": 16
   },
   {
    "n": "Mic",
    "s": "mic",
    "p": null,
    "c": 8
   },
   {
    "n": "Middle East Eye",
    "s": "middle-east-eye",
    "p": null,
    "c": 2
   },
   {
    "n": "Military.com",
    "s": "military-com",
    "p": null,
    "c": 1
   },
   {
    "n": "Minneapolis Star-Tribune",
    "s": "minneapolis-star-tribune",
    "p": null,
    "c": 4
   },
   {
    "n": "Minyanville.com",
    "s": "minyanville-com",
    "p": null,
    "c": 1
   },
   {
    "n": "Mirror",
    "s": "mirror",
    "p": null,
    "c": 1
   },
   {
    "n": "Mission Hill Gazette",
    "s": "mission-hill-gazette",
    "p": null,
    "c": 1
   },
   {
    "n": "MIT SHASS News",
    "s": "mit-shass-news",
    "p": null,
    "c": 1
   },
   {
    "n": "MIT Technology Review",
    "s": "mit-technology-review",
    "p": null,
    "c": 33
   },
   {
    "n": "Model D",
    "s": "model-d",
    "p": null,
    "c": 2
   },
   {
    "n": "Mojidelano",
    "s": "mojidelano",
    "p": null,
    "c": 1
   },
   {
    "n": "Money Magazine",
    "s": "money-magazine",
    "p": null,
    "c": 2
   },
   {
    "n": "Morning Brew",
    "s": "morning-brew",
    "p": null,
    "c": 4
   },
   {
    "n": "Mother Jones",
    "s": "mother-jones",
    "p": null,
    "c": 20
   },
   {
    "n": "Motherboard",
    "s": "motherboard",
    "p": null,
    "c": 4
   },
   {
    "n": "Move Forward",
    "s": "move-forward",
    "p": null,
    "c": 1
   },
   {
    "n": "MSN Money",
    "s": "msn-money",
    "p": null,
    "c": 3
   },
   {
    "n": "MSNBC",
    "s": "msnbc",
    "p": null,
    "c": 20
   },
   {
    "n": "My Fox Boston",
    "s": "my-fox-boston",
    "p": null,
    "c": 1
   },
   {
    "n": "Nanotechweb.org",
    "s": "nanotechweb-org",
    "p": null,
    "c": 1
   },
   {
    "n": "Narcity",
    "s": "narcity",
    "p": null,
    "c": 1
   },
   {
    "n": "National Geographic",
    "s": "national-geographic",
    "p": null,
    "c": 38
   },
   {
    "n": "National Journal",
    "s": "national-journal",
    "p": null,
    "c": 4
   },
   {
    "n": "National Law Journal",
    "s": "national-law-journal",
    "p": null,
    "c": 3
   },
   {
    "n": "National Post",
    "s": "national-post",
    "p": null,
    "c": 4
   },
   {
    "n": "Nature News",
    "s": "nature-news",
    "p": null,
    "c": 37
   },
   {
    "n": "Nature World News",
    "s": "nature-world-news",
    "p": null,
    "c": 2
   },
   {
    "n": "Nautilis",
    "s": "nautilis",
    "p": null,
    "c": 1
   },
   {
    "n": "NBC 15",
    "s": "nbc-15",
    "p": null,
    "c": 1
   },
   {
    "n": "NBC Boston",
    "s": "nbc-boston",
    "p": null,
    "c": 67
   },
   {
    "n": "NBC Connecticut",
    "s": "nbc-connecticut",
    "p": null,
    "c": 2
   },
   {
    "n": "NBC Latino",
    "s": "nbc-latino",
    "p": null,
    "c": 1
   },
   {
    "n": "NBC News",
    "s": "nbc-news",
    "p": null,
    "c": 111
   },
   {
    "n": "NCAA.com",
    "s": "ncaa-com",
    "p": null,
    "c": 1
   },
   {
    "n": "Neiman Journalism Lab",
    "s": "neiman-journalism-lab",
    "p": null,
    "c": 11
   },
   {
    "n": "NESN",
    "s": "nesn",
    "p": null,
    "c": 1
   },
   {
    "n": "Network World",
    "s": "network-world",
    "p": null,
    "c": 4
   },
   {
    "n": "New Atlas",
    "s": "new-atlas",
    "p": null,
    "c": 8
   },
   {
    "n": "New England Journal of Medicine",
    "s": "new-england-journal-of-medicine",
    "p": null,
    "c": 1
   },
   {
    "n": "New England Public Media",
    "s": "new-england-public-media",
    "p": null,
    "c": 1
   },
   {
    "n": "New English Review",
    "s": "new-english-review",
    "p": null,
    "c": 1
   },
   {
    "n": "New Scientist",
    "s": "new-scientist",
    "p": null,
    "c": 43
   },
   {
    "n": "New Times SLO",
    "s": "new-times-slo",
    "p": null,
    "c": 1
   },
   {
    "n": "New York Law Journal",
    "s": "new-york-law-journal",
    "p": null,
    "c": 1
   },
   {
    "n": "New York Post",
    "s": "new-york-post",
    "p": null,
    "c": 19
   },
   {
    "n": "New Zealand Herald",
    "s": "new-zealand-herald",
    "p": null,
    "c": 3
   },
   {
    "n": "Newburyport Daily News",
    "s": "newburyport-daily-news",
    "p": null,
    "c": 2
   },
   {
    "n": "News Nation",
    "s": "news-nation",
    "p": null,
    "c": 6
   },
   {
    "n": "news.com.au",
    "s": "news-com-au",
    "p": null,
    "c": 1
   },
   {
    "n": "Newsweek",
    "s": "newsweek",
    "p": null,
    "c": 373
   },
   {
    "n": "Nextgov",
    "s": "nextgov",
    "p": null,
    "c": 1
   },
   {
    "n": "NHL",
    "s": "nhl",
    "p": null,
    "c": 1
   },
   {
    "n": "Nieman Journalism Lab",
    "s": "nieman-journalism-lab",
    "p": null,
    "c": 7
   },
   {
    "n": "Nikkei Asian Review",
    "s": "nikkei-asian-review",
    "p": null,
    "c": 3
   },
   {
    "n": "NME",
    "s": "nme",
    "p": null,
    "c": 1
   },
   {
    "n": "NorthJersey.com",
    "s": "northjersey-com",
    "p": null,
    "c": 2
   },
   {
    "n": "NOVA",
    "s": "nova",
    "p": null,
    "c": 3
   },
   {
    "n": "November Who?",
    "s": "november-who",
    "p": null,
    "c": 0
   },
   {
    "n": "NPR",
    "s": "npr",
    "p": null,
    "c": 243
   },
   {
    "n": "NPR's Radio Boston",
    "s": "nprs-radio-boston",
    "p": null,
    "c": 2
   },
   {
    "n": "Nurse Zone",
    "s": "nurse-zone",
    "p": null,
    "c": 1
   },
   {
    "n": "NY Daily News",
    "s": "ny-daily-news",
    "p": null,
    "c": 2
   },
   {
    "n": "Oaklandside",
    "s": "oaklandside",
    "p": null,
    "c": 5
   },
   {
    "n": "Oceanographic Magazine",
    "s": "oceanographic-magazine",
    "p": null,
    "c": 2
   },
   {
    "n": "On The Media",
    "s": "on-the-media",
    "p": null,
    "c": 1
   },
   {
    "n": "Online MBA",
    "s": "online-mba-2",
    "p": null,
    "c": 1
   },
   {
    "n": "OregonLive",
    "s": "oregonlive",
    "p": null,
    "c": 1
   },
   {
    "n": "OU",
    "s": "ou",
    "p": null,
    "c": 0
   },
   {
    "n": "Ozy",
    "s": "ozy",
    "p": null,
    "c": 8
   },
   {
    "n": "Pacific Standard",
    "s": "pacific-standard",
    "p": null,
    "c": 11
   },
   {
    "n": "Parade",
    "s": "parade",
    "p": null,
    "c": 1
   },
   {
    "n": "Patriot Ledger",
    "s": "patriot-ledger",
    "p": null,
    "c": 21
   },
   {
    "n": "PBS",
    "s": "pbs",
    "p": null,
    "c": 33
   },
   {
    "n": "PC Magazine",
    "s": "pc-magazine",
    "p": null,
    "c": 3
   },
   {
    "n": "People Magazine",
    "s": "people-magazine",
    "p": null,
    "c": 14
   },
   {
    "n": "Philadelphia Inquirer",
    "s": "philadelphia-inquirer",
    "p": null,
    "c": 18
   },
   {
    "n": "Philanthropy Women",
    "s": "philanthropy-women",
    "p": null,
    "c": 1
   },
   {
    "n": "Philly.com",
    "s": "philly-com",
    "p": null,
    "c": 7
   },
   {
    "n": "Physics Today",
    "s": "physics-today",
    "p": null,
    "c": 1
   },
   {
    "n": "PhysOrg",
    "s": "physorg",
    "p": null,
    "c": 2
   },
   {
    "n": "Pitchfork",
    "s": "pitchfork",
    "p": null,
    "c": 1
   },
   {
    "n": "Pittsburgh Post-Gazette",
    "s": "pittsburgh-post-gazette",
    "p": null,
    "c": 8
   },
   {
    "n": "Playbill",
    "s": "playbill",
    "p": null,
    "c": 1
   },
   {
    "n": "Poets & Quants",
    "s": "poets-quants",
    "p": null,
    "c": 2
   },
   {
    "n": "Politics US",
    "s": "politics-us",
    "p": null,
    "c": 1
   },
   {
    "n": "Polygon",
    "s": "polygon",
    "p": null,
    "c": 1
   },
   {
    "n": "Popsci",
    "s": "popsci",
    "p": null,
    "c": 4
   },
   {
    "n": "Popular Mechanics",
    "s": "popular-mechanics",
    "p": null,
    "c": 17
   },
   {
    "n": "Portland Press Herald",
    "s": "portland-press-herald",
    "p": null,
    "c": 40
   },
   {
    "n": "Post and Courier",
    "s": "post-and-courier",
    "p": null,
    "c": 1
   },
   {
    "n": "Poynter",
    "s": "poynter",
    "p": null,
    "c": 15
   },
   {
    "n": "Press Herald",
    "s": "press-herald",
    "p": null,
    "c": 1
   },
   {
    "n": "PRI",
    "s": "pri",
    "p": null,
    "c": 9
   },
   {
    "n": "ProPublica",
    "s": "propublica",
    "p": null,
    "c": 11
   },
   {
    "n": "PSFK",
    "s": "psfk",
    "p": null,
    "c": 1
   },
   {
    "n": "Puget Sound Business Journal",
    "s": "puget-sound-business-journal",
    "p": null,
    "c": 3
   },
   {
    "n": "Quanta Magazine",
    "s": "quanta-magazine",
    "p": null,
    "c": 8
   },
   {
    "n": "Quirk's Media",
    "s": "quirks-media",
    "p": null,
    "c": 1
   },
   {
    "n": "Radio Free Europe/Radio Liberty",
    "s": "radio-free-europeradio-liberty",
    "p": null,
    "c": 3
   },
   {
    "n": "Real Clear Education",
    "s": "real-clear-education",
    "p": null,
    "c": 2
   },
   {
    "n": "Real Simple",
    "s": "real-simple",
    "p": null,
    "c": 1
   },
   {
    "n": "Recode",
    "s": "recode",
    "p": null,
    "c": 3
   },
   {
    "n": "Rediff",
    "s": "rediff",
    "p": null,
    "c": 1
   },
   {
    "n": "Refresh Miami",
    "s": "refresh-miami",
    "p": null,
    "c": 1
   },
   {
    "n": "Rhode Island Public Radio",
    "s": "rhode-island-public-radio",
    "p": null,
    "c": 5
   },
   {
    "n": "Road & Track",
    "s": "road-track",
    "p": null,
    "c": 1
   },
   {
    "n": "Robotics & Innovation",
    "s": "robotics-innovation",
    "p": null,
    "c": 1
   },
   {
    "n": "Romper",
    "s": "romper",
    "p": null,
    "c": 1
   },
   {
    "n": "Runner's World",
    "s": "runners-world",
    "p": null,
    "c": 2
   },
   {
    "n": "Salon",
    "s": "salon",
    "p": null,
    "c": 35
   },
   {
    "n": "San Antonio Express-News",
    "s": "san-antonio-express-news",
    "p": null,
    "c": 3
   },
   {
    "n": "San Diego Union-Tribune",
    "s": "san-diego-union-tribune",
    "p": null,
    "c": 4
   },
   {
    "n": "San Francisco Chronicle",
    "s": "san-francisco-chronicle",
    "p": null,
    "c": 19
   },
   {
    "n": "San Jose Mercury News",
    "s": "san-jose-mercury-news",
    "p": "AARP",
    "c": 1
   },
   {
    "n": "Saudi Gazette",
    "s": "saudi-gazette",
    "p": null,
    "c": 1
   },
   {
    "n": "Science",
    "s": "science",
    "p": null,
    "c": 7
   },
   {
    "n": "Science Blog",
    "s": "science-blog",
    "p": null,
    "c": 2
   },
   {
    "n": "Science Daily",
    "s": "science-daily",
    "p": null,
    "c": 10
   },
   {
    "n": "Science Friday",
    "s": "science-friday",
    "p": null,
    "c": 9
   },
   {
    "n": "Science News",
    "s": "science-news",
    "p": null,
    "c": 17
   },
   {
    "n": "Scienmag",
    "s": "scienmag",
    "p": null,
    "c": 1
   },
   {
    "n": "Scientific Computing",
    "s": "scientific-computing",
    "p": null,
    "c": 2
   },
   {
    "n": "Scripps News",
    "s": "scripps-news",
    "p": null,
    "c": 3
   },
   {
    "n": "Security Affairs",
    "s": "security-affairs",
    "p": null,
    "c": 1
   },
   {
    "n": "Self Magazine",
    "s": "self-magazine",
    "p": null,
    "c": 12
   },
   {
    "n": "SF Gate",
    "s": "sf-gate",
    "p": null,
    "c": 9
   },
   {
    "n": "Shape Magazine",
    "s": "shape-magazine",
    "p": null,
    "c": 1
   },
   {
    "n": "Silicon Valley Business Journal",
    "s": "silicon-valley-business-journal",
    "p": null,
    "c": 1
   },
   {
    "n": "Sky and Telescope",
    "s": "sky-and-telescope",
    "p": null,
    "c": 1
   },
   {
    "n": "SlashGear",
    "s": "slashgear",
    "p": null,
    "c": 2
   },
   {
    "n": "SLTPR (NPR)",
    "s": "sltpr-npr",
    "p": null,
    "c": 1
   },
   {
    "n": "Smithsonian Magazine",
    "s": "smithsonian-magazine",
    "p": null,
    "c": 35
   },
   {
    "n": "South China Morning Press",
    "s": "south-china-morning-press",
    "p": null,
    "c": 5
   },
   {
    "n": "South Florida Business Journal",
    "s": "south-florida-business-journal",
    "p": null,
    "c": 2
   },
   {
    "n": "Space.com",
    "s": "space-com",
    "p": null,
    "c": 1
   },
   {
    "n": "SpokaneFAVS",
    "s": "spokanefavs",
    "p": null,
    "c": 1
   },
   {
    "n": "Sports Business Journal",
    "s": "sports-business-journal",
    "p": null,
    "c": 1
   },
   {
    "n": "SportsNewser",
    "s": "sportsnewser",
    "p": null,
    "c": 1
   },
   {
    "n": "Sprout Insights",
    "s": "sprout-insights",
    "p": null,
    "c": 1
   },
   {
    "n": "Stat",
    "s": "stat",
    "p": null,
    "c": 53
   },
   {
    "n": "State House News Service",
    "s": "state-house-news-service",
    "p": null,
    "c": 5
   },
   {
    "n": "strategy+business",
    "s": "strategybusiness",
    "p": null,
    "c": 1
   },
   {
    "n": "Stuff",
    "s": "stuff",
    "p": null,
    "c": 1
   },
   {
    "n": "Sun-Sentinel",
    "s": "sun-sentinel",
    "p": null,
    "c": 1
   },
   {
    "n": "Sustainable Business",
    "s": "sustainable-business",
    "p": null,
    "c": 1
   },
   {
    "n": "System Update with Glenn Greenwald",
    "s": "system-update-with-glenn-greenwald",
    "p": null,
    "c": 1
   },
   {
    "n": "Tablet",
    "s": "tablet",
    "p": null,
    "c": 2
   },
   {
    "n": "Tampa Bay Times",
    "s": "tampa-bay-times",
    "p": null,
    "c": 6
   },
   {
    "n": "Tech Economy",
    "s": "tech-economy",
    "p": null,
    "c": 1
   },
   {
    "n": "Tech Mic",
    "s": "tech-mic",
    "p": null,
    "c": 1
   },
   {
    "n": "Tech Radar",
    "s": "tech-radar",
    "p": null,
    "c": 2
   },
   {
    "n": "Tech Times",
    "s": "tech-times",
    "p": null,
    "c": 2
   },
   {
    "n": "TechCrunch",
    "s": "techcrunch",
    "p": null,
    "c": 23
   },
   {
    "n": "Technology Review",
    "s": "technology-review",
    "p": null,
    "c": 2
   },
   {
    "n": "TechTarget",
    "s": "techtarget",
    "p": null,
    "c": 20
   },
   {
    "n": "TED",
    "s": "ted",
    "p": null,
    "c": 1
   },
   {
    "n": "Teen Vogue",
    "s": "teen-vogue",
    "p": null,
    "c": 4
   },
   {
    "n": "Texas Observer",
    "s": "texas-observer",
    "p": null,
    "c": 1
   },
   {
    "n": "That Said",
    "s": "that-said",
    "p": null,
    "c": 1
   },
   {
    "n": "The 74",
    "s": "the-74",
    "p": null,
    "c": 1
   },
   {
    "n": "The Advertiser",
    "s": "the-advertiser",
    "p": null,
    "c": 2
   },
   {
    "n": "The American Prospect",
    "s": "the-american-prospect",
    "p": null,
    "c": 6
   },
   {
    "n": "The Appeal",
    "s": "the-appeal",
    "p": null,
    "c": 5
   },
   {
    "n": "The Argument",
    "s": "the-argument",
    "p": null,
    "c": 1
   },
   {
    "n": "The Associated Press",
    "s": "the-associated-press",
    "p": null,
    "c": 24
   },
   {
    "n": "The Atlanta Journal-Constitution",
    "s": "the-atlanta-journal-constitution",
    "p": null,
    "c": 1
   },
   {
    "n": "The Atlantic Cities",
    "s": "the-atlantic-cities",
    "p": null,
    "c": 8
   },
   {
    "n": "The Attleboro Sun Chronicle",
    "s": "the-attleboro-sun-chronicle",
    "p": null,
    "c": 3
   },
   {
    "n": "The Australian Financial Review",
    "s": "the-australian-financial-review",
    "p": null,
    "c": 1
   },
   {
    "n": "The Baltimore Sun",
    "s": "the-baltimore-sun",
    "p": null,
    "c": 5
   },
   {
    "n": "The Berkshire Eagle",
    "s": "the-berkshire-eagle",
    "p": null,
    "c": 1
   },
   {
    "n": "The Birmingham News",
    "s": "the-birmingham-news",
    "p": null,
    "c": 2
   },
   {
    "n": "The Boston Herald",
    "s": "the-boston-herald",
    "p": null,
    "c": 54
   },
   {
    "n": "The Brockton Enterprise",
    "s": "the-brockton-enterprise",
    "p": null,
    "c": 9
   },
   {
    "n": "The Canadian Press",
    "s": "the-canadian-press",
    "p": null,
    "c": 3
   },
   {
    "n": "The Chicago Tribune",
    "s": "the-chicago-tribune",
    "p": null,
    "c": 7
   },
   {
    "n": "The Chronicle of Higher Education",
    "s": "the-chronicle-of-higher-education",
    "p": null,
    "c": 55
   },
   {
    "n": "The Clarion Ledger",
    "s": "the-clarion-ledger",
    "p": null,
    "c": 1
   },
   {
    "n": "The Colombian",
    "s": "the-colombian",
    "p": null,
    "c": 1
   },
   {
    "n": "The Commonwealth Fund",
    "s": "the-commonwealth-fund",
    "p": null,
    "c": 1
   },
   {
    "n": "The Conversation",
    "s": "the-conversation",
    "p": null,
    "c": 66
   },
   {
    "n": "The Crime Report",
    "s": "the-crime-report",
    "p": null,
    "c": 4
   },
   {
    "n": "The Daily Beast",
    "s": "the-daily-beast",
    "p": null,
    "c": 17
   },
   {
    "n": "The Daily Item",
    "s": "the-daily-item",
    "p": null,
    "c": 2
   },
   {
    "n": "The Daily Signal",
    "s": "the-daily-signal",
    "p": null,
    "c": 1
   },
   {
    "n": "The Dartmouth",
    "s": "the-dartmouth",
    "p": null,
    "c": 1
   },
   {
    "n": "The Dedham Transcript",
    "s": "the-dedham-transcript",
    "p": null,
    "c": 1
   },
   {
    "n": "The Des Moines Register",
    "s": "the-des-moines-register",
    "p": null,
    "c": 1
   },
   {
    "n": "The Diane Rehm Show",
    "s": "the-diane-rehm-show",
    "p": null,
    "c": 1
   },
   {
    "n": "The Diplomat",
    "s": "the-diplomat",
    "p": null,
    "c": 1
   },
   {
    "n": "The Economic Times",
    "s": "the-economic-times",
    "p": null,
    "c": 2
   },
   {
    "n": "The Epoch Times",
    "s": "the-epoch-times",
    "p": null,
    "c": 10
   },
   {
    "n": "The First Post",
    "s": "the-first-post",
    "p": null,
    "c": 1
   },
   {
    "n": "The Forward",
    "s": "the-forward",
    "p": null,
    "c": 1
   },
   {
    "n": "The Globe and Mail",
    "s": "the-globe-and-mail",
    "p": null,
    "c": 42
   },
   {
    "n": "The Grio",
    "s": "the-grio",
    "p": null,
    "c": 2
   },
   {
    "n": "The Happiness Lab",
    "s": "the-happiness-lab",
    "p": null,
    "c": 1
   },
   {
    "n": "The Health Care Blog",
    "s": "the-health-care-blog",
    "p": null,
    "c": 1
   },
   {
    "n": "The Herald News",
    "s": "the-herald-news",
    "p": null,
    "c": 2
   },
   {
    "n": "The Hill",
    "s": "the-hill",
    "p": null,
    "c": 71
   },
   {
    "n": "The Huffington Post UK",
    "s": "the-huffington-post-uk",
    "p": null,
    "c": 1
   },
   {
    "n": "The Indian Express",
    "s": "the-indian-express",
    "p": null,
    "c": 2
   },
   {
    "n": "The Information",
    "s": "the-information",
    "p": null,
    "c": 2
   },
   {
    "n": "The Inquisitr",
    "s": "the-inquisitr",
    "p": null,
    "c": 1
   },
   {
    "n": "The Irish Times",
    "s": "the-irish-times",
    "p": null,
    "c": 5
   },
   {
    "n": "The Jerusalem Post",
    "s": "the-jerusalem-post",
    "p": null,
    "c": 1
   },
   {
    "n": "The Jewish Daily Forward",
    "s": "the-jewish-daily-forward",
    "p": null,
    "c": 3
   },
   {
    "n": "The Journal",
    "s": "the-journal",
    "p": null,
    "c": 1
   },
   {
    "n": "The Los Angeles Times",
    "s": "the-los-angeles-times",
    "p": null,
    "c": 35
   },
   {
    "n": "The Lowell Sun",
    "s": "the-lowell-sun",
    "p": null,
    "c": 5
   },
   {
    "n": "The Marshall Project",
    "s": "the-marshall-project",
    "p": null,
    "c": 1
   },
   {
    "n": "The Messenger",
    "s": "the-messenger",
    "p": null,
    "c": 4
   },
   {
    "n": "The Nation",
    "s": "the-nation",
    "p": null,
    "c": 9
   },
   {
    "n": "The National Book Review",
    "s": "the-national-book-review",
    "p": null,
    "c": 1
   },
   {
    "n": "The National Interest",
    "s": "the-national-interest",
    "p": null,
    "c": 1
   },
   {
    "n": "The New Lede",
    "s": "the-new-lede",
    "p": null,
    "c": 1
   },
   {
    "n": "The New York Law Journal",
    "s": "the-new-york-law-journal",
    "p": null,
    "c": 2
   },
   {
    "n": "The New Yorker",
    "s": "the-new-yorker",
    "p": null,
    "c": 23
   },
   {
    "n": "The Next Web",
    "s": "the-next-web",
    "p": null,
    "c": 6
   },
   {
    "n": "The Observer",
    "s": "the-observer",
    "p": null,
    "c": 2
   },
   {
    "n": "The Orange County Register",
    "s": "the-orange-county-register",
    "p": null,
    "c": 2
   },
   {
    "n": "The Orlando Sentinel",
    "s": "the-orlando-sentinel",
    "p": null,
    "c": 4
   },
   {
    "n": "The Paris Review",
    "s": "the-paris-review",
    "p": null,
    "c": 1
   },
   {
    "n": "The Patriot Ledger",
    "s": "the-patriot-ledger",
    "p": null,
    "c": 18
   },
   {
    "n": "The Phoenix",
    "s": "the-phoenix",
    "p": null,
    "c": 3
   },
   {
    "n": "The Portland Press Herald",
    "s": "the-portland-press-herald",
    "p": null,
    "c": 5
   },
   {
    "n": "The Privacy Advisor",
    "s": "the-privacy-advisor",
    "p": null,
    "c": 1
   },
   {
    "n": "The Province",
    "s": "the-province",
    "p": null,
    "c": 1
   },
   {
    "n": "The Register",
    "s": "the-register",
    "p": null,
    "c": 2
   },
   {
    "n": "The Republican",
    "s": "the-republican",
    "p": null,
    "c": 1
   },
   {
    "n": "The Ringer",
    "s": "the-ringer",
    "p": null,
    "c": 2
   }
  ]
 },
 "faculty": {
  "n": "Faculty Member",
  "count": 740,
  "terms": [
   {
    "n": "Aanjhan Ranganathan",
    "s": "aanjhan-ranganathan",
    "p": null,
    "c": 6
   },
   {
    "n": "Aaron Kucyi",
    "s": "aaron-kucyi",
    "p": null,
    "c": 1
   },
   {
    "n": "Aaron Seitz",
    "s": "aaron-seitz",
    "p": null,
    "c": 4
   },
   {
    "n": "Aarti Sathyanarayana",
    "s": "aarti-sathyanarayana",
    "p": null,
    "c": 2
   },
   {
    "n": "Aatmesh Shrivastava",
    "s": "aatmesh-shrivastava",
    "p": null,
    "c": 5
   },
   {
    "n": "Abhi Shelat",
    "s": "abhi-shelat",
    "p": null,
    "c": 4
   },
   {
    "n": "Abigail N. Koppes",
    "s": "abigail-n-koppes",
    "p": null,
    "c": 2
   },
   {
    "n": "Ada Lerner",
    "s": "ada-lerner",
    "p": null,
    "c": 2
   },
   {
    "n": "Adam Ekenseair",
    "s": "adam-ekenseair",
    "p": null,
    "c": 1
   },
   {
    "n": "Adrian Feiguin",
    "s": "adrian-feiguin",
    "p": null,
    "c": 5
   },
   {
    "n": "Ahmad Nourian Avval",
    "s": "ahmad-nourian-avval",
    "p": null,
    "c": 1
   },
   {
    "n": "Ahmed Abdeen Hamed",
    "s": "ahmed-abdeen-hamed",
    "p": null,
    "c": 1
   },
   {
    "n": "Aidong \"Adam\" Ding",
    "s": "aidong-adam-ding",
    "p": null,
    "c": 3
   },
   {
    "n": "Ajay Satpute",
    "s": "ajay-satpute",
    "p": null,
    "c": 3
   },
   {
    "n": "Ajuan Mance",
    "s": "ajuan-mance",
    "p": null,
    "c": 1
   },
   {
    "n": "Akira Iinishi",
    "s": "akira-iinishi",
    "p": null,
    "c": 4
   },
   {
    "n": "Akram Alshawabkeh",
    "s": "akram-alshawabkeh",
    "p": null,
    "c": 1
   },
   {
    "n": "Alain Karma",
    "s": "alain-karma",
    "p": null,
    "c": 9
   },
   {
    "n": "Alan Jamieson",
    "s": "alan-jamieson",
    "p": null,
    "c": 1
   },
   {
    "n": "Alan Mislove",
    "s": "alan-mislove",
    "p": null,
    "c": 2
   },
   {
    "n": "Alan Zaremba",
    "s": "alan-zaremba",
    "p": null,
    "c": 1
   },
   {
    "n": "Albert Lionelle",
    "s": "albert-lionelle",
    "p": null,
    "c": 1
   },
   {
    "n": "Albert-László Barabási",
    "s": "albert-laszlo-barabasi",
    "p": null,
    "c": 19
   },
   {
    "n": "Alessandro Vespignani",
    "s": "alessandro-vespignani",
    "p": null,
    "c": 5
   },
   {
    "n": "Alexander Ivanov",
    "s": "alexander-ivanov",
    "p": null,
    "c": 17
   },
   {
    "n": "Alexandra Rodman",
    "s": "alexandra-rodman",
    "p": null,
    "c": 2
   },
   {
    "n": "Alexandra Roth",
    "s": "alexandra-roth",
    "p": null,
    "c": 1
   },
   {
    "n": "Alexandra To",
    "s": "alexandra-to",
    "p": null,
    "c": 6
   },
   {
    "n": "Alexandros Makriyannis",
    "s": "alexandros-makriyannis",
    "p": null,
    "c": 2
   },
   {
    "n": "Ali Abur",
    "s": "ali-abur",
    "p": null,
    "c": 2
   },
   {
    "n": "Ali Sharifkhani",
    "s": "ali-sharifkhani",
    "p": null,
    "c": 1
   },
   {
    "n": "Alicia Sasser Modestino",
    "s": "alicia-sasser-modestino",
    "p": null,
    "c": 1
   },
   {
    "n": "Alina Oprea",
    "s": "alina-oprea",
    "p": null,
    "c": 15
   },
   {
    "n": "Alireza Ramezani",
    "s": "alireza-ramezani",
    "p": null,
    "c": 4
   },
   {
    "n": "Alisa Lincoln",
    "s": "alisa-lincoln",
    "p": null,
    "c": 1
   },
   {
    "n": "Alison Stephens",
    "s": "alison-stephens",
    "p": null,
    "c": 1
   },
   {
    "n": "Alistair Robinson",
    "s": "alistair-robinson",
    "p": null,
    "c": 1
   },
   {
    "n": "Aliya Kitsakos",
    "s": "aliya-kitsakos",
    "p": null,
    "c": 1
   },
   {
    "n": "Allison Dennis",
    "s": "allison-dennis",
    "p": null,
    "c": 1
   },
   {
    "n": "Alvaro Cuervo-Cazurra",
    "s": "alvaro-cuervo-cazurra",
    "p": null,
    "c": 7
   },
   {
    "n": "Aly Sultan",
    "s": "aly-sultan",
    "p": null,
    "c": 1
   },
   {
    "n": "Amal Ahmed",
    "s": "amal-ahmed",
    "p": null,
    "c": 5
   },
   {
    "n": "Amanda Lawrence",
    "s": "amanda-lawrence",
    "p": null,
    "c": 1
   },
   {
    "n": "Ambika Bajpayee",
    "s": "ambika-bajpayee",
    "p": null,
    "c": 3
   },
   {
    "n": "Amílcar Antonio Barreto",
    "s": "amilcar-antonio-barreto",
    "p": null,
    "c": 1
   },
   {
    "n": "Amir Grinstein",
    "s": "amir-grinstein",
    "p": null,
    "c": 1
   },
   {
    "n": "Amy Mueller",
    "s": "amy-mueller",
    "p": null,
    "c": 2
   },
   {
    "n": "Amy Pei",
    "s": "amy-pei",
    "p": null,
    "c": 1
   },
   {
    "n": "Amy Shirong Lu",
    "s": "amy-shirong-lu",
    "p": null,
    "c": 1
   },
   {
    "n": "Analia Albuja",
    "s": "analia-albuja",
    "p": null,
    "c": 2
   },
   {
    "n": "Anand Nair",
    "s": "anand-nair",
    "p": null,
    "c": 2
   },
   {
    "n": "Andreia Ionescu",
    "s": "andreia-ionescu",
    "p": null,
    "c": 2
   },
   {
    "n": "Andrés Shahidnejad",
    "s": "andres-shahidnejad",
    "p": null,
    "c": 0
   },
   {
    "n": "Andrew Myers",
    "s": "andrew-myers",
    "p": null,
    "c": 1
   },
   {
    "n": "Ang Li",
    "s": "ang-li",
    "p": null,
    "c": 1
   },
   {
    "n": "Ángel David Nieves",
    "s": "angel-david-nieves",
    "p": null,
    "c": 1
   },
   {
    "n": "Angel Ding",
    "s": "angel-ding",
    "p": null,
    "c": 1
   },
   {
    "n": "Angelina Jay",
    "s": "angelina-jay",
    "p": null,
    "c": 1
   },
   {
    "n": "Anja Pahor",
    "s": "anja-pahor",
    "p": null,
    "c": 1
   },
   {
    "n": "Anne-Lise Marie",
    "s": "anne-lise-marie",
    "p": null,
    "c": 3
   },
   {
    "n": "Annika Marie Schoene",
    "s": "annika-marie-schoene",
    "p": null,
    "c": 1
   },
   {
    "n": "Anthony D'Onofrio",
    "s": "anthony-donofrio",
    "p": null,
    "c": 1
   },
   {
    "n": "Arjun Guha",
    "s": "arjun-guha",
    "p": null,
    "c": 20
   },
   {
    "n": "Arnold Wright",
    "s": "arnold-wright",
    "p": null,
    "c": 1
   },
   {
    "n": "Aron Stubbins",
    "s": "aron-stubbins",
    "p": null,
    "c": 6
   },
   {
    "n": "Arthur Coury",
    "s": "arthur-coury",
    "p": null,
    "c": 1
   },
   {
    "n": "Arthur Kramer",
    "s": "arthur-kramer",
    "p": null,
    "c": 8
   },
   {
    "n": "Arun Bansil",
    "s": "arun-bansil",
    "p": null,
    "c": 8
   },
   {
    "n": "Auroop Ganguly",
    "s": "auroop-ganguly",
    "p": null,
    "c": 3
   },
   {
    "n": "Babak Heydari",
    "s": "babak-heydari",
    "p": null,
    "c": 3
   },
   {
    "n": "Bahram Shafai",
    "s": "bahram-shafai",
    "p": null,
    "c": 1
   },
   {
    "n": "Bala Maheswaran",
    "s": "bala-maheswaran",
    "p": null,
    "c": 3
   },
   {
    "n": "Barbara Larson",
    "s": "barbara-larson",
    "p": null,
    "c": 1
   },
   {
    "n": "Baris Altunkaynak",
    "s": "baris-altunkaynak",
    "p": null,
    "c": 1
   },
   {
    "n": "Barry Bluestone",
    "s": "barry-bluestone",
    "p": null,
    "c": 1
   },
   {
    "n": "Baruch Barzel",
    "s": "baruch-barzel",
    "p": null,
    "c": 2
   },
   {
    "n": "Ben Knudsen",
    "s": "ben-knudsen",
    "p": null,
    "c": 1
   },
   {
    "n": "Benjamin Woolston",
    "s": "benjamin-woolston",
    "p": null,
    "c": 2
   },
   {
    "n": "Benyamin Davaji",
    "s": "benyamin-davaji",
    "p": null,
    "c": 3
   },
   {
    "n": "Bernardo Barbiellini",
    "s": "bernardo-barbiellini",
    "p": null,
    "c": 2
   },
   {
    "n": "Beth Simone Noveck",
    "s": "beth-simone-noveck",
    "p": null,
    "c": 2
   },
   {
    "n": "Beverly Kris Jaeger-Helton",
    "s": "beverly-kris-jaeger-helton",
    "p": null,
    "c": 1
   },
   {
    "n": "Bilge Erten",
    "s": "bilge-erten",
    "p": null,
    "c": 1
   },
   {
    "n": "Bradley Lehman",
    "s": "bradley-lehman",
    "p": null,
    "c": 2
   },
   {
    "n": "Brandon Dionne",
    "s": "brandon-dionne",
    "p": null,
    "c": 2
   },
   {
    "n": "Brandon Welsh",
    "s": "brandon-welsh",
    "p": null,
    "c": 1
   },
   {
    "n": "Bree Taylor",
    "s": "bree-taylor",
    "p": null,
    "c": 1
   },
   {
    "n": "Brennan Klein",
    "s": "brennan-klein",
    "p": null,
    "c": 1
   },
   {
    "n": "Brian Helmuth",
    "s": "brian-helmuth",
    "p": null,
    "c": 5
   },
   {
    "n": "Brian Spring",
    "s": "brian-spring",
    "p": null,
    "c": 1
   },
   {
    "n": "Briana Taylor",
    "s": "briana-taylor",
    "p": null,
    "c": 1
   },
   {
    "n": "Brooke Foucault Welles",
    "s": "brooke-foucault-welles",
    "p": null,
    "c": 1
   },
   {
    "n": "Bruce Clark",
    "s": "bruce-clark",
    "p": null,
    "c": 2
   },
   {
    "n": "Bryan Spring",
    "s": "bryan-spring",
    "p": null,
    "c": 4
   },
   {
    "n": "Byron Wallace",
    "s": "byron-wallace",
    "p": null,
    "c": 21
   },
   {
    "n": "Caglar Yildirim",
    "s": "caglar-yildirim",
    "p": null,
    "c": 8
   },
   {
    "n": "Caitlin Thornbrugh",
    "s": "caitlin-thornbrugh",
    "p": null,
    "c": 1
   },
   {
    "n": "Calina Copos",
    "s": "calina-copos",
    "p": null,
    "c": 3
   },
   {
    "n": "Callum Barrell",
    "s": "callum-barrell",
    "p": null,
    "c": 1
   },
   {
    "n": "Camille Gómez-Laberge",
    "s": "camille-gomez-laberge",
    "p": null,
    "c": 1
   },
   {
    "n": "Carey Barry",
    "s": "carey-barry",
    "p": null,
    "c": 1
   },
   {
    "n": "Carl Zangerl",
    "s": "carl-zangerl",
    "p": null,
    "c": 1
   },
   {
    "n": "Carla Kaplan",
    "s": "carla-kaplan",
    "p": null,
    "c": 1
   },
   {
    "n": "Carla Mattos",
    "s": "carla-mattos",
    "p": null,
    "c": 2
   },
   {
    "n": "Carlota Caulfield",
    "s": "carlota-caulfield",
    "p": null,
    "c": 3
   },
   {
    "n": "Carmen Castañeda Sceppa",
    "s": "carmen-castaneda-sceppa",
    "p": null,
    "c": 1
   },
   {
    "n": "Carolyn Lee-Parsons",
    "s": "carolyn-lee-parsons",
    "p": null,
    "c": 2
   },
   {
    "n": "Casper Harteveld",
    "s": "casper-harteveld",
    "p": null,
    "c": 8
   },
   {
    "n": "Cassie McMillan",
    "s": "cassie-mcmillan",
    "p": null,
    "c": 3
   },
   {
    "n": "Catherine Wagner",
    "s": "catherine-wagner",
    "p": null,
    "c": 1
   },
   {
    "n": "Charles DiMarzio",
    "s": "charles-dimarzio",
    "p": null,
    "c": 1
   },
   {
    "n": "Charles Hillman",
    "s": "charles-hillman",
    "p": null,
    "c": 11
   },
   {
    "n": "Charn McAllister",
    "s": "charn-mcallister",
    "p": null,
    "c": 1
   },
   {
    "n": "Cheng Tan",
    "s": "cheng-tan",
    "p": null,
    "c": 5
   },
   {
    "n": "Cherese Childers-McKee",
    "s": "cherese-childers-mckee",
    "p": null,
    "c": 1
   },
   {
    "n": "Chris Gallagher",
    "s": "chris-gallagher",
    "p": null,
    "c": 1
   },
   {
    "n": "Christie Chung",
    "s": "christie-chung",
    "p": null,
    "c": 4
   },
   {
    "n": "Christo Wilson",
    "s": "christo-wilson",
    "p": null,
    "c": 7
   },
   {
    "n": "Christoph Riedl",
    "s": "christoph-riedl",
    "p": null,
    "c": 7
   },
   {
    "n": "Christoph Schuringa",
    "s": "christoph-schuringa",
    "p": null,
    "c": 1
   },
   {
    "n": "Christopher Aaron Barney",
    "s": "christopher-aaron-barney",
    "p": null,
    "c": 1
   },
   {
    "n": "Christopher Amato",
    "s": "christopher-amato",
    "p": null,
    "c": 7
   },
   {
    "n": "Christopher Parsons",
    "s": "christopher-parsons",
    "p": null,
    "c": 1
   },
   {
    "n": "Christopher Robertson",
    "s": "christopher-robertson",
    "p": null,
    "c": 1
   },
   {
    "n": "Claudio Lanza",
    "s": "claudio-lanza",
    "p": null,
    "c": 1
   },
   {
    "n": "Clemens C.C. Bauer Hoss",
    "s": "clemens-c-c-bauer-hoss",
    "p": null,
    "c": 1
   },
   {
    "n": "Clifford Lee",
    "s": "clifford-lee",
    "p": null,
    "c": 2
   },
   {
    "n": "Cody Dunne",
    "s": "cody-dunne",
    "p": null,
    "c": 1
   },
   {
    "n": "Colin Brown",
    "s": "colin-brown",
    "p": null,
    "c": 1
   },
   {
    "n": "Constantinos Zeinalipour-Yazdi",
    "s": "constantinos-zeinalipour-yazdi",
    "p": null,
    "c": 1
   },
   {
    "n": "Costas Panagopoulos",
    "s": "costas-panagopoulos",
    "p": null,
    "c": 1
   },
   {
    "n": "Craig Ferris",
    "s": "craig-ferris",
    "p": null,
    "c": 5
   },
   {
    "n": "Cristian Cassella",
    "s": "cristian-cassella",
    "p": null,
    "c": 9
   },
   {
    "n": "Cristina Nita-Rotaru",
    "s": "cristina-nita-rotaru",
    "p": null,
    "c": 11
   },
   {
    "n": "Cristina Schultz",
    "s": "cristina-schultz",
    "p": null,
    "c": 1
   },
   {
    "n": "Curtis Odom",
    "s": "curtis-odom",
    "p": null,
    "c": 5
   },
   {
    "n": "Dagmar Sternad",
    "s": "dagmar-sternad",
    "p": null,
    "c": 5
   },
   {
    "n": "Dakuo Wang",
    "s": "dakuo-wang",
    "p": null,
    "c": 25
   },
   {
    "n": "Damilola Daramola",
    "s": "damilola-daramola",
    "p": null,
    "c": 2
   },
   {
    "n": "Dan Distel",
    "s": "dan-distel",
    "p": null,
    "c": 6
   },
   {
    "n": "Dan Kennedy",
    "s": "dan-kennedy",
    "p": null,
    "c": 1
   },
   {
    "n": "Daniel Aldrich",
    "s": "daniel-aldrich",
    "p": null,
    "c": 3
   },
   {
    "n": "Daniel Faber",
    "s": "daniel-faber",
    "p": null,
    "c": 1
   },
   {
    "n": "Daniel J. Dubois",
    "s": "daniel-j-dubois",
    "p": null,
    "c": 7
   },
   {
    "n": "Daniel McCarthy",
    "s": "daniel-mccarthy",
    "p": null,
    "c": 1
   },
   {
    "n": "Daniel Medwed",
    "s": "daniel-medwed",
    "p": null,
    "c": 1
   },
   {
    "n": "Daniel Noemi Voionmaa",
    "s": "daniel-noemi-voionmaa",
    "p": null,
    "c": 1
   },
   {
    "n": "Daniel Patterson",
    "s": "daniel-patterson",
    "p": null,
    "c": 1
   },
   {
    "n": "Daniel T. O'Brien",
    "s": "daniel-t-obrien",
    "p": null,
    "c": 2
   },
   {
    "n": "Daniel Wichs",
    "s": "daniel-wichs",
    "p": null,
    "c": 12
   },
   {
    "n": "Daniele Mathras",
    "s": "daniele-mathras",
    "p": null,
    "c": 1
   },
   {
    "n": "Dapeng \"Max\" Bi",
    "s": "dapeng-max-bi",
    "p": null,
    "c": 1
   },
   {
    "n": "Darien Wood",
    "s": "darien-wood",
    "p": null,
    "c": 2
   },
   {
    "n": "Darin Detwiler",
    "s": "darin-detwiler",
    "p": null,
    "c": 3
   },
   {
    "n": "David A. Rochefort",
    "s": "david-a-rochefort",
    "p": null,
    "c": 1
   },
   {
    "n": "David Bau",
    "s": "david-bau",
    "p": null,
    "c": 17
   },
   {
    "n": "David Budil",
    "s": "david-budil",
    "p": null,
    "c": 1
   },
   {
    "n": "David Choffnes",
    "s": "david-choffnes",
    "p": null,
    "c": 11
   },
   {
    "n": "David De Cremer",
    "s": "david-de-cremer",
    "p": null,
    "c": 8
   },
   {
    "n": "David DeSteno",
    "s": "david-desteno",
    "p": null,
    "c": 3
   },
   {
    "n": "David H. Myers",
    "s": "david-h-myers",
    "p": null,
    "c": 1
   },
   {
    "n": "David Horsley",
    "s": "david-horsley",
    "p": null,
    "c": 2
   },
   {
    "n": "David Kaeli",
    "s": "david-kaeli",
    "p": null,
    "c": 8
   },
   {
    "n": "David Kimbro",
    "s": "david-kimbro",
    "p": null,
    "c": 2
   },
   {
    "n": "David Lazer",
    "s": "david-lazer",
    "p": null,
    "c": 7
   },
   {
    "n": "David M. Rosen",
    "s": "david-m-rosen",
    "p": null,
    "c": 4
   },
   {
    "n": "David Massey",
    "s": "david-massey",
    "p": null,
    "c": 1
   },
   {
    "n": "David Peter Wallis Freeborn",
    "s": "david-peter-wallis-freeborn",
    "p": null,
    "c": 1
   },
   {
    "n": "David Smith",
    "s": "david-smith",
    "p": null,
    "c": 4
   },
   {
    "n": "David Wesley",
    "s": "david-wesley",
    "p": null,
    "c": 2
   },
   {
    "n": "Dean Massey",
    "s": "dean-massey",
    "p": null,
    "c": 2
   },
   {
    "n": "Debra Auguste",
    "s": "debra-auguste",
    "p": null,
    "c": 1
   },
   {
    "n": "Debra Reid",
    "s": "debra-reid",
    "p": null,
    "c": 1
   },
   {
    "n": "Deirdre Visser",
    "s": "deirdre-visser",
    "p": null,
    "c": 1
   },
   {
    "n": "Deniz Erdogmus",
    "s": "deniz-erdogmus",
    "p": null,
    "c": 2
   },
   {
    "n": "Derek Curry",
    "s": "derek-curry",
    "p": null,
    "c": 2
   },
   {
    "n": "Derek Isaacowitz",
    "s": "derek-isaacowitz",
    "p": null,
    "c": 4
   },
   {
    "n": "Devesh Tiwari",
    "s": "devesh-tiwari",
    "p": null,
    "c": 1
   },
   {
    "n": "Diana Bozhilova",
    "s": "diana-bozhilova",
    "p": null,
    "c": 1
   },
   {
    "n": "Dietmar Offenhuber",
    "s": "dietmar-offenhuber",
    "p": null,
    "c": 1
   },
   {
    "n": "Dima Krioukov",
    "s": "dima-krioukov",
    "p": null,
    "c": 1
   },
   {
    "n": "Dimitrios Koutsonikolas",
    "s": "dimitrios-koutsonikolas",
    "p": null,
    "c": 1
   },
   {
    "n": "Dinesh John",
    "s": "dinesh-john",
    "p": null,
    "c": 1
   },
   {
    "n": "Diomedes Logothetis",
    "s": "diomedes-logothetis",
    "p": null,
    "c": 1
   },
   {
    "n": "Divya Chaudhary",
    "s": "divya-chaudhary",
    "p": null,
    "c": 3
   },
   {
    "n": "Dori Woods",
    "s": "dori-woods",
    "p": null,
    "c": 3
   },
   {
    "n": "Edmund (Ted) Clark",
    "s": "edmund-ted-clark",
    "p": null,
    "c": 1
   },
   {
    "n": "Edmund Yeh",
    "s": "edmund-yeh",
    "p": null,
    "c": 5
   },
   {
    "n": "Eduardo Sontag",
    "s": "eduardo-sontag",
    "p": null,
    "c": 1
   },
   {
    "n": "Edward Geisinger",
    "s": "edward-geisinger",
    "p": null,
    "c": 7
   },
   {
    "n": "Edward Miller",
    "s": "edward-miller",
    "p": null,
    "c": 1
   },
   {
    "n": "Edward Witten",
    "s": "edward-witten",
    "p": null,
    "c": 1
   },
   {
    "n": "Egon Schulte",
    "s": "egon-schulte",
    "p": null,
    "c": 1
   },
   {
    "n": "Ehsan Elhamifar",
    "s": "ehsan-elhamifar",
    "p": null,
    "c": 2
   },
   {
    "n": "Eileen Otis",
    "s": "eileen-otis",
    "p": null,
    "c": 2
   },
   {
    "n": "Elitsa Banalieva",
    "s": "elitsa-banalieva",
    "p": null,
    "c": 1
   },
   {
    "n": "Elizabeth Bucar",
    "s": "elizabeth-bucar",
    "p": null,
    "c": 2
   },
   {
    "n": "Elizabeth Libby",
    "s": "elizabeth-libby",
    "p": null,
    "c": 1
   },
   {
    "n": "Elizabeth Moore",
    "s": "elizabeth-moore",
    "p": null,
    "c": 1
   },
   {
    "n": "Elizabeth Mynatt",
    "s": "elizabeth-mynatt",
    "p": null,
    "c": 6
   },
   {
    "n": "Ellen Cushman",
    "s": "ellen-cushman",
    "p": null,
    "c": 1
   },
   {
    "n": "Elmaz Abinader",
    "s": "elmaz-abinader",
    "p": null,
    "c": 1
   },
   {
    "n": "Emanuela Barberis",
    "s": "emanuela-barberis",
    "p": null,
    "c": 2
   },
   {
    "n": "Emanuele Viola",
    "s": "emanuele-viola",
    "p": null,
    "c": 4
   },
   {
    "n": "Emily Mann",
    "s": "emily-mann",
    "p": null,
    "c": 1
   },
   {
    "n": "Emily Nusbaum",
    "s": "emily-nusbaum",
    "p": null,
    "c": 1
   },
   {
    "n": "Emily Zimmerman",
    "s": "emily-zimmerman",
    "p": null,
    "c": 1
   },
   {
    "n": "Emrecan Demirors",
    "s": "emrecan-demirors",
    "p": null,
    "c": 2
   },
   {
    "n": "Engin Kirda",
    "s": "engin-kirda",
    "p": null,
    "c": 4
   },
   {
    "n": "Ennio Mingolla",
    "s": "ennio-mingolla",
    "p": null,
    "c": 1
   },
   {
    "n": "Eno Ebong",
    "s": "eno-ebong",
    "p": null,
    "c": 1
   },
   {
    "n": "Enrico Bertini",
    "s": "enrico-bertini",
    "p": null,
    "c": 6
   },
   {
    "n": "Eric Bogert",
    "s": "eric-bogert",
    "p": null,
    "c": 2
   },
   {
    "n": "Eric Piza",
    "s": "eric-piza",
    "p": null,
    "c": 1
   },
   {
    "n": "Erica Homan",
    "s": "erica-homan",
    "p": null,
    "c": 1
   },
   {
    "n": "Erin Cram",
    "s": "erin-cram",
    "p": null,
    "c": 4
   },
   {
    "n": "Erin Meier",
    "s": "erin-meier",
    "p": null,
    "c": 1
   },
   {
    "n": "Esteban Moro Egido",
    "s": "esteban-moro-egido",
    "p": null,
    "c": 5
   },
   {
    "n": "Estefania Ciliotta Chehade",
    "s": "estefania-ciliotta-chehade",
    "p": null,
    "c": 3
   },
   {
    "n": "Eugene Smotkin",
    "s": "eugene-smotkin",
    "p": null,
    "c": 3
   },
   {
    "n": "Eugene Tunik",
    "s": "eugene-tunik",
    "p": null,
    "c": 2
   },
   {
    "n": "Eunsong Kim",
    "s": "eunsong-kim",
    "p": null,
    "c": 1
   },
   {
    "n": "Evisa Bogdani",
    "s": "evisa-bogdani",
    "p": null,
    "c": 1
   },
   {
    "n": "Fabian Ruehle",
    "s": "fabian-ruehle",
    "p": null,
    "c": 2
   },
   {
    "n": "Fabricius Somogyi",
    "s": "fabricius-somogyi",
    "p": null,
    "c": 1
   },
   {
    "n": "Fatemeh Ghoreishi",
    "s": "fatemeh-ghoreishi",
    "p": null,
    "c": 2
   },
   {
    "n": "Felix Muzny",
    "s": "felix-muzny",
    "p": null,
    "c": 2
   },
   {
    "n": "Flora Lisica",
    "s": "flora-lisica",
    "p": null,
    "c": 0
   },
   {
    "n": "Francesca Grippa",
    "s": "francesca-grippa",
    "p": null,
    "c": 2
   },
   {
    "n": "Francesco Restuccia",
    "s": "francesco-restuccia",
    "p": null,
    "c": 14
   },
   {
    "n": "Francis Choi",
    "s": "francis-choi",
    "p": null,
    "c": 3
   },
   {
    "n": "Francisco Hung",
    "s": "francisco-hung",
    "p": null,
    "c": 2
   },
   {
    "n": "Frank Tip",
    "s": "frank-tip",
    "p": null,
    "c": 6
   },
   {
    "n": "Gabriel Sala",
    "s": "gabriel-sala",
    "p": null,
    "c": 0
   },
   {
    "n": "Gabriela Garcia",
    "s": "gabriela-garcia",
    "p": null,
    "c": 3
   },
   {
    "n": "Ganesh Krishnamoorthy",
    "s": "ganesh-krishnamoorthy",
    "p": null,
    "c": 1
   },
   {
    "n": "Ganesh Thakur",
    "s": "ganesh-thakur",
    "p": null,
    "c": 1
   },
   {
    "n": "Gary Young",
    "s": "gary-young",
    "p": null,
    "c": 2
   },
   {
    "n": "Gene Cooperman",
    "s": "gene-cooperman",
    "p": null,
    "c": 2
   },
   {
    "n": "Geoffrey Trussell",
    "s": "geoffrey-trussell",
    "p": null,
    "c": 3
   },
   {
    "n": "George O'Doherty",
    "s": "george-odoherty",
    "p": null,
    "c": 1
   },
   {
    "n": "George S. Yip",
    "s": "george-s-yip",
    "p": null,
    "c": 2
   },
   {
    "n": "Gergana Dimova",
    "s": "gergana-dimova",
    "p": null,
    "c": 2
   },
   {
    "n": "Gilbert Ye",
    "s": "gilbert-ye",
    "p": null,
    "c": 1
   },
   {
    "n": "Giovanni Petri",
    "s": "giovanni-petri",
    "p": null,
    "c": 3
   },
   {
    "n": "Giulia Menichetti",
    "s": "giulia-menichetti",
    "p": null,
    "c": 1
   },
   {
    "n": "Gorka Basterretxea Santiso",
    "s": "gorka-basterretxea-santiso",
    "p": null,
    "c": 1
   },
   {
    "n": "Gregory Cloutier",
    "s": "gregory-cloutier",
    "p": null,
    "c": 1
   },
   {
    "n": "Gregory D. Abowd",
    "s": "gregory-d-abowd",
    "p": null,
    "c": 3
   },
   {
    "n": "Gregory Fiete",
    "s": "gregory-fiete",
    "p": null,
    "c": 11
   },
   {
    "n": "Guevara Noubir",
    "s": "guevara-noubir",
    "p": null,
    "c": 3
   },
   {
    "n": "Gunar Schirner",
    "s": "gunar-schirner",
    "p": null,
    "c": 1
   },
   {
    "n": "Guohao Dai",
    "s": "guohao-dai",
    "p": null,
    "c": 1
   },
   {
    "n": "H. William Detrich",
    "s": "h-william-detrich",
    "p": null,
    "c": 1
   },
   {
    "n": "Hameed Metgalchi",
    "s": "hameed-metgalchi",
    "p": null,
    "c": 2
   },
   {
    "n": "Hannah Appiah-Madson",
    "s": "hannah-appiah-madson",
    "p": null,
    "c": 3
   },
   {
    "n": "Hannah Sayre",
    "s": "hannah-sayre",
    "p": null,
    "c": 3
   },
   {
    "n": "Hanumant Singh",
    "s": "hanumant-singh",
    "p": null,
    "c": 2
   },
   {
    "n": "Haris Koutsopoulos",
    "s": "haris-koutsopoulos",
    "p": null,
    "c": 3
   },
   {
    "n": "Hazel Sive",
    "s": "hazel-sive",
    "p": null,
    "c": 4
   },
   {
    "n": "Heather Brenhouse",
    "s": "heather-brenhouse",
    "p": null,
    "c": 3
   },
   {
    "n": "Herbert Levine",
    "s": "herbert-levine",
    "p": null,
    "c": 6
   },
   {
    "n": "Herman Saksono",
    "s": "herman-saksono",
    "p": null,
    "c": 1
   },
   {
    "n": "Hillary Chute",
    "s": "hillary-chute",
    "p": null,
    "c": 2
   },
   {
    "n": "Holly Jimison",
    "s": "holly-jimison",
    "p": null,
    "c": 2
   },
   {
    "n": "Hongli (Julie) Zhu",
    "s": "hongli-julie-zhu",
    "p": null,
    "c": 3
   },
   {
    "n": "Hongyang Zhang",
    "s": "hongyang-zhang",
    "p": null,
    "c": 7
   },
   {
    "n": "Hossein Mosallaei",
    "s": "hossein-mosallaei",
    "p": null,
    "c": 1
   },
   {
    "n": "Hua Dong",
    "s": "hua-dong",
    "p": null,
    "c": 1
   },
   {
    "n": "Huaizu Jiang",
    "s": "huaizu-jiang",
    "p": null,
    "c": 11
   },
   {
    "n": "Huy Lê Nguyen",
    "s": "huy-le-nguyen",
    "p": null,
    "c": 7
   },
   {
    "n": "Iacopo Iacopini",
    "s": "iacopo-iacopini",
    "p": null,
    "c": 1
   },
   {
    "n": "Ian Gorton",
    "s": "ian-gorton",
    "p": null,
    "c": 4
   },
   {
    "n": "Ilya Vidrin",
    "s": "ilya-vidrin",
    "p": null,
    "c": 2
   },
   {
    "n": "Iris Berent",
    "s": "iris-berent",
    "p": null,
    "c": 4
   },
   {
    "n": "Isabel Martinez",
    "s": "isabel-martinez",
    "p": null,
    "c": 1
   },
   {
    "n": "Iva Halacheva",
    "s": "iva-halacheva",
    "p": null,
    "c": 2
   },
   {
    "n": "Ivan Petkov",
    "s": "ivan-petkov",
    "p": null,
    "c": 2
   },
   {
    "n": "Jack Levin",
    "s": "jack-levin",
    "p": null,
    "c": 0
   },
   {
    "n": "Jack McDevitt",
    "s": "jack-mcdevitt",
    "p": null,
    "c": 1
   },
   {
    "n": "Jacqueline Griffin",
    "s": "jacqueline-griffin",
    "p": null,
    "c": 4
   },
   {
    "n": "Jacqueline McCleary",
    "s": "jacqueline-mccleary",
    "p": null,
    "c": 4
   },
   {
    "n": "Jacquelyn Urbani",
    "s": "jacquelyn-urbani",
    "p": null,
    "c": 1
   },
   {
    "n": "James Alan Fox",
    "s": "james-alan-fox",
    "p": null,
    "c": 1
   },
   {
    "n": "James Halverson",
    "s": "james-halverson",
    "p": null,
    "c": 4
   },
   {
    "n": "James Monaghan",
    "s": "james-monaghan",
    "p": null,
    "c": 7
   },
   {
    "n": "Jamie Ladge",
    "s": "jamie-ladge",
    "p": null,
    "c": 2
   },
   {
    "n": "Jan Vitek",
    "s": "jan-vitek",
    "p": null,
    "c": 1
   },
   {
    "n": "Jan-Willem van de Meent",
    "s": "jan-willem-van-de-meent",
    "p": null,
    "c": 3
   },
   {
    "n": "Janet A. Dewan",
    "s": "janet-a-dewan",
    "p": null,
    "c": 2
   },
   {
    "n": "Janet Monagle",
    "s": "janet-monagle",
    "p": null,
    "c": 1
   },
   {
    "n": "Jared Auclair",
    "s": "jared-auclair",
    "p": null,
    "c": 3
   },
   {
    "n": "Jared Young",
    "s": "jared-young",
    "p": null,
    "c": 2
   },
   {
    "n": "Javier Apfeld",
    "s": "javier-apfeld",
    "p": null,
    "c": 4
   },
   {
    "n": "Jeffrey Agar",
    "s": "jeffrey-agar",
    "p": null,
    "c": 1
   },
   {
    "n": "Jelena Golubović",
    "s": "jelena-golubovic",
    "p": null,
    "c": 1
   },
   {
    "n": "Jennie C. Stephens",
    "s": "jennie-c-stephens",
    "p": null,
    "c": 16
   },
   {
    "n": "Jennifer Bowen",
    "s": "jennifer-bowen",
    "p": null,
    "c": 4
   },
   {
    "n": "Jennifer Dy",
    "s": "jennifer-dy",
    "p": null,
    "c": 2
   },
   {
    "n": "Jennifer Gradecki",
    "s": "jennifer-gradecki",
    "p": null,
    "c": 2
   },
   {
    "n": "Jeremy Bushnell",
    "s": "jeremy-bushnell",
    "p": null,
    "c": 1
   },
   {
    "n": "Jeremy R. Paul",
    "s": "jeremy-r-paul",
    "p": null,
    "c": 1
   },
   {
    "n": "Jerome Hajjar",
    "s": "jerome-hajjar",
    "p": null,
    "c": 9
   },
   {
    "n": "Jessica Hoffman",
    "s": "jessica-hoffman",
    "p": null,
    "c": 1
   },
   {
    "n": "Jessica Linker",
    "s": "jessica-linker",
    "p": null,
    "c": 4
   },
   {
    "n": "Jessica Oakes",
    "s": "jessica-oakes",
    "p": null,
    "c": 2
   },
   {
    "n": "Jiahe Li",
    "s": "jiahe-li",
    "p": null,
    "c": 1
   },
   {
    "n": "Jing-Ke Weng",
    "s": "jing-ke-weng",
    "p": null,
    "c": 9
   },
   {
    "n": "Jinxiang Paul Pei",
    "s": "jinxiang-paul-pei",
    "p": null,
    "c": 1
   },
   {
    "n": "Joan Fitzgerald",
    "s": "joan-fitzgerald",
    "p": null,
    "c": 7
   },
   {
    "n": "Joan Giblin",
    "s": "joan-giblin",
    "p": null,
    "c": 2
   },
   {
    "n": "John Bai",
    "s": "john-bai",
    "p": null,
    "c": 2
   },
   {
    "n": "John Basl",
    "s": "john-basl",
    "p": null,
    "c": 2
   },
   {
    "n": "John Coley",
    "s": "john-coley",
    "p": null,
    "c": 5
   },
   {
    "n": "John Devlin",
    "s": "john-devlin",
    "p": null,
    "c": 1
   },
   {
    "n": "John Engen",
    "s": "john-engen",
    "p": null,
    "c": 4
   },
   {
    "n": "John Friar",
    "s": "john-friar",
    "p": null,
    "c": 2
   },
   {
    "n": "John Kwoka",
    "s": "john-kwoka",
    "p": null,
    "c": 2
   },
   {
    "n": "John Wihbey",
    "s": "john-wihbey",
    "p": null,
    "c": 1
   },
   {
    "n": "Jonathan Bell",
    "s": "jonathan-bell",
    "p": null,
    "c": 9
   },
   {
    "n": "Jonathan Blazek",
    "s": "jonathan-blazek",
    "p": null,
    "c": 1
   },
   {
    "n": "Jonathan Grabowski",
    "s": "jonathan-grabowski",
    "p": null,
    "c": 4
   },
   {
    "n": "Jonathan Kahn",
    "s": "jonathan-kahn",
    "p": null,
    "c": 1
   },
   {
    "n": "Jonathan Kaufman",
    "s": "jonathan-kaufman",
    "p": null,
    "c": 1
   },
   {
    "n": "Jonathan Tilly",
    "s": "jonathan-tilly",
    "p": null,
    "c": 3
   },
   {
    "n": "Jonathan Ullman",
    "s": "jonathan-ullman",
    "p": null,
    "c": 9
   },
   {
    "n": "Jorge Morales",
    "s": "jorge-morales",
    "p": null,
    "c": 9
   },
   {
    "n": "Jose Perea",
    "s": "jose-perea",
    "p": null,
    "c": 7
   },
   {
    "n": "Josep Jornet",
    "s": "josep-jornet",
    "p": null,
    "c": 11
   },
   {
    "n": "Joseph Ayers",
    "s": "joseph-ayers",
    "p": null,
    "c": 2
   },
   {
    "n": "Joseph Giglio",
    "s": "joseph-giglio",
    "p": null,
    "c": 1
   },
   {
    "n": "Joseph M. Giglio",
    "s": "joseph-m-giglio",
    "p": null,
    "c": 2
   },
   {
    "n": "Joseph McNabb",
    "s": "joseph-mcnabb",
    "p": null,
    "c": 2
   },
   {
    "n": "Joshua Gallaway",
    "s": "joshua-gallaway",
    "p": null,
    "c": 1
   },
   {
    "n": "Joshua Hertz",
    "s": "joshua-hertz",
    "p": null,
    "c": 1
   },
   {
    "n": "Julia Hopkins",
    "s": "julia-hopkins",
    "p": null,
    "c": 1
   },
   {
    "n": "Julia Varshavsky",
    "s": "julia-varshavsky",
    "p": null,
    "c": 1
   },
   {
    "n": "Juliet Davidow",
    "s": "juliet-davidow",
    "p": null,
    "c": 1
   },
   {
    "n": "Juner Zhu",
    "s": "juner-zhu",
    "p": null,
    "c": 2
   },
   {
    "n": "Justin Mellette",
    "s": "justin-mellette",
    "p": null,
    "c": 1
   },
   {
    "n": "Justin Ries",
    "s": "justin-ries",
    "p": null,
    "c": 2
   },
   {
    "n": "K.J. Rawson",
    "s": "k-j-rawson",
    "p": null,
    "c": 1
   },
   {
    "n": "Kaan Onarlioglu",
    "s": "kaan-onarlioglu",
    "p": null,
    "c": 1
   },
   {
    "n": "Kabria Baumgartner",
    "s": "kabria-baumgartner",
    "p": null,
    "c": 1
   },
   {
    "n": "Kai Wang",
    "s": "kai-wang",
    "p": null,
    "c": 1
   },
   {
    "n": "Kandarp Srinivasan",
    "s": "kandarp-srinivasan",
    "p": null,
    "c": 1
   },
   {
    "n": "Karen Quigley",
    "s": "karen-quigley",
    "p": null,
    "c": 2
   },
   {
    "n": "Karl Lieberherr",
    "s": "karl-lieberherr",
    "p": null,
    "c": 1
   },
   {
    "n": "Kat Gonso",
    "s": "kat-gonso",
    "p": null,
    "c": 1
   },
   {
    "n": "Katherine Kraschel",
    "s": "katherine-kraschel",
    "p": null,
    "c": 1
   },
   {
    "n": "Kathleen Creel",
    "s": "kathleen-creel",
    "p": null,
    "c": 3
   },
   {
    "n": "Katie Lotterhos",
    "s": "katie-lotterhos",
    "p": null,
    "c": 7
   },
   {
    "n": "Kaushik Chowdhury",
    "s": "kaushik-chowdhury",
    "p": null,
    "c": 4
   },
   {
    "n": "Ke Zhang",
    "s": "ke-zhang",
    "p": null,
    "c": 5
   },
   {
    "n": "Kelsey Pieper",
    "s": "kelsey-pieper",
    "p": null,
    "c": 1
   },
   {
    "n": "Kemi Jona",
    "s": "kemi-jona",
    "p": null,
    "c": 1
   },
   {
    "n": "Ken Duffy",
    "s": "ken-duffy",
    "p": null,
    "c": 1
   },
   {
    "n": "Kenneth Church",
    "s": "kenneth-church",
    "p": null,
    "c": 2
   },
   {
    "n": "Kevin Chuah",
    "s": "kevin-chuah",
    "p": null,
    "c": 0
   },
   {
    "n": "Kevin Fu",
    "s": "kevin-fu",
    "p": null,
    "c": 1
   },
   {
    "n": "Kim Lewis",
    "s": "kim-lewis",
    "p": null,
    "c": 5
   },
   {
    "n": "Kim Magowan",
    "s": "kim-magowan",
    "p": null,
    "c": 1
   },
   {
    "n": "Kimberly A. Eddleston",
    "s": "kimberly-a-eddleston",
    "p": null,
    "c": 5
   },
   {
    "n": "Kimberly Lucas",
    "s": "kimberly-lucas",
    "p": null,
    "c": 1
   },
   {
    "n": "Kimberly Nolan",
    "s": "kimberly-nolan",
    "p": null,
    "c": 1
   },
   {
    "n": "Koen Pauwels",
    "s": "koen-pauwels",
    "p": null,
    "c": 1
   },
   {
    "n": "Konstantin Khrapko",
    "s": "konstantin-khrapko",
    "p": null,
    "c": 1
   },
   {
    "n": "Korey Tillman",
    "s": "korey-tillman",
    "p": null,
    "c": 1
   },
   {
    "n": "Kris Dorsey",
    "s": "kris-dorsey",
    "p": null,
    "c": 2
   },
   {
    "n": "Kris Manjapra",
    "s": "kris-manjapra",
    "p": null,
    "c": 1
   },
   {
    "n": "Kristina Faul",
    "s": "kristina-faul",
    "p": null,
    "c": 1
   },
   {
    "n": "Kwong Chan",
    "s": "kwong-chan",
    "p": null,
    "c": 2
   },
   {
    "n": "Lace Padilla",
    "s": "lace-padilla",
    "p": null,
    "c": 1
   },
   {
    "n": "Lama Hamandi",
    "s": "lama-hamandi",
    "p": null,
    "c": 1
   },
   {
    "n": "Laney Strange",
    "s": "laney-strange",
    "p": null,
    "c": 1
   },
   {
    "n": "Laura Forlano",
    "s": "laura-forlano",
    "p": null,
    "c": 6
   },
   {
    "n": "Laura Huang",
    "s": "laura-huang",
    "p": null,
    "c": 1
   },
   {
    "n": "Laura Kuhl",
    "s": "laura-kuhl",
    "p": null,
    "c": 6
   },
   {
    "n": "Laura Lewis",
    "s": "laura-lewis",
    "p": null,
    "c": 2
   },
   {
    "n": "Laura Perovich",
    "s": "laura-perovich",
    "p": null,
    "c": 1
   },
   {
    "n": "Laurel Gabard-Durnam",
    "s": "laurel-gabard-durnam",
    "p": null,
    "c": 3
   },
   {
    "n": "Lauren Raine",
    "s": "lauren-raine",
    "p": null,
    "c": 2
   },
   {
    "n": "Lawson L.S. Wong",
    "s": "lawson-l-s-wong",
    "p": null,
    "c": 12
   },
   {
    "n": "Lee Makowski",
    "s": "lee-makowski",
    "p": null,
    "c": 3
   },
   {
    "n": "Lee Moreau",
    "s": "lee-moreau",
    "p": null,
    "c": 1
   },
   {
    "n": "Leigh Plant",
    "s": "leigh-plant",
    "p": null,
    "c": 2
   },
   {
    "n": "Leila Deravi",
    "s": "leila-deravi",
    "p": null,
    "c": 5
   },
   {
    "n": "Leonardo Bonati",
    "s": "leonardo-bonati",
    "p": null,
    "c": 3
   },
   {
    "n": "Lili Su",
    "s": "lili-su",
    "p": null,
    "c": 1
   },
   {
    "n": "Ling Zhu",
    "s": "ling-zhu",
    "p": null,
    "c": 2
   },
   {
    "n": "Lisa Feldman Barrett",
    "s": "lisa-feldman-barrett",
    "p": null,
    "c": 4
   },
   {
    "n": "Liza Weinstein",
    "s": "liza-weinstein",
    "p": null,
    "c": 1
   },
   {
    "n": "Long Lu",
    "s": "long-lu",
    "p": null,
    "c": 3
   },
   {
    "n": "Loredana Padurean",
    "s": "loredana-padurean",
    "p": null,
    "c": 1
   },
   {
    "n": "Loretta Fernandez",
    "s": "loretta-fernandez",
    "p": null,
    "c": 1
   },
   {
    "n": "Lori Ferrins",
    "s": "lori-ferrins",
    "p": null,
    "c": 5
   },
   {
    "n": "Lori Gardinier",
    "s": "lori-gardinier",
    "p": null,
    "c": 1
   },
   {
    "n": "Louise E. Walker",
    "s": "louise-e-walker",
    "p": null,
    "c": 1
   },
   {
    "n": "Luca Caracoglia",
    "s": "luca-caracoglia",
    "p": null,
    "c": 2
   },
   {
    "n": "Lucas Landherr",
    "s": "lucas-landherr",
    "p": null,
    "c": 2
   },
   {
    "n": "Luis Alfonso Dau",
    "s": "luis-alfonso-dau",
    "p": null,
    "c": 1
   },
   {
    "n": "Madhavi Venkatesan",
    "s": "madhavi-venkatesan",
    "p": null,
    "c": 8
   },
   {
    "n": "Magda Barecka",
    "s": "magda-barecka",
    "p": null,
    "c": 1
   },
   {
    "n": "Mahdi Imani",
    "s": "mahdi-imani",
    "p": null,
    "c": 3
   },
   {
    "n": "Mahsa Derakhshan",
    "s": "mahsa-derakhshan",
    "p": null,
    "c": 5
   },
   {
    "n": "Maitraye Das",
    "s": "maitraye-das",
    "p": null,
    "c": 1
   },
   {
    "n": "Maksim Kitsak",
    "s": "maksim-kitsak",
    "p": null,
    "c": 1
   },
   {
    "n": "Malcolm Purinton",
    "s": "malcolm-purinton",
    "p": null,
    "c": 1
   },
   {
    "n": "Malihe Alikhani",
    "s": "malihe-alikhani",
    "p": null,
    "c": 1
   },
   {
    "n": "Manasvita Joshi",
    "s": "manasvita-joshi",
    "p": null,
    "c": 1
   },
   {
    "n": "Mansoor Amiji",
    "s": "mansoor-amiji",
    "p": null,
    "c": 6
   },
   {
    "n": "Manuel Vaulont",
    "s": "manuel-vaulont",
    "p": null,
    "c": 1
   },
   {
    "n": "Margaret Y.K. Woo",
    "s": "margaret-y-k-woo",
    "p": null,
    "c": 1
   },
   {
    "n": "Marguerite Matherne",
    "s": "marguerite-matherne",
    "p": null,
    "c": 1
   },
   {
    "n": "Maria Ivanova",
    "s": "maria-ivanova",
    "p": null,
    "c": 6
   },
   {
    "n": "Mariana Levi",
    "s": "mariana-levi",
    "p": null,
    "c": 0
   },
   {
    "n": "Mario Nascimento",
    "s": "mario-nascimento",
    "p": null,
    "c": 1
   },
   {
    "n": "Mark Esposito",
    "s": "mark-esposito",
    "p": null,
    "c": 1
   },
   {
    "n": "Mark Huselid",
    "s": "mark-huselid",
    "p": null,
    "c": 2
   },
   {
    "n": "Mark Martin",
    "s": "mark-martin",
    "p": null,
    "c": 1
   },
   {
    "n": "Mark Miller",
    "s": "mark-miller",
    "p": null,
    "c": 1
   },
   {
    "n": "Mark Patterson",
    "s": "mark-patterson",
    "p": null,
    "c": 3
   },
   {
    "n": "Mark Wells",
    "s": "mark-wells",
    "p": null,
    "c": 1
   },
   {
    "n": "Mark Williams",
    "s": "mark-williams",
    "p": null,
    "c": 6
   },
   {
    "n": "Martha Davis",
    "s": "martha-davis",
    "p": null,
    "c": 1
   },
   {
    "n": "Martha F. Davis",
    "s": "martha-f-davis",
    "p": null,
    "c": 3
   },
   {
    "n": "Marvin Onabajo",
    "s": "marvin-onabajo",
    "p": null,
    "c": 1
   },
   {
    "n": "Mary Jo Ondrechen",
    "s": "mary-jo-ondrechen",
    "p": null,
    "c": 8
   },
   {
    "n": "Mathew Yarossi",
    "s": "mathew-yarossi",
    "p": null,
    "c": 2
   },
   {
    "n": "Matteo Chinazzi",
    "s": "matteo-chinazzi",
    "p": null,
    "c": 4
   },
   {
    "n": "Matteo Rinaldi",
    "s": "matteo-rinaldi",
    "p": null,
    "c": 5
   },
   {
    "n": "Matthew B. Ross",
    "s": "matthew-b-ross",
    "p": null,
    "c": 0
   },
   {
    "n": "Matthew Goodwin",
    "s": "matthew-goodwin",
    "p": null,
    "c": 3
   },
   {
    "n": "Matthew Hunt",
    "s": "matthew-hunt",
    "p": null,
    "c": 2
   },
   {
    "n": "Matthew J. Eckelman",
    "s": "matthew-j-eckelman",
    "p": null,
    "c": 3
   },
   {
    "n": "Matthew Lee",
    "s": "matthew-lee",
    "p": null,
    "c": 1
   },
   {
    "n": "Matthew Miller",
    "s": "matthew-miller",
    "p": null,
    "c": 1
   },
   {
    "n": "Matthias Felleisen",
    "s": "matthias-felleisen",
    "p": null,
    "c": 4
   },
   {
    "n": "Maura Coughlin",
    "s": "maura-coughlin",
    "p": null,
    "c": 1
   },
   {
    "n": "Mauricio Santillana",
    "s": "mauricio-santillana",
    "p": null,
    "c": 8
   },
   {
    "n": "Max Abrahms",
    "s": "max-abrahms",
    "p": null,
    "c": 4
   },
   {
    "n": "Max Bi",
    "s": "max-bi",
    "p": null,
    "c": 2
   },
   {
    "n": "Max Shepherd",
    "s": "max-shepherd",
    "p": null,
    "c": 1
   },
   {
    "n": "Maxim Braverman",
    "s": "maxim-braverman",
    "p": null,
    "c": 1
   },
   {
    "n": "Meg Heckman",
    "s": "meg-heckman",
    "p": null,
    "c": 1
   },
   {
    "n": "Megan Hofmann",
    "s": "megan-hofmann",
    "p": null,
    "c": 10
   },
   {
    "n": "Mehdi Behroozi",
    "s": "mehdi-behroozi",
    "p": null,
    "c": 1
   },
   {
    "n": "Meica Magnani",
    "s": "meica-magnani",
    "p": null,
    "c": 1
   },
   {
    "n": "Melanie Tory",
    "s": "melanie-tory",
    "p": null,
    "c": 1
   },
   {
    "n": "Melissa Parenti",
    "s": "melissa-parenti",
    "p": null,
    "c": 1
   },
   {
    "n": "Meni Wanunu",
    "s": "meni-wanunu",
    "p": null,
    "c": 8
   },
   {
    "n": "Meryl Alper",
    "s": "meryl-alper",
    "p": null,
    "c": 1
   },
   {
    "n": "Micah McCauley",
    "s": "micah-mccauley",
    "p": null,
    "c": 2
   },
   {
    "n": "Michael Arnold Mages",
    "s": "michael-arnold-mages",
    "p": null,
    "c": 3
   },
   {
    "n": "Michael Delichatsios",
    "s": "michael-delichatsios",
    "p": null,
    "c": 1
   },
   {
    "n": "Michael Everett",
    "s": "michael-everett",
    "p": null,
    "c": 5
   },
   {
    "n": "Michael Kane",
    "s": "michael-kane",
    "p": null,
    "c": 2
   },
   {
    "n": "Michael Marcus",
    "s": "michael-marcus",
    "p": null,
    "c": 1
   },
   {
    "n": "Michael Pollastri",
    "s": "michael-pollastri",
    "p": null,
    "c": 2
   },
   {
    "n": "Michael Shah",
    "s": "michael-shah",
    "p": null,
    "c": 1
   },
   {
    "n": "Michael Wan",
    "s": "michael-wan",
    "p": null,
    "c": 2
   },
   {
    "n": "Michal Aibin",
    "s": "michal-aibin",
    "p": null,
    "c": 9
   },
   {
    "n": "Michele Di Pierro",
    "s": "michele-di-pierro",
    "p": null,
    "c": 3
   },
   {
    "n": "Michele Polese",
    "s": "michele-polese",
    "p": null,
    "c": 7
   },
   {
    "n": "Michelle Borkin",
    "s": "michelle-borkin",
    "p": null,
    "c": 5
   },
   {
    "n": "Milan Yakimov",
    "s": "milan-yakimov",
    "p": null,
    "c": 1
   },
   {
    "n": "Milica Stojanovic",
    "s": "milica-stojanovic",
    "p": null,
    "c": 3
   },
   {
    "n": "Mindy Marks",
    "s": "mindy-marks",
    "p": null,
    "c": 0
   },
   {
    "n": "Ming Su",
    "s": "ming-su",
    "p": null,
    "c": 1
   },
   {
    "n": "Ming Wang",
    "s": "ming-wang",
    "p": null,
    "c": 1
   },
   {
    "n": "Mirek Riedewald",
    "s": "mirek-riedewald",
    "p": null,
    "c": 5
   },
   {
    "n": "Miriam Leeser",
    "s": "miriam-leeser",
    "p": null,
    "c": 1
   },
   {
    "n": "Misha Pavel",
    "s": "misha-pavel",
    "p": null,
    "c": 1
   },
   {
    "n": "Miso Kim",
    "s": "miso-kim",
    "p": null,
    "c": 3
   },
   {
    "n": "MiYoung Kwon",
    "s": "miyoung-kwon",
    "p": null,
    "c": 3
   },
   {
    "n": "Mohammad E. Taslim",
    "s": "mohammad-e-taslim",
    "p": null,
    "c": 1
   },
   {
    "n": "Mohammad Khoshnevisan",
    "s": "mohammad-khoshnevisan",
    "p": null,
    "c": 1
   },
   {
    "n": "Mohsen Moghaddam",
    "s": "mohsen-moghaddam",
    "p": null,
    "c": 2
   },
   {
    "n": "Moira Zellner",
    "s": "moira-zellner",
    "p": null,
    "c": 4
   },
   {
    "n": "Mona Minkara",
    "s": "mona-minkara",
    "p": null,
    "c": 2
   },
   {
    "n": "Moneesh Upmanyu",
    "s": "moneesh-upmanyu",
    "p": null,
    "c": 1
   },
   {
    "n": "Monica Borgida",
    "s": "monica-borgida",
    "p": null,
    "c": 1
   },
   {
    "n": "Monique Theriault",
    "s": "monique-theriault",
    "p": null,
    "c": 1
   },
   {
    "n": "Muhammad Noor E Alam",
    "s": "muhammad-noor-e-alam",
    "p": null,
    "c": 1
   },
   {
    "n": "Murray Forman",
    "s": "murray-forman",
    "p": null,
    "c": 2
   },
   {
    "n": "Mya Poe",
    "s": "mya-poe",
    "p": null,
    "c": 2
   },
   {
    "n": "Myojung Chung",
    "s": "myojung-chung",
    "p": null,
    "c": 1
   },
   {
    "n": "N. Fadeke Castor",
    "s": "n-fadeke-castor",
    "p": null,
    "c": 1
   },
   {
    "n": "Nada Sanders",
    "s": "nada-sanders",
    "p": null,
    "c": 7
   },
   {
    "n": "Nalini Ghuman",
    "s": "nalini-ghuman",
    "p": null,
    "c": 1
   },
   {
    "n": "Natalee Kēhaulani Bauer",
    "s": "natalee-kehaulani-bauer",
    "p": null,
    "c": 1
   },
   {
    "n": "Natasha Frost",
    "s": "natasha-frost",
    "p": null,
    "c": 1
   },
   {
    "n": "Neal Lerner",
    "s": "neal-lerner",
    "p": null,
    "c": 1
   },
   {
    "n": "Needa Brown",
    "s": "needa-brown",
    "p": null,
    "c": 3
   },
   {
    "n": "Neel S. Joshi",
    "s": "neel-s-joshi",
    "p": null,
    "c": 2
   },
   {
    "n": "Neha Gothe",
    "s": "neha-gothe",
    "p": null,
    "c": 1
   },
   {
    "n": "Neil Kleiman",
    "s": "neil-kleiman",
    "p": null,
    "c": 1
   },
   {
    "n": "Niamh Bhalla",
    "s": "niamh-bhalla",
    "p": null,
    "c": 2
   },
   {
    "n": "Nian X. Sun",
    "s": "nian-x-sun",
    "p": null,
    "c": 4
   },
   {
    "n": "Nicholas Brown",
    "s": "nicholas-brown",
    "p": null,
    "c": 1
   }
  ]
 },
 "research-topic": {
  "n": "Research Topic",
  "count": 210,
  "terms": [
   {
    "n": "Africana Studies",
    "s": "africana-studies",
    "p": null,
    "c": 3
   },
   {
    "n": "Aging",
    "s": "aging",
    "p": null,
    "c": 3
   },
   {
    "n": "Agriculture",
    "s": "agriculture",
    "p": null,
    "c": 1
   },
   {
    "n": "Anthropology",
    "s": "anthropology",
    "p": null,
    "c": 3
   },
   {
    "n": "Arabic",
    "s": "arabic",
    "p": null,
    "c": 2
   },
   {
    "n": "Architecture",
    "s": "architecture",
    "p": null,
    "c": 6
   },
   {
    "n": "Art",
    "s": "art",
    "p": null,
    "c": 1
   },
   {
    "n": "Art and Design",
    "s": "art-and-design",
    "p": null,
    "c": 24
   },
   {
    "n": "Art History",
    "s": "art-history",
    "p": null,
    "c": 2
   },
   {
    "n": "Arthritis",
    "s": "arthritis",
    "p": null,
    "c": 0
   },
   {
    "n": "Artificial Intelligence",
    "s": "artificial-intelligence",
    "p": null,
    "c": 90
   },
   {
    "n": "Astronomy",
    "s": "astronomy",
    "p": null,
    "c": 5
   },
   {
    "n": "Astrophysics",
    "s": "astrophysics",
    "p": null,
    "c": 1
   },
   {
    "n": "Autism",
    "s": "autism",
    "p": null,
    "c": 0
   },
   {
    "n": "Automotive",
    "s": "automotive",
    "p": null,
    "c": 0
   },
   {
    "n": "Awards",
    "s": "awards",
    "p": null,
    "c": 1
   },
   {
    "n": "Biochemistry",
    "s": "biochemistry",
    "p": null,
    "c": 0
   },
   {
    "n": "Biocomputing",
    "s": "biocomputing",
    "p": null,
    "c": 0
   },
   {
    "n": "Biodiversity",
    "s": "biodiversity",
    "p": null,
    "c": 0
   },
   {
    "n": "Bioengineering",
    "s": "bioengineering",
    "p": null,
    "c": 23
   },
   {
    "n": "Biology",
    "s": "biology",
    "p": null,
    "c": 155
   },
   {
    "n": "Biomaterials",
    "s": "biomaterials",
    "p": null,
    "c": 0
   },
   {
    "n": "Biomechanics",
    "s": "biomechanics",
    "p": null,
    "c": 0
   },
   {
    "n": "Biophysics",
    "s": "biophysics",
    "p": null,
    "c": 1
   },
   {
    "n": "Biotechnology",
    "s": "biotechnology",
    "p": null,
    "c": 7
   },
   {
    "n": "Blockchain",
    "s": "blockchain",
    "p": null,
    "c": 0
   },
   {
    "n": "Book Bans",
    "s": "book-bans",
    "p": null,
    "c": 0
   },
   {
    "n": "Book Launch",
    "s": "book-launch",
    "p": null,
    "c": 0
   },
   {
    "n": "Boston Globe",
    "s": "boston-globe",
    "p": null,
    "c": 0
   },
   {
    "n": "Business",
    "s": "business",
    "p": null,
    "c": 119
   },
   {
    "n": "Call for Papers",
    "s": "call-for-papers",
    "p": null,
    "c": 0
   },
   {
    "n": "Cancer",
    "s": "cancer",
    "p": null,
    "c": 0
   },
   {
    "n": "Cannabis",
    "s": "cannabis",
    "p": null,
    "c": 0
   },
   {
    "n": "CBD",
    "s": "cbd",
    "p": null,
    "c": 0
   },
   {
    "n": "Center for the Future of Higher Education and Talent Strategy",
    "s": "center-for-the-future-of-higher-education-and-talent-strategy",
    "p": null,
    "c": 0
   },
   {
    "n": "Chemical Biology",
    "s": "chemical-biology",
    "p": null,
    "c": 3
   },
   {
    "n": "Chemical Engineering",
    "s": "chemical-engineering",
    "p": null,
    "c": 5
   },
   {
    "n": "Chemistry",
    "s": "chemistry",
    "p": null,
    "c": 121
   },
   {
    "n": "Chinese",
    "s": "chinese",
    "p": null,
    "c": 1
   },
   {
    "n": "Climate Change",
    "s": "climate-change",
    "p": null,
    "c": 58
   },
   {
    "n": "Communications",
    "s": "communications",
    "p": null,
    "c": 10
   },
   {
    "n": "Computer Engineering",
    "s": "computer-engineering",
    "p": null,
    "c": 0
   },
   {
    "n": "Computer Science",
    "s": "computer-science",
    "p": null,
    "c": 581
   },
   {
    "n": "Conference",
    "s": "conference",
    "p": null,
    "c": 0
   },
   {
    "n": "Consciousness",
    "s": "consciousness",
    "p": null,
    "c": 0
   },
   {
    "n": "COVID-19",
    "s": "covid-19",
    "p": null,
    "c": 3
   },
   {
    "n": "Creative Writing",
    "s": "creative-writing",
    "p": null,
    "c": 5
   },
   {
    "n": "Criminology",
    "s": "criminology",
    "p": null,
    "c": 10
   },
   {
    "n": "Cultural Studies",
    "s": "cultural-studies",
    "p": null,
    "c": 1
   },
   {
    "n": "Cultural Taxation",
    "s": "cultural-taxation",
    "p": null,
    "c": 0
   },
   {
    "n": "Cybersecurity",
    "s": "cybersecurity",
    "p": null,
    "c": 48
   },
   {
    "n": "Dance",
    "s": "dance",
    "p": null,
    "c": 2
   },
   {
    "n": "DARPA",
    "s": "darpa",
    "p": null,
    "c": 0
   },
   {
    "n": "Diagnosis",
    "s": "diagnosis",
    "p": null,
    "c": 0
   },
   {
    "n": "Differential Geometry",
    "s": "differential-geometry",
    "p": null,
    "c": 1
   },
   {
    "n": "digitalization",
    "s": "digitalization",
    "p": null,
    "c": 1
   },
   {
    "n": "Disability Studies",
    "s": "disability-studies",
    "p": null,
    "c": 6
   },
   {
    "n": "Diversity and Inclusion",
    "s": "diversity-and-inclusion",
    "p": null,
    "c": 2
   },
   {
    "n": "DNA",
    "s": "dna",
    "p": null,
    "c": 0
   },
   {
    "n": "Economics",
    "s": "economics",
    "p": null,
    "c": 21
   },
   {
    "n": "Education",
    "s": "education",
    "p": null,
    "c": 58
   },
   {
    "n": "Electrical Engineering",
    "s": "electrical-engineering",
    "p": null,
    "c": 44
   },
   {
    "n": "Electrochemistry",
    "s": "electrochemistry",
    "p": null,
    "c": 0
   },
   {
    "n": "Electronic Waste",
    "s": "electronic-waste",
    "p": null,
    "c": 0
   },
   {
    "n": "Emotion",
    "s": "emotion",
    "p": null,
    "c": 0
   },
   {
    "n": "Engineering",
    "s": "engineering",
    "p": null,
    "c": 220
   },
   {
    "n": "English",
    "s": "english",
    "p": null,
    "c": 20
   },
   {
    "n": "Environmental Engineering",
    "s": "environmental-engineering",
    "p": null,
    "c": 2
   },
   {
    "n": "Environmental Science",
    "s": "environmental-science",
    "p": null,
    "c": 26
   },
   {
    "n": "Equity",
    "s": "equity",
    "p": null,
    "c": 0
   },
   {
    "n": "Evolution",
    "s": "evolution",
    "p": null,
    "c": 0
   },
   {
    "n": "Exercise",
    "s": "exercise",
    "p": null,
    "c": 1
   },
   {
    "n": "Fashion",
    "s": "fashion",
    "p": null,
    "c": 0
   },
   {
    "n": "Fentanyl",
    "s": "fentanyl",
    "p": null,
    "c": 0
   },
   {
    "n": "Fiction",
    "s": "fiction",
    "p": null,
    "c": 0
   },
   {
    "n": "Finance",
    "s": "finance",
    "p": null,
    "c": 1
   },
   {
    "n": "Fire Science",
    "s": "fire-science",
    "p": null,
    "c": 0
   },
   {
    "n": "Firearms",
    "s": "firearms",
    "p": null,
    "c": 0
   },
   {
    "n": "Fisheries",
    "s": "fisheries",
    "p": null,
    "c": 0
   },
   {
    "n": "Fitness",
    "s": "fitness",
    "p": null,
    "c": 0
   },
   {
    "n": "Fluid Dynamics",
    "s": "fluid-dynamics",
    "p": null,
    "c": 0
   },
   {
    "n": "Food Safety",
    "s": "food-safety",
    "p": null,
    "c": 2
   },
   {
    "n": "Forbes",
    "s": "forbes",
    "p": null,
    "c": 0
   },
   {
    "n": "Fossil Fuels",
    "s": "fossil-fuels",
    "p": null,
    "c": 0
   },
   {
    "n": "Game Design",
    "s": "game-design",
    "p": null,
    "c": 2
   },
   {
    "n": "Gender",
    "s": "gender",
    "p": null,
    "c": 1
   },
   {
    "n": "Genetics",
    "s": "genetics",
    "p": null,
    "c": 7
   },
   {
    "n": "Genomics",
    "s": "genomics",
    "p": null,
    "c": 0
   },
   {
    "n": "Geology",
    "s": "geology",
    "p": null,
    "c": 1
   },
   {
    "n": "Government",
    "s": "government",
    "p": null,
    "c": 0
   },
   {
    "n": "Graphic",
    "s": "graphic",
    "p": null,
    "c": 0
   },
   {
    "n": "Graphic Novels",
    "s": "graphic-novels",
    "p": null,
    "c": 1
   },
   {
    "n": "Gut Health",
    "s": "gut-health",
    "p": null,
    "c": 0
   },
   {
    "n": "Health",
    "s": "health",
    "p": null,
    "c": 1
   },
   {
    "n": "Health Equity",
    "s": "health-equity",
    "p": null,
    "c": 0
   },
   {
    "n": "Health Sciences",
    "s": "health-sciences",
    "p": null,
    "c": 140
   },
   {
    "n": "Healthcare",
    "s": "healthcare",
    "p": null,
    "c": 1
   },
   {
    "n": "History",
    "s": "history",
    "p": null,
    "c": 15
   },
   {
    "n": "History of the Book",
    "s": "history-of-the-book",
    "p": null,
    "c": 0
   },
   {
    "n": "Human Capital",
    "s": "human-capital",
    "p": null,
    "c": 0
   },
   {
    "n": "Human Rights",
    "s": "human-rights",
    "p": null,
    "c": 2
   },
   {
    "n": "Human Services",
    "s": "human-services",
    "p": null,
    "c": 1
   },
   {
    "n": "Human-Computer Interaction",
    "s": "human-computer-interaction",
    "p": null,
    "c": 18
   },
   {
    "n": "Humanities",
    "s": "humanities",
    "p": null,
    "c": 4
   },
   {
    "n": "IEEE",
    "s": "ieee",
    "p": null,
    "c": 0
   },
   {
    "n": "Imaging",
    "s": "imaging",
    "p": null,
    "c": 0
   },
   {
    "n": "Insights@Center for Emerging Markets",
    "s": "insightscenter-for-emerging-markets",
    "p": null,
    "c": 0
   },
   {
    "n": "International Affairs",
    "s": "international-affairs",
    "p": null,
    "c": 2
   },
   {
    "n": "International Business",
    "s": "international-business",
    "p": null,
    "c": 0
   },
   {
    "n": "International Relations",
    "s": "international-relations",
    "p": null,
    "c": 1
   },
   {
    "n": "Internet",
    "s": "internet",
    "p": null,
    "c": 0
   },
   {
    "n": "Interpretation",
    "s": "interpretation",
    "p": null,
    "c": 0
   },
   {
    "n": "Jewish Studies",
    "s": "jewish-studies",
    "p": null,
    "c": 1
   },
   {
    "n": "Journalism",
    "s": "journalism",
    "p": null,
    "c": 6
   },
   {
    "n": "Justice",
    "s": "justice",
    "p": null,
    "c": 1
   },
   {
    "n": "Keynotes",
    "s": "keynotes",
    "p": null,
    "c": 0
   },
   {
    "n": "Labor",
    "s": "labor",
    "p": null,
    "c": 4
   },
   {
    "n": "Language",
    "s": "language",
    "p": null,
    "c": 3
   },
   {
    "n": "Latinx Studies",
    "s": "latinx-studies",
    "p": null,
    "c": 1
   },
   {
    "n": "Law",
    "s": "law",
    "p": null,
    "c": 16
   },
   {
    "n": "LGBTQ+ Studies",
    "s": "lgbtq-studies",
    "p": null,
    "c": 1
   },
   {
    "n": "Library Sciences",
    "s": "library-sciences",
    "p": null,
    "c": 0
   },
   {
    "n": "Linguistics",
    "s": "linguistics",
    "p": null,
    "c": 4
   },
   {
    "n": "Literature",
    "s": "literature",
    "p": null,
    "c": 8
   },
   {
    "n": "Machine Learning",
    "s": "machine-learning",
    "p": null,
    "c": 33
   },
   {
    "n": "Management",
    "s": "management",
    "p": null,
    "c": 1
   },
   {
    "n": "Marine Science",
    "s": "marine-science",
    "p": null,
    "c": 63
   },
   {
    "n": "Marketing",
    "s": "marketing",
    "p": null,
    "c": 3
   },
   {
    "n": "Materials Science",
    "s": "materials-science",
    "p": null,
    "c": 17
   },
   {
    "n": "Mathematics",
    "s": "mathematics",
    "p": null,
    "c": 20
   },
   {
    "n": "Mechanical and Industrial Engineering",
    "s": "mechanical-and-industrial-engineering",
    "p": null,
    "c": 23
   },
   {
    "n": "Medicine",
    "s": "medicine",
    "p": null,
    "c": 2
   },
   {
    "n": "Mental Health",
    "s": "mental-health",
    "p": null,
    "c": 1
   },
   {
    "n": "Michael Delichatsios",
    "s": "michael-delichatsios",
    "p": null,
    "c": 0
   },
   {
    "n": "Military",
    "s": "military",
    "p": null,
    "c": 0
   },
   {
    "n": "mRNA",
    "s": "mrna",
    "p": null,
    "c": 0
   },
   {
    "n": "Multilingualism",
    "s": "multilingualism",
    "p": null,
    "c": 1
   },
   {
    "n": "Music",
    "s": "music",
    "p": null,
    "c": 5
   },
   {
    "n": "Nanomedicine",
    "s": "nanomedicine",
    "p": null,
    "c": 1
   },
   {
    "n": "National Academy of Inventors",
    "s": "national-academy-of-inventors",
    "p": null,
    "c": 0
   },
   {
    "n": "Natural Language Processing",
    "s": "natural-language-processing",
    "p": null,
    "c": 0
   },
   {
    "n": "Neoliberalism",
    "s": "neoliberalism",
    "p": null,
    "c": 0
   },
   {
    "n": "Network Science",
    "s": "network-science",
    "p": null,
    "c": 41
   },
   {
    "n": "Networks",
    "s": "networks",
    "p": null,
    "c": 0
   },
   {
    "n": "Neuroscience",
    "s": "neuroscience",
    "p": null,
    "c": 21
   },
   {
    "n": "NSF",
    "s": "nsf",
    "p": null,
    "c": 0
   },
   {
    "n": "Nutrition",
    "s": "nutrition",
    "p": null,
    "c": 1
   },
   {
    "n": "Ocean Genome Legacy Center",
    "s": "ocean-genome-legacy-center",
    "p": null,
    "c": 0
   },
   {
    "n": "Oligosaccharides",
    "s": "oligosaccharides",
    "p": null,
    "c": 0
   },
   {
    "n": "Opioid Use Disorder",
    "s": "opioid-use-disorder",
    "p": null,
    "c": 0
   },
   {
    "n": "Partnerships",
    "s": "partnerships",
    "p": null,
    "c": 0
   },
   {
    "n": "Pedagogy",
    "s": "pedagogy",
    "p": null,
    "c": 3
   },
   {
    "n": "Perception",
    "s": "perception",
    "p": null,
    "c": 0
   },
   {
    "n": "Performance",
    "s": "performance",
    "p": null,
    "c": 1
   },
   {
    "n": "Perspective",
    "s": "perspective",
    "p": null,
    "c": 0
   },
   {
    "n": "Pharmaceutics",
    "s": "pharmaceutics",
    "p": null,
    "c": 14
   },
   {
    "n": "Philosophy",
    "s": "philosophy",
    "p": null,
    "c": 17
   },
   {
    "n": "Physical Therapy",
    "s": "physical-therapy",
    "p": null,
    "c": 1
   },
   {
    "n": "Physics",
    "s": "physics",
    "p": null,
    "c": 110
   },
   {
    "n": "Physiology",
    "s": "physiology",
    "p": null,
    "c": 1
   },
   {
    "n": "Plastics",
    "s": "plastics",
    "p": null,
    "c": 0
   },
   {
    "n": "Podcast",
    "s": "podcast",
    "p": null,
    "c": 0
   },
   {
    "n": "Political Science",
    "s": "political-science",
    "p": null,
    "c": 13
   },
   {
    "n": "Politics",
    "s": "politics",
    "p": null,
    "c": 2
   },
   {
    "n": "Pollution",
    "s": "pollution",
    "p": null,
    "c": 0
   },
   {
    "n": "Polymers",
    "s": "polymers",
    "p": null,
    "c": 0
   },
   {
    "n": "Popular Culture",
    "s": "popular-culture",
    "p": null,
    "c": 0
   },
   {
    "n": "Privacy",
    "s": "privacy",
    "p": null,
    "c": 0
   },
   {
    "n": "Psycho",
    "s": "psycho",
    "p": null,
    "c": 0
   },
   {
    "n": "Psychology",
    "s": "psychology",
    "p": null,
    "c": 84
   },
   {
    "n": "Public Policy",
    "s": "public-policy",
    "p": null,
    "c": 72
   },
   {
    "n": "Publication",
    "s": "publication",
    "p": null,
    "c": 0
   },
   {
    "n": "Qualitative Research",
    "s": "qualitative-research",
    "p": null,
    "c": 0
   },
   {
    "n": "Quantum Physics",
    "s": "quantum-physics",
    "p": null,
    "c": 1
   },
   {
    "n": "Race",
    "s": "race",
    "p": null,
    "c": 1
   },
   {
    "n": "Race Gender and Sexuality",
    "s": "race-gender-and-sexuality",
    "p": null,
    "c": 2
   },
   {
    "n": "Religion",
    "s": "religion",
    "p": null,
    "c": 6
   },
   {
    "n": "Research Computing",
    "s": "research-computing",
    "p": null,
    "c": 0
   },
   {
    "n": "Resiliency",
    "s": "resiliency",
    "p": null,
    "c": 0
   },
   {
    "n": "Review",
    "s": "review",
    "p": null,
    "c": 0
   },
   {
    "n": "Robotics",
    "s": "robotics",
    "p": null,
    "c": 3
   },
   {
    "n": "Sculpture",
    "s": "sculpture",
    "p": null,
    "c": 0
   },
   {
    "n": "Sea-Level Rise",
    "s": "sea-level-rise",
    "p": null,
    "c": 0
   },
   {
    "n": "SIGCSE",
    "s": "sigcse",
    "p": null,
    "c": 0
   },
   {
    "n": "Sign Language",
    "s": "sign-language",
    "p": null,
    "c": 0
   },
   {
    "n": "SMART Center",
    "s": "smart-center",
    "p": null,
    "c": 0
   },
   {
    "n": "Social Justice",
    "s": "social-justice",
    "p": null,
    "c": 7
   },
   {
    "n": "Social Media",
    "s": "social-media",
    "p": null,
    "c": 1
   },
   {
    "n": "Social Responsibility",
    "s": "social-responsibility",
    "p": null,
    "c": 1
   },
   {
    "n": "Sociology",
    "s": "sociology",
    "p": null,
    "c": 19
   },
   {
    "n": "Solar Energy",
    "s": "solar-energy",
    "p": null,
    "c": 0
   },
   {
    "n": "Spanish",
    "s": "spanish",
    "p": null,
    "c": 3
   },
   {
    "n": "Start Up",
    "s": "start-up",
    "p": null,
    "c": 0
   },
   {
    "n": "Statistics",
    "s": "statistics",
    "p": null,
    "c": 0
   },
   {
    "n": "Strategic Management Society",
    "s": "strategic-management-society",
    "p": null,
    "c": 0
   },
   {
    "n": "Strategy",
    "s": "strategy",
    "p": null,
    "c": 0
   },
   {
    "n": "Subjectivity",
    "s": "subjectivity",
    "p": null,
    "c": 0
   },
   {
    "n": "Supply Chains",
    "s": "supply-chains",
    "p": null,
    "c": 0
   },
   {
    "n": "Sustainability",
    "s": "sustainability",
    "p": null,
    "c": 2
   },
   {
    "n": "Taxes",
    "s": "taxes",
    "p": null,
    "c": 0
   },
   {
    "n": "The Calculus Project",
    "s": "the-calculus-project",
    "p": null,
    "c": 0
   },
   {
    "n": "Ukraine",
    "s": "ukraine",
    "p": null,
    "c": 0
   },
   {
    "n": "Urban Affairs",
    "s": "urban-affairs",
    "p": null,
    "c": 2
   },
   {
    "n": "User Interface",
    "s": "user-interface",
    "p": null,
    "c": 0
   },
   {
    "n": "Vaccines",
    "s": "vaccines",
    "p": null,
    "c": 0
   },
   {
    "n": "Walmart",
    "s": "walmart",
    "p": null,
    "c": 0
   },
   {
    "n": "Weather",
    "s": "weather",
    "p": null,
    "c": 0
   },
   {
    "n": "Women's Gender and Sexuality Studies",
    "s": "womens-gender-and-sexuality-studies",
    "p": null,
    "c": 5
   },
   {
    "n": "Writing",
    "s": "writing",
    "p": null,
    "c": 0
   },
   {
    "n": "Zhu Lab",
    "s": "zhu-lab",
    "p": null,
    "c": 0
   }
  ]
 },
 "department": {
  "n": "Department",
  "count": 97,
  "terms": [
   {
    "n": "Antimicrobial Discovery Center",
    "s": "antimicrobial-discovery-center",
    "p": null,
    "c": 2
   },
   {
    "n": "Art+Design",
    "s": "artdesign",
    "p": "College of Arts, Media & Design",
    "c": 77
   },
   {
    "n": "Barnett Institute for Chemical and Biological Analysis",
    "s": "barnett-institute-for-chemical-and-biological-analysis",
    "p": null,
    "c": 14
   },
   {
    "n": "Bouvé College of Health Sciences",
    "s": "bouve-college-of-health-sciences",
    "p": null,
    "c": 634
   },
   {
    "n": "Campus Recreation",
    "s": "campus-recreation",
    "p": null,
    "c": 14
   },
   {
    "n": "Center for Complex Network Research",
    "s": "center-for-complex-network-research",
    "p": null,
    "c": 3
   },
   {
    "n": "Center for Drug Discovery",
    "s": "center-for-drug-discovery",
    "p": null,
    "c": 4
   },
   {
    "n": "Center for Interdisciplinary Research on Complex Systems",
    "s": "center-for-interdisciplinary-research-on-complex-systems",
    "p": null,
    "c": 1
   },
   {
    "n": "Center for Law",
    "s": "center-for-law",
    "p": null,
    "c": 0
   },
   {
    "n": "Center for Research Innovation",
    "s": "center-for-research-innovation",
    "p": null,
    "c": 2
   },
   {
    "n": "Charlotte campus",
    "s": "charlotte-campus",
    "p": null,
    "c": 3
   },
   {
    "n": "Civil Rights and Restorative Justice Project",
    "s": "civil-rights-and-restorative-justice-project",
    "p": null,
    "c": 4
   },
   {
    "n": "College of Arts, Media & Design",
    "s": "college-of-arts-media-design",
    "p": null,
    "c": 508
   },
   {
    "n": "College of Business Administration",
    "s": "college-of-business-administration",
    "p": null,
    "c": 206
   },
   {
    "n": "College of Engineering",
    "s": "college-of-engineering",
    "p": null,
    "c": 903
   },
   {
    "n": "College of Professional Studies",
    "s": "college-of-professional-studies",
    "p": null,
    "c": 82
   },
   {
    "n": "College of Science",
    "s": "college-of-science",
    "p": null,
    "c": 1036
   },
   {
    "n": "College of Social Sciences & Humanities",
    "s": "college-of-social-sciences-humanities",
    "p": null,
    "c": 889
   },
   {
    "n": "Communication Studies",
    "s": "communication-studies-college-of-arts-media-design",
    "p": "College of Arts, Media & Design",
    "c": 83
   },
   {
    "n": "D'Amore-McKim School of Business",
    "s": "damore-mckim-school-of-business",
    "p": null,
    "c": 257
   },
   {
    "n": "Department of African American Studies",
    "s": "department-of-african-american-studies",
    "p": null,
    "c": 6
   },
   {
    "n": "Department of Applied Psychology",
    "s": "department-of-applied-psychology",
    "p": "Bouvé College of Health Sciences",
    "c": 51
   },
   {
    "n": "Department of Bioengineering",
    "s": "department-of-bioengineering",
    "p": "College of Engineering",
    "c": 104
   },
   {
    "n": "Department of Biology",
    "s": "department-of-biology",
    "p": "College of Science",
    "c": 140
   },
   {
    "n": "Department of Chemical Engineering",
    "s": "department-of-chemical-engineering",
    "p": "College of Engineering",
    "c": 113
   },
   {
    "n": "Department of Chemistry and Chemical Biology",
    "s": "department-of-chemistry-and-chemical-biology",
    "p": "College of Science",
    "c": 185
   },
   {
    "n": "Department of Civil and Environmental Engineering",
    "s": "department-of-civil-and-environmental-engineering",
    "p": "College of Engineering",
    "c": 130
   },
   {
    "n": "Department of Communication Sciences and Disorders",
    "s": "department-of-communication-sciences-and-disorders",
    "p": "Bouvé College of Health Sciences",
    "c": 20
   },
   {
    "n": "Department of Cultures, Societies and Global Studies",
    "s": "department-of-cultures-societies-and-global-studies",
    "p": "College of Social Sciences & Humanities",
    "c": 7
   },
   {
    "n": "Department of Earth and Environmental Studies",
    "s": "department-of-earth-and-environmental-studies",
    "p": null,
    "c": 4
   },
   {
    "n": "Department of Economics",
    "s": "department-of-economics",
    "p": "College of Social Sciences & Humanities",
    "c": 53
   },
   {
    "n": "Department of Electrical and Computer Engineering",
    "s": "department-of-electrical-and-computer-engineering",
    "p": "College of Engineering",
    "c": 281
   },
   {
    "n": "Department of English",
    "s": "department-of-english",
    "p": "College of Social Sciences & Humanities",
    "c": 65
   },
   {
    "n": "Department of Health Sciences",
    "s": "department-of-health-sciences-bouve-college-of-health-sciences",
    "p": "Bouvé College of Health Sciences",
    "c": 27
   },
   {
    "n": "Department of Health Sciences",
    "s": "department-of-health-sciences",
    "p": null,
    "c": 3
   },
   {
    "n": "Department of History",
    "s": "department-of-history",
    "p": null,
    "c": 13
   },
   {
    "n": "Department of History",
    "s": "department-of-history-college-of-social-sciences-humanities",
    "p": "College of Social Sciences & Humanities",
    "c": 14
   },
   {
    "n": "Department of Languages Literatures and Cultures",
    "s": "languages-literatures-and-cultures",
    "p": "College of Social Sciences & Humanities",
    "c": 8
   },
   {
    "n": "Department of Marine and Environmental Sciences",
    "s": "department-of-marine-and-environmental-sciences",
    "p": "College of Science",
    "c": 177
   },
   {
    "n": "Department of Mathematics",
    "s": "department-of-mathematics",
    "p": "College of Science",
    "c": 41
   },
   {
    "n": "Department of Mechanical and Industrial Engineering",
    "s": "department-of-mechanical-and-industrial-engineering",
    "p": "College of Engineering",
    "c": 170
   },
   {
    "n": "Department of Medical Sciences",
    "s": "department-of-medical-sciences",
    "p": "Bouvé College of Health Sciences",
    "c": 7
   },
   {
    "n": "Department of Music",
    "s": "department-of-music",
    "p": "College of Arts, Media & Design",
    "c": 44
   },
   {
    "n": "Department of Pharmaceutical Sciences",
    "s": "department-of-pharmaceutical-sciences-bouve-college-of-health-sciences",
    "p": "Bouvé College of Health Sciences",
    "c": 86
   },
   {
    "n": "Department of Philosophy",
    "s": "department-of-philosophy",
    "p": "College of Social Sciences & Humanities",
    "c": 28
   },
   {
    "n": "Department of Philosophy and Religion",
    "s": "department-of-philosophy-and-religion-college-of-social-sciences-humanities",
    "p": "College of Social Sciences & Humanities",
    "c": 26
   },
   {
    "n": "Department of Philosophy and Religion",
    "s": "department-of-philosophy-and-religion",
    "p": null,
    "c": 5
   },
   {
    "n": "Department of Physical Therapy",
    "s": "department-of-physical-therapy",
    "p": "Bouvé College of Health Sciences",
    "c": 57
   },
   {
    "n": "Department of Physics",
    "s": "department-of-physics",
    "p": "College of Science",
    "c": 271
   },
   {
    "n": "Department of Political Science",
    "s": "department-of-political-science",
    "p": "College of Social Sciences & Humanities",
    "c": 181
   },
   {
    "n": "Department of Psychology",
    "s": "department-of-psychology",
    "p": "College of Science",
    "c": 196
   },
   {
    "n": "Department of Sociology",
    "s": "department-of-sociology",
    "p": "College of Social Sciences & Humanities",
    "c": 35
   },
   {
    "n": "Department of Speech-Language Pathology & Audiology",
    "s": "department-of-speech-language-pathology-audiology",
    "p": "Bouvé College of Health Sciences",
    "c": 9
   },
   {
    "n": "Department of Theatre",
    "s": "department-of-theatre",
    "p": "College of Arts, Media & Design",
    "c": 27
   },
   {
    "n": "Dukakis Center for Urban and Regional Policy",
    "s": "dukakis-center-for-urban-and-regional-policy",
    "p": null,
    "c": 1
   },
   {
    "n": "ethics and political philosophy",
    "s": "ethics-and-political-philosophy",
    "p": null,
    "c": 0
   },
   {
    "n": "Experiential AI Institute",
    "s": "experiential-ai-institute",
    "p": null,
    "c": 50
   },
   {
    "n": "Global Resilience Institute",
    "s": "global-resilience-institute",
    "p": null,
    "c": 14
   },
   {
    "n": "Graduate School of Education",
    "s": "graduate-school-of-education",
    "p": "College of Professional Studies",
    "c": 3
   },
   {
    "n": "Information and Creativity",
    "s": "information-and-creativity",
    "p": null,
    "c": 1
   },
   {
    "n": "Innovation Campus in Burlington Massachusetts",
    "s": "innovation-campus-in-burlington-massachusetts",
    "p": null,
    "c": 9
   },
   {
    "n": "Institute for Chemical Imaging of Living Systems",
    "s": "institute-for-chemical-imaging-of-living-systems",
    "p": null,
    "c": 1
   },
   {
    "n": "Institute for Experiential Robotics",
    "s": "institute-for-experiential-robotics",
    "p": null,
    "c": 20
   },
   {
    "n": "Institute for the Wireless Internet of Things",
    "s": "institute-for-the-wireless-internet-of-things",
    "p": null,
    "c": 4
   },
   {
    "n": "Institute on Urban Health Research",
    "s": "institute-on-urban-health-research-bouve-college-of-health-sciences",
    "p": "Bouvé College of Health Sciences",
    "c": 4
   },
   {
    "n": "International Affairs Program",
    "s": "international-affairs-program",
    "p": "College of Social Sciences & Humanities",
    "c": 27
   },
   {
    "n": "Jewish Studies Program",
    "s": "jewish-studies-program",
    "p": "College of Social Sciences & Humanities",
    "c": 6
   },
   {
    "n": "John D. O'Bryant African American Institute",
    "s": "john-d-obryant-african-american-institute",
    "p": null,
    "c": 2
   },
   {
    "n": "Khoury College of Computer Sciences",
    "s": "khoury-college-of-computer-sciences",
    "p": null,
    "c": 973
   },
   {
    "n": "Kostas Research Institute",
    "s": "kostas-research-institute",
    "p": null,
    "c": 1
   },
   {
    "n": "Linguistics Program",
    "s": "linguistics-program",
    "p": "College of Science",
    "c": 4
   },
   {
    "n": "Marine Science Center",
    "s": "marine-science-center",
    "p": "Department of Marine and Environmental Sciences",
    "c": 82
   },
   {
    "n": "Marketing and Communications",
    "s": "marketing-and-communications",
    "p": null,
    "c": 6
   },
   {
    "n": "Media and Screen Studies",
    "s": "media-and-screen-studies-college-of-arts-media-design",
    "p": "College of Arts, Media & Design",
    "c": 6
   },
   {
    "n": "military",
    "s": "military",
    "p": null,
    "c": 4
   },
   {
    "n": "Mills College",
    "s": "mills-college",
    "p": null,
    "c": 34
   },
   {
    "n": "NCH at Northeastern",
    "s": "nch-at-northeastern",
    "p": null,
    "c": 18
   },
   {
    "n": "Network Science Institute",
    "s": "network-science-institute",
    "p": null,
    "c": 126
   },
   {
    "n": "Northeastern University London",
    "s": "northeastern-university-london",
    "p": null,
    "c": 50
   },
   {
    "n": "Research Computing",
    "s": "research-computing",
    "p": "Khoury College of Computer Sciences",
    "c": 1
   },
   {
    "n": "San Francisco campus",
    "s": "san-francisco-campus",
    "p": null,
    "c": 2
   },
   {
    "n": "School of Architecture",
    "s": "school-of-architecture",
    "p": "College of Arts, Media & Design",
    "c": 45
   },
   {
    "n": "School of Criminology and Criminal Justice",
    "s": "school-of-criminology-and-criminal-justice",
    "p": "School of Law",
    "c": 46
   },
   {
    "n": "School of Journalism",
    "s": "school-of-journalism",
    "p": "College of Arts, Media & Design",
    "c": 108
   },
   {
    "n": "School of Law",
    "s": "school-of-law",
    "p": null,
    "c": 359
   },
   {
    "n": "School of Nursing",
    "s": "school-of-nursing",
    "p": "Bouvé College of Health Sciences",
    "c": 53
   },
   {
    "n": "School of Pharmacy",
    "s": "school-of-pharmacy",
    "p": "Bouvé College of Health Sciences",
    "c": 62
   },
   {
    "n": "School of Public Policy & Urban Affairs",
    "s": "school-of-public-policy-urban-affairs",
    "p": "College of Social Sciences & Humanities",
    "c": 133
   },
   {
    "n": "Seattle campus",
    "s": "seattle-campus",
    "p": null,
    "c": 8
   },
   {
    "n": "Seen Around Northeastern",
    "s": "seen-around-northeastern",
    "p": null,
    "c": 4
   },
   {
    "n": "Silicon Valley campus",
    "s": "silicon-valley-campus",
    "p": null,
    "c": 4
   },
   {
    "n": "Social Enterprise Institute",
    "s": "social-enterprise-institute",
    "p": "College of Business Administration",
    "c": 5
   },
   {
    "n": "Sport in Society",
    "s": "sport-in-society",
    "p": null,
    "c": 5
   },
   {
    "n": "The Roux Institute at Northeastern",
    "s": "the-roux-institute-at-northeastern",
    "p": null,
    "c": 32
   },
   {
    "n": "Toronto campus",
    "s": "toronto-campus",
    "p": null,
    "c": 4
   },
   {
    "n": "Women's Gender and Sexuality Studies",
    "s": "womens-gender-and-sexuality-studies",
    "p": "College of Social Sciences & Humanities",
    "c": 15
   },
   {
    "n": "World Languages Center",
    "s": "world-languages-center",
    "p": "College of Social Sciences & Humanities",
    "c": 3
   }
  ]
 },
 "campus": {
  "n": "Campus",
  "count": 15,
  "terms": [
   {
    "n": "Arlington",
    "s": "arlington",
    "p": null,
    "c": 17
   },
   {
    "n": "Boston",
    "s": "boston",
    "p": null,
    "c": 241
   },
   {
    "n": "Burlington",
    "s": "burlington",
    "p": null,
    "c": 12
   },
   {
    "n": "Charlotte",
    "s": "charlotte",
    "p": null,
    "c": 21
   },
   {
    "n": "Fall River",
    "s": "fall-river",
    "p": null,
    "c": 12
   },
   {
    "n": "London",
    "s": "london",
    "p": null,
    "c": 69
   },
   {
    "n": "Miami",
    "s": "miami",
    "p": null,
    "c": 17
   },
   {
    "n": "Nahant",
    "s": "nahant",
    "p": null,
    "c": 15
   },
   {
    "n": "New York City",
    "s": "new-york-city",
    "p": null,
    "c": 9
   },
   {
    "n": "Oakland",
    "s": "oakland",
    "p": null,
    "c": 82
   },
   {
    "n": "Portland",
    "s": "portland",
    "p": null,
    "c": 26
   },
   {
    "n": "Seattle",
    "s": "seattle",
    "p": null,
    "c": 24
   },
   {
    "n": "Silicon Valley",
    "s": "silicon-valley",
    "p": null,
    "c": 21
   },
   {
    "n": "Toronto",
    "s": "toronto",
    "p": null,
    "c": 20
   },
   {
    "n": "Vancouver",
    "s": "vancouver",
    "p": null,
    "c": 21
   }
  ]
 },
 "kicker": {
  "n": "Kicker Category",
  "count": 13,
  "terms": [
   {
    "n": "Art Scene",
    "s": "art-scene",
    "p": null,
    "c": 18
   },
   {
    "n": "Best of 2025",
    "s": "best-of-2025",
    "p": null,
    "c": 14
   },
   {
    "n": "Final",
    "s": "final",
    "p": "World Cup 2026",
    "c": 7
   },
   {
    "n": "First stage",
    "s": "first-stage",
    "p": "World Cup 2026",
    "c": 24
   },
   {
    "n": "One place to visit in...",
    "s": "one-place-to-visit-in",
    "p": null,
    "c": 24
   },
   {
    "n": "Perk of the Week",
    "s": "perk-of-the-week",
    "p": null,
    "c": 26
   },
   {
    "n": "Preview",
    "s": "preview",
    "p": "World Cup 2026",
    "c": 5
   },
   {
    "n": "Quarter-final",
    "s": "quarter-final",
    "p": "World Cup 2026",
    "c": 7
   },
   {
    "n": "Round of 16",
    "s": "round-of-16",
    "p": "World Cup 2026",
    "c": 8
   },
   {
    "n": "Round of 32",
    "s": "round-of-32",
    "p": "World Cup 2026",
    "c": 13
   },
   {
    "n": "Semi-final",
    "s": "semi-final",
    "p": "World Cup 2026",
    "c": 3
   },
   {
    "n": "Trivia",
    "s": "trivia",
    "p": null,
    "c": 74
   },
   {
    "n": "World Cup 2026",
    "s": "world-cup-2026",
    "p": null,
    "c": 68
   }
  ]
 },
 "category": {
  "n": "Category",
  "count": 12,
  "terms": [
   {
    "n": "Arts & Entertainment",
    "s": "arts-entertainment",
    "p": null,
    "c": 857
   },
   {
    "n": "Business",
    "s": "business",
    "p": null,
    "c": 668
   },
   {
    "n": "Digital Projects",
    "s": "digital-projects",
    "p": null,
    "c": 74
   },
   {
    "n": "Health",
    "s": "health",
    "p": null,
    "c": 893
   },
   {
    "n": "Law",
    "s": "law",
    "p": null,
    "c": 352
   },
   {
    "n": "Lifestyle",
    "s": "lifestyle",
    "p": null,
    "c": 116
   },
   {
    "n": "Research",
    "s": "research",
    "p": null,
    "c": 898
   },
   {
    "n": "Science & Technology",
    "s": "science-technology",
    "p": null,
    "c": 2527
   },
   {
    "n": "Society & Culture",
    "s": "society-culture",
    "p": null,
    "c": 3107
   },
   {
    "n": "Sports",
    "s": "sports",
    "p": null,
    "c": 826
   },
   {
    "n": "University News",
    "s": "university-news",
    "p": null,
    "c": 8072
   },
   {
    "n": "World & National News",
    "s": "world-news",
    "p": null,
    "c": 1476
   }
  ]
 },
 "article-format": {
  "n": "Article Format",
  "count": 11,
  "terms": [
   {
    "n": "Data Visualization",
    "s": "data-visualization",
    "p": null,
    "c": 25
   },
   {
    "n": "Digital Blank",
    "s": "digital-blank",
    "p": "Digital Custom",
    "c": 41
   },
   {
    "n": "Digital Custom",
    "s": "digital-custom",
    "p": null,
    "c": 64
   },
   {
    "n": "Faces of Northeastern",
    "s": "faces",
    "p": null,
    "c": 189
   },
   {
    "n": "Follow Friday",
    "s": "follow-friday",
    "p": null,
    "c": 33
   },
   {
    "n": "Photo",
    "s": "photo",
    "p": null,
    "c": 863
   },
   {
    "n": "Q&A",
    "s": "qa",
    "p": null,
    "c": 624
   },
   {
    "n": "Retain Default Styles",
    "s": "digital-default",
    "p": "Digital Custom",
    "c": 168
   },
   {
    "n": "Seen Around Northeastern",
    "s": "seen-around",
    "p": "Photo",
    "c": 2466
   },
   {
    "n": "Video",
    "s": "video",
    "p": null,
    "c": 563
   },
   {
    "n": "Voices of Northeastern",
    "s": "voices",
    "p": null,
    "c": 5
   }
  ]
 },
 "audience": {
  "n": "Audience",
  "count": 6,
  "terms": [
   {
    "n": "Alumni",
    "s": "alumni",
    "p": null,
    "c": 194
   },
   {
    "n": "Faculty",
    "s": "faculty",
    "p": null,
    "c": 195
   },
   {
    "n": "Parents and Families",
    "s": "parents-families",
    "p": null,
    "c": 299
   },
   {
    "n": "Prospective Students",
    "s": "prospective-students",
    "p": null,
    "c": 140
   },
   {
    "n": "Staff",
    "s": "staff",
    "p": null,
    "c": 123
   },
   {
    "n": "Students",
    "s": "students",
    "p": null,
    "c": 275
   }
  ]
 },
 "research-section": {
  "n": "Research Section",
  "count": 5,
  "terms": [
   {
    "n": "Books",
    "s": "books",
    "p": null,
    "c": 113
   },
   {
    "n": "Conferences and Events",
    "s": "conferences-and-events",
    "p": null,
    "c": 188
   },
   {
    "n": "Grants",
    "s": "grants",
    "p": "Honors and Awards",
    "c": 166
   },
   {
    "n": "Honors and Awards",
    "s": "honors-and-awards",
    "p": null,
    "c": 255
   },
   {
    "n": "Research Paper",
    "s": "research-paper",
    "p": null,
    "c": 1163
   }
  ]
 },
 "newsfeed": {
  "n": "Newsfeed Display",
  "count": 4,
  "terms": [
   {
    "n": "Faculty & Staff",
    "s": "faculty-staff",
    "p": null,
    "c": 3
   },
   {
    "n": "NGN Daily",
    "s": "ngn-daily",
    "p": null,
    "c": 1
   },
   {
    "n": "Parents & Families",
    "s": "parents",
    "p": null,
    "c": 6
   },
   {
    "n": "Research",
    "s": "research",
    "p": null,
    "c": 0
   }
  ]
 },
 "spotlight": {
  "n": "Spotlight",
  "count": 1,
  "terms": [
   {
    "n": "Spotlight",
    "s": "spotlight",
    "p": null,
    "c": 0
   }
  ]
 },
 "internal-external": {
  "n": "Internal or External",
  "count": 1,
  "terms": [
   {
    "n": "external",
    "s": "external",
    "p": null,
    "c": 1567
   }
  ]
 },
 "live_update_channel": {
  "n": "Channel",
  "count": 5,
  "terms": [
   {
    "n": "Commencement",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Live Blog",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Sports",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Summits & Conferences",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Urgent",
    "s": "",
    "p": null,
    "c": 0
   }
  ]
 },
 "expertise": {
  "n": "Expertise",
  "count": 2428,
  "terms": [
   {
    "n": "'omics analyses",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "19th century United States",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "access to medicine",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "acquisition of syntactic categories in first language acquisition",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "adaptive and dynamic networks",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "adolescent psychopathology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "advertising effectiveness",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Affective Neuroscience",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "African American women’s and gender history",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "AI systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "algebraic transformation groups",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "alternative game genres",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "ambulatory pharmacy practice",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "American political parties and elections",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "and consequence of exchange relationships",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "and immigrant groups",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "and politics in Italy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Anesthesia",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Antarctica",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "antipsychotic drugs",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "application of statistical and numerical simulation methods in the analysis of epidemics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Applied Mathematics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Art Spiegelman’s “Maus”",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "asthma",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "atomic structure of nanomaterials using electron microscopes",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "authentication",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "aviation security",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "basic and clinical research on the neurobiology of aggression",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Beers",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "behavioral medicine",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "belief systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "big data analytics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "biochemical engineering",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "bioengineering nanotechnology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "biological analysis",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "biomaterials",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "biomedical signal and image processing",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "bioorganic chemistry",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Biosensors for water quality monitoring",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "blogging",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "body image",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "brain mechanisms and psychiatric disorders",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Brexit",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "business and poverty",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "business strategy under uncertainty",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "cancer",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "capital markets",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "cardiovascular disorders",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "catastrophic terrorism",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "cell therapeutics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "CERN",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "child abuse & neglect",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Childhood vaccination",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Chinese culture and meditation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Circadian rhythms",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Civil Society",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Climate",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "climate resilience",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "clinical vision science",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "coastal communities",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "coastal wetlands",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "cognitive and neural systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "cognitive rehabilitation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Collective action",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "colloidal physics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "commercializing digital media",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "communication patterns",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "community and law enforcement partnerships",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "community resilience",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "comparative politics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "compiler correctness",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "computational behavioral assessment",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "computational materials physics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "computational neuroscience",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "computer architecture",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "conflict and negotiation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Conservation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "consumer behavior",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "contemporary contexts for classical drama",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "continuations",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "cooperative legal education",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "corporate bankruptcy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "corporate social responsibility",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "corrosion",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "counterinsurgency",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "creative industries",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "criminal justice",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "criminology and criminal justice",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "critical phenomena on networks",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "crowdsourcing in relation to news and journalism",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "cultural perseverance",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "customer relationship management",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "cybersecurity issues with the potential to affect a large number of people",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Data and analytic provenance",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "data science",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "datacenter networks",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "democratic theory",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "design for sustainable urban environments",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "detecting and preventing web based attacks",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "development and application of microscale separations",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "development of next generation products",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "diabetes",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "diffusion of health and medical innovations",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Digital marketing channels",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "dilution",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "disability law",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "disease detection",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "diva culture",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "dosage and prescription of opioids",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "drinking water treatment and distribution",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "drug discovery",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "dynamic modeling",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "early literacy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "eating disorders",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "economic development",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "economics of climate change and policy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "education",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Efficiency Improvements",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Election 2020",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "electrochemistry of electrode materials",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "electron spin resonance spectroscopy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "embedded systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "emerging markets",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "end of life decision-making",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "energy democracy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "energy security and foreign direct investment",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "engineering and executive management",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "entertainment law",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "environment and technology policy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "environmental ethics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Environmental organic chemistry",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Enzymology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "ergonomics and safety",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "ethics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Ethics in mathematical modeling",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "EU-Russia partnership",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Evidence-based Medicine",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Exercise",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Experimental Biological Physics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "experimental psychology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "export incentive programs",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Facebook IPO",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "family law",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Feminism",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "fiduciary responsibility and ethics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Filter Magazine",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "financial literacy issues facing corporate management in global businesses",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Fire Suppression",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Fisheries",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "food and public policy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "foreign direct investment",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Freestyle rapping",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Fundamental Design",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "game data mining",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "gaming",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "gender and sexuality studies",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "gene expression in cells",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Genetics and Speciation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "geometry and topology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "global biosurveillance",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "global production and transport of salt",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Globalization and International Affairs",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "governance of social entrepreneurial ventures",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Graph Mining",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "group buying",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "hardware/software co-design",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "health and language literacy of low income families",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "health care finance and marketing",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "health communication",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "health informatics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "health promotion",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "healthcare management",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "healthy aging and well-being in the home",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "heme containing proteins",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "high energy particle colliders",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "hiring trends",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "history of education",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "history of science; medicine; and technology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "horror fiction",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "human behavior",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "human rights",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "human-computer interaction",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "hydrogen-deuterium exchange",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "identity access management",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "image processing",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "immigration",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "impacts on marine organisms of ocean acidification in climate change",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "incorporating virtual patient software simulation technology to improve pharmacy students learning outcomes",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "industrial design",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "infectious diseases",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "information assurance",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "infrastructure",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "innovation and intellectual property",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "insurgency",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "intellectual disability",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "intensive longitudinal data analysis",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Interfaces",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "international communication abroad",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "international finance",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "international migration",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "international relations (theory)",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Internet of Things",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "intersection of economic circumstances and educational outcomes",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Interventions that prevent the spread of HIV in Africa",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "involving physical vapor deposition experiments",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Islamist movements",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "issues of race and criminal justice",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "job placement",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "jurisprudence",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "knee pain",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "labor market analysis",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "language",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Latin America",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Law and Society",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "lean systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Lebanon",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "lie algebras",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "ligand-protein interactions",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "literary theory",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "logic",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "machine learning",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "management of healthcare delivery organizations",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "manufacturing",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "marginal religions",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "market efficiency",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "marketing research",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Master Plan Communities",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "materials for energy systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "mean-field models",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "media and race/gender/sexuality",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "medical and business ethics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "medication management",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "medieval literature",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Mental Health",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "metabolic engineering",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "micro- and nano-fabrication",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Microbial genomics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "microfluidic devices for applications in clinical diagnostics and regenerative medicine",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Middle Eastern economies",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "minority populations",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "mobile and ubiquitous computing for health and wellness promotion",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Mobile marketing",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "modeling and analysis of embedded systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "modern Latin American political economy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "molecular and chemical pharmacology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Molecular Sensing",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "motivational interviewing",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "movement and rehabilitation science",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "multiagent machine learning",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "multiplayer gaming and virtual worlds",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "music",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "muslim ethics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Nanoelectronic Devices",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "nanomedicine",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "nanoscale materials for drug delivery",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "national",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "natural language processing",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "nearshore processes.",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "network protocols",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "neural interface technology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Neurologic Physical Therapy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Neuropharmacology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Neuroscience of motor behavior",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "new venture performance",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "non-pharmacologic interventions for arthritis",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Northern Ireland",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "nutritional intervention",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Olympic Movement",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "online product reviews",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Optimization",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "organizational communication",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Orthopaedics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "outsourcing and offshoring",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "pandemic",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "particularly visual attention",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Pay Pal",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "pediatric surgical care",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "performance analysis",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "permanent magnetic systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "pharmaceuticals",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "pharmacy operations",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "philosophy of human rights",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Photovoltaics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "physician behavior",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "plasma theory",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Police management",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "political economy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "political parties",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "political sociology of the Middle East and North Africa",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "postcolonial identity",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "power systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "prevention of antisocial behavior",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "privacy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "procedure",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "product management",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "professional and graduate-program development",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "programming-language semantics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "protein chemistry",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "proton exchange membrane (PEM) fuel cells",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "psychology of language",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Public Diplomacy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "public health law",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "public interest advocacy/litigation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "public space in changing cities",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "punitiveness",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "quality and reliability engineering",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "race",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Race and Justice",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "racial profiling",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "radiation therapy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "real-time database security",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "reducing fossil-fuel reliance",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "regenerative biology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "rehabilitation strategies for client participation and to promote motor learning",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "religion",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "renewable energy systems",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "resilience among vulnerable youth",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Restriction endonucleases",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Rheumatology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Robotic manipulation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Robotics Control/Perception",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "role of applied linguists in language departments",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "role of research in marketing decision-making",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Russia Ukraine war",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "sand dunes",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "school and campus violence",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "science journalism",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "security and privacy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "seismic response of landfills",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Semantic Networks and Knowledge Graphs",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "service learning",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "sexual violence prevention",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "shore structures",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "simulation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "sleep",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "social and organizational entrepreneurship",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "social epidemiology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "social issues",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "social network analysis",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "social science",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "social/aesthetic/political uses of digital media",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "sociology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "software design",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "solar energy conversion",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Spanish and Latin American politics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "spectroscopy",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "spinoza",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "sports injuries",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "spreading of mobile viruses",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "state reform",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Statistics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "stochastic filtering",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "strategic renewal",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "structural dynamics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "structure-based drug discovery",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "study of biological",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "suburbanization and smart growth",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Supply Chain Management",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Sustainability Science",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "syntactic distinction of lexical and functional categories",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "synthetic organic chemistry",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "systems biology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "teaching and learning",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "technologies for identifying and treating children with autism",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "technology-based health promotion",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "terrorism",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "the Arab-Israeli Conflict",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "the history of imperialism and colonialism",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "the intersection of media/identification technologies/surveillance",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "the role of technology in Africa's development",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "the treatment and prevention of infectious diseases",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Theoretical Condensed Matter and Biological Physics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "theories of practice-based learning",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Time-Series",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "tort reform",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "trade sanctions",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Transcultural Healthcare",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "transit signal priority",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "transportation",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "traveling on a shoe-string budget",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Tuna subs",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "typography",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "ultrasonics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "underwater acoustics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "urban",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "urban economic development",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "urban mobility",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Urban Sociology",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "US politics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "user research",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "USSD",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Variants",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "victimization",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "violence and politics",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "virtual reality gaming systems and development",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "visual design theory and practice",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "visualization and information design",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "voting behavior",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "water quality",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Whistling",
    "s": "",
    "p": null,
    "c": 0
   }
  ]
 },
 "story-type": {
  "n": "Story Types",
  "count": 6,
  "terms": [
   {
    "n": "Alumni Stories",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Faculty Stories",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "outside speaker stories",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Partnership stories",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Staff Stories",
    "s": "",
    "p": null,
    "c": 0
   },
   {
    "n": "Student Stories",
    "s": "",
    "p": null,
    "c": 0
   }
  ]
 }
};

/* A taxonomy small enough to show as chips. Anything larger needs search. */
window.CHIP_LIMIT = 20;

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

/* Matches the name or the slug, the way the live endpoint does - which is how
   "digital-" finds Retain Default Styles, whose slug is digital-default. */
window.searchTerms = function (taxKey, query, limit) {
  var all = (TAXONOMIES[taxKey] || { terms: [] }).terms;
  if (!query) return all.slice(0, limit || 40);
  var q = query.toLowerCase();
  return all.filter(function (t) {
    return t.n.toLowerCase().indexOf(q) > -1 || (t.s || '').toLowerCase().indexOf(q) > -1;
  }).slice(0, limit || 40);
};

/* The term record for a name, so a saved filter can show its post count. */
window.termByName = function (taxKey, name) {
  var all = (TAXONOMIES[taxKey] || { terms: [] }).terms;
  return all.filter(function (t) { return t.n === name; })[0] || null;
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

/**
 * One line covering the schedule and the next run.
 *
 * It states the current time, because without it "from 12:00 AM. Next at
 * 1:00 PM" reads as a mistake rather than as the next run from now.
 */
window.nextRunLine = function (start, every, now) {
  var times = nextRotations(start, every, 1, now);
  if (!times.length) return 'Set an interval like 1h or 30m.';

  now = now || new Date();
  var t = times[0];
  var clock = function (d) { return d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }); };

  var bits = String(start).split(':');
  var anchor = new Date(now);
  anchor.setHours(parseInt(bits[0], 10) || 0, parseInt(bits[1], 10) || 0, 0, 0);

  var away = Math.round((t.getTime() - now.getTime()) / 60000);
  var inWords = away < 1 ? 'under a minute'
    : away < 60 ? away + ' min'
    : Math.floor(away / 60) + 'h ' + (away % 60) + 'm';

  var sameDay = t.toDateString() === now.toDateString();

  return 'Every ' + every + ' from ' + clock(anchor) + '. ' +
    "It's " + clock(now) + ' now, so the next run is ' + clock(t) +
    (sameDay ? '' : ' tomorrow') + ' \u2014 ' + inWords + ' away.';
};
