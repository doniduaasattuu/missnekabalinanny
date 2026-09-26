import {
    Check,
    Clock3,
    ShieldCheck,
    Users,
    type LucideIcon,
} from "lucide-react";

export type TrustBadgeIcon = "shield-check" | "check" | "clock" | "users";

export type TrustBadge = {
    id: string | number;
    value: string;
    label: string;
    icon: TrustBadgeIcon;
};

const iconMap = {
    "shield-check": ShieldCheck,
    check: Check,
    clock: Clock3,
    users: Users,
} as const;

export type TrustBadgesProps = {
    badges: TrustBadge[];
};

export default function TrustBadges({ badges }: TrustBadgesProps) {
    if (!badges.length) {
        return null;
    }

    return (
        <section
            aria-label="Why families trust Miss Neka Nanny Bali"
            className="relative z-20 border-b border-gray-100 bg-white"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-100 sm:grid-cols-4 sm:divide-y-0">
                {badges.map((badge: TrustBadge) => {
                    const Icon = iconMap[badge.icon];

                    return (
                        <div
                            key={badge.id}
                            className="flex items-center gap-3 px-5 py-6 sm:justify-center sm:px-8"
                        >
                            <span
                                aria-hidden="true"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777]"
                            >
                                <Icon className="h-5 w-5" strokeWidth={2} />
                            </span>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-bold text-[#111827]">
                                    {badge.value}
                                </p>

                                <p className="mt-0.5 text-[11px] font-medium text-gray-500">
                                    {badge.label}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
