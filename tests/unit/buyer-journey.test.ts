import { describe, expect, it } from "vitest";
import {
  advisorFollowUpMessage,
  buyerFeeHeadline,
  buyerFeeMarketing,
  buyerJourneyFeeMessage,
  propertySourceDisclosure,
} from "@/config/businessModel";
import { buyerCtas, developerCtas } from "@/config/ctas";
import { howItWorksSteps, whyMatriBhumi } from "@/config/site";
import { advisorRequestEmail } from "@/lib/mail";
import { rankPropertyMatches, scorePropertyMatch } from "@/lib/matching";
import { advisorySchema } from "@/lib/validations";

const listing = {
  id: "p1",
  name: "Heights Residences",
  type: "APARTMENT",
  status: "LAUNCHED",
  startingPrice: 180000,
  bedroomsMin: 2,
  bedroomsMax: 3,
  developerId: "dev-1",
  developmentId: "devt-1",
  location: { name: "Bashundhara", city: "Dhaka", country: "Bangladesh" },
};

describe("buyer journey copy", () => {
  it("keeps the configurable public fee message exact", () => {
    expect(buyerJourneyFeeMessage).toBe(
      "The purchase price of a home is agreed in the sale contract with RAZZ Construction and Properties Ltd. This website does not charge a separate buyer brokerage or consultation fee.",
    );
  });

  it("states sales follow-up and source disclosure without return promises", () => {
    expect(advisorFollowUpMessage).toBe(
      "A member of the RAZZ sales team will review your enquiry and contact you.",
    );
    expect(propertySourceDisclosure).toContain("Prices, availability, specifications, unit availability");
    expect(propertySourceDisclosure).toContain("not a guarantee");
    expect(propertySourceDisclosure.toLowerCase()).not.toMatch(/yield|appreciation|return/);
  });

  it("uses sales CTAs instead of a buy-now primary action", () => {
    expect(buyerCtas.talkToAdvisor).toBe("Talk to Sales");
    expect(buyerCtas.findMyProperty).toBe("Explore Properties");
    expect(buyerCtas.viewProperty).toBe("View Property");
    expect(buyerCtas.talkToAdvisorShort).toBe("Talk to Sales");
    expect(buyerCtas.requestDetails).toBe("Request Property Details");
    expect(buyerCtas.arrangeViewing).toBe("Arrange a Viewing");
    expect(developerCtas.partner).toBe("Propose a joint venture");
    expect(Object.values(buyerCtas).join(" ")).not.toMatch(/buy now/i);
  });

  it("keeps the marketing headline paired with the canonical purchase disclosure", () => {
    expect(buyerFeeHeadline).toBe("Buy directly from the developer.");
    expect(buyerFeeMarketing).toBe(buyerJourneyFeeMessage);
    expect(buyerFeeMarketing).toContain("sale contract with RAZZ Construction and Properties Ltd.");
  });

  it("states why buyers choose RAZZ Construction and Properties in eight trust points", () => {
    expect(whyMatriBhumi.map((item) => item.title)).toEqual([
      "Our own projects",
      "Registered in Bangladesh",
      "Support from abroad",
      "One sales contact",
      "A direct purchase",
      "Compare homes",
      "Viewings",
      "Joint ventures",
    ]);
  });

  it("describes an eight-step buyer journey", () => {
    expect(howItWorksSteps).toHaveLength(8);
    expect(howItWorksSteps[2]?.body).toBe(advisorFollowUpMessage);
    expect(howItWorksSteps[6]?.body).toContain("You purchase from RAZZ Construction and Properties Ltd.");
  });
});

describe("advisorySchema", () => {
  const valid = {
    name: "Asha Rahman",
    email: "asha@example.com",
    phone: "+447700900123",
    residenceCountry: "United Kingdom",
    preferredMarket: "Bangladesh",
    preferredCity: "Dhaka",
    propertyType: "APARTMENT",
    budget: "250000",
    currency: "USD",
    bedrooms: 3,
    purpose: "PRIMARY_RESIDENCE",
    timeline: "3–6 months",
    contactMethod: "WHATSAPP",
    message: "Looking for a family apartment near schools.",
    consent: true,
  };

  it("accepts a complete requirements brief without sensitive documents", () => {
    const parsed = advisorySchema.safeParse(valid);
    expect(parsed.success).toBe(true);
  });

  it("rejects missing consent or a short message", () => {
    expect(advisorySchema.safeParse({ ...valid, consent: false }).success).toBe(false);
    expect(advisorySchema.safeParse({ ...valid, message: "Hi" }).success).toBe(false);
  });

  it("keeps developer, project, and financing optional", () => {
    const parsed = advisorySchema.safeParse({
      ...valid,
      developerId: undefined,
      developmentId: undefined,
      financingStatus: "Bank finance",
    });
    expect(parsed.success).toBe(true);
  });
});

describe("property matching", () => {
  it("scores location, type, price, bedrooms, and availability", () => {
    const match = scorePropertyMatch(
      {
        preferredCity: "Dhaka",
        preferredMarket: "Bangladesh",
        propertyType: "APARTMENT",
        budget: "200000",
        bedrooms: 3,
      },
      listing,
    );
    expect(match.percent).toBe(100);
    expect(match.reasons.join(" ")).toMatch(/city|market|type|price|Bedroom|sold out/i);
  });

  it("ranks a closer listing above a mismatch", () => {
    const ranked = rankPropertyMatches(
      { preferredCity: "Dhaka", propertyType: "APARTMENT", budget: "200000" },
      [
        { ...listing, id: "far", type: "VILLA", location: { name: "Agrabad", city: "Chattogram", country: "Bangladesh" } },
        listing,
      ],
    );
    expect(ranked[0]?.property.id).toBe("p1");
    expect(ranked[0]?.match.percent).toBeGreaterThan(ranked[1]?.match.percent ?? 0);
  });
});

describe("advisor request email", () => {
  it("confirms human review and the buyer-fee message", () => {
    const letter = advisorRequestEmail({
      name: "Asha Rahman",
      preferredCity: "Dhaka",
      preferredMarket: "Bangladesh",
      propertyType: "APARTMENT",
      budget: "250000",
      currency: "USD",
    });
    expect(letter.text).toContain("human review");
    expect(letter.text).toContain(buyerJourneyFeeMessage);
    expect(letter.text.toLowerCase()).not.toContain("ai recommendation");
  });
});
