import { PublicShell } from "@/components/site/PublicShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { developerServices, siteConfig } from "@/config/site";
import { developerCtas } from "@/config/ctas";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Joint venture",
  description:
    "Landowners and other developers can contact RAZZ Construction and Properties Ltd. about a joint venture on a site in Bangladesh.",
  path: "/for-developers",
  image: "/media/about-lobby.jpg",
});

export default function ForDevelopersPage() {
  return (
    <PublicShell transparentHeader>
      <PageHero
        image="/media/about-lobby.jpg"
        eyebrow="Joint venture"
        title="Develop with RAZZ."
        description="Own land, or want to build a project with us? Contact RAZZ Construction and Properties Ltd. about a joint venture."
      >
        <Button href="/contact">
          {developerCtas.partner}
        </Button>
      </PageHero>
      <section className="px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <SectionHeader
          eyebrow="Land and partnerships"
          title="A joint venture starts with the site."
          description="RAZZ Construction and Properties Ltd. is the developer. Share a site or a proposal and the team will tell you whether it can become a RAZZ project. A joint venture is a private agreement. We do not promise a return."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {developerServices.map((item) => (
            <article key={item.title} className="advisory-card p-6 md:p-8">
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-mist px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <SectionHeader
          title="What a joint venture is"
          description="A joint venture is an agreement to develop land together. It is not a promise of sales volume, and it is not a financial product. Commercial terms stay in the agreement and are not published here."
        />
        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">{siteConfig.buyerFeeNote}</p>
      </section>
      <section className="bg-stone px-4 py-16 text-charcoal sm:px-6 md:px-12 md:py-24">
        <h2 className="font-display text-4xl md:text-5xl">Propose a joint venture</h2>
        <p className="mt-5 max-w-2xl text-muted">
          Write to the Dhaka office about land or a development you would like to build with RAZZ Construction and
          Properties Ltd. Tell us the location and what you have in mind.
        </p>
        <Button href="/contact" className="mt-10">
          {developerCtas.partner}
        </Button>
      </section>
    </PublicShell>
  );
}
