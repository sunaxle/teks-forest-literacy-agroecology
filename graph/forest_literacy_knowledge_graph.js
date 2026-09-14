/**
 * TEKS Forest Literacy Knowledge Graph & Learning Engine (Master 52-Module + Extended Edition)
 * Implements Directed Acyclic Graph (DAG) state, topological sorting, 
 * prerequisite unlocking, quarterly filtering, and multi-track filtering.
 *
 * @project Texas Trees Foundation & UTRGV Cool Schools Project / Agroecology Initiative
 * @version 3.0.0
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ForestKnowledgeGraph = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const GRAPH_DATA = {
    metadata: {
      framework: "Comprehensive TEKS Forest Literacy Architecture (52 Modules K-12 + Higher Ed/Community)",
      version: "3.0.0",
      tiers: [
        { id: "all", label: "🌟 All 52 Modules", desc: "View full interconnected K-12 learning architecture" },
        { id: "q1", label: "🍂 Q1: Fall Canopy Physics", desc: "Thermal regulation, albedo & solar radiation" },
        { id: "q2", label: "❄️ Q2: Winter Allometry & Biomass", desc: "Dendrology, DBH geometry & carbon capture" },
        { id: "q3", label: "🌱 Q3: Spring Agroecology & Soils", desc: "Mycorrhizae, nitrogen cycles & soil percolation" },
        { id: "q4", label: "☀️ Q4: Late Spring Equity & Policy", desc: "Heat islands, GIS mapping & civics capstones" },
        { id: "k2", label: "🌱 K–2 Primary", desc: "Foundational sensory & anatomy exploration" },
        { id: "3_5", label: "🌿 3–5 Elementary", desc: "Food webs, geometry & indigenous ethnobotany" },
        { id: "6_8", label: "🌳 6–8 Middle School", desc: "Thermodynamics, carbon & clinometers" },
        { id: "9_12", label: "🌲 9–12 High School", desc: "Agroecology, APES allometry & heat equity" },
        { id: "community", label: "🏡 Parent & Community", desc: "Bilingual home shade, ollas & pechita" },
        { id: "college", label: "🔬 Higher Ed & Grad", desc: "PM2.5 calibration, WBGT & epidemiology" },
        { id: "spiritual", label: "🧘 Contemplative & Cultural", desc: "Shinrin-yoku, sacred cypress & ethics" }
      ],
      subjects: [
        { id: "all", label: "All Subjects" },
        { id: "SCIENCE", label: "Science (3D TEKS)" },
        { id: "MATH", label: "Mathematics & Allometry" },
        { id: "AGROECOLOGY", label: "Subtropical Agroecology" },
        { id: "CROSS_DISCIPLINARY", label: "Cross-Disciplinary K–2" },
        { id: "SOCIAL_STUDIES", label: "Social Studies & Policy" },
        { id: "ELAR", label: "ELAR & Nature Journaling" },
        { id: "FINE_ARTS", label: "Fine Arts & Eco-Canvas" },
        { id: "Interdisciplinary", label: "Community Workshops" },
        { id: "Environmental Engineering & Public Health", label: "Engineering & Health" },
        { id: "Atmospheric Physics & Agroecology", label: "Atmospheric Physics" },
        { id: "Environmental Epidemiology", label: "Epidemiology" },
        { id: "Contemplative Ecology & Well-being", label: "Contemplative Ecology" },
        { id: "Cultural Heritage & Philosophy", label: "Cultural Heritage" }
      ],
      plt_themes: [
        { id: 1, label: "Theme 1: What is a Forest?", color: "#2e7d32" },
        { id: 2, label: "Theme 2: Why Do Forests Matter?", color: "#0288d1" },
        { id: 3, label: "Theme 3: How Do We Sustain Our Forests?", color: "#ef6c00" },
        { id: 4, label: "Theme 4: What is Our Responsibility?", color: "#7b1fa2" }
      ]
    },
    nodes: [
      {
            "id": "LAB-K-Q1",
            "title": "Tree Senses & Living Shade Exploration",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Kindergarten",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science K.12A",
                  "Science K.12B",
                  "Math K.2A",
                  "ELAR K.2A",
                  "Health K.1A",
                  "Art K.1A"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Use all five senses to observe bark texture, leaf rustling sounds, and shade cooling. Compare the air temperature standing in direct sunlight versus standing under a Honey Mesquite tree canopy.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science K.12A, Science K.12B, Math K.2A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Five-Sense Campus Tree Hugger Tour: Students partner up to touch smooth vs rough bark, listen to breeze through leaves, feel the ground shade delta, and sketch what they see.",
            "quiz": {
                  "question": "How does the ground feel when you sit underneath a big shady tree compared to hot asphalt?",
                  "options": [
                        "Much hotter",
                        "Noticeably cooler and shaded",
                        "Exactly the same",
                        "Wet like a swimming pool"
                  ],
                  "correct_index": 1,
                  "explanation": "Tree leaves block intense solar rays and release moisture through transpiration, creating cool shade."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-K-Q2",
            "title": "Bark Rubbing Art & Shape Patterns",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Kindergarten",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Science K.10A",
                  "Math K.8A",
                  "Art K.2A",
                  "Art K.3A",
                  "ELAR K.6A"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-K-Q1"
            ],
            "mastery_points": 100,
            "summary": "Create detailed physical bark rubbings from native Texas Ebony and Live Oak trees. Identify 2D geometric patterns (circles, lines, ridges, hexagons) in bark and seed pods.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Science K.10A, Math K.8A, Art K.2A. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Tactile Bark & Seed Pod Pattern Canvas: Students press paper against tree trunks and rub sideways with crayons to reveal natural protective bark patterns.",
            "quiz": {
                  "question": "What is the main job of the rough bark on the outside of a tree trunk?",
                  "options": [
                        "To make the tree look pretty",
                        "To protect the tree like an armor suit or skin",
                        "To catch falling rain",
                        "To tickle birds"
                  ],
                  "correct_index": 1,
                  "explanation": "Bark protects the living inner wood from insects, wildfire, extreme heat, and physical injury."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-K-Q3",
            "title": "Pollinators, Blossoms & Native Wildlife Homes",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Kindergarten",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science K.13A",
                  "Science K.13B",
                  "Social Studies K.3A",
                  "ELAR K.5A"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-K-Q2"
            ],
            "mastery_points": 100,
            "summary": "Spot native South Texas pollinators (Gulf Fritillary butterflies, honeybees, hummingbirds) on flowering trees. Explain how trees provide food (nectar, seed pods) and shelter (nests, hollows) for local animals.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science K.13A, Science K.13B, Social Studies K.3A. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Canopy Creature Detective Tour: Students quietly observe the canopy for 10 minutes, logging birds on branches, bees on yellow blossoms, and lizards on lower bark.",
            "quiz": {
                  "question": "Why do bees and butterflies visit yellow Anacua and Mesquite tree blossoms in spring?",
                  "options": [
                        "To take a nap",
                        "To drink sweet nectar and pollinate flowers",
                        "To eat the bark",
                        "To hide from frogs"
                  ],
                  "correct_index": 1,
                  "explanation": "Flowering trees produce nectar that feeds pollinators, who in turn help trees make seeds."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-K-Q4",
            "title": "Voces del \u00c1rbol: Storytelling & Tree Care",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Kindergarten",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "ELAR K.7B",
                  "ELAR K.8A",
                  "Social Studies K.10A",
                  "Social Studies K.11A",
                  "Art K.1B"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-K-Q3"
            ],
            "mastery_points": 100,
            "summary": "Listen to bilingual stories of ancestral Rio Grande Valley trees (El Palo Blanco, El Mezquite). Demonstrate respectful stewardship by mulching and watering a schoolyard sapling.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with ELAR K.7B, ELAR K.8A, Social Studies K.10A. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Circle Under the Canopy Story & Mulching Ring: Class sits in shade circle for storytelling, followed by each student adding one scoop of organic mulch around tree drip lines.",
            "quiz": {
                  "question": "What is one way students can help campus trees grow strong and healthy?",
                  "options": [
                        "Breaking the low branches",
                        "Placing mulch around the roots and watering them gently",
                        "Carving letters into bark",
                        "Pulling all the leaves off"
                  ],
                  "correct_index": 1,
                  "explanation": "Mulch protects soil moisture and feeds tree roots as it slowly decomposes into rich earth."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G1-Q1",
            "title": "Solar Rays, Shadows & Leaf Cooling Powers",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Grade 1",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science 1.9A",
                  "Science 1.10A",
                  "Math 1.7E",
                  "Health 1.3A"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Trace sun shadow movements across a 45-minute outdoor observation window. Feel and measure surface temperature contrasts between unshaded playground slide vs canopy shaded bench.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science 1.9A, Science 1.10A, Math 1.7E. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Shadow Clock & Surface Touch Thermal Lab: Students trace their partner's shadow under open sun and under tree shade, placing thermal sheets on asphalt and grass to see color temp shifts.",
            "quiz": {
                  "question": "What happens to the shadow of a tree throughout the day?",
                  "options": [
                        "It disappears forever",
                        "It changes position and length as the sun moves across the sky",
                        "It turns into liquid water",
                        "It gets hotter than fire"
                  ],
                  "correct_index": 1,
                  "explanation": "As the Earth rotates, the apparent position of the sun changes, altering shadow angles and lengths."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G1-Q2",
            "title": "Leaf Morphology & Compound Scavenger Sort",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Grade 1",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Science 1.12A",
                  "Science 1.12C",
                  "Math 1.8A",
                  "Art 1.2B"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-G1-Q1"
            ],
            "mastery_points": 100,
            "summary": "Collect and classify fallen leaves by size, edge type (smooth vs serrated), and arrangement (simple vs bipinnately compound). Explain why Honey Mesquite leaflets are feather-thin to withstand dry desert winds.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Science 1.12A, Science 1.12C, Math 1.8A. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Micro-Leaflet Botanical Sorting Grid: Students collect fallen specimens, sort them into simple vs compound quadrants on grid mats, and tally total leaflets.",
            "quiz": {
                  "question": "Why do Honey Mesquite and Retama trees have tiny leaflets instead of giant broad leaves?",
                  "options": [
                        "They are too lazy to grow big leaves",
                        "Tiny leaflets prevent excessive water loss in hot South Texas sun",
                        "Insects ate all the other parts",
                        "They only grow at night"
                  ],
                  "correct_index": 1,
                  "explanation": "Tiny compound leaflets reduce surface area and boundary layer resistance, minimizing transpiration water loss."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G1-Q3",
            "title": "Soil Sponges: Roots, Worms & Water Drops",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Grade 1",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science 1.11A",
                  "Science 1.11B",
                  "Math 1.5A",
                  "Health 1.1B"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-G1-Q2"
            ],
            "mastery_points": 100,
            "summary": "Observe how rain drops soak into mulch-covered soil compared to hard-packed bare dirt. Identify earthworms, root hairs, and organic leaf litter in a shallow soil cup sample.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science 1.11A, Science 1.11B, Math 1.5A. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Cup-Spill Runoff & Root Sponge Experiment: Students mist 50ml of water over bare soil and mulched root soil, observing infiltration speed and water clarity.",
            "quiz": {
                  "question": "How do tree roots and mulch help soil during a heavy rainstorm?",
                  "options": [
                        "They wash all the dirt into the street",
                        "They hold soil particles tight like a net and absorb water like a sponge",
                        "They make the ground explode",
                        "They turn the soil into plastic"
                  ],
                  "correct_index": 1,
                  "explanation": "Root networks physically anchor soil particles, while organic mulch slows water velocity and enhances infiltration."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G1-Q4",
            "title": "My Favorite Campus Tree: Map & Stewardship Badge",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Grade 1",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Social Studies 1.3A",
                  "ELAR 1.12B",
                  "Science 1.1A",
                  "Art 1.1A"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-G1-Q3"
            ],
            "mastery_points": 100,
            "summary": "Draw a pictorial map showing the location of 3 trees relative to the classroom and playground. Select and name a 'Class Tree Mascot' to observe throughout the school year.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Social Studies 1.3A, ELAR 1.12B, Science 1.1A. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Campus Tree Mapping & Steward Badge Ceremony: Class walks campus perimeter, marks major shade trees with green stickers on paper maps, and completes a 10-minute clean-and-care circle.",
            "quiz": {
                  "question": "On a map of your school, what symbol is best to represent a large shade tree?",
                  "options": [
                        "A picture of a car",
                        "A green tree icon or circle",
                        "A blue lightning bolt",
                        "A red stop sign"
                  ],
                  "correct_index": 1,
                  "explanation": "Green tree symbols are standardized map icons used to represent vegetation and canopy cover."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G2-Q1",
            "title": "Microclimate Investigators: Sun vs Shade Heat Deltas",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Grade 2",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science 2.9A",
                  "Science 2.10B",
                  "Math 2.9A",
                  "Health 2.3A"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Use digital pocket thermometers to record air temperatures in direct sun vs under dense tree canopy. Calculate the temperature difference (Delta T) in degrees Fahrenheit and Celsius.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science 2.9A, Science 2.10B, Math 2.9A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Thermal Delta T Field Investigation: Teams record 3 sun temperatures and 3 shade temperatures at 1.0m height, averaging values and calculating Delta T = T_sun - T_shade.",
            "quiz": {
                  "question": "If the sunny asphalt reads 108\u00b0F and the shaded soil under an Oak reads 88\u00b0F, what is the temperature delta?",
                  "options": [
                        "10\u00b0F",
                        "20\u00b0F",
                        "88\u00b0F",
                        "196\u00b0F"
                  ],
                  "correct_index": 1,
                  "explanation": "108\u00b0F - 88\u00b0F = 20\u00b0F cooler under the shade canopy."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G2-Q2",
            "title": "Tree Circumference, Height & Growth Rings",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Grade 2",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Math 2.9D",
                  "Science 2.11A",
                  "Science 2.12B",
                  "ELAR 2.6A"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-G2-Q1"
            ],
            "mastery_points": 100,
            "summary": "Measure tree trunk circumference using non-standard yarn units and standard metric tape measures. Examine cross-section tree cookies to count annual growth rings and infer wet vs drought years.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Math 2.9D, Science 2.11A, Science 2.12B. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Trunk Hugger Yarn Measure & Tree Cookie Lab: Students wrap yarn around trunks, cut to exact length, measure against meter sticks, and examine polished tree cookies to count growth rings.",
            "quiz": {
                  "question": "What does a very wide ring in a tree cookie indicate about that year's weather?",
                  "options": [
                        "Extreme drought with zero rain",
                        "Plentiful rainfall and good growing conditions",
                        "A severe wildfire burned the tree",
                        "It was winter all year long"
                  ],
                  "correct_index": 1,
                  "explanation": "Trees add more vascular xylem cells during wet, nutrient-rich years, creating wider growth rings."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G2-Q3",
            "title": "The Native Ebony & Mesquite Ecosystem Food Chain",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Grade 2",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science 2.12C",
                  "Science 2.13A",
                  "ELAR 2.10A",
                  "Social Studies 2.2A"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-G2-Q2"
            ],
            "mastery_points": 100,
            "summary": "Construct a 4-step South Texas thornforest food chain (Sun -> Mesquite Leaves -> Katydid -> Scissor-tailed Flycatcher). Identify Texas Ebony seed pods (pechita) as an ancestral food source for native wildlife and indigenous peoples.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science 2.12C, Science 2.13A, ELAR 2.10A. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Pechita Pod & Food Web Card Chain Activity: Students wear organism badges and physically connect yarn lines from producers to primary consumers to predators, demonstrating energy flow.",
            "quiz": {
                  "question": "What role does the Honey Mesquite tree play in a schoolyard food chain?",
                  "options": [
                        "Apex predator",
                        "Primary consumer",
                        "Producer that creates food using sunlight",
                        "Decomposer"
                  ],
                  "correct_index": 2,
                  "explanation": "Trees are autotrophic producers that capture solar energy through photosynthesis."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G2-Q4",
            "title": "Cool Schools Neighborhood Shade Walk & Action Plan",
            "tier": "k2",
            "tier_label": "K\u20132 Primary",
            "grade": "Grade 2",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "CROSS_DISCIPLINARY",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Social Studies 2.11B",
                  "ELAR 2.12D",
                  "Art 2.3B",
                  "Health 2.1A"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-G2-Q3"
            ],
            "mastery_points": 100,
            "summary": "Survey the school boundary sidewalk to identify unshaded walking zones where pedestrians face intense sun. Draft a class letter to the principal recommending three strategic locations for new shade trees.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Social Studies 2.11B, ELAR 2.12D, Art 2.3B. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Pedestrian Shade Walk & Campus Action Blueprint: Students walk the student pickup sidewalk, mark bare sunny benches, stick green dots on map proposals, and write brief persuasive captions.",
            "quiz": {
                  "question": "Why is planting shade trees along school bus stops and walking paths beneficial for students?",
                  "options": [
                        "It makes the walk hotter",
                        "It shields children from dangerous UV rays and heat exhaustion",
                        "It stops the buses from driving",
                        "It removes all the oxygen"
                  ],
                  "correct_index": 1,
                  "explanation": "Canopy shade dramatically reduces mean radiant temperature and protects vulnerable students from heat-related illness."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G3-Q1",
            "title": "Solar Energy Absorption, Albedo & Transpiration",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 3",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "SCIENCE",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science 3.8A",
                  "Science 3.8B",
                  "Math 3.4A",
                  "Social Studies 3.4A"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Demonstrate how dark surfaces (asphalt) absorb light and heat up while light surfaces and leaves reflect and transpire. Trap water vapor transpiring from living leaves using sealed Ziploc bags.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science 3.8A, Science 3.8B, Math 3.4A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Leaf Transpiration Bagging & Albedo Field Assay: Students bag living branch ends at 9:00 AM, measure surface IR temps across asphalt/grass/leaves, and harvest condensed water droplets at 9:45 AM.",
            "quiz": {
                  "question": "Where does the clear water inside the sealed branch bag come from?",
                  "options": [
                        "Rain leaked through the plastic",
                        "Leaves released water vapor during transpiration that condensed on the bag",
                        "The tree drank it from the air",
                        "A student poured water inside"
                  ],
                  "correct_index": 1,
                  "explanation": "Transpiration is the biological evaporation of water from stomata on plant leaves into the atmosphere."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G3-Q2",
            "title": "Crown Spread Geometry, Radius & Shade Area",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 3",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "SCIENCE",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Math 3.6C",
                  "Math 3.7B",
                  "Science 3.1B",
                  "Art 3.2A"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-G3-Q1"
            ],
            "mastery_points": 100,
            "summary": "Measure average crown diameter using 4-point cardinal pacing (North, South, East, West). Calculate the radius ($r = d/2$) and estimate circular shade area ($A \\approx 3 \\times r^2$).",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Math 3.6C, Math 3.7B, Science 3.1B. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Crown Drip-Line Quadrant Pacing & Area Calculation: Teams find the trunk center, measure distance to edge of canopy in 4 directions, average the radius, and compute approximate shade area in sq ft.",
            "quiz": {
                  "question": "If a Texas Ebony canopy has an average radius of 10 feet, what is its estimated shade area using A \u2248 3 \u00d7 r\u00b2?",
                  "options": [
                        "30 sq ft",
                        "60 sq ft",
                        "300 sq ft",
                        "900 sq ft"
                  ],
                  "correct_index": 2,
                  "explanation": "Area = 3 * (10 * 10) = 3 * 100 = 300 square feet."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G3-Q3",
            "title": "Soil Textures, Humus & Water Percolation",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 3",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "SCIENCE",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science 3.10A",
                  "Science 3.10B",
                  "Math 3.4K",
                  "Science 3.1E"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-G3-Q2"
            ],
            "mastery_points": 100,
            "summary": "Differentiate sand, silt, clay, and organic humus in campus soil horizons. Time water percolation rates (seconds per 100ml) through compacted turf vs rich forest mulch.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science 3.10A, Science 3.10B, Math 3.4K. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Percolation Column Timing & Soil Ribbon Test: Students perform the 3-minute tactile ribbon test, then pour 200ml of water into soil tubes and measure drainage rate per minute.",
            "quiz": {
                  "question": "Why does soil with rich organic compost hold moisture longer than pure sand?",
                  "options": [
                        "Compost repels all water",
                        "Organic humus has high microporosity and acts like a cellular sponge",
                        "Sand absorbs water permanently",
                        "Compost turns into stone"
                  ],
                  "correct_index": 1,
                  "explanation": "Organic matter contains abundant microscopic pore spaces and colloidal surfaces that bind water molecules."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G3-Q4",
            "title": "Urban Heat Islands & Campus Cool-Island Design",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 3",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "SCIENCE",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Social Studies 3.4B",
                  "Science 3.3B",
                  "ELAR 3.13C",
                  "Art 3.1B"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-G3-Q3"
            ],
            "mastery_points": 100,
            "summary": "Define the Urban Heat Island (UHI) effect and identify campus hot-spots. Map high-vulnerability pedestrian zones (bus drop-offs, playground bleachers).",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Social Studies 3.4B, Science 3.3B, ELAR 3.13C. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Campus Microclimate Thermal Mapping & Oasis Sketch: Students walk a 6-station transect, record surface temperatures, color-code zones on map, and draw proposed canopy buffer zones.",
            "quiz": {
                  "question": "What causes an Urban Heat Island in cities and school campuses?",
                  "options": [
                        "Too many trees and parks",
                        "Abundance of dark impermeable surfaces (concrete, asphalt) that absorb and re-emit solar radiation",
                        "Cold ocean currents",
                        "High cloud cover"
                  ],
                  "correct_index": 1,
                  "explanation": "Pavement and masonry absorb shortwave solar radiation and re-radiate it as longwave thermal energy."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G4-Q1",
            "title": "Atmospheric Energy Flux & Transpirational Cooling",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 4",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "SCIENCE",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science 4.8A",
                  "Science 4.8B",
                  "Math 4.4A",
                  "Math 4.9A"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Calculate sensible heat flux reduction from latent heat of vaporization during tree transpiration. Measure wet-bulb vs dry-bulb temperatures using sling psychrometers to calculate relative humidity.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science 4.8A, Science 4.8B, Math 4.4A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Psychrometric Humidity & Latent Heat Transpiration Lab: Students spin psychrometers in open field and under canopy, determine relative humidity, and graph the cooling effect of latent heat transfer.",
            "quiz": {
                  "question": "Why does transpirational water evaporation from leaves cool the surrounding air?",
                  "options": [
                        "It releases fire energy",
                        "Water molecules absorb latent heat from the air to transition from liquid to vapor",
                        "It freezes the air into ice",
                        "It blocks all air circulation"
                  ],
                  "correct_index": 1,
                  "explanation": "Evaporation requires thermal energy (latent heat of vaporization, ~2.4 MJ/kg), extracting heat directly from ambient air."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G4-Q2",
            "title": "Biltmore Stick Allometry & Tree Height Trigonometry",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 4",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "SCIENCE",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Math 4.8C",
                  "Math 4.6D",
                  "Science 4.1C",
                  "Science 4.1D"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-G4-Q1"
            ],
            "mastery_points": 100,
            "summary": "Construct and calibrate a geometric Merritt hypsometer / Biltmore stick using 66-foot proportional geometry. Measure the height and Diameter at Breast Height (DBH) of 3 campus trees.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Math 4.8C, Math 4.6D, Science 4.1C. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Biltmore Forestry Stick Construction & Sighting Lab: Students affix calibrated scales to yardsticks, pace 66 feet from tree base, sight stump to crown tip, and record heights.",
            "quiz": {
                  "question": "How does a Biltmore/Merritt stick allow a forester to calculate tree height from 66 feet away?",
                  "options": [
                        "It uses GPS satellites",
                        "It uses the geometric principle of similar right triangles",
                        "It shoots a laser beam",
                        "It weighs the tree wood"
                  ],
                  "correct_index": 1,
                  "explanation": "Similar triangles establish a constant ratio between stick markings held at arm's length (25 in) and tree height at a fixed distance (66 ft)."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G4-Q3",
            "title": "Subtropical Thornforest Food Webs & Trophic Energy Flow",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 4",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "SCIENCE",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science 4.12A",
                  "Science 4.12B",
                  "Science 4.13A",
                  "ELAR 4.6E"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-G4-Q2"
            ],
            "mastery_points": 100,
            "summary": "Trace 10% trophic energy transfer from primary producers (Mesquite/Ebony) to primary consumers to apex predators (Ocelot/Harris Hawk). Quantify biomass loss at each successive trophic tier.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science 4.12A, Science 4.12B, Science 4.13A. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Tamaulipan Biome Trophic Energy Pyramid Simulation: Students pour 10% water fractions between trophic tiers to visually model 90% metabolic energy dissipation as heat at each level.",
            "quiz": {
                  "question": "If 10,000 Joules of energy are produced by Mesquite trees, how many Joules typically reach secondary consumers (carnivores)?",
                  "options": [
                        "10,000 J",
                        "1,000 J",
                        "100 J",
                        "10 J"
                  ],
                  "correct_index": 2,
                  "explanation": "10,000 J (Producers) -> 1,000 J (Primary Consumers) -> 100 J (Secondary Consumers) following the 10% thermodynamic transfer rule."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G4-Q4",
            "title": "Texas Forestry History, Indigenous Pechita & Spanish Land Grants",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 4",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "SCIENCE",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Social Studies 4.2A",
                  "Social Studies 4.9A",
                  "ELAR 4.7B",
                  "Art 4.3A"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-G4-Q3"
            ],
            "mastery_points": 100,
            "summary": "Analyze historical land use changes in the Lower Rio Grande Valley from Native Coahuiltecan thornforest management to agricultural clearing. Evaluate traditional botanical uses of Mesquite (pechita flour, medicinal gum) and Texas Ebony.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Social Studies 4.2A, Social Studies 4.9A, ELAR 4.7B. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Historical Land Grant Map Overlay & Ethnobotanical Lab: Students grind dried mesquite pods into traditional pechita flour, taste its natural sweetness, and compare 1930s vs 2024 forest canopy maps.",
            "quiz": {
                  "question": "Why was the Honey Mesquite considered the 'Tree of Life' by indigenous Coahuiltecan peoples of South Texas?",
                  "options": [
                        "It produced gold coins",
                        "Its protein- and sugar-rich pods provided year-round food, medicine, building timber, and dye",
                        "It repelled all rain",
                        "It only lived for two days"
                  ],
                  "correct_index": 1,
                  "explanation": "Mesquite pods (pechita) contain 10-15% protein and complex sugars, serving as a staple nutritional and cultural resource."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G5-Q1",
            "title": "Photosynthesis, Solar Flux & Stomatal Gas Exchange",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 5",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "SCIENCE",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science 5.9A",
                  "Science 5.9B",
                  "Math 5.3K",
                  "Science 5.1F"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Write and balance the word equation for photosynthesis ($CO_2 + H_2O + \\text{Light} \\rightarrow C_6H_{12}O_6 + O_2$). Extract stomatal leaf impressions using clear nail polish tape mounts and observe under 100x magnification.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science 5.9A, Science 5.9B, Math 5.3K. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Stomatal Peel Microscopy & Gas Exchange Assay: Students coat leaf undersides with polish, peel off the epidermal film, count guard cells/stomata in 3 fields of view, and calculate mean density.",
            "quiz": {
                  "question": "What is the primary function of stomata guard cells on the underside of a leaf?",
                  "options": [
                        "To digest insects",
                        "To regulate the exchange of water vapor, CO2, and O2 with the atmosphere",
                        "To absorb sunlight directly",
                        "To anchor the leaf to the branch"
                  ],
                  "correct_index": 1,
                  "explanation": "Guard cells swell and shrink to open and close stomata pores, optimizing CO2 intake while restricting transpiration water loss."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G5-Q2",
            "title": "Forest Carbon Vault: DBH Volumetric Mass & Scaling",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 5",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "SCIENCE",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Math 5.4H",
                  "Math 5.5A",
                  "Science 5.12B",
                  "Science 5.13B"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-G5-Q1"
            ],
            "mastery_points": 100,
            "summary": "Calculate cylindrical and conical bole volume ($V = \\pi r^2 h$) for campus trees. Apply green wood density scaling ($650 \\text{ kg/m}^3$) and dry carbon fraction (50%) to compute total sequestered carbon.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Math 5.4H, Math 5.5A, Science 5.12B. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Campus Forest Carbon Inventory & Allometric Computation: Students survey 5 designated campus trees, measure DBH and height, calculate bole volume, and compute total kilograms of sequestered carbon.",
            "quiz": {
                  "question": "Approximately what percentage of dry woody tree biomass consists of pure elemental carbon captured from the air?",
                  "options": [
                        "5%",
                        "25%",
                        "50%",
                        "95%"
                  ],
                  "correct_index": 2,
                  "explanation": "Cellulose, hemicellulose, and lignin macromolecules are approximately 50% carbon by dry weight."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G5-Q3",
            "title": "Soil Organic Matter, Decomposer Succession & Mycelium",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 5",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "SCIENCE",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science 5.12A",
                  "Science 5.12C",
                  "Science 5.11A",
                  "Math 5.9A"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-G5-Q2"
            ],
            "mastery_points": 100,
            "summary": "Investigate the detrital food web: bacteria, actinomycetes, mycorrhizal fungal hyphae, and micro-arthropods. Perform a Berlese funnel extraction on forest leaf litter to isolate and identify soil micro-invertebrates.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science 5.12A, Science 5.12C, Science 5.11A. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Berlese Funnel Micro-Arthropod Extraction & SOM Assay: Students collect 500g of canopy mulch, place in funnels under heat lamps, capture migrating organisms in collection vials, and classify species under magnification.",
            "quiz": {
                  "question": "What critical ecosystem service do decomposers and mycorrhizal fungi provide to living trees?",
                  "options": [
                        "They remove all nitrogen from the soil",
                        "They break down complex organic matter into bioavailable mineral nutrients (N, P, K)",
                        "They prevent trees from growing roots",
                        "They cool the sun"
                  ],
                  "correct_index": 1,
                  "explanation": "Decomposers mineralize organic compounds, recycling essential nitrogen, phosphorus, and trace minerals back to root systems."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G5-Q4",
            "title": "Environmental Civics: Campus Tree Equity Audit & Presentation",
            "tier": "3_5",
            "tier_label": "3\u20135 Elementary",
            "grade": "Grade 5",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "SCIENCE",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Social Studies 5.23A",
                  "ELAR 5.13C",
                  "ELAR 5.1C",
                  "Science 5.3B"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-G5-Q3"
            ],
            "mastery_points": 100,
            "summary": "Conduct a comprehensive campus environmental audit combining canopy percentage, heat exposure, and student foot traffic. Synthesize audit data into a formal school board proposal recommending a multi-phase tree planting initiative.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Social Studies 5.23A, ELAR 5.13C, ELAR 5.1C. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "School Board Capstone Pitch & Campus Planting Blueprint: Teams finalize their 5-slide capstone presentation, integrating thermal data, carbon capture figures, and proposed species selections.",
            "quiz": {
                  "question": "In a persuasive presentation to school administrators, what type of evidence is most effective to justify funding for new trees?",
                  "options": [
                        "Personal opinions with no data",
                        "Empirical data showing temperature drops, energy bill reductions, and heat safety metrics",
                        "A cartoon drawing",
                        "Complaining about the weather"
                  ],
                  "correct_index": 1,
                  "explanation": "Administrators require quantitative return-on-investment (ROI) data, safety metrics, and empirical environmental measurements."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G6-Q1",
            "title": "Grade 6 Thermal Radiative Transfer & Canopy Heat Flux",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 6",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "SCIENCE",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science 6.8A",
                  "Science 6.8B",
                  "Science 6.9A",
                  "Math 6.5A"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Quantify Stefan-Boltzmann radiation emissions ($j^* = \\epsilon \\sigma T^4$) across blacktop vs vegetative surfaces. Measure wind speed damping and boundary layer microclimate stability under dense multi-layered canopies.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science 6.8A, Science 6.8B, Science 6.9A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Radiative Transfer & Microclimate Anemometry Lab: Students take simultaneous thermal and wind velocity measurements in open athletic fields and mature oak stands, calculating convective heat dissipation.",
            "quiz": {
                  "question": "According to radiative heat physics, why does dark asphalt stay hot long after the sun sets while trees cool rapidly?",
                  "options": [
                        "Asphalt creates its own electricity",
                        "Dense pavement has high thermal mass and volumetric heat capacity, storing heat and slowly re-radiating it",
                        "Trees burn heat into smoke",
                        "Asphalt attracts cold air"
                  ],
                  "correct_index": 1,
                  "explanation": "High thermal mass materials like asphalt absorb and store extensive sensible heat, releasing it slowly via longwave infrared emission."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G6-Q2",
            "title": "Grade 6 Geometric Allometry, Ratios & DBH Carbon Equations",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 6",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "SCIENCE",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Math 6.4B",
                  "Math 6.5B",
                  "Science 6.12A",
                  "Science 6.12B"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-G6-Q1"
            ],
            "mastery_points": 100,
            "summary": "Apply ratio and proportional reasoning to determine tree heights via shadow proportions ($h_1 / s_1 = h_2 / s_2$). Measure DBH and crown aspect ratios across 10 campus tree specimens.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Math 6.4B, Math 6.5B, Science 6.12A. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Shadow Proportion Geometry & Allometric Biomass Matrix: Students measure meter stick shadow length and tree shadow length at high noon, solve linear proportions for unknown tree heights, and calculate mass.",
            "quiz": {
                  "question": "If a 1.0 m vertical stick casts a 0.5 m shadow, and a campus Live Oak casts a 6.0 m shadow at the exact same moment, how tall is the tree?",
                  "options": [
                        "3.0 m",
                        "6.0 m",
                        "12.0 m",
                        "18.0 m"
                  ],
                  "correct_index": 2,
                  "explanation": "Height / Shadow = 1.0 / 0.5 = 2.0. Tree Height = 6.0 m * 2.0 = 12.0 meters."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G6-Q3",
            "title": "Grade 6 Subtropical Soil Infiltration, Compaction & Nitrogen Cycles",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 6",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "SCIENCE",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science 6.10B",
                  "Science 6.11A",
                  "Science 6.11B",
                  "Math 6.8D"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-G6-Q2"
            ],
            "mastery_points": 100,
            "summary": "Measure soil compaction using mechanical cone penetrometers (PSI) across turf vs root zones. Correlate penetrometer resistance with double-ring infiltrometer percolation rates (cm/hr).",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science 6.10B, Science 6.11A, Science 6.11B. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Soil Penetrometer Resistance & Infiltration Dynamics Lab: Students measure mechanical soil resistance in PSI across 5 campus locations, drive infiltration rings, and plot percolation rate decay curves.",
            "quiz": {
                  "question": "Why does severe soil compaction (high PSI) prevent tree roots from absorbing water and nutrients?",
                  "options": [
                        "It makes soil too cold",
                        "It collapses macropores, cutting off oxygen diffusion and physical root elongation",
                        "It increases earthworm populations to dangerous levels",
                        "It turns water into gas"
                  ],
                  "correct_index": 1,
                  "explanation": "Compaction destroys bulk soil structure and macropores, creating anoxic conditions that inhibit root respiration and hydraulic conductivity."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G6-Q4",
            "title": "Grade 6 Urban Heat Island Equity & Spatial GIS Mapping",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 6",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "SCIENCE",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Social Studies 6.3A",
                  "Social Studies 6.3B",
                  "Science 6.3C",
                  "ELAR 6.12A"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-G6-Q3"
            ],
            "mastery_points": 100,
            "summary": "Use desktop GIS layers (USGS Landsat thermal IR / NLCD Tree Canopy) to analyze regional heat disparities. Correlate socioeconomic demographic indices with municipal canopy cover percentages.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Social Studies 6.3A, Social Studies 6.3B, Science 6.3C. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Satellite GIS Microclimate & Canopy Spatial Analysis: Students overlay NDVI vegetation index maps with surface thermal bands across their school district to identify canopy deserts.",
            "quiz": {
                  "question": "What is the primary correlation observed between urban tree canopy density and summer surface temperatures in South Texas cities?",
                  "options": [
                        "Positive correlation (more trees = hotter)",
                        "Strong inverse correlation (higher canopy = significantly lower surface temperatures)",
                        "No relationship whatsoever",
                        "Trees only cool in winter"
                  ],
                  "correct_index": 1,
                  "explanation": "Dense tree canopy provides direct solar interception and evaporative cooling, strongly driving down surface and ambient temperatures."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G7-Q1",
            "title": "Grade 7 Solar Radiation Interception & Photosynthetic Energetics",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 7",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "SCIENCE",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science 7.8A",
                  "Science 7.8B",
                  "Science 7.12A",
                  "Math 7.4A"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Measure Photosynthetically Active Radiation (PAR, $\\mu\\text{mol}/\\text{m}^2/\\text{s}$) above and below tree canopies. Calculate leaf area index (LAI) and canopy light extinction coefficients using the Beer-Lambert Law ($I = I_0 e^{-k \\cdot LAI}$).",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science 7.8A, Science 7.8B, Science 7.12A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "PAR Light Interception & Beer-Lambert Canopy Assay: Students record incident PAR in full sun, take 10 under-canopy readings at uniform spacing, and compute canopy light extinction percentage.",
            "quiz": {
                  "question": "If incident solar PAR is 2,000 \u00b5mol/m\u00b2/s and under-canopy PAR is 200 \u00b5mol/m\u00b2/s, what percentage of photosynthetic light is intercepted by the tree?",
                  "options": [
                        "10%",
                        "50%",
                        "90%",
                        "100%"
                  ],
                  "correct_index": 2,
                  "explanation": "Intercepted light = (2000 - 200) / 2000 = 1800 / 2000 = 90% interception."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G7-Q2",
            "title": "Grade 7 Dendrochronology, Xylem Anatomy & Historical Climate Reconstructions",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 7",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "SCIENCE",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Science 7.11A",
                  "Science 7.11B",
                  "Math 7.11A",
                  "Social Studies 7.9A"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-G7-Q1"
            ],
            "mastery_points": 100,
            "summary": "Analyze cross-dating skeleton plots of tree core samples to identify historical Texas megadroughts (e.g., 1950s, 2011). Examine tracheid and vessel element diameter variations under high-power microscopy.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Science 7.11A, Science 7.11B, Math 7.11A. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Dendroclimatic Skeleton Plotting & Xylem Vessel Microscopy: Students measure annual ring widths in millimeters across a 50-year core specimen, cross-date drought signature years, and construct a master chronology.",
            "quiz": {
                  "question": "Why do vessel elements in angiosperm springwood (early season wood) have much larger diameters than late summerwood vessels?",
                  "options": [
                        "They are filled with air",
                        "Large diameters maximize volumetric water flux during rapid spring growth when water is abundant",
                        "Insects hollow them out",
                        "To store heavy minerals"
                  ],
                  "correct_index": 1,
                  "explanation": "Poiseuille's law dictates that fluid flow through a tube scales with the 4th power of radius ($r^4$), maximizing spring hydraulic conductance."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G7-Q3",
            "title": "Grade 7 Agroecological Nutrient Cycling & Rhizosphere Microbiology",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 7",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "SCIENCE",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science 7.12B",
                  "Science 7.12C",
                  "Science 7.13A",
                  "Math 7.12A"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-G7-Q2"
            ],
            "mastery_points": 100,
            "summary": "Evaluate nitrogen fixation rates in leguminous Fabaceae species (Pithecellobium, Prosopis, Senegalia). Perform colorimetric soil nitrate ($NO_3^-$), phosphate ($PO_4^{3-}$), and potassium ($K^+$) NPK assays.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science 7.12B, Science 7.12C, Science 7.13A. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Colorimetric Soil NPK Chemistry & Rhizobia Nodule Assay: Students extract soil samples from legume root zones and bare turf, execute chemical extraction protocols, and read spectrophotometric color charts.",
            "quiz": {
                  "question": "What biochemical transformation is catalyzed by nitrogenase enzymes in Rhizobia root nodules?",
                  "options": [
                        "Conversion of water into hydrogen gas",
                        "Reduction of inert atmospheric N2 gas into bioavailable ammonia (NH3/NH4+)",
                        "Oxidation of carbon dioxide into sugar",
                        "Breakdown of toxic rocks into sand"
                  ],
                  "correct_index": 1,
                  "explanation": "Nitrogenase reduces atmospheric N2 to ammonia, enabling plants to synthesize essential amino acids and proteins."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G7-Q4",
            "title": "Grade 7 Environmental Justice, Watershed Hydrology & Runoff Mitigation",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 7",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "SCIENCE",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Science 7.10B",
                  "Social Studies 7.8A",
                  "Math 7.9C",
                  "ELAR 7.12B"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-G7-Q3"
            ],
            "mastery_points": 100,
            "summary": "Calculate municipal stormwater volume reduction using the Rational Runoff Method ($Q = C \\cdot I \\cdot A$). Model how urban tree canopies attenuate peak stormwater surge and prevent flash flooding in low-lying colonias.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Science 7.10B, Social Studies 7.8A, Math 7.9C. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Rational Runoff Hydrologic Modeling & Bioswale Design Lab: Students calculate pre- and post-planting runoff volumes for a 2-inch design storm over campus parking lots using varying runoff coefficients.",
            "quiz": {
                  "question": "How does replacing impermeable asphalt (Runoff Coefficient C = 0.90) with forested soil (C = 0.15) impact peak storm runoff?",
                  "options": [
                        "Increases runoff by 500%",
                        "Reduces peak stormwater runoff volume by up to 83%, recharging the shallow water table",
                        "Has zero impact on stormwater",
                        "Stops all rain from falling"
                  ],
                  "correct_index": 1,
                  "explanation": "Lower runoff coefficients mean significantly more precipitation is intercepted, stored, and infiltrated into groundwater."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G8-Q1",
            "title": "Grade 8 Microclimate Thermodynamics & Bowen Ratio Flux",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 8",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "SCIENCE",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science 8.8A",
                  "Science 8.8B",
                  "Science 8.9B",
                  "Math 8.4B"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Calculate the Bowen Ratio ($B = H / LE$, sensible heat flux divided by latent heat flux) across distinct urban biomes. Demonstrate how high tree canopy converts incident solar radiation into latent cooling rather than blistering sensible heat.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science 8.8A, Science 8.8B, Science 8.9B. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Bowen Ratio Energetics & Thermal Plume Profiling Lab: Students record sensible temperature and vapor pressure gradients at multiple heights (0.1m, 1.0m, 2.0m) to calculate Bowen ratio shifts.",
            "quiz": {
                  "question": "A dry parking lot has a Bowen Ratio of B = 5.0, while an irrigated native forest canopy has B = 0.2. What does this mean physically?",
                  "options": [
                        "The parking lot is freezing cold",
                        "In the forest, 80%+ of incoming solar energy is dissipated safely as latent evaporation rather than heating the air",
                        "Trees emit nuclear heat",
                        "Water does not evaporate in forests"
                  ],
                  "correct_index": 1,
                  "explanation": "A low Bowen ratio ($B < 1$) indicates latent heat of transpiration dominates over sensible air heating, keeping ecosystems cool."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G8-Q2",
            "title": "Grade 8 Allometric Scaling Laws, Volume Calculus & Carbon Equivalence",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 8",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "SCIENCE",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Math 8.7A",
                  "Math 8.7B",
                  "Science 8.12A",
                  "Science 8.12B"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-G8-Q1"
            ],
            "mastery_points": 100,
            "summary": "Derive allometric power-law relationships ($Y = a M^b$) governing tree geometry and structural load capacity. Calculate total stand basal area ($BA = 0.005454 \\times DBH^2$) in square feet per acre.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Math 8.7A, Math 8.7B, Science 8.12A. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Stand Basal Area Cruising & Allometric Power Law Lab: Students execute a point-sampling stand cruise with angle gauges, tally 'in' trees, compute basal area per acre, and calculate carbon stock.",
            "quiz": {
                  "question": "In forestry allometry, why does tree mass scale with an exponent greater than 2 relative to DBH (e.g., M ~ DBH^2.4)?",
                  "options": [
                        "Trees grow only horizontally",
                        "As trees increase in diameter, they also grow taller and increase wood density, expanding in 3-dimensional volume",
                        "Mathematics does not apply to biology",
                        "Bark disappears as trees age"
                  ],
                  "correct_index": 1,
                  "explanation": "Tree mass is volumetric ($V \\propto r^2 h$), and height scales allometrically with diameter, producing a scaling exponent around 2.3-2.6."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G8-Q3",
            "title": "Grade 8 Soil Pedogenesis, Mycorrhizae & Carbon Sequestration",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 8",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "SCIENCE",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science 8.10B",
                  "Science 8.11A",
                  "Science 8.11B",
                  "Math 8.11A"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-G8-Q2"
            ],
            "mastery_points": 100,
            "summary": "Analyze soil profile pedogenesis from parent geological material to organic O-horizon development. Investigate glomalin production by arbuscular mycorrhizal fungi (AMF) as a persistent soil carbon sink.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science 8.10B, Science 8.11A, Science 8.11B. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Soil Horizon Augering & Glomalin Carbon Core Assay: Students extract 30-inch soil cores, identify O, A, B, and C horizons using Munsell color notation, and measure dry bulk density ($g/cm^3$).",
            "quiz": {
                  "question": "What is the critical role of glomalin, a glycoprotein secreted by mycorrhizal fungi?",
                  "options": [
                        "It poisons beneficial bacteria",
                        "It acts as a biological superglue that stabilizes soil aggregates and stores up to 30% of global soil carbon",
                        "It turns soil into liquid acid",
                        "It dissolves tree roots"
                  ],
                  "correct_index": 1,
                  "explanation": "Glomalin binds soil particles into stable macro-aggregates, protecting organic carbon from microbial oxidation for decades."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-G8-Q4",
            "title": "Grade 8 Climate Resilience, Urban Canopy Policy & Municipal Design",
            "tier": "6_8",
            "tier_label": "6\u20138 Middle School",
            "grade": "Grade 8",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "SCIENCE",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Social Studies 8.10A",
                  "Social Studies 8.29A",
                  "Science 8.3B",
                  "ELAR 8.12D"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-G8-Q3"
            ],
            "mastery_points": 100,
            "summary": "Model 50-year climate projection scenarios for South Texas (increasing 100\u00b0F+ heat days and intense storm events). Evaluate municipal shade ordinances, tree preservation policies, and green infrastructure bond measures.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Social Studies 8.10A, Social Studies 8.29A, Science 8.3B. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Municipal Urban Forestry Policy & Resilience Master Plan: Student teams draft a comprehensive 10-year campus resilience blueprint specifying target canopy cover percentages, budget, and species diversity quotas.",
            "quiz": {
                  "question": "Why does the '10-20-30' rule of urban forestry recommend planting no more than 10% of one species, 20% of one genus, and 30% of one family?",
                  "options": [
                        "To make the park look messy",
                        "To build biological resilience against catastrophic species-specific pest outbreaks (like Emerald Ash Borer or Oak Wilt)",
                        "Because Texas law bans single species",
                        "To save money on seeds"
                  ],
                  "correct_index": 1,
                  "explanation": "High phylogenetic diversity prevents widespread tree mortality when specialized pathogens or insects strike urban forests."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-BIO-Q1",
            "title": "Biology: Photosynthetic Photochemistry & Stomatal Dynamics",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Biology (Grade 9)",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "AGROECOLOGY",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science BIO.9A",
                  "Science BIO.9B",
                  "Science BIO.11A",
                  "Science BIO.12A"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Detail the biochemical mechanics of the Light Reactions (Photosystem II & I) and Calvin-Benson Cycle. Quantify stomatal conductance ($g_s$) and transpiration rate using steady-state porometers.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science BIO.9A, Science BIO.9B, Science BIO.11A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Porometric Stomatal Conductance & RuBisCO Efficiency Assay: Students measure real-time stomatal conductance ($mmol/m^2/s$) on sunlit vs shaded leaves and extract chlorophyll a/b absorption spectrums.",
            "quiz": {
                  "question": "Under peak midday heat and drought stress in South Texas, why do xerophytic trees close their stomata even though it halts photosynthetic carbon fixation?",
                  "options": [
                        "To store excess oxygen",
                        "To prevent catastrophic xylem cavitation (hydraulic embolism) caused by excessive negative water potential",
                        "Because trees sleep at noon",
                        "To change leaf color"
                  ],
                  "correct_index": 1,
                  "explanation": "Closing stomata limits transpirational tension, preventing xylem tension from exceeding the critical cavitation threshold."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-BIO-Q2",
            "title": "Biology: Woody Plant Secondary Growth, Xylem Anatomy & Carbon Allocation",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Biology (Grade 9)",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "AGROECOLOGY",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Science BIO.10B",
                  "Science BIO.11B",
                  "Science BIO.12B",
                  "Math ALG1.2A"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-BIO-Q1"
            ],
            "mastery_points": 100,
            "summary": "Contrast vascular cambium fusiform initials and ray initials in secondary xylem and phloem formation. Model non-structural carbohydrate (NSC) allocation to roots, stems, defensive tannins, and reproduction.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Science BIO.10B, Science BIO.11B, Science BIO.12B. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Secondary Cambium Histology & NSC Starch Staining Assay: Students cut ultra-thin transverse wood sections, stain for starch with Lugol's iodine, and quantify vascular ring width and ray parenchyma density.",
            "quiz": {
                  "question": "What primary tissue generated by the vascular cambium constitutes the bulk of harvestable structural timber and sequestered biomass carbon?",
                  "options": [
                        "Epidermis",
                        "Secondary xylem (wood)",
                        "Cortex",
                        "Apical meristem"
                  ],
                  "correct_index": 1,
                  "explanation": "Secondary xylem cells, heavily lignified and thickened, make up the woody interior of tree trunks and branches."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-BIO-Q3",
            "title": "Biology: Subtropical Agroecology, Mycorrhizae & Ecological Succession",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Biology (Grade 9)",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "AGROECOLOGY",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science BIO.12A",
                  "Science BIO.12C",
                  "Science BIO.12F",
                  "Science BIO.13C"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-BIO-Q2"
            ],
            "mastery_points": 100,
            "summary": "Analyze mutualistic ectomycorrhizal (ECM) and arbuscular mycorrhizal (AMF) root symbiosis. Construct multi-strata syntropic agroforestry models combining canopy leguminous trees, fruit layers, and ground cover.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science BIO.12A, Science BIO.12C, Science BIO.12F. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Root Mycorrhizal Infection Fraction & Agroecological Polyculture Design: Students clear and stain fine feeder roots, observe AMF arbuscules/vesicles under 200x magnification, and calculate percent mycorrhizal colonization.",
            "quiz": {
                  "question": "In syntropic agroforestry, what is the ecological purpose of aggressive pruning of legume nurse trees (like Leucaena or Mesquite)?",
                  "options": [
                        "To kill the trees",
                        "To stimulate root turnover, release fixed nitrogen pulses, and drop high-carbon organic mulch to nourish crop layers",
                        "To prevent any sunlight from reaching the ground",
                        "To harvest firewood only"
                  ],
                  "correct_index": 1,
                  "explanation": "Pruning pulses root sloughing and provides nutrient-rich chop-and-drop biomass that feeds soil biology and accelerates succession."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-BIO-Q4",
            "title": "Biology: Biodiversity Conservation, Island Biogeography & Wildlife Corridors",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Biology (Grade 9)",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "AGROECOLOGY",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Science BIO.13A",
                  "Science BIO.13B",
                  "Science BIO.13D",
                  "Social Studies 9.4B"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-BIO-Q3"
            ],
            "mastery_points": 100,
            "summary": "Apply the MacArthur-Wilson Equilibrium Model of Island Biogeography ($S = C \\cdot A^z$) to fragmented urban forest remnants. Quantify edge effects, microclimate degradation, and invasive species encroachment along patch perimeters.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Science BIO.13A, Science BIO.13B, Science BIO.13D. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Forest Patch Edge Effect Transect & Corridors GIS Lab: Students run 50m perpendicular transects from forest exterior into core interior, logging light, humidity, soil temp, and exotic weed frequency.",
            "quiz": {
                  "question": "According to island biogeography theory, what happens to species extinction rates when an urban forest tract is fragmented into small isolated patches?",
                  "options": [
                        "Extinction rates drop to zero",
                        "Extinction rates increase significantly due to reduced population sizes, genetic drift, and expanded edge effects",
                        "Species diversity doubles",
                        "Fragmented patches attract infinite wildlife"
                  ],
                  "correct_index": 1,
                  "explanation": "Smaller, isolated habitat fragments sustain smaller populations vulnerable to stochastic extinction and abiotic edge stress."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-CHEM-Q1",
            "title": "Chemistry: Atmospheric Thermodynamics, VOCs & Tropospheric Ozone",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Chemistry (Grade 10)",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "SCIENCE",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science CHEM.11A",
                  "Science CHEM.11B",
                  "Science CHEM.12A",
                  "Science CHEM.12C"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Model the photochemical reaction mechanisms forming tropospheric ozone ($NO_x + \\text{VOCs} + h\\nu \\rightarrow O_3$). Quantify biogenic volatile organic compound (BVOC) emissions (isoprene, monoterpenes) from urban tree species.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science CHEM.11A, Science CHEM.11B, Science CHEM.12A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Photochemical Ozone Titration & Particulate Matter Deposition Lab: Students wash leaves from roadside vs interior campus trees, filter wash water through 0.45\u00b5m membranes, and gravimetrically determine PM deposition mass.",
            "quiz": {
                  "question": "How do tree leaves physically capture and remove dangerous PM2.5 particulate air pollution from school zones?",
                  "options": [
                        "They convert particles into helium",
                        "Turbulent air flow causes particles to deposit onto waxy cuticles, trichomes (leaf hairs), and resinous leaf surfaces",
                        "Leaves act as magnetic poles",
                        "They vaporize dust instantly"
                  ],
                  "correct_index": 1,
                  "explanation": "Particulate matter impacts and adheres to leaf microstructures and waxy epidermal layers, being removed from the breathing zone until washed by rain."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-CHEM-Q2",
            "title": "Chemistry: Wood Macromolecules: Cellulose, Hemicellulose & Lignin",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Chemistry (Grade 10)",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "SCIENCE",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Science CHEM.7A",
                  "Science CHEM.7B",
                  "Science CHEM.8A",
                  "Science CHEM.10A"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-CHEM-Q1"
            ],
            "mastery_points": 100,
            "summary": "Analyze the organic polymer structures of $\\beta$-D-glucose cellulose chains and complex polyphenolic lignin. Determine chemical composition and stoichiometric carbon density of hardwood vs softwood structural polymers.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Science CHEM.7A, Science CHEM.7B, Science CHEM.8A. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Lignocellulosic Fiber Isolation & Chemical Fractionation Lab: Students digest wood sawdust in alkaline solution to dissolve lignin, filter out raw white cellulose pulp, and calculate percent lignin content.",
            "quiz": {
                  "question": "What chemical property of the complex aromatic polymer lignin makes wood resistant to biological degradation and water rot?",
                  "options": [
                        "It is 100% soluble in water",
                        "It forms an impermeable, highly cross-linked hydrophobic matrix encasing hydrophilic cellulose microfibrils",
                        "It consists solely of simple table sugar",
                        "It evaporates at room temperature"
                  ],
                  "correct_index": 1,
                  "explanation": "Lignin's complex, irregular phenolic cross-links provide rigid mechanical strength and hydrophobic resistance to enzymatic digestion."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-CHEM-Q3",
            "title": "Chemistry: Soil Redox Chemistry, Cation Exchange & Nutrient Bioavailability",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Chemistry (Grade 10)",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "SCIENCE",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science CHEM.10E",
                  "Science CHEM.10F",
                  "Science CHEM.11C",
                  "Science CHEM.12B"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-CHEM-Q2"
            ],
            "mastery_points": 100,
            "summary": "Calculate Cation Exchange Capacity ($CEC$, $meq/100g$) for calcium ($Ca^{2+}$), magnesium ($Mg^{2+}$), and potassium ($K^+$). Analyze soil $pH$ buffering curves and aluminum toxicity thresholds in acidic vs calcareous soils.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science CHEM.10E, Science CHEM.10F, Science CHEM.11C. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Soil Cation Exchange Capacity (CEC) & pH Buffering Titration: Students titrate soil extracts from unmulched turf vs high-humus forest soil, generating electrometric titration curves to quantify pH buffering capacity.",
            "quiz": {
                  "question": "Why do high-humus agroforestry soils resist sudden pH shifts when exposed to acid or alkaline runoff?",
                  "options": [
                        "They contain pure distilled water",
                        "Humic acid polymers contain abundant carboxyl (-COOH) and phenolic (-OH) functional groups that buffer H+ ions",
                        "Humus destroys all chemicals",
                        "Soil particles do not interact with ions"
                  ],
                  "correct_index": 1,
                  "explanation": "Functional carboxyl and phenolic groups on humic colloids protonate and deprotonate across pH ranges, acting as powerful chemical buffers."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-CHEM-Q4",
            "title": "Chemistry: Biogeochemical Carbon Flux, Pyrolysis & Biochar Sequestration",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Chemistry (Grade 10)",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "SCIENCE",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Science CHEM.11B",
                  "Science CHEM.12A",
                  "Science CHEM.12C",
                  "Math ALG2.2A"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-CHEM-Q3"
            ],
            "mastery_points": 100,
            "summary": "Model thermochemical pyrolysis of woody biomass into recalcitrant biochar ($C_n H_m O_k \\rightarrow C_{\\text{char}} + \\text{syngas} + \\text{bio-oil}$). Measure specific surface area ($m^2/g$) and pore volume of agricultural biochar amendments.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Science CHEM.11B, Science CHEM.12A, Science CHEM.12C. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Biomass Pyrolysis & Methylene Blue Surface Area Adsorption Lab: Students convert wood chips to biochar under oxygen-limited pyrolysis, test dye adsorption capacity, and calculate porous surface area per gram.",
            "quiz": {
                  "question": "Why is adding biochar to agricultural soils considered a carbon-negative technology?",
                  "options": [
                        "Biochar dissolves into CO2 gas instantly",
                        "It converts labile biological carbon into highly stable aromatic carbon rings that resist microbial oxidation for centuries",
                        "Biochar consumes all oxygen",
                        "It turns soil into plastic"
                  ],
                  "correct_index": 1,
                  "explanation": "Pyrolysis locks photosynthetic carbon into fused aromatic ring structures that microorganisms cannot easily metabolize, storing carbon for centuries."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-PHYS-Q1",
            "title": "Physics: Solar Radiation, Surface Albedo & Planckian Blackbody Physics",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Physics (Grade 11)",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "SCIENCE",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science PHYS.5A",
                  "Science PHYS.5B",
                  "Science PHYS.7A",
                  "Science PHYS.7B"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Apply Stefan-Boltzmann Law ($P/A = \\epsilon \\sigma T^4$) and Wien's Displacement Law ($\\lambda_{\\text{max}} T = b$) to urban surfaces. Calculate spectral reflectance and shortwave albedo ($\\alpha$) across asphalt, cool roofs, and multi-layered foliage.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science PHYS.5A, Science PHYS.5B, Science PHYS.7A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "Albedo Spectrometry & Stefan-Boltzmann Blackbody Radiation Lab: Students measure incident vs reflected solar irradiance to determine surface albedos, and calculate radiant flux density ($W/m^2$) for asphalt vs tree shade.",
            "quiz": {
                  "question": "If an asphalt surface has an emissivity \u03b5 = 0.95 and temperature T = 330 K (57\u00b0C), what is its radiant power output per square meter? (\u03c3 = 5.67 \u00d7 10^-8 W/m\u00b2\u00b7K\u2074)",
                  "options": [
                        "50 W/m\u00b2",
                        "330 W/m\u00b2",
                        "638 W/m\u00b2",
                        "5,000 W/m\u00b2"
                  ],
                  "correct_index": 2,
                  "explanation": "P/A = 0.95 * (5.67e-8) * (330^4) = 0.95 * 5.67e-8 * 1.186e10 = 638.8 W/m\u00b2."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-PHYS-Q2",
            "title": "Physics: Fluid Dynamics of Tree Xylem, Poiseuille Flow & Capillary Pressure",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Physics (Grade 11)",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "SCIENCE",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Science PHYS.6B",
                  "Science PHYS.6C",
                  "Science PHYS.8A",
                  "Math PRECALC.2A"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-PHYS-Q1"
            ],
            "mastery_points": 100,
            "summary": "Apply the Hagen-Poiseuille Equation ($\\Delta P = \\frac{8 \\mu L Q}{\\pi r^4}$) to xylem hydraulic conductance in vascular trees. Calculate negative hydrostatic pressure potentials (up to -2.5 MPa) sustained by water column tensile strength (Cohesion-Tension Theory).",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Science PHYS.6B, Science PHYS.6C, Science PHYS.8A. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "Scholander Pressure Bomb Water Potential & Capillary Flow Lab: Students seal leafy shoots in pressure chambers, apply pressurized gas until xylem sap surfaces at cut stem, and record leaf water potential ($\\Psi_w$).",
            "quiz": {
                  "question": "According to Poiseuille's Law, if drought stress forces a tree to produce xylem conduits with half the radius (r/2), how is volumetric flow rate affected?",
                  "options": [
                        "Reduced by 50%",
                        "Reduced by 75%",
                        "Reduced by a factor of 16 (1/16th flow rate)",
                        "Flow rate remains unchanged"
                  ],
                  "correct_index": 2,
                  "explanation": "Volumetric flow rate Q is directly proportional to r^4. (1/2)^4 = 1/16th of the original flow capacity."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-PHYS-Q3",
            "title": "Physics: Acoustic Wave Attenuation & Forest Noise Buffering",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Physics (Grade 11)",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "SCIENCE",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science PHYS.7C",
                  "Science PHYS.7D",
                  "Science PHYS.8B",
                  "Math ALG2.5A"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-PHYS-Q2"
            ],
            "mastery_points": 100,
            "summary": "Model acoustic sound pressure level attenuation ($L_p = L_{p0} - 20 \\log_{10}(d/d_0) - A_{\\text{excess}}$) through vegetation belts. Measure frequency-dependent acoustic absorption (125 Hz to 8 kHz) across leafy canopies, trunks, and porous forest soil.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science PHYS.7C, Science PHYS.7D, Science PHYS.8B. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Precision Decibel Sound Level Metrology & Canopy Attenuation Lab: Students broadcast standardized pink noise at 85 dB, measure sound pressure decay at 5m, 10m, 20m through open ground vs dense shelterbelt, and plot dB attenuation.",
            "quiz": {
                  "question": "What acoustic mechanism enables porous forest mulch and leaf litter to significantly dampen low-frequency vehicular rumble?",
                  "options": [
                        "It reflects sound like a mirror",
                        "Viscous friction and thermal dissipation within the tortuous microscopic air pores convert sound wave energy into micro-heat",
                        "Mulch absorbs gravity",
                        "It doubles the frequency"
                  ],
                  "correct_index": 1,
                  "explanation": "Porous materials force acoustic particle velocity through narrow tortuous channels, dissipating acoustic energy as heat via viscous boundary friction."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-PHYS-Q4",
            "title": "Physics: Biomechanical Structural Engineering & Wind Drag Mechanics",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Physics (Grade 11)",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "SCIENCE",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Science PHYS.4A",
                  "Science PHYS.4B",
                  "Science PHYS.4C",
                  "Science PHYS.6A"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-PHYS-Q3"
            ],
            "mastery_points": 100,
            "summary": "Calculate aerodynamic drag force on tree crowns ($F_d = \\frac{1}{2} \\rho v^2 C_d A$) during extreme hurricane wind events. Determine the bending moment ($M = F \\cdot h$) and shear stresses sustained by trunk wood fibers.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Science PHYS.4A, Science PHYS.4B, Science PHYS.4C. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Wind Tunnel Crown Drag Reconfiguration & Pulling Test Lab: Students mount sapling specimens in wind airstreams, record force gauge deflection at velocities from 10 to 30 m/s, and calculate dynamic drag coefficients.",
            "quiz": {
                  "question": "How do flexible native trees like Honey Mesquite reduce hurricane wind damage compared to rigid artificial structures?",
                  "options": [
                        "They fly away with the wind",
                        "Crown branches streamline and compress in high winds (reconfiguration), reducing effective frontal area A and drag coefficient Cd",
                        "They turn into liquid",
                        "They increase their surface area"
                  ],
                  "correct_index": 1,
                  "explanation": "Elastic reconfiguration streamlines the canopy geometry into a teardrop profile, causing drag force to scale much more slowly than $v^2$."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-ENV-Q1",
            "title": "Environmental Systems: Urban Heat Island Epidemiology, WBGT & Public Health",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Environmental Systems (Grade 12)",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "AGROECOLOGY",
            "theme_plt": 1,
            "theme_plt_label": "What is a Forest? (Canopy & Microclimate Physics)",
            "teks_codes": [
                  "Science ENV.8A",
                  "Science ENV.8B",
                  "Science ENV.9A",
                  "Science ENV.9B"
            ],
            "science_rtc": "Patterns & Energy/Matter Flux",
            "science_sep": "Collecting, Recording, and Analyzing Observational Data",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Measure Wet-Bulb Globe Temperature ($WBGT = 0.7 T_w + 0.2 T_g + 0.1 T_d$) to assess outdoor student heat exertion thresholds. Analyze epidemiological data correlating extreme heat exposure with heat stroke, pediatric asthma, and cognitive fatigue.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Fall Canopy Physics & Microclimate Thermodynamics into an outdoor laboratory?",
            "theory": "Module covers Fall Canopy Physics & Microclimate Thermodynamics in alignment with Science ENV.8A, Science ENV.8B, Science ENV.9A. Focuses on Patterns & Energy/Matter Flux and Collecting, Recording, and Analyzing Observational Data.",
            "lab": "WBGT Environmental Metrology & Student Heat Safety Protocol: Students record WBGT index values across unshaded turf, artificial turf fields, and shaded outdoor classrooms during peak solar hours.",
            "quiz": {
                  "question": "Why is Wet-Bulb Globe Temperature (WBGT) a vastly superior metric for human heat stress than simple dry-bulb air temperature?",
                  "options": [
                        "WBGT is easier to guess",
                        "WBGT integrates ambient temperature, humidity, wind velocity, and radiant heat flux (direct solar load)",
                        "Dry-bulb temperature is always fake",
                        "WBGT only works at night"
                  ],
                  "correct_index": 1,
                  "explanation": "WBGT measures human thermodynamic reality by combining radiant solar heat, humidity-limited evaporative sweating cooling, and convective wind."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-ENV-Q2",
            "title": "Environmental Systems: Forest Allometry, i-Tree Eco Valuation & Ecosystem Services",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Environmental Systems (Grade 12)",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry, Dendrology & Geometry",
            "subject": "AGROECOLOGY",
            "theme_plt": 3,
            "theme_plt_label": "How We Relate to Forests (Biomass, Dendrology & Geometry)",
            "teks_codes": [
                  "Science ENV.5A",
                  "Science ENV.5B",
                  "Science ENV.7A",
                  "Math STATS.2A"
            ],
            "science_rtc": "Scale, Proportion, and Quantity",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "LAB-ENV-Q1"
            ],
            "mastery_points": 100,
            "summary": "Conduct full USDA Forest Service i-Tree Eco plot inventory protocols across campus boundaries. Quantify annual monetary values for air pollution removal, carbon sequestration, and stormwater runoff mitigation.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Winter Biomass Allometry, Dendrology & Geometry into an outdoor laboratory?",
            "theory": "Module covers Winter Biomass Allometry, Dendrology & Geometry in alignment with Science ENV.5A, Science ENV.5B, Science ENV.7A. Focuses on Scale, Proportion, and Quantity and Using Mathematics and Computational Thinking.",
            "lab": "USDA i-Tree Eco Natural Capital Asset Valuation Lab: Students establish 0.1-acre random circular plots, inventory all woody species, input crown condition metrics, and run institutional dollar valuation algorithms.",
            "quiz": {
                  "question": "In municipal natural capital accounting, what is an 'ecosystem service' provided by an urban forest?",
                  "options": [
                        "A bill sent by the city",
                        "Direct ecological functions (air purification, flood control, thermal cooling) that provide measurable economic benefits to society",
                        "Tree cutting fees",
                        "Fertilizer purchase costs"
                  ],
                  "correct_index": 1,
                  "explanation": "Ecosystem services are quantifiable ecological functions that produce tangible economic, health, and environmental value."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-ENV-Q3",
            "title": "Environmental Systems: Subtropical Agroforestry, Polycultures & Soil Carbon",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Environmental Systems (Grade 12)",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "AGROECOLOGY",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter? (Subtropical Agroecology & Soils)",
            "teks_codes": [
                  "Science ENV.6A",
                  "Science ENV.6B",
                  "Science ENV.7B",
                  "Science ENV.10A"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Developing and Using Models / Investigating Interactions",
            "prerequisites": [
                  "LAB-ENV-Q2"
            ],
            "mastery_points": 100,
            "summary": "Design regenerative agroforestry food forests optimizing multi-tier light capture, nitrogen cycling, and soil water recharge. Measure Soil Organic Carbon (SOC) density ($g C / m^2$) across continuous agroforestry plots vs conventional tilled acreage.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Early Spring Subtropical Agroecology & Soil Mycorrhizae into an outdoor laboratory?",
            "theory": "Module covers Early Spring Subtropical Agroecology & Soil Mycorrhizae in alignment with Science ENV.6A, Science ENV.6B, Science ENV.7B. Focuses on Systems and System Models and Developing and Using Models / Investigating Interactions.",
            "lab": "Regenerative Agroforestry Design & Soil Carbon Profiling Lab: Students extract depth-stratified soil cores (0-15cm, 15-30cm), perform carbon analysis, and draft scaled 7-layer syntropic agroforestry planting plans.",
            "quiz": {
                  "question": "How does integrating multi-species agroforestry with perennial trees enhance farm climate resilience compared to annual monoculture crops?",
                  "options": [
                        "It requires 10x more synthetic pesticide",
                        "Deep perennial root systems access deep water tables, build resilient soil organic matter, and buffer extreme weather shocks",
                        "Trees prevent all rain from falling",
                        "It eliminates all soil biodiversity"
                  ],
                  "correct_index": 1,
                  "explanation": "Perennial multi-tier agroforestry creates microclimates, enhances water infiltration, recycles deep nutrients, and sequesters long-term carbon."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "LAB-ENV-Q4",
            "title": "Environmental Systems: Municipal Heat Equity, Climate Policy & Environmental Law",
            "tier": "9_12",
            "tier_label": "9\u201312 High School",
            "grade": "Environmental Systems (Grade 12)",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity, Policy & Cultural Ecology",
            "subject": "AGROECOLOGY",
            "theme_plt": 4,
            "theme_plt_label": "What is the Future of Forests? (Community Equity & Policy)",
            "teks_codes": [
                  "Science ENV.9C",
                  "Science ENV.9D",
                  "Social Studies GOV.14A",
                  "Social Studies GOV.15A"
            ],
            "science_rtc": "Stability and Change / Cause and Effect",
            "science_sep": "Constructing Explanations and Designing Solutions",
            "prerequisites": [
                  "LAB-ENV-Q3"
            ],
            "mastery_points": 100,
            "summary": "Analyze historical redlining and municipal disinvestment maps correlating with current urban heat island severity (Heat Equity Gap). Review federal Title II-A, Title IV, and USDA Urban & Community Forestry Grant funding statutory frameworks.",
            "hook": "How do native trees on your campus regulate extreme heat, capture carbon, and transform Late Spring Community Heat Equity, Policy & Cultural Ecology into an outdoor laboratory?",
            "theory": "Module covers Late Spring Community Heat Equity, Policy & Cultural Ecology in alignment with Science ENV.9C, Science ENV.9D, Social Studies GOV.14A. Focuses on Stability and Change / Cause and Effect and Constructing Explanations and Designing Solutions.",
            "lab": "Municipal Tree Equity Ordinance Drafting & City Council Simulation: Student teams represent competing stakeholders (city planners, developers, environmental justice advocates, public health officials) to debate and pass a model Tree Equity Ordinance.",
            "quiz": {
                  "question": "What is the primary objective of a municipal Tree Equity ordinance that targets high-poverty, low-canopy neighborhoods for prioritized tree investments?",
                  "options": [
                        "To increase taxes on trees",
                        "To systematically eliminate disparities in heat exposure, respiratory health risks, and energy burdens in historically marginalized communities",
                        "To ban all trees in wealthy areas",
                        "To replace all grass with asphalt"
                  ],
                  "correct_index": 1,
                  "explanation": "Tree Equity policies remediate environmental injustices by targeting canopy infrastructure to neighborhoods suffering disproportionate heat and pollution."
            },
            "citations": [
                  "Texas Essential Knowledge and Skills (TEKS) - Texas Education Agency (19 TAC Chapter 112)",
                  "Project Learning Tree (2020) Forest Literacy Framework",
                  "UTRGV Agroecology & Resilient Communities Research Laboratory",
                  "Texas A&M Forest Service Urban Forestry Technical Report"
            ]
      },
      {
            "id": "comm_sombra_sana",
            "title": "Sombra Sana: Backyard Shade Placement & Energy Savings",
            "tier": "community",
            "tier_label": "Parent & Community",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity & Policy",
            "subject": "Interdisciplinary",
            "theme_plt": 3,
            "theme_plt_label": "How Do We Sustain Our Forests?",
            "teks_codes": [
                  "Community Lifelong Education"
            ],
            "science_rtc": "Energy and Matter",
            "science_sep": "Designing Practical Engineering Solutions",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Learn how strategic placement of native shade trees on South and West walls reduces household summer electricity bills by 15\u201325%.",
            "hook": "\u00bfSab\u00edas que sembrar un \u00e1rbol nativo en el lado oeste de tu casa puede reducir tu recibo de luz hasta un 25%?",
            "theory": "West-facing residential walls absorb punishing afternoon solar radiation when outdoor ambient temperatures peak. Planting deciduous or evergreen native species shades roofs and windows, reducing air conditioning run-time.",
            "lab": "Participate in a hands-on community tree planting clinic. Master the 'champagne glass' hole width (3x root ball width) and ensure root flare is positioned 1 inch above finished grade.",
            "quiz": {
                  "question": "Which side of a South Texas home receives the most intense, heating afternoon sunlight in July and August?",
                  "options": [
                        "The North-facing wall",
                        "The West-facing wall",
                        "The East-facing wall at sunrise",
                        "Directly under the foundation"
                  ],
                  "correct_index": 1,
                  "explanation": "West-facing exterior walls absorb punishing afternoon solar radiation when outdoor ambient temperatures peak, making West-side shade trees the most effective for lowering electric bills."
            },
            "citations": [
                  "Texas Trees Foundation Residential Energy Study",
                  "Texas A&M AgriLife Extension Tree Care Guide"
            ]
      },
      {
            "id": "comm_olla_irrigation",
            "title": "Agua y Vida: Water-Wise Olla & Drip Irrigation",
            "tier": "community",
            "tier_label": "Parent & Community",
            "quarter": "Q3",
            "quarter_name": "Early Spring Subtropical Agroecology & Soil Mycorrhizae",
            "subject": "Interdisciplinary",
            "theme_plt": 3,
            "theme_plt_label": "How Do We Sustain Our Forests?",
            "teks_codes": [
                  "Community Lifelong Education"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Constructing Practical Solutions",
            "prerequisites": [
                  "comm_sombra_sana"
            ],
            "mastery_points": 100,
            "summary": "Build low-cost terracotta olla pot sub-surface irrigation systems that deliver water directly to root zones with zero evaporation loss.",
            "hook": "Save water, save money: How can an unglazed clay flowerpot keep a tree alive during a 100\u00b0F drought with zero electricity?",
            "theory": "Unglazed terracotta is micro-porous. When buried next to tree roots, soil moisture tension draws water through clay walls only when surrounding soil is dry, reducing water use by 70%+ compared to sprinklers.",
            "lab": "Assemble an olla pot with silicone sealant, bury it 10 inches deep near a sapling root zone, fill with water, and monitor weekly using the 'cookie crumb' soil touch test.",
            "quiz": {
                  "question": "Why is sub-surface olla irrigation significantly more efficient than overhead lawn sprinklers in South Texas?",
                  "options": [
                        "Ollas purify water with electricity",
                        "Water is released directly underground at the root zone with zero loss to surface air evaporation or wind drift",
                        "Terracotta pots make rain clouds form",
                        "Ollas use saltwater"
                  ],
                  "correct_index": 1,
                  "explanation": "Because water is released below ground only when soil tension demands it, evaporation loss is virtually zero."
            },
            "citations": [
                  "Fanslow et al. (2018) Ancient Irrigation in Modern Arid Zones",
                  "UTRGV Agroecology Water Conservation Lab"
            ]
      },
      {
            "id": "comm_pechita_kitchen",
            "title": "La Cocina del Monte: Mesquite Pod Milling & Foraging",
            "tier": "community",
            "tier_label": "Parent & Community",
            "quarter": "Q2",
            "quarter_name": "Winter Biomass Allometry & Geometry",
            "subject": "Interdisciplinary",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter?",
            "teks_codes": [
                  "Community Cultural Heritage"
            ],
            "science_rtc": "Structure and Function",
            "science_sep": "Obtaining and Communicating Traditional Ecological Knowledge",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Harvest ripe, golden Honey Mesquite bean pods (pechita) and mill them into gluten-free, high-protein, low-glycemic traditional flour.",
            "hook": "Discover the sweet, cinnamon superfood growing for free right in your neighborhood microforest!",
            "theory": "Honey Mesquite bean pods are rich in protein, calcium, and soluble dietary fiber. Because mesquite sugars are complex polysaccharides, they digest slowly without spiking blood sugar.",
            "lab": "Join a community harvest and milling bee. Gather crisp dry pods, run them through an electric impact mill, sift fibrous chaff, and prepare traditional mesquite atole and energy bars.",
            "quiz": {
                  "question": "What is a key nutritional benefit of wild-harvested Honey Mesquite flour for families managing blood sugar?",
                  "options": [
                        "It contains pure high-fructose corn syrup",
                        "It is naturally sweet yet rich in soluble dietary fiber and protein with a low glycemic index",
                        "It contains artificial chemical sweeteners",
                        "It has zero calories"
                  ],
                  "correct_index": 1,
                  "explanation": "Mesquite flour contains complex polysaccharides and dietary fiber that slow carbohydrate absorption, preventing sharp blood sugar spikes."
            },
            "citations": [
                  "Tull, D. (2013) Edible and Useful Plants of Texas",
                  "Native Plant Society of Texas (NPSOT) South Texas Chapter"
            ]
      },
      {
            "id": "grad_sensor_calibration",
            "title": "Low-Cost PM2.5 Sensor Metrology & Empirical RH Correction",
            "tier": "college",
            "tier_label": "Higher Ed & Graduate",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "Environmental Engineering & Public Health",
            "theme_plt": 3,
            "theme_plt_label": "How Do We Sustain Our Forests?",
            "teks_codes": [
                  "UTRGV Graduate Agroecology ENVR 6301"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Analyzing and Interpreting Complex Data Sets",
            "prerequisites": [],
            "mastery_points": 200,
            "summary": "Calibrate laser scattering nephelometers against Federal Reference Method TEOM monitors and apply empirical hygroscopic growth RH correction algorithms.",
            "hook": "When relative humidity hits 90% in the Rio Grande Valley, why do air quality sensors report false dangerous pollution spikes?",
            "theory": "Optical particulate sensors measure laser light scattering. In high humidity, hygroscopic aerosol particles adsorb water and swell, scattering extra photons and creating artifactual high readings unless corrected via kappa-K\u00f6hler theory.",
            "lab": "Co-locate Plantower PMS5003 sensors alongside a BAM-1020 monitor. Collect 48-hour continuous time series and derive localized linear correction parameters: PM_true = a * PM_raw / (1 + b * (RH^2 / (1 - RH))).",
            "quiz": {
                  "question": "Why do raw optical PM2.5 sensors over-report particulate mass concentrations in humid subtropical climates?",
                  "options": [
                        "Water droplets act like dust magnets",
                        "Hygroscopic aerosols adsorb ambient moisture, swelling in physical optical diameter and scattering significantly more laser light",
                        "Laser diodes burn out in humidity",
                        "Electronics freeze in high humidity"
                  ],
                  "correct_index": 1,
                  "explanation": "Hygroscopic growth increases particle cross-sectional area, artificially boosting light scattering signals unless mathematically corrected."
            },
            "citations": [
                  "EPA Air Sensor Guidebook (2024)",
                  "Barkjohn et al. (2021) Development of an empirical correction for PurpleAir PM2.5 sensors"
            ]
      },
      {
            "id": "grad_wbgt_metrology",
            "title": "WBGT Micrometeorology & Occupational Heat Stress",
            "tier": "college",
            "tier_label": "Higher Ed & Graduate",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "Atmospheric Physics & Agroecology",
            "theme_plt": 3,
            "theme_plt_label": "How Do We Sustain Our Forests?",
            "teks_codes": [
                  "UTRGV Graduate Agroecology ENVR 6305"
            ],
            "science_rtc": "Energy and Matter",
            "science_sep": "Developing and Using Mathematical Models",
            "prerequisites": [
                  "grad_sensor_calibration"
            ],
            "mastery_points": 200,
            "summary": "Deploy black-globe psychrometers across agricultural farmworker transects to calculate Liljegren WBGT index values and heat safety work-rest cycles.",
            "hook": "Why does a 95\u00b0F day under tree canopy feel bearable, while the same 95\u00b0F day on unshaded melon fields can cause fatal heat stroke in 45 minutes?",
            "theory": "Dry-bulb temperature ignores radiant solar heat and evaporative sweating capacity. Wet-Bulb Globe Temperature integrates natural wet-bulb temperature, 6-inch black globe radiant temperature, and ambient air temp.",
            "lab": "Deploy a calibrated micrometeorological mast. Collect 1-minute logged temperature, humidity, wind velocity, and solar irradiance. Compute Liljegren WBGT and determine OSHA rest breaks.",
            "quiz": {
                  "question": "In the standard outdoor Wet-Bulb Globe Temperature formula (WBGT = 0.7 Tw + 0.2 Tg + 0.1 Td), which component is assigned the highest mathematical weight?",
                  "options": [
                        "Dry-bulb air temperature (Td)",
                        "Natural wet-bulb temperature (Tw)",
                        "Black globe radiant temperature (Tg)",
                        "Direct wind speed"
                  ],
                  "correct_index": 1,
                  "explanation": "Natural wet-bulb temperature is weighted at 70% because human thermoregulation relies predominantly on evaporative sweating dissipation."
            },
            "citations": [
                  "Liljegren et al. (2008) Modeling the Wet Bulb Globe Temperature",
                  "NIOSH Criteria for a Recommended Standard: Occupational Exposure to Heat"
            ]
      },
      {
            "id": "grad_spatial_epidemiology",
            "title": "Spatial Epidemiology of Pediatric Asthma & Canopy Buffers",
            "tier": "college",
            "tier_label": "Higher Ed & Graduate",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity & Policy",
            "subject": "Environmental Epidemiology",
            "theme_plt": 4,
            "theme_plt_label": "What is Our Responsibility?",
            "teks_codes": [
                  "UTRGV Public Health EPID 6301"
            ],
            "science_rtc": "Cause and Effect",
            "science_sep": "Using Mathematics and Computational Thinking",
            "prerequisites": [
                  "grad_wbgt_metrology"
            ],
            "mastery_points": 200,
            "summary": "Perform spatial Poisson regression modeling correlating Texas DSHS pediatric asthma hospitalizations with freeway proximity and vegetative canopy buffers.",
            "hook": "Can a 50-meter strip of native Live Oaks between a highway and an elementary school cut pediatric asthma ER visits in half?",
            "theory": "Traffic-related air pollutants (TRAP: ultrafine particles, black carbon, NO2) decline exponentially with distance from roadway edges. Dense, multi-layered vegetative barriers accelerate turbulent dispersion and dry deposition.",
            "lab": "Load census-tract pediatric emergency admissions and high-resolution LiDAR tree canopy layers into R / QGIS. Fit generalized linear Poisson models controlling for median household income and vehicle miles traveled.",
            "quiz": {
                  "question": "What is the primary mechanism by which roadside vegetative buffer strips reduce near-road pediatric TRAP exposure?",
                  "options": [
                        "Leaves absorb all carbon monoxide instantly",
                        "Physical canopy structure forces plume updraft, enhances turbulent dilution, and captures particulates via surface dry deposition",
                        "Trees destroy diesel engines",
                        "Leaves convert nitrogen dioxide into pure helium"
                  ],
                  "correct_index": 1,
                  "explanation": "Vegetative barriers create aerodynamic boundary layers that deflect vehicle plumes upward while providing massive leaf surface areas for particulate impaction."
            },
            "citations": [
                  "Baldauf et al. (2016) Integrating Near-Road NIR Pollutant Dispersion and Urban Forestry",
                  "American Journal of Public Health (2020) Tree Canopy and Child Respiratory Health"
            ]
      },
      {
            "id": "cult_shinrin_yoku",
            "title": "Shinrin-Yoku: Forest Bathing, Phytoncides & Autonomic Vagal Tone",
            "tier": "spiritual",
            "tier_label": "Spiritual & Cultural",
            "quarter": "Q1",
            "quarter_name": "Fall Canopy Physics & Microclimate Thermodynamics",
            "subject": "Contemplative Ecology & Well-being",
            "theme_plt": 2,
            "theme_plt_label": "Why Do Forests Matter?",
            "teks_codes": [
                  "Health & Well-Being Standards"
            ],
            "science_rtc": "Systems and System Models",
            "science_sep": "Planning and Carrying Out Investigations",
            "prerequisites": [],
            "mastery_points": 100,
            "summary": "Engage in guided Japanese Shinrin-yoku (forest bathing) to stimulate parasympathetic vagal activation, reduce salivary cortisol, and inhale antimicrobial phytoncides.",
            "hook": "What if the best medicine for test anxiety, high blood pressure, and mental exhaustion doesn't come in a pill bottle, but from inhaling the scent of an oak tree?",
            "theory": "Trees release volatile essential oils called phytoncides (e.g., alpha-pinene, limonene) to protect against fungal pathogens. Inhalation by humans enhances natural killer (NK) cell activity and activates the parasympathetic nervous system.",
            "lab": "Complete a 40-minute mindful walking protocol in a mature grove. Measure pre- and post-walk resting heart rate and Heart Rate Variability (HRV) using pulse oximeters, logging subjective stress scales.",
            "quiz": {
                  "question": "What physiological change occurs in humans during mindful immersion in forested environments (Shinrin-yoku)?",
                  "options": [
                        "Spike in sympathetic fight-or-flight adrenaline",
                        "Increase in parasympathetic nervous system tone, decrease in salivary cortisol, and elevated Natural Killer (NK) immune cell activity",
                        "Permanent loss of smell",
                        "Elevation of resting heart rate above 180 bpm"
                  ],
                  "correct_index": 1,
                  "explanation": "Immersion in forest biomes activates parasympathetic restorative pathways, measurably decreasing systemic stress hormones and boosting immune biomarkers."
            },
            "citations": [
                  "Li, Q. (2018) Forest Bathing: How Trees Can Help You Find Health and Happiness",
                  "Park et al. (2010) The physiological effects of Shinrin-yoku"
            ]
      },
      {
            "id": "cult_sacred_cypress",
            "title": "El Ahuehuete Sagrado: Indigenous Memory & Sacred Montezuma Cypress",
            "tier": "spiritual",
            "tier_label": "Spiritual & Cultural",
            "quarter": "Q4",
            "quarter_name": "Late Spring Community Heat Equity & Policy",
            "subject": "Cultural Heritage & Philosophy",
            "theme_plt": 4,
            "theme_plt_label": "What is Our Responsibility?",
            "teks_codes": [
                  "Texas Cultural Heritage Standards"
            ],
            "science_rtc": "Stability and Change",
            "science_sep": "Obtaining, Evaluating, and Communicating Information",
            "prerequisites": [
                  "cult_shinrin_yoku"
            ],
            "mastery_points": 100,
            "summary": "Honor the millennial cultural heritage of the Montezuma Bald Cypress (Taxodium mucronatum, Ahuehuete), sacred river tree of indigenous Mexican and South Texas peoples.",
            "hook": "Standing beneath a 1,000-year-old Montezuma Cypress on the Rio Grande, you are touching a living elder that drank water here centuries before Texas was named.",
            "theory": "In Nahuatl, Ahuehuete translates to 'old man of the water' (\u0101- 'water' + hu\u0113hue- 'old'). Sacred groves (such as Chapultepec) served as sites of royal reflection, treaty signings, and spiritual balance across Mesoamerica.",
            "lab": "Sit at the base of a riparian cypress. Record an audio oral history reflection or sketch a historical timeline mapping ancestral events against the estimated lifespan of the tree.",
            "quiz": {
                  "question": "What does the indigenous Nahuatl word 'Ahuehuete' (Taxodium mucronatum) signify regarding the tree's ecological habitat?",
                  "options": [
                        "Tree that lives only on desert mountain peaks",
                        "'Old man of the water' - honoring its centuries-long lifespan along perennial riverbanks and springs",
                        "Tree that eats fire",
                        "Plant that grows in salt oceans"
                  ],
                  "correct_index": 1,
                  "explanation": "Ahuehuete honors the tree's ancient longevity and vital dependence on clean freshwater riverbanks and riparian spring aquifers."
            },
            "citations": [
                  "Mart\u00ednez, M. (2015) Los \u00c1rboles Sagrados de M\u00e9xico",
                  "Rio Grande Valley Historical Commission Riparian Archives"
            ]
      }
]
  };

  /**
   * ForestKnowledgeGraphEngine: DAG Manager & State Controller
   */
  class ForestKnowledgeGraphEngine {
    constructor(data = GRAPH_DATA) {
      this.data = data;
      this.nodeMap = new Map();
      this.data.nodes.forEach(node => {
        this.nodeMap.set(node.id, node);
      });
      this.validateAcyclic();
    }

    validateAcyclic() {
      const visited = new Set();
      const recStack = new Set();

      const isCyclic = (nodeId) => {
        if (!this.nodeMap.has(nodeId)) return false;
        if (recStack.has(nodeId)) return true;
        if (visited.has(nodeId)) return false;

        visited.add(nodeId);
        recStack.add(nodeId);

        const node = this.nodeMap.get(nodeId);
        for (const prereqId of (node.prerequisites || [])) {
          if (isCyclic(prereqId)) return true;
        }

        recStack.delete(nodeId);
        return false;
      };

      for (const node of this.data.nodes) {
        if (isCyclic(node.id)) {
          console.warn(`[KnowledgeGraph Warning] Potential cycle detected near: ${node.id}`);
        }
      }
      return true;
    }

    getFilteredNodes(tier = 'all', subject = 'all', pltTheme = 'all', searchTerm = '') {
      return this.data.nodes.filter(node => {
        let matchTier = false;
        if (tier === 'all') {
          matchTier = true;
        } else if (['q1', 'q2', 'q3', 'q4'].includes(tier.toLowerCase())) {
          matchTier = (node.quarter && node.quarter.toLowerCase() === tier.toLowerCase());
        } else {
          matchTier = (node.tier === tier);
        }

        let matchSubject = true;
        if (subject !== 'all') {
          matchSubject = (node.subject === subject || 
                         (node.subject === 'CROSS_DISCIPLINARY' && ['SCIENCE', 'MATH', 'ELAR', 'FINE_ARTS'].includes(subject)) ||
                         (node.subject === 'AGROECOLOGY' && subject === 'SCIENCE'));
        }

        const matchTheme = (pltTheme === 'all' || node.theme_plt === parseInt(pltTheme, 10));
        
        let matchSearch = true;
        if (searchTerm && searchTerm.trim() !== '') {
          const q = searchTerm.toLowerCase().trim();
          const teksText = (node.teks_codes || []).join(' ').toLowerCase();
          const citationsText = (node.citations || []).join(' ').toLowerCase();
          matchSearch = (node.title || '').toLowerCase().includes(q) ||
                        (node.summary || '').toLowerCase().includes(q) ||
                        (node.theory || '').toLowerCase().includes(q) ||
                        (node.grade || '').toLowerCase().includes(q) ||
                        teksText.includes(q) ||
                        citationsText.includes(q);
        }

        return matchTier && matchSubject && matchTheme && matchSearch;
      });
    }

    getNodeStatuses(completedNodeIds = []) {
      const completedSet = new Set(completedNodeIds);
      const statusMap = new Map();

      this.data.nodes.forEach(node => {
        if (completedSet.has(node.id)) {
          statusMap.set(node.id, 'completed');
        } else {
          const prereqs = node.prerequisites || [];
          const allPrereqsMet = prereqs.every(prereqId => completedSet.has(prereqId));
          statusMap.set(node.id, allPrereqsMet ? 'unlocked' : 'locked');
        }
      });

      return statusMap;
    }

    getProgressStats(completedNodeIds = []) {
      const completedSet = new Set(completedNodeIds);
      let earnedPoints = 0;
      let totalPoints = 0;

      this.data.nodes.forEach(node => {
        totalPoints += (node.mastery_points || 100);
        if (completedSet.has(node.id)) {
          earnedPoints += (node.mastery_points || 100);
        }
      });

      const percent = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
      return {
        completedCount: completedSet.size,
        totalCount: this.data.nodes.length,
        earnedPoints,
        totalPoints,
        percent
      };
    }

    getNode(id) {
      return this.nodeMap.get(id) || null;
    }

    getMetadata() {
      return this.data.metadata;
    }

    getD3GraphData(tier = 'all', subject = 'all') {
      const filtered = this.getFilteredNodes(tier, subject);
      const nodeIds = new Set(filtered.map(n => n.id));

      const links = [];
      filtered.forEach(node => {
        (node.prerequisites || []).forEach(prereqId => {
          if (nodeIds.has(prereqId)) {
            links.push({
              source: prereqId,
              target: node.id
            });
          }
        });
      });

      return {
        nodes: filtered.map(n => ({
          id: n.id,
          title: n.title,
          tier: n.tier,
          tier_label: n.tier_label,
          grade: n.grade,
          quarter: n.quarter,
          subject: n.subject,
          theme_plt: n.theme_plt,
          mastery_points: n.mastery_points,
          teks_codes: n.teks_codes
        })),
        links
      };
    }
  }

  return {
    raw: GRAPH_DATA,
    Engine: ForestKnowledgeGraphEngine,
    createEngine: () => new ForestKnowledgeGraphEngine(GRAPH_DATA)
  };
}));
