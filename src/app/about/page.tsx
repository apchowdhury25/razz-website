import { PublicShell } from "@/components/site/PublicShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { LegalCompliance } from "@/components/site/LegalCompliance";
import { StudioLeadership } from "@/components/site/StudioLeadership";
import { HowWeArePaid } from "@/components/site/HowWeArePaid";
import { createMetadata } from "@/lib/seo";
import { siteConfig, whatWeDo } from "@/config/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "RAZZ Construction and Properties Ltd. is a registered real-estate development company in Bangladesh.",
  path: "/about",
  image: "/media/about-lobby.jpg",
});

export default function AboutPage() {
  return (
    <PublicShell transparentHeader>
      <PageHero
        image="/media/about-lobby.jpg"
        eyebrow="About RAZZ Construction and Properties"
        title="A real-estate development company."
        description={`${siteConfig.positioning} We develop residential projects in Bangladesh and sell them through our sales team.`}
      />
      <section className="grid gap-12 px-4 py-14 sm:px-6 md:px-12 md:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl">Story</h2>
          <p className="mt-4 leading-8 text-muted">
            RAZZ Construction and Properties Ltd. is a registered real-estate company based at House 05, Road 04,
            Nikunja-1, Dhaka 1229. The company develops residential projects in Bangladesh and sells those homes
            through its sales team. Families at home and abroad can compare RAZZ projects, visit them, and purchase
            directly from the company. Landowners and other developers can also write about a joint venture.
          </p>
        </div>
        <div className="grid gap-8">
          <div>
            <h3 className="font-display text-3xl">Vision</h3>
            <p className="mt-3 text-muted">
              Develop homes people are glad to live in, and sell them with a clear conversation from the first enquiry to handover.
            </p>
          </div>
          <div>
            <h3 className="font-display text-3xl">Mission</h3>
            <p className="mt-3 text-muted">
              Build residential projects in Bangladesh, help buyers choose a home, and complete the sale with them.
              We do not promise financial returns.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-mist px-4 py-14 sm:px-6 md:px-12 md:py-20">
        <SectionHeader title="How we work" eyebrow="Develop, sell, and partner" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whatWeDo.map((item) => (
            <article key={item.title} className="bg-ivory p-6">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <StudioLeadership />
      <HowWeArePaid />
      <section className="bg-ivory px-4 py-14 sm:px-6 md:px-12 md:py-20">
        <LegalCompliance />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/how-it-works" variant="outline" className="w-full sm:w-auto">
            Buying
          </Button>
          <Button href="/advise" className="w-full sm:w-auto">
            Talk to Sales
          </Button>
        </div>
      </section>
    </PublicShell>
  );
}
