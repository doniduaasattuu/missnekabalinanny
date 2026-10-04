import { Head } from "@inertiajs/react";
import {
    Baby,
    Building2,
    Check,
    ChevronRight,
    Drama,
    Gem,
    Heart,
    Hotel,
    MapPin,
    Moon,
    Paintbrush,
    Sun,
    Waves,
    WavesLadder,
    type LucideIcon,
} from "lucide-react";

import type { Service, ServiceIcon } from "@/types/landing-page";

type ServicesPageProps = {
    services: Service[];
    whatsappUrl: string;
};

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
    sun: Sun,
    moon: Moon,
    heart: Heart,
    "map-pin": MapPin,
    hotel: Hotel,
    gem: Gem,
    drama: Drama,
    wavesladder: WavesLadder,
    paintbrush: Paintbrush,
    custom: Heart,
};

export default function ServicesIndex({
    services,
    whatsappUrl,
}: ServicesPageProps) {
    const activeServices = services.slice(0, 6);

    const getEnquiryUrl = (serviceTitle: string) => {
        const message = `Hello Miss Neka, I would like to enquire about your ${serviceTitle} service. Could you please share more details?`;
        const separator = whatsappUrl.includes("?") ? "&" : "?";

        return `${whatsappUrl}${separator}text=${encodeURIComponent(message)}`;
    };

    return (
        <>
            <Head title="Services" />

            <main className="min-h-screen bg-[#FBF3F5]">
                {/* Hero */}
                <section className="relative overflow-hidden px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-32 -top-24 size-96 rounded-full bg-pink-200/40 blur-[100px]"
                    />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-pink-600 sm:text-sm">
                                Our Services
                            </p>

                            <h1 className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                                Thoughtful care,
                                <span className="block text-pink-500">
                                    for every moment.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                                Flexible childcare for your family’s plans,
                                routines, and special moments in Bali.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-pink-500" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                                    Personal Care · Flexible Support · Happy
                                    Families
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section
                    aria-label="Childcare services"
                    className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            {activeServices.map((service) => {
                                const Icon =
                                    serviceIcons[service.icon] ??
                                    serviceIcons.custom;

                                return (
                                    <article
                                        key={service.id}
                                        className="group flex h-full flex-col rounded-3xl border border-[#F0E5E8] bg-white p-6 shadow-[0_2px_8px_rgba(41,37,36,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_16px_40px_rgba(41,37,36,0.08)] sm:p-7"
                                    >
                                        <div className="mb-6 flex size-11 items-center justify-center rounded-2xl bg-[#FBF0F3] text-pink-600 transition-colors duration-300 group-hover:bg-pink-100">
                                            <Icon
                                                className="size-5"
                                                strokeWidth={1.8}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <h2 className="font-serif text-2xl font-semibold leading-snug text-slate-900 sm:text-[1.4rem]">
                                            {service.title}
                                        </h2>

                                        {service.description && (
                                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                                {service.description}
                                            </p>
                                        )}

                                        <div className="my-5 h-px w-full bg-slate-100" />

                                        {service.features?.length > 0 && (
                                            <ul className="space-y-3">
                                                {service.features.map(
                                                    (feature, index) => (
                                                        <li
                                                            key={`${service.id}-${index}`}
                                                            className="flex items-start gap-3 text-sm leading-5 text-slate-700"
                                                        >
                                                            <Check
                                                                className="mt-0.5 size-4 shrink-0 text-pink-500"
                                                                strokeWidth={2}
                                                                aria-hidden="true"
                                                            />
                                                            <span>
                                                                {feature}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}

                                        <div className="mt-auto pt-8">
                                            <a
                                                href={getEnquiryUrl(
                                                    service.title,
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-semibold text-pink-600 transition-colors hover:text-pink-700"
                                            >
                                                Enquire about this service
                                                <ChevronRight
                                                    className="size-4 transition-transform group-hover:translate-x-1"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Enquiry CTA */}
                <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
                    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#292524] px-6 py-12 text-center sm:px-10 sm:py-16">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full bg-pink-500/15 blur-[80px]"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-pink-300/10 blur-[80px]"
                        />

                        <div className="relative mx-auto max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-pink-300">
                                Here to help
                            </p>

                            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#FFF9F5] sm:text-4xl">
                                Looking for the right care for your family?
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#D6CECA] sm:text-base">
                                Tell us about your plans, and we’ll be happy to
                                help you find a suitable childcare service.
                            </p>

                            <a
                                href={getEnquiryUrl("childcare")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-950/20 transition-all hover:-translate-y-0.5 hover:bg-pink-400"
                            >
                                Enquire via WhatsApp
                                <ChevronRight
                                    className="size-4"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
