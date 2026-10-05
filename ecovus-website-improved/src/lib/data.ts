/** Real Ecovus photos live in /public/images as <name>-800.webp and <name>-1600.webp */
export const photo = (name: string) => ({
  src: `/images/${name}-1600.webp`,
  srcSet: `/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`,
});

export type Slide = {
  img: string;
  alt: string;
  title: string;
  desc: string;
  tags: string[];
  position?: string;
};

export const heroSlides: Slide[] = [
  {
    img: "house-complete-sky",
    alt: "Single-storey face-brick house with a dark tiled hip roof under a clear blue sky",
    title: "Family home, roofed and closed in",
    desc: "A single-storey brick home taken from slab to roof, ready for finishes.",
    tags: ["Homes", "Design & construction"],
    position: "50% 55%",
  },
  {
    img: "double-storey-frame",
    alt: "Double-storey reinforced concrete frame with brick infill and timber props",
    title: "Double-storey frame",
    desc: "Reinforced concrete frame with brick infill, both floors going up together.",
    tags: ["Commercial", "Civil & structural"],
    position: "50% 45%",
  },
  {
    img: "house-complete-truck",
    alt: "New brick home with a double garage and the Ecovus site vehicle on the driveway",
    title: "Home with double garage",
    desc: "Roof on and garage built, with our site vehicle on the driveway.",
    tags: ["Homes", "Project management"],
    position: "50% 40%",
  },
  {
    img: "multi-storey-scaffold",
    alt: "Scaffolding against the face-brick facade of a multi-storey building",
    title: "Multi-storey facade works",
    desc: "Scaffold up for facade and window works on a multi-storey block.",
    tags: ["Commercial", "Renovations"],
    position: "50% 40%",
  },
];

export const services = [
  {
    title: "Design & Construction",
    desc: "Houses, commercial and industrial buildings taken from drawings to handover by one accountable team.",
  },
  {
    title: "Renovations & Remodelling",
    desc: "Extensions, refurbishments and upgrades to buildings you already own, planned around how you use them.",
  },
  {
    title: "Project Management",
    desc: "Cost, programme and quality control for clients who want independent oversight of their project.",
  },
  {
    title: "Estimation & Bills of Quantities",
    desc: "Accurate costings and bills of quantities, so the budget is known before the first brick is laid.",
  },
  {
    title: "Property Development & Consultancy",
    desc: "Advice on land, feasibility and phasing for developers and first-time builders alike.",
  },
  {
    title: "Town Planning Consultancy",
    desc: "Planning permit applications, master plans, subdivisions and consolidations, prepared to be approved the first time.",
  },
  {
    title: "Civil & Structural Engineering",
    desc: "Foundations, slabs, frames, drainage and access roads: the work that holds everything else up.",
  },
];

export const trades = ["Brickwork", "Plastering", "Roofing", "Floors", "Plumbing", "Electricals"];

export const categories = ["Homes", "Commercial", "Structure", "Interiors", "Design"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  img: string;
  title: string;
  desc: string;
  cats: Category[];
  alt: string;
};

export const projects: Project[] = [
  { img: "foundation-walls", title: "Walls to plate height", desc: "Face-brick walls up and ready for the roof on a new home.", cats: ["Homes", "Structure"], alt: "Brick walls of a house under construction, viewed from above" },
  { img: "double-storey-frame", title: "Double-storey frame", desc: "Concrete frame and brick infill rising floor by floor.", cats: ["Commercial", "Structure"], alt: "Double-storey building frame under construction" },
  { img: "interior-finishes", title: "Finishes and glazing", desc: "Polished tiles and full-height aluminium doors.", cats: ["Interiors", "Homes"], alt: "Bright room with polished marble-effect floor tiles and glass doors" },
  { img: "rebar-slab-crew", title: "Slab reinforcement", desc: "Steel fixed and checked before the concrete pour.", cats: ["Structure"], alt: "Workers tying steel reinforcement for a concrete slab" },
  { img: "render-cluster", title: "Cluster housing design", desc: "3D design of a cluster development, roads and landscaping.", cats: ["Design", "Homes"], alt: "3D render of a cluster of houses with green roofs along a paved road" },
  { img: "roofing-crew", title: "Roof covering", desc: "Our crew laying roof tiles on a family home.", cats: ["Homes"], alt: "Roofers laying grey tiles on a brick house" },
  { img: "roof-trusses", title: "Timber roof trusses", desc: "Trusses braced and fixed, ready for battens.", cats: ["Structure"], alt: "Looking up through timber roof trusses on brick walls" },
  { img: "multi-storey-scaffold", title: "Multi-storey facade", desc: "Facade and window works from full scaffolding.", cats: ["Commercial"], alt: "Scaffolding against a multi-storey brick facade" },
  { img: "fitted-wardrobe", title: "Built-in wardrobe", desc: "Fitted joinery with hanging space, shelves and drawers.", cats: ["Interiors"], alt: "White fitted wardrobe with shelves, hanging rails and drawers" },
  { img: "render-single-house", title: "Single-storey home design", desc: "3D design shown to the client before construction.", cats: ["Design", "Homes"], alt: "3D render of a modern single-storey house with a green roof" },
  { img: "slab-formwork", title: "Slab formwork", desc: "Shuttering in place ahead of a suspended slab pour.", cats: ["Structure", "Commercial"], alt: "Black formwork boards laid for a concrete slab" },
  { img: "house-roofed-slab", title: "Roofed and ready to plaster", desc: "Roof on and windows framed on a single-storey home.", cats: ["Homes"], alt: "Brick house with a roof, seen across a concrete slab" },
  { img: "cad-drawings", title: "Working drawings", desc: "Elevations, sections and plans prepared for approval.", cats: ["Design"], alt: "Architectural CAD drawings of house elevations and floor plans" },
  { img: "trusses-brickwork", title: "Trusses on brickwork", desc: "Roof structure going up on a new home.", cats: ["Homes", "Structure"], alt: "Brick house walls with roof trusses being installed" },
  { img: "house-brick-shell", title: "Brick shell complete", desc: "A finished shell with the roof covering on.", cats: ["Homes"], alt: "Single-storey brick house with a grey roof" },
];

export const process = [
  { name: "Consult", desc: "A site visit and a straight conversation: what's achievable, what it costs and how long it takes." },
  { name: "Plan", desc: "Surveys, approvals and planning submissions, filed so they stand up the first time." },
  { name: "Design", desc: "Architecture and structural design resolved into drawings that are priced and buildable." },
  { name: "Build", desc: "Trained crews, weekly site inspections and quality checks at every stage." },
  { name: "Deliver", desc: "Snagging, warranties and handover, and we stay reachable after the keys change hands." },
];

export const contacts = {
  phones: [
    { label: "+263 775 569 208", href: "tel:+263775569208" },
    { label: "+263 718 641 010", href: "tel:+263718641010" },
  ],
  whatsapp: "https://wa.me/263775569208",
  email: "info@ecovusprojects.co.zw",
  emailAlt: "ecovus365@gmail.com",
  website: "ecovusprojects.co.zw",
  address: ["No. 201 Grayhurst Building", "Cnr N. Mandela & Fourth St", "Harare, Zimbabwe"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Grayhurst+Building+Nelson+Mandela+Fourth+Street+Harare",
  hours: "Monday to Friday, 8:00 to 17:00",
};

export const navLinks = [
  { label: "What we do", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
