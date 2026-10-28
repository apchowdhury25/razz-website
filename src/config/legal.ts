/**
 * Bangladesh legal, trust, and disclosure copy.
 *
 * Edit this file (and src/config/businessModel.ts) to update public wording.
 * Do not treat this file as lawyer-reviewed Bangladesh legal advice.
 * Qualified Bangladesh legal counsel should review, replace, or amend
 * every public legal page before the language is treated as binding.
 */
import { buyerFeeDisclosure, buyerFeeNote, developerFeeLabel } from "./businessModel";

export const counselReview = {
  status: "pending_review" as const,
  jurisdiction: "Bangladesh",
  lastUpdated: "8 October 2026",
  notice:
    "This page is operational website copy for RAZZ Construction and Properties Ltd., a real-estate development company in Bangladesh. It is not legal advice and has not been reviewed or approved by qualified Bangladesh legal counsel. Counsel should review, replace, or amend this language before it is treated as a binding legal document.",
  notLegalAdvice:
    "Nothing on this website is legal, tax, financial, or financing advice. Obtain independent professional advice before completing a property transaction.",
};

export type CounselReviewStatus = typeof counselReview.status;

export const positioning = {
  market: "Bangladesh",
  summary:
    "RAZZ Construction and Properties Ltd. is a registered real-estate development company in Bangladesh. It develops residential projects and sells them through its sales team.",
  sellerResponsibility:
    "RAZZ Construction and Properties Ltd. is the developer and seller of the homes offered on this website.",
  buyerHelp: [
    "explore projects",
    "compare homes",
    "speak with sales",
    "arrange a viewing",
    "reserve a home",
    "follow the sale",
    "prepare for handover",
  ],
  licence:
    "RAZZ Construction and Properties Ltd. is a registered real-estate company in Bangladesh. This website does not publish a licence or registration number.",
};

export const howWeWork = {
  title: "How we work",
  summary:
    "RAZZ Construction and Properties Ltd. develops and sells its own residential projects in Bangladesh. The sales team helps buyers choose a home, visit it, and complete the purchase.",
  purchaseAgreement:
    "The property purchase agreement is between the buyer and RAZZ Construction and Properties Ltd.",
  funds:
    "Purchase payments follow the schedule in the sale agreement with RAZZ Construction and Properties Ltd.",
};

export const compensationTransparency = {
  title: "Buying from RAZZ",
  disclosure: buyerFeeDisclosure,
  note: buyerFeeNote,
  points: [
    "RAZZ Construction and Properties Ltd. is the developer and seller of the homes on this website.",
    "Buyers do not pay a separate brokerage or consultation fee on this website.",
    "The purchase price is the price in the sale agreement.",
    "Landowners and other developers can propose a joint venture. Those terms are not published here.",
  ],
  developerFeeTermPublic:
    "Joint-venture or other commercial terms with a landowner or partner, when any exist, stay in a private agreement. Public pages do not publish amounts or percentages.",
  developerFeeTermInternalLabel: developerFeeLabel(),
};

export const transactionFlows = {
  title: "The purchase and any joint venture",
  intro:
    "A home on this website is developed and sold by RAZZ Construction and Properties Ltd. A joint venture with a landowner or another developer, when one exists, is a separate agreement and is not the buyer’s purchase contract.",
  buyerPurchase: {
    title: "Property purchase",
    steps: ["Buyer", "Sale agreement", "RAZZ Construction and Properties"] as const,
    note: "The sale agreement, purchase price, and payment of that price are between the buyer and RAZZ Construction and Properties Ltd.",
  },
  developerCommercial: {
    title: "Joint venture",
    steps: ["Landowner", "Joint venture", "RAZZ Construction and Properties"] as const,
    note: "A joint venture covers land and development with a landowner or another developer. It is not the buyer’s purchase contract, and its commercial terms are not published here.",
  },
  funds: howWeWork.funds,
};

export const propertyDisclaimer = {
  title: "Property information",
  body:
    "Prices, availability, specifications, unit availability, completion schedules, service charges, taxes, title information and other property details may change. Buyers should confirm important information with the RAZZ sales team and with qualified professionals before making a purchase decision. Property information on this website is not a guarantee.",
  source:
    "Project information is published by RAZZ Construction and Properties Ltd. Confirm important details with the sales team before you buy.",
};

export const professionalAdvice = {
  title: "Independent professional advice",
  body:
    "Before completing a property transaction, buyers should obtain independent legal advice, tax advice, financial advice, and financing advice from qualified professionals of their own choosing.",
};

export const noInvestmentPromises = {
  title: "No investment promises",
  body:
    "RAZZ Construction and Properties does not promise or imply guaranteed appreciation, guaranteed rental income, guaranteed returns, guaranteed resale value, guaranteed capital gains, guaranteed occupancy, or guaranteed investment performance. Property can lose value. Past or illustrative figures are not a prediction.",
};

export type BangladeshLegalTopic = {
  id: string;
  title: string;
  status: "pending_counsel";
  body: string;
};

export const bangladeshLegalTopics: readonly BangladeshLegalTopic[] = [
  {
    id: "company-status",
    title: "Company status and licensing",
    status: "pending_counsel",
    body: "RAZZ Construction and Properties Ltd. is a registered real-estate company in Bangladesh. This website does not publish a licence or registration number. Counsel can add that number when the company chooses to display it.",
  },
  {
    id: "advisory-activity",
    title: "Development and sales",
    status: "pending_counsel",
    body: "RAZZ Construction and Properties Ltd. develops residential projects in Bangladesh and sells them through its sales team. Landowners and other developers may contact the company about a joint venture. This page does not publish a licence or registration number.",
  },
  {
    id: "ownership-and-title",
    title: "Property ownership and title",
    status: "pending_counsel",
    body: "Reserved for counsel-approved information on ownership, title, and transfer of Bangladesh real property. Buyers should confirm title with the RAZZ sales team and with independent legal counsel.",
  },
  {
    id: "taxes-and-charges",
    title: "Taxes, fees, and registration charges",
    status: "pending_counsel",
    body: "Reserved for counsel-approved information on taxes, stamp duties, registration charges, and similar costs that may apply to a Bangladesh property purchase. Published listing prices do not automatically include those amounts.",
  },
  {
    id: "non-resident-buyers",
    title: "Buyers living outside Bangladesh",
    status: "pending_counsel",
    body: "Reserved for counsel-approved information relevant to buyers who live outside Bangladesh. Ownership, payment, and registration rules can depend on citizenship, residency, and the facts of the transaction. Independent legal advice is required.",
  },
  {
    id: "developer-approvals",
    title: "Developer and project approvals",
    status: "pending_counsel",
    body: "Approvals, structural certificates, and project registration for homes offered on this website belong to RAZZ Construction and Properties Ltd. Counsel-approved wording can be added here.",
  },
  {
    id: "personal-data",
    title: "Personal data",
    status: "pending_counsel",
    body: "Reserved for counsel-approved language on Bangladesh personal-data and privacy requirements. The Privacy Policy describes current operational practice for information submitted on this website.",
  },
  {
    id: "property-marketing",
    title: "Property marketing and advertising",
    status: "pending_counsel",
    body: "Reserved for counsel-approved language on advertising and marketing of Bangladesh property. Listing copy should be confirmed with the RAZZ sales team.",
  },
];

export type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type LegalPageContent = {
  slug: string;
  path: string;
  title: string;
  navLabel: string;
  description: string;
  sections: readonly LegalSection[];
};

const counselParagraph = counselReview.notice;
const notAdviceParagraph = counselReview.notLegalAdvice;

export const legalPages = {
  terms: {
    slug: "terms",
    path: "/terms",
    title: "Terms & Conditions",
    navLabel: "Terms",
    description: "Terms of use for the RAZZ Construction and Properties website. Operational copy pending Bangladesh legal counsel review.",
    sections: [
      {
        heading: "About this page",
        paragraphs: [counselParagraph, notAdviceParagraph],
      },
      {
        heading: "Who RAZZ Construction and Properties is on this website",
        paragraphs: [
          positioning.summary,
          positioning.sellerResponsibility,
          `${howWeWork.summary} ${howWeWork.purchaseAgreement}`,
          positioning.licence,
        ],
      },
      {
        heading: "Use of this website",
        paragraphs: [
          "These terms apply to your use of razzcnpl.me. By using the site you agree to use it lawfully and not to scrape, misrepresent, or interfere with the service.",
          "Materials on this website describe residential projects developed and offered by RAZZ Construction and Properties Ltd. in Bangladesh.",
        ],
      },
      {
        heading: "The sale",
        paragraphs: [
          howWeWork.purchaseAgreement,
          transactionFlows.funds,
          "The sales team helps with project information, viewings, and the path to a sale agreement. Registering title is completed with the professionals appointed for that sale.",
        ],
      },
      {
        heading: "Property information and investment language",
        paragraphs: [propertyDisclaimer.body, noInvestmentPromises.body],
      },
      {
        heading: "Fees",
        paragraphs: [buyerFeeDisclosure, buyerFeeNote],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about these terms: sales@razzcnpl.me. Office: House 05, Road 04, Nikunja-1, Khilkhet, Dhaka 1229, Bangladesh.",
        ],
      },
    ],
  },
  privacy: {
    slug: "privacy",
    path: "/privacy",
    title: "Privacy Policy",
    navLabel: "Privacy",
    description: "How RAZZ Construction and Properties handles personal information submitted on this website. Operational copy pending Bangladesh legal counsel review.",
    sections: [
      {
        heading: "About this page",
        paragraphs: [counselParagraph, notAdviceParagraph],
      },
      {
        heading: "What this policy covers",
        paragraphs: [
          "This policy describes operational practice for personal information submitted on razzcnpl.me in connection with RAZZ Construction and Properties Ltd., a real-estate development company in Bangladesh. It is not a complete statement of Bangladesh data-protection law.",
        ],
      },
      {
        heading: "What we collect",
        paragraphs: [
          "When you submit a form we may collect your name, email, phone or WhatsApp number, country of residence, preferred city, property preferences, budget, message, and any file you attach.",
          "Waitlist requests, brochure downloads, inquiries, viewing requests, sales enquiries, and job applications are stored so a member of the team can respond and send materials you asked for.",
          "Server logs may include an IP address used for security and rate limiting.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use the information to respond to you, match published RAZZ homes as a screening aid, coordinate viewings, and keep a record of the enquiry.",
          "We do not sell this information.",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "Sales enquiries are handled by RAZZ Construction and Properties Ltd. If you propose a joint venture, relevant contact details may be shared with the people inside the company who review land and partnerships. We do not publish internal staff notes or commercial terms on this website.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "Essential cookies operate the staff session and remember cookie choices. Analytics cookies are optional and are not set unless you accept them and an analytics identifier is present. See the Cookie Policy.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Privacy questions: sales@razzcnpl.me."],
      },
    ],
  },
  cookies: {
    slug: "cookies",
    path: "/cookies",
    title: "Cookie Policy",
    navLabel: "Cookies",
    description: "Cookie notice for razzcnpl.me. Operational copy pending Bangladesh legal counsel review.",
    sections: [
      {
        heading: "About this page",
        paragraphs: [counselParagraph],
      },
      {
        heading: "Essential cookies",
        paragraphs: [
          "Essential cookies operate the staff session and remember whether you have seen the cookie notice. The site cannot provide the staff console without the session cookie.",
        ],
      },
      {
        heading: "Analytics cookies",
        paragraphs: [
          "Analytics cookies are optional. They are not set unless you accept them and an analytics identifier is present in the environment.",
        ],
      },
      {
        heading: "Local storage",
        paragraphs: [
          "Saved homes and comparison lists use local storage on your device, not a third-party cookie.",
        ],
      },
    ],
  },
  property: {
    slug: "property-disclaimer",
    path: "/disclaimer/property",
    title: "Property Disclaimer",
    navLabel: "Property disclaimer",
    description: "Property information on razzcnpl.me may change and is not a guarantee.",
    sections: [
      {
        heading: "About this page",
        paragraphs: [counselParagraph, notAdviceParagraph],
      },
      {
        heading: "Property details may change",
        paragraphs: [propertyDisclaimer.body, propertyDisclaimer.source],
      },
      {
        heading: "Who confirms the facts",
        paragraphs: [
          "Confirm prices, availability, specifications, unit mix, completion schedules, service charges, taxes, and title with the RAZZ sales team and with qualified professionals before you decide to purchase.",
          howWeWork.purchaseAgreement,
        ],
      },
      {
        heading: "No investment promises",
        paragraphs: [noInvestmentPromises.body, professionalAdvice.body],
      },
    ],
  },
  buyerFee: {
    slug: "buyer-fee",
    path: "/disclaimer/buyer-fee",
    title: "Buyer Fee Disclosure",
    navLabel: "Purchase",
    description: buyerFeeDisclosure,
    sections: [
      {
        heading: "About this page",
        paragraphs: [counselParagraph],
      },
      {
        heading: "What buyers pay RAZZ Construction and Properties",
        paragraphs: [buyerFeeDisclosure],
      },
      {
        heading: "Compensation transparency",
        paragraphs: [
          compensationTransparency.points.join(" "),
          buyerFeeNote,
          compensationTransparency.developerFeeTermPublic,
        ],
      },
      {
        heading: "Separate from the purchase price",
        paragraphs: [
          transactionFlows.buyerPurchase.note,
          transactionFlows.developerCommercial.note,
          transactionFlows.funds,
        ],
      },
    ],
  },
  developers: {
    slug: "developer-disclosure",
    path: "/disclaimer/developers",
    title: "Developer Partner Disclosure",
    navLabel: "Joint venture",
    description: "Landowners and other developers can contact RAZZ Construction and Properties Ltd. about a joint venture. Public pages do not publish confidential terms.",
    sections: [
      {
        heading: "About this page",
        paragraphs: [counselParagraph],
      },
      {
        heading: "The developer",
        paragraphs: [
          "RAZZ Construction and Properties Ltd. develops and sells the residential projects on this website. It is a registered real-estate company in Bangladesh.",
          positioning.sellerResponsibility,
          howWeWork.purchaseAgreement,
        ],
      },
      {
        heading: "Joint ventures",
        paragraphs: [
          "A landowner or another developer may propose a joint venture. Any such agreement is private. Public pages do not publish amounts, percentages, or agreement terms.",
          "Buyers of a home purchase from RAZZ Construction and Properties Ltd. under a sale agreement. A joint venture is not the buyer’s purchase contract.",
          "Public pages do not disclose confidential commercial terms or internal notes.",
        ],
      },
      {
        heading: "Two relationships",
        paragraphs: [
          transactionFlows.intro,
          `${transactionFlows.buyerPurchase.steps.join(" → ")}. ${transactionFlows.buyerPurchase.note}`,
          `${transactionFlows.developerCommercial.steps.join(" → ")}. ${transactionFlows.developerCommercial.note}`,
          transactionFlows.funds,
        ],
      },
    ],
  },
  disclaimer: {
    slug: "disclaimer",
    path: "/disclaimer",
    title: "General Disclaimer",
    navLabel: "Disclaimer",
    description: "General disclaimer for the RAZZ Construction and Properties website. Not legal advice.",
    sections: [
      {
        heading: "About this page",
        paragraphs: [counselParagraph, notAdviceParagraph],
      },
      {
        heading: "What RAZZ Construction and Properties does",
        paragraphs: [
          positioning.summary,
          howWeWork.summary,
          howWeWork.purchaseAgreement,
          positioning.licence,
        ],
      },
      {
        heading: "Property information",
        paragraphs: [propertyDisclaimer.body, noInvestmentPromises.body],
      },
      {
        heading: "Fees and developer relationships",
        paragraphs: [buyerFeeDisclosure, buyerFeeNote],
      },
      {
        heading: "Independent advice",
        paragraphs: [professionalAdvice.body, transactionFlows.funds],
      },
    ],
  },
} as const satisfies Record<string, LegalPageContent>;

export const legalNav = [
  { href: legalPages.privacy.path, label: legalPages.privacy.navLabel },
  { href: legalPages.terms.path, label: legalPages.terms.navLabel },
  { href: legalPages.cookies.path, label: legalPages.cookies.navLabel },
  { href: legalPages.disclaimer.path, label: legalPages.disclaimer.navLabel },
  { href: legalPages.property.path, label: legalPages.property.navLabel },
  { href: legalPages.buyerFee.path, label: legalPages.buyerFee.navLabel },
  { href: legalPages.developers.path, label: legalPages.developers.navLabel },
  { href: "/legal/bangladesh", label: "Bangladesh legal information" },
] as const;

export const legalCompliance = [
  {
    title: "Developer and seller",
    body: "RAZZ Construction and Properties Ltd. is the developer and seller of the homes offered on this website. Project approvals for those developments are the company’s responsibility.",
  },
  {
    title: "The purchase",
    body: "You buy from RAZZ Construction and Properties Ltd. The price is the one written in the sale agreement.",
  },
  {
    title: "Office",
    body: "RAZZ Construction and Properties Ltd. House 05, Road 04, Nikunja-1, Khilkhet, Dhaka 1229, Bangladesh. A registered real-estate company in Bangladesh.",
  },
] as const;
