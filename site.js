// ============================================================
// FOOK'N OATS — SITE CONTENT
// Edit this file to update your site. Then hit Deploy in Cowork.
// ============================================================

const SITE = {
  title: "FOOK'N OATS",
  calendly: {
    url: "https://calendly.com/fookn-oats-enterprises/30min",
    text: "ACTIVATE COMMS - LETS CHAT!",
    color: "#0069ff",
    textColor: "#ffffff"
  },
  ticker: {
    enabled: true,
    text: "FOOK'N OATS • LIVE SHOWS • STAY TUNED"
  },
  nav: [
    { id: "home",     label: "HOME" },
    { id: "services", label: "SERVICES" },
    { id: "brands",   label: "BRANDS" },
    { id: "studio",   label: "STUDIO" },
    { id: "stories",  label: "STORIES" },
    { id: "edm",      label: "EDM FEED" },
    { id: "about",    label: "ABOUT" },
    { id: "connect",  label: "CONNECT" }
  ],
  services: [
    { icon: "◈", label: "CAD & Drafting",       tagline: "Precision drafts. Light plots. Venue drawings.",         desc: "Vectorworks and AutoCAD drafting for lighting plots, rigging designs, stage layouts, and venue paperwork. Remote-deliverable. Turn around in days, not weeks." },
    { icon: "⚡", label: "Master Electrician",   tagline: "On-site crew chief. Lighting supervision.",             desc: "Experienced Master Electrician and Lighting Crew Chief available for tours, installs, and one-offs. Brings leadership, problem-solving, and a full toolkit to any rig." },
    { icon: "▦", label: "LED Wall Tech",         tagline: "Pixel-perfect builds. LED wall systems.",               desc: "LED wall construction, configuration, and in-show technician services. From spec to strike. Novastar, Brompton, ROE, and custom panels." },
    { icon: "◎", label: "Consulting & Quotes",  tagline: "Scoping, budgeting, and production advice.",            desc: "Not sure what you need? Start here. Project scoping, vendor recommendations, budget reviews, and production planning without the agency markup." },
    { icon: "⚙", label: "Maker-Lab",            tagline: "Fabrication. Prototyping. Hands-on builds.",            desc: "In-house maker lab for custom fabrication, prototyping, and production builds. Laser CNC, 3D printing, embroidery, and modular bench systems — from concept to physical product." },
    { icon: "◇", label: "Design Network",        tagline: "Lighting production. Crew connections. Talent.",        desc: "A curated network of lighting production professionals, super-techs, and crew. LxProd coordination, talent sourcing, and the Crewfam ecosystem — connecting the right people to the right gigs." }
  ],
  brands: [
    { icon: "✦", label: "Revelator Illuminae",  tagline: "Lighting design. Visuals. Previz.",                    desc: "The creative lighting arm. Original lighting design, visuals programming, and previsualization services." },
    { icon: "♫", label: "Sleepwell Sweetheart", tagline: "Legacy band. EDM remixes. 20-year arc.",               desc: "The original band project — spanning two decades of music, from its legacy era through EDM remixes and the upcoming 20-year reunion event." },
    { icon: "⬡", label: "AI Oatmeal",           tagline: "Meme engine. AI content. Storyboards.",               desc: "The AI-powered creative pipeline — meme generation, AI-assisted content creation, and storyboard development." },
    { icon: "◌", label: "Ghosted Oats",          tagline: "Raw aesthetic. Personal reflections.",                 desc: "The unfiltered identity — raw aesthetic explorations and personal reflections. No polish, no brand guidelines. Just truth." },
    { icon: "₿", label: "Cryptos4Oats",          tagline: "Market cycles. WatersAbove. XRP strategy.",           desc: "Crypto analysis, market cycle research, and decentralized finance exploration." },
    { icon: "☆", label: "ƒ//ing::st△r",         tagline: "DJ persona. Neon fever-dream. EDM community.",        desc: "The DJ identity — neon fever-dream concepts and the EDM Oatmeal community." }
  ],
  stories: [
    { icon: "✦", label: "Pretty Lights Tour",   tagline: "Hampton · St. Augustine · Red Rocks · Vegas",         desc: "The Pretty Lights run — from Hampton to St. Augustine, the birthday show at Red Rocks, Halloween in Las Vegas." },
    { icon: "⚡", label: "Electric Forest",       tagline: "Wrong-way Ubers and Beam Team scooters.",             desc: "Electric Forest memories — the infamous wrong-way Uber story and the Beam Team scooter era." },
    { icon: "◎", label: "Road Trips + Camping",  tagline: "Joshua Tree · Integratron · Palm Desert",             desc: "Off-the-clock adventures — Joshua Tree desert trips, the Integratron sound bath experience, Palm Desert explorations." }
  ],
  social: [
    { platform: "Instagram",          handle: "@theoats",            icon: "◆", desc: "The Oats — main feed",              url: "https://instagram.com/theoats" },
    { platform: "Instagram / Threads",handle: "@sleepwellsweetheart",icon: "♫", desc: "Sleepwell Sweetheart — band + music",url: "https://instagram.com/sleepwellsweetheart" },
    { platform: "YouTube",            handle: "Go4Oats Show",        icon: "▶", desc: "Go4Oats Show — long-form content",  url: "https://youtube.com/@go4oats" },
    { platform: "YouTube",            handle: "A.I. Oatmeal",        icon: "⬡", desc: "A.I. Oatmeal Channel — AI content", url: "https://youtube.com/@aioatmeal" }
  ],
  about: {
    headline: "The Human Behind the Rig.",
    subheadline: "Lighting professional, CAD drafter, LED builder, production problem-solver, DJ, maker, and crypto researcher. Based wherever the gig is. Available to travel.",
    body: "The $500/day era is over. This is what professional services actually look like — clear scope, accurate pricing, and deliverables that hold up.",
    tree: [
      { label: "Higher Self",              desc: "The guiding principle behind every decision and creative output." },
      { label: "Wisdom Share",             desc: "Knowledge passed forward — lessons from the road, the rig, and the grind." },
      { label: "Writing / Living Journal", desc: "Ongoing documentation of the journey. Words that track the evolution." },
      { label: "Cycles, Energetics, Mirrors", desc: "Patterns recognized. Energy understood. Reflections honored." },
      { label: "2023-2025 Transformation Era", desc: "The pivot years — where everything restructured and a new chapter began." }
    ]
  },
  shows: Array.from({length: 17}, (_, i) => {
    const nums = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18];
    return `./images/shows/show-${nums[i]}.jpg`;
  })
};
