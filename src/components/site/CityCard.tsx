import Link from "next/link";
import { cityPath, type HierarchyCity } from "@/config/locations";

export function CityCard({
  city,
  propertyCount,
}: {
  city: HierarchyCity;
  propertyCount?: number;
}) {
  return (
    <Link
      href={cityPath(city.slug)}
      className="group relative flex min-h-[340px] flex-col overflow-hidden md:min-h-[420px]"
    >
      <img
        src={city.heroImage}
        alt={`${city.name}, Bangladesh`}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/75 to-ivory/10" />
      <div className="relative mt-auto flex flex-col justify-end p-6 text-charcoal sm:p-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-earth">Bangladesh</p>
        <h3 className="font-display mt-2 text-4xl md:text-5xl">{city.name}</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted">{city.tagline}</p>
        {propertyCount && propertyCount > 0 ? (
          <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-earth">
            {propertyCount} {propertyCount === 1 ? "property" : "properties"}
          </p>
        ) : null}
        <span className="mt-6 inline-flex w-fit border border-charcoal/20 px-5 py-3 text-[11px] uppercase tracking-[0.18em] transition group-hover:bg-moss group-hover:text-ivory">
          {city.cta}
        </span>
      </div>
    </Link>
  );
}
