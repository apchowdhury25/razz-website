import { notFound } from "next/navigation";
import { PublicShell } from "@/components/site/PublicShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/site/JsonLd";
import { countPublicPropertiesForCity, getProperties } from "@/lib/data";
import { getMarket, marketHasPublicListings } from "@/lib/markets";
import { locationCities } from "@/config/locations";
import { CityCard } from "@/components/site/CityCard";
import { breadcrumbJsonLd } from "@/lib/seo";
import { buyerCtas } from "@/config/ctas";

export async function CountryMarketPage({ slug }: { slug: string }) {
  const market = getMarket(slug);
  if (!market) notFound();

  const [propertyData, cityCounts] = await Promise.all([
    marketHasPublicListings(market.slug) ? getProperties({ country: market.slug }) : Promise.resolve({ items: [] }),
    Promise.all(locationCities.map(async (city) => ({ slug: city.slug, count: await countPublicPropertiesForCity(city.slug) }))),
  ]);
  const cityCountBySlug = Object.fromEntries(cityCounts.map((row) => [row.slug, row.count]));

  return (
    <PublicShell transparentHeader>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: market.shortName, path: `/locations/${market.slug}` },
        ])}
      />
      <PageHero
        image={market.heroImage}
        eyebrow={`${market.shortName} developments`}
        title={`${market.name} homes by RAZZ.`}
        description={market.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/advise">
            {buyerCtas.talkToAdvisor}
          </Button>
          <Button
            href={marketHasPublicListings(market.slug) ? `/properties?country=${market.slug}` : "/properties"}
            variant="outline"
          >
            {buyerCtas.findMyProperty}
          </Button>
        </div>
      </PageHero>

      <section className="px-4 py-16 sm:px-6 md:px-12 md:py-20">
        <SectionHeader
          eyebrow="What we do here"
          title={`${market.shortName} projects by RAZZ.`}
          description={market.intro}
        />
      </section>

      <section className="bg-mist px-4 py-16 sm:px-6 md:px-12 md:py-20">
        <SectionHeader
          eyebrow="Cities"
          title={`Explore ${market.shortName} by city.`}
          description="Open a city to browse its neighborhoods. Neighborhoods are not listed on this page."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {locationCities.map((city) => (
            <CityCard key={city.slug} city={city} propertyCount={cityCountBySlug[city.slug]} />
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-12 md:py-20">
        <SectionHeader
          eyebrow="Properties"
          title={`Selected ${market.shortName} listings.`}
          description="Homes are published as RAZZ Construction and Properties releases them. The company develops and sells the projects on this website."
        />
        {propertyData.items.length ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {propertyData.items.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="mt-10 max-w-2xl text-muted">
            No published properties for {market.name} yet. Talk to sales if you would like us to watch this
            market for you.
          </p>
        )}
        <Button href={`/properties?country=${market.slug}`} variant="outline" className="mt-10">
          All {market.shortName} properties
        </Button>
      </section>
    </PublicShell>
  );
}
