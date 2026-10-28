import { describe, expect, it } from "vitest";
import { allowDemoInventory, isPubliclyVisible, publicVisibilityWhere } from "@/lib/demo-inventory";
import { howWeWork, positioning } from "@/config/legal";
import { buyerFeeDisclosure } from "@/config/businessModel";
import { siteConfig } from "@/config/site";

describe("demo inventory visibility", () => {
  it("hides demo rows in production unless explicitly allowed", () => {
    expect(allowDemoInventory({ NODE_ENV: "production" })).toBe(false);
    process.env.ALLOW_DEMO_LISTINGS = "false";
    expect(publicVisibilityWhere()).toEqual({ published: true, demo: false });
    expect(isPubliclyVisible({ published: true, demo: true })).toBe(false);
    expect(isPubliclyVisible({ published: true, demo: false })).toBe(true);
    expect(isPubliclyVisible({ published: false, demo: false })).toBe(false);
    delete process.env.ALLOW_DEMO_LISTINGS;
  });

  it("shows demo rows when ALLOW_DEMO_LISTINGS is true", () => {
    expect(allowDemoInventory({ NODE_ENV: "production", ALLOW_DEMO_LISTINGS: "true" })).toBe(true);
    process.env.ALLOW_DEMO_LISTINGS = "true";
    expect(publicVisibilityWhere()).toEqual({ published: true });
    expect(isPubliclyVisible({ published: true, demo: true })).toBe(true);
    delete process.env.ALLOW_DEMO_LISTINGS;
  });
});

describe("Bangladesh public positioning", () => {
  it("states the developer role, purchase policy, and Bangladesh market", () => {
    expect(positioning.summary).toContain("Bangladesh");
    expect(howWeWork.summary).toContain("develops and sells its own residential projects in Bangladesh");
    expect(buyerFeeDisclosure).toContain("sale contract with RAZZ Construction and Properties Ltd.");
    expect(siteConfig.description.toLowerCase()).toContain("bangladesh");
    expect(siteConfig.description.toLowerCase()).not.toContain("advisory");
  });
});
