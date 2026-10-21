/* ==========================================================================
   Headlines per shelf
   src "rail" — read off the live page where that shelf renders.
   src "rule" — fetched from the site's WordPress REST API using the shelf's
                own post type and include terms, newest first.
   Captured 21 October 2026. A snapshot, not a feed: in the real plugin these
   come from the same query the shelf already runs.
   ========================================================================== */

window.HEADLINES = {
  "artificial-intelligence": [
    {"t":"This device aims to detect a pressure injury before it becomes deadly","src":"rail"},
    {"t":"The researchers using AI to avert another Deepwater Horizon oil spill","src":"rail"},
    {"t":"Expert wants to move AI governance from principles to practice","src":"rail"},
    {"t":"Boston’s rats are talking. Scientists are listening with AI","src":"rail"}
  ],
  "arts-entertainment": [
    {"t":"Award-winning Northeastern professor will publish ‘non-linear’ memoir","src":"rail"},
    {"t":"Art made with GIS data and CIA spy images captures human impact of war","src":"rail"},
    {"t":"She's studying musical theater and starring in an indie feature film","src":"rail"},
    {"t":"Love sloths? A little space can make a big difference","src":"rule"}
  ],
  "business": [
    {"t":"This grad helps runs the Amazon of the medical device world","src":"rail"},
    {"t":"Economists think a rate hike is coming. Here’s what that could mean","src":"rail"},
    {"t":"Grads take their workout supplements from Marino to Miami","src":"rail"},
    {"t":"Why it matters if a retailer has inaccurate personal data on you","src":"rule"}
  ],
  "convocation-2026": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "editors-picks": [
    {"t":"A visit to a cow farm led her to the top of Scottish politics","src":"rail"},
    {"t":"The NU grad solving the “Frizzle problem” for women teaching science","src":"rail"},
    {"t":"France’s student protests have spiraled into a broader crisis","src":"rail"},
    {"t":"AI is helping pathologists find harmful lesions the eye can’t see","src":"rail"},
    {"t":"Is an arms race in space on the near horizon?","src":"rail"}
  ],
  "featured-research": [
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Helping to restore an icon to New England marshes and dinner plates","src":"rule"},
    {"t":"The researchers using AI to avert another Deepwater Horizon oil spill","src":"rule"}
  ],
  "featured-stories": [
    {"t":"Love sloths? A little space can make a big difference","src":"rail"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rail"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"}
  ],
  "featured-university-news": [
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"A visit to a cow farm led her to the top of Scottish politics","src":"rule"},
    {"t":"The NU grad solving the “Frizzle problem” for women teaching science","src":"rule"}
  ],
  "global-entrepreneurship": [
    {"t":"We all scream for Northeastern-inspired Cherry Fudge Swirl ice cream","src":"rail"},
    {"t":"How Northeastern prepared these graduates for entrepreneurial success","src":"rail"},
    {"t":"This device aims to detect a pressure injury before it becomes deadly","src":"rail"},
    {"t":"Grads take their workout supplements from Marino to Miami","src":"rail"}
  ],
  "global-textbook": [
    {"t":"Experts detect AI text by looking for human idiosyncrasies, like word variation and complex sentences","src":"rule"},
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"}
  ],
  "global-university-system": [
    {"t":"Old games built on imagination and dice rolls thrive at Northeastern","src":"rail"},
    {"t":"Silicon Valley mentorship club helps students ace technical interviews","src":"rail"},
    {"t":"Grads take their workout supplements from Marino to Miami","src":"rail"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rail"}
  ],
  "health": [
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rail"},
    {"t":"What does a healthy brain look like? Turns out it's all relative.","src":"rail"},
    {"t":"Could a molecular ZIP code unlock treatments for untreatable diseases?","src":"rail"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"}
  ],
  "in-the-press": [
    {"t":"The autumn effect","src":"rule"},
    {"t":"Gratitude and honor","src":"rule"},
    {"t":"Game, set, match!","src":"rule"}
  ],
  "latest-arts-entertainment": [
    {"t":"The art of the hot take: Unpacking the virality behind SubwayTakes","src":"rail"},
    {"t":"‘Franchise fatigue’ can’t seem to stick to Spider-Man. Why?","src":"rail"},
    {"t":"Loop groups, Hollywood’s invisible heroes, could be under threat by AI","src":"rail"}
  ],
  "latest-business": [
    {"t":"Why is the US buying Japanese yen? Experts explain the rare move","src":"rail"},
    {"t":"For hiring, remote work means more expertise, research finds","src":"rail"},
    {"t":"Kevin Warsh faces first major test as Federal Reserve chair","src":"rail"}
  ],
  "latest-entrepreneurship": [
    {"t":"We all scream for Northeastern-inspired Cherry Fudge Swirl ice cream","src":"rule"},
    {"t":"Student startup develops hands-on learning toy for future engineers","src":"rule"},
    {"t":"The host with the most – from roundtables, to podcasts, to meals","src":"rule"}
  ],
  "latest-health": [
    {"t":"PFAS may raise blood pressure during pregnancy. Who is at risk?","src":"rail"},
    {"t":"Russia’s plague scare is shrouded in uncertainty, experts say","src":"rail"},
    {"t":"Dengue fever researcher talks Florida outbreak — and transmission risk","src":"rail"}
  ],
  "latest-science-technology": [
    {"t":"The researchers using AI to avert another Deepwater Horizon oil spill","src":"rail"},
    {"t":"Researchers open up a can of worms to study how brains work","src":"rail"},
    {"t":"Expert wants to move AI governance from principles to practice","src":"rail"}
  ],
  "latest-society-culture": [
    {"t":"How sports betting app Novig trolls us with its Sydney Sweeney ads","src":"rail"},
    {"t":"Who hears you say “thank you”? It matters more than you might think","src":"rail"},
    {"t":"Researcher investigates how people get into the urban mix","src":"rail"}
  ],
  "latest-sports": [
    {"t":"Math professor puts two and two together in world title bid","src":"rail"},
    {"t":"The numbers that show Spain’s dominance in the World Cup final","src":"rail"},
    {"t":"Spain defeats Argentina in final match to win World Cup 1-0","src":"rail"}
  ],
  "latest-world-news": [
    {"t":"The autumn effect","src":"rule"},
    {"t":"Gratitude and honor","src":"rule"},
    {"t":"Game, set, match!","src":"rule"}
  ],
  "most-read-artificial-intelligence": [
    {"t":"After weeks of AI doomsday warnings, experts want to shift the debate","src":"rule"},
    {"t":"This AI-powered chip can offer a deeper look at faulty brain activity","src":"rule"},
    {"t":"Meet the professor who thinks generic AI models should become obsolete","src":"rule"},
    {"t":"AI chatbots linked to psychological harm, Northeastern study finds","src":"rule"},
    {"t":"From lab to startup: This professor wins prestigious engineering award","src":"rule"}
  ],
  "most-read-arts-entertainment": [
    {"t":"Why is it so difficult to sing the US national anthem?","src":"rail"},
    {"t":"‘Franchise fatigue’ can’t seem to stick to Spider-Man. Why?","src":"rail"},
    {"t":"The art of the hot take: Unpacking the virality behind SubwayTakes","src":"rail"},
    {"t":"Loop groups, Hollywood’s invisible heroes, could be under threat by AI","src":"rail"},
    {"t":"Award-winning Northeastern professor will publish ‘non-linear’ memoir","src":"rail"}
  ],
  "most-read-business": [
    {"t":"Why Anthropic, OpenAI and SpaceX are all racing to go public now","src":"rail"},
    {"t":"The U.S. debt has overtaken the economy. Should we be concerned?","src":"rail"},
    {"t":"What happened after the fast-food pay raise in California? Data explains","src":"rail"},
    {"t":"Kevin Warsh faces first major test as Federal Reserve chair","src":"rail"},
    {"t":"Economists think a rate hike is coming. Here’s what that could mean","src":"rail"}
  ],
  "most-read-entrepreneurship": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"},
    {"t":"A visit to a cow farm led her to the top of Scottish politics","src":"rule"}
  ],
  "most-read-global-university-news": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"},
    {"t":"A visit to a cow farm led her to the top of Scottish politics","src":"rule"}
  ],
  "most-read-health": [
    {"t":"Hayden Panettiere’s death and the dangerous duo of addiction and PPD","src":"rail"},
    {"t":"Russia’s plague scare is shrouded in uncertainty, experts say","src":"rail"},
    {"t":"Cyclospora still making its way through the US. And it’s not alone","src":"rail"},
    {"t":"Scientists dig into the potato’s potential to fight gut inflammation","src":"rail"},
    {"t":"Trusted supplements in the hot seat: could they harm the aging brain?","src":"rail"}
  ],
  "most-read-science-technology": [
    {"t":"AI chatbots linked to psychological harm, Northeastern study finds","src":"rail"},
    {"t":"What’s behind the Flock camera controversy?","src":"rail"},
    {"t":"Can you really turn off an AI? The debate over “kill switches”","src":"rail"},
    {"t":"The bioinformatics escape room where guests become genetic detectives","src":"rail"},
    {"t":"This robot can snuff out wildfires with cryogenic liquid","src":"rail"}
  ],
  "most-read-society-culture": [
    {"t":"How sports betting app Novig trolls us with its Sydney Sweeney ads","src":"rail"},
    {"t":"Who hears you say “thank you”? It matters more than you might think","src":"rail"},
    {"t":"OpenAI introduces ChatGPT for Teens. What do teachers think?","src":"rail"},
    {"t":"AI and digital culture make their way into Merriam-Webster","src":"rail"},
    {"t":"Researcher investigates how people get into the urban mix","src":"rail"}
  ],
  "most-read-sports": [
    {"t":"Father Time or something more? What’s bothering Novak Djokovic?","src":"rail"},
    {"t":"Northeastern helped launch this World Cup star for Haiti","src":"rail"},
    {"t":"Former Husky Cam Schlittler stars as Yankees rout hometown Red Sox","src":"rail"},
    {"t":"Shelton-Zverev final puts parental coaching dynamics in the spotlight","src":"rail"},
    {"t":"Math professor puts two and two together in world title bid","src":"rule"}
  ],
  "most-read-world-national-news": [
    {"t":"The midterms could bring a blue wave. Here are the forces at play","src":"rail"},
    {"t":"Many causes for floods, many causes for their devastation","src":"rail"},
    {"t":"What is ‘smoke taint’? How wildfires may affect your favorite wine","src":"rail"},
    {"t":"“Super” El Niño is expected to be the strongest on record","src":"rail"},
    {"t":"Assessing restrictive immigration policy as migrants surge into Ceuta","src":"rail"}
  ],
  "multimedia": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"}
  ],
  "research-spotlight": [
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Helping to restore an icon to New England marshes and dinner plates","src":"rule"},
    {"t":"The researchers using AI to avert another Deepwater Horizon oil spill","src":"rule"}
  ],
  "science-technology": [
    {"t":"Love sloths? A little space can make a big difference","src":"rail"},
    {"t":"Helping to restore an icon to New England marshes and dinner plates","src":"rail"},
    {"t":"AI is helping pathologists find harmful lesions the eye can’t see","src":"rail"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"}
  ],
  "society-culture": [
    {"t":"The student combining theater and psychology to support homeless youth","src":"rail"},
    {"t":"Northeastern students shrink digital literacy gap for Oakland seniors","src":"rail"},
    {"t":"AI and digital culture make their way into Merriam-Webster","src":"rail"},
    {"t":"Love sloths? A little space can make a big difference","src":"rule"}
  ],
  "sports": [
    {"t":"Former Husky Cam Schlittler stars as Yankees rout hometown Red Sox","src":"rail"},
    {"t":"Shelton-Zverev final puts parental coaching dynamics in the spotlight","src":"rail"},
    {"t":"Father Time or something more? What’s bothering Novak Djokovic?","src":"rail"},
    {"t":"Northeastern helped launch this World Cup star for Haiti","src":"rule"}
  ],
  "spotlight": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"}
  ],
  "university-news": [
    {"t":"Old games built on imagination and dice rolls thrive at Northeastern","src":"rail"},
    {"t":"Silicon Valley mentorship club helps students ace technical interviews","src":"rail"},
    {"t":"How do you clean a giant ship? This student builds robots for the job","src":"rail"},
    {"t":"Young Northeastern philanthropists on why they support giving back","src":"rail"}
  ],
  "world-cup-2026-final": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "world-cup-2026-stories": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "world-cup-2026-stories-first-stage": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "world-cup-2026-stories-preview": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "world-cup-2026-stories-quarter-final": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "world-cup-2026-stories-round-of-16": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "world-cup-2026-stories-round-of-32": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "world-cup-2026-stories-semifinal": [
    {"t":"Love sloths? A little space can make a big difference","src":"rule"},
    {"t":"What does a healthy brain look like? Turns out it’s all relative.","src":"rule"},
    {"t":"Northeastern students bond by riding unicycles around campus","src":"rule"},
    {"t":"Jalen Hurts has blood clots. What factors can worsen the condition?","src":"rule"}
  ],
  "world-national-news": [
    {"t":"Can we trust the polls? Experts weigh in ahead of the 2026 midterms","src":"rail"},
    {"t":"France’s student protests have spiraled into a broader crisis","src":"rail"},
    {"t":"Is an arms race in space on the near horizon?","src":"rail"},
    {"t":"Love sloths? A little space can make a big difference","src":"rule"}
  ]
};

window.HEADLINES_CAPTURED = "21 October 2026";
