import Link from "next/link";
import { PublicShell } from "@/components/site/PublicShell";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PresenceMap } from "@/components/maps/PresenceMap";
import { DualCta } from "@/components/site/LeadCapture";
import { DiasporaFaq } from "@/components/site/DiasporaFaq";
import { HowItWorksSteps } from "@/components/site/HowItWorksSteps";
import { HowWeWork } from "@/components/site/HowWeWork";
import { HowWeArePaid } from "@/components/site/HowWeArePaid";
import { TransactionFlows } from "@/components/site/TransactionFlows";
import { BuyerFeeHighlight } from "@/components/site/BuyerFeeHighlight";
import { CountrySelector } from "@/components/site/CountrySelector";
import { howWeWork } from "@/config/legal";
import { PropertyCard } from "@/components/property/PropertyCard";
import {
  siteConfig,
  whyMatriBhumi,
  whatWeDo,
} from "@/config/site";
import { buyerCtas, developerCtas } from "@/config/ctas";
import {
  countPublicPropertiesForCity,
  getArticles,
  getFeaturedDevelopers,
  getFeaturedProperties,
  getMapDevelopments,
} from "@/lib/data";
import { publicDeveloperName } from "@/lib/developer";
import { locationCities } from "@/config/locations";
import { CityCard } from "@/components/site/CityCard";
import { statusLabel } from "@/lib/format";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata = createMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline.replace(/\.$/, "")}`,
  description: siteConfig.supporting,
  path: "/",
  image: "/media/hero-landing.jpg",
});

export default async function HomePage() {
  const [featuredProperties, featuredDevelopers, articles, mapPins] = await Promise.all([
    getFeaturedProperties(6),
    getFeaturedDevelopers(),
    getArticles(),
    getMapDevelopments(),
  ]).catch(() => [[], [], [], []] as const);
  const cityCounts = await Promise.all(
    locationCities.map(async (city) => ({ slug: city.slug, count: await countPublicPropertiesForCity(city.slug) })),
  ).catch(() => [] as { slug: string; count: number }[]);
  const cityCountBySlug = Object.fromEntries(cityCounts.map((row) => [row.slug, row.count]));

  return (
    <PublicShell transparentHeader>
      <section className="relative min-h-[100dvh] overflow-hidden">
        <img
          src="/media/hero-landing.jpg"
          alt="A bright waterfront residential tower with RAZZ at the entrance"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/88 to-ivory/25" />
        <div className="relative flex min-h-[100dvh] flex-col justify-end px-4 pb-16 pt-36 sm:px-6 md:px-16 md:pb-28 md:pt-44">
          <p className="text-[11px] uppercase tracking-[0.32em] text-earth">Real estate development</p>
          <h1 className="font-display mt-5 max-w-4xl text-[2.2rem] leading-[1.05] text-charcoal sm:text-5xl md:mt-6 md:text-7xl lg:text-8xl md:leading-[0.94]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:mt-7 sm:text-lg sm:leading-8">
            {siteConfig.supporting}
          </p>
          <div className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href="/advise" size="lg" className="w-full sm:w-auto">
              {buyerCtas.talkToAdvisor}
            </Button>
            <Button href="/properties" variant="outline" size="lg" className="w-full sm:w-auto">
              {buyerCtas.findMyProperty}
            </Button>
          </div>
          <CountrySelector label="Choose a Bangladesh city" className="mt-10" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:px-12 md:py-28">
        <SectionHeader
          eyebrow="What RAZZ Construction and Properties does"
          title="We develop and sell our own homes."
          description={howWeWork.summary}
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {whatWeDo.map((item) => (
            <article key={item.title} className="advisory-card p-8 md:p-10">
              <div className="section-rule" />
              <h3 className="font-display mt-6 text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist px-4 py-20 sm:px-6 md:px-12 md:py-28">
        <SectionHeader
          eyebrow="Bangladesh"
          title="Explore Properties by City"
          description="Start with a city, then open a neighborhood. These are residential projects by RAZZ Construction and Properties Ltd."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {locationCities.map((city) => (
            <CityCard key={city.slug} city={city} propertyCount={cityCountBySlug[city.slug]} />
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:px-12 md:py-28">
        <SectionHeader
          eyebrow="Our developments"
          title="Homes from RAZZ."
          description="These homes are developed and offered by RAZZ Construction and Properties Ltd. Speak with sales about availability and a viewing."
        />
        {featuredProperties.length ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-muted">Featured listings appear here as published properties are marked featured.</p>
        )}
        <Button href="/properties" variant="outline" className="mt-12">
          {buyerCtas.findMyProperty}
        </Button>
      </section>

      <section className="bg-stone px-4 py-20 text-charcoal sm:px-6 md:px-12 md:py-28">
        <SectionHeader
          eyebrow="The company"
          title="Developed by RAZZ Construction and Properties."
          description="RAZZ Construction and Properties Ltd. is the developer of the homes on this website."
        />
        {featuredDevelopers.length ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredDevelopers.map((developer) => {
              const name = publicDeveloperName(developer);
              if (!name) return null;
              return (
                <Link
                  key={developer.id}
                  href={`/developers/${developer.slug}`}
                  className="border border-charcoal/10 bg-paper p-8 hover:border-moss"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-earth">
                    Developer
                  </p>
                  <h3 className="font-display mt-3 text-3xl">{name}</h3>
                  <p className="mt-3 text-sm text-muted">
                    {developer._count.properties} listed properties
                  </p>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="mt-10 max-w-2xl text-muted">
            Project profiles appear here as RAZZ developments are published. Until then, browse
            the homes or talk to sales.
          </p>
        )}
        <Button href="/projects" variant="outline" className="mt-12">
          Our projects
        </Button>
      </section>

      <HowWeWork />

      <section className="px-4 py-20 sm:px-6 md:px-12 md:py-28">
        <SectionHeader
          eyebrow="Buying a RAZZ home"
          title="From first conversation to your sale agreement."
          description={`${howWeWork.purchaseAgreement} The sales team stays with you through the viewing and the reservation.`}
        />
        <HowItWorksSteps />
        <Button href="/how-it-works" variant="outline" className="mt-12">
          How it works
        </Button>
      </section>

      <section className="bg-mist px-4 py-20 sm:px-6 md:px-12 md:py-28">
        <SectionHeader
          eyebrow="Trust"
          title="Why buyers choose RAZZ Construction and Properties"
          description={siteConfig.audience}
        />
        <div className="mt-14 grid gap-px bg-charcoal/10 md:grid-cols-2 lg:grid-cols-4">
          {whyMatriBhumi.map((item) => (
            <article key={item.title} className="bg-ivory p-8 md:p-9">
              <div className="section-rule" />
              <h3 className="font-display mt-5 text-2xl leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <BuyerFeeHighlight />
      <HowWeArePaid />
      <TransactionFlows tone="mist" />

      <section className="bg-paper px-4 py-20 text-charcoal sm:px-6 md:px-12 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <SectionHeader
            eyebrow="Joint venture"
            title="Have land, or a project to build together?"
            description="Landowners and other developers can contact RAZZ Construction and Properties about a joint venture."
          />
          <div className="lg:justify-self-end">
            <Button href="/for-developers" size="lg">
              {developerCtas.partner}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-20 sm:px-6 md:px-12 md:py-28">
        <SectionHeader
          eyebrow="Locations"
          title="Properties on the map."
          description="Select a development and the map moves to it. Published listings are in Bangladesh."
        />
        <CountrySelector label="Published locations on the map" className="mt-10" />
        <div className="mt-12">
          <PresenceMap
            pins={mapPins.map((pin) => ({
              id: pin.id,
              name: pin.name,
              slug: pin.slug,
              latitude: pin.latitude,
              longitude: pin.longitude,
              heroImage: pin.heroImage,
              locationNote: pin.locationNote,
              status: pin.status,
              location: pin.location,
            }))}
          />
        </div>
      </section>

      <DiasporaFaq />

      <section className="px-4 py-20 sm:px-6 md:px-12 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="Insights" title="Notes from the market and the street." />
          <Button href="/insights" variant="outline" className="w-full sm:w-auto">
            All insights
          </Button>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <Link key={article.id} href={`/insights/${article.slug}`} className="group">
              <div className="aspect-[16/10] overflow-hidden bg-stone">
                <img src={article.coverImage} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-earth">
                {statusLabel(article.category)}
              </p>
              <h3 className="font-display mt-2 text-2xl leading-tight group-hover:text-moss">{article.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone px-4 py-20 text-charcoal sm:px-6 md:px-12 md:py-28">
        <SectionHeader
          eyebrow="Start a conversation"
          title="Talk to sales."
          description="Tell us the city, the kind of home, and how you will use it. Sales will follow up on RAZZ projects."
        />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/advise">
            {buyerCtas.talkToAdvisor}
          </Button>
          <Button href="/properties" variant="outline">
            {buyerCtas.findMyProperty}
          </Button>
        </div>
        <DualCta className="mt-4" />
      </section>
    </PublicShell>
  );
}
