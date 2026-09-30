import { Head, Link } from "@inertiajs/react";
import {
    ArrowRight,
    Heart,
    ShieldCheck,
    Sparkles,
    Users,
    MapPin,
    CheckCircle2,
} from "lucide-react";

import Navigation from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

type NavigationItem = {
    id: number;
    label: string;
    href: string;
};

type AboutFeature = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

type SocialLink = {
    id: number;
    platform: string;
    label: string;
    url: string;
};

type FooterService = {
    id: number;
    label: string;
    href: string;
};

type FooterContact = {
    whatsapp: string;
    whatsappUrl: string;
    email: string;
    location: string;
};

type AboutPageProps = {
    navigationLinks: NavigationItem[];
    whatsappUrl: string;
    aboutImage: string;
    aboutImageAlt: string;
    aboutFeatures: AboutFeature[];
    aboutSocialLinks: SocialLink[];
    aboutQuote: string;
    aboutQuoteAuthor: string;
    footerServices: FooterService[];
    footerSocialLinks: SocialLink[];
    footerContact: FooterContact;
    coverageAreas: string[];
};

const values = [
    {
        number: "01",
        icon: Heart,
        title: "Care with warmth",
        description:
            "Every child deserves to feel seen, respected, and cared for. We value patience, kindness, and genuine connection in every interaction.",
    },
    {
        number: "02",
        icon: ShieldCheck,
        title: "Safety comes first",
        description:
            "A family's trust is something we take seriously. We value safe practices, clear communication, and thoughtful attention to each child's needs.",
    },
    {
        number: "03",
        icon: Sparkles,
        title: "Meaningful moments",
        description:
            "From creative play to everyday discoveries, we want children to enjoy their time while feeling comfortable in a caring environment.",
    },
];

export default function About({
    navigationLinks,
    whatsappUrl,
    aboutImage,
    aboutImageAlt,
    aboutFeatures,
    aboutSocialLinks,
    aboutQuote,
    aboutQuoteAuthor,
    footerServices,
    footerSocialLinks,
    footerContact,
    coverageAreas,
}: AboutPageProps) {
    return (
        <>
            <Head title="About Us | Miss Neka Nanny Bali">
                <meta
                    name="description"
                    content="Get to know Miss Neka Nanny Bali and our approach to warm, attentive, and trustworthy childcare for families visiting Bali."
                />
            </Head>

            <Navigation />

            <main className="overflow-hidden bg-[#FFFCFA] text-[#252321]">
                {/* Hero */}
                <section className="relative px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-36">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                        <div className="max-w-2xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D98F9D]" />
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A66B77]">
                                    Our story
                                </p>
                            </div>

                            <h1 className="font-serif text-5xl leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                                A little more
                                <br />
                                <span className="italic text-[#C98290]">
                                    care, a lot more
                                </span>
                                <br />
                                peace of mind.
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-[#6F6A67] sm:text-lg">
                                We believe every family deserves to enjoy their
                                time in Bali while knowing their little ones are
                                in caring, attentive, and trusted hands.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#252321] px-6 text-sm font-semibold text-white transition hover:bg-[#C98290]"
                                >
                                    Get in touch
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                </a>

                                <Link
                                    href="/gallery"
                                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#E8DEDA] px-6 text-sm font-semibold text-[#383330] transition hover:border-[#C98290] hover:text-[#A66B77]"
                                >
                                    Explore our gallery
                                </Link>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#F6E8E8] sm:-right-7 sm:-top-7 sm:h-44 sm:w-44" />
                            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full border border-[#D9A2AA] sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />

                            <div className="relative aspect-4/4.5 overflow-hidden rounded-4xl sm:rounded-[2.5rem]">
                                <img
                                    src={aboutImage}
                                    alt={aboutImageAlt}
                                    className="h-full w-full object-cover"
                                    fetchPriority="high"
                                />
                            </div>

                            <div className="absolute -bottom-5 left-4 max-w-57.5 rounded-2xl border border-[#F0E6E2] bg-white/95 p-4 shadow-[0_15px_45px_rgba(47,35,31,0.09)] backdrop-blur sm:bottom-7 sm:-left-8 sm:max-w-65 sm:p-5">
                                <div className="mb-2 flex items-center gap-2 text-[#C98290]">
                                    <Heart className="size-4 fill-current" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                                        Our promise
                                    </span>
                                </div>
                                <p className="font-serif text-lg leading-snug text-[#302B28] sm:text-xl">
                                    Care that feels personal, wherever you are
                                    in Bali.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Intro / Founder */}
                <section className="bg-[#F8F0ED] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A66B77]">
                                A personal approach
                            </p>
                            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                                Meet
                                <br />
                                <span className="italic text-[#C98290]">
                                    Miss Neka
                                </span>
                            </h2>
                            <div className="mt-7 h-px w-16 bg-[#D9A2AA]" />
                            <p className="mt-6 max-w-sm text-sm leading-7 text-[#756C68]">
                                The person behind Miss Neka Nanny Bali. Building
                                trust with families, one thoughtful moment at a
                                time.
                            </p>
                        </div>

                        <div className="max-w-3xl">
                            <p className="font-serif text-2xl leading-relaxed text-[#38312E] sm:text-3xl">
                                “For me, childcare is about more than looking
                                after children. It is about helping families
                                feel comfortable, supported, and present during
                                their time together.”
                            </p>

                            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#6F6662]">
                                <p>
                                    Hello, I’m Neka, the founder of Miss Neka
                                    Nanny Bali. I created this service around a
                                    simple belief: when parents feel at ease
                                    about their children’s care, they can enjoy
                                    their time in Bali with greater peace of
                                    mind.
                                </p>

                                <p>
                                    Every family has its own rhythm, routines,
                                    and expectations. That is why we believe in
                                    taking time to understand each child and
                                    each family, rather than offering a
                                    one-size-fits-all experience. We want
                                    parents to feel heard, and children to feel
                                    safe, welcomed, and cared for.
                                </p>

                                <p>
                                    Miss Neka Nanny Bali brings together
                                    attentive childcare and a personal approach
                                    for families staying across Bali. Whether
                                    parents need support during the day, in the
                                    evening, at an event, or while exploring the
                                    island, our intention is to make the
                                    experience feel reassuring and thoughtfully
                                    arranged.
                                </p>
                            </div>

                            <div className="mt-9 flex items-center gap-4">
                                <div className="h-px w-10 bg-[#C98290]" />
                                <div>
                                    <p className="font-serif text-xl text-[#38312E]">
                                        Neka
                                    </p>
                                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8A7E79]">
                                        Founder, Miss Neka Nanny Bali
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A66B77]">
                                What matters to us
                            </p>
                            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                                Care in every
                                <span className="italic text-[#C98290]">
                                    {" "}
                                    little detail.
                                </span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#77706C] sm:text-base">
                                The experience we want to create is shaped by
                                the values we bring to every family and every
                                moment of care.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
                            {values.map((value) => {
                                const Icon = value.icon;

                                return (
                                    <article
                                        key={value.number}
                                        className="group rounded-[1.75rem] border border-[#EFE5E1] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E3C2C7] hover:shadow-[0_18px_55px_rgba(47,35,31,0.06)] sm:p-9"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F8EEEE] text-[#B87583] transition group-hover:bg-[#C98290] group-hover:text-white">
                                                <Icon className="size-5" />
                                            </div>
                                            <span className="font-serif text-sm italic text-[#C5B6B0]">
                                                {value.number}
                                            </span>
                                        </div>

                                        <h3 className="mt-8 font-serif text-2xl text-[#302B28]">
                                            {value.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-7 text-[#77706C]">
                                            {value.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Standards / Trust */}
                <section className="bg-[#292725] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E1AAB3]">
                                Your peace of mind
                            </p>
                            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                                Trust is built
                                <br />
                                through the
                                <span className="italic text-[#E1AAB3]">
                                    {" "}
                                    details.
                                </span>
                            </h2>
                            <p className="mt-6 max-w-lg text-sm leading-8 text-white/65 sm:text-base">
                                Welcoming someone into your family’s experience
                                is a personal decision. We aim to make that
                                decision easier through attentive communication,
                                thoughtful preparation, and clear expectations.
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-[#E1AAB3]"
                            >
                                Talk to us about your needs
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {aboutFeatures.map((feature: AboutFeature) => (
                                <div
                                    key={feature.id}
                                    className="rounded-2xl border border-white/10 bg-white/4 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
                                >
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#E1AAB3]/10 text-[#E1AAB3]">
                                        {feature.icon === "shield-check" ? (
                                            <ShieldCheck className="size-5" />
                                        ) : feature.icon === "heart" ? (
                                            <Heart className="size-5" />
                                        ) : feature.icon === "users" ? (
                                            <Users className="size-5" />
                                        ) : (
                                            <CheckCircle2 className="size-5" />
                                        )}
                                    </div>

                                    <h3 className="mt-5 font-serif text-xl">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-white/60">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service areas */}
                <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A66B77]">
                                Here for your family
                            </p>
                            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                                Wherever your
                                <br />
                                Bali story takes you.
                            </h2>
                            <p className="mt-6 max-w-xl text-sm leading-8 text-[#77706C] sm:text-base">
                                From a relaxed day by the beach to a special
                                evening out, we provide nanny services in
                                selected areas across Bali. Contact us to
                                discuss your location, schedule, and childcare
                                needs.
                            </p>

                            <div className="mt-8">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#F5E7E7] px-6 py-3.5 text-sm font-semibold text-[#85535D] transition hover:bg-[#EED5D9]"
                                >
                                    Check availability
                                    <ArrowRight className="size-4" />
                                </a>
                            </div>
                        </div>

                        <div className="rounded-4xl bg-[#F8F0ED] p-7 sm:p-10">
                            <div className="flex items-center gap-3">
                                <div className="flex size-11 items-center justify-center rounded-full bg-white text-[#B87583]">
                                    <MapPin className="size-5" />
                                </div>
                                <div>
                                    <p className="font-serif text-xl text-[#302B28]">
                                        Our service areas
                                    </p>
                                    <p className="mt-1 text-xs text-[#8A7E79]">
                                        Across Bali, Indonesia
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2.5">
                                {coverageAreas.map((area) => (
                                    <span
                                        key={area}
                                        className="rounded-full border border-[#E8D8D3] bg-white px-4 py-2.5 text-sm text-[#554C48]"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 border-t border-[#E8D8D3] pt-6">
                                <p className="text-sm leading-7 text-[#756C68]">
                                    Staying outside these areas? Send us a
                                    message and we can discuss your
                                    requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing quote */}
                <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32">
                    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#F6E9E8] px-7 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
                        <div className="pointer-events-none absolute -left-12 -top-16 size-48 rounded-full border border-[#E6C7CA] sm:size-64" />
                        <div className="pointer-events-none absolute -bottom-24 -right-8 size-56 rounded-full border border-[#E6C7CA] sm:size-72" />

                        <div className="relative mx-auto max-w-3xl">
                            <Heart className="mx-auto size-6 fill-[#C98290] text-[#C98290]" />
                            <p className="mt-7 font-serif text-3xl leading-snug tracking-[-0.02em] text-[#39312F] sm:text-4xl lg:text-5xl">
                                {aboutQuote}
                            </p>
                            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#A66B77]">
                                {aboutQuoteAuthor}
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#292725] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#C98290]"
                            >
                                Let’s talk
                                <ArrowRight className="size-4" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
