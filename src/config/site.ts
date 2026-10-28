import { buyerFeeNote, buyerFeeStatement } from "./businessModel";
import { legalCompliance as legalComplianceItems, legalNav } from "./legal";

export const siteConfig = {
  name: "RAZZ Construction and Properties",
  legalName: "RAZZ Construction and Properties Ltd.",
  shortName: "RAZZ",
  url: "https://razzcnpl.me",
  domain: "razzcnpl.me",
  description:
    "RAZZ Construction and Properties Ltd. is a registered real-estate developer in Bangladesh. Explore our projects, speak with sales, or propose a joint venture.",
  tagline: "Homes developed and sold by RAZZ.",
  supporting:
    "RAZZ Construction and Properties Ltd. is a registered real-estate developer in Bangladesh. Explore our projects, speak with sales, or propose a joint venture.",
  positioning:
    "A registered real-estate development company in Bangladesh.",
  districtRelation:
    "Residential projects in Bangladesh, including Dhaka and Chattogram.",
  audience:
    "For buyers of RAZZ homes in Bangladesh, including households already in the country and people living abroad.",
  buyerFee: buyerFeeStatement,
  buyerFeeNote,
  email: "sales@razzcnpl.me",
  salesEmail: "sales@razzcnpl.me",
  pressEmail: "press@razzcnpl.me",
  careersEmail: "careers@razzcnpl.me",
  departments: [
    { label: "Information", email: "info@razzcnpl.me" },
    { label: "Sales", email: "sales@razzcnpl.me" },
    { label: "Press", email: "press@razzcnpl.me" },
    { label: "Careers", email: "careers@razzcnpl.me" },
  ],
  phone: "01896-016470",
  phoneHref: "tel:+8801896016470",
  brochurePath: "/media/brochures/matribhumi-preview.pdf",
  address: {
    line1: "House 05, Road 04",
    line2: "Nikunja-1, Khilkhet",
    city: "Dhaka",
    country: "Bangladesh",
    postal: "1229",
  },
  social: {
    linkedin: "https://bd.linkedin.com/company/razzcreativepropertieslimited",
    whatsapp: "https://wa.me/8801896016470",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/projects", label: "Projects" },
  { href: "/locations", label: "Locations" },
  { href: "/how-it-works", label: "Buying" },
  { href: "/for-developers", label: "Joint Venture" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const countryNav = [
  { href: "/locations/dhaka", label: "Dhaka" },
  { href: "/locations/chattogram", label: "Chattogram" },
] as const;

export const bangladeshCityNav = [
  { href: "/locations/dhaka", label: "Dhaka" },
  { href: "/locations/chattogram", label: "Chattogram" },
] as const;

export const footerNav = {
  markets: [
    { href: "/locations/bangladesh", label: "Bangladesh" },
    { href: "/locations/dhaka", label: "Dhaka" },
    { href: "/locations/chattogram", label: "Chattogram" },
  ],
  explore: [
    { href: "/properties", label: "Properties" },
    { href: "/projects", label: "Projects" },
    { href: "/locations", label: "Locations" },
    { href: "/how-it-works", label: "Buying" },
    { href: "/advise", label: "Talk to sales" },
    { href: "/favorites", label: "Saved homes" },
    { href: "/compare", label: "Compare" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/for-developers", label: "Joint Venture" },
    { href: "/insights", label: "Insights" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: legalNav,
} as const;

export const whatWeDo = [
  {
    title: "Develop",
    body: "RAZZ Construction and Properties Ltd. plans and builds residential projects in Bangladesh.",
  },
  {
    title: "Sell",
    body: "Our sales team walks you through the homes, arranges viewings, and takes the purchase through to a sale agreement.",
  },
  {
    title: "Joint ventures",
    body: "Landowners and other developers can contact RAZZ about developing a site together.",
  },
] as const;

export const whoItsFor = [
  {
    title: "Local buyers",
    body: "Households in Bangladesh looking for a home in a RAZZ project.",
  },
  {
    title: "Buyers living abroad",
    body: "People looking for a home to visit, retire into, or live in, with sales support across time zones.",
  },
  {
    title: "Relocating families",
    body: "Families who need a shortlist of RAZZ homes, a viewing, and a clear path to purchase.",
  },
] as const;

export const howItWorksSteps = [
  {
    step: "01",
    title: "Share your requirements.",
    body: "Name, contact, residence, preferred city, property type, budget, bedrooms, purpose, and timeline. Sensitive documents are not required at this stage.",
  },
  {
    step: "02",
    title: "Sales reviews published homes.",
    body: "The sales team screens location, project, type, price, bedrooms, and status. Matching is a staff aid, not a valuation or legal opinion.",
  },
  {
    step: "03",
    title: "Sales contacts you.",
    body: "A member of the RAZZ sales team will review your enquiry and contact you.",
  },
  {
    step: "04",
    title: "We prepare a shortlist.",
    body: "Sales assemble RAZZ homes with location, price, and features so you can compare them.",
  },
  {
    step: "05",
    title: "Choose a project.",
    body: "When you choose a home, sales records the project, the unit interest, and the next conversation.",
  },
  {
    step: "06",
    title: "Viewings.",
    body: "You request a viewing. The sales team confirms the time and place at the project.",
  },
  {
    step: "07",
    title: "Reserve and contract.",
    body: "Viewing, home selected, reservation, sale agreement, then completion. You purchase from RAZZ Construction and Properties Ltd.",
  },
  {
    step: "08",
    title: "Handover.",
    body: "When the sale completes, the file is marked closed. Handover follows the schedule in the sale agreement.",
  },
] as const;

export const buyerServices = [
  { title: "Sales enquiry", body: "Requirements, budget, and a shortlist of RAZZ homes." },
  { title: "Project information", body: "Questions, documents, and a clear sequence from first enquiry to reservation." },
  { title: "Viewings", body: "Arrange a visit to the project and keep the diary across time zones." },
  { title: "Unit selection", body: "Work with sales on the home, floor, and layout you want." },
  { title: "Sale agreement", body: "Follow the reservation and contract through to completion." },
  { title: "Support from abroad", body: "Help for buyers living abroad or relocating to Bangladesh." },
] as const;

export const developerServices = [
  { title: "Land for development", body: "Tell us about a site you own and how you would like it developed with RAZZ." },
  { title: "Joint development", body: "A landowner or another developer can propose building a project together." },
  { title: "Project conversation", body: "Share the location, rough size, and what you hope the land becomes." },
  { title: "Planning the homes", body: "RAZZ reviews whether the site fits a residential project the company can develop." },
  { title: "One point of contact", body: "The same team stays with the conversation from the first note to a decision." },
  { title: "Landowners abroad", body: "Owners who live outside Bangladesh can start the discussion in writing." },
  { title: "A private agreement", body: "If both sides proceed, the joint venture is set out in its own agreement." },
  { title: "Sales of the homes", body: "Homes in a RAZZ project are offered through the company’s sales team." },
  { title: "Public projects", body: "Completed and current RAZZ projects are presented on razzcnpl.me." },
  { title: "Next step", body: "Write to the Dhaka office. We reply to serious land and partnership enquiries." },
] as const;

export const districtLife = [
  {
    title: "Malls and daily errands",
    body: "Shopping, food, cinemas, and services planned as part of the district, not a long drive away.",
  },
  {
    title: "Golf and open ground",
    body: "Fairways and planted edges for morning walks, weekends, and a slower register of the city.",
  },
  {
    title: "Amusement parks and family days",
    body: "Places grandchildren, nieces, and neighbours can spend an afternoon without leaving the district.",
  },
  {
    title: "Modern building amenities",
    body: "Pools, gyms, concierge, security, and parking designed for both full-time living and part-year stays.",
  },
] as const;

export const lifestyles = [
  {
    slug: "urban-living",
    title: "Bashundhara living",
    description: "New-district apartments near malls, parks, and the city’s newer roads — for everyday Dhaka life or a season at home.",
    image: "/media/lifestyle-urban.jpg",
    filter: "APARTMENT",
  },
  {
    slug: "waterfront-living",
    title: "River holidays",
    description: "Waterfront rooms for slower visits — mornings by the water, evenings with family.",
    image: "/media/lifestyle-waterfront.jpg",
    filter: "WATERFRONT",
  },
  {
    slug: "private-residences",
    title: "Private residences",
    description: "Courtyard homes with space for parents, visiting children, and a quieter retirement.",
    image: "/media/lifestyle-private.jpg",
    filter: "VILLA",
  },
  {
    slug: "family-communities",
    title: "Family communities",
    description: "Neighbourhoods planned for gatherings, parks, schools, and relatives who live here year-round.",
    image: "/media/lifestyle-family.jpg",
    filter: "COMMUNITIES",
  },
  {
    slug: "nature-living",
    title: "Hill and garden stays",
    description: "Low-rise homes for longer winter stays, away from the city’s heat and noise.",
    image: "/media/lifestyle-nature.jpg",
    filter: "NATURE",
  },
  {
    slug: "mixed-use-destinations",
    title: "District living",
    description: "Malls, golf, amusement parks, and homes on the same plan — a modern Dhaka day without a long commute.",
    image: "/media/lifestyle-mixed.jpg",
    filter: "MIXED_USE",
  },
] as const;

export const whyMatriBhumi = [
  {
    title: "Our own projects",
    body: "RAZZ Construction and Properties Ltd. develops the homes it offers and sells them through its sales team.",
  },
  {
    title: "Registered in Bangladesh",
    body: "The company is a registered real-estate developer in Bangladesh, with its office in Nikunja-1, Dhaka.",
  },
  {
    title: "Support from abroad",
    body: "Sales support for buyers looking at RAZZ homes, including households living abroad.",
  },
  {
    title: "One sales contact",
    body: "One member of the sales team stays with you from the first enquiry through viewing and reservation.",
  },
  {
    title: "A direct purchase",
    body: buyerFeeStatement,
  },
  {
    title: "Compare homes",
    body: "Compare location, project, type, price, and how you will use the home before you commit.",
  },
  {
    title: "Viewings",
    body: "Sales arranges a visit to the project and keeps the diary across time zones.",
  },
  {
    title: "Joint ventures",
    body: "Landowners and other developers can write to RAZZ about developing a site together.",
  },
] as const;

export const comingHomePrinciples = [
  {
    title: "How you will actually use it",
    body: "A few weeks at Eid, a retirement year, or full-time life next to a mall and a park: the shortlist should fit the calendar you already keep.",
  },
  {
    title: "Location in the new districts",
    body: "Bashundhara-style living puts golf, amusement parks, shopping, and home on one map. Place is one factor among many, not a prediction.",
  },
  {
    title: "Looking after the home while you are away",
    body: "Ask sales how building management, neighbours, and upkeep work when the house is empty for part of the year.",
  },
  {
    title: "Development quality",
    body: "Construction standards and the care given to shared spaces are part of the RAZZ project. A viewing is the place to see what has been published.",
  },
  {
    title: "Not a financial product",
    body: "RAZZ Construction and Properties does not promise rental income, appreciation, or returns. Independent legal and tax advice is yours to seek.",
  },
  {
    title: "Title and running costs",
    body: "Price, size, service charges, and legal title should be reviewed with the sales team and your own counsel. We do not provide financial advice.",
  },
] as const;

export const diasporaFaq = [
  {
    question: "Does RAZZ Construction and Properties charge the buyer a fee?",
    answer: buyerFeeStatement,
  },
  {
    question: "Who is the seller of a listed property?",
    answer:
      "RAZZ Construction and Properties Ltd. is the developer and seller of the homes offered on this website. You purchase from the company under a sale agreement. Sales helps you compare homes, visit the project, and follow the reservation.",
  },
  {
    question: "Can I buy if I hold foreign citizenship?",
    answer:
      "Ownership rules in Bangladesh depend on your citizenship and residency. The sales team explains the company’s process. Independent legal advice is yours to obtain. RAZZ Construction and Properties Ltd. is a registered real-estate company in Bangladesh.",
  },
  {
    question: "How do payments and registration work from overseas?",
    answer:
      "Payment schedules are set out in the sale agreement with RAZZ Construction and Properties Ltd. Title registration is completed with the lawyers appointed for that sale. Sales stays on the correspondence.",
  },
  {
    question: "Who looks after the home when I am away?",
    answer:
      "Building management for a RAZZ project is arranged by the company or the building’s management. Ask sales about security, inspections, and upkeep between visits before you commit.",
  },
  {
    question: "What does joining the waitlist do?",
    answer:
      "Waitlist members hear first when floor plans, viewing slots, or project updates are released for a home you asked about. It is a contact list, not a reservation contract.",
  },
] as const;

export const leadership = [
  {
    name: "Syed Rawshan Ali",
    role: "Managing Director",
    image: "",
    bio: "Managing Director of RAZZ Construction and Properties Ltd. Leads the company’s residential development and sales in Bangladesh.",
  },
  {
    name: "Farhan Kabir",
    role: "Projects",
    image: "/media/leader-development.jpg",
    bio: "Portrait and full biography to follow. Project delivery for RAZZ developments.",
  },
  {
    name: "Leila Nassar",
    role: "Sales",
    image: "/media/leader-design.jpg",
    bio: "Portrait and full biography to follow. Buyer enquiries, shortlists, and viewings for RAZZ homes.",
  },
] as const;

export const legalCompliance = legalComplianceItems;

export type SiteConfig = typeof siteConfig;
