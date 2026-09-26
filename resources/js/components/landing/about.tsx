import { AboutFeature, AboutVideo, SocialLink } from "@/types/landing-page";
import {
    Check,
    Facebook,
    Heart,
    Instagram,
    PlayCircle,
    ShieldCheck,
    Users,
    Twitter,
    Youtube,
} from "lucide-react";
import AboutVideoSection from "./about-video";

export type AboutSectionProps = {
    image: string;
    imageAlt?: string;
    features: AboutFeature[];
    socialLinks: SocialLink[];
    eyebrow?: string;
    title?: string;
    highlightedWord?: string;
    paragraphs: string[];
    quote?: string;
    quoteAuthor?: string;
    video: AboutVideo;
};

const featureIconMap = {
    "shield-check": ShieldCheck,
    check: Check,
    heart: Heart,
    users: Users,
} as const;

const socialIconMap = {
    instagram: Instagram,
    facebook: Facebook,
    tiktok: PlayCircle,
    x: Twitter,
    youtube: Youtube,
} as const;

export default function AboutSection({
    image,
    imageAlt = "Family enjoying quality time in Bali",
    features,
    socialLinks,
    eyebrow = "About Miss Neka",
    title = "Caring for your children like they are",
    highlightedWord = "our own.",
    paragraphs,
    quote = "Care you can feel.",
    quoteAuthor = "The Miss Neka promise",

    video,
}: AboutSectionProps) {
    if (!paragraphs.length) {
        return null;
    }

    return (
        <section
            id="about"
            className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32 bg-white"
        >
            <div className="mx-auto max-w-7xl space-y-20">
                <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    {/* Content */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                            {eyebrow}
                        </p>

                        <h2
                            className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl"
                            style={{
                                fontFamily:
                                    "'Playfair Display', Georgia, serif",
                            }}
                        >
                            {title}{" "}
                            <span className="text-[#DB2777]">
                                {highlightedWord}
                            </span>
                        </h2>

                        <div className="mt-6 space-y-5">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={`${index}-${paragraph.slice(0, 20)}`}
                                    className="text-base leading-8 text-gray-600"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Features */}
                        {features.length > 0 && (
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {features.map((feature) => {
                                    const Icon = featureIconMap[feature.icon];

                                    return (
                                        <div
                                            key={feature.id}
                                            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                                        >
                                            <Icon
                                                className="h-5 w-5 text-[#DB2777]"
                                                aria-hidden="true"
                                            />

                                            <p className="mt-4 text-sm font-bold text-[#111827]">
                                                {feature.title}
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                {feature.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Social Media */}
                        {socialLinks.length > 0 && (
                            <div className="mt-9 flex flex-wrap items-center gap-3">
                                <span className="mr-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Follow us
                                </span>

                                {socialLinks.map((social) => {
                                    const Icon = socialIconMap[social.platform];

                                    return (
                                        <a
                                            key={social.id}
                                            href={social.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Follow us on ${social.label}`}
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777] transition-all hover:-translate-y-0.5 hover:bg-[#DB2777] hover:text-white"
                                        >
                                            <Icon
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute -right-4 -top-5 h-32 w-32 rounded-full bg-[#FDF2F4]"
                        />

                        <div className="relative overflow-hidden rounded-4xl">
                            <img
                                src={image}
                                alt={imageAlt}
                                loading="lazy"
                                className="aspect-4/5 w-full object-cover"
                            />
                        </div>

                        {/* Quote Card */}
                        <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-2xl backdrop-blur sm:left-8 sm:right-8">
                            <div className="flex items-center gap-4">
                                <div
                                    aria-hidden="true"
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777]"
                                >
                                    <Heart className="h-5 w-5 fill-current" />
                                </div>

                                <div>
                                    <p
                                        className="text-lg font-semibold text-[#111827]"
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', Georgia, serif",
                                        }}
                                    >
                                        "{quote}"
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        {quoteAuthor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <AboutVideoSection video={video} />
            </div>
        </section>
    );
}
