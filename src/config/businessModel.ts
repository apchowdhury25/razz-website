/**
 * Central commercial settings. Public copy and admin UI read these values
 * instead of repeating buyer-fee numbers in pages.
 *
 * Change buyerPaysMatriBhumi / buyerFee here if the business model changes.
 * Developer compensation terms stay in the database and are admin-only.
 */
export const developerFeeTerms = [
  "developer compensation",
  "referral fee",
  "consultant fee",
  "service fee",
] as const;

export type DeveloperFeeTerm = (typeof developerFeeTerms)[number];

export const businessModel = {
  buyerPaysMatriBhumi: false,
  buyerFee: 0,
  buyerFeeCurrency: "USD",
  developerCompensation: true,
  /** Internal CRM label. Change per contract language; do not hard-code "commission". */
  developerFeeTerm: "developer compensation" as DeveloperFeeTerm,
} as const;

export type BusinessModel = typeof businessModel;

/** Canonical public purchase disclosure. Edit here to change site-wide wording. */
export const buyerFeeDisclosure =
  "The purchase price of a home is agreed in the sale contract with RAZZ Construction and Properties Ltd. This website does not charge a separate buyer brokerage or consultation fee.";

export const buyerFeeStatement = businessModel.buyerPaysMatriBhumi
  ? `Buyers pay RAZZ Construction and Properties a fee of ${businessModel.buyerFee} ${businessModel.buyerFeeCurrency}.`
  : buyerFeeDisclosure;

export const buyerFeeNote =
  "Published prices can change. The binding price is the one in the sale agreement. Independent legal advice is yours to obtain. Joint-venture terms with a landowner, when any exist, are not published on this website.";

export const buyerJourneyFeeMessage = buyerFeeStatement;

/** Marketing headline. Pair it with buyerFeeDisclosure. */
export const buyerFeeHeadline = "Buy directly from the developer.";

export const buyerFeeMarketing = buyerFeeDisclosure;

export const advisorFollowUpMessage =
  "A member of the RAZZ sales team will review your enquiry and contact you.";

export const propertySourceDisclosure =
  "Prices, availability, specifications, unit availability, completion schedules, service charges, taxes, title information and other property details may change. Buyers should confirm important information with the RAZZ sales team and with qualified professionals before making a purchase decision. Property information on this website is not a guarantee.";

export function buyerPaysNothing() {
  return !businessModel.buyerPaysMatriBhumi && businessModel.buyerFee === 0;
}

export function developerFeeLabel(options?: { capitalize?: boolean; plural?: boolean }) {
  const term = businessModel.developerFeeTerm;
  const withPlural = options?.plural && !term.endsWith("s") ? `${term}s` : term;
  if (!options?.capitalize) return withPlural;
  return withPlural.charAt(0).toUpperCase() + withPlural.slice(1);
}
