import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type LogoProps = {
  variant?: "light" | "dark" | "mark";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "light", className }: LogoProps) {
  const src =
    variant === "mark" ? "/brand/logo-mark.svg" : `/brand/logo-${variant}.svg`;
  const isMark = variant === "mark";
  return (
    <img
      src={src}
      alt={siteConfig.name}
      width={isMark ? 64 : 268}
      height={64}
      className={cn("h-14 w-auto select-none sm:h-16", isMark && "h-9 w-9 sm:h-10 sm:w-10", className)}
    />
  );
}
