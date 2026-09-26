import {
    Check,
    ChevronRight,
    Heart,
    MapPin,
    MessageCircle,
    Moon,
    Sparkles,
    Sun,
    type LucideIcon,
} from "lucide-react";

export type ServiceIcon = "sun" | "moon" | "heart" | "map-pin";

export type Service = {
    id: string | number;
    title: string;
    description: string;
    features: string[];
    icon: ServiceIcon;
};

export type ServicesBanner = {
    title: string;
    description: string;
};

export type ServicesSectionProps = {
    services?: Service[];
    whatsappUrl: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    banner?: ServicesBanner;
};

const iconMap: Record<ServiceIcon, LucideIcon> = {
    sun: Sun,
    moon: Moon,
    heart: Heart,
    "map-pin": MapPin,
};

const defaultServices: Service[] = [
    {
        id: 1,
        icon: "sun",
        title: "Full-Day Nanny",
        description:
            "Reliable daytime childcare designed around your family's holiday schedule.",
        features: [
            "Personalised daily routine",
            "Meals & snacks assistance",
            "Play & educational activities",
            "Outdoor supervision",
        ],
    },
    {
        id: 2,
        icon: "moon",
        title: "Night-Time Babysitting",
        description:
            "Enjoy a peaceful evening while your children remain safe, comfortable, and cared for.",
        features: [
            "Hotel & villa babysitting",
            "Bedtime routine",
            "Sleep supervision",
            "Flexible evening hours",
        ],
    },
    {
        id: 3,
        icon: "heart",
        title: "Event & Wedding Nanny",
        description:
            "Professional childcare support so parents can fully enjoy their special moments.",
        features: [
            "Wedding & event childcare",
            "Ceremony supervision",
            "Children's activities",
            "Dedicated one-on-one care",
        ],
    },
    {
        id: 4,
        icon: "map-pin",
        title: "Travel & Resort Companion",
        description:
            "A trusted childcare companion for families exploring Bali beyond the hotel.",
        features: [
            "Resort & villa support",
            "Family excursions",
            "Pool & beach supervision",
            "Flexible travel assistance",
        ],
    },
];

export default function ServicesSection({
    services = defaultServices,
    whatsappUrl,
    eyebrow = "Our Services",
    title = "Childcare designed around your Bali experience.",
    description = "Flexible, attentive and family-focused support wherever your Bali plans take you.",
    banner = {
        title: "A service standard built around your family.",
        description:
            "Tell us what your family needs, where you are staying and what your Bali plans look like. We will help find the right childcare arrangement.",
    },
}: ServicesSectionProps) {
    if (!services.length) {
        return null;
    }

    return (
        <section
            id="services"
            className="scroll-mt-20 bg-[#FDF2F4] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                        {eyebrow}
                    </p>

                    <h2
                        className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        {title}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-600">
                        {description}
                    </p>
                </div>

                {/* Service Cards */}
                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon];

                        return (
                            <article
                                key={service.id}
                                className="group flex h-full flex-col rounded-3xl border border-white bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-900/5"
                            >
                                {/* Icon */}
                                <div
                                    aria-hidden="true"
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF2F4] text-[#DB2777] transition-colors duration-300 group-hover:bg-[#DB2777] group-hover:text-white"
                                >
                                    <Icon className="h-5 w-5" />
                                </div>

                                {/* Content */}
                                <h3
                                    className="mt-6 text-2xl font-semibold text-[#111827]"
                                    style={{
                                        fontFamily:
                                            "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {service.description}
                                </p>

                                {/* Features */}
                                {service.features.length > 0 && (
                                    <div className="mt-5 flex-1 border-t border-gray-100 pt-5">
                                        <ul className="space-y-3">
                                            {service.features.map(
                                                (feature, index) => (
                                                    <li
                                                        key={`${service.id}-feature-${index}`}
                                                        className="flex items-start gap-2.5 text-xs font-medium leading-5 text-gray-700"
                                                    >
                                                        <Check
                                                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#DB2777]"
                                                            aria-hidden="true"
                                                        />

                                                        <span>{feature}</span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                )}

                                {/* Service CTA */}
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#DB2777] transition-colors hover:text-[#BE185D]"
                                    aria-label={`Enquire about ${service.title}`}
                                >
                                    Enquire about this service
                                    <ChevronRight
                                        className="h-3.5 w-3.5"
                                        aria-hidden="true"
                                    />
                                </a>
                            </article>
                        );
                    })}
                </div>

                {/* Information Banner */}
                <div className="mt-12 rounded-[1.75rem] bg-[#111827] p-7 text-white sm:p-9">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-4">
                            <div
                                aria-hidden="true"
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10"
                            >
                                <Sparkles className="h-5 w-5 text-pink-200" />
                            </div>

                            <div>
                                <h3
                                    className="text-xl font-semibold"
                                    style={{
                                        fontFamily:
                                            "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {banner.title}
                                </h3>

                                <p className="mt-1 max-w-2xl text-sm leading-6 text-white/65">
                                    {banner.description}
                                </p>
                            </div>
                        </div>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#111827] transition-colors hover:bg-[#FCE7F3] focus:outline-none focus:ring-2 focus:ring-pink-300"
                        >
                            <MessageCircle
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                            Ask About Availability
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
