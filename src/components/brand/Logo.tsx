import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type LogoProps = {
  variant?: "light" | "dark" | "mark";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "light", className }: LogoProps) {
  const isMark = variant === "mark";
  return (
    <img
      src="/brand/logo-razz.png"
      alt={siteConfig.name}
      width={1600}
      height={558}
      className={cn(
        "h-24 w-auto max-w-full select-none sm:h-28",
        isMark && "h-12 w-auto sm:h-14",
        className,
      )}
    />
  );
}
