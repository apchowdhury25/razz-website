import Link from "next/link";
import { PublicShell } from "@/components/site/PublicShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { getJobs } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata = createMetadata({
  title: "Careers",
  description: "Work with RAZZ Construction and Properties on residential development, projects, and sales in Bangladesh.",
  path: "/careers",
  image: "/media/about-studio.jpg",
});

export default async function CareersPage() {
  const jobs = await getJobs();
  const departments = [...new Set(jobs.map((job) => job.department))];
  const locations = [...new Set(jobs.map((job) => job.location))];

  return (
    <PublicShell transparentHeader>
      <PageHero
        image="/media/about-studio.jpg"
        eyebrow="Careers"
        title="Help people find a home they can return to."
        description="RAZZ Construction and Properties Ltd. develops and sells residential projects in Bangladesh. Open roles in the Dhaka office are listed below."
      />
      <section className="grid gap-10 px-4 py-14 sm:px-6 md:px-12 md:py-20 lg:grid-cols-3">
        <article>
          <h2 className="font-display text-3xl">Culture</h2>
          <p className="mt-4 leading-7 text-muted">A development and sales team in Dhaka. We spend our time on the projects, the homes, and the families who want to buy them — including people who live most of the year in another country.</p>
        </article>
        <article>
          <h2 className="font-display text-3xl">Benefits</h2>
          <p className="mt-4 leading-7 text-muted">Time to think, a working library, and leave that assumes people have lives. Specific packages are described per role when hiring is real.</p>
        </article>
        <article>
          <h2 className="font-display text-3xl">Where</h2>
          <p className="mt-4 leading-7 text-muted">{locations.join(", ") || "Dhaka"} · departments: {departments.join(", ") || "Design"}</p>
        </article>
      </section>
      <section className="bg-mist px-4 py-14 sm:px-6 md:px-12 md:py-20">
        <SectionHeader title="Open positions" eyebrow="Join the team" />
        <ul className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {jobs.map((job) => (
            <li key={job.id}>
              <Link href={`/careers/${job.slug}`} className="flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-2xl">{job.title}</h3>
                  <p className="text-sm text-muted">{job.department} · {job.location} · {job.type}</p>
                </div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-earth">View role</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PublicShell>
  );
}
