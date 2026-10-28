"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { countryNav, navItems, siteConfig } from "@/config/site";
import { buyerCtas } from "@/config/ctas";
import { cn } from "@/lib/utils";

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 overflow-x-clip bg-ivory text-charcoal shadow-[0_1px_0_rgb(23_52_71/0.08)] transition-all duration-500",
        transparent && !scrolled && !open && "bg-ivory",
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="flex w-full min-w-0 items-center justify-between gap-2 px-4 py-2 sm:gap-4 sm:px-5 md:px-10">
        <Link href="/" aria-label={siteConfig.name} className="min-w-0 shrink">
          <Logo variant="light" className="h-12 w-auto sm:h-14" />
        </Link>
        <nav className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-1 2xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.16em] opacity-80 transition hover:opacity-100 2xl:text-[11px] 2xl:tracking-[0.18em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            href="/advise"
            className={cn(
              "hidden h-10 items-center px-3 text-[10px] uppercase tracking-[0.16em] 2xl:inline-flex",
              "bg-moss text-ivory",
            )}
          >
            {buyerCtas.talkToAdvisor}
          </Link>
          <SearchOverlay />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center 2xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "hidden items-center gap-8 px-4 pb-2 sm:px-5 md:px-10 2xl:flex",
          "text-earth",
        )}
      >
        {countryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[10px] uppercase tracking-[0.22em] transition hover:text-current hover:opacity-100"
          >
            {item.label}
          </Link>
        ))}
      </div>
      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-[calc(4.75rem+env(safe-area-inset-top))] overflow-y-auto border-t border-charcoal/10 bg-ivory px-6 py-8 text-charcoal 2xl:hidden">
          <nav className="grid gap-1 pb-8">
            <Link
              href="/advise"
              onClick={() => setOpen(false)}
              className="font-display py-2 text-3xl leading-tight sm:text-4xl"
            >
              {buyerCtas.talkToAdvisor}
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display py-2 text-3xl leading-tight sm:text-4xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-[11px] uppercase tracking-[0.22em] text-earth">Bangladesh</p>
          <nav className="mt-3 grid gap-1 pb-28">
            {countryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-lg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
