import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/content/site";

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "group inline-flex items-center gap-0.5",
        className,
      )}
    >
      <Image
        src="https://ucarecdn.com/45a2fbba-34b2-4297-8f0f-5cb3a481d815/-/preview/512x512/"
        alt="GloApp logo"
        width={32}
        height={32}
        className="size-8 transition-transform group-hover:scale-105"
        priority
      />
      <span className="text-lg font-semibold tracking-tight">
        app
      </span>
    </Link>
  );
}
