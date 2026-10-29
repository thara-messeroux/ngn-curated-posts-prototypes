# Taxonomy findings, counted from the export
Source: [NGN_Curated_Posts_Taxonomy_Terms.csv](NGN_Curated_Posts_Taxonomy_Terms.csv), 14,983 rows read from the live site.

## 1. Terms that cannot be browsed — closed, working as intended

The term endpoint asks for `number => 500` per taxonomy, ordered by name, so only
the first 500 A-Z appear when you scroll. The rest need a substring typed into the
search box.

**Not a defect.** Raised with Xris on 29 October and closed: the cap is deliberate,
because returning more than 500 makes the query significantly slower. Recorded here
so the next person to count these terms does not raise it again.

| | Count |
| --- | --- |
| Terms in the export | 14983 |
| Browsable (first 500 A-Z per taxonomy) | 1875 |
| Search only | 13108 |

Tag alone holds 12710 terms. Browsing it stops at "and environmental health".

## 2. Department terms that exist twice

| Term | Rows | Paths |
| --- | --- | --- |
| Department of Health Sciences | 2 | Bouvé College of Health Sciences > Department of Health Sciences / Department of Health Sciences |
| Department of History | 2 | Department of History / College of Social Sciences & Humanities > Department of History |
| Department of Philosophy and Religion | 2 | College of Social Sciences & Humanities > Department of Philosophy and Religion / Department of Philosophy and Religion |

## 3. Research Topics with no posts

101 of 210 Research Topic terms have a post count of 0. Spotlight has one term, "Spotlight", also with 0 posts.

<details><summary>All 101 empty Research Topics</summary>

- Arthritis
- Autism
- Automotive
- Biochemistry
- Biocomputing
- Biodiversity
- Biomaterials
- Biomechanics
- Blockchain
- Book Bans
- Book Launch
- Boston Globe
- CBD
- Call for Papers
- Cancer
- Cannabis
- Center for the Future of Higher Education and Talent Strategy
- Computer Engineering
- Conference
- Consciousness
- Cultural Taxation
- DARPA
- DNA
- Diagnosis
- Electrochemistry
- Electronic Waste
- Emotion
- Equity
- Evolution
- Fashion
- Fentanyl
- Fiction
- Fire Science
- Firearms
- Fisheries
- Fitness
- Fluid Dynamics
- Forbes
- Fossil Fuels
- Genomics
- Government
- Graphic
- Gut Health
- Health Equity
- History of the Book
- Human Capital
- IEEE
- Imaging
- Insights@Center for Emerging Markets
- International Business
- Internet
- Interpretation
- Keynotes
- Library Sciences
- Michael Delichatsios
- Military
- NSF
- National Academy of Inventors
- Natural Language Processing
- Neoliberalism
- Networks
- Ocean Genome Legacy Center
- Oligosaccharides
- Opioid Use Disorder
- Partnerships
- Perception
- Perspective
- Plastics
- Podcast
- Pollution
- Polymers
- Popular Culture
- Privacy
- Psycho
- Publication
- Qualitative Research
- Research Computing
- Resiliency
- Review
- SIGCSE
- SMART Center
- Sculpture
- Sea-Level Rise
- Sign Language
- Solar Energy
- Start Up
- Statistics
- Strategic Management Society
- Strategy
- Subjectivity
- Supply Chains
- Taxes
- The Calculus Project
- Ukraine
- User Interface
- Vaccines
- Walmart
- Weather
- Writing
- Zhu Lab
- mRNA

</details>
