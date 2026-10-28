import { PublicShell } from "@/components/site/PublicShell";
import { PageHero } from "@/components/site/PageHero";
import { AdvisoryForm } from "@/components/forms/AdvisoryForm";
import { BuyerFeeNotice } from "@/components/site/BuyerFeeNotice";
import { Button } from "@/components/ui/button";
import { buyerCtas } from "@/config/ctas";
import { createMetadata } from "@/lib/seo";
import { getDevelopments, getPublishedDevelopers } from "@/lib/data";
import { publicDeveloperName } from "@/lib/developer";

export const dynamic = "force-dynamic";
export const metadata = createMetadata({
  title: "Talk to sales",
  description:
    "Share what you are looking for with RAZZ sales. We shortlist homes in our Bangladesh projects and arrange viewings.",
  path: "/advise",
  image: "/media/about-lobby.jpg",
});

export default async function AdvisePage() {
  const [developers, developments] = await Promise.all([getPublishedDevelopers(), getDevelopments()]);
  const namedDevelopers = developers
    .map((developer) => {
      const name = publicDeveloperName(developer);
      return name ? { id: developer.id, name } : null;
    })
    .filter((row): row is { id: string; name: string } => Boolean(row));

  return (
    <PublicShell transparentHeader>
      <PageHero
        image="/media/about-lobby.jpg"
        eyebrow="Sales"
        title="Talk to sales."
        description="Tell us how you will use the home. RAZZ sales reviews your requirements, shortlists homes in our projects, and arranges the next step. You buy from RAZZ Construction and Properties Ltd."
      />
      <section className="grid gap-12 px-4 py-14 sm:px-6 md:px-12 md:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-earth">What happens next</p>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-muted">
            <li>1. You share requirements. We do not ask for passport scans or bank statements at this stage.</li>
            <li>2. Sales matches your brief to published RAZZ homes. Matching is a screening aid, not a financial or legal opinion.</li>
            <li>3. We contact you, then shortlist homes and arrange a viewing.</li>
            <li>4. You complete the purchase with RAZZ Construction and Properties Ltd.</li>
          </ol>
          <BuyerFeeNotice className="mt-8" />
          <Button href="/properties" variant="outline" className="mt-8">
            {buyerCtas.findMyProperty}
          </Button>
        </div>
        <div>
          <h2 className="font-display text-4xl">Your requirements</h2>
          <p className="mt-3 text-sm text-muted">Required fields help us start. Optional developer and financing details can wait.</p>
          <div className="mt-8">
            <AdvisoryForm
              developers={namedDevelopers}
              developments={developments.map((item) => ({ id: item.id, name: item.name }))}
            />
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
