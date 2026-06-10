import {
  Briefcase,
  Code2,
  LineChart,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

/**
 * Abstract, SaaS-style hero illustration built entirely from CSS/SVG —
 * no external image asset. A glowing "product surface" with floating
 * metric cards, evoking dashboards/career growth.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
      {/* Glow */}
      <div className="bg-brand/20 absolute inset-0 -z-10 rounded-full blur-3xl" />

      {/* Main panel */}
      <div className="border-border/70 bg-card/70 absolute inset-4 rounded-3xl border shadow-2xl backdrop-blur-sm sm:inset-6">
        <div className="bg-grid absolute inset-0 rounded-3xl opacity-40" />

        {/* Window chrome */}
        <div className="border-border/60 relative flex items-center gap-1.5 border-b px-4 py-3">
          <span className="bg-muted-foreground/30 size-2.5 rounded-full" />
          <span className="bg-muted-foreground/30 size-2.5 rounded-full" />
          <span className="bg-muted-foreground/30 size-2.5 rounded-full" />
        </div>

        {/* Body: gradient growth chart */}
        <div className="relative flex flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-xs">Monthly growth</span>
              <span className="text-2xl font-semibold tracking-tight">+128%</span>
            </div>
            <span className="from-brand to-brand-2 inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br text-white">
              <LineChart className="size-5" />
            </span>
          </div>

          <svg viewBox="0 0 320 120" className="h-28 w-full" aria-hidden>
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 100 L40 86 L80 92 L120 64 L160 70 L200 40 L240 48 L280 20 L320 8 L320 120 L0 120 Z"
              fill="url(#heroArea)"
            />
            <path
              d="M0 100 L40 86 L80 92 L120 64 L160 70 L200 40 L240 48 L280 20 L320 8"
              fill="none"
              stroke="var(--brand)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Revenue", value: "$48k" },
              { label: "Clients", value: "210" },
              { label: "Hires", value: "1.2k" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-border/60 bg-background/50 rounded-xl border p-2.5"
              >
                <p className="text-muted-foreground text-[10px]">{stat.label}</p>
                <p className="text-sm font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <FloatingChip
        className="-left-2 top-10 sm:left-2"
        icon={<Briefcase className="size-4" />}
        label="First job secured"
      />
      <FloatingChip
        className="-right-1 top-1/3 sm:right-0"
        icon={<ShoppingCart className="size-4" />}
        label="POS live"
      />
      <FloatingChip
        className="bottom-8 left-6"
        icon={<Code2 className="size-4" />}
        label="Custom build shipped"
      />
      <FloatingChip
        className="-bottom-1 right-8"
        icon={<Sparkles className="size-4" />}
        label="Brand launched"
      />
    </div>
  );
}

function FloatingChip({
  className,
  icon,
  label,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`border-border/70 bg-card/90 absolute flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur ${className}`}
    >
      <span className="text-brand">{icon}</span>
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}
