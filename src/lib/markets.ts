export const OPERATING_COUNTRY = "Bangladesh";

export type MarketCity = {
  name: string;
  slug: string;
};

export type Market = {
  slug: "bangladesh";
  name: string;
  shortName: string;
  country: string;
  countryAliases: readonly string[];
  region: string;
  heroImage: string;
  seoTitle: string;
  description: string;
  intro: string;
  cities: readonly MarketCity[];
  listingsPublished: boolean;
};

export const markets = [
  {
    slug: "bangladesh",
    name: "Bangladesh",
    shortName: "Bangladesh",
    country: "Bangladesh",
    countryAliases: ["Bangladesh"],
    region: "South Asia",
    heroImage: "/media/locations/dhaka.jpg",
    seoTitle: "Bangladesh real estate developer",
    description:
      "Residential projects by RAZZ Construction and Properties Ltd. in Bangladesh. Explore the homes and speak with sales.",
    intro:
      "RAZZ Construction and Properties Ltd. develops and sells its own residential projects in Bangladesh. The sales team helps you choose a home and complete the purchase with the company.",
    cities: [
      { name: "Dhaka", slug: "dhaka" },
      { name: "Chattogram", slug: "chattogram" },
    ],
    listingsPublished: true,
  },
] as const satisfies readonly Market[];

export type MarketSlug = (typeof markets)[number]["slug"];

export function getMarket(slug: string) {
  return markets.find((market) => market.slug === slug) ?? null;
}

export function getMarketByCountry(country: string) {
  const value = country.trim().toLowerCase();
  return (
    markets.find(
      (market) =>
        market.country.toLowerCase() === value ||
        market.shortName.toLowerCase() === value ||
        market.countryAliases.some((alias) => alias.toLowerCase() === value),
    ) ?? null
  );
}

export function countryFilterValues(countryOrSlug: string) {
  const market = getMarket(countryOrSlug) ?? getMarketByCountry(countryOrSlug);
  if (!market) return [OPERATING_COUNTRY];
  return [...market.countryAliases];
}

export function isOperatingCountry(country: string) {
  return country.trim().toLowerCase() === OPERATING_COUNTRY.toLowerCase();
}

export function marketHasPublicListings(slug: string) {
  return getMarket(slug)?.listingsPublished === true;
}
