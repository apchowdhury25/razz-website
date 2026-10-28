import { describe, expect, it } from "vitest";
import {
  buyerFeeDisclosure,
  buyerFeeHeadline,
  buyerFeeMarketing,
  buyerJourneyFeeMessage,
  propertySourceDisclosure,
} from "@/config/businessModel";
import {
  bangladeshLegalTopics,
  compensationTransparency,
  counselReview,
  howWeWork,
  legalNav,
  legalPages,
  noInvestmentPromises,
  positioning,
  professionalAdvice,
  propertyDisclaimer,
  transactionFlows,
} from "@/config/legal";
import { footerNav } from "@/config/site";

const BUYER_FEE =
  "The purchase price of a home is agreed in the sale contract with RAZZ Construction and Properties Ltd. This website does not charge a separate buyer brokerage or consultation fee.";

describe("canonical buyer-fee disclosure", () => {
  it("uses the same configurable sentence across public copy", () => {
    expect(buyerFeeDisclosure).toBe(BUYER_FEE);
    expect(buyerJourneyFeeMessage).toBe(BUYER_FEE);
    expect(buyerFeeMarketing).toBe(BUYER_FEE);
    expect(compensationTransparency.disclosure).toBe(BUYER_FEE);
    expect(legalPages.buyerFee.sections.flatMap((section) => section.paragraphs)).toContain(BUYER_FEE);
  });

  it("does not claim a universal developer fee or buyer-paid commission", () => {
    expect(BUYER_FEE.toLowerCase()).not.toContain("%");
    expect(buyerFeeHeadline.toLowerCase()).not.toMatch(/commission-free|financially independent/);
    expect(compensationTransparency.points).toEqual([
      "RAZZ Construction and Properties Ltd. is the developer and seller of the homes on this website.",
      "Buyers do not pay a separate brokerage or consultation fee on this website.",
      "The purchase price is the price in the sale agreement.",
      "Landowners and other developers can propose a joint venture. Those terms are not published here.",
    ]);
  });
});

describe("how we work and transaction flows", () => {
  it("states the Bangladesh developer role and purchase agreement", () => {
    expect(howWeWork.summary).toBe(
      "RAZZ Construction and Properties Ltd. develops and sells its own residential projects in Bangladesh. The sales team helps buyers choose a home, visit it, and complete the purchase.",
    );
    expect(howWeWork.purchaseAgreement).toBe(
      "The property purchase agreement is between the buyer and RAZZ Construction and Properties Ltd.",
    );
    expect(positioning.summary).toContain("registered real-estate development company");
    expect(positioning.summary).toContain("Bangladesh");
    expect(positioning.licence).toContain("registered real-estate company");
    expect(positioning.licence).toContain("does not publish a licence or registration number");
  });

  it("keeps a joint venture separate from the buyer’s purchase", () => {
    expect(transactionFlows.buyerPurchase.steps).toEqual(["Buyer", "Sale agreement", "RAZZ Construction and Properties"]);
    expect(transactionFlows.developerCommercial.steps).toEqual(["Landowner", "Joint venture", "RAZZ Construction and Properties"]);
    expect(transactionFlows.funds).toContain("sale agreement with RAZZ Construction and Properties Ltd.");
    expect(transactionFlows.developerCommercial.note).toContain("not the buyer’s purchase contract");
  });
});

describe("property and professional-advice disclaimers", () => {
  it("warns that listing details may change and are not a guarantee", () => {
    expect(propertyDisclaimer.body).toContain("Prices, availability, specifications, unit availability");
    expect(propertyDisclaimer.body).toContain("not a guarantee");
    expect(propertySourceDisclosure).toBe(propertyDisclaimer.body);
  });

  it("avoids investment promises and recommends independent advice", () => {
    expect(noInvestmentPromises.body.toLowerCase()).toMatch(/guaranteed appreciation/);
    expect(professionalAdvice.body).toContain("legal advice");
    expect(professionalAdvice.body).toContain("tax advice");
    expect(professionalAdvice.body).toContain("financial advice");
    expect(professionalAdvice.body).toContain("financing advice");
  });
});

describe("Bangladesh legal pages", () => {
  it("exposes seven counsel-structured legal pages plus the Bangladesh legal area", () => {
    expect(Object.keys(legalPages)).toEqual([
      "terms",
      "privacy",
      "cookies",
      "property",
      "buyerFee",
      "developers",
      "disclaimer",
    ]);
    expect(legalNav.map((item) => item.href)).toEqual([
      "/privacy",
      "/terms",
      "/cookies",
      "/disclaimer",
      "/disclaimer/property",
      "/disclaimer/buyer-fee",
      "/disclaimer/developers",
      "/legal/bangladesh",
    ]);
    expect(footerNav.legal).toEqual(legalNav);
  });

  it("marks copy as pending Bangladesh counsel review and not legal advice", () => {
    expect(counselReview.status).toBe("pending_review");
    expect(counselReview.jurisdiction).toBe("Bangladesh");
    expect(counselReview.notice).toContain("not legal advice");
    expect(counselReview.notice).toContain("has not been reviewed or approved");
    expect(bangladeshLegalTopics.every((topic) => topic.status === "pending_counsel")).toBe(true);
  });

  it("does not invent licences or other-country legal frameworks", () => {
    const blob = JSON.stringify({ legalPages, bangladeshLegalTopics, positioning, counselReview });
    expect(blob).not.toMatch(/UAE|United Arab Emirates|Malaysia|Malaysian/i);
    expect(blob).not.toMatch(/RAJUK|licence no\.|license no\.|registration no\./i);
    expect(positioning.licence).toContain("does not publish a licence or registration number");
  });
});
