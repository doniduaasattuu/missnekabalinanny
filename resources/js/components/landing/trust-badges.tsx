import { TrustBadge } from "@/types/landing-page";
import {
    BadgeCheck,
    Clock3,
    ShieldCheck,
    Users,
    SquareActivity,
    HeartHandshake,
    type LucideIcon,
} from "lucide-react";

const iconMap = {
    "shield-check": ShieldCheck,
    check: SquareActivity,
    clock: BadgeCheck,
    users: Users,
    "heart-handshake": HeartHandshake,
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
            <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-100 lg:grid-cols-4 lg:divide-y-0">
                {badges.map((badge: TrustBadge) => {
                    const Icon = iconMap[badge.icon];

                    return (
                        <div
                            key={badge.id}
                            className="flex items-center gap-3 sm:gap-5 px-5 py-9 sm:justify-center sm:px-8"
                        >
                            <span
                                aria-hidden="true"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777]"
                            >
                                <Icon className="h-5 w-5" strokeWidth={2} />
                            </span>

                            <div className="min-w-0">
                                <p className="truncate text-sm sm:text-base font-bold text-[#111827]">
                                    {badge.value}
                                </p>

                                <p className="mt-0.5 text-[11px] sm:text-sm font-medium text-gray-500">
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
