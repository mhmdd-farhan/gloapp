import {
  Briefcase,
  FileText,
  Globe,
  ShoppingCart,
  GraduationCap,
  Code2,
  Handshake,
  LayoutDashboard,
  Boxes,
  Users,
  LineChart,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Rocket,
  Headset,
  Layers,
  UserCheck,
  Contact,
  MessageSquare,
  Presentation,
  Search,
  Building2,
  Wallet,
  Share2,
  BadgeCheck,
  Zap,
  Lock,
  type LucideIcon,
} from "lucide-react";

/**
 * Registry that maps the string icon names used in `lib/content/*` to their
 * lucide components. Keeping it explicit makes content type-safe and lets the
 * bundler tree-shake unused icons.
 */
export const iconRegistry = {
  briefcase: Briefcase,
  "file-text": FileText,
  globe: Globe,
  "shopping-cart": ShoppingCart,
  "graduation-cap": GraduationCap,
  code: Code2,
  handshake: Handshake,
  dashboard: LayoutDashboard,
  boxes: Boxes,
  users: Users,
  "line-chart": LineChart,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  smartphone: Smartphone,
  rocket: Rocket,
  headset: Headset,
  layers: Layers,
  "user-check": UserCheck,
  linkedin: Contact,
  message: MessageSquare,
  presentation: Presentation,
  search: Search,
  building: Building2,
  wallet: Wallet,
  share: Share2,
  "badge-check": BadgeCheck,
  zap: Zap,
  lock: Lock,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconRegistry;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const LucideComp = iconRegistry[name];
  return <LucideComp className={className} aria-hidden="true" />;
}
