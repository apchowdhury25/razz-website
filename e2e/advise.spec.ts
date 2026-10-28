import { test, expect } from "@playwright/test";

test("sales form collects requirements and confirms sales follow-up", async ({ page }) => {
  await page.goto("/advise");
  await expect(page.getByRole("heading", { level: 1, name: /Talk to sales/i })).toBeVisible();
  await expect(
    page.getByText(
      "The purchase price of a home is agreed in the sale contract with RAZZ Construction and Properties Ltd. This website does not charge a separate buyer brokerage or consultation fee.",
    ).first(),
  ).toBeVisible();

  await page.locator("input[name=name]").fill("Asha Rahman");
  await page.locator("input[name=email]").fill("asha.advisor@example.com");
  await page.locator("input[name=phone]").fill("+447700900123");
  await page.locator("input[name=residenceCountry]").fill("United Kingdom");
  await page.locator("input[name=preferredCity]").fill("Dhaka");
  await page.locator("input[name=budget]").fill("250000");
  await page.locator("input[name=bedrooms]").fill("3");
  await page.locator("textarea[name=message]").fill("Looking for a family apartment near schools in Dhaka.");
  await page.locator("input[name=consent]").check();
  await page.getByRole("button", { name: /Talk to Sales/i }).click();

  await expect(page.getByRole("heading", { name: "Thank you." })).toBeVisible();
  await expect(
    page.getByText("A member of the RAZZ sales team will review your enquiry and contact you."),
  ).toBeVisible();
});
